export default function Home() {
  return (
    <section className="stack-xl">
      <h1>How to Use AI</h1>
      <p className="muted">A concise, practical handbook to get real-world value from AI?safely and ethically.</p>

      <div className="grid">
        <a className="card" href="/guides">
          <h3>Guides ?</h3>
          <p>Step-by-step playbooks for research, coding, writing, brainstorming, and more.</p>
        </a>
        <a className="card" href="/prompts">
          <h3>Prompt Patterns ?</h3>
          <p>Reusable templates that consistently produce strong results.</p>
        </a>
        <a className="card" href="/tools">
          <h3>Tools ?</h3>
          <p>Carefully selected AI tools you can trust and when to use them.</p>
        </a>
        <a className="card" href="/ethics">
          <h3>Ethics & Safety ?</h3>
          <p>Bias, hallucinations, privacy, security, and responsible use.</p>
        </a>
      </div>

      <section className="stack">
        <h2>Quick Start</h2>
        <ol className="list">
          <li><strong>Define success</strong>: Write 1?2 sentences of the exact outcome you want.</li>
          <li><strong>Choose a pattern</strong>: Pick a prompt structure that fits your task.</li>
          <li><strong>Iterate fast</strong>: Give feedback, add constraints, and ask for options.</li>
          <li><strong>Verify</strong>: Check sources, run tests, and spot-check numbers.</li>
        </ol>
      </section>
    </section>
  );
}
