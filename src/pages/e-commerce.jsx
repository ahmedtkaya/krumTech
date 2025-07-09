import React from "react";
import { Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

export function ETrade() {
  const { t } = useTranslation();

  return (
    <>
      <div className="relative flex min-h-[90vh] items-center justify-center">
        <div className="absolute top-0 h-full w-full bg-[url('/img/3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography variant="h1" color="white" className="mb-6 font-black">
                {t("etrade.bannerTitle")}
              </Typography>
              <Typography variant="h2" color="white" className="mb-6 font-black">
                {t("etrade.bannerSubtitle")}
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                {t("etrade.bannerDescription")}
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <section className="relative bg-gray-100 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/3d.jpg')] bg-cover bg-center opacity-60" style={{ zIndex: 0 }}></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            {t("etrade.whyTitle")}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-10 rounded-full"></div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {t("etrade.whyCards", { returnObjects: true }).map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t("etrade.advantagesTitle")}
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            {t("etrade.advantagesDescription")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t("etrade.advantagesCards", { returnObjects: true }).map((item, index) => (
              <div key={index} className="w-full max-w-[500px] rounded-lg shadow-lg overflow-hidden bg-white text-center p-6">
                <img src={`/img/${index === 0 ? "g" : index === 1 ? "c" : index === 2 ? "24" : "b"}.png`} alt={item.title} className="w-60 h-60 object-cover rounded-[10px] shadow-2x1" />
                <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/backgrounds/311.jpg')] bg-cover bg-center opacity-50 z-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
            {t("etrade.solutionsTitle")}
          </h2>
          <div className="space-y-4">
            {t("etrade.solutionsList", { returnObjects: true }).map((item, index) => (
              <details key={index} className="group border border-gray-200 rounded-lg transition-all duration-300 overflow-hidden bg-white hover:shadow-md">
                <summary className="cursor-pointer p-4 font-medium text-gray-800 flex justify-between items-center group-open:bg-blue-50 group-open:text-blue-800 transition-colors">
                  {item.title}
                  <span className="ml-auto text-sm text-gray-500 group-open:rotate-180 transition-transform duration-300">▼</span>
                </summary>
                <div className="px-4 pb-4 text-gray-600 text-sm animate-fade-in">
                  {item.desc}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            {t("etrade.howToStartTitle")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {t("etrade.howToStartSteps", { returnObjects: true }).map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
                <div className="text-blue-600 text-2xl font-bold mb-2">{item.step}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{t("etrade.productsTitle")}</h2>
          <p className="text-gray-500 mt-2">{t("etrade.productsSubtitle")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {t("etrade.products", { returnObjects: true }).map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-blue-100 text-blue-800 text-3xl mb-4 transition-transform duration-300 hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-white md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("etrade.bottomTitle")}</h2>
            <p className="mb-4 text-gray-300">{t("etrade.bottomDesc")}</p>
            <ul className="space-y-2 text-gray-300">
              {t("etrade.bottomList", { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg md:w-1/2 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{t("etrade.bottomCardTitle")}</h3>
            <p className="text-gray-600 mb-6">{t("etrade.bottomCardDesc")}</p>
            <a href="/home#iletisim" className="inline-block bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition">
              {t("etrade.bottomCardButton")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ETrade;
