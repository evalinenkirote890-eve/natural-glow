import React from "react";
import Card from "../common/Cards"; 
import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";

const Products = () => {
  return (
    <section id="products" className="py-20 bg-rose-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Our Featured <span className="text-rose-500">Products</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            image={product1}
            title="Hydrating Glow Cream"
            description="A nourishing formula infused with rose and aloe to deeply hydrate and brighten your skin."
          />
          <Card
            image={product2}
            title="Natural Radiance Serum"
            description="Packed with antioxidants and vitamins to give your skin a healthy, lasting glow."
          />
          <Card
            image={product3}
            title="Soothing Clay Mask"
            description="Detoxifies, refreshes, and balances your skin using natural minerals and botanical extracts."
          />
        </div>
      </div>
    </section>
  );
};

export default Products;