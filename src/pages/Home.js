const education = [
  {
    school: "IIT Madras",
    detail: "Online Degree Program — Data Science & Applications",
    period: "May 2025 – Present",
    score: "CGPA 7.0 / 10",
  },
  {
    school: "Mahindra University",
    detail: "B.Tech, Artificial Intelligence",
    period: "May 2023 – Present",
    score: "GPA 6.68 / 10",
  },
  {
    school: "Sri Chaitanya Junior College",
    detail: "Intermediate",
    period: "Completed May 2023",
    score: "95.6%",
  },
];

const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "Java", "JavaScript", "C", "HTML", "CSS"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "VS Code", "Cursor", "Google Colab", "Jupyter Notebook", "Canva"],
  },
  {
    label: "Web",
    items: ["Responsive Design", "DOM Manipulation", "UI/UX Implementation"],
  },
  {
    label: "Strengths",
    items: ["Problem Solving", "Debugging", "Object-Oriented Design", "Collaboration"],
  },
];

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <p className="eyebrow">B.Tech Artificial Intelligence · Mahindra University</p>
        <h1 className="hero-name">Vadla Bhanu Prakash</h1>
        <p className="hero-role">
          building structured, interactive web applications
          <span className="cursor-blink" aria-hidden="true" />
        </p>
        <p className="hero-summary">
          I build responsive interfaces and the logic underneath them — from a Tic
          Tac Toe variant with nested win conditions to a live community website in
          active development. Comfortable across the stack: HTML/CSS/JS on the
          surface, Java and Python for the structures that hold it together.
        </p>
        <div className="hero-links">
          <a href="https://github.com/bhanu-0910" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bhanu-prakash-vadla"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:vbhanu0910@gmail.com">vbhanu0910@gmail.com</a>
        </div>
      </section>

      <section className="block">
        <h2 className="block-title">
          Award
        </h2>
        <div className="award-card">
          <span className="award-medal" aria-hidden="true">
            🏆
          </span>
          <div>
            <p className="award-name">Google AI Student of the Year — 2nd Place</p>
            <p className="award-year">2025</p>
          </div>
        </div>
      </section>

      <section className="block">
        <h2 className="block-title">
          Education
        </h2>
        <ol className="timeline">
          {education.map((e) => (
            <li className="timeline-item" key={e.school}>
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-content">
                <p className="timeline-school">{e.school}</p>
                <p className="timeline-detail">{e.detail}</p>
                <p className="timeline-meta">
                  {e.period} <span className="dot">·</span> {e.score}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="block">
        <h2 className="block-title">
          Coursework
        </h2>
        <p className="coursework-line">
          Object-Oriented Programming · Data Structures &amp; Algorithms · Discrete
          Math · Linear Algebra · Calculus · Physics · Probability &amp; Statistics
        </p>
      </section>

      <section className="block">
        <h2 className="block-title">
          Skills
        </h2>
        <div className="skills-grid">
          {skillGroups.map((g) => (
            <div className="skill-group" key={g.label}>
              <p className="skill-label">{g.label}</p>
              <div className="tag-row">
                {g.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="block">
        <h2 className="block-title">
          Off-screen
        </h2>
        <p className="coursework-line">Reading Books · Coding · Cricket · Badminton</p>
      </section>
    </>
  );
}

export default Home;
