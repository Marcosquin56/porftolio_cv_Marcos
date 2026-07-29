const impact = [
  {
    number: "01",
    label: "Modernización de sistemas",
    title: "Llevé un flujo de trabajo local a la nube",
    description:
      "Lideré la migración de una herramienta interna de VBScript a JavaScript, eliminando la dependencia de instalaciones locales de Windows y facilitando su acceso.",
    metric: "+60%",
    metricLabel: "crecimiento de usuarios",
    detail: "de 50 a 80 personas",
    tags: ["JavaScript", "Migración a la nube", "Gestión del cambio"],
  },
  {
    number: "02",
    label: "Automatización de procesos",
    title: "Convertí tareas repetitivas de SAP en un flujo confiable",
    description:
      "Automaticé la carga recurrente de reportes y facturas en SAP y Excel con Selenium, y amplié el flujo para responder a distintos tipos de solicitudes.",
    metric: "1-2h",
    metricLabel: "ahorradas por ejecución",
    detail: "varias ejecuciones cada semana",
    tags: ["Python", "Selenium", "SAP", "Excel"],
  },
  {
    number: "03",
    label: "Soporte de producto",
    title: "Mantuve en marcha herramientas críticas para el negocio",
    description:
      "Doy soporte, mantengo y mejoro un portafolio de herramientas internas en PHP y MySQL, convirtiendo solicitudes de ServiceNow en soluciones y funciones confiables.",
    metric: "250+",
    metricLabel: "usuarios semanales",
    detail: "en aproximadamente 10 herramientas",
    tags: ["PHP", "MySQL", "ServiceNow", "Git"],
  },
];

