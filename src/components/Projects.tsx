import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Image from "next/image";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 bg-zinc-50 dark:bg-zinc-900/40"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-14">
          <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
            See previous
          </p>
          <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
            Projects
          </h2>
        </div>

        {/* 1) */}
        {/* <div className="grid md:grid-cols-3 gap-6">
          {data.map((item, i) => (
            <article key={item.name} className={`reveal d${i + 1} card-h ...`}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div> */}

        {/* 2) */}
        {/* <SidebarProvider className="h-full">
          <AppSidebar />
          <SidebarInset className="overflow-y-auto">
            <header className="flex h-14 shrink-0 items-center gap-2">
              <div className="flex flex-1 items-center gap-2 px-3">
                <SidebarTrigger />
                <Separator
                  orientation="vertical"
                  className="mr-2 data-[orientation=vertical]:h-4"
                />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbPage className="line-clamp-1">
                        Project Management & Task Tracking
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div className="ml-auto px-3">
                <NavActions />
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 px-4 py-10">
              <div className="mx-auto h-24 w-full max-w-3xl rounded-xl bg-muted/50" />
              <div className="mx-auto h-full w-full max-w-3xl rounded-xl bg-muted/50" />
            </div>
          </SidebarInset>
        </SidebarProvider> */}

        {/* v3 */}
        <SidebarProvider className="h-120 min-h-0 w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex h-full flex-col lg:flex-row">
            <AppSidebar />

            <SidebarInset className="flex-1">
              <div className="flex h-full flex-col">
                <header className="flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-500">
                      Project Name
                    </p>
                    {/* <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                      Project details
                    </h3> */}
                  </div>
                  {/* <div className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                    Responsive
                  </div> */}
                </header>
                <div className="flex-1 overflow-auto p-4 sm:p-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Project content */}
                    <Image
                      src={"https://picsum.photos/id/119/200/300"}
                      alt={"name"}
                      width={200}
                      height={300}
                      className="rounded-xl object-cover"
                    />

                    {/* <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/60">
                      <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                        Contained layout
                      </p>
                      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        The sidebar now stays inside the Projects card and
                        scales down cleanly on smaller screens.
                      </p>
                    </div> */}
                    {/* <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/60">
                      <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                        Responsive behavior
                      </p>
                      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        The content area expands naturally while the sidebar
                        remains anchored to this section.
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </div>
    </section>
  );
}
