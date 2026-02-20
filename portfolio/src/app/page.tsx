import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <PageWrapper>
      <section className="space-y-16">
        {/* Hero */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Left: Text */}
          <div className="space-y-6 max-w-3xl">
            <div className="max-w-[34ch] sm:max-w-none">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                <span className="text-blue-400 mr-1.5 font-bold">
                  I am Iygeal Anozie,
                </span>
                <span>
                  a Backend Engineer building reliable, production-ready
                  systems.
                </span>
              </h1>
            </div>

            <p className="text-lg text-slate-300 max-w-3xl">
              I design, build, and deploy scalable backend APIs and data-driven
              systems, adapting frameworks, databases, and cloud platforms to
              real-world requirements.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/projects"
                className="
                          px-6 py-3 bg-blue-500
                          hover:bg-blue-600
                          transition-all duration-200
                          text-white rounded-lg font-medium
                          hover:-translate-y-0.5
                          active:translate-y-0
                        "
              >
                View Projects
              </a>

              <a
                href="/contact"
                className="
                          px-6 py-3 border border-slate-700
                          rounded-lg text-slate-200
                          transition-all duration-200
                          hover:border-slate-600 hover:text-white
                        "
              >
                Work With Me
              </a>

              <a
                href="https://www.canva.com/design/DAGcBJB72j0/hkZ5flPylU6SOD31xAu_5w/edit?utm_content=DAGcBJB72j0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                target="_blank"
                rel="noopener noreferrer"
                className="
                          px-6 py-3 border border-slate-700
                          rounded-lg text-slate-200
                          transition-all duration-200
                          hover:border-slate-600 hover:text-white
                        "
              >
                View CV
              </a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-44 sm:w-52 md:w-56 lg:w-60">
              <div className="rounded-2xl bg-gradient-to-br from-blue-500/40 via-indigo-500/30 to-purple-500/40 p-[2px] shadow-xl">
                <div className="rounded-2xl bg-slate-900 p-[2px]">
                  <Image
                    src="/images/profile.png"
                    alt="Iygeal Anozie"
                    width={400}
                    height={500}
                    priority
                    sizes="(max-width: 640px) 11rem,
                 (max-width: 768px) 13rem,
                 15rem"
                    className="
            w-full
            aspect-[4/5]
            rounded-2xl
            object-cover
            object-[50%_40%]
          "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">What I Work With</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-300">
            <div className="space-y-2">
              <p className="font-medium text-slate-100">Backend & APIs</p>
              <p>
                REST API design, authentication and authorization, built with
                Django, Flask, and Express.
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-medium text-slate-100">Databases</p>
              <p>
                Relational and NoSQL databases including PostgreSQL, MySQL, and
                MongoDB.
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-medium text-slate-100">Deployment & Systems</p>
              <p>
                Cloud deployments, environment configuration, and production
                hosting using Render and Vercel.
              </p>
            </div>
          </div>
        </div>
        {/* Trust Signals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-400 text-center md:text-left">
          <div>Production deployments</div>
          <div>API-first system design</div>
          <div>CS50 & ALX-trained engineer</div>
        </div>
      </section>
    </PageWrapper>
  );
}