const skills = [
  {
    title: "Desarrollar",
    items: ["JavaScript", "PHP", "Python", "Java", "HTML", "CSS"],
  },
  {
    title: "Automatizar",
    items: ["Selenium", "Integración con SAP", "Flujos de Excel", "Bots en Python"],
  },
  {
    title: "Operar",
    items: ["MySQL", "Git", "Azure DevOps", "ServiceNow", "Linux"],
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Saltar al contenido
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Marcos Quintana, inicio">
          <span className="brand-mark" aria-hidden="true">
            MQ
          </span>
          <span>Marcos Quintana</span>
        </a>
        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#work">Impacto</a>
          <a href="#projects">Proyectos</a>
          <a href="#experience">Experiencia</a>
          <a href="#skills">Habilidades</a>
        </nav>
        <a className="header-cta" href="mailto:marcosnoob27@gmail.com">
          Conversemos
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
              Desarrollador full-stack · Asunción, Paraguay
            </p>
            <h1>
              Convierto flujos
              <br />
              lentos en
              <br />
              <span>herramientas confiables.</span>
            </h1>
            <div className="hero-bottom">
              <p className="hero-intro">
                Desarrollo y mantengo herramientas empresariales con JavaScript,
                PHP y Python, y automatizo el trabajo repetitivo que las rodea.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  Ver mi impacto
                  <span aria-hidden="true">↓</span>
                </a>
                <a
                  className="button button-ghost"
                  href="mailto:marcosnoob27@gmail.com"
                >
                  Escribirme
                </a>
              </div>
            </div>
          </div>

          <aside className="hero-card" aria-label="Resumen profesional">
            <div className="hero-card-top">
              <span>Enfoque actual</span>
              <span aria-hidden="true">↗</span>
            </div>
            <p>Automatización de procesos de negocio en Nestlé Business Services</p>
            <div className="hero-card-meta">
              <span>2023—Actualidad</span>
              <span>Inglés B2</span>
            </div>
          </aside>
        </section>

        <section className="signal-strip" aria-label="Resultados destacados">
          <div>
            <strong>250+</strong>
            <span>usuarios semanales atendidos</span>
          </div>
          <div>
            <strong>~10</strong>
            <span>herramientas internas mantenidas</span>
          </div>
          <div>
            <strong>&lt;24h</strong>
            <span>tiempo de resolución de soporte</span>
          </div>
          <div>
            <strong>1-2h</strong>
            <span>ahorradas por ejecución automatizada</span>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading">
            <p className="section-kicker">Impacto seleccionado</p>
            <h2>Problemas reales. Mejoras medibles.</h2>
            <p>
              El trabajo interno no siempre puede mostrarse públicamente. Por
              eso, estos casos se enfocan en el desafío, el enfoque y el
              resultado.
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
                  <ul className="tag-list" aria-label="Tecnologías utilizadas">
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

        <section className="section projects-section" id="projects">
          <a
            className="project-cover-card"
            href="https://marcosquin56.github.io/opsflow/"
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir el proyecto OpsFlow"
          >
            <img src="/opsflow-cover.png" alt="Panel principal de OpsFlow" />
            <div className="project-cover-overlay">
              <h2>OpsFlow</h2>
              <span>
                Ver proyecto
                <span aria-hidden="true">↗</span>
              </span>
            </div>
          </a>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-heading compact">
            <p className="section-kicker">Experiencia</p>
            <h2>Desarrollo cerca de las necesidades del negocio.</h2>
          </div>

          <div className="experience-layout">
            <div className="experience-role">
              <p className="experience-date">2023—Actualidad</p>
              <h3>Desarrollador Full Stack</h3>
              <p className="experience-company">
                Nestlé Business Services · Automatización de Procesos de Negocio
              </p>
            </div>
            <div className="experience-details">
              <p>
                Trabajo en desarrollo, mantenimiento, soporte y modernización,
                ocupándome de los problemas desde la solicitud inicial hasta la
                entrega y el seguimiento.
              </p>
              <ul>
                <li>
                  Mantengo aplicaciones PHP y MySQL utilizadas en operaciones
                  diarias.
                </li>
                <li>
                  Doy soporte a bots de Python para envío de correos, extracción
                  de datos y generación de facturas.
                </li>
                <li>
                  Colaboro en el retiro de herramientas heredadas y en la
                  migración de procesos a plataformas modernas.
                </li>
                <li>
                  Gestiono ramas de desarrollo y control de versiones con Git y
                  Azure DevOps.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading compact">
            <p className="section-kicker">Herramientas</p>
            <h2>El código solo es útil cuando mejora el trabajo.</h2>
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
            <p className="section-kicker">Formación</p>
            <h2>Aprendizaje que avanza junto con la experiencia.</h2>
          </div>
          <div className="education-list">
            <article>
              <p>2022—Actualidad</p>
              <div>
                <h3>Licenciatura en Análisis de Sistemas</h3>
                <span>Universidad Americana · En curso</span>
              </div>
            </article>
            <article>
              <p>2023—2024</p>
              <div>
                <h3>Tecnicatura en Tecnología de la Información</h3>
                <span>Nestlé MOPA Dual · Programa de formación dual</span>
              </div>
            </article>
            <article>
              <p>2019—2021</p>
              <div>
                <h3>Bachiller Técnico en Informática</h3>
                <span>
                  Centro Educativo Departamental Miguela Rodríguez Araujo
                </span>
              </div>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="section-kicker">Iniciemos una conversación</p>
            <h2>
              ¿Buscas a alguien que conecte
              <br />
              el código con el proceso?
            </h2>
          </div>
          <div className="contact-side">
            <p>
              Me interesan el software bien pensado, la automatización útil y
              los equipos que buscan simplificar el trabajo.
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
        <span>Desarrollo full-stack · Automatización de procesos</span>
        <a href="#top">Volver arriba ↑</a>
      </footer>
    </>
  );
}
const impact = [
  {
    number: "01",
    label: "Modernización de sistemas",
    title: "Llevé un flujo de trabajo local a la nube",
    description:
      "Lideré la migración de una herramienta interna de VBScript a JavaScript, eliminando la dependencia de instalaciones locales de Windows y facilitando su acceso.",
    metric: "+60%",
    metricLabel: "crecimiento de usuarios",
    detail: "de 50 a 80 personas",
    tags: ["JavaScript", "Migración a la nube", "Gestión del cambio"],
  },
  {
    number: "02",
    label: "Automatización de procesos",
    title: "Convertí tareas repetitivas de SAP en un flujo confiable",
    description:
      "Automaticé la carga recurrente de reportes y facturas en SAP y Excel con Selenium, y amplié el flujo para responder a distintos tipos de solicitudes.",
    metric: "1-2h",
    metricLabel: "ahorradas por ejecución",
    detail: "varias ejecuciones cada semana",
    tags: ["Python", "Selenium", "SAP", "Excel"],
  },
  {
    number: "03",
    label: "Soporte de producto",
    title: "Mantuve en marcha herramientas críticas para el negocio",
    description:
      "Doy soporte, mantengo y mejoro un portafolio de herramientas internas en PHP y MySQL, convirtiendo solicitudes de ServiceNow en soluciones y funciones confiables.",
    metric: "250+",
    metricLabel: "usuarios semanales",
    detail: "en aproximadamente 10 herramientas",
    tags: ["PHP", "MySQL", "ServiceNow", "Git"],
  },
];

