function sendToTelegram() {
    const url = document.getElementById("videoUrl").value.trim();

    if (!url) {
        alert("Paste video link first");
        return;
    }

    const bot = "XDownloaderHelperBot";

    // encode link safely
    const encoded = encodeURIComponent(url);

    const telegramLink = `https://t.me/${bot}?start=${encoded}`;

    // redirect to Telegram
    window.location.href = telegramLink;
}
