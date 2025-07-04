import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";

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
            <li>Pazaryeri entegrasyonları</li>
            <li>50 ürüne kadar yükleme</li>
          </ul>
          <p className="font-semibold">Avantajlar:</p>
          <ul className="list-disc list-inside">
            <li>Düşük maliyet</li>
            <li>Hızlı kurulum</li>
            <li>Başlangıç ihtiyaçlarını karşılar</li>
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
          <p className="mb-2">E-ticareti büyütmek istiyorsanız bu paket sizin için.</p>
          <p className="font-semibold">Özellikler:</p>
          <ul className="list-disc list-inside mb-2">
            <li>Gelişmiş SEO</li>
            <li>Çoklu dil ve para birimi</li>
            <li>İndirim modülleri</li>
            <li>Stok yönetimi</li>
            <li>Mobil uyum</li>
          </ul>
          <p className="font-semibold">Avantajlar:</p>
          <ul className="list-disc list-inside">
            <li>Uluslararası satış</li>
            <li>Ziyaretçi trafiği artışı</li>
            <li>Daha fazla dönüşüm</li>
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
          <p className="mb-2">Yüksek hacimli satış yapanlar için premium çözümler.</p>
          <p className="font-semibold">Özellikler:</p>
          <ul className="list-disc list-inside mb-2">
            <li>Yapay zeka analiz</li>
            <li>Mobil uygulama</li>
            <li>Limitsiz ürün</li>
            <li>Çoklu mağaza</li>
            <li>VIP destek</li>
          </ul>
          <p className="font-semibold">Avantajlar:</p>
          <ul className="list-disc list-inside">
            <li>Rakiplerin önünde olun</li>
            <li>Üst düzey müşteri deneyimi</li>
            <li>Kurumsal düzey çözümler</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <>
      {/* Banner Section */}
      <div className="relative flex min-h-[90vh] items-center justify-center">
        <div className="absolute top-0 h-full w-full bg-[url('/img/3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60" />
        <div className="container relative mx-auto">
          <div className="text-center px-4 lg:w-8/12 mx-auto">
            <Typography variant="h1" color="white" className="mb-6 font-black">
              İşletmenize Uygun E-Ticaret Paketleri
            </Typography>
            <Typography variant="lead" color="white" className="opacity-80">
             E-ticaret yolculuğunuzda ihtiyaçlarınıza tam olarak cevap verecek bir çözüm mü arıyorsunuz? İster küçük bir girişimci, ister büyük bir marka olun, size özel hazırlanmış e-ticaret paketlerimizle başarıya ulaşmanız artık çok kolay. Teknoloji, esneklik ve kullanıcı dostu özelliklerle donatılmış paketlerimiz arasından işletmenize en uygun olanını seçin.
            </Typography>
          </div>
        </div>
      </div>

      {/* Paketler */}
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
                <p className="text-gray-600">{pkg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-10">
          <div className="bg-white w-full max-w-3xl max-h-[80vh] overflow-y-auto rounded-3xl shadow-2xl p-10 relative border border-gray-200 text-black">

            <button
              onClick={() => setOpenModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition text-2xl"
            >
              &times;
            </button>
            <div className="space-y-4 text-left">
              {packages.find((p) => p.id === openModal)?.modalContent}
            </div>
          </div>
        </div>
      )}

      {/* Neden Biz? */}
      <section className="bg-gray-50 py-20 px-6">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-black mb-12">
      Neden Bizim Paketlerimizi Seçmelisiniz?
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      
      <div className="space-y-10 border-l-4 border-indigo-600 pl-6">
        {[
          ["Esneklik ve Ölçeklenebilirlik", "İşletmenizin büyüme hızına uyum sağlar."],
          ["Güvenilir Altyapı", "Yüksek güvenlik standartlarıyla veri koruma."],
          ["Kullanıcı Dostu", "Kod bilmeden kolay kullanım."],
        ].map(([title, desc], i) => (
          <div key={i} className="ml-4">
            <h3 className="text-xl font-semibold text-black">{title}</h3>
            <p className="text-black">{desc}</p>
          </div>
        ))}
      </div>

     
      <div className="space-y-10 border-r-4 border-indigo-600 pr-6">
        {[
          ["7/24 Teknik Destek", "Her an yanınızdayız."],
          ["Kolay Entegrasyon", "Kargo ve ödeme sistemleriyle entegre."],
        ].map(([title, desc], i) => (
          <div key={i} className="mr-4 text-right">
            <h3 className="text-xl font-semibold text-black">{title}</h3>
            <p className="text-black">{desc}</p>
          </div>
        ))}
      </div>
    </div>

    <p className="mt-10 text-center text-gray-700 text-lg max-w-2xl mx-auto">
      SEO, pazaryeri entegrasyonu ve özel çözümlerle her büyüklükteki işletmeye destek oluyoruz.
    </p>
  </div>
</section>

      
    </>
  );
}

export default ECommerceSolve;
