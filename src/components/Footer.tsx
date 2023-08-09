const Footer = () => {
  return (
    <>
      <footer className="flex justify-center bg-black">
        <div className="grid gap-3 px-5 py-16 w-full max-w-6xl bg-black justify-between lg:flex">
          <div className="text-white lg:w-1/3">
            <span className="text-lg font-bold">spense.</span>
            <p className="text-md text-gray-400 mt-2 font-semibold">
              Spense is an open platform for individuals to share their
              unfiltered thoughts. Discuss the topics you love, and get paid for
              doing <span className="italic">just</span> that.
            </p>
          </div>
          <div className="grid grid-cols-2 mt-6 gap-8 text-white md:grid-cols-4 lg:mt-0">
            <div className="flex flex-col gap-3">
              <span className="text-xl font-extrabold">Company</span>
              <a className="link link-hover text-gray-400 hover:text-white">
                About
              </a>
              <a className="link link-hover text-gray-400 hover:text-white">
                Customers
              </a>
              <a className="link link-hover text-gray-400 hover:text-white">
                Blog
              </a>
            </div>
            <div className="flex flex-col gap-3 w-1/2">
              <span className="text-xl font-extrabold">Opportunities</span>
              <a className="link link-hover text-gray-400 hover:text-white">
                Jobs
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xl font-extrabold">Sitemap</span>
              <a className="link link-hover text-gray-400 hover:text-white">
                Homepage
              </a>
            </div>
            <div className="flex flex-col gap-3 w-1/2">
              <span className="text-xl font-extrabold">Resources</span>
              <a className="link link-hover text-gray-400 hover:text-white">
                Support
              </a>
              <a className="link link-hover text-gray-400 hover:text-white">
                Contact
              </a>
              <a className="link link-hover text-gray-400 hover:text-white">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-black flex justify-center pb-5 text-gray-500 w-full text-center">
        Designed by
        <a
          href="https://www.codewell.cc/"
          target="_blank"
          className="text-white ml-2 font-bold"
        >
          CodeWell
        </a>
      </div>
    </>
  );
};

export default Footer;
