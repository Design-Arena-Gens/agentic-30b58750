export const metadata = { title: 'Guides | How to Use AI' };

export default function Guides() {
  return (
    <section className="stack-xl">
      <h1>Guides</h1>

      <article className="prose">
        <h2>Research with Confidence</h2>
        <ol>
          <li>Ask for an outline first. Then deepen sections with sources.</li>
          <li>Request citations with URLs. Sample 2?3 alternative sources.</li>
          <li>Cross-check facts using a non-AI search engine or known databases.</li>
        </ol>
      </article>

      <article className="prose">
        <h2>Write Clearly, Faster</h2>
        <ol>
          <li>Start with a brief: audience, tone, purpose, length.</li>
          <li>Ask for a structured draft. Then iterate on voice and specifics.</li>
          <li>Use 
            <code>shorten</code>, <code>expand</code>, <code>rephrase</code>, and <code>compare</code> loops to refine.
          </li>
        </ol>
      </article>

      <article className="prose">
        <h2>Code with Guardrails</h2>
        <ol>
          <li>Describe the problem, constraints, input/output, and environment.</li>
          <li>Ask for minimal reproducible examples and unit tests.</li>
          <li>Run code locally; treat outputs as drafts until tests pass.</li>
        </ol>
      </article>
    </section>
  );
}
