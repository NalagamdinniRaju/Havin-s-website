
const Testimonials = () => {
  return (
    <section className="py-20 bg-[#31aaa6]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#31aaa6] mb-6">What Our Customers Say</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-20 h-20 bg-[#31aaa6] rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">UK</span>
            </div>
            <blockquote className="text-xl text-[#713e26] mb-6 italic leading-relaxed">
              "Havins delivers unparalleled ice cream perfection with organic ingredients. Each scoop is a divine journey of taste and quality."
            </blockquote>
            <cite className="text-[#31aaa6] font-semibold text-lg">Udayasri Kalishetty</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
