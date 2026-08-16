const experience = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2023 - 2026",
    description: [
      "Delivered a production-ready iOS release “Pelli” using React Native, designed for hairstylists to share client treatment insights by working closely with a professional stylist to define features and UX priorities.",
      "Led full-stack development, rapidly prototyping with Expo and migrating from Firebase to Supabase to support structured data and use scalable backend architecture as the app evolved.",
    ],
    technologies: [
      "Expo",
      "TypeScript",
      "React Native",
      "PostgresSQL",
      "Supabase",
    ],
  },
  {
    role: "Software Enginner",
    company: "Aquatik",
    period: "2022",
    description: [
      "Spearheaded modernization efforts of legacy PHP/WordPress infrastructure, contributing to a reimagined, responsive website experience.",
      "Introduced and began implementing React.js components to transition the frontend toward a more dynamic, component-based architecture.",
      "Collaborated with internal teams to align UI/UX enhancements with business goals and modern design trends.",
      "Contributed to early-stage planning and prototyping for migration from on-premises servers to a more scalable and maintainable platform.",
    ],
    technologies: ["React", "Wordpress", "PHP"],
  },
  {
    role: "Software Engineer",
    company: "Inceptus Cybersecurity",
    period: "2022",
    description: [
      "Designed and developed a centralized vendor dashboard to unify data across multiple cybersecurity sub-vendors, enhancing internal visibility and partner integration.",
      "Operated in a fast-paced startup environment, rapidly learning and applying emerging technologies to meet evolving project needs.",
      "Acted as a key contributor to backend and frontend workflows, with a focus on data pipeline visualization and UX clarity.",
      "Maintained close collaboration with the founding team, offering technical insights on scalability and maintainability in early product development cycles.",
    ],
    technologies: ["React", "Internal Dashboards"],
  },
  /* 
    21st Century Technology
    IT Technician
    Estero, FL

    In this role I worked as one half of a two-man team in which I scheduled appointments with clients to troubleshoot computer issues, everything from help in using an unfamiliar program to Operating System installations, data recovery, use lessons, to installing a home doorbell & camera system. Appointments with clients were solo one-on-one jobs, interpreting a layperson's distress into actionable IT solutions. I was laid off from this position due to the start of the COVID-19 pandemic whhen work dried up.


    Gartner, Inc
    Master Data Management Intern
    Stamford, CT
    During the summer of 2019 (May to August) I worked at the Gartner Headquarters in Stamford, CT 30 minutes from New York City. Here I worked as part of a team where we managed database connections and curated the data that we would query from multiple sources, creating health checks on our data. Here I developed an automated process for querying databases and summarizing that data output as a mass email to the other members of our department providing them a snapshot of how the accounts we manage were performing and which accounts (out of more than 750,000 managed accounts) may have needed further attention (e.g. if account details were only partially filled in or had duplicate entries). We used this data as a basis for creating a browser-accessible report (dashboard) in Microsoft Power BI.


    Florida Gulf Coast University
    Camp Counselor
    Estero, FL
    I worked as both a tutor & Learning Assistant for other students during the semester and a camp counselor during the summer at FGCU. As an LA I assisted students with comprehending course material in real-time, grading assignments for classes with 30-50 students. Courses included: Introduction to Computer Science & Introduction to Programming. During the summer of 2017 I worked as a camp counselor for the Coding Academy, STEM Academy, and Mathletes camps.
  */
];

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
                data-aos="flip-right"
                data-aos-delay={index * 100}
                data-aos-anchor-placement="top-center"
                key={index}
                className="relative grid md:grid-cols-2 gap-8"
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
