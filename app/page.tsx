export default function Home() {
  return (
    <main>
      <header
        style={{
          background: "#0057B8",
          color: "white",
          padding: "20px",
        }}
      >
        <h1>🇬🇷 Water Polo Greece</h1>
        <p>Official Water Polo Greece Website</p>
      </header>

      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
          background: "#f5f8fc",
        }}
      >
        <h2>Welcome</h2>

        <p>
          Welcome to the official Water Polo Greece website.
        </p>

        <button
          style={{
            background: "#0057B8",
            color: "white",
            border: "none",
            padding: "15px 30px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          Latest News
        </button>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          padding: "40px",
        }}
      >
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <h3>National Teams</h3>
          <p>Follow Greece's Men's and Women's national teams.</p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <h3>Championships</h3>
          <p>Fixtures, standings and results.</p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <h3>Latest News</h3>
          <p>Read the newest announcements and articles.</p>
        </div>
      </section>

      <footer
        style={{
          background: "#0057B8",
          color: "white",
          textAlign: "center",
          padding: "25px",
        }}
      >
        © 2026 Water Polo Greece
      </footer>
    </main>
  );
}
