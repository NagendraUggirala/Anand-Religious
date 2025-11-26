import { ShoppingBag, Utensils, Cpu, Shirt, Layers, Heart, Home, Box } from "lucide-react";

const Industries = () => {
  const industries = [
    { icon: ShoppingBag, label: "Consumer Goods", color: "from-blue-500 to-primary" },
    { icon: Utensils, label: "Food Products & FMCG", color: "from-amber-500 to-brand-gold" },
    { icon: Cpu, label: "Electronics & Hardware", color: "from-purple-500 to-primary" },
    { icon: Shirt, label: "Textiles & Garments", color: "from-pink-500 to-brand-orange" },
    { icon: Layers, label: "Industrial Materials", color: "from-gray-600 to-primary" },
    { icon: Heart, label: "Health & Wellness", color: "from-red-500 to-brand-orange" },
    { icon: Home, label: "Lifestyle & Household", color: "from-green-500 to-brand-gold" },
    { icon: Box, label: "General Trading", color: "from-orange-500 to-brand-orange" },
  ];

  return (
    <section id="industries" className="py-24 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary">Industries</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Industries We Serve
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Providing trusted trading solutions across diverse sectors worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in text-center cursor-pointer border-2 border-transparent hover:border-primary/20 overflow-hidden"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Icon Container */}
              <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <industry.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              {/* Label */}
              <h3 className="relative z-10 text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                {industry.label}
              </h3>
              
              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;