const skills = [
  {
    title: "Desarrollar",
    items: ["JavaScript", "PHP", "Python", "Java", "HTML", "CSS"],
  },
  {
    title: "Automatizar",
    items: ["Selenium", "Integración con SAP", "Flujos de Excel", "Bots en Python"],
  },
  {
    title: "Operar",
    items: ["MySQL", "Git", "Azure DevOps", "ServiceNow", "Linux"],
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Saltar al contenido
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Marcos Quintana, inicio">
          <span className="brand-mark" aria-hidden="true">
            MQ
          </span>
          <span>Marcos Quintana</span>
        </a>
        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#work">Impacto</a>
          <a href="#projects">Proyectos</a>
          <a href="#experience">Experiencia</a>
          <a href="#skills">Habilidades</a>
        </nav>
        <a className="header-cta" href="mailto:marcosnoob27@gmail.com">
          Conversemos
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
              Desarrollador full-stack · Asunción, Paraguay
            </p>
            <h1>
              Convierto flujos
              <br />
              lentos en
              <br />
              <span>herramientas confiables.</span>
            </h1>
            <div className="hero-bottom">
              <p className="hero-intro">
                Desarrollo y mantengo herramientas empresariales con JavaScript,
                PHP y Python, y automatizo el trabajo repetitivo que las rodea.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  Ver mi impacto
                  <span aria-hidden="true">↓</span>
                </a>
                <a
                  className="button button-ghost"
                  href="mailto:marcosnoob27@gmail.com"
                >
                  Escribirme
                </a>
              </div>
            </div>
          </div>

          <aside className="hero-card" aria-label="Resumen profesional">
            <div className="hero-card-top">
              <span>Enfoque actual</span>
              <span aria-hidden="true">↗</span>
            </div>
            <p>Automatización de procesos de negocio en Nestlé Business Services</p>
            <div className="hero-card-meta">
              <span>2023—Actualidad</span>
              <span>Inglés B2</span>
            </div>
          </aside>
        </section>

        <section className="signal-strip" aria-label="Resultados destacados">
          <div>
            <strong>250+</strong>
            <span>usuarios semanales atendidos</span>
          </div>
          <div>
            <strong>~10</strong>
            <span>herramientas internas mantenidas</span>
          </div>
          <div>
            <strong>&lt;24h</strong>
            <span>tiempo de resolución de soporte</span>
          </div>
          <div>
            <strong>1-2h</strong>
            <span>ahorradas por ejecución automatizada</span>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading">
            <p className="section-kicker">Impacto seleccionado</p>
            <h2>Problemas reales. Mejoras medibles.</h2>
            <p>
              El trabajo interno no siempre puede mostrarse públicamente. Por
              eso, estos casos se enfocan en el desafío, el enfoque y el
              resultado.
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
                  <ul className="tag-list" aria-label="Tecnologías utilizadas">
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

        <section className="section projects-section" id="projects">
          <div className="section-heading compact">
            <p className="section-kicker">Proyecto propio</p>
            <h2>Una idea convertida en un producto que se puede explorar.</h2>
          </div>

          <article className="project-showcase">
            <div className="project-copy">
              <p className="project-badge">Demo interactiva · Gestión operativa</p>
              <h3>OpsFlow</h3>
              <p>
                Aplicación web para centralizar solicitudes, ordenar prioridades,
                asignar responsables y seguir el trabajo de un equipo desde un
                panel claro y rápido.
              </p>
              <ul className="project-tags" aria-label="Tecnologías del proyecto">
                <li>React</li>
                <li>TypeScript</li>
                <li>Vite</li>
                <li>CSS</li>
                <li>GitHub Pages</li>
              </ul>
              <div className="project-actions">
                <a
                  className="button button-project"
                  href="https://marcosquin56.github.io/opsflow/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver demo
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="project-code-link"
                  href="https://github.com/Marcosquin56/opsflow"
                  target="_blank"
                  rel="noreferrer"
                >
                  Explorar código
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div
              className="project-preview"
              aria-label="Vista conceptual del panel de OpsFlow"
            >
              <div className="preview-topbar">
                <div>
                  <span className="preview-logo">O</span>
                  <strong>OpsFlow</strong>
                </div>
                <span className="preview-status">Demo activa</span>
              </div>
              <div className="preview-heading">
                <span>Resumen operativo</span>
                <strong>Todo el trabajo, en un solo lugar.</strong>
              </div>
              <div className="preview-metrics">
                <div>
                  <span>Abiertas</span>
                  <strong>12</strong>
                </div>
                <div>
                  <span>En progreso</span>
                  <strong>08</strong>
                </div>
                <div>
                  <span>Resueltas</span>
                  <strong>24</strong>
                </div>
              </div>
              <div className="preview-list">
                <div>
                  <span className="priority-dot critical" />
                  <p>
                    <strong>Error al generar facturas</strong>
                    <small>Incidente · En análisis</small>
                  </p>
                  <span>LB</span>
                </div>
                <div>
                  <span className="priority-dot high" />
                  <p>
                    <strong>Automatizar reporte mensual</strong>
                    <small>Automatización · En progreso</small>
                  </p>
                  <span>MQ</span>
                </div>
                <div>
                  <span className="priority-dot normal" />
                  <p>
                    <strong>Actualizar acceso del equipo</strong>
                    <small>Solicitud · Nuevo</small>
                  </p>
                  <span>AR</span>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-heading compact">
            <p className="section-kicker">Experiencia</p>
            <h2>Desarrollo cerca de las necesidades del negocio.</h2>
          </div>

          <div className="experience-layout">
            <div className="experience-role">
              <p className="experience-date">2023—Actualidad</p>
              <h3>Desarrollador Full Stack</h3>
              <p className="experience-company">
                Nestlé Business Services · Automatización de Procesos de Negocio
              </p>
            </div>
            <div className="experience-details">
              <p>
                Trabajo en desarrollo, mantenimiento, soporte y modernización,
                ocupándome de los problemas desde la solicitud inicial hasta la
                entrega y el seguimiento.
              </p>
              <ul>
                <li>
                  Mantengo aplicaciones PHP y MySQL utilizadas en operaciones
                  diarias.
                </li>
                <li>
                  Doy soporte a bots de Python para envío de correos, extracción
                  de datos y generación de facturas.
                </li>
                <li>
                  Colaboro en el retiro de herramientas heredadas y en la
                  migración de procesos a plataformas modernas.
                </li>
                <li>
                  Gestiono ramas de desarrollo y control de versiones con Git y
                  Azure DevOps.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading compact">
            <p className="section-kicker">Herramientas</p>
            <h2>El código solo es útil cuando mejora el trabajo.</h2>
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
            <p className="section-kicker">Formación</p>
            <h2>Aprendizaje que avanza junto con la experiencia.</h2>
          </div>
          <div className="education-list">
            <article>
              <p>2022—Actualidad</p>
              <div>
                <h3>Licenciatura en Análisis de Sistemas</h3>
                <span>Universidad Americana · En curso</span>
              </div>
            </article>
            <article>
              <p>2023—2024</p>
              <div>
                <h3>Tecnicatura en Tecnología de la Información</h3>
                <span>Nestlé MOPA Dual · Programa de formación dual</span>
              </div>
            </article>
            <article>
              <p>2019—2021</p>
              <div>
                <h3>Bachiller Técnico en Informática</h3>
                <span>
                  Centro Educativo Departamental Miguela Rodríguez Araujo
                </span>
              </div>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="section-kicker">Iniciemos una conversación</p>
            <h2>
              ¿Buscas a alguien que conecte
              <br />
              el código con el proceso?
            </h2>
          </div>
          <div className="contact-side">
            <p>
              Me interesan el software bien pensado, la automatización útil y
              los equipos que buscan simplificar el trabajo.
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
        <span>Desarrollo full-stack · Automatización de procesos</span>
        <a href="#top">Volver arriba ↑</a>
      </footer>
    </>
  );
}
const impact = [
  {
    number: "01",
    label: "Modernización de sistemas",
    title: "Llevé un flujo de trabajo local a la nube",
    description:
      "Lideré la migración de una herramienta interna de VBScript a JavaScript, eliminando la dependencia de instalaciones locales de Windows y facilitando su acceso.",
    metric: "+60%",
    metricLabel: "crecimiento de usuarios",
    detail: "de 50 a 80 personas",
    tags: ["JavaScript", "Migración a la nube", "Gestión del cambio"],
  },
  {
    number: "02",
    label: "Automatización de procesos",
    title: "Convertí tareas repetitivas de SAP en un flujo confiable",
    description:
      "Automaticé la carga recurrente de reportes y facturas en SAP y Excel con Selenium, y amplié el flujo para responder a distintos tipos de solicitudes.",
    metric: "1-2h",
    metricLabel: "ahorradas por ejecución",
    detail: "varias ejecuciones cada semana",
    tags: ["Python", "Selenium", "SAP", "Excel"],
  },
  {
    number: "03",
    label: "Soporte de producto",
    title: "Mantuve en marcha herramientas críticas para el negocio",
    description:
      "Doy soporte, mantengo y mejoro un portafolio de herramientas internas en PHP y MySQL, convirtiendo solicitudes de ServiceNow en soluciones y funciones confiables.",
    metric: "250+",
    metricLabel: "usuarios semanales",
    detail: "en aproximadamente 10 herramientas",
    tags: ["PHP", "MySQL", "ServiceNow", "Git"],
  },
];

