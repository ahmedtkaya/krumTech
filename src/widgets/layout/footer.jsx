import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Şirket Bilgileri */}
          <div className="md:w-1/2">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/img/KT.png"
                alt="Krum Technology Logo"
                className="h-32 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300">{t("footer.description")}</p>
          </div>

         
          <div className="md:w-1/2 flex flex-col sm:flex-row gap-8">
            
            <div className="sm:w-1/2">
              <h3 className="font-bold mb-4">{t("footer.social")}</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <FaInstagram size={24} />
                </a>
                <a href="https://www.linkedin.com/company/krum-technology/" className="text-gray-300 hover:text-white">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>

            
            <div className="sm:w-1/2">
              <h3 className="font-bold mb-4">{t("footer.contact")}</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-start gap-2">
                  <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                  <p>{t("footer.address")}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope />
                  <p>https://krumtechnology.com/</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
}
