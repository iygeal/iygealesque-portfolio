export default function ProjectsPage() {
  return (
    <section className="space-y-16">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Selected Projects
        </h1>

        <p className="text-slate-400">
          Real-world backend and fullstack applications designed, deployed, and
          maintained in production environments.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-12">
        {/* RightsPlace */}
        <div className="border border-slate-800 rounded-xl p-8 space-y-6">
          <h2 className="text-2xl font-semibold">RightsPlace</h2>

          <p className="text-slate-400 max-w-3xl">
            A human rights violation reporting platform that allows users to
            securely submit, track, and manage incident reports. Built with a
            focus on data integrity, media handling, and production-ready
            deployment.
          </p>

          {/* Highlights */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-400">
            <li>• Django backend with PostgreSQL (Neon)</li>
            <li>• Cloudinary media storage and processing</li>
            <li>• Secure form handling and data validation</li>
            <li>• Production deployment on Render</li>
          </ul>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1 border border-slate-700 rounded-full">
              Django
            </span>
            <span className="px-3 py-1 border border-slate-700 rounded-full">
              PostgreSQL
            </span>
            <span className="px-3 py-1 border border-slate-700 rounded-full">
              Cloudinary
            </span>
            <span className="px-3 py-1 border border-slate-700 rounded-full">
              Render
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-4 text-sm">
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              Live Demo
            </a>

            <a
              href="#"
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
