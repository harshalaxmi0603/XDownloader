const form = document.getElementById("downloadForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const url = document.querySelector("input[name='url']").value.trim();

    if (!url) {
        alert("Paste link first");
        return;
    }

    // 🔵 Instagram → client-side
    if (url.includes("instagram.com")) {
        window.open(`https://snapinsta.to/action.php?url=${encodeURIComponent(url)}`, "_blank");
        return;
    }

    // 🔵 Facebook → client-side
    if (url.includes("facebook.com")) {
        window.open(`https://fdown.net/download.php?URL=${encodeURIComponent(url)}`, "_blank");
        return;
    }

    // 🔵 YouTube → your backend (Render)
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
        const response = await fetch("https://xdownloader-sf0e.onrender.com/api/download", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url, format: "mp4_hd" })
        });

        if (!response.ok) {
            alert("Download failed");
            return;
        }

        const blob = await response.blob();
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "video.mp4";
        a.click();
        return;
    }

    alert("Platform not supported yet");
});

