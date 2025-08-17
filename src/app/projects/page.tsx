import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <>
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6">Projects</h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-12">
          A collection of projects I&apos;ve built, designed, or contributed to. Each one 
          represents a different challenge and learning opportunity.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 border border-gray-200 rounded-xl hover:border-gray-300 transition-all hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Web Notes App</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            A personal web application for organizing thoughts, projects, and writing. 
            Built with Next.js and React, featuring a clean interface and intuitive user experience.
          </p>
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Next.js</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">React</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">TypeScript</span>
          </div>
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
            View Project →
          </Link>
        </div>

        <div className="p-8 border border-gray-200 rounded-xl hover:border-gray-300 transition-all hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Portfolio Site</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Personal portfolio showcasing work, projects, and professional experience. 
            Designed with a focus on clean typography and minimal aesthetics.
          </p>
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Design</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Development</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">UX</span>
          </div>
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
            View Project →
          </Link>
        </div>

        <div className="p-8 border border-gray-200 rounded-xl hover:border-gray-300 transition-all hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Design System</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            A comprehensive design system built for consistency and scalability. 
            Includes component library, documentation, and design tokens.
          </p>
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Figma</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Design</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">System</span>
          </div>
          <span className="text-gray-400 font-medium">Coming Soon</span>
        </div>

        <div className="p-8 border border-gray-200 rounded-xl hover:border-gray-300 transition-all hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Mobile App</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            A mobile application focused on productivity and task management. 
            Designed with mobile-first principles and native platform guidelines.
          </p>
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">React Native</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Mobile</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">UX</span>
          </div>
          <span className="text-gray-400 font-medium">Coming Soon</span>
        </div>
      </div>
    </>
  );
}
