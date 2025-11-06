export const metadata = { title: 'Prompt Patterns | How to Use AI' };

const Pattern = ({ title, children }) => (
  <div className="pattern">
    <h3>{title}</h3>
    {children}
  </div>
);

export default function Prompts() {
  return (
    <section className="stack-xl">
      <h1>Prompt Patterns</h1>

      <Pattern title="Role + Goal + Constraints">
        <pre className="code">
{`You are a security analyst.
Goal: Draft a 1-page incident report.
Constraints: bullet points, neutral tone, cite assumptions.
Inputs: [paste logs / timeline here].`}
        </pre>
      </Pattern>

      <Pattern title="Critique then Create">
        <pre className="code">
{`First: Critique this draft for clarity and gaps.
Then: Produce a revised version addressing the issues.`}
        </pre>
      </Pattern>

      <Pattern title="Options + Rationale">
        <pre className="code">
{`Give 3 options with tradeoffs.
For each: 2 pros, 2 cons, and when to choose.`}
        </pre>
      </Pattern>

      <Pattern title="Test-Driven Code">
        <pre className="code">
{`Write failing tests for the described behavior.
Then write the minimal implementation to pass them.
Return a single diff.`}
        </pre>
      </Pattern>
    </section>
  );
}
