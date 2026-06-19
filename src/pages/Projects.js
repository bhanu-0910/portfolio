const projects = [
  {
    title: "GalaxyRVA Website",
    period: "Mar 2026 – Present",
    status: "In active development",
    concept: "responsive layout system",
    description:
      "A real-world site I'm building and maintaining end to end — responsive, mobile-friendly layouts, improved navigation, and frontend performance work, all tracked through an iterative Git workflow.",
    points: [
      "Designing responsive, mobile-friendly layouts across devices",
      "Debugging and applying frontend optimization for load performance",
      "Iterative development with Git/GitHub version control",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Git", "VS Code", "Cursor"],
    link: "https://github.com/bhanu-0910",
  },
  {
    title: "Restaurant Menu Webpage",
    period: "Mar 2025 – Apr 2025",
    status: "Completed",
    concept: "persistent state machine",
    description:
      "A responsive restaurant menu with interactive UI: a favorites system backed by persistent offline storage, and item state that updates live as the user interacts with the page.",
    points: [
      "Toggleable 'Add to Favorites / Remove Favorite' actions",
      "State-aware item styling — e.g. greying out unavailable items",
      "Clean, reusable frontend structure built for usability first",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/bhanu-0910",
  },
  {
    title: "Super Tic Tac Toe",
    period: "Apr 2025 – May 2025",
    status: "Completed",
    concept: "nested board logic",
    description:
      "An advanced Tic Tac Toe variant where every cell holds its own sub-board. Object-oriented design keeps the nested win-condition logic modular and the game state easy to reason about.",
    points: [
      "Nested-board architecture using object-oriented principles",
      "Win-condition algorithms across both local and global boards",
      "Interactive gameplay loop sharpening debugging skills",
    ],
    stack: ["Java"],
    link: "https://github.com/bhanu-0910",
  },
];

function Projects() {
  return (
    <>
      <section className="hero hero-compact">
        <p className="eyebrow">Selected work</p>
        <h1 className="hero-name">Projects</h1>
        <p className="hero-summary">
          Three projects, three different shapes of logic — a layout system in
          production, a state machine behind a menu, and nested win conditions
          inside a board game.
        </p>
      </section>

      <section className="block">
        <div className="project-list">
          {projects.map((p) => (
            <article className="project-card" key={p.title}>
              <div className="project-card-head">
                <span className="project-concept">{p.concept}</span>
                <span className={`project-status ${p.status === "Completed" ? "is-done" : "is-active"}`}>
                  {p.status}
                </span>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-period">{p.period}</p>
              <p className="project-description">{p.description}</p>
              <ul className="project-points">
                {p.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="tag-row">
                {p.stack.map((s) => (
                  <span className="tag tag-mono" key={s}>
                    {s}
                  </span>
                ))}
              </div>
              <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                View code →
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
