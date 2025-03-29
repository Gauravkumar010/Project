import React from "react";

const products = [
  {
    img: "https://img.freepik.com/free-photo/red-composto-glass-jar-aroma-steam_114579-2422.jpg?uid=R179166254&semt=ais_hybrid",
    alt: "Ittar",
  },

  {
    img: "https://img.freepik.com/free-photo/fastening-buckle-briefcase_1098-13955.jpg?uid=R179166254&semt=ais_hybrid",
    alt: "Leather",
  },
  {
    img: "https://img.freepik.com/premium-photo/luxurious-silk-saree-fabric-with-metallic-sheen-created-with-generative-ai_419341-24389.jpg?uid=R179166254&semt=ais_hybrid",
    alt: "Silk Saree",
  },
  {
    img: "https://img.freepik.com/free-photo/terracotta-vase-with-indigenous-pattern_23-2151585725.jpg?uid=R179166254&semt=ais_hybrid",
    alt: "Pottery",
  },
];

const TopCollection = () => {
  return (
    <section className="text-center py-10 bg-white">
      <h3 className="text-lg font-semibold text-gray-500">Special Offer</h3>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">TOP COLLECTION</h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-6">
        This is a one-of-a-kind Reseller working at the intersection of modern
        logistics and ancient crafts made possible by the Uttar Pradesh
        Government.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg overflow-hidden  hover:scale-110 transition-all duration-500 cursor-pointer"
          >
           
            <img
              src={product.img}
              alt={product.alt}
              className="w-full h-60 object-cover "
            />                      
             <div className="absoulte  hover: ">
              <h1 >{product.alt}</h1>
            </div>
      

          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCollection;
