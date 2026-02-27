const form = document.getElementById("downloadForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const url = document.querySelector("input[name='url']").value;

    const res = await fetch("https://xdownloader-sf0e.onrender.com/api/download", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ url })
    });

    if (!res.ok) {
        alert("Download failed");
        return;
    }

    const blob = await res.blob();
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "video.mp4";
    a.click();
});
