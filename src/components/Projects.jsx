import flipZon from '../assets/flipzon.png'
export default function Project() {
  return (

    <div id='project' className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32  lg:overflow-visible lg:pl-12 lg:px-0">

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-600">A Flipkart/Amazon clone</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                FlipZon
              </h1>

            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden ">
          <img
            alt=""
            src={flipZon}
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg ">
              <p>
                To build a Flipkart/Amazon clone using HTML, CSS, JavaScript, and Bootstrap, the homepage will dynamically display products using JavaScript objects and Bootstrap cards. The cart system stores items in LocalStorage, updates the cart count, and supports adding/removing products. Basic user authentication is managed via LocalStorage, allowing simple login/signup. Order history is also saved in LocalStorage for backup. The project can be deployed on GitHub Pages, as it doesn't require a backend. 🚀
              </p>
              <p className='text-xl font-medium my-5'>Project Structure : </p>
              <ul role="list" className="mt-8 space-y-3 text-gray-600">

                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">Frontend : </strong> HTML, CSS, Bootstrap for UI
                  </span>
                </li>

                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">Logic: </strong>JavaScript for dynamic interactions
                  </span>
                </li>

                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">Storage: </strong>LocalStorage to store product data, cart items, and user info </span>
                </li>
              </ul>

           
              <div className="mt-6 flex flex-col sm:flex-row  space-y-2 sm:space-y-0 sm:space-x-2 ">
              <a href="https://github.com/sandeep-m-patil/cart-application" target='_blank'><button class="px-5 py-2 bg-gray-900 text-white flex items-center gap-2 rounded-md hover:bg-gray-800 transition mr-5">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.799 8.207 11.387.6.111.793-.261.793-.58 0-.286-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.728.083-.728 1.204.085 1.839 1.236 1.839 1.236 1.07 1.835 2.807 1.305 3.49.998.108-.775.42-1.305.763-1.606-2.665-.3-5.466-1.333-5.466-5.93 0-1.31.468-2.382 1.236-3.22-.124-.303-.536-1.521.116-3.171 0 0 1.008-.322 3.3 1.23.96-.267 1.99-.4 3.012-.405 1.022.005 2.052.138 3.012.405 2.291-1.552 3.298-1.23 3.298-1.23.654 1.65.242 2.868.118 3.171.77.838 1.236 1.91 1.236 3.22 0 4.61-2.805 5.627-5.476 5.921.43.372.816 1.103.816 2.222 0 1.606-.014 2.898-.014 3.291 0 .321.192.694.8.58C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                </button></a>

                <a href="https://sandeep-m-patil.github.io/cart-application/index.html" target='_blank'><button class="mr-5 px-5 py-2 bg-blue-600 text-white flex items-center gap-2 rounded-md hover:bg-blue-700 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>

                  <span>Live Demo</span>
                </button></a>

                <a href="https://github.com/sandeep-m-patil?tab=repositories" target='_blank'><button class="px-5 py-2 bg-gray-900 text-white flex items-center gap-2 rounded-md hover:bg-gray-800 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>

                  <span>More Projects</span>
                </button></a>
</div>







            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
