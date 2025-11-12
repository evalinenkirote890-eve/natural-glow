import React from "react";
import { Star } from "lucide-react";
import customerImg from "../../assets/images/customer.jpg"; 

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-rose-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          What Our <span className="text-rose-500">Customers</span> Say
        </h2>

        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg hover:shadow-rose-100 transition duration-300">
          
          <img
            src={customerImg}
            alt="Happy customer"
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover shadow-md"
          />

          
          <div className="flex justify-center mb-4 text-rose-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="#f43f5e" stroke="#f43f5e" />
            ))}
          </div>

          
          <p className="text-gray-600 mb-6 leading-relaxed italic">
            “I absolutely love Natural Glow! My skin has never felt this fresh
            and smooth. The products smell amazing and are so gentle — truly a
            self-care essential!”
          </p>

    
          <h3 className="font-semibold text-gray-800 text-lg">Amelia K.</h3>
          <p className="text-sm text-gray-500">Nairobi, Kenya</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;