import React from "react";
import {
  Card,
  Typography,
  Button,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard } from "@/widgets/cards";
import { featuresData, contactData } from "@/data";

export function Profile() {
  return (
    <>
      {/* Banner Section */}
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography variant="h1" color="white" className="mb-6 font-black">
                Güçlü Altyapı, Güvenilir Hizmet
              </Typography>
              <Typography variant="h2" color="white" className="mb-6 font-black">
                Krum Technology ile Teknolojinin Gücünü Keşfedin
              </Typography>

              <Typography variant="lead" color="white" className="opacity-80">
                Krum Technology olarak, teknolojinin sınırlarını zorlayan ve müşterilerimizin ihtiyaçlarını en iyi şekilde karşılamayı hedefleyen yenilikçi çözümler sunuyoruz. Güçlü altyapımız, güvenilir hizmet anlayışımız ve müşteri odaklı yaklaşımımızla, hem yerel hem de global pazarda iş ortaklarımızın yanında yer alıyoruz.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* 2 adet yazı + resim bloğu */}
      <section className="bg-gray-100 py-24 px-4">
        <div className="container mx-auto flex flex-col gap-24">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Typography variant="h3" className="mb-4 font-bold text-blue-gray-800">
                 Vizyonumuz
              </Typography>
              <Typography className="text-blue-gray-600 text-base">
                Krum Technology olarak vizyonumuz, dijitalleşen dünyada işletmelerin teknolojik dönüşüm süreçlerine öncülük ederek sürdürülebilir başarıyı mümkün kılmaktır. Amacımız yalnızca günümüz ihtiyaçlarını karşılayan çözümler sunmak değil, aynı zamanda geleceğe yön veren teknolojik altyapılar geliştirerek müşterilerimizin rekabet gücünü artırmaktır.
              </Typography>
              <Typography className="text-blue-gray-600 text-base">
                Teknolojiyi sadece bir araç olarak değil, iş dünyasını dönüştüren stratejik bir güç olarak görüyoruz. Bu bakış açısıyla hareket ederek, yapay zeka, büyük veri, bulut bilişim ve otomasyon gibi alanlarda inovatif çözümler üretmeye devam ediyoruz
              </Typography>
              <Typography className="text-blue-gray-600 text-base">
                Vizyonumuz; her ölçekteki işletmeye teknolojiyle değer katmak, onları dijital ekonominin güçlü bir parçası haline getirmek ve ulusal pazardan global pazara uzanan bir başarı hikayesine dönüşmelerine rehberlik etmektir.
              </Typography>

            </div>
            <div className="lg:w-1/2">
              <img src="/img/D.png" alt="E-Ticaret Teknoloji" className="rounded-lg shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-4">
        <div className="container mx-auto flex flex-col gap-24">
          <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <Typography variant="h3" className="mb-4 font-bold text-blue-gray-800">
               Misyonumuz
              </Typography>
              <Typography className="text-blue-gray-600 text-base">
                Güvenilir altyapı çözümleri ve yenilikçi hizmetler sunarak müşterilerimizin işlerini büyütmelerine yardımcı olmak. Müşteri memnuniyetini en üst seviyede tutarken, global standartlarda sürdürülebilir çözümler sunmayı taahhüt ediyoruz.
              </Typography>
            </div>
            <div className="lg:w-1/2">
              <img src="/img/w.png" alt="E-İhracat" className="rounded-lg shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Uzmanlık Alanları */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="container mx-auto text-center">
          <Typography variant="h2" className="mb-6 font-bold text-blue-gray-800">
            Ekibimiz ve Uzmanlık Alanlarımız
          </Typography>
          <Typography className="mb-12 max-w-3xl mx-auto text-blue-gray-600">
            Krum Technology, sektördeki en yetenekli profesyonellerden oluşan bir ekibe sahiptir. Ekibimizin önceliği, işletmenizin ihtiyaçlarını anlamak ve en uygun çözümleri sunmaktır.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <i className="fas fa-code text-3xl text-blue-600" />
              </div>
              <Typography variant="h5" className="font-bold mb-2">
                Teknik Uzmanlık
              </Typography>
              <Typography className="text-blue-gray-600 text-sm">
                Altyapı mühendisleri, yazılım geliştiriciler ve sistem analistlerinden oluşan uzman kadro.
              </Typography>
            </Card>

            <Card className="p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <i className="fas fa-bullhorn text-3xl text-green-600" />
              </div>
              <Typography variant="h5" className="font-bold mb-2">
                Pazarlama ve Strateji
              </Typography>
              <Typography className="text-blue-gray-600 text-sm">
                Dijital dünyada fark yaratmak için stratejik çözümler sunan deneyimli ekip.
              </Typography>
            </Card>

            <Card className="p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <i className="fas fa-headset text-3xl text-purple-600" />
              </div>
              <Typography variant="h5" className="font-bold mb-2">
                Müşteri Destek Ekibi
              </Typography>
              <Typography className="text-blue-gray-600 text-sm">
                Sorularınıza anında yanıt veren, çözüm odaklı profesyonellerden oluşan destek ekibi.
              </Typography>
            </Card>
          </div>
        </div>
      </section>

      {/* Kartlar Bölümü */}
      

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Profile;
