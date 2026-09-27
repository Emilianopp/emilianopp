import "styles/Home/About.scss";

const Link = ({ href, children }) => (
  <a href={href} className="about-href" target="_blank" rel="noopener noreferrer">{children}</a>
);

function About() {
  return (
    <div className="about-body">
      <div className="about-text">
        <p className="about-lead">
          Hey, I'm Emiliano, a PhD student at Mila-Quebec/Universit&eacute; de Montr&eacute;al,
          working under the supervision of <Link href="http://www.cs.toronto.edu/~lcharlin/">Laurent Charlin</Link>.
        </p>
        <p>
          My work focuses on long-horizon LLM post-training (RL/Distillation) applied to tool-using
          domains (e.g. computer use, coding, service tasks). I am also broadly interested in leveraging
          the unique properties of language models to design better algorithms
          (e.g. <Link href="https://arxiv.org/abs/2602.04942">Privileged Information Distillation</Link>) and
          improve user alignment (e.g. <Link href="https://arxiv.org/abs/2410.19302">TEARS</Link>).
        </p>
        <p className="about-aside">
          My free time is mostly consumed by a good <Link href="https://www.goodreads.com/user/show/157603205-emiliano-penaloza">book</Link> and
          training for my next <Link href="https://youtu.be/wCxhuR65iW0">powerlifting</Link> meet.
        </p>
      </div>

      <div className="about-cards">
      <section className="about-card">
      <h2 className="about-card-title">Experience</h2>
      <dl className="about-facts">
        <div className="about-fact">
          <dt>Now</dt>
          <dd>
            Student Researcher at <strong>Google DeepMind</strong>, working
            with <Link href="https://scholar.google.com/citations?user=MV7LPnEAAAAJ&hl=en">Arian Hosseini</Link>.
          </dd>
        </div>
        <div className="about-fact">
          <dt>Before</dt>
          <dd>
            <ul className="about-history">
              <li>
                Intern at <strong>Microsoft Research</strong>, working on post-training for coding agents
                with <Link href="https://scholar.google.com/citations?user=DJon7w4AAAAJ&hl=en">Alessandro Sordoni</Link> and <Link href="https://scholar.google.com/citations?user=fuvIITUAAAAJ&hl=en">Lucas Caccia</Link>.
              </li>
              <li>
                Visiting researcher at <strong>ServiceNow</strong> Montreal, working on LLM reasoning for agentic
                tasks with <Link href="https://optimass.github.io/">Massimo Caccia</Link>.
              </li>
            </ul>
          </dd>
        </div>
      </dl>
      </section>

      <section className="about-card">
      <h2 className="about-card-title">Education</h2>
      <dl className="about-facts">
        <div className="about-fact">
          <dt>Now</dt>
          <dd>
            <strong>PhD, Computer Science</strong>
            <span className="about-fact-sub">Mila-Quebec / Universit&eacute; de Montr&eacute;al</span>
            <span className="about-fact-with">
              Supervised by <Link href="http://www.cs.toronto.edu/~lcharlin/">Laurent Charlin</Link>
            </span>
          </dd>
        </div>
        <div className="about-fact">
          <dt>2023</dt>
          <dd>
            <strong>MMath, Statistics</strong>
            <span className="about-fact-sub">University of Waterloo</span>
            <span className="about-fact-with">
              Supervised by <Link href="https://scholar.google.com/citations?user=uMRnzL0AAAAJ&hl=en">Nathaniel Stevens</Link>
            </span>
          </dd>
        </div>
        <div className="about-fact">
          <dt>2022</dt>
          <dd>
            <strong>Honours Data Science</strong>
            <span className="about-fact-sub">Western University</span>
            <span className="about-fact-with">
              Research with <Link href="https://scholar.google.com/citations?user=mR2FtsAAAAAJ&hl=en">Cristi&aacute;n Bravo</Link> and <Link href="https://scholar.google.com/citations?user=SbaFWY4AAAAJ&hl=en">Camila de Souza</Link> (NSERC USRA)
            </span>
          </dd>
        </div>
      </dl>
      </section>
      </div>
    </div>
  );
}

export default About;
