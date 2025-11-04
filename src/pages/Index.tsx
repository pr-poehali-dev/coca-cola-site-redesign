import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const products = [
    {
      name: 'Coca-Cola Classic',
      description: 'Оригинальный легендарный вкус с 1886 года',
      image: 'https://cdn.poehali.dev/projects/e0ae8bc5-a1e7-414a-9e65-71b365254962/files/1949b602-3e30-4bbe-a276-5f8d60280acf.jpg'
    },
    {
      name: 'Cherry Coke',
      description: 'Классика со вкусом спелой вишни',
      image: 'https://cdn.poehali.dev/projects/e0ae8bc5-a1e7-414a-9e65-71b365254962/files/c0064332-2400-48f4-bb8b-95303e6b5933.jpg'
    },
    {
      name: 'Vanilla Coke',
      description: 'Нежный ванильный аромат и классика',
      image: 'https://cdn.poehali.dev/projects/e0ae8bc5-a1e7-414a-9e65-71b365254962/files/1949b602-3e30-4bbe-a276-5f8d60280acf.jpg'
    },
    {
      name: 'Diet Coke',
      description: 'Без сахара, но со вкусом',
      image: 'https://cdn.poehali.dev/projects/e0ae8bc5-a1e7-414a-9e65-71b365254962/files/c0064332-2400-48f4-bb8b-95303e6b5933.jpg'
    }
  ];

  const timeline = [
    { year: '1886', event: 'Рождение легенды', description: 'Джон Пембертон создал формулу Coca-Cola в Атланте' },
    { year: '1915', event: 'Культовая бутылка', description: 'Создана узнаваемая контурная бутылка' },
    { year: '1931', event: 'Санта-Клаус', description: 'Coca-Cola создала образ современного Санты' },
    { year: '1971', event: '"I\'d Like to Buy the World a Coke"', description: 'Легендарная рекламная кампания единства' },
    { year: '2025', event: 'Taste the Feeling', description: 'Продолжаем создавать моменты радости по всему миру' }
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-primary text-white shadow-lg z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-heading font-bold tracking-wider">Coca-Cola</h1>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('home')} className="hover:text-secondary transition-colors font-medium">Главная</button>
            <button onClick={() => scrollToSection('history')} className="hover:text-secondary transition-colors font-medium">История</button>
            <button onClick={() => scrollToSection('products')} className="hover:text-secondary transition-colors font-medium">Продукция</button>
            <button onClick={() => scrollToSection('moments')} className="hover:text-secondary transition-colors font-medium">Моменты</button>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-red-600 to-red-700 text-white pt-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div className="animate-fade-up">
            <h2 className="text-6xl md:text-8xl font-heading font-bold mb-6 leading-tight">
              Taste the<br/>Feeling
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
              Более 130 лет создаем моменты радости и освежения по всему миру
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-secondary hover:text-foreground font-bold text-lg px-8 py-6 transition-all hover:scale-105"
                onClick={() => scrollToSection('history')}
              >
                Наша история
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-6 transition-all hover:scale-105"
                onClick={() => scrollToSection('products')}
              >
                Продукты
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center animate-float">
            <img 
              src="https://cdn.poehali.dev/projects/e0ae8bc5-a1e7-414a-9e65-71b365254962/files/1949b602-3e30-4bbe-a276-5f8d60280acf.jpg" 
              alt="Coca-Cola Bottle" 
              className="max-w-md w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section id="history" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-4">Наша история</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Путешествие длиной в столетие. От аптеки в Атланте до глобального символа радости
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className="relative pl-8 pb-12 border-l-4 border-primary last:border-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -left-4 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-4xl font-heading font-bold text-primary mb-2">{item.year}</h3>
                  <h4 className="text-2xl font-bold mb-2">{item.event}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <img 
              src="https://cdn.poehali.dev/projects/e0ae8bc5-a1e7-414a-9e65-71b365254962/files/2f65f15e-58b5-40ea-9aca-f65fd25534ad.jpg" 
              alt="Vintage Coca-Cola" 
              className="max-w-3xl w-full mx-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section id="products" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-4">Наши вкусы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Классика и инновации. Найди свой идеальный момент освежения
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-2 group-hover:text-red-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white font-bold"
                  >
                    Узнать больше
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="moments" className="py-24 bg-gradient-to-br from-primary to-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-4">Моменты Coca-Cola</h2>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Каждый глоток — это момент счастья, разделенный с миллионами людей по всему миру
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all animate-fade-in">
              <CardContent className="p-8 text-center">
                <Icon name="Users" size={48} className="mx-auto mb-4 text-secondary" />
                <h3 className="text-2xl font-heading font-bold mb-2">С друзьями</h3>
                <p className="text-white/80">Лучшие моменты всегда с теми, кто рядом</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 text-center">
                <Icon name="PartyPopper" size={48} className="mx-auto mb-4 text-secondary" />
                <h3 className="text-2xl font-heading font-bold mb-2">На празднике</h3>
                <p className="text-white/80">Делаем каждое событие особенным</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <Icon name="Heart" size={48} className="mx-auto mb-4 text-secondary" />
                <h3 className="text-2xl font-heading font-bold mb-2">Каждый день</h3>
                <p className="text-white/80">Маленькие радости в обычных моментах</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-3xl font-heading font-bold mb-6">Поделитесь своим моментом</h3>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-secondary hover:text-foreground font-bold text-lg px-8 py-6 transition-all hover:scale-105"
            >
              <Icon name="Camera" size={24} className="mr-2" />
              Загрузить фото
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Coca-Cola</h3>
              <p className="text-gray-400">Создаем моменты радости с 1886 года</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Пресс-центр</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Продукты</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Все напитки</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Новинки</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Где купить</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Следите за нами</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Twitter" size={24} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Youtube" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 The Coca-Cola Company. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
