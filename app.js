const form = document.getElementById("downloadForm");

if (form) {
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        // get platform name automatically
        const platform = form.dataset.platform;

        // find input inside this form (works for any page)
        const urlInput = form.querySelector("input[name='url']");
        const format = form.querySelector("#format").value;

        const url = urlInput.value.trim();

        if (!url) {
            alert("Please paste a valid link");
            return;
        }

        // 🔥 put your real backend here
        const API_URL = "https://xdownloader-sf0e.onrender.com/api/download";

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url, format, platform })
            });

            if (!response.ok) {
                alert("Download failed.");
                return;
            }

            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = downloadUrl;
            a.download = "download";
            document.body.appendChild(a);
            a.click();
            a.remove();

            window.URL.revokeObjectURL(downloadUrl);

        } catch (error) {
            console.error(error);
            alert("Server error. Try again.");
        }
    });
}
