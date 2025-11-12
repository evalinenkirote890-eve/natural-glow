import React from "react";
import { Sparkles, Leaf, Droplets } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-glow-dark mb-12">
          Why Choose <span className="text-glow-light">Natural Glow</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="p-8 rounded-2xl shadow-lg bg-glow-light/10 hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              <Leaf className="w-10 h-10 text-glow-dark" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Pure Ingredients
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We use clean, eco-friendly ingredients carefully selected to
              protect your skin and the planet.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-8 rounded-2xl shadow-lg bg-glow-light/10 hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              <Sparkles className="w-10 h-10 text-glow-dark" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Radiant Results
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Experience a naturally luminous glow with skincare that
              rejuvenates from within.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-8 rounded-2xl shadow-lg bg-glow-light/10 hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              <Droplets className="w-10 h-10 text-glow-dark" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Hydration Focused
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Deep hydration formulas that refresh, soften, and protect your
              skin barrier all day long.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;