
// const About = () => {
//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-[#31aaa6] mb-6">About Us!</h2>
//           <h3 className="text-2xl md:text-3xl font-semibold text-[#713e26] mb-8">Who We Are</h3>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6">
//             <div className="bg-[#31aaa6]/5 p-8 rounded-2xl">
//               <h4 className="text-xl font-bold text-[#31aaa6] mb-4">No Compromise, Full Taste</h4>
//               <p className="text-[#713e26] leading-relaxed">
//                 Indulge in creamy bliss, where every scoop whispers sweet symphonies, a delectable escape that knows no bounds, Just Pure.
//               </p>
//             </div>
//             <div className="bg-[#ffa800]/5 p-8 rounded-2xl">
//               <h4 className="text-xl font-bold text-[#ffa800] mb-4">Well-Being & Eco-Friendliness</h4>
//               <p className="text-[#713e26] leading-relaxed">
//                 Savoring ice cream: a guilt-free delight, nurturing well-being with each scoop, while embracing eco-friendliness, a treat that's truly refreshing and sustainable.
//               </p>
//             </div>
//           </div>

//           <div className="space-y-6">
//             <p className="text-[#713e26] leading-relaxed text-lg">
//               Welcome to Havins, where quality reigns supreme in every scoop. With a focus on organic ingredients, 
//               our artisanal ice cream delivers unparalleled taste in every bite. Each flavor is a testament to our 
//               commitment to purity, crafted with care and precision.
//             </p>
//             <p className="text-[#713e26] leading-relaxed text-lg">
//               At Havins, we believe in the power of simplicity, using only the finest, responsibly sourced ingredients. 
//               From creamy dairy to vibrant fruits, our creations are free from artificial additives or preservatives. 
//               With us, it's quality over quantity, ensuring a satisfying experience every time.
//             </p>
//             <button className="bg-[#ffa800] hover:bg-[#ff9500] text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
//               More About Us
//             </button>
//           </div>
//         </div>

//         <div className="mt-16 text-center bg-[#31aaa6]/5 p-8 rounded-2xl">
//           <h4 className="text-2xl font-bold text-[#31aaa6] mb-4">Haviñ's R&D Is at the top of Food-Tech Industry</h4>
//           <p className="text-[#713e26] leading-relaxed text-lg">
//             Innovating flavors with precision, Haviñ's R&D pioneers the forefront of food-tech, crafting ice cream experiences that redefine deliciousness with mastery.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#31aaa6]/10 to-transparent rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#ffa800]/10 to-transparent rounded-full blur-3xl translate-x-32 translate-y-32"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[#31aaa6]/10 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#31aaa6] rounded-full animate-pulse"></div>
            <span className="text-[#31aaa6] font-medium text-sm">DISCOVER OUR STORY</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-[#31aaa6] to-[#ffa800] bg-clip-text text-transparent">
              About Us
            </span>
            <span className="text-[#713e26]">!</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#713e26] mb-4">
            Who We Are
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-[#31aaa6] to-[#ffa800] mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Feature Cards */}
          <div className="space-y-8">
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#31aaa6]/10 hover:border-[#31aaa6]/30 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#31aaa6] to-[#31aaa6]/70 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-[#31aaa6] group-hover:text-[#31aaa6]/80 transition-colors">
                  No Compromise, Full Taste
                </h4>
              </div>
              <p className="text-[#713e26] leading-relaxed">
                Indulge in creamy bliss, where every scoop whispers sweet symphonies, a delectable escape that knows no bounds, Just Pure.
              </p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#ffa800]/10 hover:border-[#ffa800]/30 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ffa800] to-[#ffa800]/70 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-[#ffa800] group-hover:text-[#ffa800]/80 transition-colors">
                  Well-Being & Eco-Friendliness
                </h4>
              </div>
              <p className="text-[#713e26] leading-relaxed">
                Savoring ice cream: a guilt-free delight, nurturing well-being with each scoop, while embracing eco-friendliness, a treat that's truly refreshing and sustainable.
              </p>
            </div>
          </div>

          {/* Story Content */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-[#713e26] leading-relaxed text-lg mb-6 font-light">
                Welcome to <span className="font-bold text-[#31aaa6]">Havins</span>, where quality reigns supreme in every scoop. With a focus on organic ingredients, our artisanal ice cream delivers unparalleled taste in every bite. Each flavor is a testament to our commitment to purity, crafted with care and precision.
              </p>
              <p className="text-[#713e26] leading-relaxed text-lg mb-8 font-light">
                At Havins, we believe in the power of simplicity, using only the finest, responsibly sourced ingredients. From creamy dairy to vibrant fruits, our creations are free from artificial additives or preservatives. With us, it's quality over quantity, ensuring a satisfying experience every time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-[#ffa800] to-[#ff9500] hover:from-[#ff9500] hover:to-[#ff8800] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                More About Us
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <button className="group border-2 border-[#31aaa6] text-[#31aaa6] hover:bg-[#31aaa6] hover:text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* R&D Highlight Section */}
        {/* <div className="relative">
          <div className="bg-gradient-to-r from-[#31aaa6]/5 via-white/50 to-[#ffa800]/5 backdrop-blur-sm p-12 rounded-3xl border border-white/20 shadow-2xl">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#31aaa6] to-[#ffa800] px-6 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-white font-medium text-sm">INNOVATION LEADER</span>
              </div>

              <h4 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-[#31aaa6]">Haviñ's R&D</span>{' '}
                <span className="text-[#713e26]">Is at the top of</span>{' '}
                <span className="bg-gradient-to-r from-[#ffa800] to-[#ff9500] bg-clip-text text-transparent">
                  Food-Tech Industry
                </span>
              </h4>

              <p className="text-[#713e26] leading-relaxed text-xl font-light max-w-3xl mx-auto">
                Innovating flavors with precision, Haviñ's R&D pioneers the forefront of food-tech, crafting ice cream experiences that redefine deliciousness with mastery.
              </p>

              <div className="flex justify-center gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#31aaa6] mb-2">15+</div>
                  <div className="text-sm text-[#713e26] font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#ffa800] mb-2">100+</div>
                  <div className="text-sm text-[#713e26] font-medium">Unique Flavors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#31aaa6] mb-2">50K+</div>
                  <div className="text-sm text-[#713e26] font-medium">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;