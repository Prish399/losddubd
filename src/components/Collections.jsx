const collections = [
  {
    name: "Men's Collection",
    description: 'Style and comfort for every occasion',
    imageSrc: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop',
    href: '#',
  },
  {
    name: "Women's Collection",
    description: 'Find your perfect pair',
    imageSrc: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2080&auto=format&fit=crop',
    href: '#',
  },
];

const Collections = () => {
  const USD_TO_INR = 83;

  const convertCurrency = (price) => {
    return `₹${(price * USD_TO_INR).toFixed(2)}`;
  };

  return (
    <div className="bg-gray-100 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Shop by Collection
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Explore our curated collections for men and women.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 sm:gap-x-8">
          {collections.map((collection) => (
            <div key={collection.name} className="group relative">
              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 shadow-lg transition-all duration-300 transform group-hover:scale-105">
                <img
                  src={collection.imageSrc}
                  alt={collection.name}
                  className="w-full h-full object-center object-cover"
                />
                 <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <h3 className="text-2xl font-extrabold text-white">
                  <a href={collection.href}>
                    <span className="absolute inset-0" />
                    {collection.name}
                  </a>
                </h3>
                <p className="mt-2 text-base font-semibold text-gray-200">{collection.description}</p>
                <p className="mt-2 text-lg font-semibold text-gray-200">{`Price: ${convertCurrency(50)}`}</p> {/* Assuming price is $50 */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;