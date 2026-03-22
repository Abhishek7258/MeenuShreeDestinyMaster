import React from "react";
import { Star, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const ProductGrid = () => {
 const products = [
  {
      id: 1,
      name: "Blue Stone Turquoise Bracelet",
      description: "The Nishapuri Feroza benefits the Throat (Vishuddhi) Chakra and Third eye (Agya) Chakra more pronouncedly than other colored varieties",
      originalPrice: "₹1,599",
      rating: 4.6,
      image: "./Images/pa1.jpg",
      price: "₹1,200",
      category: "Bracelet",
    },
    {
      id: 0,
      name: "Carrier growth Bracelet",
      description: "Career Growth Bracelet: A crystal bracelet with gemstones like citrine and amethyst designed to attract professional success and boost career confidence.",
      originalPrice: "₹1,299",
      rating: 4.9,
      image: "./Images/pa.jpg",
      price: "₹1,100",
      category: "Bracelet",
    },
    {
      id: 2,
      name: "Citrine Pure Stone",
      description: "For success in studies and Business",
      price: "₹1,500",
      originalPrice: "₹1,799",
      rating: 4.8,
      image: "./Images/pa2.jpg",
      category: "Stone",
    },
    {
      id: 3,
      name: "Rose Quartz",
      description: "For love bond and good understanding",
      price: "₹1,200",
      originalPrice: "₹1,499",
      rating: 4.5,
      image: "./Images/pa3.jpg",
      category: "Stone",
    },
    {
      id: 4,
      name: "Amethyst",
      description: "For stress relief, emotional relief, improved sleep",
      price: "₹1,100",
      originalPrice: "₹1,399",
      rating: 4.8,
      image: "./Images/pa5.jpg",
      category: "Stone",
    },
    {
      id: 5,
      name: "Pyrite Natural Stone Bracelet",
      description: "For business growth",
      price: "₹1,500",
      originalPrice: "₹1,799",
      rating: 4.7,
      image: "./Images/pa4.jpg",
      category: "Bracelet",
    },
    {
      id: 6,
      name: "Pyrite Bracelet Money Magnet",
      description: "Money magnet bracelet",
      price: "₹1,000",
      originalPrice: "₹1,299",
      rating: 4.9,
      image: "./Images/pa6.jpg",
      category: "Bracelet",
    },
    {
      id: 7,
      name: "Pure Rudraksha 5mukhi for Jupiter",
      description: "Enhance vitality, maintain blood pressure and balance all chakras",
      price: " ",
      originalPrice: " ",
      rating: 4.8,
      image: "./Images/p1.png",
      category: "Rudraksha",
    },
    {
      id: 8,
      name: "Lapis Lazuli Nandi",
      description: "Sacred Nandi statue in natural Lapis Lazuli for divine blessings",
      price: "",
      originalPrice: "",
      rating: 4.9,
      image: "./Images/p2.png",
      category: "Gemstone Idol",
    },
    {
      id: 9,
      name: "Copper Shree Yantra",
      description: "Sacred geometry yantra for prosperity and positive energy",
      price: "",
      originalPrice: "",
      rating: 4.7,
      image: "./Images/p3.png",
      category: "Yantra",
    },
    {
      id: 10,
      name: "Saphtik Mala for Crown Chakra",
      description: "Crystal mala for abundance and crown chakra activation",
      price: "",
      originalPrice: "",
      rating: 4.6,
      image: "./Images/p4.png",
      category: "Mala",
    },
    {
      id: 11,
      name: "Toilet Pacifier for Negative Energy",
      description: "Vastu remedy to remove negative energy from toilets",
      price: "",
      originalPrice: "",
      rating: 4.5,
      image: "./Images/p5.png",
      category: "Vastu Remedy",
    },
    {
      id: 12,
      name: "Natural Moonstone",
      description: "Enhance intuition, emotional balance and connect with lunar energy",
      price: "",
      originalPrice: "",
      rating: 4.7,
      image: "./Images/p6.png",
      category: "Gemstone",
    },
    {
      id: 13,
      name: "Rose Quartz Crystal",
      description: "Stone of unconditional love for heart chakra healing and self-love",
      price: "",
      originalPrice: "",
      rating: 4.6,
      image: "./Images/p7.png",
      category: "Gemstone",
    },
    {
      id: 14,
      name: "Pyrite Golden Stone",
      description: "Attract wealth, prosperity and protect from negative energies",
      price: "",
      originalPrice: "",
      rating: 4.8,
      image: "./Images/p8.png",
      category: "Gemstone",
    },
    {
      id: 15,
      name: "Rose Quartz Love Birds Pair",
      description: "Enhance love, harmony and strengthen romantic relationships",
      price: "",
      originalPrice: "",
      rating: 4.9,
      image: "./Images/p9.png",
      category: "Love Remedy",
    },
    {
      id: 16,
      name: "Wooden Soap Case for Rahu",
      description: "Remove negative effects of Rahu and purify daily cleansing rituals",
      price: "",
      originalPrice: "",
      rating: 4.4,
      image: "./Images/p10.png",
      category: "Vastu Remedy",
    },
  ];


  return (
    <>
    <Header title="Product"/>
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 py-8">
      {/* Header */}
     
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Sacred Crystal Products
        </h1>
        <p className="text-lg text-gray-600">
          Authentic spiritual remedies for cosmic harmony
        </p>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                {/* <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {Math.round(
                    (1 -
                      product.price.replace("₹", "").replace(",", "") /
                        product.originalPrice
                          .replace("₹", "")
                          .replace(",", "")) *
                      100
                  )}
                  % OFF
                </div> */}
                <div className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {product.category}
                </div>
              </div>

              {/* Product Details */}
              <div className="p-5">
                {/* Product Name */}
                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400 mr-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= Math.floor(product.rating)
                            ? "fill-current"
                            : ""
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">
                    ({product.rating})
                  </span>
                </div>
                <br />
                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-purple-700">
                      {product.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Link to="/form">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Buy Now</span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse pointer-events-none"></div>
      <div className="fixed top-40 right-20 w-1 h-1 bg-indigo-400 rounded-full animate-ping pointer-events-none"></div>
      <div className="fixed bottom-40 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce pointer-events-none"></div>
    </div>
    </>
  );
};

export default ProductGrid;
