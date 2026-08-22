import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
            Professional
          </p>
          <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
            Experience
          </h2>
        </div>

        {/* <div className="grid md:grid-cols-3 gap-6">
          {experience.map((item, i) => (
            <article key={item.title} className={`reveal d${i + 1} card-h ...`}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div> */}

        <div className="relative mt-14">
          <div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b 
                     from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 
                      shadow-[0_0_25px_rgba(32,178,166,0.8)]"
          />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <div
                // TODO: Check out what other options exist
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-anchor-placement="top-center"
                key={index}
                className="relative grid md:grid-cols-2 gap-8"
                // className={`relative grid md:grid-cols-2 gap-8
                //             reveal d${index + 1}`}
              >
                <div
                  className="absolute left-0 md:left-1/2 top-0 w-3 h-3 z-10
                  rounded-full -translate-x-1/2 ring-4
                bg-primary  ring-background"
                >
                  {/* TODO These have different srtting aside from ping too */}
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>
                </div>

                {/* content */}
                <div
                  className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div className="p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <span className="text-primary text-sm font-medium">
                      {item.period}
                    </span>

                    <h3 className="text-xl font-semibold mt-2">{item.role}</h3>
                    <p className="text-zinc-500">{item.company}</p>
                    <ul className="list-disc list-outside pl-4 marker:text-primary/0">
                      {item.description.map((bulletPoint, index) => (
                        <li
                          key={index}
                          className="text-sm 
                                    mt-4 
                                    text-zinc-600 
                                    dark:text-zinc-300
                                    hover:bg-primary/20 cursor-pointer p-2 rounded-2xl
                                    transition-all duration-200 border border-accent/20"
                        >
                          {bulletPoint}
                        </li>
                      ))}
                    </ul>

                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {item.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 rounded-full
                                     text-xs 
                                   bg-accent-light text-zinc-900  
                                   dark:bg-accent dark:text-zinc-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
