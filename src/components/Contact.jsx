const links = [
    { name: 'Gmail', href: 'mailto:sandeeppatil10705@gamil.com',svgEle:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
      },
    { name: 'GitHub', href: 'https://github.com/sandeep-m-patil?tab=repositories' ,svgEle:<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.799 8.207 11.387.6.111.793-.261.793-.58 0-.286-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.728.083-.728 1.204.085 1.839 1.236 1.839 1.236 1.07 1.835 2.807 1.305 3.49.998.108-.775.42-1.305.763-1.606-2.665-.3-5.466-1.333-5.466-5.93 0-1.31.468-2.382 1.236-3.22-.124-.303-.536-1.521.116-3.171 0 0 1.008-.322 3.3 1.23.96-.267 1.99-.4 3.012-.405 1.022.005 2.052.138 3.012.405 2.291-1.552 3.298-1.23 3.298-1.23.654 1.65.242 2.868.118 3.171.77.838 1.236 1.91 1.236 3.22 0 4.61-2.805 5.627-5.476 5.921.43.372.816 1.103.816 2.222 0 1.606-.014 2.898-.014 3.291 0 .321.192.694.8.58C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>},
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/psandeep2005/',svgEle:<svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M16 8a6 6 0 0 1 6 6v6h-4v-5a2 2 0 0 0-4 0v5h-4v-12h4v2" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg> },
]
const stats = [
    { name: 'Projects', value: '3+ ' },
    { name: 'Hacathons', value: '4+' },
    { name: 'Certificates', value: '10+' },
    { name: 'Years of Experience', value: '0+' },
]

export default function Contact() {
    return (
        <div id="contact" className="relative isolate overflow-hidden bg-black py-24 sm:py-32">

            <div
                aria-hidden="true"
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                />
            </div>
            <div
                aria-hidden="true"
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-5xl">Get In Touch</h2>
                    <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                        I'm currently looking for internship opportunities in Software Development. Whether you have a question or just want to say hi, I'll get back to you!
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">

                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.name} className="flex flex-col-reverse gap-1 ">
                                <dt className="text-base/7 text-gray-300 lg:text-center">{stat.name}</dt>
                                <dd className="text-4xl font-semibold tracking-tight text-white lg:text-center">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>

                    <div className="justify-center mt-10 grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                        {links.map((link) => (
                            
                            <a key={link.name} href={link.href} target="_blank" className="flex items-center space-x-2 text-white hover:text-blue-500 transition-colors">
                            {link.svgEle}
                            <span className="font-medium">{link.name} &rarr;</span>
                          </a>
                          
                        ))}
                    </div>


                </div>
                <div className="right-0 bottom-0 fixed p-5 overflow-hidden ">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="white" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                        </svg>

                    </a>
                </div>
            </div>




        </div>

    )
}
