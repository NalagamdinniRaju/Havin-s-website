
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import { Mail, Phone, MapPin } from "lucide-react";

// const Contact = () => {
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
//                 Home / Contact
//               </div>
//               <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
//                 Contact <span className="text-[#ffa800]">Us</span>
//               </h1>
//               <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-10 max-w-4xl">
//                 We respond to all messages within 24 hours. Get in touch with us for any queries, 
//                 feedback, or just to say hello!
//               </p>
//               <button className="bg-[#ffa800] hover:bg-[#ff9500] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
//                 Get In Touch →
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <div className="bg-[#31aaa6]/5 p-8 rounded-2xl">
//               <h2 className="text-2xl font-bold text-[#713e26] mb-6">Don't Be a Stranger, Contact Us</h2>
//               <form className="space-y-6">
//                 <div>
//                   <label className="block text-[#713e26] font-semibold mb-2">Your Name *</label>
//                   <input 
//                     type="text" 
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#31aaa6] focus:outline-none"
//                     placeholder="Your Name"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-[#713e26] font-semibold mb-2">Your E-mail *</label>
//                   <input 
//                     type="email" 
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#31aaa6] focus:outline-none"
//                     placeholder="Your E-mail"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-[#713e26] font-semibold mb-2">Your Phone *</label>
//                   <input 
//                     type="tel" 
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#31aaa6] focus:outline-none"
//                     placeholder="Your Phone"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-[#713e26] font-semibold mb-2">Your Message *</label>
//                   <textarea 
//                     rows={5}
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#31aaa6] focus:outline-none"
//                     placeholder="Your Message"
//                   ></textarea>
//                 </div>
//                 <button className="bg-[#ffa800] hover:bg-[#ff9500] text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 w-full">
//                   Send Now
//                 </button>
//               </form>
//             </div>

//             {/* Contact Information */}
//             <div className="space-y-8">
//               <div className="flex items-start space-x-4">
//                 <div className="bg-[#31aaa6] p-3 rounded-full">
//                   <Mail className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-[#713e26] mb-2">E-MAIL</h3>
//                   <p className="text-[#713e26]">Query@havinicecream.com</p>
//                   <p className="text-[#713e26]">Sravankalishetty@gmail.com</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="bg-[#31aaa6] p-3 rounded-full">
//                   <Phone className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-[#713e26] mb-2">PHONE</h3>
//                   <p className="text-[#713e26]">9182296602</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="bg-[#31aaa6] p-3 rounded-full">
//                   <MapPin className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-[#713e26] mb-2">LOCATION</h3>
//                   <p className="text-[#713e26]">20-3-64/1B2, Upadhyaya Nagar, Tirupaathi</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Contact;
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-[#31aaa6]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#31aaa6] mb-6">Contact Us</h1>
            <p className="text-xl text-[#713e26]">We respond to all messages within 24 hours.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-[#31aaa6]/5 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-[#713e26] mb-6">Don't Be a Stranger, Contact Us</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-[#713e26] font-semibold mb-2">Your Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#31aaa6] focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-[#713e26] font-semibold mb-2">Your E-mail *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#31aaa6] focus:outline-none"
                    placeholder="Your E-mail"
                  />
                </div>
                <div>
                  <label className="block text-[#713e26] font-semibold mb-2">Your Phone *</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#31aaa6] focus:outline-none"
                    placeholder="Your Phone"
                  />
                </div>
                <div>
                  <label className="block text-[#713e26] font-semibold mb-2">Your Message *</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#31aaa6] focus:outline-none"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button className="bg-[#ffa800] hover:bg-[#ff9500] text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 w-full">
                  Send Now
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#31aaa6] p-3 rounded-full">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#713e26] mb-2">E-MAIL</h3>
                  <p className="text-[#713e26]">Query@havinicecream.com</p>
                  <p className="text-[#713e26]">Sravankalishetty@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#31aaa6] p-3 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#713e26] mb-2">PHONE</h3>
                  <p className="text-[#713e26]">9182296602</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#31aaa6] p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#713e26] mb-2">LOCATION</h3>
                  <p className="text-[#713e26]">20-3-64/1B2, Upadhyaya Nagar, Tirupaathi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;