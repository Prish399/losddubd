const products = [
  {
    id: 1,
    name: 'AeroGlide Runners',
    price: '\$120.00',
    imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop',
    category: 'Running',
  },
  {
    id: 2,
    name: 'Urban Explorer',
    price: '\$95.00',
    imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop',
    category: 'Casual',
  },
  {
    id: 3,
    name: 'Classic Loafers',
    price: '\$150.00',
    imageUrl: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1975&auto=format&fit=crop',
    category: 'Formal',
  },
  {
    id: 4,
    name: 'TrailBlazer Boots',
    price: '\$180.00',
    imageUrl: 'https://images.unsplash.com/photo-1521093470119-a3acdc43374a?q=80&w=1974&auto=format&fit=crop',
    category: 'Hiking',
  },
];

const FeaturedProducts = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            New Arrivals
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Check out the latest and greatest from our collections.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-900">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-500 mt-1">{product.category}</p>
                <p className="text-lg font-medium text-gray-900 mt-2">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;