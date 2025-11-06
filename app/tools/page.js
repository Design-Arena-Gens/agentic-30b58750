export const metadata = { title: 'Tools | How to Use AI' };

export default function Tools() {
  return (
    <section className="stack-xl">
      <h1>Tools</h1>
      <div className="grid">
        <div className="card">
          <h3>Chat Assistants</h3>
          <p>General reasoning, drafting, brainstorming, code hints.</p>
        </div>
        <div className="card">
          <h3>Code Copilots</h3>
          <p>Inline suggestions, refactors, test generation, docstrings.</p>
        </div>
        <div className="card">
          <h3>Retrieval QA</h3>
          <p>Ask questions over your documents; ideal for knowledge bases.</p>
        </div>
        <div className="card">
          <h3>Image & Audio</h3>
          <p>Illustrations, diagrams, voice notes, meeting summaries.</p>
        </div>
      </div>
    </section>
  );
}
