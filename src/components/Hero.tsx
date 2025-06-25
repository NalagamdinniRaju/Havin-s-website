const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image for desktop and mobile */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat
          bg-[url('https://res.cloudinary.com/dwiq4s5ut/image/upload/v1750876090/mobile_image_i75px9.png')]
          sm:bg-[url('https://res.cloudinary.com/dwiq4s5ut/image/upload/v1750756491/ChatGPT_Image_Jun_24_2025_02_40_34_PM_xteohu.png')]"
      />

      {/* Optional Content */}
      {/* <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"> ... </div> */}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
