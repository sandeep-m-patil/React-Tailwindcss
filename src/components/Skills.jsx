import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function Skills() {
    return (

        <>
      
            <div className="lg:p-20 p-5" id="skills">
                <div className="pb-10">
                    <div class="flex items-center gap-3 border-b">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        <h1 class="text-3xl font-medium py-5 ">Technical Skills</h1>
                    </div>
                    <p className='pt-5'>
                        Mastering the tools of artificial intelligence , Web Developement and others

                    </p>
                </div>

                <div >

                    <div className=" border-t border-gray-100">
                        <dl className="divide-y divide-gray-100">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm/6 font-bold text-gray-900"> 💻
                                    Programming
                                </dt>
                                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    C/C++ , Java , JavaScript and Python .
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm/6 font-bold text-gray-900">🌐
                                    Web Development</dt>
                                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    HTML , CSS , JavaScript , Node.js , React , TailwindCSS and Bootstrap
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm/6 font-bold text-gray-900">🛠️
                                    Tools & Technologies</dt>
                                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Git / GitHub , VS code , Juypter and Linux </dd>
                            </div>


                        </dl>
                    </div>
                </div>

            </div>
        </>
    )
}
