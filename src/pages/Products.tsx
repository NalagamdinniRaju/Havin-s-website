
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import { Link } from "lucide-react";

// const Products = () => {
//   const goodyflavors = [
//     { name: "Classic Vanilla", image: "🍦" },
//     { name: "Chocolate Delight", image: "🍫" },
//     { name: "Pistachio Cream", image: "🥜" },
//     { name: "Caramel Swirl", image: "🍮" },
//     { name: "Cookies & Cream", image: "🍪" },
//     { name: "Mint Chocolate", image: "🌿" },
//   ];

//   const frutoFlavors = [
//     { name: "Strawberry Bliss", image: "🍓" },
//     { name: "Mango Paradise", image: "🥭" },
//     { name: "Coconut Dream", image: "🥥" },
//     { name: "Blueberry Burst", image: "🫐" },
//     { name: "Peach Delight", image: "🍑" },
//     { name: "Banana Split", image: "🍌" },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navigation />

//       {/* Goody & Spesho Flavors */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-[#713e26] mb-4">Goody & Spesho Flavors</h2>
//             <p className="text-[#713e26] max-w-2xl mx-auto">
//               Premium artisanal flavors crafted with exotic ingredients and traditional techniques
//               for the ultimate indulgence experience.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
//             {goodyflavors.map((product, index) => (
//               <div key={index} className="bg-[#31aaa6]/5 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <div className="text-6xl mb-4 text-center">{product.image}</div>
//                 <h3 className="text-xl font-semibold text-[#713e26] text-center mb-2">{product.name}</h3>
//                 <p className="text-[#31aaa6] text-center text-sm">Goody & Spesho Flavors</p>
//               </div>
//             ))}
//           </div>
//           <p className="text-center text-[#ffa800] font-semibold text-lg">Many More....</p>
//         </div>
//       </section>

//       {/* Fruto Flavors */}
//       <section className="py-20 bg-[#31aaa6]/5">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-[#713e26] mb-4">Fruto Flavors</h2>
//             <p className="text-[#713e26] max-w-2xl mx-auto">
//               Fresh fruit-based flavors made with handpicked seasonal fruits,
//               delivering natural sweetness and vibrant taste.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
//             {frutoFlavors.map((product, index) => (
//               <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <div className="text-6xl mb-4 text-center">{product.image}</div>
//                 <h3 className="text-xl font-semibold text-[#713e26] text-center mb-2">{product.name}</h3>
//                 <p className="text-[#31aaa6] text-center text-sm">Fruto Flavors</p>
//               </div>
//             ))}
//           </div>
//           <p className="text-center text-[#ffa800] font-semibold text-lg">Many More....</p>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-[#31aaa6] mb-8">Craving For Ice Cream?</h2>
//           <button className="bg-[#ffa800] hover:bg-[#ff9500] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300">
//             Order Now!
//           </button>
//           <p className="text-[#713e26] mt-6">Now Available To Order Online</p>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Products;
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Products = () => {
  const goodyflavors = [
    { name: "Classic Vanilla", image: "🍦" },
    { name: "Chocolate Delight", image: "🍫" },
    { name: "Pistachio Cream", image: "🥜" },
    { name: "Caramel Swirl", image: "🍮" },
    { name: "Cookies & Cream", image: "🍪" },
    { name: "Mint Chocolate", image: "🌿" },
  ];

  const frutoFlavors = [
    { name: "Strawberry Bliss", image: "🍓" },
    { name: "Mango Paradise", image: "🥭" },
    { name: "Coconut Dream", image: "🥥" },
    { name: "Blueberry Burst", image: "🫐" },
    { name: "Peach Delight", image: "🍑" },
    { name: "Banana Split", image: "🍌" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-[#31aaa6]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#31aaa6] mb-6">Our Products</h1>
            <p className="text-xl text-[#713e26] max-w-3xl mx-auto">
              Discover our carefully crafted collection of artisanal ice cream flavors, made with the finest organic ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Goody & Spesho Flavors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#713e26] mb-4">Goody & Spesho Flavors</h2>
            <p className="text-[#713e26] max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {goodyflavors.map((product, index) => (
              <div key={index} className="bg-[#31aaa6]/5 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-6xl mb-4 text-center">{product.image}</div>
                <h3 className="text-xl font-semibold text-[#713e26] text-center mb-2">{product.name}</h3>
                <p className="text-[#31aaa6] text-center text-sm">Goody & Spesho Flavors</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#ffa800] font-semibold text-lg">Many More....</p>
        </div>
      </section>

      {/* Fruto Flavors */}
      <section className="py-20 bg-[#31aaa6]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#713e26] mb-4">Fruto Flavors</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {frutoFlavors.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-6xl mb-4 text-center">{product.image}</div>
                <h3 className="text-xl font-semibold text-[#713e26] text-center mb-2">{product.name}</h3>
                <p className="text-[#31aaa6] text-center text-sm">Fruto Flavors</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#ffa800] font-semibold text-lg">Many More....</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#31aaa6] mb-8">Craving For Ice Cream?</h2>
          <button className="bg-[#ffa800] hover:bg-[#ff9500] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300">
            Order Now!
          </button>
          <p className="text-[#713e26] mt-6">Now Available To Order Online</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;