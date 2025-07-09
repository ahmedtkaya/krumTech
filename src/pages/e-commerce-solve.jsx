import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { useTranslation } from "react-i18next";

export function ECommerceSolve() {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(null);

  const packages = ["start", "mid", "pro"].map((key) => ({
    id: key,
    emoji: key === "start" ? "🎯" : key === "mid" ? "🚀" : "🏆",
    title: t(`ecommerceSolve.packages.${key}.title`),
    description: t(`ecommerceSolve.packages.${key}.description`),
    modalContent: (
      <>
        <h3 className="text-xl font-bold mb-2">
          {t(`ecommerceSolve.packages.${key}.modalTitle`)}
        </h3>
        <p className="mb-2">
          {t(`ecommerceSolve.packages.${key}.modalDesc`)}
        </p>
        <p className="font-semibold">
          {t(`ecommerceSolve.packages.${key}.featuresTitle`)}:
        </p>
        <ul className="list-disc list-inside mb-2">
          {t(`ecommerceSolve.packages.${key}.features`, { returnObjects: true }).map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
        <p className="font-semibold">
          {t(`ecommerceSolve.packages.${key}.advantagesTitle`)}:
        </p>
        <ul className="list-disc list-inside">
          {t(`ecommerceSolve.packages.${key}.advantages`, { returnObjects: true }).map((advantage, i) => (
            <li key={i}>{advantage}</li>
          ))}
        </ul>
      </>
    )
  }));

  const reasons = t("ecommerceSolve.whyReasons", { returnObjects: true });

  return (
    <>
      <div className="relative flex min-h-[90vh] items-center justify-center">
        <div className="absolute top-0 h-full w-full bg-[url('/img/3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60" />
        <div className="container relative mx-auto">
          <div className="text-center px-4 lg:w-8/12 mx-auto">
            <Typography variant="h1" color="white" className="mb-6 font-black">
              {t("ecommerceSolve.bannerTitle")}
            </Typography>
            <Typography variant="lead" color="white" className="opacity-80">
              {t("ecommerceSolve.bannerDescription")}
            </Typography>
          </div>
        </div>
      </div>

      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            {t("ecommerceSolve.sectionTitle")}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
            {t("ecommerceSolve.sectionSubtitle")}
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

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-black mb-12">
            {t("ecommerceSolve.whyTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-10 border-l-4 border-indigo-600 pl-6">
              {reasons.slice(0, 3).map(([title, desc], i) => (
                <div key={i} className="ml-4">
                  <h3 className="text-xl font-semibold text-black">{title}</h3>
                  <p className="text-black">{desc}</p>
                </div>
              ))}
            </div>
            <div className="space-y-10 border-r-4 border-indigo-600 pr-6">
              {reasons.slice(3).map(([title, desc], i) => (
                <div key={i} className="mr-4 text-right">
                  <h3 className="text-xl font-semibold text-black">{title}</h3>
                  <p className="text-black">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-10 text-center text-gray-700 text-lg max-w-2xl mx-auto">
            {t("ecommerceSolve.whyFinal")}
          </p>
        </div>
      </section>
    </>
  );
}

export default ECommerceSolve;
