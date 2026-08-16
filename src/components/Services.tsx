const data = [
  {
    title: "UI/UX Design",
    body: "From wireframes to polished Figma prototypes...",
  },
  { title: "Frontend Dev", body: "Production-grade code with Tailwind CSS..." },
  { title: "Landing Pages", body: "High-converting pages for SaaS, apps..." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-6">
        {/* heading markup unchanged */}
        <div className="grid md:grid-cols-3 gap-6">
          {data.map((item, i) => (
            <article key={item.title} className={`reveal d${i + 1} card-h ...`}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
