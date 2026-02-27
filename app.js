const form = document.getElementById("downloadForm");

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const platform = form.dataset.platform;
        const url = form.querySelector("input[name='url']").value.trim();
        const format = form.querySelector("#format").value;

        if (!url) {
            alert("Paste link first");
            return;
        }

        // 🔥 Special popup for Douyin
        if (platform === "douyin") {
            alert("🚀 Initiating download process for Douyin...");
        }

        const API_URL = "https://xdownloader-sf0e.onrender.com/api/download";

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url, format, platform })
            });

            if (!response.ok) {
                const err = await response.json();
                alert("Failed: " + err.message);
                return;
            }

            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = downloadUrl;
            a.download = "douyin-video.mp4";
            document.body.appendChild(a);
            a.click();
            a.remove();

            window.URL.revokeObjectURL(downloadUrl);

        } catch (err) {
            alert("Server error");
            console.error(err);
        }
    });
}
