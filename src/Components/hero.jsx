import React from 'react'

const Hero = React.forwardRef(({ endangeredRef }, ref) => {
  const handleScroll = () => {
    endangeredRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="min-h-screen relative">
      <video autoPlay muted loop preload='auto' poster='/videos/poster.jpg' className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/HeroVidddd.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="container mx-auto text-center z-10 px-6 flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold mb-4 font-poppins">
            The Last Leaves: Protect Endangered Trees
          </h1>
          <p className="text-xl sm:text-2xl text-white mb-6 max-w-3xl mx-auto font-roboto">
            Join us in raising awareness and protecting the world's most vulnerable trees. Explore the stories of these magnificent giants and help make a difference in conservation efforts.
          </p>
          <button
            onClick={handleScroll}
            className="bg-[#228B22] hover:bg-[#6B8E23] text-white py-3 px-8 rounded-full text-xl font-semibold font-poppins transition duration-300"
          >
            Explore the Trees
          </button>
        </div>
      </div>
    </section>
  );
});

export default Hero;
