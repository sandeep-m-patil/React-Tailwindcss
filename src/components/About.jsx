import aceecLogo from '../assets/aceeclogo.png'
import rguktLogo from '../assets/rguktlogo.jpg'
import jnphsLogo from '../assets/jnphslogo.jpg'
const people = [
  {
    name: 'ACE Engineering College',
    email: 'B.Tech in CSE ( AI & ML )',
    role: '9.45 / 10.00',
    imageUrl: aceecLogo,
    lastSeen: 'Ghatkesar, Hyderabad , Telangana',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Rajiv Gandhi University of Knowledge Technologies',
    email: 'Pre University Courses',
    role: '8.60 / 10.00',
    imageUrl: rguktLogo,
    lastSeen: 'Basar , Nizambad , Telangana',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Jawahar Nagar Pinion High School',
    email: 'Secondary School Certificate',
    role: '10.00 / 10.00',
    imageUrl: jnphsLogo,
    lastSeen: "Balaji Nagar , Hyderbad , Telangana",
  }
]

export default function About() {
  return (
    <>
  <p id='about'></p>
      <div className="lg:p-20  p-5 mt-5 ">
        <div className="py-10">

          <div class="flex items-center gap-3 border-b">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 7.5A3.75 3.75 0 1 1 12 3.75a3.75 3.75 0 0 1 3.75 3.75Zm-9.72 9.96a7.48 7.48 0 0 1 11.94 0" />
          </svg>
          <h1 className="text-3xl font-medium py-5">About Me</h1>
          </div> 
          <p className='pt-5'>
            Second year Computer Science and Engineering (AIML) student at ACEEC , specializing in Artificial Intelligence and Machine Learning. Passionate about developing intelligent systems that can make a meaningful impact on society.
            Experienced in deep learning, computer vision, and natural language processing. Particularly interested in the intersection of AI , where technology can revolutionize develpment.
            Active participant in AI/ML hackathons, and Coding Competitions. Committed to pushing the boundaries of what's possible with artificial intelligence.


          </p>
        </div>
        <ul role="list" className="divide-y divide-gray-100">
          {people.map((person) => (
            <li key={person.email} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img alt="" src={person.imageUrl} className="size-12 flex-none rounded-full bg-gray-50" />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm/6 font-semibold text-gray-900">{person.name}</p>
                  <p className="mt-1 truncate text-xs/5 text-gray-500">{person.email}</p>
                </div>
              </div>
              <div className=" sm:flex sm:flex-col sm:items-end">
                <p className="text-sm/6 text-gray-900">{person.role}</p>
                {person.lastSeen ? (
                  <p className="mt-1 text-xs/5 text-gray-500">
                    <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                  </p>
                ) : (
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                      <div className="size-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs/5 text-gray-500">Online</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>


    </>

  )
}
