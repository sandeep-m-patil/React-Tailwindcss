import Resume from '../assets/resume.pdf';
import ProfilePic from '../assets/profile-pic.png';
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center">
      <div className="relative w-full h-full overflow-hidden">
        {/* Video background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="https://videos.pexels.com/video-files/8675540/8675540-hd_1920_1080_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Centered content on top of the video */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-center text-white px-6">
          <div className="text-center ">
            <img
              src={ProfilePic}
              alt="Profile Picture"
              className="w-full max-w-[120px] mx-auto rounded-full"
            />

            <p className="text-base font-semibold text-white">Hi, my name is </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-6xl">
              Sandeep Madhavrao Patil
            </h2>

            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-5xl">
              <Typewriter
                options={{
                  strings: [
                    "AI Enthusiast 🤖", "Web Developer 🌐", "Tech Explorer 🚀",
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

            <div className="mt-8 flex items-center justify-center gap-x-6">
              <a
                href={Resume}
                download="Sandeep_Resume.pdf"
                className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-800 transition flex items-center gap-2"
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

              <a href="#projects" className="text-sm font-semibold text-white">
                Projects <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
