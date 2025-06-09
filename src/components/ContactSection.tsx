import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Имитация отправки формы
    toast({
      title: "Заявка отправлена!",
      description:
        "Мы свяжемся с вами в ближайшее время для подтверждения записи.",
    });
    setFormData({ name: "", phone: "", service: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            Запись на консультацию
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Свяжитесь со мной удобным способом или оставьте заявку на сайте.
            Первичная консультация бесплатно!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Левая колонка - форма записи */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-800">
                Оставить заявку
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Анна Иванова"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (999) 123-45-67"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Интересующая процедура</Label>
                  <Input
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    placeholder="Чистка лица, мезотерапия..."
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Дополнительная информация</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Расскажите о ваших пожеланиях или задайте вопрос..."
                    rows={4}
                    className="mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3"
                >
                  <Icon name="Send" className="mr-2" />
                  Отправить заявку
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных
                  данных
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Правая колонка - контактная информация */}
          <div className="space-y-8">
            {/* Контактные данные */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Контактная информация
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <Icon name="Phone" className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Телефон</p>
                      <p className="text-gray-600">+7 (495) 123-45-67</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <Icon name="Mail" className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <p className="text-gray-600">anna@beauty-clinic.ru</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <Icon name="MapPin" className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Адрес</p>
                      <p className="text-gray-600">ул. Тверская, 15, Москва</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <Icon name="Clock" className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Режим работы</p>
                      <p className="text-gray-600">Пн-Сб: 9:00-20:00</p>
                      <p className="text-gray-600">Вс: 10:00-18:00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Социальные сети */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Мы в социальных сетях
                </h3>

                <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 justify-center"
                  >
                    <Icon name="Instagram" className="mr-2" />
                    Instagram
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 justify-center"
                  >
                    <Icon name="MessageCircle" className="mr-2" />
                    Telegram
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 justify-center"
                  >
                    <Icon name="Phone" className="mr-2" />
                    WhatsApp
                  </Button>
                </div>

                <p className="text-sm text-gray-600 mt-4 text-center">
                  Следите за новостями и результатами работ в наших социальных
                  сетях
                </p>
              </CardContent>
            </Card>

            {/* Призыв к действию */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white text-center">
              <h3 className="text-xl font-semibold mb-4">
                Готовы к преображению?
              </h3>
              <p className="mb-6 opacity-90">
                Запишитесь на бесплатную консультацию прямо сейчас!
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100"
              >
                <Icon name="Calendar" className="mr-2" />
                Записаться сегодня
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
