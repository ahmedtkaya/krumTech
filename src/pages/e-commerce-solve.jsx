import React, { useState } from "react";
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

export function ECommerceSolve() {
  const [openModal, setOpenModal] = useState(null);

  const packages = [
    {
      id: "start",
      title: "Başlangıç Paketi",
      emoji: "🎯",
      description:
        "İlk kez e-ticaret yapacak işletmelere özel olarak tasarlanmıştır. Kullanımı kolay arayüz, temel ürün yönetimi ve ödeme altyapısı içerir.",
      modalContent: (
        <>
          <h3 className="text-xl font-bold mb-2">E-Ticarete Hızlı Başlangıç</h3>
          <p className="mb-2">Yeni bir işletme olarak e-ticarete adım atıyorsanız, bu paket tam size göre!</p>
          <p className="font-semibold">Özellikler:</p>
          <ul className="list-disc list-inside mb-2">
            <li>Kullanıcı dostu arayüz</li>
            <li>Temel SEO araçları</li>
            <li>7/24 teknik destek</li>
            <li>Pazaryeri entegrasyonları (Amazon, Trendyol, vb.)</li>
            <li>50 ürüne kadar sınırsız yükleme imkanı</li>
          </ul>
          <p className="font-semibold">Avantajlar:</p>
          <ul className="list-disc list-inside">
            <li>Düşük maliyetli çözüm</li>
            <li>Hızlı kurulum</li>
            <li>Başlangıç seviyesinde ihtiyaçlarınızı karşılar</li>
          </ul>
        </>
      ),
    },
    {
      id: "mid",
      title: "Orta Düzey Paket",
      emoji: "🚀",
      description:
        "Daha geniş ürün yelpazesi, gelişmiş müşteri analitiği ve SEO araçlarıyla büyümeye hazır işletmeler için uygundur.",
      modalContent: (
        <>
          <h3 className="text-xl font-bold mb-2">İşinizi Büyütün</h3>
          <p className="mb-2">Zaten e-ticaret yapıyor ve işinizi bir üst seviyeye taşımak istiyorsanız, orta düzey paketimiz tam size göre!</p>
          <p className="font-semibold">Özellikler:</p>
          <ul className="list-disc list-inside mb-2">
            <li>Gelişmiş SEO yönetim araçları</li>
            <li>Çoklu dil ve para birimi desteği</li>
            <li>Kampanya ve indirim modülleri</li>
            <li>Dinamik stok yönetimi</li>
            <li>Mobil uyumlu tasarım seçenekleri</li>
          </ul>
          <p className="font-semibold">Avantajlar:</p>
          <ul className="list-disc list-inside">
            <li>Ziyaretçi trafiğini artırma</li>
            <li>Uluslararası satış imkanı</li>
            <li>Daha fazla satış ve gelir hedefleyen işletmeler için ideal</li>
          </ul>
        </>
      ),
    },
    {
      id: "pro",
      title: "Premium Paket",
      emoji: "🏆",
      description:
        "Yüksek hacimli satış yapan büyük işletmelere özel. Tam özelleştirme, entegrasyonlar ve profesyonel destek içerir.",
      modalContent: (
        <>
          <h3 className="text-xl font-bold mb-2">Profesyonel E-Ticaret Yönetimi</h3>
          <p className="mb-2">Yüksek hacimli satış yapan ve profesyonel bir e-ticaret deneyimi yaşamak isteyen işletmeler için premium paketimiz tüm ihtiyaçlarınızı karşılar.</p>
          <p className="font-semibold">Özellikler:</p>
          <ul className="list-disc list-inside mb-2">
            <li>Yapay zeka tabanlı analiz ve raporlama araçları</li>
            <li>Kendi mobil uygulamanızı oluşturma imkanı</li>
            <li>Limitsiz ürün ekleme</li>
            <li>Çoklu mağaza yönetimi</li>
            <li>VIP destek hizmeti</li>
          </ul>
          <p className="font-semibold">Avantajlar:</p>
          <ul className="list-disc list-inside">
            <li>Rakiplerinizin önüne geçmenizi sağlayan özel araçlar</li>
            <li>Üst düzey müşteri deneyimi</li>
            <li>Büyük hacimli işletmeler için ölçeklenebilir çözümler</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <>
      {/* Banner Section */}
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-24">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography variant="h1" color="white" className="mb-6 font-black">
                İşletmenize Uygun E-Ticaret Paketleri
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                E-ticaret yolculuğunuzda ihtiyaçlarınıza tam olarak cevap verecek bir çözüm mü arıyorsunuz? İster küçük bir girişimci, ister büyük bir marka olun, size özel hazırlanmış e-ticaret paketlerimizle başarıya ulaşmanız artık çok kolay. Teknoloji, esneklik ve kullanıcı dostu özelliklerle donatılmış paketlerimiz arasından işletmenize en uygun olanını seçin.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Her İhtiyaca Uygun Paket Çözümleri
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
            E-ticaret platformlarımız, farklı işletme ihtiyaçlarına yönelik olarak geliştirilmiştir. Küçük ölçekli girişimlerden, yüksek hacimli satışlara odaklanan büyük markalara kadar her işletmeye uygun bir paketimiz bulunmaktadır.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                onClick={() => setOpenModal(pkg.id)}
                className="cursor-pointer bg-gray-50 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {pkg.emoji} {pkg.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {pkg.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
    {openModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-10">
    <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl p-10 relative border border-gray-200">
      {/* Kapatma Butonu */}
      <button
        onClick={() => setOpenModal(null)}
        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition duration-200 text-2xl"
        aria-label="Kapat"
      >
        &times;
      </button>

      {/* İçerik */}
      <div className="space-y-4 text-left">
        {packages.find((p) => p.id === openModal)?.modalContent}
      </div>
    </div>
  </div>
)}
<section className="bg-white py-20 px-6">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-black mb-12">
      Neden Bizim Paketlerimizi Seçmelisiniz?
    </h2>
    <div className="space-y-10 relative border-l-4 border-indigo-600 pl-6">
      {[
        ["Esneklik ve Ölçeklenebilirlik", "İşletmenizin büyüme hızına uyum sağlar."],
        ["Güvenilir Altyapı", "Yüksek güvenlik standartlarıyla veri koruma."],
        ["Kullanıcı Dostu", "Kod bilmeden kolay kullanım."],
        ["7/24 Teknik Destek", "Her an yanınızdayız."],
        ["Kolay Entegrasyon", "Kargo ve ödeme sistemleriyle entegre."],
      ].map(([title, desc], i) => (
        <div key={i} className="ml-4">
          <h3 className="text-xl font-semibold text-black">{title}</h3>
          <p className="text-black">{desc}</p>
        </div>
      ))}
    </div>

    <p className="mt-10 text-center text-gray-700 text-lg max-w-2xl mx-auto">
      Küçük işletmelerden büyük markalara, her ihtiyaca uygun e-ticaret paketleri ile işinizi büyütün.
      SEO araçları, pazaryeri entegrasyonu ve özel çözümler sunuyoruz. Hemen keşfedin!
    </p>
  </div>
</section>


      </section>

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default ECommerceSolve;
