import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Collections from './components/Collections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <Collections />
      </main>
      <Footer />
    </div>
  );
}

export default App;