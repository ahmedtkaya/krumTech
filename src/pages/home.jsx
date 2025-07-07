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
import { useEffect } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";




export function Home() {
  const form = useRef();
  useEffect(() => {
    const hash = window.location.hash;
  if (hash === "#iletisim") {
    const section = document.getElementById("iletisim");
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }
}, []);

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_23ss", //   Service ID
      "template_m117zpo", //  Template ID
      form.current,
      "_jpwZQuJ8hdVZqjqT" //  Public Key
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Mesaj başarıyla gönderildi!");
      },
      (error) => {
        console.log(error.text);
        alert("Bir hata oluştu. Lütfen tekrar deneyin.");
      }
    );
};



  return (
    <>
      <div className="relative flex min-h-[90vh] items-center justify-center">
        <div className="absolute top-0 h-full w-full bg-[url('/img/3.png')] bg-cover bg-center" />
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


  <div className="mt-32 px-4 grid grid-cols-2 gap-x-10 gap-y-12 place-items-center">
  {/* Kart 1 */}
  <div className="w-full max-w-[500px] rounded-lg shadow-lg overflow-hidden bg-white">
    <img src="/img/r.png" alt="SEO" className="h-60 w-full object-cover" />
    <div className="p-6">
      <Typography variant="h5" className="mb-2 font-bold text-blue-gray-800">
        SEO ve Pazarlama Araçları
      </Typography>
      <Typography className="text-blue-gray-600 text-base">
        Arama motorlarında üst sıralarda yer almanız için gerekli tüm optimizasyon araçları.
      </Typography>
    </div>
  </div>

  {/* Kart 2 */}
  <div className="w-full max-w-[500px] rounded-lg shadow-lg overflow-hidden bg-white">
    <img src="/img/e.png" alt="Entegrasyon" className="h-60 w-full object-cover" />
    <div className="p-6">
      <Typography variant="h5" className="mb-2 font-bold text-blue-gray-800">
        Entegrasyon Çözümleri
      </Typography>
      <Typography className="text-blue-gray-600 text-base">
        Ödeme sistemleri, kargo yönetimi ve pazaryeri entegrasyonları ile iş süreçlerinizi kolaylaştırın.
      </Typography>
    </div>
  </div>

  {/* Kart 3 */}
  <div className="w-full max-w-[500px] rounded-lg shadow-lg overflow-hidden bg-white">
    <img src="/img/i.png" alt="E-İhracat" className="h-60 w-full object-cover" />
    <div className="p-6">
      <Typography variant="h5" className="mb-2 font-bold text-blue-gray-800">
        E-İhracat Destekleri
      </Typography>
      <Typography className="text-blue-gray-600 text-base">
        Yurt dışına satış için gerekli dil, para birimi ve lojistik çözümlerini sunuyoruz.
      </Typography>
    </div>
  </div>

  {/* Kart 4 */}
  <div className="w-full max-w-[500px] rounded-lg shadow-lg overflow-hidden bg-white">
    <img src="/img/m.png" alt="Mobil" className="h-60 w-full object-cover" />
    <div className="p-6">
      <Typography variant="h5" className="mb-2 font-bold text-blue-gray-800">
        Mobil Uygulama Desteği
      </Typography>
      <Typography className="text-blue-gray-600 text-base">
        iOS ve Android uyumlu uygulamalarla müşterilerinize her an ulaşabilirsiniz.
      </Typography>
    </div>
  </div>
</div>


        </div>
      </section>

      

     <section className="relative bg-gray-100 py-24 px-4">
  <div className="container mx-auto">
    <PageTitle section="Sizin için çalışıyoruz"
    sectionClass="text-black">
      Platformumuz, sadece bir e-ticaret aracı değil, aynı zamanda işinizi büyütmek için bir iş ortağıdır.
      Hedefimiz, her müşterimize kişiselleştirilmiş çözümler sunarak onların büyüme yolculuğuna katkıda bulunmak.
    </PageTitle>

    <div className="mx-auto mt-8 mb-20 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
      {contactData.map(({ title, icon, description }) => (
        <Card
          key={title}
          color="transparent"
          shadow={false}
          className="text-center text-blue-gray-900"
        >
          <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
            {React.createElement(icon, { className: "w-5 h-5 text-white" })}
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
  </div>
</section>

<section id="iletisim" className="relative bg-white py-24 px-4">
  <div className="container mx-auto">
    <PageTitle section="İletişime Geçin" heading="Ücretsiz Demo İçin Hemen Başvurun">
      E-ticaret paketlerimizi keşfetmek için fiyatlarımızı inceleyin.
    </PageTitle>

    <form ref={form} onSubmit={sendEmail} className="mx-auto w-full mt-12 lg:w-5/12">

  <div className="mb-8 flex gap-8">
    <Input name="name" variant="outlined" size="lg" label="İsim Soyisim" />
    <Input name="email" variant="outlined" size="lg" label="Email Adresi" />
  </div>

  <Input name="title" variant="outlined" size="lg" label="Konu Başlığı" className="mb-6" />

  <Textarea name="message" variant="outlined" size="lg" label="Mesaj" rows={8} />

  <Checkbox
    label={
      <Typography variant="small" color="gray" className="flex items-center font-normal">
        I agree the
        <a href="#" className="font-medium transition-colors hover:text-gray-900">
          &nbsp;Terms and Conditions
        </a>
      </Typography>
    }
    containerProps={{ className: "-ml-2.5" }}
  />

  <Button type="submit" variant="gradient" size="lg" className="mt-8" fullWidth>
    Gönder
  </Button>
</form>


  </div>
</section>

      
      
    </>
  );
}

export default Home;
