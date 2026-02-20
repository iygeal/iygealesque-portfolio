import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";

export default function About() {
  return (
    <PageWrapper>
      <section className="space-y-16 max-w-6xl">

        {/* Intro + Image */}
        <div className="relative flex flex-col md:flex-row md:items-center gap-12">

          {/* Soft Accent Background */}
          <div className="
            absolute
            -top-10
            -left-10
            w-64 h-64
            bg-blue-500/10
            rounded-full
            blur-3xl
            opacity-70
            pointer-events-none
          " />

          {/* Image */}
          <div className="flex justify-center md:justify-start relative z-10">
            <div className="w-44 sm:w-48 md:w-52 lg:w-56
                            transition-all duration-700
                            opacity-0 animate-fadeIn">

              {/* Premium Gradient Frame */}
              <div className="rounded-2xl bg-gradient-to-br from-blue-500/30 via-indigo-500/20 to-purple-500/30 p-[2px] shadow-xl">
                <div className="rounded-2xl bg-slate-900 p-[2px]">
                  <Image
                    src="/images/profile.png"
                    alt="Iygeal Anozie"
                    width={400}
                    height={500}
                    sizes="(max-width: 640px) 11rem,
                           (max-width: 768px) 12rem,
                           14rem"
                    className="
                      w-full
                      aspect-[4/5]
                      rounded-2xl
                      object-cover
                      object-[50%_40%]
                      priority
                    "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Intro Text */}
          <div className="
            space-y-6
            max-w-3xl
            transition-all duration-700 delay-200
            opacity-0 animate-fadeIn
          ">
            <h1 className="text-3xl md:text-4xl font-semibold">
              About Me
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed">
              I am a backend engineer focused on building reliable,
              production-ready systems. I care deeply about clean architecture,
              data integrity, and software that behaves predictably under
              real-world conditions.
            </p>
          </div>

        </div>


        {/* Training & Experience */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Training and Experience</h2>

          <p className="text-slate-300 leading-relaxed">
            I have formal training from CS50’s Web Programming with Python and
            JavaScript, where I completed and deployed multiple production-grade
            applications, including my capstone project, RightsPlace.
          </p>

          <p className="text-slate-300 leading-relaxed">
            Prior to that, I spent over a year at ALX Africa, where I focused
            heavily on backend engineering, systems design, and real-world
            software practices. My experience there exposed me to leading and
            collaborating with teams, building APIs, managing databases, and
            working with deployment pipelines and server configurations.
          </p>
          <p className="mt-4 text-slate-200 font-medium">
            I have shipped systems that handle real users, real data, and real
            constraints.
          </p>
        </div>

        {/* How I Work */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">How I Work</h2>

          <ul className="space-y-3 pl-5 list-disc text-slate-300">
            <li className="leading-relaxed">
              I design systems with clarity before writing code
            </li>
            <li className="leading-relaxed">
              I prioritize maintainability, security, and scalability
            </li>
            <li className="leading-relaxed">
              I communicate clearly and set realistic expectations
            </li>
            <li className="leading-relaxed">
              I prefer simple, robust solutions over unnecessary complexity
            </li>
          </ul>

          <p className="text-slate-300 leading-relaxed">
            Whether working on a small API or a larger system, my goal is always
            the same: deliver software that is dependable, understandable, and
            ready for production use.
          </p>
          {/* Call to Action */}
          <div className="pt-4">
            <a
              href="/contact"
              className="
                inline-flex items-center
                px-6 py-3
                bg-blue-500 hover:bg-blue-600
                transition-all duration-200
                text-white rounded-lg font-medium
                hover:-translate-y-0.5
                active:translate-y-0
              "
            >
              Let’s Work Together
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
