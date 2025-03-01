import Resume from '../assets/resume.pdf'
export default function Home() {
  return (
    <>

      <main className="grid  place-items-center h-160 bg-white px-6 py-32 sm:py-40 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-blue-600">Hi, my name is </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Sandeep Madhavrao Patil
          </h2>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            AI Enthusiast | Web Developer | Tech Explorer
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href={Resume}  
              download="Sandeep_Resume.pdf"
              className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
            >
              Download Resume
            </a>

            <a href="#project" className="text-sm font-semibold text-gray-900">
              Projects <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>


      </main>
    </>
  )
}
