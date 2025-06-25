
const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dwiq4s5ut/image/upload/v1750756491/ChatGPT_Image_Jun_24_2025_02_40_34_PM_xteohu.png')`
        }}
      >
        {/* Light overlay to ensure text readability */}
      </div>

      {/* Content */}
      {/* <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          IT'S ICE CREAM O' CLOCK
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-8">
          Embrace The Essence Of Taste
        </h2>
        <p className="text-lg sm:text-xl text-white mb-8 leading-relaxed max-w-3xl mx-auto">
          At Havins Ice Cream, we take pride in crafting the world's most delicious ice cream using advanced techniques,
          wholesome sugars, and a planet-friendly approach that defines who we are. 🌍🍦
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-[#ffa800] hover:bg-[#ff9500] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg">
            Order Now
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-[#31aaa6] px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div> */}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
