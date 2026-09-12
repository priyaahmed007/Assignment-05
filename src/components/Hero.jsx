import bannerStack from "../assets/banner-stack.png";


const Hero = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-[530px] max-w-[1080px] items-center px-5 py-16 lg:px-0">

        {/* Left Content */}
        <div className="w-full lg:w-1/2">

          <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight text-[#111827] sm:text-6xl">
            Build Your Ideal
            <span className="brand-gradient-text block">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-[530px] text-base leading-7 text-gray-500">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-3">

            <button className="brand-gradient rounded-lg px-5 py-3 text-sm font-semibold text-white shadow-sm 
            transition hover:opacity-90 cursor-pointer">
              Explore Technologies
            </button>

            <button className="rounded-lg border border-gray-200 bg-white px-7 py-3 text-sm font-medium text-gray-600
             cursor-pointer  transition hover:border-gray-300 hover:bg-gray-50">
              Learn More
            </button>

          </div>
        </div>

        {/* Hero Image */}
        <div className="hidden w-1/2  items-center justify-center lg:flex">
          <img
            src={bannerStack}
            alt="Development Stack Illustration"
            className="h-full w-fullobject-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;