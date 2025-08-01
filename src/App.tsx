import React, { useEffect, useState } from 'react';
import { Menu, X, ShoppingBag, Heart, Search, Star, Truck, Shield, RotateCcw, User, Instagram, Facebook, Twitter } from 'lucide-react';

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
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

const featuredProducts = [
  { id: 1, name: 'Vestido Negro Elegante', price: '$70', image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg' },
  { id: 2, name: 'Blusa Floral Negra', price: '$40', originalPrice: null, image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'Blusas', isNew: false },
  { id: 3, name: 'Falda Midi Negra', price: '$90', originalPrice: '$2,100', image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'Faldas', isNew: false },
  { id: 4, name: 'Chaqueta Negra Premium', price: '$100', originalPrice: null, image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'Chaquetas', isNew: true },
  { id: 5, name: 'Pantalón Negro Elegante', price: '$200', originalPrice: '$2,500', image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'Pantalones', isNew: false },
  { id: 6, name: 'Conjunto Negro Completo', price: '$400', originalPrice: null, image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'Conjuntos', isNew: true }
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
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className={`text-2xl font-serif font-bold transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            } ${scrollY > 50 ? 'text-black' : 'text-white'}`}>
              La Flor Negra
            </div>
            
     <div className="hidden md:flex space-x-8">
  {[
    { label: 'Home', id: 'home' },
    { label: 'Collections', id: 'collections' },
    { label: 'Products', id: 'products' },
    { label: 'About Us', id: 'aboutus' },
    { label: 'Contact', id: 'contact' },
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

<section id="home" className="min-h-screen flex items-center justify-center bg-gray-100">
  <h1 className="text-4xl font-bold">Welcome to La Flor Negra</h1>
</section>

<section id="collections" className="min-h-screen p-8 bg-white">
  <h2 className="text-3xl font-semibold mb-4">Our Collections</h2>
  <p className="text-gray-600">Showcase your best-selling styles here...</p>
</section>

<section id="products" className="min-h-screen p-8 bg-gray-50">
  <h2 className="text-3xl font-semibold mb-4">Featured Products</h2>
  <p className="text-gray-600">Highlight key items or drop in your card components.</p>
</section>

<section id="aboutus" className="min-h-screen p-8 bg-white">
  <h2 className="text-3xl font-semibold mb-4">About Us</h2>
  <p className="text-lg text-gray-700 max-w-xl">
    La Flor Negra is a modern brand blending elegance and identity. We design with purpose, crafted to empower.
  </p>
</section>

<section id="contact" className="min-h-screen p-8 bg-gray-100">
  <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
  <p className="text-lg text-gray-700">Email: info@laflornegra.com</p>
  <p className="text-lg text-gray-700">Phone: (123) 456-7890</p>
</section>

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
              
              <button onClick={() => alert('Button clicked!')} 
                className={`md:hidden hover:text-rose-500 transition-colors duration-300 ${
                  scrollY > 50 ? 'text-gray-700' : 'text-white'
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white/95 backdrop-blur-md shadow-lg`}>
          <div className="px-4 py-2 space-y-2">
            {['Inicio', 'Colecciones', 'Productos', 'Nosotros', 'Contacto'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-700 hover:text-rose-500 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-rose-400/40 rounded-full animate-float ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                left: `${15 + i * 12}%`,
                top: `${25 + i * 8}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${4 + i * 0.3}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className={`text-6xl md:text-8xl font-serif font-bold mb-6 text-white transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            La Flor Negra
          </h1>
          <p className={`text-xl md:text-2xl text-rose-200 mb-8 transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Moda Femenina • Elegancia • Estilo Único
          </p>
          <p className={`text-lg text-gray-300 mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Descubre nuestra exclusiva colección de prendas diseñadas para la mujer moderna que busca sofisticación y comodidad en cada ocasión.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => alert('Button clicked!')} className={`bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '700ms' }}>
              Ver Colección
            </button>
            <button onClick={() => alert('Button clicked!')} className={`border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms' }}>
              Catálogo
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-rose-400 rounded-full p-1">
            <div className="w-1 h-3 bg-rose-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="colecciones" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-serif font-bold text-center mb-16 animate-on-scroll">
            Nuestras Colecciones
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div 
                key={collection.name}
                className="group cursor-pointer animate-on-scroll"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={collection.image} 
                    alt={collection.name}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-serif font-bold mb-2">{collection.name}</h3>
                    <p className="text-gray-200">{collection.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="productos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-serif font-bold text-center mb-16 animate-on-scroll">
            Productos Destacados
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 animate-on-scroll overflow-hidden"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Nuevo
                    </span>
                  )}
                  <button onClick={() => alert('Button clicked!')} 
                    onClick={() => toggleLike(product.id)}
                    className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-300"
                  >
                    <Heart 
                      className={`w-5 h-5 transition-colors duration-300 ${
                        likedItems.includes(product.id) ? 'text-rose-500 fill-current' : 'text-gray-600'
                      }`} 
                    />
                  </button>
                  
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button onClick={() => alert('Button clicked!')} 
                      onClick={addToCart}
                      className="bg-white text-black px-6 py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-gray-100"
                    >
                      Agregar al Carrito
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <span className="text-sm text-rose-500 font-semibold">{product.category}</span>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-rose-500 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">(4.8)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Envío Gratis</h3>
              <p className="text-gray-600">En compras mayores a $1,500 MXN</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Devoluciones</h3>
              <p className="text-gray-600">30 días para cambios y devoluciones</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Compra Segura</h3>
              <p className="text-gray-600">Pagos 100% seguros y protegidos</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-5xl font-serif font-bold mb-8">Nuestra Historia</h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                La Flor Negra nace de la pasión por crear prendas que celebren la feminidad y el empoderamiento de la mujer moderna.
              </p>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Cada diseño cuenta una historia de elegancia, comodidad y versatilidad, creado para acompañar a la mujer en cada momento de su vida, desde el día más casual hasta la ocasión más especial.
              </p>
              
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-rose-500 mb-2">500+</div>
                  <p className="text-sm text-gray-600">Diseños Únicos</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-rose-500 mb-2">10K+</div>
                  <p className="text-sm text-gray-600">Clientas Felices</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-rose-500 mb-2">5</div>
                  <p className="text-sm text-gray-600">Años de Experiencia</p>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="relative">
                <div className="bg-gradient-to-br from-rose-100 to-rose-200 p-8 rounded-2xl">
                  <img 
                    src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Nuestra historia"
                    className="w-full h-96 object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-rose-400/20 to-rose-600/20 rounded-2xl blur-xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4 animate-on-scroll">
            Mantente al Día
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-on-scroll">
            Suscríbete para recibir las últimas tendencias y ofertas exclusivas
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-on-scroll">
            <input 
              type="email" 
              placeholder="Tu email"
              className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-rose-400 transition-colors duration-300"
            />
            <button onClick={() => alert('Button clicked!')} className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
              Suscribirse
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">La Flor Negra</h3>
              <p className="text-gray-400 mb-4">
                Moda femenina que celebra la elegancia y el empoderamiento de la mujer moderna.
              </p>
              <div className="flex space-x-4">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-rose-400 cursor-pointer transition-colors duration-300" />
                <Facebook className="w-5 h-5 text-gray-400 hover:text-rose-400 cursor-pointer transition-colors duration-300" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-rose-400 cursor-pointer transition-colors duration-300" />
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Categorías</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Vestidos</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Blusas</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Pantalones</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Accesorios</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Ayuda</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Guía de Tallas</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Envíos</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Devoluciones</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contacto@laflornegra.com</li>
                <li>+52 55 1234 5678</li>
                <li>Lun-Vie: 9:00 - 18:00</li>
                <li>Sáb: 10:00 - 16:00</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 La Flor Negra. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;