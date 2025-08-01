import React, { useEffect, useState } from 'react';
import {
  Menu, X, ShoppingBag, Heart, Search, Star, Truck, Shield,
  RotateCcw, User, Instagram, Facebook, Twitter
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [likedItems, setLikedItems] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    setTimeout(() => setIsLoaded(true), 100);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const featuredProducts = [
    { id: 1, name: 'Vestido Negro Elegante', price: '$70', image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg' },
    { id: 2, name: 'Blusa Floral Negra', price: '$40', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'Blusas', isNew: false },
    { id: 3, name: 'Falda Midi Negra', price: '$90', originalPrice: '$2,100', image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'Faldas', isNew: false },
    { id: 4, name: 'Chaqueta Negra Premium', price: '$100', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'Chaquetas', isNew: true },
    { id: 5, name: 'Pantalón Negro Elegante', price: '$200', originalPrice: '$2,500', image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'Pantalones', isNew: false },
    { id: 6, name: 'Conjunto Negro Completo', price: '$400', image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'Conjuntos', isNew: true }
  ];

  const collections = [
    { name: 'Colección Noche', description: 'Elegancia para ocasiones especiales', image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Casual Chic', description: 'Comodidad con estilo para el día a día', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Oficina Moderna', description: 'Profesionalismo con un toque de sofisticación', image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600' }
  ];

  const toggleLike = (productId: number) => {
    setLikedItems(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className={`text-2xl font-serif font-bold transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          } ${scrollY > 50 ? 'text-black' : 'text-white'}`}>
            La Flor Negra
          </div>

          <div className="hidden md:flex space-x-8">
            {[
              { label: 'Home', id: 'hero' },
              { label: 'Collections', id: 'colecciones' },
              { label: 'Products', id: 'productos' },
              { label: 'About Us', id: 'nosotros' },
              { label: 'Contact', id: 'footer' },
            ].map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`hover:text-rose-500 transition-all duration-300 transform hover:scale-105 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                } ${scrollY > 50 ? 'text-gray-700' : 'text-white'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Search className={`w-5 h-5 cursor-pointer hover:text-rose-500 transition-colors duration-300 ${
              scrollY > 50 ? 'text-gray-700' : 'text-white'
            }`} />
            <User className={`w-5 h-5 cursor-pointer hover:text-rose-500 transition-colors duration-300 ${
              scrollY > 50 ? 'text-gray-700' : 'text-white'
            }`} />
            <div className="relative">
              <ShoppingBag className={`w-5 h-5 cursor-pointer hover:text-rose-500 transition-colors duration-300 ${
                scrollY > 50 ? 'text-gray-700' : 'text-white'
              }`} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <button
              className={`md:hidden hover:text-rose-500 transition-colors duration-300 ${
                scrollY > 50 ? 'text-gray-700' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white/95 backdrop-blur-md shadow-lg`}>
          <div className="px-4 py-2 space-y-2">
            {[
              { label: 'Inicio', id: 'hero' },
              { label: 'Colecciones', id: 'colecciones' },
              { label: 'Productos', id: 'productos' },
              { label: 'Nosotros', id: 'nosotros' },
              { label: 'Contacto', id: 'footer' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block py-2 text-gray-700 hover:text-rose-500 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Your existing sections like Hero, Collections, Products, About, Newsletter, Footer stay unchanged */}
      {/* Add the rest of your sections below exactly how you have them, ensuring ID tags like "hero", "colecciones", "productos", "nosotros", "footer" match the nav links */}

    </div>
  );
}

export default App;
