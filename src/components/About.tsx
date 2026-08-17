// TODO: Potentially consolidate into About AND Skills

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-10">
        <div className="mb-14">
          <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
            About me
          </p>
          <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
            About me
          </h2>
        </div>

        <div className="grid md:grid-cols-1 gap-6 text-left md:text-justify">
          <p className="reveal d2">
            After earning my B.A. in 2015, I discovered a passion for technology
            that led me back to school to study Math and Computer Science.
            There, I found I.T. and software development to be deeply engaging
            fields that allowed me to combine creativity with problem-solving. I
            was fortunate to land an internship with Gartner, where I gained
            valuable experience in data analysis, followed by another internship
            as an I.T. Technician—an opportunity that evolved into full-time
            employment I truly enjoyed. Unfortunately, like many others, that
            role ended due to the pandemic.
          </p>
          <p className="reveal d2">
            Rather than pause my momentum, I used the downtime to immerse myself
            in front-end development. I committed to a daily self-study
            schedule, building projects, refining my skills, and exploring
            modern tools and frameworks. That dedication opened doors to
            professional opportunities, including positions at Aquatik Studios
            and Inceptus Cybersecurity, where I contributed to modernizing web
            infrastructure and building scalable dashboard solutions.
          </p>
          <p className="reveal d2">
            After my time at Aquatik—where I had begun working with React and
            saw potential for mobile expansion—I took the initiative to dive
            into React Native development. I transformed an idea from a
            hairstylist into a full-featured scheduling and client coordination
            app, which I designed, developed, and officially published to the
            Apple App Store. I managed the full product lifecycle, from coding
            and design to promotional assets and release management.
          </p>
          <p className="reveal d2">
            This experience inspired me to build additional apps, experiment
            with new technologies, and even create a small game prototype using
            Unity. Along the way, I've broadened my technical stack, improved my
            product thinking, and become a more versatile developer.
          </p>
          <p className="reveal d2">
            Now, I'm excited to bring my diverse experience and self-driven
            passion for learning to a company where I can contribute
            meaningfully every day—and continue growing into the strongest
            developer I can be.
          </p>
          <p className="reveal font-semibold text-3xl text-accent tracking-widest">
            You've got challenges that must be overcome for your business. I've
            got the discipline to solve those problems as part of your team.
          </p>
        </div>
      </div>
    </section>
  );
}
