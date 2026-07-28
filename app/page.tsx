const impact = [
  {
    number: "01",
    label: "Legacy modernization",
    title: "Moved a local workflow to the cloud",
    description:
      "Led the migration of an internal tool from VBScript to JavaScript, removing its dependency on local Windows installations and making it easier to access.",
    metric: "+60%",
    metricLabel: "user growth",
    detail: "50 to 80 people",
    tags: ["JavaScript", "Cloud migration", "Change management"],
  },
  {
    number: "02",
    label: "Process automation",
    title: "Turned repetitive SAP work into a repeatable flow",
    description:
      "Automated recurring report and invoice uploads across SAP and Excel with Selenium, then extended the workflow to respond to different request types.",
    metric: "1-2h",
    metricLabel: "saved per run",
    detail: "several runs each week",
    tags: ["Python", "Selenium", "SAP", "Excel"],
  },
  {
    number: "03",
    label: "Product support",
    title: "Kept business-critical tools moving",
    description:
      "Support, maintain, and improve a portfolio of internal PHP and MySQL tools, translating ServiceNow requests into dependable fixes and features.",
    metric: "250+",
    metricLabel: "weekly users",
    detail: "across approximately 10 tools",
    tags: ["PHP", "MySQL", "ServiceNow", "Git"],
  },
];

const skills = [
  {
    title: "Build",
    items: ["JavaScript", "PHP", "Python", "Java", "HTML", "CSS"],
  },
  {
    title: "Automate",
    items: ["Selenium", "SAP integration", "Excel workflows", "Python bots"],
  },
  {
    title: "Operate",
    items: ["MySQL", "Git", "Azure DevOps", "ServiceNow", "Linux"],
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Marcos Quintana, home">
          <span className="brand-mark" aria-hidden="true">
            MQ
          </span>
          <span>Marcos Quintana</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">Impact</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
        </nav>
        <a className="header-cta" href="mailto:marcosnoob27@gmail.com">
          Let&apos;s talk
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />

          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              Full-stack developer · Asunción, Paraguay
            </p>
            <h1>
              I turn slow
              <br />
              workflows into
              <br />
              <span>reliable tools.</span>
            </h1>
            <div className="hero-bottom">
              <p className="hero-intro">
                I build and support business tools with JavaScript, PHP, and
                Python—then automate the repetitive work around them.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  Explore my impact
                  <span aria-hidden="true">↓</span>
                </a>
                <a
                  className="button button-ghost"
                  href="mailto:marcosnoob27@gmail.com"
                >
                  Email me
                </a>
              </div>
            </div>
          </div>

          <aside className="hero-card" aria-label="Professional snapshot">
            <div className="hero-card-top">
              <span>Current focus</span>
              <span aria-hidden="true">↗</span>
            </div>
            <p>Business process automation at Nestlé Business Services</p>
            <div className="hero-card-meta">
              <span>2023—Now</span>
              <span>English B2</span>
            </div>
          </aside>
        </section>

        <section className="signal-strip" aria-label="Key results">
          <div>
            <strong>250+</strong>
            <span>weekly users supported</span>
          </div>
          <div>
            <strong>~10</strong>
            <span>internal tools maintained</span>
          </div>
          <div>
            <strong>&lt;24h</strong>
            <span>support resolution time</span>
          </div>
          <div>
            <strong>1-2h</strong>
            <span>saved per automated run</span>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading">
            <p className="section-kicker">Selected impact</p>
            <h2>Real problems. Measurable improvements.</h2>
            <p>
              Internal work often cannot be shown publicly, so these case
              studies focus on the challenge, the approach, and the result.
            </p>
          </div>

          <div className="impact-list">
            {impact.map((item) => (
              <article className="impact-card" key={item.number}>
                <div className="impact-index">
                  <span>{item.number}</span>
                  <span>{item.label}</span>
                </div>
                <div className="impact-copy">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ul className="tag-list" aria-label="Technologies used">
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
                <div className="impact-metric">
                  <strong>{item.metric}</strong>
                  <span>{item.metricLabel}</span>
                  <small>{item.detail}</small>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-heading compact">
            <p className="section-kicker">Experience</p>
            <h2>Building close to the business.</h2>
          </div>

          <div className="experience-layout">
            <div className="experience-role">
              <p className="experience-date">2023—Present</p>
              <h3>Full Stack Developer</h3>
              <p className="experience-company">
                Nestlé Business Services · Business Process Automation
              </p>
            </div>
            <div className="experience-details">
              <p>
                I work across development, maintenance, support, and
                modernization—owning problems from the initial request through
                delivery and follow-up.
              </p>
              <ul>
                <li>
                  Maintain PHP and MySQL applications used in day-to-day
                  operations.
                </li>
                <li>
                  Support Python bots for email delivery, data extraction, and
                  invoice generation.
                </li>
                <li>
                  Contribute to decommissioning legacy tools and moving
                  workflows to modern platforms.
                </li>
                <li>
                  Manage development branches and version control with Git and
                  Azure DevOps.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading compact">
            <p className="section-kicker">Toolkit</p>
            <h2>Code is only useful when it improves the work.</h2>
          </div>
          <div className="skills-grid">
            {skills.map((group, index) => (
              <article className="skill-group" key={group.title}>
                <span className="skill-number">0{index + 1}</span>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section">
          <div className="section-heading compact">
            <p className="section-kicker">Learning</p>
            <h2>Education that runs alongside the work.</h2>
          </div>
          <div className="education-list">
            <article>
              <p>2022—Present</p>
              <div>
                <h3>Bachelor&apos;s Degree in Systems Analysis</h3>
                <span>Universidad Americana · In progress</span>
              </div>
            </article>
            <article>
              <p>2023—2024</p>
              <div>
                <h3>Technical Degree in Information Technology</h3>
                <span>Nestlé MOPA Dual · Work-study program</span>
              </div>
            </article>
            <article>
              <p>2019—2021</p>
              <div>
                <h3>Technical High School Diploma in IT</h3>
                <span>
                  Centro Educativo Departamental Miguela Rodríguez Araujo
                </span>
              </div>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="section-kicker">Start a conversation</p>
            <h2>
              Need someone who can connect
              <br />
              the code to the process?
            </h2>
          </div>
          <div className="contact-side">
            <p>
              I&apos;m interested in thoughtful software, useful automation,
              and teams that care about making work simpler.
            </p>
            <a href="mailto:marcosnoob27@gmail.com">
              marcosnoob27@gmail.com
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Marcos Quintana</span>
        <span>Full-stack development · Process automation</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
