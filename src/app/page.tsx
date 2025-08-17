export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6">Kevin Fernandez</h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
          Hey, I'm Kevin. I'm a developer, designer, and creator passionate about building 
          meaningful digital experiences. I love working at the intersection of technology 
          and human-centered design.
        </p>
      </section>

      {/* Work Experience */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Work</h2>
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">Current Role</h3>
              <p className="text-gray-600">Software Developer</p>
            </div>
            <span className="text-gray-500 text-sm">2024—</span>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">Previous Experience</h3>
              <p className="text-gray-600">Full Stack Developer</p>
            </div>
            <span className="text-gray-500 text-sm">2022—24</span>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">Early Career</h3>
              <p className="text-gray-600">Frontend Developer</p>
            </div>
            <span className="text-gray-500 text-sm">2020—22</span>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
            <h3 className="font-medium mb-2">Web Notes App</h3>
            <p className="text-gray-600 text-sm mb-3">
              A personal web application for organizing thoughts, projects, and writing.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-gray-100 text-xs rounded">Next.js</span>
              <span className="px-2 py-1 bg-gray-100 text-xs rounded">React</span>
            </div>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
            <h3 className="font-medium mb-2">Portfolio Site</h3>
            <p className="text-gray-600 text-sm mb-3">
              Personal portfolio showcasing work, projects, and professional experience.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-gray-100 text-xs rounded">Design</span>
              <span className="px-2 py-1 bg-gray-100 text-xs rounded">Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="text-2xl font-semibold mb-8">Quick Links</h2>
        <div className="flex gap-6">
          <a 
            href="/writing" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Read My Writing
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 16 16">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33} d="M6 3.33l4.67 4.67L6 12.67" />
            </svg>
          </a>
          <a 
            href="/projects" 
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            View Projects
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 16 16">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33} d="M6 3.33l4.67 4.67L6 12.67" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}