const skills = [
  {
    title: "Desarrollar",
    items: ["JavaScript", "PHP", "Python", "Java", "HTML", "CSS"],
  },
  {
    title: "Automatizar",
    items: ["Selenium", "Integración con SAP", "Flujos de Excel", "Bots en Python"],
  },
  {
    title: "Operar",
    items: ["MySQL", "Git", "Azure DevOps", "ServiceNow", "Linux"],
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Saltar al contenido
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Marcos Quintana, inicio">
          <span className="brand-mark" aria-hidden="true">
            MQ
          </span>
          <span>Marcos Quintana</span>
        </a>
        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#work">Impacto</a>
          <a href="#experience">Experiencia</a>
          <a href="#skills">Habilidades</a>
        </nav>
        <a className="header-cta" href="mailto:marcosnoob27@gmail.com">
          Conversemos
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
              Desarrollador full-stack · Asunción, Paraguay
            </p>
            <h1>
              Convierto flujos
              <br />
              lentos en
              <br />
              <span>herramientas confiables.</span>
            </h1>
            <div className="hero-bottom">
              <p className="hero-intro">
                Desarrollo y mantengo herramientas empresariales con JavaScript,
                PHP y Python, y automatizo el trabajo repetitivo que las rodea.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  Ver mi impacto
                  <span aria-hidden="true">↓</span>
                </a>
                <a
                  className="button button-ghost"
                  href="mailto:marcosnoob27@gmail.com"
                >
                  Escribirme
                </a>
              </div>
            </div>
          </div>

          <aside className="hero-card" aria-label="Resumen profesional">
            <div className="hero-card-top">
              <span>Enfoque actual</span>
              <span aria-hidden="true">↗</span>
            </div>
            <p>Automatización de procesos de negocio en Nestlé Business Services</p>
            <div className="hero-card-meta">
              <span>2023—Actualidad</span>
              <span>Inglés B2</span>
            </div>
          </aside>
        </section>

        <section className="signal-strip" aria-label="Resultados destacados">
          <div>
            <strong>250+</strong>
            <span>usuarios semanales atendidos</span>
          </div>
          <div>
            <strong>~10</strong>
            <span>herramientas internas mantenidas</span>
          </div>
          <div>
            <strong>&lt;24h</strong>
            <span>tiempo de resolución de soporte</span>
          </div>
          <div>
            <strong>1-2h</strong>
            <span>ahorradas por ejecución automatizada</span>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading">
            <p className="section-kicker">Impacto seleccionado</p>
            <h2>Problemas reales. Mejoras medibles.</h2>
            <p>
              El trabajo interno no siempre puede mostrarse públicamente. Por
              eso, estos casos se enfocan en el desafío, el enfoque y el
              resultado.
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
                  <ul className="tag-list" aria-label="Tecnologías utilizadas">
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
            <p className="section-kicker">Experiencia</p>
            <h2>Desarrollo cerca de las necesidades del negocio.</h2>
          </div>

          <div className="experience-layout">
            <div className="experience-role">
              <p className="experience-date">2023—Actualidad</p>
              <h3>Desarrollador Full Stack</h3>
              <p className="experience-company">
                Nestlé Business Services · Automatización de Procesos de Negocio
              </p>
            </div>
            <div className="experience-details">
              <p>
                Trabajo en desarrollo, mantenimiento, soporte y modernización,
                ocupándome de los problemas desde la solicitud inicial hasta la
                entrega y el seguimiento.
              </p>
              <ul>
                <li>
                  Mantengo aplicaciones PHP y MySQL utilizadas en operaciones
                  diarias.
                </li>
                <li>
                  Doy soporte a bots de Python para envío de correos, extracción
                  de datos y generación de facturas.
                </li>
                <li>
                  Colaboro en el retiro de herramientas heredadas y en la
                  migración de procesos a plataformas modernas.
                </li>
                <li>
                  Gestiono ramas de desarrollo y control de versiones con Git y
                  Azure DevOps.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading compact">
            <p className="section-kicker">Herramientas</p>
            <h2>El código solo es útil cuando mejora el trabajo.</h2>
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
            <p className="section-kicker">Formación</p>
            <h2>Aprendizaje que avanza junto con la experiencia.</h2>
          </div>
          <div className="education-list">
            <article>
              <p>2022—Actualidad</p>
              <div>
                <h3>Licenciatura en Análisis de Sistemas</h3>
                <span>Universidad Americana · En curso</span>
              </div>
            </article>
            <article>
              <p>2023—2024</p>
              <div>
                <h3>Tecnicatura en Tecnología de la Información</h3>
                <span>Nestlé MOPA Dual · Programa de formación dual</span>
              </div>
            </article>
            <article>
              <p>2019—2021</p>
              <div>
                <h3>Bachiller Técnico en Informática</h3>
                <span>
                  Centro Educativo Departamental Miguela Rodríguez Araujo
                </span>
              </div>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="section-kicker">Iniciemos una conversación</p>
            <h2>
              ¿Buscas a alguien que conecte
              <br />
              el código con el proceso?
            </h2>
          </div>
          <div className="contact-side">
            <p>
              Me interesan el software bien pensado, la automatización útil y
              los equipos que buscan simplificar el trabajo.
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
        <span>Desarrollo full-stack · Automatización de procesos</span>
        <a href="#top">Volver arriba ↑</a>
      </footer>
    </>
  );
}
