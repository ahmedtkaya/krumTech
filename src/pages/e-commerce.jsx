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

export function ETrade() {
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
                E-İhracat ile Global Pazarın Kapılarını Aralayın
              </Typography>
              <Typography variant="h2" color="white" className="mb-6 font-black">
                E-İhracat ile Global Pazara Adım Atın
              </Typography>

              <Typography variant="lead" color="white" className="opacity-80">
                Dünya, sınırları hızla ortadan kaldıran dijitalleşme çağını yaşıyor. E-İhracat sayesinde işletmenizi yerel sınırların ötesine taşıyabilir, global müşterilere ulaşabilir ve gelirlerinizi artırabilirsiniz. Doğru stratejiler ve güçlü bir altyapı ile ürünlerinizi dünyanın dört bir yanına ulaştırmak artık çok kolay. Gelin, işinizi globalleştirmek için neler yapabileceğimizi keşfedin.
              </Typography>
            </div>
          </div>
        </div>
      </div>

  

<section class="bg-gray-100 py-24 px-4">
  <div class="max-w-6xl mx-auto text-center">
    
    <h2 class="text-3xl md:text-4xl font-bold text-gray-800">
      E-İhracat Neden Önemlidir?
    </h2>

    
    <div class="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-10 rounded-full"></div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
     
      <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <div class="text-4xl mb-4">🌍</div>
        <h3 class="text-xl font-semibold text-gray-800 mb-2">Global Pazara Açılın</h3>
        <p class="text-gray-600 text-sm">Dijital kanallarla dünyanın dört bir yanındaki müşterilere erişim sağlayın.</p>
      </div>

      <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <div class="text-4xl mb-4">🚀</div>
        <h3 class="text-xl font-semibold text-gray-800 mb-2">Marka Bilinirliği</h3>
        <p class="text-gray-600 text-sm">Online görünürlüğünüzü artırarak daha fazla kullanıcıya ulaşın.</p>
      </div>

      
      <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <div class="text-4xl mb-4">💰</div>
        <h3 class="text-xl font-semibold text-gray-800 mb-2">Döviz Geliri</h3>
        <p class="text-gray-600 text-sm">Yurt dışına satış yaparak gelirlerinizi dövize çevirin.</p>
      </div>

      
      <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <div class="text-4xl mb-4">👥</div>
        <h3 class="text-xl font-semibold text-gray-800 mb-2">Müşteri Tabanı</h3>
        <p class="text-gray-600 text-sm">Yeni müşteri kitlelerine ulaşarak büyümenizi hızlandırın.</p>
      </div>

      
      <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <div class="text-4xl mb-4">⚔️</div>
        <h3 class="text-xl font-semibold text-gray-800 mb-2">Rekabet Avantajı</h3>
        <p class="text-gray-600 text-sm">Rakiplerinizden ayrışarak pazarda güçlü bir konum elde edin.</p>
      </div>
    </div>
  </div>
</section>

<section class="bg-gray-100 py-24 px-4">
  <div class="max-w-7xl mx-auto text-center">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
      E-İhracatın Avantajları
    </h2>
    <p class="text-gray-600 mb-12 max-w-2xl mx-auto">
      E-İhracat, işletmelere benzersiz avantajlar sunar. İşte bu iş modelini tercih etmeniz için bazı sebepler:
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
     
      <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6">
        <img src="/img/global.png" alt="Global Erişim" class="w-full h-52 object-contain mb-4 mx-auto" />
        <h3 class="text-lg font-semibold text-gray-800 mb-2">Global Erişim</h3>
        <p class="text-gray-600 text-sm">Dünyanın dört bir yanındaki müşterilere ürünlerinizi hızla ulaştırabilirsiniz.</p>
      </div>

      
      <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6">
        <img src="/img/cost.jpg" alt="Maliyet Avantajı" class="w-full h-52 object-contain mb-4 mx-auto" />
        <h3 class="text-lg font-semibold text-gray-800 mb-2">Maliyet Avantajı</h3>
        <p class="text-gray-600 text-sm">Aracıya gerek kalmadan düşük maliyetle satış yapabilirsiniz.</p>
      </div>

      <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6">
        <img src="/img/7.jpg" alt="24/7 Satış" class="w-full h-52 object-contain mb-4 mx-auto" />
        <h3 class="text-lg font-semibold text-gray-800 mb-2">24/7 Satış İmkanı</h3>
        <p class="text-gray-600 text-sm">E-ticaret siteniz her zaman açık, her zaman erişilebilir.</p>
      </div>

      
      <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6">
        <img src="/img/power.jpg" alt="Marka Gücü" class="w-full h-52 object-contain mb-4 mx-auto" />
        <h3 class="text-lg font-semibold text-gray-800 mb-2">Marka Gücü</h3>
        <p class="text-gray-600 text-sm">Uluslararası pazarda markanızı öne çıkarma fırsatı yakalayın.</p>
      </div>
    </div>
  </div>
</section>

<section class="bg-white py-20 px-4">
  <div class="max-w-3xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
      E-İhracat için Sunduğumuz Çözümler
    </h2>

    <div class="space-y-4">
      
      <details class="group border border-gray-200 rounded-lg transition-all duration-300 overflow-hidden bg-white hover:shadow-md">
        <summary class="cursor-pointer p-4 font-medium text-gray-800 flex justify-between items-center group-open:bg-blue-50 group-open:text-blue-800 transition-colors">
          Çoklu Dil ve Para Birimi
          <span class="ml-auto text-sm text-gray-500 group-open:rotate-180 transition-transform duration-300">▼</span>
        </summary>
        <div class="px-4 pb-4 text-gray-600 text-sm animate-fade-in">
          Müşterileriniz kendi dillerinde ve para birimlerinde alışveriş yapabilir. Otomatik kur hesaplama ve ödeme işlemleriyle kolaylık sağlar.
        </div>
      </details>

      
      <details class="group border border-gray-200 rounded-lg transition-all duration-300 overflow-hidden bg-white hover:shadow-md">
        <summary class="cursor-pointer p-4 font-medium text-gray-800 flex justify-between items-center group-open:bg-blue-50 group-open:text-blue-800 transition-colors">
          Lojistik ve Kargo Entegrasyonları
          <span class="ml-auto text-sm text-gray-500 group-open:rotate-180 transition-transform duration-300">▼</span>
        </summary>
        <div class="px-4 pb-4 text-gray-600 text-sm animate-fade-in">
          DHL, UPS, FedEx gibi global lojistik şirketleriyle tam entegrasyon sağlar. Siparişlerinizi kolayca takip edebilir, müşteri memnuniyetini artırabilirsiniz.
        </div>
      </details>

      
      <details class="group border border-gray-200 rounded-lg transition-all duration-300 overflow-hidden bg-white hover:shadow-md">
        <summary class="cursor-pointer p-4 font-medium text-gray-800 flex justify-between items-center group-open:bg-blue-50 group-open:text-blue-800 transition-colors">
          Yerel Ödeme Sistemleri
          <span class="ml-auto text-sm text-gray-500 group-open:rotate-180 transition-transform duration-300">▼</span>
        </summary>
        <div class="px-4 pb-4 text-gray-600 text-sm animate-fade-in">
          PayPal, Stripe gibi global ödeme sistemleriyle tam uyumlu altyapımız sayesinde müşterileriniz güvenli ödeme işlemleri gerçekleştirebilir.
        </div>
      </details>

      
      <details class="group border border-gray-200 rounded-lg transition-all duration-300 overflow-hidden bg-white hover:shadow-md">
        <summary class="cursor-pointer p-4 font-medium text-gray-800 flex justify-between items-center group-open:bg-blue-50 group-open:text-blue-800 transition-colors">
          Vergi ve Gümrük Yönetimi
          <span class="ml-auto text-sm text-gray-500 group-open:rotate-180 transition-transform duration-300">▼</span>
        </summary>
        <div class="px-4 pb-4 text-gray-600 text-sm animate-fade-in">
          E-İhracat sürecinde gerekli olan vergi ve gümrük işlemleri sistem tarafından otomatik olarak yürütülür. Bu sayede yasal uyumluluk ve süreç yönetimi kolaylaşır.
        </div>
      </details>

      
      <details class="group border border-gray-200 rounded-lg transition-all duration-300 overflow-hidden bg-white hover:shadow-md">
        <summary class="cursor-pointer p-4 font-medium text-gray-800 flex justify-between items-center group-open:bg-blue-50 group-open:text-blue-800 transition-colors">
          Pazarlama ve SEO Destekleri
          <span class="ml-auto text-sm text-gray-500 group-open:rotate-180 transition-transform duration-300">▼</span>
        </summary>
        <div class="px-4 pb-4 text-gray-600 text-sm animate-fade-in">
          Uluslararası SEO çalışmaları, sosyal medya entegrasyonları ve reklam desteği ile ürünlerinizi ve markanızı global pazarda öne çıkarabilirsiniz.
        </div>
      </details>
    </div>
  </div>
</section>

<section class="bg-gray-50 py-20 px-4">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
      E-İhracata Nasıl Başlanır?
    </h2>

    <div class="grid md:grid-cols-2 gap-6">
     
      <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
        <div class="text-blue-600 text-2xl font-bold mb-2">1</div>
        <h3 class="font-semibold text-gray-800 mb-2">E-Ticaret Sitenizi Kurun</h3>
        <p class="text-gray-600 text-sm">Kullanıcı dostu bir altyapı ile ürünlerinizi sergileyin.</p>
      </div>

      
      <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
        <div class="text-blue-600 text-2xl font-bold mb-2">2</div>
        <h3 class="font-semibold text-gray-800 mb-2">Global Ödeme ve Lojistik Sistemlerini Entegre Edin</h3>
        <p class="text-gray-600 text-sm">Müşterileriniz için hızlı ve güvenli bir alışveriş deneyimi sunun.</p>
      </div>

      
      <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
        <div class="text-blue-600 text-2xl font-bold mb-2">3</div>
        <h3 class="font-semibold text-gray-800 mb-2">Pazar Analizi Yapın</h3>
        <p class="text-gray-600 text-sm">Hedef ülkelerdeki müşteri ihtiyaçlarını ve alışveriş trendlerini analiz edin.</p>
      </div>

     
      <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
        <div class="text-blue-600 text-2xl font-bold mb-2">4</div>
        <h3 class="font-semibold text-gray-800 mb-2">Dijital Pazarlama Stratejileri Uygulayın</h3>
        <p class="text-gray-600 text-sm">Sosyal medya, SEO ve e-posta kampanyaları ile global müşterilere ulaşın.</p>
      </div>

      
      <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
        <div class="text-blue-600 text-2xl font-bold mb-2">5</div>
        <h3 class="font-semibold text-gray-800 mb-2">Vergi ve Yasal Süreçleri Yönetin</h3>
        <p class="text-gray-600 text-sm">Gümrük işlemleri ve uluslararası ticaret kurallarına uyum sağlayın.</p>
      </div>
    </div>
  </div>
</section>


<section class="bg-white py-20 px-4">
  <div class="max-w-6xl mx-auto text-center mb-12">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-800">Hangi Ürünler E-İhracat İçin İdealdir?</h2>
    <p class="text-gray-500 mt-2">Global pazarda öne çıkan başlıca ürün kategorileri:</p>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
    
    
    <div class="flex flex-col items-center text-center">
      <div class="w-24 h-24 flex items-center justify-center rounded-full bg-blue-100 text-blue-800 text-3xl mb-4 transition-transform duration-300 hover:scale-110">
        👕
      </div>
      <h3 class="text-lg font-semibold text-gray-800 mb-1">Tekstil ve Moda</h3>
      <p class="text-gray-600 text-sm">Türk tekstil ürünleri dünya çapında ilgi görür.</p>
    </div>

    
    <div class="flex flex-col items-center text-center">
      <div class="w-24 h-24 flex items-center justify-center rounded-full bg-green-100 text-green-800 text-3xl mb-4 transition-transform duration-300 hover:scale-110">
        🥦
      </div>
      <h3 class="text-lg font-semibold text-gray-800 mb-1">Gıda Ürünleri</h3>
      <p class="text-gray-600 text-sm">Organik ve yerel ürünler büyük ilgi görür.</p>
    </div>

   
    <div class="flex flex-col items-center text-center">
      <div class="w-24 h-24 flex items-center justify-center rounded-full bg-purple-100 text-purple-800 text-3xl mb-4 transition-transform duration-300 hover:scale-110">
        🎁
      </div>
      <h3 class="text-lg font-semibold text-gray-800 mb-1">El Sanatları & Hediyelik</h3>
      <p class="text-gray-600 text-sm">Kültürel ve özel tasarım ürünler çok dikkat çeker.</p>
    </div>

    
    <div class="flex flex-col items-center text-center">
      <div class="w-24 h-24 flex items-center justify-center rounded-full bg-red-100 text-red-800 text-3xl mb-4 transition-transform duration-300 hover:scale-110">
        💻
      </div>
      <h3 class="text-lg font-semibold text-gray-800 mb-1">Teknoloji Ürünleri</h3>
      <p class="text-gray-600 text-sm">Elektronik cihazlar her zaman globalde rağbet görür.</p>
    </div>

  </div>
</section>

<section class="bg-black py-20 px-4">
  <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
    
   
    <div class="text-white md:w-1/2">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">E-İhracatla İşinizi Globalleştirin</h2>
      <p class="mb-4 text-gray-300">E-ihracat çözümlerimiz, işletmenizi global bir marka haline getirmek için tasarlanmıştır:</p>
      <ul class="space-y-2 text-gray-300">
        <li>✔ Yurt dışı satışlarınıza hemen başlayın.</li>
        <li>✔ E-ticaret sitenizi global pazarlara uygun hale getirin.</li>
        <li>✔ Dünya çapında müşterilere kolayca ulaşın.</li>
      </ul>
    </div>

    
    <div class="bg-white p-8 rounded-xl shadow-lg md:w-1/2 text-center">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">Sizin İçin Hazırız</h3>
      <p class="text-gray-600 mb-6">
        Daha fazla bilgi almak ve ücretsiz demo talep etmek için bizimle iletişime geçin.
      </p>
      <a href="#iletisim" class="inline-block bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition">
        Demo Talep Et
      </a>
    </div>

  </div>
</section>



      

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default ETrade;
