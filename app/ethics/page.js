export const metadata = { title: 'Ethics & Safety | How to Use AI' };

export default function Ethics() {
  return (
    <section className="stack-xl">
      <h1>Ethics & Safety</h1>
      <div className="prose">
        <h2>Key Risks</h2>
        <ul>
          <li>Hallucinations: fabricated facts and citations.</li>
          <li>Bias: harmful stereotypes and uneven error rates.</li>
          <li>Privacy: sensitive data exposure and retention.</li>
          <li>Security: prompt injection, data exfiltration.</li>
        </ul>

        <h2>Mitigations</h2>
        <ul>
          <li>Verify claims with trusted sources; add uncertainty notes.</li>
          <li>Use diverse datasets and reviewers; measure outcomes.</li>
          <li>Minimize inputs; redact PII; follow data policies.</li>
          <li>Sandbox tools; validate outputs; follow least-privilege.</li>
        </ul>
      </div>
    </section>
  );
}
