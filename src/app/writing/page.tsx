export default function WritingPage() {
  return (
    <>
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6">Writing</h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-12">
          Thoughts on design, development, and the intersection of technology and creativity. 
          I write about what I learn, what I build, and what inspires me.
        </p>
      </section>

      <div className="space-y-12">
        <article className="border-b border-gray-200 pb-12">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-semibold hover:text-blue-600 transition-colors">
              <a href="#" className="block">
                Building a Design System from Scratch
              </a>
            </h2>
            <span className="text-gray-500 text-sm">Coming Soon</span>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            A deep dive into creating a comprehensive design system that scales. 
            Covering everything from design tokens and component libraries to documentation 
            and team adoption strategies.
          </p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Design Systems</span>
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">UX</span>
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Process</span>
          </div>
        </article>

        <article className="border-b border-gray-200 pb-12">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-semibold hover:text-blue-600 transition-colors">
              <a href="#" className="block">
                The Future of Web Development
              </a>
            </h2>
            <span className="text-gray-500 text-sm">Coming Soon</span>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            Exploring emerging technologies and trends that are shaping the future of web development. 
            From AI-powered tools to new frameworks and the evolving role of developers.
          </p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Web Development</span>
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Technology</span>
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Future</span>
          </div>
        </article>

        <article className="border-b border-gray-200 pb-12">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-semibold hover:text-blue-600 transition-colors">
              <a href="#" className="block">
                Lessons from Building My First SaaS
              </a>
            </h2>
            <span className="text-gray-500 text-sm">Coming Soon</span>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            Reflecting on the journey of building and launching my first software-as-a-service product. 
            Key learnings about product development, user research, and building in public.
          </p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">SaaS</span>
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Product</span>
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Lessons</span>
          </div>
        </article>

        <article className="pb-12">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-semibold hover:text-blue-600 transition-colors">
              <a href="#" className="block">
                Design Principles for Developers
              </a>
            </h2>
            <span className="text-gray-500 text-sm">Coming Soon</span>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            Essential design principles that every developer should know. How understanding 
            basic design concepts can dramatically improve the user experience of your applications.
          </p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Design</span>
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Development</span>
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">UX</span>
          </div>
        </article>
      </div>

      <div className="mt-16 p-8 bg-gray-50 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
        <p className="text-gray-600 mb-6">
          Have a question or want to discuss any of these topics? I'd love to hear from you.
        </p>
        <a 
          href="mailto:hello@example.com" 
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Send me an email
        </a>
      </div>
    </>
  );
}
