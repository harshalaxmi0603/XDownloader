// header_footer.js

function createHeader() {
    return `
        <header>
            <div class="header-content">
                <div class="logo">
                    <a href="index.html">XDownloader</a>
                </div>
                <nav>
                    <a href="index.html">Dashboard</a>
                    <a href="douyin.html">Douyin</a>
                    <a href="tiktok.html">TikTok</a>
                    <a href="about.html">About Us</a>
                </nav>
            </div>
        </header>
    `;
}

function createFooter() {
    return `
        <footer>
            <div class="footer-content">
                <div class="footer-section">
                    <h4>XDownloader Tools</h4>
                    <a href="douyin.html">Douyin Downloader</a>
                    <a href="tiktok.html">TikTok Downloader</a>
                    <a href="instagram.html">Instagram Downloader</a>
                    <a href="youtube.html">YouTube Downloader</a>
                </div>
                <div class="footer-section">
                    <h4>Resources</h4>
                    <a href="#">Frequently Asked Questions</a>
                    <a href="#">How to Use</a>
                    <a href="#">Video Editing Course</a>
                    <a href="#">Cloud Services</a>
                </div>
                <div class="footer-section">
                    <h4>Legal & Contact</h4>
                    <a href="terms.html">Terms of Service</a>
                    <a href="privacy.html">Privacy Policy</a>
                    <a href="contact.html">Contact Us</a>
                </div>
                <div class="love-message">
                    Made with Love & Code ❤️ XDownloader &copy; 2025
                </div>
            </div>
        </footer>
    `;
}

// Inject the header and footer into the body
document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('afterbegin', createHeader());
    document.body.insertAdjacentHTML('beforeend', createFooter());
});