export default function ProjectsPage() {
  return (
    <section className="space-y-16">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold">Selected Projects</h1>

        <p className="text-slate-300">
          Real-world backend and fullstack applications designed, deployed, and
          maintained in production environments.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-12">
        {/* RightsPlace */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-8 space-y-6 transition hover:border-slate-700">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">RightsPlace</h2>
            <p className="text-sm text-emerald-400">
              Production-ready • Deployed • CS50 Capstone (Verified)
            </p>
          </div>

          <p className="text-slate-300 max-w-3xl">
            RightsPlace is a production-grade human rights violation reporting
            platform designed to securely collect, store, and manage sensitive
            incident data. The system focuses on reliability, data integrity,
            and scalable media handling in real-world deployment conditions.
          </p>

          {/* Responsibilities / System Design */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-400">
            <li>• Designed and implemented Django backend architecture</li>
            <li>
              • Integrated PostgreSQL (Neon) with migrations and admin workflows
            </li>
            <li>
              • Implemented Cloudinary-based media storage and optimization
            </li>
            <li>• Deployed and managed production environment on Render</li>
          </ul>

          {/* Tech Stack */}
          <div className="space-y-2">
            <p className="text-sm text-blue-300">Tool Stack:</p>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                'Django',
                'PostgreSQL (Neon)',
                'JavaScript',
                'Bootstrap',
                'Cloudinary',
                'Render',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 border border-slate-700 rounded-full text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            <a
              href="https://rightsplace.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              Live Application
            </a>

            <a
              href="https://github.com/iygeal/rightsplace"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-200 transition"
            >
              Source Code
            </a>
          </div>
        </div>

        {/* Mentorship Matching Platform */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-8 space-y-6 transition hover:border-slate-700">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">
              Mentorship Matching Platform
            </h2>
            <p className="text-sm text-emerald-400">
              Production-ready • Deployed • API-driven
            </p>
          </div>

          <p className="text-slate-300 max-w-3xl">
            A mentorship matching system designed to connect mentors and mentees
            based on structured criteria. The backend exposes a RESTful API
            consumed by a React frontend, with a focus on clean data modeling,
            scalability, and deployment separation.
          </p>

          {/* Responsibilities */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-400">
            <li>
              • Designed and implemented Express.js backend with TypeScript
            </li>
            <li>• Built RESTful APIs for matching logic and user workflows</li>
            <li>• Modeled application data using MongoDB</li>
            <li>
              • Deployed backend and frontend independently (Render & Vercel)
            </li>
          </ul>

          {/* Tech Stack */}
          <div className="space-y-2">
            <p className="text-sm text-blue-300">Tool Stack:</p>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                'Express.js',
                'TypeScript',
                'MongoDB',
                'JWT',
                'React',
                'Render',
                'Vercel',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 border border-slate-700 rounded-full text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            <a
              href="https://mentorship-by-iygeal.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              Live Application
            </a>

            <a
              href="https://github.com/iygeal/mentorship-matching-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-200 transition"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
