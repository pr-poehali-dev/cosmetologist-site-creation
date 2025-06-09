import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryData = {
    cleaning: [
      {
        before:
          "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=300&h=300&fit=crop",
        after:
          "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&h=300&fit=crop",
        description: "Глубокая чистка лица - до и после",
      },
      {
        before:
          "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=300&h=300&fit=crop",
        after:
          "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=300&h=300&fit=crop",
        description: "Устранение акне и воспалений",
      },
    ],
    rejuvenation: [
      {
        before:
          "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=300&h=300&fit=crop",
        after:
          "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&h=300&fit=crop",
        description: "Мезотерапия - омоложение кожи",
      },
      {
        before:
          "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=300&h=300&fit=crop",
        after:
          "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&h=300&fit=crop",
        description: "Коррекция мимических морщин",
      },
    ],
    contouring: [
      {
        before:
          "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=300&h=300&fit=crop",
        after:
          "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&h=300&fit=crop",
        description: "Увеличение губ филлерами",
      },
      {
        before:
          "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=300&h=300&fit=crop",
        after:
          "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&h=300&fit=crop",
        description: "Коррекция носогубных складок",
      },
    ],
  };

  const BeforeAfterCard = ({
    before,
    after,
    description,
  }: {
    before: string;
    after: string;
    description: string;
  }) => (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
      <CardContent className="p-0">
        <div className="grid grid-cols-2">
          <div className="relative">
            <img
              src={before}
              alt="До процедуры"
              className="w-full h-48 object-cover cursor-pointer"
              onClick={() => setSelectedImage(before)}
            />
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              ДО
            </div>
          </div>
          <div className="relative">
            <img
              src={after}
              alt="После процедуры"
              className="w-full h-48 object-cover cursor-pointer"
              onClick={() => setSelectedImage(after)}
            />
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
              ПОСЛЕ
            </div>
          </div>
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-600 text-center">{description}</p>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            Результаты работы
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Фотографии до и после процедур. Каждый результат уникален и зависит
            от индивидуальных особенностей кожи.
          </p>
        </div>

        <Tabs defaultValue="cleaning" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
            <TabsTrigger value="cleaning" className="text-sm">
              Чистки
            </TabsTrigger>
            <TabsTrigger value="rejuvenation" className="text-sm">
              Омоложение
            </TabsTrigger>
            <TabsTrigger value="contouring" className="text-sm">
              Контуры
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cleaning">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {galleryData.cleaning.map((item, index) => (
                <BeforeAfterCard key={index} {...item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rejuvenation">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {galleryData.rejuvenation.map((item, index) => (
                <BeforeAfterCard key={index} {...item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contouring">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {galleryData.contouring.map((item, index) => (
                <BeforeAfterCard key={index} {...item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Важная информация
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Все фотографии сделаны с согласия клиентов. Результаты
              индивидуальны и могут отличаться в зависимости от типа кожи,
              возраста и других факторов. Перед процедурой обязательна
              консультация специалиста.
            </p>
          </div>
        </div>

        {/* Модальное окно для увеличенного просмотра */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Увеличенное изображение"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <Button
                variant="outline"
                size="sm"
                className="absolute top-4 right-4 bg-white"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
