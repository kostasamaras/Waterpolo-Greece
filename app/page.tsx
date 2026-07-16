export default function Home() {
  return (
    <>
      <header>
        <div className="container">
          <h1>🇬🇷 Water Polo Greece</h1>

          <nav>
            <a href="#">Home</a>
            <a href="#">News</a>
            <a href="#">Fixtures</a>
            <a href="#">Results</a>
            <a href="#">Teams</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h2>Official Water Polo Greece Website</h2>

          <p>
            Follow the latest news, fixtures, results,
            standings and everything about Greek Water Polo.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="card">
            <h2>Latest News</h2>
            <p>News articles will appear here.</p>
          </div>

          <div className="card">
            <h2>Upcoming Fixtures</h2>
            <p>Upcoming matches will appear here.</p>
          </div>

          <div className="card">
            <h2>Latest Results</h2>
            <p>Recent match results will appear here.</p>
          </div>

        </div>
      </section>

      <footer>
        <p>© 2026 Water Polo Greece. All rights reserved.</p>
      </footer>
    </>
  );
}
