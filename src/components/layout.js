import * as React from "react"
import "./layout.css"

const Layout = ({ children, isFullWidth = false }) => {
  return (
    <>
      <div
        style={{
          margin: "0 auto",
          maxWidth: isFullWidth ? "100%" : "var(--size-content)",
          padding: isFullWidth ? "0" : "var(--size-gutter)",
        }}
      >
        <main>{children}</main>
        {!isFullWidth && (
          <footer
            style={{
              marginTop: `var(--space-5)`,
              fontSize: `var(--font-sm)`,
              color: "#888",
            }}
          >
            © {new Date().getFullYear()} · Built for AWS AI learners
          </footer>
        )}
      </div>
    </>
  )
}

export default Layout
