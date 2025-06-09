import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const achievements = [
    { year: "2016", event: "Диплом косметолога-эстетиста, МГУ им. Ломоносова" },
    { year: "2018", event: "Сертификат по инъекционным методикам, Швейцария" },
    { year: "2020", event: "Международный сертификат по контурной пластике" },
    {
      year: "2022",
      event: "Повышение квалификации по аппаратной косметологии",
    },
  ];

  const certificates = [
    "Инъекционные методики омоложения",
    "Контурная пластика лица",
    "Аппаратная косметология",
    "Химические пилинги",
    "Мезотерапия и биоревитализация",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Левая колонка - фото и основная информация */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=700&fit=crop&crop=face"
              alt="Анна Смирнова в кабинете"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl mb-8"
            />

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Icon name="Award" className="mr-2 text-purple-600" />
                Образование и сертификаты
              </h3>
              <div className="space-y-3">
                {certificates.map((cert, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <Icon
                      name="CheckCircle"
                      className="w-4 h-4 text-green-500 mr-3 flex-shrink-0"
                    />
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Правая колонка - текст и достижения */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6 font-montserrat">
              Обо мне
            </h2>

            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="leading-relaxed mb-4">
                Привет! Меня зовут Анна, и я косметолог-эстетист с 8-летним
                опытом работы. Моя миссия — помочь каждой женщине почувствовать
                себя красивой и уверенной.
              </p>

              <p className="leading-relaxed mb-4">
                Я верю, что красота должна быть естественной. Поэтому в своей
                работе использую деликатные методики, которые подчеркивают вашу
                природную красоту, а не маскируют её.
              </p>

              <p className="leading-relaxed mb-6">
                Постоянно повышаю квалификацию, изучаю новые методики и
                технологии. Каждый клиент для меня уникален, поэтому подход
                всегда индивидуальный.
              </p>
            </div>

            {/* Временная шкала образования */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Мой профессиональный путь
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-purple-600 text-white text-sm font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                      {achievement.year}
                    </div>
                    <div className="pt-2">
                      <p className="text-gray-700 font-medium">
                        {achievement.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Статистика в карточках */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="text-center bg-gradient-to-br from-purple-50 to-transparent">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    8+
                  </div>
                  <div className="text-sm text-gray-600">лет опыта</div>
                </CardContent>
              </Card>
              <Card className="text-center bg-gradient-to-br from-pink-50 to-transparent">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    1500+
                  </div>
                  <div className="text-sm text-gray-600">клиентов</div>
                </CardContent>
              </Card>
              <Card className="text-center bg-gradient-to-br from-green-50 to-transparent">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    15+
                  </div>
                  <div className="text-sm text-gray-600">процедур</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
