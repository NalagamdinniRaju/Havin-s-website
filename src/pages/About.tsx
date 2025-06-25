
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";

// const About = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navigation />

//       {/* Hero Section with Card Design */}
//       <section className="pt-24 pb-20 bg-gradient-to-br from-[#31aaa6] via-[#31aaa6] to-[#1a5856] relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-gradient-to-r from-[#31aaa6]/20 to-transparent"></div>
//           <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#713e26]/10 to-transparent"></div>
//         </div>

//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//           <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-16 border border-white/20 shadow-2xl">
//             <div className="text-left max-w-4xl">
//               <div className="text-white/60 text-sm font-medium mb-4 tracking-wider uppercase">
//                 Home / About
//               </div>
//               <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
//                 About <span className="text-[#ffa800]">Havin's</span>
//               </h1>
//               <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-10 max-w-4xl">
//                 Discover the story behind our passion for creating exceptional ice cream experiences
//                 with artisanal craftsmanship and premium organic ingredients.
//               </p>
//               <button className="bg-[#ffa800] hover:bg-[#ff9500] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
//                 Learn More →
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Genesis Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold text-[#31aaa6] mb-6">Genesis Of Havin's</h2>
//               <div className="space-y-4 text-[#713e26] leading-relaxed">
//                 <p>
//                   Born out of a love for exceptional food and a desire to make a mark in the culinary world,
//                   Sravan Kalishetty embarked on his journey to create Havins. A graduate from BitsPilani with
//                   a keen interest in the food industry, Sravan's entrepreneurial spirit was ignited during his
//                   previous venture, DeliveryYaar, where he gained invaluable experience in the complexities of
//                   the food business.
//                 </p>
//                 <p>
//                   However, it was his passion for quality and his love for ice cream that ultimately led Sravan
//                   to conceptualize Havins. Drawing inspiration from his own experiences as a discerning consumer,
//                   he envisioned a brand that would prioritize the finest ingredients and meticulous craftsmanship
//                   to deliver an unparalleled ice cream experience.
//                 </p>
//               </div>
//             </div>
//             <div className="bg-[#31aaa6]/5 p-8 rounded-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop"
//                 alt="About Havin's"
//                 className="w-full h-64 object-cover rounded-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quality Section */}
//       <section className="py-20 bg-[#31aaa6]/5">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-[#31aaa6] mb-6">Quality Over Quantity</h2>
//           </div>
//           <div className="max-w-4xl mx-auto text-[#713e26] leading-relaxed space-y-4">
//             <p>
//               At the core of Havins lies a steadfast commitment to quality over quantity. In a world where
//               mass production often compromises on taste and integrity, Sravan and the Havins team refuse
//               to cut corners. Instead, they place a premium on sourcing the freshest, organic ingredients,
//               ensuring that each flavor is a testament to purity and excellence.
//             </p>
//             <p>
//               From the creamy richness of organic dairy to the vibrant bursts of handpicked fruits, every
//               ingredient is carefully selected to elevate the overall taste experience. Havins believes that
//               true indulgence lies in savoring the natural flavors of the finest ingredients, free from
//               artificial additives or preservatives.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Craftsmanship Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-[#31aaa6] mb-6">The Artistry Of Craftsmanship</h2>
//           </div>
//           <div className="max-w-4xl mx-auto text-[#713e26] leading-relaxed space-y-4">
//             <p>
//               Crafting artisanal ice cream is both a science and an art, and at Havins, it's a process
//               that's taken very seriously. Each batch of ice cream is meticulously crafted by skilled
//               artisans who understand the delicate balance of flavors and textures. From the initial
//               recipe development to the final churn, every step is guided by a relentless pursuit of
//               perfection.
//             </p>
//             <p>
//               One of the hallmarks of Havins' craftsmanship is its attention to detail. Whether it's
//               infusing a delicate floral note into a classic vanilla or creating a decadent swirl of
//               chocolate in a creamy base, every flavor profile is thoughtfully curated to deliver a
//               harmonious taste experience. It's this dedication to craftsmanship that sets Havins apart,
//               ensuring that each scoop is a work of art in its own right.
//             </p>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default About;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-[#31aaa6]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#31aaa6] mb-6">About Havin's</h1>
            <p className="text-xl text-[#713e26] max-w-3xl mx-auto">
              Discover the story behind our passion for creating exceptional ice cream experiences
            </p>
          </div>
        </div>
      </section>

      {/* Genesis Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#31aaa6] mb-6">Genesis Of Havin's</h2>
              <div className="space-y-4 text-[#713e26] leading-relaxed">
                <p>
                  Born out of a love for exceptional food and a desire to make a mark in the culinary world,
                  Sravan Kalishetty embarked on his journey to create Havins. A graduate from BitsPilani with
                  a keen interest in the food industry, Sravan's entrepreneurial spirit was ignited during his
                  previous venture, DeliveryYaar, where he gained invaluable experience in the complexities of
                  the food business.
                </p>
                <p>
                  However, it was his passion for quality and his love for ice cream that ultimately led Sravan
                  to conceptualize Havins. Drawing inspiration from his own experiences as a discerning consumer,
                  he envisioned a brand that would prioritize the finest ingredients and meticulous craftsmanship
                  to deliver an unparalleled ice cream experience.
                </p>
              </div>
            </div>
            <div className="bg-[#31aaa6]/5 p-8 rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop"
                alt="About Havin's"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20 bg-[#31aaa6]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#31aaa6] mb-6">Quality Over Quantity</h2>
          </div>
          <div className="max-w-4xl mx-auto text-[#713e26] leading-relaxed space-y-4">
            <p>
              At the core of Havins lies a steadfast commitment to quality over quantity. In a world where
              mass production often compromises on taste and integrity, Sravan and the Havins team refuse
              to cut corners. Instead, they place a premium on sourcing the freshest, organic ingredients,
              ensuring that each flavor is a testament to purity and excellence.
            </p>
            <p>
              From the creamy richness of organic dairy to the vibrant bursts of handpicked fruits, every
              ingredient is carefully selected to elevate the overall taste experience. Havins believes that
              true indulgence lies in savoring the natural flavors of the finest ingredients, free from
              artificial additives or preservatives.
            </p>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#31aaa6] mb-6">The Artistry Of Craftsmanship</h2>
          </div>
          <div className="max-w-4xl mx-auto text-[#713e26] leading-relaxed space-y-4">
            <p>
              Crafting artisanal ice cream is both a science and an art, and at Havins, it's a process
              that's taken very seriously. Each batch of ice cream is meticulously crafted by skilled
              artisans who understand the delicate balance of flavors and textures. From the initial
              recipe development to the final churn, every step is guided by a relentless pursuit of
              perfection.
            </p>
            <p>
              One of the hallmarks of Havins' craftsmanship is its attention to detail. Whether it's
              infusing a delicate floral note into a classic vanilla or creating a decadent swirl of
              chocolate in a creamy base, every flavor profile is thoughtfully curated to deliver a
              harmonious taste experience. It's this dedication to craftsmanship that sets Havins apart,
              ensuring that each scoop is a work of art in its own right.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;