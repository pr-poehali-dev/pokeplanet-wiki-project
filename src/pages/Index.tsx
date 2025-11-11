import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', name: 'Главная', icon: 'Home', color: 'bg-primary' },
    { id: 'items', name: 'Предметы', icon: 'Package', color: 'bg-secondary' },
    { id: 'guides', name: 'Гайды', icon: 'BookOpen', color: 'bg-accent' },
    { id: 'quests', name: 'Квесты', icon: 'Scroll', color: 'bg-chart-4' },
    { id: 'pvp', name: 'PvP и батлы', icon: 'Swords', color: 'bg-destructive' },
    { id: 'regions', name: 'Регионы', icon: 'Map', color: 'bg-chart-2' },
    { id: 'beginners', name: 'Для начинающих', icon: 'GraduationCap', color: 'bg-chart-5' },
    { id: 'pokedex', name: 'Монстродекс', icon: 'Database', color: 'bg-chart-3' },
  ];

  const events = [
    {
      title: 'Сезон Легендарных Существ',
      description: 'Поймай редких легендарных покемонов с повышенным шансом спавна',
      status: 'active',
      endDate: '30 ноября',
      rewards: 'x2 опыт, эксклюзивные предметы',
    },
    {
      title: 'PvP Турнир',
      description: 'Еженедельный турнир с призами для лучших тренеров',
      status: 'upcoming',
      startDate: '15 ноября',
      rewards: 'Редкие покемоны, титулы',
    },
    {
      title: 'Хэллоуин Ивент',
      description: 'Специальные темные покемоны и костюмы',
      status: 'ended',
      endDate: '1 ноября',
      rewards: 'Коллекционные скины',
    },
  ];

  const items = [
    { name: 'Мастер Болл', rarity: 'Legendary', effect: '100% шанс поимки', image: '🔴' },
    { name: 'Редкая Конфета', rarity: 'Rare', effect: '+1 уровень покемону', image: '🍬' },
    { name: 'Эликсир Макс', rarity: 'Epic', effect: 'Полное восстановление HP и PP', image: '🧪' },
    { name: 'TM Thunderbolt', rarity: 'Uncommon', effect: 'Обучает атаке Громобой', image: '⚡' },
  ];

  const guides = [
    { title: 'Гайд для новичков', category: 'Начало', difficulty: 'Легко', views: 15234 },
    { title: 'Лучшие билды для PvP', category: 'Батлы', difficulty: 'Средне', views: 8942 },
    { title: 'Фарм редких покемонов', category: 'Прогресс', difficulty: 'Сложно', views: 12456 },
    { title: 'Прокачка за день', category: 'Развитие', difficulty: 'Средне', views: 9871 },
  ];

  const regions = [
    { name: 'Канто', level: '1-20', legendaries: 3, gyms: 8, icon: '🌋' },
    { name: 'Джото', level: '20-40', legendaries: 5, gyms: 8, icon: '🏔️' },
    { name: 'Хоэнн', level: '40-60', legendaries: 4, gyms: 8, icon: '🌊' },
    { name: 'Синно', level: '60-80', legendaries: 6, gyms: 8, icon: '❄️' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl">⚡</div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  pokePlanet Wiki
                </h1>
                <p className="text-sm text-muted-foreground">Энциклопедия тренера</p>
              </div>
            </div>
            <Button className="hover-scale">
              <Icon name="Search" size={18} className="mr-2" />
              Поиск
            </Button>
          </div>
        </div>
      </header>

      <nav className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? 'default' : 'ghost'}
                className={`hover-scale ${activeSection === section.id ? section.color : ''}`}
                onClick={() => setActiveSection(section.id)}
              >
                <Icon name={section.icon} size={18} className="mr-2" />
                {section.name}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div className="space-y-8 animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent p-8 md:p-12 text-white">
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Добро пожаловать в pokePlanet! 🎮
                </h2>
                <p className="text-lg md:text-xl mb-6 opacity-90">
                  Полная энциклопедия игры: предметы, гайды, квесты и многое другое
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" variant="secondary" className="hover-scale">
                    <Icon name="Play" size={20} className="mr-2" />
                    Начать игру
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/30 hover-scale">
                    <Icon name="Book" size={20} className="mr-2" />
                    Читать гайды
                  </Button>
                </div>
              </div>
              <div className="absolute top-0 right-0 text-9xl opacity-10">⚡🔥💧🍃</div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Calendar" size={28} />
                Игровые события и сезонный контент
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {events.map((event, index) => (
                  <Card key={index} className="hover-scale cursor-pointer border-2 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge
                          variant={event.status === 'active' ? 'default' : event.status === 'upcoming' ? 'secondary' : 'outline'}
                          className={event.status === 'active' ? 'bg-green-500' : event.status === 'upcoming' ? 'bg-blue-500' : ''}
                        >
                          {event.status === 'active' ? '🔥 Активно' : event.status === 'upcoming' ? '⏰ Скоро' : '✓ Завершено'}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                      <CardDescription>{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Icon name="Clock" size={16} className="text-muted-foreground" />
                          <span>{event.endDate || event.startDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Gift" size={16} className="text-muted-foreground" />
                          <span>{event.rewards}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {sections.slice(1).map((section, index) => (
                <Card
                  key={section.id}
                  className="hover-scale cursor-pointer hover:shadow-lg transition-all"
                  onClick={() => setActiveSection(section.id)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${section.color} flex items-center justify-center mb-3`}>
                      <Icon name={section.icon} size={24} className="text-white" />
                    </div>
                    <CardTitle className="text-lg">{section.name}</CardTitle>
                    <CardDescription>Исследуй раздел {section.name.toLowerCase()}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'items' && (
          <div className="animate-fade-in space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <Icon name="Package" size={32} />
                Предметы
              </h2>
              <Button variant="outline">
                <Icon name="Filter" size={18} className="mr-2" />
                Фильтр
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {items.map((item, index) => (
                <Card key={index} className="hover-scale cursor-pointer hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="text-5xl mb-3 text-center">{item.image}</div>
                    <CardTitle className="text-center">{item.name}</CardTitle>
                    <div className="flex justify-center">
                      <Badge
                        variant="outline"
                        className={
                          item.rarity === 'Legendary'
                            ? 'border-yellow-500 text-yellow-600'
                            : item.rarity === 'Epic'
                            ? 'border-purple-500 text-purple-600'
                            : item.rarity === 'Rare'
                            ? 'border-blue-500 text-blue-600'
                            : 'border-gray-500'
                        }
                      >
                        {item.rarity}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-center text-muted-foreground">{item.effect}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'guides' && (
          <div className="animate-fade-in space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Icon name="BookOpen" size={32} />
              Гайды
            </h2>
            <div className="grid gap-4">
              {guides.map((guide, index) => (
                <Card key={index} className="hover-scale cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{guide.title}</CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">{guide.category}</Badge>
                          <Badge
                            variant="outline"
                            className={
                              guide.difficulty === 'Легко'
                                ? 'border-green-500 text-green-600'
                                : guide.difficulty === 'Средне'
                                ? 'border-yellow-500 text-yellow-600'
                                : 'border-red-500 text-red-600'
                            }
                          >
                            {guide.difficulty}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Eye" size={18} />
                        <span className="text-sm">{guide.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'regions' && (
          <div className="animate-fade-in space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Icon name="Map" size={32} />
              Регионы
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {regions.map((region, index) => (
                <Card key={index} className="hover-scale cursor-pointer hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="text-6xl">{region.icon}</div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{region.name}</CardTitle>
                        <CardDescription className="text-base">Уровни {region.level}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Icon name="Trophy" size={20} className="text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Легендарных</p>
                          <p className="font-semibold">{region.legendaries}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Castle" size={20} className="text-secondary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Гимов</p>
                          <p className="font-semibold">{region.gyms}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'beginners' && (
          <div className="animate-fade-in space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Icon name="GraduationCap" size={32} />
              Для начинающих
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="Rocket" size={24} />
                    Быстрый старт
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-primary text-white">1</Badge>
                    <p>Выбери стартового покемона</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-primary text-white">2</Badge>
                    <p>Пройди обучение в Палет Тауне</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-primary text-white">3</Badge>
                    <p>Получи первые покеболы</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-primary text-white">4</Badge>
                    <p>Начни ловить диких покемонов</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="Lightbulb" size={24} />
                    Советы новичкам
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={20} className="text-secondary mt-0.5" />
                    <p>Сохраняй баланс типов в команде</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={20} className="text-secondary mt-0.5" />
                    <p>Не забывай лечить покемонов</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={20} className="text-secondary mt-0.5" />
                    <p>Исследуй все локации</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={20} className="text-secondary mt-0.5" />
                    <p>Участвуй в событиях</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t bg-card/50 mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 pokePlanet Wiki • Создано с ❤️ для тренеров</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;