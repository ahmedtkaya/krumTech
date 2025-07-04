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

export function Digital() {
  const [openModal, setOpenModal] = useState(null);

  
    
   

  return (
    <>
      {/* Banner Section */}
      <div className="relative flex min-h-[90vh] items-center justify-center">
        <div className="absolute top-0 h-full w-full bg-[url('/img/3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography variant="h1" color="white" className="mb-6 font-black">
               Dijital Pazarlama Hizmetlerimiz ile İşinizi Büyütün
              </Typography>
              <Typography variant="h2" color="white" className="mb-6 font-black">
              Dijital Pazarlama ile Daha Fazla Müşteriye Ulaşın
              </Typography>
              
              <Typography variant="lead" color="white" className="opacity-80">
               Dijital çağda başarılı bir işletme olmanın sırrı, etkili bir dijital pazarlama stratejisinden geçiyor.
Krum Technology olarak, işletmenizin dijital dünyada fark edilmesini sağlayacak, müşteri
kitlenizi genişletecek ve satışlarınızı artıracak kapsamlı dijital pazarlama hizmetleri sunuyoruz.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-gray-100 py-24 px-4">
              <div className="container mx-auto flex flex-col gap-24">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
                  <div className="lg:w-1/2">
                    <Typography variant="h3" className="mb-4 font-bold text-blue-gray-800">
                       Dijital Pazarlamanın Gücü
                    </Typography>
                    <Typography className="text-blue-gray-600 text-base">
                      Dijital pazarlama, markanızı doğru zamanda, doğru yerde ve doğru kitleyle buluşturmanın en akıllı yoludur. Geleneksel pazarlama yöntemlerinden farklı olarak, hedef kitlenizin davranışlarını analiz etmenizi, stratejinizi veriye dayalı olarak şekillendirmenizi ve her adımda ölçülebilir sonuçlar elde etmenizi sağlar.
                    </Typography>
                    <Typography className="text-blue-gray-600 text-base">
                     Sunduğumuz dijital pazarlama çözümleriyle sadece görünür olmakla kalmaz, aynı zamanda potansiyel müşterilerinizin zihninde kalıcı bir iz bırakırsınız. Arama motoru optimizasyonu (SEO), sosyal medya yönetimi, içerik üretimi, e-posta pazarlaması ve performans analizleriyle desteklenen kampanyalarımız sayesinde markanızı büyütür, satışlarınızı artırır ve dijitalde güçlü bir konum elde edersiniz.
                    </Typography>
                    <Typography className="text-blue-gray-600 text-base">
                      İşletmenizin hedeflerine uygun, özel olarak tasarlanmış stratejilerimizle sizi sadece bugünün değil, geleceğin dijital dünyasına da hazır hale getiriyoruz.
                    </Typography>
      
                  </div>
                  <div className="lg:w-1/2">
                    <img src="/img/dm.png" alt="E-Ticaret Teknoloji" className="h-[400px] w-full object-cover rounded-lg shadow-lg" />
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gray-50 py-20 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-gray-800 mb-12">Hizmetlerimiz</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
      {[
        {
          title: "SEO (Arama Motoru Optimizasyonu)",
          icon: "🔍",
          desc: "Web sitenizi arama motorlarında üst sıralara taşıyarak organik trafiğinizi artırıyoruz.",
        },
        {
          title: "PPC Reklam Yönetimi",
          icon: "💰",
          desc: "Google, Meta gibi platformlarda reklamlarınızı yöneterek yüksek ROI elde etmenizi sağlıyoruz.",
        },
        {
          title: "Sosyal Medya Yönetimi",
          icon: "📱",
          desc: "Markanız için özgün içerikler üretip, topluluk yönetimi ve reklamlarla etkileşimi artırıyoruz.",
        },
        {
          title: "E-Posta Pazarlama",
          icon: "✉️",
          desc: "Sadık müşteriler için e-posta kampanyaları hazırlıyor, satışlarınızı yeniden canlandırıyoruz.",
        },
        {
          title: "İçerik Pazarlama",
          icon: "📝",
          desc: "Blog, video ve e-kitap gibi içeriklerle hedef kitlenizin ilgisini çekiyoruz.",
        },
        {
          title: "Dönüşüm Optimizasyonu (CRO)",
          icon: "📊",
          desc: "Web sitenizin dönüşüm oranını artırmak için A/B testleri ve veri analizleri yapıyoruz.",
        },
        {
          title: "Dijital Strateji ve Danışmanlık",
          icon: "🧭",
          desc: "İşletmenize özel stratejiler geliştiriyor ve doğru yol haritasını belirliyoruz.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
        >
          <div className="text-4xl mb-4">{item.icon}</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="bg-white py-24 px-4">
        <div className="container mx-auto flex flex-col gap-24">
          <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <Typography variant="h3" className="mb-4 font-bold text-blue-gray-800">
               Hedef Kitlenizi Tanıyın ve Onlara Ulaşın
              </Typography>
              <Typography className="text-blue-gray-600 text-base">
                Etkili bir dijital pazarlama stratejisi, sadece içerik üretmek ya da reklam yayınlamakla sınırlı değildir. Gerçek başarı, hedef kitlenizi derinlemesine tanımak ve bu bilgiyi stratejik bir avantaja dönüştürmekle başlar. Biz, markanızı dijital dünyada öne çıkarmak için öncelikle müşterilerinizin kim olduğunu, nelere ilgi duyduğunu, hangi platformlarda zaman geçirdiğini ve satın alma alışkanlıklarını detaylı biçimde analiz ediyoruz.

                Veriye dayalı yaklaşımlarımız sayesinde, pazarlama süreçlerini sadece sezgilere değil, güçlü içgörülere dayandırıyoruz. Kullanıcı davranışlarını gerçek zamanlı olarak izliyor, bu verileri anlamlandırıyor ve hedeflemeyi sürekli geliştiriyoruz. Böylece mesajınızı yalnızca geniş kitlelere ulaştırmakla kalmıyor, aynı zamanda yüksek potansiyel taşıyan bireylere en etkili şekilde ulaşıyoruz.

                Gelişmiş segmentasyon teknikleri, kişiselleştirilmiş kampanyalar ve çok kanallı etkileşim stratejileri ile dijital varlığınızı güçlendiriyoruz. Her temas noktasını anlamlı hale getiriyor, müşteri deneyimini iyileştiriyor ve sadakati artırıyoruz.
              </Typography>
            </div>
            <div className="lg:w-1/2">
              <img src="/img/hk.png" alt="E-İhracat" className="h-[400px] w-full object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

<section className="bg-gray-50 py-20 px-6">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
      Neden Krum Technology’yi Tercih Etmelisiniz?
    </h2>
    <div className="relative border-l-4 border-gradient-to-b from-blue-600 to-purple-500 pl-8 space-y-10">
      {[
        ["Veri Odaklı Yaklaşım", "Stratejilerimiz veriye dayalıdır ve ölçülebilir sonuçlar sunar."],
        ["Uzman Ekip", "Alanında deneyimli, güncel trendleri takip eden profesyonellerle çalışırsınız."],
        ["Tam Entegrasyon", "CRM ve e-ticaret altyapılarıyla tamamen uyumlu dijital çözümler."],
        ["Müşteri Odaklılık", "İşletmenizin değil müşterinizin ihtiyaçlarını merkeze alırız."],
        ["Kapsamlı Hizmet", "SEO’dan e-posta pazarlamaya kadar tüm dijital ihtiyaçlara tek noktadan çözüm."],
      ].map(([title, desc], index) => (
        <div key={index} className="relative">
          <div className="absolute -left-4 top-1 w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-500 rounded-full" />
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600 mt-1">{desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


<section className="bg-white py-20 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
      Dijital Pazarlama Sürecimiz
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          step: "1. Analiz ve Planlama",
          desc: "İşletmenizin mevcut durumunu ve hedeflerini analiz eder, hedef kitlenizi tanımlarız.",
          icon: "📊",
        },
        {
          step: "2. Strateji Geliştirme",
          desc: "Sektöre ve ihtiyaçlara özel dijital pazarlama stratejileri oluştururuz.",
          icon: "🧠",
        },
        {
          step: "3. Uygulama",
          desc: "Reklam kampanyaları, SEO ve içerik üretimini eksiksiz şekilde uygularız.",
          icon: "🚀",
        },
        {
          step: "4. Optimizasyon",
          desc: "Kampanyaları sürekli izler, verilerle güçlendirerek maksimum verim elde ederiz.",
          icon: "🔁",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-left"
        >
          <div className="text-4xl mb-4">{item.icon}</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.step}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="bg-gray-50 py-20 px-6">
    <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
      Veriye Dayalı Pazarlama Stratejileri
    </h2>
  <div className="max-w-4xl mx-auto space-y-4">
    {[
      {
        title: "1. Müşteri Verilerinizi Sahiplenin",
        details: `Müşteri verilerini sahiplenmek, bu verileri iş süreçlerinize entegre etmek ve onlardan değer yaratmak demektir. Verilerin güvenliği, kullanımı ve işlenmesi için yasal düzenlemelere (GDPR, CCPA vb.) uyum sağlanmalıdır.`,
        technical: [
          "Veri Toplama: CRM, web trafiği, sosyal medya ve POS sistemlerinden veri entegrasyonu yapın.",
          "Depolama: Merkezi bir müşteri veri platformu (CDP) kullanın.",
          "Güvenlik: Verilerinizi şifrelemek için AES-256 ve TLS protokollerini uygulayın.",
          "Yönetim: Apache Kafka gibi veri akışı araçlarını kullanarak gerçek zamanlı veri işleme sistemleri kurun."
        ],
        tools: ["Salesforce, HubSpot, Segment.io", "Amazon S3, Google Cloud Storage"]
      },
      {
        title: "2. Sonsuz Olanaklar",
        details: `Veri çeşitliliği ve esnek segmentasyon araçlarıyla müşteri segmentasyonunda sınırsız kombinasyon yaratabilirsiniz.`,
        technical: [
          "Segmentasyon Verileri: Yaş, coğrafi konum, satın alma sıklığı, tercih edilen ödeme yöntemleri.",
          "Algoritmalar: K-Means, DBSCAN veya Hiyerarşik Kümeleme algoritmalarını uygulayın.",
          "Veri Görselleştirme: Tableau veya Power BI ile segmentlerin görselleştirilmesi."
        ],
        tools: [
          "Yeni müşterileri, sadık müşterilerden ayırarak özel indirim kampanyaları sunun.",
          "B2B satış süreçlerinde sektör bazlı segmentler oluşturun."
        ]
      },
      {
        title: "3. Dinamik Güncellemeler",
        details: `Segmentlerin sürekli olarak güncellenmesi, müşterilerin davranış değişimlerine göre hızlı yanıt vermeyi sağlar.`,
        technical: [
          "Gerçek Zamanlı İşleme: Apache Spark Streaming veya Flink ile veri akışını yönetin.",
          "Dinamik Kurallar: Segmentler, belirli davranışlara (ör. son 30 günde alışveriş yapmama) göre otomatik güncellensin.",
          "Makine Öğrenimi: Supervised Learning (denetimli öğrenme) modelleri ile tahminler yapın."
        ],
        tools: ["Snowflake, Google BigQuery", "Python Scikit-learn kütüphanesi"]
      },
      {
        title: "4. Güveni Artırın",
        details: `Müşteri verilerinin güvenliği, marka güvenilirliği açısından kritik öneme sahiptir.`,
        technical: [
          "Şifreleme: AES-256 tabanlı veri şifreleme.",
          "Erişim Kontrolü: Role-based access control (RBAC) ve çok faktörlü kimlik doğrulama (MFA).",
          "Veri Maskeleme: Hassas bilgilerin anonimleştirilmesi."
        ],
        tools: ["Okta, Azure Active Directory", "HashiCorp Vault"]
      },
      {
        title: "5. Segmentleri İşlevsel Hale Getirin",
        details: `Segmentlerinizi pazarlama, satış ve müşteri hizmetleri süreçlerine entegre edin.`,
        technical: [
          "Pazarlama: Segmentlere özel Google Ads ve Meta Ads kampanyaları oluşturun.",
          "Satış: CRM yazılımında segmentlere özel satış stratejileri geliştirin.",
          "Entegrasyon: Zapier veya Mulesoft ile farklı sistemleri birbirine bağlayın."
        ],
        tools: ["Sadık müşterilere özel bir ödül programı geliştirin ve otomatik kampanyalarla yönetin."]
      },
      {
        title: "6. Satın Almaları Teşvik Eden Kişiselleştirilmiş E-postalar Gönderin",
        details: `Kişiselleştirilmiş e-postalar, dönüşüm oranlarını artırmanın etkili bir yoludur.`,
        technical: [
          "Dinamik İçerik: Kullanıcıların adı, son alışverişi veya konumu gibi bilgileri e-postada gösterin.",
          "Segment Entegrasyonu: CRM'den gelen segment verilerini e-posta sistemine entegre edin.",
          "Test: A/B testleriyle en etkili içerik türlerini belirleyin."
        ],
        tools: ["Mailchimp, Klaviyo", "Python Email Automation kütüphaneleri"]
      },
      {
        title: "7. Yüksek Değere Sahip Müşterileri İndirimlerle Hedefleyin",
        details: `Müşteri ömür boyu değerine (CLV) göre premium müşterilere özel teklifler sunun.`,
        technical: [
          "CLV Hesaplama: RFM (Recency, Frequency, Monetary) analiz modeli kullanın.",
          "Özel Kampanyalar: CRM ile entegre bir kampanya yönetim sistemi geliştirin."
        ],
        tools: ["Ömür boyu değeri yüksek müşterilere ücretsiz kargo ve özel promosyonlar sunun."]
      },
      {
        title: "8. Pazarlama Otomasyonlarınızda Segmentleri Kullanın",
        details: `Segment bazlı pazarlama otomasyonlarıyla verimliliği artırın.`,
        technical: [
          "Zamanlama: Trigger-based email ve SMS gönderimleri.",
          "Otomasyon Motorları: Segmentlere özel kampanyaları yönetmek için Zapier, ActiveCampaign."
        ]
      },
      {
        title: "9. Hızlı Segmentasyon",
        details: `Büyük veri setleri üzerinde hızlı segmentasyon yapmak için veri işleme sürelerini optimize edin.`,
        technical: [
          "Veritabanı Optimizasyonu: NoSQL (MongoDB) ile büyük veri kümeleri için hızlı sorgulama.",
          "Paralel İşleme: Hadoop veya Spark gibi araçlarla veri işleme hızını artırın."
        ]
      },
      {
        title: "10. Doğru Müşterilerle Etkileşim Kurun",
        details: `Segmentlerin doğru müşteri gruplarını hedeflediğinden emin olun.`,
        technical: [
          "Davranış Analizi: Google Analytics ile kullanıcı davranışlarını inceleyin.",
          "Etkileşim Stratejileri: Kişiselleştirilmiş mesajlar oluşturmak için chatbot'ları kullanın."
        ]
      },
      {
        title: "11. Özel Nitelikler Ekleyin",
        details: `Segmentlere özel meta veriler ekleyerek hedeflemeyi geliştirin.`,
        technical: [
          "Özel Alanlar: CRM'de kullanıcı profillerine özel alanlar ekleyin.",
          "Yapay Zeka: Segmentlerin ihtiyaçlarına göre içerik önerileri geliştirin."
        ]
      },
      {
        title: "12. Müşteri Davranışlarından Öğrenin",
        details: `Geçmiş verilerden öğrenerek gelecekteki stratejileri optimize edin.`,
        technical: [
          "Davranış Analitiği: Python Pandas ve NumPy ile verileri analiz edin.",
          "Tahmin Modelleri: Satın alma alışkanlıklarını tahmin eden modeller geliştirin."
        ]
      }
    ].map((section, idx) => (
      <div
        key={idx}
        className="border border-gray-200 rounded-lg shadow-sm"
      >
        <button
          onClick={() =>
            setOpenModal((prev) => (prev === idx ? null : idx))
          }
          className="w-full text-left px-6 py-4 flex justify-between items-center text-lg font-semibold text-gray-800 hover:bg-gray-50 transition"
        >
          <span>{section.title}</span>
          <span className="text-blue-600 text-2xl">
            {openModal === idx ? "−" : "+"}
          </span>
        </button>
        {openModal === idx && (
          <div className="px-6 pb-4 pt-2 text-gray-700 text-sm">
            <p className="mb-2">{section.details}</p>
            {section.technical && (
              <>
                <p className="font-medium mt-4">Teknik Yaklaşım:</p>
                <ul className="list-disc ml-6">
                  {section.technical.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}
            {section.tools && (
              <>
                <p className="font-medium mt-4">Araçlar / Örnekler:</p>
                <ul className="list-disc ml-6">
                  {section.tools.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </div>
    ))}
  </div>
  </div>
</section>

<section className="bg-[url('/img/b5.jpg')] bg-cover bg-center py-24 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">KRUM E-Com Özellikleri</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {[
        {
          title: "1. Müşteri Bulma Araçları",
          back: `KRUM E-Com, işletmelerin yeni müşteriler kazanmasına yardımcı olmak için geniş bir araç yelpazesi sunar.
● Sosyal Medya Entegrasyonları: Facebook, Instagram, TikTok, Pinterest ve Snapchat’e doğrudan bağlantılar.
● Online Pazar Yerleri: Amazon, Walmart, Target+ ve eBay ile entegrasyon.
● KRUM E-Com Collabs: Influencer iş birlikleriyle daha fazla görünürlük ve satış.`,
        },
        {
          title: "2. Pazarlama Otomasyonu",
          back: `Pazarlama süreçlerini kolaylaştırmak ve müşteri ilişkilerini güçlendirmek için otomasyon araçları içerir.
● Potansiyel Müşteri Toplama: Formlarla müşteri bilgilerini alın.
● Markalı E-Posta: Kişiselleştirilmiş, profesyonel e-posta gönderimleri.
● Zamanlama ve Segmentasyon: Otomatik zamanlama ile doğru müşteriye doğru mesaj.
● KRUM E-Com Inbox: Müşteri geri bildirimleri tek yerden yönetilir.`,
        },
        {
          title: "3. Entegrasyonlar ve Reklam Yönetimi",
          back: `Pazarlama kampanyalarınızı yönetmek için reklam entegrasyonları sunar.
● Google, TikTok ve Pinterest entegrasyonları.
● Sipariş Kaynağı Analizi: En çok sipariş getiren platformları belirleme.
● Reklam Bütçesi Optimizasyonu: Harcamaları analiz ederek bütçeyi verimli kullanma.
● Hedefleme: Müşteriye özel kampanya gösterimi.`,
        },
        {
          title: "4. Analiz ve Veri Kullanımı",
          back: `Veriye dayalı karar almayı destekler.
● Pazarlama Sonuçları Ölçümü: Kampanya performanslarını ölçümleme.
● Harcama ve Gelir Karşılaştırması: Gelire oranla pazarlama verimliliği.
● Veriye Dayalı Strateji: Gerçek verilere dayanan karar mekanizması.`,
        },
        {
          title: "5. Çok Kanallı Pazarlama Stratejileri",
          back: `Müşterilere her platformda ulaşmayı sağlar.
● Sosyal Medya ve Pazar Yerlerinde Senkronizasyon.
● Her Kanaldan Erişim: Tutarlı bir müşteri deneyimi sunar.
● Ürün Görünürlüğü Artışı: Geniş bir kitleye erişim sağlanır.`,
        },
        {
          title: "6. Müşteri Deneyimi ve İlişki Yönetimi",
          back: `Müşteriyle daha güçlü ilişkiler kurmanıza destek olur.
● Etkileşim Yönetimi: KRUM E-Com Inbox ile her mesajı tek panelden yönetin.
● Kişiselleştirme: Öneriler ve kampanyalarla memnuniyet artırılır.
● Satış Artışı: Optimize edilmiş deneyim ile daha fazla dönüşüm elde edilir.`,
        },
      ].map((item, idx) => (
        <div key={idx} className="group [perspective:1000px] w-full h-64">
          <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Side */}
            <div className="absolute inset-0 bg-black text-white rounded-xl shadow-xl flex items-center justify-center px-6 py-4 text-center">
              <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
            </div>
            {/* Back Side */}
            <div className="absolute inset-0 bg-gray-50 text-gray-800 rounded-1g shadow-md px-6 py-4 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-y-auto max-h-64">
              <p className="text-base md:text-lg text-center leading-relaxed whitespace-pre-line">
                {item.back}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>







    </>
  );
}

export default Digital;
