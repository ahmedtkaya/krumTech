import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Türkiye'nin Öncü E-Ticaret Çözümleri ile İşinizi Büyütün!
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Ücretsiz demo, güçlü modüller ve yenilikçi teknolojilerle e-ticaret sitenizi hemen kurun. Ticaretin geleceğine adım atın!

                E-ticaret sektöründe başarıya ulaşmak hiç bu kadar kolay olmamıştı! Türkiye'nin lider e-ticaret platformu, yenilikçi teknolojiler ve kullanıcı dostu özellikleriyle işinizi büyütmek için burada. İster ilk adımlarını atan bir girişimci, ister global hedefleri olan bir marka olun, size özel çözümlerle başarıyı garantiliyoruz.

              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {featuresData.map(({ color, title, icon, description }) => (
    <FeatureCard
      key={title}
      color={color}
      title={title}
      icon={React.createElement(icon, {
        className: "w-5 h-5 text-white",
      })}
      description={description}
    />
  ))}
</div>

          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Sunduğumuz Çözümlerle İşinizi Nasıl Büyütüyoruz?
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                SEO ve Pazarlama Araçları: Arama motorlarında üst sıralarda yer almanız için gerekli tüm optimizasyon araçları.
                <br />
                Entegrasyon Çözümleri: Ödeme sistemleri, kargo yönetimi ve pazaryeri entegrasyonları ile tüm iş süreçlerinizi kolaylaştırın.
                <br />
                E-İhracat Destekleri: Yurt dışına satış yapmak için ihtiyacınız olan dil, para birimi ve lojistik çözümleri.
                <br/>
                Mobil Uygulama Desteği: iOS ve Android uyumlu uygulamalarla müşterilerinize her an ulaşabilirsiniz.
              </Typography>
              <Button variant="filled">read more</Button>
            </div>
           
          </div>
        </div>
      </section>
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="Sizin için çalışıyoruz">
           Platformumuz, sadece bir e-ticaret aracı değil, aynı zamanda işinizi büyütmek için bir iş ortağıdır. Hedefimiz, her müşterimize kişiselleştirilmiş çözümler sunarak onların büyüme yolculuğuna katkıda bulunmak.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle section="İletişime Geçin" heading="Ücretsiz Demo İçin Hemen Başvurun">
            E-ticaret paketlerimizi keşfetmek için fiyatlarımızı inceleyin.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="İsim Soyisim" />
              <Input variant="outlined" size="lg" label="Email Adresi" />
            </div>
            <Textarea variant="outlined" size="lg" label="Mesaj" rows={8} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Gönder
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
