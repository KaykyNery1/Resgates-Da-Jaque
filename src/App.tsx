import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Phone, Instagram, MapPin, Mail, DollarSign, Users, Shield, Copy, Check } from 'lucide-react';
import { PawPrint } from "lucide-react";


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pixCopied, setPixCopied] = useState(false);

  const pixKey = '040.533.271-80';

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const copyPixKey = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setPixCopied(true);
      setTimeout(() => setPixCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy PIX key:', err);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPixCopied(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <div className="flex items-center space-x-2">
        <PawPrint className="h-8 w-8 text-blue-600" />
        <span className="text-xl font-bold text-gray-900">Resgates da Jaque</span>
      </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">INÍCIO</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">SOBRE NÓS</button>
                <button onClick={() => scrollToSection('help')} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">COMO AJUDAR</button>
                <button onClick={() => scrollToSection('transparency')} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">TRANSPARÊNCIA</button>
                <button onClick={() => scrollToSection('location')} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">LOCALIZAÇÃO</button>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <button onClick={() => scrollToSection('home')} className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors">Início</button>
              <button onClick={() => scrollToSection('about')} className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors">Sobre Nós</button>
              <button onClick={() => scrollToSection('help')} className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors">Como Ajudar</button>
              <button onClick={() => scrollToSection('transparency')} className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors">Transparência</button>
              <button onClick={() => scrollToSection('location')} className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors">Localização</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-on-scroll">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Animais resgatados, <span className="text-blue-600">que precisam da sua ajuda!</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Aqui acreditamos que todo animal merece amor, cuidado e a oportunidade de recomeçar. Junte-se a nós e faça parte dessa missão de transformar vidas e espalhar esperança.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={openModal}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border-0 focus:ring-4 focus:ring-blue-300"
                >
                  <Heart className="h-7 w-7 inline mr-3" />
                  Doe Agora!
                </button>
                <a
                  href="https://www.instagram.com/resgatesdajaque/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  Conheça Nosso Lar
                </a>
              </div>
            </div>
            <div className="fade-on-scroll">
              <img 
                src="https://www.petz.com.br/blog/wp-content/uploads/2019/02/resgate-de-animais.jpg" 
                alt="Animais resgatados" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">SOBRE NÓS</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça a nossa trajetória.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="fade-on-scroll">
              <img 
                src="https://www.universodasaudeanimal.com.br/wp-content/uploads/sites/57/2021/07/Cacho-e-gato-juntos-no-chao-posando-pra-foto.jpg" 
                alt="Jaque com animais resgatados" 
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="fade-on-scroll">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa história</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                O Resgates da Jaque nasceu de um sonho de infância: ter um lugar onde fosse possível acolher e cuidar de animais vítimas de abandono e maus-tratos. Há 5 anos, esse sonho se tornou realidade quando conquistamos um espaço próprio, que hoje abriga diversos animais resgatados e em recuperação. Nossa missão é dar a eles uma nova chance de vida, cercada de carinho, cuidado e dignidade.

Tudo isso só é possível graças às doações e ao apoio de pessoas que acreditam em nosso trabalho e nos acompanham pelas redes sociais. Cada contribuição faz a diferença e nos ajuda a continuar transformando histórias de dor em histórias de esperança.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Com o apoio da comunidade local, o Resgates da Jaque nasceu como um projeto dedicado ao resgate, tratamento e reabilitação de animais abandonados, sempre com o objetivo de encontrar lares amorosos para cada um deles.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* How to Help */}
      <section id="help" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Como Ajudar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sua ajuda faz toda a diferença na vida dos nossos animais resgatados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-on-scroll">
            {/* Financial Donations */}
            <div className="bg-blue-900 rounded-xl p-6 text-center hover:bg-blue-800 transition-colors duration-200">
              <DollarSign className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Doações Financeiras</h3>
              <p className="text-blue-100 mb-4 text-sm">Contribuições para alimentação, cuidados veterinários e manutenção dos abrigos.</p>
              <div className="bg-white bg-opacity-20 p- rounded-lg mb-">
              
              
              </div>
              <button 
                onClick={openModal}
                className="w-full bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors"
              >
                Fazer Doação
              </button>
            </div>
            
            {/* Material Donations */}
            <div className="bg-blue-900 rounded-xl p-6 text-center hover:bg-blue-800 transition-colors duration-200">
              <Heart className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Doações Materiais</h3>
              <p className="text-blue-100 mb-4 text-sm">Ração, medicamentos, produtos de limpeza e materiais de conforto.</p>
              <a
                href="https://wa.me/556186620978?text=Olá! Gostaria de fazer uma doação de materiais. Como posso ajudar?"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors block text-center"
              >
                Entre em Contato
              </a>
            </div>
            
            {/* Volunteer */}
            <div className="bg-blue-900 rounded-xl p-6 text-center hover:bg-blue-800 transition-colors duration-200">
              <Users className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Seja Voluntário</h3>
              <p className="text-blue-100 mb-4 text-sm">Dedique seu tempo para cuidados diários, transporte e apoio às atividades.</p>
              <a
                href="https://wa.me/556186620978?text=Olá! Tenho interesse em ser voluntário(a). Como posso contribuir?"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors block text-center"
              >
                Quero Ajudar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section id="transparency" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparência</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acreditamos na transparência total. Veja como suas doações são utilizadas
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 fade-on-scroll">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Gastos dos últimos meses</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-5 bg-blue-900 bg-opacity-10 backdrop-blur-sm rounded-xl border border-blue-200 hover:bg-opacity-15 transition-all duration-300 hover:shadow-md">
                  <span className="text-blue-900 font-semibold">Ração e Alimentação</span>
                  <span className="text-blue-900 font-bold text-lg">R$ 8.000,00</span>
                </div>
                <div className="flex justify-between items-center p-5 bg-blue-900 bg-opacity-10 backdrop-blur-sm rounded-xl border border-blue-200 hover:bg-opacity-15 transition-all duration-300 hover:shadow-md">
                  <span className="text-blue-900 font-semibold">Medicamentos</span>
                  <span className="text-blue-900 font-bold text-lg">R$ 1.800,00</span>
                </div>
                <div className="flex justify-between items-center p-5 bg-blue-900 bg-opacity-10 backdrop-blur-sm rounded-xl border border-blue-200 hover:bg-opacity-15 transition-all duration-300 hover:shadow-md">
                  <span className="text-blue-900 font-semibold">Consultas Veterinárias</span>
                  <span className="text-blue-900 font-bold text-lg">R$ 6.000,00</span>
                </div>
                <div className="flex justify-between items-center p-5 bg-blue-900 bg-opacity-10 backdrop-blur-sm rounded-xl border border-blue-200 hover:bg-opacity-15 transition-all duration-300 hover:shadow-md">
                  <span className="text-blue-900 font-semibold">Materiais e Equipamentos</span>
                  <span className="text-blue-900 font-bold text-lg">R$ 1.000,00</span>
                </div>
                <div className="border-t border-blue-200 pt-6 mt-6">
                  <div className="flex justify-between items-center p-4 bg-blue-900 bg-opacity-20 rounded-xl">
                    <span className="text-blue-900 font-bold text-xl">Total:</span>
                    <span className="text-blue-900 font-bold text-xl">R$ 16.800,00</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Estatísticas de Impacto</h3>
              <div className="space-y-4">
                <div className="text-center p-6 bg-blue-900 bg-opacity-10 backdrop-blur-sm rounded-xl border border-blue-200 hover:bg-opacity-15 transition-all duration-300 hover:shadow-md">
                  <div className="text-4xl font-bold text-blue-900 mb-3">173</div>
                  <p className="text-blue-900 font-semibold text-lg">Animais Resgatados</p>
                </div>
                <div className="text-center p-6 bg-blue-900 bg-opacity-10 backdrop-blur-sm rounded-xl border border-blue-200 hover:bg-opacity-15 transition-all duration-300 hover:shadow-md">
                  <div className="text-4xl font-bold text-blue-900 mb-3">3</div>
                  <p className="text-blue-900 font-semibold text-lg">Adoções Realizadas</p>
                </div>
                <div className="text-center p-6 bg-blue-900 bg-opacity-10 backdrop-blur-sm rounded-xl border border-blue-200 hover:bg-opacity-15 transition-all duration-300 hover:shadow-md">
                  <div className="text-4xl font-bold text-blue-900 mb-3">160</div>
                  <p className="text-blue-900 font-semibold text-lg">Animais Atualmente Abrigados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-on-scroll">
        
            
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-on-scroll">
              <div className="bg-blue-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Localização</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Endereço:</p>
                      <p className="text-gray-700">Jardim do Ingá, Luziânia<br />Goiás, Brasil</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">WhatsApp:</p>
                      <a href="https://wa.me/556186620978" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">+55 (61) 8662-0978</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Instagram className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Instagram:</p>
                      <a href="https://www.instagram.com/resgatesdajaque/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        @resgatesdajaque
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="fade-on-scroll">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Por que sua ajuda é essencial?</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Mais de 160 animais dependem totalmente dos nossos cuidados, com gastos mensais acima de <strong className="text-blue-600"> R$16.000</strong>. Sua doação garante tratamento, alimento e a chance de um recomeço digno. Com sua ajuda, transformamos sofrimento em esperança.
                  </p>
                  <p>
                    
                  </p>
                  <p>
                    Cada doação, por menor que seja, significa esperança, cuidado e a chance de um novo começo.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600 mt-6">
                    <p className="text-blue-900 font-medium">
                      "Não podemos salvar todos os animais do mundo, mas podemos mudar o mundo para cada animal que salvamos."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <PawPrint className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">Resgates da Jaque</span>
              </div>
              <p className="text-gray-300 mb-4">
                Animais resgatados que precisam da sua ajuda. Dedicados ao bem-estar e proteção de animais abandonados em Luziânia, Goiás.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/resgatesdajaque/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://wa.me/5561866620978" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
                  <Phone className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-colors">Sobre Nós</button></li>
                <li><button onClick={() => scrollToSection('help')} className="text-gray-300 hover:text-blue-400 transition-colors">Como Ajudar</button></li>
                <li><button onClick={() => scrollToSection('transparency')} className="text-gray-300 hover:text-blue-400 transition-colors">Transparência</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2">
                <p className="text-gray-300 flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Jardim do Ingá, Luziânia, GO
                </p>
                <p className="text-gray-300 flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <a href="https://wa.me/556186620978" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">+55 (61) 8662-0978</a>
                </p>
                <p className="text-gray-300 flex items-center">
                  <Instagram className="h-4 w-4 mr-2" />
                  <a href="https://www.instagram.com/resgatesdajaque/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">@resgatesdajaque</a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2025 Resgates da Jaque. Todos os direitos reservados. Feito com ❤️ para os animais.
            </p>
          </div>
        </div>
      </footer>

      {/* Donation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 relative">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"a
            >
              <X className="h-6 w-6" />
            </button>
            
            {/* Modal content */}
            <div className="p-8 text-center">
              <div className="mb-6">
                <Heart className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Faça sua Doação</h3>
                <p className="text-gray-600">Sua contribuição faz toda a diferença!</p>
              </div>
              
              {/* PIX Key */}
              <div className="mb-6">
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-600 mb-2">Chave PIX:</p>
                  <p className="text-lg font-mono font-bold text-gray-900">{pixKey}</p>
                </div>
                
                <button
                  onClick={copyPixKey}
                  className={`flex items-center justify-center mx-auto px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    pixCopied 
                      ? 'bg-green-100 text-green-700 border border-green-300' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {pixCopied ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Chave PIX copiada!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      Copiar Chave PIX
                    </>
                  )}
                </button>
              </div>
              
              {/* QR Code */}
              <div className="mb-6">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-4 inline-block">
                  <img 
                    src={`data:image/png;base64,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`}
                    alt="QR Code PIX"
                    className="w-48 h-48 mx-auto"
                  />
                </div>
              </div>
              
              {/* Instructions */}
              <p className="text-gray-600 text-sm">
                Escaneie o QR Code ou copie a chave acima.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/556186620978?text=Olá! Tenho interesse em ajudar a ONG Resgates da Jaque!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-50"
        title="Fale conosco no WhatsApp"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}

export default App;

