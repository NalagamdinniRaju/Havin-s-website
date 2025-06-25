
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#31aaa6] mb-6">Contact Us</h2>
          <p className="text-[#713e26] text-lg">We respond to all messages within 24 hours.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#31aaa6]/5 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-[#713e26] mb-6">Don't Be a Stranger, Contact Us</h3>
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
                <h4 className="text-xl font-semibold text-[#713e26] mb-2">E-MAIL</h4>
                <p className="text-[#713e26]">Query@havinicecream.com</p>
                <p className="text-[#713e26]">Sravankalishetty@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#31aaa6] p-3 rounded-full">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#713e26] mb-2">PHONE</h4>
                <p className="text-[#713e26]">9182296602</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#31aaa6] p-3 rounded-full">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#713e26] mb-2">LOCATION</h4>
                <p className="text-[#713e26]">20-3-64/1B2, Upadhyaya Nagar, Tirupaathi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
