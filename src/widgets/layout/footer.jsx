import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Şirket Bilgileri */}
          <div className="md:w-1/2">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/img/kr.png"
                alt="Krum Technology Logo"
                className="w-10 h-10 object-contain"
              />
              <h2 className="text-2xl font-bold">Krum Technology</h2>
            </div>
            <p className="text-gray-300">
              Türkiye'nin önde gelen teknoloji çözümleri sağlayıcısı olarak,
              yenilikçi ve güvenilir hizmetlerimizle dijital dönüşümünüzü destekliyoruz.
            </p>
          </div>

          {/* Sağ Taraf */}
          <div className="md:w-1/2 flex flex-col sm:flex-row gap-8">
            {/* Sosyal Medya */}
            <div className="sm:w-1/2">
              <h3 className="font-bold mb-4">SOSYAL MEDYA</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <FaLinkedin size={24} />
                </a>
                
              </div>
            </div>

            {/* İletişim */}
            <div className="sm:w-1/2">
              <h3 className="font-bold mb-4">İLETİŞİM BİLGİLERİ</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-start gap-2">
                  <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                  <p>A Registered Agent, Inc.8 The Green STE AKENT COUNTYDover, DE, 19901, United States</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaPhone />
                  <p>+90 212 233 2323</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope />
                  <p>bilgi@krum.com.tr</p>
                </div>
        
                
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>
            Copyright © {new Date().getFullYear()} Krum Technology - Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
