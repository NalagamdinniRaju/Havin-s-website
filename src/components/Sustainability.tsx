
import { Leaf, Droplets, Zap, Package, TreePine, Recycle } from "lucide-react";

const Sustainability = () => {
  const steps = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Sourcing Ingredients",
      description: "We use locally-sourced ingredients to reduce carbon footprint."
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Reducing Water Wastage",
      description: "Minimize water usage in production and cleaning processes"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Energy Efficiency",
      description: "Shift to renewable energy sources for production facilities."
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Biodegradable Packing",
      description: "Opt for biodegradable packing"
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Carbon Offsetting",
      description: "Invest in projects that offset the carbon footprint of your operations."
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Waste Management",
      description: "Implement recycling and composting programs to manage waste responsibly."
    }

  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#31aaa6] mb-6">Steps Towards A More Sustainable Future</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-[#31aaa6]/5 p-8 rounded-2xl text-center hover:bg-[#31aaa6]/10 transition-colors duration-300">
              <div className="text-[#31aaa6] mb-4 flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#713e26] mb-4">{step.title}</h3>
              <p className="text-[#713e26] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
