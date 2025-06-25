
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import { CheckCircle, Users, TrendingUp, Award } from "lucide-react";

// const Franchise = () => {
//   const benefits = [
//     {
//       icon: <Award className="w-8 h-8" />,
//       title: "Proven Business Model",
//       description: "Join a successful ice cream brand with established operations and quality standards."
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Comprehensive Training",
//       description: "Complete training program covering operations, quality control, and customer service."
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8" />,
//       title: "Marketing Support",
//       description: "Full marketing and promotional support to help you succeed in your local market."
//     },
//     {
//       icon: <CheckCircle className="w-8 h-8" />,
//       title: "Quality Assurance",
//       description: "Maintain the highest quality standards with our proven recipes and processes."
//     }
//   ];

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
//                 Home / Franchise
//               </div>
//               <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
//                 Franchise <span className="text-[#ffa800]">Opportunities</span>
//               </h1>
//               <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-10 max-w-4xl">
//                 Join the Havin's family and bring premium artisanal ice cream to your community. 
//                 Build a profitable business with our proven model.
//               </p>
//               <button className="bg-[#ffa800] hover:bg-[#ff9500] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
//                 Start Your Journey →
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Havin's */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold text-[#31aaa6] mb-6">Why Choose Havin's Franchise?</h2>
//             <p className="text-[#713e26] max-w-2xl mx-auto">
//               Partner with us to build a profitable business while serving exceptional ice cream to your community.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {benefits.map((benefit, index) => (
//               <div key={index} className="bg-[#31aaa6]/5 p-8 rounded-2xl hover:bg-[#31aaa6]/10 transition-colors duration-300">
//                 <div className="text-[#31aaa6] mb-4">
//                   {benefit.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-[#713e26] mb-4">{benefit.title}</h3>
//                 <p className="text-[#713e26] leading-relaxed">{benefit.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Franchise Process */}
//       <section className="py-20 bg-[#31aaa6]/5">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold text-[#31aaa6] mb-6">How It Works</h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="bg-[#31aaa6] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
//                 1
//               </div>
//               <h3 className="text-xl font-semibold text-[#713e26] mb-4">Apply</h3>
//               <p className="text-[#713e26]">Submit your franchise application and we'll review your proposal.</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-[#31aaa6] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
//                 2
//               </div>
//               <h3 className="text-xl font-semibold text-[#713e26] mb-4">Training</h3>
//               <p className="text-[#713e26]">Complete our comprehensive training program for operations and quality.</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-[#31aaa6] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
//                 3
//               </div>
//               <h3 className="text-xl font-semibold text-[#713e26] mb-4">Launch</h3>
//               <p className="text-[#713e26]">Open your Havin's outlet with full support from our team.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-[#31aaa6] mb-8">Ready to Start Your Journey?</h2>
//           <p className="text-[#713e26] mb-8 text-lg">
//             Contact us today to learn more about franchise opportunities and start your successful ice cream business.
//           </p>
//           <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
//             <button className="bg-[#ffa800] hover:bg-[#ff9500] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300">
//               Apply for Franchise
//             </button>
//             <button className="border-2 border-[#31aaa6] text-[#31aaa6] hover:bg-[#31aaa6] hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300">
//               Download Brochure
//             </button>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Franchise;
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, Users, TrendingUp, Award } from "lucide-react";

const Franchise = () => {
  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Business Model",
      description: "Join a successful ice cream brand with established operations and quality standards."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comprehensive Training",
      description: "Complete training program covering operations, quality control, and customer service."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Marketing Support",
      description: "Full marketing and promotional support to help you succeed in your local market."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Maintain the highest quality standards with our proven recipes and processes."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-[#31aaa6]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#31aaa6] mb-6">Franchise Opportunities</h1>
            <p className="text-xl text-[#713e26] max-w-3xl mx-auto">
              Join the Havin's family and bring premium artisanal ice cream to your community
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Havin's */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#31aaa6] mb-6">Why Choose Havin's Franchise?</h2>
            <p className="text-[#713e26] max-w-2xl mx-auto">
              Partner with us to build a profitable business while serving exceptional ice cream to your community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-[#31aaa6]/5 p-8 rounded-2xl hover:bg-[#31aaa6]/10 transition-colors duration-300">
                <div className="text-[#31aaa6] mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#713e26] mb-4">{benefit.title}</h3>
                <p className="text-[#713e26] leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Process */}
      <section className="py-20 bg-[#31aaa6]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#31aaa6] mb-6">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#31aaa6] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-[#713e26] mb-4">Apply</h3>
              <p className="text-[#713e26]">Submit your franchise application and we'll review your proposal.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#31aaa6] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-[#713e26] mb-4">Training</h3>
              <p className="text-[#713e26]">Complete our comprehensive training program for operations and quality.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#31aaa6] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-[#713e26] mb-4">Launch</h3>
              <p className="text-[#713e26]">Open your Havin's outlet with full support from our team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#31aaa6] mb-8">Ready to Start Your Journey?</h2>
          <p className="text-[#713e26] mb-8 text-lg">
            Contact us today to learn more about franchise opportunities and start your successful ice cream business.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="bg-[#ffa800] hover:bg-[#ff9500] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300">
              Apply for Franchise
            </button>
            <button className="border-2 border-[#31aaa6] text-[#31aaa6] hover:bg-[#31aaa6] hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Franchise;