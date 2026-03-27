import "./divider.css";

export default function Divider() {
  const skills = [
    'JavaScript', 'TypeScript', 'Java', 'Python',
    'React', 'HTML/CSS', 'MySQL', 'Git'
  ]

  return (
  <section>
    <div className="divider-container">
      <h2 className="divider-title">EXPERTISE</h2>

      <div className="divider-content">
        <h3>I speak fluently in <span className="text-color">code</span> and human.</h3>
        <p>
          I turn ideas into interfaces and designs into production code. I like my components reusable, 
          my APIs predictable, and my commits meaningful.
        </p>
      </div>

      <div className="divider-content second">
        {skills.map((tech) => (
          <div key={tech} className="tech-skills">
            {tech.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}
