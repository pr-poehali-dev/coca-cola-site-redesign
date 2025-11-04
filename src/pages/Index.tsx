import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const products = [
    {
      name: 'Coca-Cola Classic',
      category: 'Классика',
      description: 'Оригинальный легендарный вкус с 1886 года',
      image: 'https://cdn.poehali.dev/projects/e0ae8bc5-a1e7-414a-9e65-71b365254962/files/1949b602-3e30-4bbe-a276-5f8d60280acf.jpg'
    },
    {
      name: 'Cherry Coke',
      category: 'Вкусы',
      description: 'Классика со вкусом спелой вишни',
      image: 'https://cdn.poehali.dev/projects/e0ae8bc5-a1e7-414a-9e65-71b365254962/files/c0064332-2400-48f4-bb8b-95303e6b5933.jpg'
    },
    {
      name: 'Vanilla Coke',
      category: 'Вкусы',
      description: 'Нежный ванильный аромат и классика',
      image: 'https://cdn.poehali.dev/projects/e0ae8bc5-a1e7-414a-9e65-71b365254962/files/1949b602-3e30-4bbe-a276-5f8d60280acf.jpg'
    },
    {
      name: 'Diet Coke',
      category: 'Без сахара',
      description: 'Без сахара, но со вкусом',
      image: 'https://cdn.poehali.dev/projects/e0ae8bc5-a1e7-414a-9e65-71b365254962/files/c0064332-2400-48f4-bb8b-95303e6b5933.jpg'
    },
    {
      name: 'Coca-Cola Zero',
      category: 'Без сахара',
      description: 'Вкус оригинала, ноль калорий',
      image: 'https://cdn.poehali.dev/projects/e0ae8bc5-a1e7-414a-9e65-71b365254962/files/1949b602-3e30-4bbe-a276-5f8d60280acf.jpg'
    },
    {
      name: 'Coca-Cola Energy',
      category: 'Энергия',
      description: 'Энергия и вкус в одной банке',
      image: 'https://cdn.poehali.dev/projects/e0ae8bc5-a1e7-414a-9e65-71b365254962/files/c0064332-2400-48f4-bb8b-95303e6b5933.jpg'
    }
  ];

  const news = [
    {
      title: 'Новая летняя кампания 2025',
      date: '15 мая 2025',
      description: 'Запускаем масштабную летнюю кампанию с призами и подарками',
      icon: 'Sparkles'
    },
    {
      title: 'Экологичная упаковка',
      date: '3 апреля 2025',
      description: 'Переход на 100% перерабатываемую упаковку во всех странах',
      icon: 'Leaf'
    },
    {
      title: 'Партнерство с Olympics 2028',
      date: '20 марта 2025',
      description: 'Coca-Cola стала официальным партнером Олимпиады 2028',
      icon: 'Trophy'
    }
  ];

  const categories = ['Все', 'Классика', 'Вкусы', 'Без сахара', 'Энергия'];

  const filteredProducts = selectedCategory === 'Все' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-primary text-white shadow-lg z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-heading font-bold tracking-wider cursor-pointer" onClick={() => scrollToSection('home')}>Coca-Cola</h1>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('home')} className="hover:text-secondary transition-colors font-medium">Главная</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-secondary transition-colors font-medium">О бренде</button>
            <button onClick={() => scrollToSection('products')} className="hover:text-secondary transition-colors font-medium">Продукция</button>
            <button onClick={() => scrollToSection('news')} className="hover:text-secondary transition-colors font-medium">Новости</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-secondary transition-colors font-medium">Контакты</button>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-red-600 to-red-700 text-white pt-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-up">
            <h2 className="text-6xl md:text-8xl font-heading font-bold mb-6 leading-tight">
              Taste the<br/>Feeling
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
              Более 130 лет создаем моменты радости и освежения по всему миру
            </p>
            <div className="flex gap-4 flex-wrap justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-secondary hover:text-foreground font-bold text-lg px-8 py-6 transition-all hover:scale-105"
                onClick={() => scrollToSection('about')}
              >
                Узнать больше
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-6 transition-all hover:scale-105"
                onClick={() => scrollToSection('products')}
              >
                Наши продукты
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center animate-float">
            <img 
              src="https://cdn.poehali.dev/projects/e0ae8bc5-a1e7-414a-9e65-71b365254962/files/1949b602-3e30-4bbe-a276-5f8d60280acf.jpg" 
              alt="Coca-Cola Bottle" 
              className="max-w-sm w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-4">О бренде</h2>
            <p className="text-xl text-muted-foreground">
              История легенды, которая объединяет мир
            </p>
          </div>

          <div className="space-y-6 mb-16">
            <Card className="text-center p-8 hover:shadow-xl transition-shadow animate-scale-in">
              <Icon name="Globe" size={64} className="mx-auto mb-4 text-primary" />
              <h3 className="text-3xl font-heading font-bold mb-2">200+</h3>
              <p className="text-muted-foreground">стран присутствия</p>
            </Card>
            <Card className="text-center p-8 hover:shadow-xl transition-shadow animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <Icon name="Users" size={64} className="mx-auto mb-4 text-primary" />
              <h3 className="text-3xl font-heading font-bold mb-2">1.9 млрд</h3>
              <p className="text-muted-foreground">порций ежедневно</p>
            </Card>
            <Card className="text-center p-8 hover:shadow-xl transition-shadow animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <Icon name="Calendar" size={64} className="mx-auto mb-4 text-primary" />
              <h3 className="text-3xl font-heading font-bold mb-2">138 лет</h3>
              <p className="text-muted-foreground">истории бренда</p>
            </Card>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
            <h3 className="text-3xl font-heading font-bold text-primary text-center">Наша миссия</h3>
            <p className="text-muted-foreground text-center">
              Освежать мир. Вдохновлять моменты оптимизма и счастья. Создавать ценность и менять мир к лучшему.
            </p>
            <p className="text-muted-foreground text-center">
              С 1886 года Coca-Cola объединяет людей по всему миру, создавая моменты радости и празднуя особенные события жизни.
            </p>
            <img 
              src="https://cdn.poehali.dev/projects/e0ae8bc5-a1e7-414a-9e65-71b365254962/files/2f65f15e-58b5-40ea-9aca-f65fd25534ad.jpg" 
              alt="Coca-Cola Heritage" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      <section id="products" className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-4">Наша продукция</h2>
            <p className="text-xl text-muted-foreground">
              Найди свой идеальный вкус для каждого момента
            </p>
          </div>

          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={`font-bold ${selectedCategory === category ? 'bg-primary text-white' : 'border-primary text-primary hover:bg-primary hover:text-white'}`}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="space-y-6">
            {filteredProducts.map((product, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-2 group-hover:text-red-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white font-bold"
                  >
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-24 bg-gradient-to-br from-primary to-red-700 text-white">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-4">Новости и события</h2>
            <p className="text-xl opacity-90">
              Следите за последними новостями и акциями Coca-Cola
            </p>
          </div>

          <div className="space-y-6">
            {news.map((item, index) => (
              <Card 
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all animate-fade-in hover:scale-105 duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <Icon name={item.icon as any} size={48} className="mb-4 text-secondary" />
                  <p className="text-sm text-secondary mb-2">{item.date}</p>
                  <h3 className="text-2xl font-heading font-bold mb-3">{item.title}</h3>
                  <p className="text-white/80 mb-4">{item.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-white text-white hover:bg-white hover:text-primary font-bold"
                  >
                    Читать далее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-secondary/30">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Мы всегда рады вашим вопросам и предложениям
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8 animate-scale-in">
              <h3 className="text-2xl font-heading font-bold text-primary mb-6 text-center">Форма обратной связи</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Имя</label>
                  <Input 
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Ваше сообщение..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-red-700 text-white font-bold text-lg py-6"
                >
                  Отправить
                </Button>
              </form>
            </Card>

            <Card className="p-8 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl font-heading font-bold text-primary mb-6 text-center">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Адрес</h4>
                    <p className="text-muted-foreground">The Coca-Cola Company<br/>One Coca-Cola Plaza<br/>Atlanta, GA 30313, USA</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Телефон</h4>
                    <p className="text-muted-foreground">+1 (800) GET-COKE</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@coca-cola.com</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-center">Социальные сети</h4>
                  <div className="flex gap-4 justify-center">
                    <a href="#" className="hover:scale-110 transition-transform">
                      <Icon name="Facebook" size={32} className="text-primary" />
                    </a>
                    <a href="#" className="hover:scale-110 transition-transform">
                      <Icon name="Instagram" size={32} className="text-primary" />
                    </a>
                    <a href="#" className="hover:scale-110 transition-transform">
                      <Icon name="Twitter" size={32} className="text-primary" />
                    </a>
                    <a href="#" className="hover:scale-110 transition-transform">
                      <Icon name="Youtube" size={32} className="text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>
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
                <li><a href="#" className="hover:text-primary transition-colors">Инвесторам</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Пресс-центр</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Продукты</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Все напитки</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Новинки</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Где купить</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Питательная ценность</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Условия использования</a></li>
              </ul>
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