function Footer() {
  return (
    <footer className="site-footer">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <p>© 2026 Yashraj Barhate. Built with HTML, CSS, Bootstrap, React, and JavaScript.</p>
        <a href="#home" className="back-to-top" aria-label="Back to top" title="Back to top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>
        </a>
      </div>
    </footer>
  )
}

export default Footer
