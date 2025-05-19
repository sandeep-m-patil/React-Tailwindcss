import aceecLogo from '../assets/aceeclogo.png'
import rguktLogo from '../assets/rguktlogo.jpg'
import jnphsLogo from '../assets/jnphslogo.jpg'

const institutions = [
  {
    name: 'ACE Engineering College',
    degree: 'B.Tech in CSE (AI & ML)',
    cgpa: '9.28 / 10.00',
    logoUrl: aceecLogo,
    location: 'Ghatkesar, Hyderabad, Telangana',
  },
  {
    name: 'Rajiv Gandhi University of Knowledge Technologies',
    degree: 'Pre University Courses',
    cgpa: '8.60 / 10.00',
    logoUrl: rguktLogo,
    location: 'Basar, Nizambad, Telangana',
  },
  {
    name: 'Jawahar Nagar Pinion High School',
    degree: 'Secondary School Certificate',
    cgpa: '10.00 / 10.00',
    logoUrl: jnphsLogo,
    location: 'Balaji Nagar, Hyderabad, Telangana',
  }
];


export default function About() {
  return (
    <>
      <p id='about'></p>
      <div className="lg:px-20 px-5 lg:pt-24 mt-15 lg:mt-0">
        <section className="py-10">
          <header className="flex items-center gap-3 border-b border-black pb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 7.5A3.75 3.75 0 1 1 12 3.75a3.75 3.75 0 0 1 3.75 3.75Zm-9.72 9.96a7.48 7.48 0 0 1 11.94 0"
              />
            </svg>
            <h1 className="text-3xl font-semibold text-gray-900">About Me</h1>
          </header>

          <div className="pt-5 space-y-4 text-gray-600">
            <p>
              I am a Computer Science and Engineering (AI & ML) student at ACE Engineering College, specializing in Artificial Intelligence and Machine Learning. I am passionate about building intelligent systems that can bring about meaningful societal change. Beyond academics, I actively engage in AI/ML hackathons and coding competitions, continually honing my skills and pushing my limits. I am dedicated to exploring innovative AI applications and utilizing my knowledge to contribute to advancements in the field. My goal is to make a positive impact by leveraging AI and ML technologies to solve real-world challenges.  </p>

          </div>
        </section>

        <section className="border-t border-gray-200">
          <h2 className="sr-only">Institutions</h2>
          <ul className="divide-y divide-gray-200">
            {institutions.map((institution, index) => (
              <li key={index} className="py-5 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between gap-x-4 flex-col sm:flex-row">
                  <div className="flex items-center gap-x-4 w-full sm:w-auto">
                    <img
                      alt={`${institution.name} logo`}
                      src={institution.logoUrl}
                      className="h-14 w-14 sm:h-12 sm:w-12 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div className="ml-4 flex flex-col">
                      <h3 className="text-lg font-semibold text-gray-900">{institution.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{institution.degree}</p>
                      <p className="text-sm text-gray-500 truncate mt-1">{institution.location}</p>
                    </div>
                  </div>

                  <div className="flex flex-col mt-3 sm:mt-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm text-black font-bold">CGPA:</span>
                      <span className="font-medium text-gray-900">{institution.cgpa}</span>
                    </div>


                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>



      </div>


    </>

  )
}
