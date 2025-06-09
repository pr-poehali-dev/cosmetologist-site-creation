import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-green-50">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Профессиональное фото */}
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=300&h=300&fit=crop&crop=face"
              alt="Анна Смирнова - косметолог-эстетист"
              className="w-48 h-48 rounded-full mx-auto object-cover shadow-xl border-4 border-white"
            />
          </div>

          {/* Заголовок и описание */}
          <h1 className="text-5xl font-bold text-gray-800 mb-4 font-montserrat">
            Анна Смирнова
          </h1>
          <p className="text-xl text-purple-600 mb-2 font-medium">
            Косметолог-эстетист
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Более 8 лет помогаю женщинам обрести уверенность в себе через
            красоту и здоровье кожи. Индивидуальный подход, современные
            методики, видимые результаты.
          </p>

          {/* Кнопки действий */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg"
            >
              <Icon name="Calendar" className="mr-2" />
              Записаться на консультацию
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg"
            >
              <Icon name="Phone" className="mr-2" />
              Позвонить сейчас
            </Button>
          </div>

          {/* Преимущества */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <Icon
                name="Award"
                className="w-8 h-8 text-purple-600 mx-auto mb-3"
              />
              <h3 className="font-semibold text-gray-800 mb-2">
                Сертифицированный специалист
              </h3>
              <p className="text-sm text-gray-600">
                Дипломированный косметолог с международными сертификатами
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <Icon
                name="Users"
                className="w-8 h-8 text-purple-600 mx-auto mb-3"
              />
              <h3 className="font-semibold text-gray-800 mb-2">
                1500+ довольных клиентов
              </h3>
              <p className="text-sm text-gray-600">
                Положительные отзывы и рекомендации постоянных клиентов
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <Icon
                name="Sparkles"
                className="w-8 h-8 text-purple-600 mx-auto mb-3"
              />
              <h3 className="font-semibold text-gray-800 mb-2">
                Современное оборудование
              </h3>
              <p className="text-sm text-gray-600">
                Новейшие технологии и препараты для максимального эффекта
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
