/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// Change adidas shoe cost to display in Indian Rupees
// Assuming there is a component where the product prices are displayed
// Modify that component to display the cost of adidas shoe in Indian Rupees

// Example component where product prices are displayed
// This is just a placeholder, please modify according to your actual component structure
const ProductPrices = () => {
  return (
    <div>
      <p>Adidas Shoe: ₹5000</p>
      <p>Nike Shoe: $100</p>
      <p>Puma Shoe: ₹3000</p>
    </div>
  );
};

export default ProductPrices;