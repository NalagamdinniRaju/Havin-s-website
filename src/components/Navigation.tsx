
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";

// const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const menuItems = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Products", href: "/products" },
//     { name: "Contact", href: "/contact" },
//     { name: "Need Franchise", href: "/franchise" },
//   ];

//   // Check if we're on the home page for transparent navbar
//   const isHomePage = location.pathname === "/";

//   return (
//     <nav className={`fixed top-0 w-full z-50 shadow-sm transition-all duration-300 ${
//       isHomePage ? "bg-transparent" : "bg-white/95 backdrop-blur-sm"
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/">
//               <img 
//                 src="/lovable-uploads/0fa97ca7-b528-4eaa-bbd3-ae5b299c7408.png" 
//                 alt="Havin's Ice Cream" 
//                 className="h-12 w-auto"
//               />
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-8">
//               {menuItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
//                     location.pathname === item.href
//                       ? `${isHomePage ? "text-white border-b-2 border-white" : "text-[#31aaa6] border-b-2 border-[#31aaa6]"}`
//                       : `${isHomePage ? "text-white/90 hover:text-white" : "text-[#713e26] hover:text-[#31aaa6]"}`
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className={`p-2 ${isHomePage ? "text-white hover:text-white/80" : "text-[#713e26] hover:text-[#31aaa6]"}`}
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
//               {menuItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-lg ${
//                     location.pathname === item.href
//                       ? "text-[#31aaa6] bg-[#31aaa6]/10"
//                       : "text-[#713e26] hover:text-[#31aaa6] hover:bg-[#31aaa6]/5"
//                   }`}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
    { name: "Need Franchise", href: "/franchise" },
  ];

  const isHomePage = location.pathname === "/";

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  const navbarBgClass = isHomePage && !isScrolled
    ? "bg-transparent"
    : "bg-white/95 backdrop-blur-sm shadow-md";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navbarBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="/lovable-uploads/0fa97ca7-b528-4eaa-bbd3-ae5b299c7408.png"
                alt="Havin's Ice Cream"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${location.pathname === item.href
                      ? `${isHomePage && !isScrolled ? "text-white border-b-2 border-white" : "text-[#31aaa6] border-b-2 border-[#31aaa6]"}`
                      : `${isHomePage && !isScrolled ? "text-white/90 hover:text-white" : "text-[#713e26] hover:text-[#31aaa6]"}`
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 ${isHomePage && !isScrolled
                  ? "text-white hover:text-white/80"
                  : "text-[#713e26] hover:text-[#31aaa6]"
                }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-lg ${location.pathname === item.href
                      ? "text-[#31aaa6] bg-[#31aaa6]/10"
                      : "text-[#713e26] hover:text-[#31aaa6] hover:bg-[#31aaa6]/5"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
