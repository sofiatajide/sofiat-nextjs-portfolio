export default function About() {
  return (
    <section id="about" className="section py-16">
      <h2 className="text-3xl font-semibold">About</h2>
      <div className="mt-4 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <p className="text-gray-700 leading-relaxed">
            I bridge product, analytics, and operations. Recent work spans
            system risk assessment (with The New York Times), civic-tech dashboards
            at Hack for LA, and ESG-focused product concepts. I care about
            shipping useful things, measuring impact, and communicating clearly.
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            <li>NYU MS, Management of Technology (3.9/4.0)</li>
            <li>Capstone: System Vulnerabilities Impact Assessment</li>
            <li>Tools: SQL, Python, R, Tableau, Power BI, Jira</li>
          </ul>
        </div>
        <aside className="card p-4">
          <h3 className="font-semibold">Highlights</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>• Built dashboards used by volunteers & PMs</li>
            <li>• PRDs and data schemas for ESG/AI concepts</li>
            <li>• Teaching & mentoring experience</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
