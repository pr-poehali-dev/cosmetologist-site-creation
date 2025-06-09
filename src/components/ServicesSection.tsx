import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      icon: "Sparkles",
      title: "Чистка лица",
      description:
        "Глубокое очищение пор, удаление черных точек, профессиональный уход",
      price: "от 3 500 ₽",
      duration: "60 мин",
      popular: true,
    },
    {
      icon: "Zap",
      title: "Мезотерапия",
      description: "Инъекционная процедура для увлажнения и омоложения кожи",
      price: "от 5 000 ₽",
      duration: "45 мин",
    },
    {
      icon: "Heart",
      title: "Ботокс",
      description: "Коррекция мимических морщин, естественный результат",
      price: "от 8 000 ₽",
      duration: "30 мин",
    },
    {
      icon: "Star",
      title: "Пилинги",
      description: "Химические пилинги для обновления и сияния кожи",
      price: "от 4 000 ₽",
      duration: "40 мин",
    },
    {
      icon: "Sun",
      title: "Фотоомоложение",
      description: "Безоперационное омоложение с помощью IPL-технологий",
      price: "от 6 500 ₽",
      duration: "50 мин",
    },
    {
      icon: "Gem",
      title: "Контурная пластика",
      description: "Коррекция объемов и формы лица филлерами",
      price: "от 12 000 ₽",
      duration: "60 мин",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            Услуги и процедуры
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Комплексный подход к красоте и здоровью вашей кожи. Каждая процедура
            подбирается индивидуально под ваши потребности.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                service.popular
                  ? "border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50"
                  : "bg-white"
              }`}
            >
              {service.popular && (
                <div className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full absolute -top-2 left-4 font-medium">
                  Популярная
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                    service.popular ? "bg-purple-600" : "bg-purple-100"
                  }`}
                >
                  <Icon
                    name={service.icon as any}
                    className={`w-8 h-8 ${service.popular ? "text-white" : "text-purple-600"}`}
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                  <span>⏱️ {service.duration}</span>
                  <span className="text-lg font-bold text-purple-600">
                    {service.price}
                  </span>
                </div>
                <Button
                  variant={service.popular ? "default" : "outline"}
                  className={`w-full ${
                    service.popular
                      ? "bg-purple-600 hover:bg-purple-700"
                      : "border-purple-600 text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  Записаться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Нужна консультация по выбору процедуры?
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-purple-600 text-purple-600 hover:bg-purple-50"
          >
            <Icon name="MessageCircle" className="mr-2" />
            Получить бесплатную консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
