import flipzonMobile1 from '../assets/flipzonMobile1.png';
import flipzonMobile2 from '../assets/flipzonMobile2.png';
import flipzonDesktop1 from '../assets/flipzonDesktop1.png';
import flipzonDesktop2 from '../assets/flipzonDesktop2.png';
import flipZon from '../assets/FlipZon-mobile.mp4';

const projects = [
  {
    id: 1,
    name: "FlipZon",
    description1: 'Flipzon is a modern e-commerce platform built with Next.js, ShadcnUI, Zustand, Tailwind CSS, and Clerk for secure authentication. Users can log in with Google or email via Clerk, explore products across categories like accessories and footwear, and filter items for easy navigation.',
    description2: 'The platform offers a responsive, mobile-first design using ShadcnUI and Tailwind CSS. Zustand manages the cart, allowing users to add, remove, and adjust item quantities. With a Dark Mode toggle, Flipzon provides a personalized, secure shopping experience with a focus on performance and user-friendly design.',
    techStack: "NextJS, ShadcnUI , Zustand and Clerk ",
    video: flipZon,
    slideDImage: [flipzonDesktop1, flipzonDesktop2], // Desktop images
    slideMImage: [flipzonMobile1, flipzonMobile2], // Mobile images
    githubLink: "https://github.com/sandeep-m-patil/FlipZon",
  },

];

export default function Project() {

  return (
    <div id="projects" className="relative isolate overflow-hidden bg-white px-6 py-14 sm:py-12 lg:overflow-visible lg:pl-12 lg:px-0">
      {projects.map((project) => (
        <div key={project.id} className="py-10 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base/7 font-semibold text-blue-600">A Clone Project</p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  {project.name}
                </h1>

              </div>
            </div>
          </div>

          <div className="py-3 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden flex items-center justify-center">
            <div className="w-70  border-12 rounded-4xl shadow-2xl">
              <video className="object-cover  rounded-2xl" autoPlay loop muted>
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>


            </div>
          </div>

          {/* Description Section */}
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg ">
                <p className='mt-5'>{project.description1}</p><br />
                <p className='mb-5'>{project.description2}</p>
                <span className='text-xl font-medium my-5'>Tech Stack: </span><span className='text-small'>{project.techStack}</span>


                <div class="my-10 flex justify-center">
                  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4  px-4">
                    <img src="https://static-00.iconduck.com/assets.00/nextjs-icon-512x309-yynfidez.png" alt="Image 1" class=" rounded-lg" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAjouFTAB2PcXfnfkjy1SUjkaMeaymXnzoOA&s" alt="Image 1" class="w-400 rounded-lg" />
                    <img src="https://miro.medium.com/v2/resize:fit:800/1*fKV3_Y4usDYZKPsNp1yCvA.png" alt="Image 1" class="w-300 rounded-lg " />
                    <img src="https://ph-files.imgix.net/297bc3d4-bd2e-4eaa-8fb6-a289cf61ea91.png?auto=format" alt="Image 1" class="w-300 rounded-lg " />

                  </div>
                </div>



                <div className="flex justify-center space-x-4 my-6">
                  <a href={project.githubLink} target='_blank' rel="noopener noreferrer">
                    <button className="px-5 py-2 bg-gray-900 text-white flex items-center gap-2 rounded-md hover:bg-gray-800 transition mr-5">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.799 8.207 11.387.6.111.793-.261.793-.58 0-.286-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.728.083-.728 1.204.085 1.839 1.236 1.839 1.236 1.07 1.835 2.807 1.305 3.49.998.108-.775.42-1.305.763-1.606-2.665-.3-5.466-1.333-5.466-5.93 0-1.31.468-2.382 1.236-3.22-.124-.303-.536-1.521.116-3.171 0 0 1.008-.322 3.3 1.23.96-.267 1.99-.4 3.012-.405 1.022.005 2.052.138 3.012.405 2.291-1.552 3.298-1.23 3.298-1.23.654 1.65.242 2.868.118 3.171.77.838 1.236 1.91 1.236 3.22 0 4.61-2.805 5.627-5.476 5.921.43.372.816 1.103.816 2.222 0 1.606-.014 2.898-.014 3.291 0 .321.192.694.8.58C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>GitHub</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>

                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
