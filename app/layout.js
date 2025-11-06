import './globals.css';

export const metadata = {
  title: 'How to Use AI',
  description: 'A practical, ethical guide to getting value from AI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site">
          <header className="header">
            <a className="brand" href="/">?? How to Use AI</a>
            <nav className="nav">
              <a href="/guides">Guides</a>
              <a href="/prompts">Prompts</a>
              <a href="/tools">Tools</a>
              <a href="/ethics">Ethics</a>
            </nav>
          </header>
          <main className="main">{children}</main>
          <footer className="footer">
            <p>? {new Date().getFullYear()} How to Use AI</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
