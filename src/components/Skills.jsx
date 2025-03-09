

export default function Skills() {
  return (

    <>
      <p id='skills'></p>
      <div className="lg:p-20 p-5 lg:mt-12 mt-24 bg-white">
        <section className="pb-10">
          <header className="flex items-center gap-3 border-b border-blac  pb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            <h1 className="text-3xl font-bold">Technical Skills</h1>
          </header>

          <p className="pt-5 text-lg">
            Mastering the tools of artificial intelligence, web development, and system design.
          </p>
        </section>

        <div className="border-t gray-200">
          <dl className="divide-y divide-black">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-6 sm:px-0">
              <dt className="text-lg font-bold flex items-center gap-2">
                <span>💻</span>
                Programming Languages
              </dt>
              <dd className="mt-2 sm:col-span-2 sm:mt-0">
                <ul className="flex flex-wrap gap-2">
                  {['C/C++', 'Java', 'JavaScript', 'Python'].map((lang) => (
                    <li key={lang} className="border border-black px-3 py-1 rounded-full text-sm">
                      {lang}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-6 sm:px-0">
              <dt className="text-lg font-bold flex items-center gap-2">
                <span>🌐</span>
                Web Development
              </dt>
              <dd className="mt-2 sm:col-span-2 sm:mt-0">
                <ul className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'Node.js', 'React', 'TailwindCSS', 'Bootstrap','NextJS'].map((tech) => (
                    <li key={tech} className="border border-black px-3 py-1 rounded-full text-sm">
                      {tech}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-6 sm:px-0">
              <dt className="text-lg font-bold flex items-center gap-2">
                <span>🛠️</span>
                Tools & Technologies
              </dt>
              <dd className="mt-2 sm:col-span-2 sm:mt-0">
                <ul className="flex flex-wrap gap-2">
                  {['Git/GitHub', 'VS Code', 'Jupyter', 'Linux'].map((tool) => (
                    <li key={tool} className="border border-black px-3 py-1 rounded-full text-sm">
                      {tool}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  )
}
