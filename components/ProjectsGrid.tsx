import { projects } from "@/data/projects";

export default function ProjectsGrid() {
  return (
    <section id="projects" className="section py-16">
      <h2 className="text-3xl font-semibold">Selected Projects</h2>
      <p className="text-gray-700 mt-2 mb-8">
        A few case studies that show how I work—problem → process → measurable outcome.
      </p>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="card p-5 hover:shadow-md transition">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-gray-700">{p.blurb}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map(t => (
                <span key={t} className="text-xs px-2 py-1 rounded-full border border-gray-300">
                  {t}
                </span>
              ))}
            </div>
            {p.link && (
              <a href={p.link} className="mt-4 inline-block text-sm underline">
                Read more
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
