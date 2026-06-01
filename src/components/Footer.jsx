function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="socials">
        <a href="https://github.com/BibiZharaAbdulShukoor">GitHub</a>
        <a href="https://www.linkedin.com/in/bibi-zhara-abdul-shukoor-a60072305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
          LinkedIn
        </a>
        <a href="https://twitter.com/">Twitter</a>
      </div>

      <p>© {new Date().getFullYear()} Bibi Zhara Abdul Shukoor</p>
    </footer>
  );
}

export default Footer;
