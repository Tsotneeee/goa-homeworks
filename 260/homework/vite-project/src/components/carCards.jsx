import React from "react"

const CarCards = () => {
    const cars = [
        {id: 1, image: "/bmw.png", name: "BMW M4 Competition", description: "latest BMW sports car featuring a 3.0-liter twin-turbo inline-six engine producing up to 530 hp (390 kW) and 650 Nm of torque", price: "$100,000" },
        {id: 2, image: "/porsche.png", name: "Porsche 911", description: "The iconic sports car that defines precision engineering and performance.", price: "$114,400"},
        {id: 3, image: "/Audi_rs_e-tron_gt.png", name: "Audi RS e-tron GT", description: "A grand tourer that combines electric efficiency with breathtaking design.", price: "$147,100"},
        {id: 4, image: "/lambo.png", name: "Lamborghini Huracán", description: "Pure Italian passion delivered through a screaming V10 engine.", price: "$248,295"},
        {id: 5, image: "/ford.png", name: "Ford Mustang Mach-E", description: "The soul of a Mustang reimagined for the electric future.", price: "$42,995"},
        {id: 6, image: "/prius.png", name: "Toyota Prius", description: "This car is literaly for Georgia only and its a hybrid", price: '$3400'},
        {id: 7, image: "/mercedes.png", name: "Mercedes-AMG G 63 6x6", description: "The ultimate off-road luxury SUV with a powerful V8 bite.", price: "$179,000"},
        {id: 8, image: "/bentley.png", name: "Bentley Flying Spur", description: "Most luxurious sedan of Bentley manufacturers.", price: "$272,300"}
    ]
    return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">
          Featured Inventory
        </h2>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cars.map((car) => (
            <div 
              key={car.id} 
              className="bg-white rounded-2xl shadow-md flex flex-col justify-between overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
                  <span className="text-blue-600 font-semibold">{car.price}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                  {car.description}
                </p>

                
              </div>

            <button
                  className=" cursor-pointer w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center gap-2"
                  onClick={() => alert(`Added ${car.name} to cart!`)}
                >
                  Add to Cart
                </button>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarCards