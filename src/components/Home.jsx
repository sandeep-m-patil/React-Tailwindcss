import Resume from '../assets/resume.pdf'
import Typewriter from 'typewriter-effect';
export default function Home() {
  return (
    <>

      <main className="grid  place-items-center h-160 bg-white px-6 py-32 sm:py-40 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-blue-600">Hi, my name is </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
            Sandeep Madhavrao Patil
          </h2>
          
         <h1 className="mt-4 text-2xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl"> 
         <Typewriter
      options={{
        strings: [
          "AI Enthusiast 🤖 "," Web Developer 🌐 "," Tech Explorer 🚀"
        ],
        autoStart: true,
        loop: true,
        delay: 75,
        deleteSpeed: 40, 
        pauseFor: 2500,
        cursor: "|",
      }}
    />
        
        </h1>

          <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
  href={Resume}
  download="Sandeep_Resume.pdf"
  className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition flex items-center gap-2"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
    />
  </svg>
  <span>Resume</span>
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
