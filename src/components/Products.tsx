
const Products = () => {
  const products = [
    { name: "Classic Vanilla", category: "Goody & Spesho Flavors", image: "🍦" },
    { name: "Chocolate Delight", category: "Goody & Spesho Flavors", image: "🍫" },
    { name: "Strawberry Bliss", category: "Fruto Flavors", image: "🍓" },
    { name: "Mango Paradise", category: "Fruto Flavors", image: "🥭" },
    { name: "Coconut Dream", category: "Fruto Flavors", image: "🥥" },
    { name: "Pistachio Cream", category: "Goody & Spesho Flavors", image: "🥜" },
  ];

  return (
    <section id="products" className="py-20 bg-[#31aaa6]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#31aaa6] mb-6">Our Products</h2>
          <p className="text-[#713e26] text-lg max-w-2xl mx-auto">
            Discover our carefully crafted collection of artisanal ice cream flavors, made with the finest organic ingredients.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#713e26] mb-8 text-center">Goody & Spesho Flavors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {products.filter(product => product.category === "Goody & Spesho Flavors").map((product, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-6xl mb-4 text-center">{product.image}</div>
                <h4 className="text-xl font-semibold text-[#713e26] text-center mb-2">{product.name}</h4>
                <p className="text-[#31aaa6] text-center text-sm">{product.category}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#ffa800] font-semibold">Many More....</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#713e26] mb-8 text-center">Fruto Flavors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {products.filter(product => product.category === "Fruto Flavors").map((product, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-6xl mb-4 text-center">{product.image}</div>
                <h4 className="text-xl font-semibold text-[#713e26] text-center mb-2">{product.name}</h4>
                <p className="text-[#31aaa6] text-center text-sm">{product.category}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#ffa800] font-semibold">Many More....</p>
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#ffa800] hover:bg-[#ff9500] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300">
            Craving For Ice Cream? Order Now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
