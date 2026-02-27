document.getElementById("downloadForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const url = document.getElementById("insta-url").value;
    const format = document.getElementById("format").value;

    if (!url) {
        alert("Please paste a valid Instagram link");
        return;
    }

    // 👉 Replace this with YOUR Render backend URL
    const API_URL = "https://YOUR-RENDER-APP.onrender.com/api/download";

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url, format })
        });

        if (!response.ok) {
            alert("Failed to download media.");
            return;
        }

        // Convert to file
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);

        // Extract filename
        const contentDisposition = response.headers.get("Content-Disposition");
        let filename = "download.mp4";

        if (contentDisposition && contentDisposition.includes("filename=")) {
            filename = contentDisposition.split("filename=")[1].replace(/"/g, "");
        }

        // Trigger download
        const a = document.createElement("a");
        a.href = downloadUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();

        window.URL.revokeObjectURL(downloadUrl);

    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong. Try again later.");
    }
});
