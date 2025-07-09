import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

export function Digital() {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(null);

  return (
    <>
      
      <div className="relative flex min-h-[90vh] items-center justify-center">
        <div className="absolute top-0 h-full w-full bg-[url('/img/3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography variant="h1" color="white" className="mb-6 font-black">
                {t("digital.bannerTitle")}
              </Typography>
              <Typography variant="h2" color="white" className="mb-6 font-black">
                {t("digital.bannerSubtitle")}
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                {t("digital.bannerDescription")}
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
                {t("digital.powerTitle")}
              </Typography>
              {["powerDesc1", "powerDesc2", "powerDesc3"].map((key, idx) => (
                <Typography key={idx} className="text-blue-gray-600 text-base">
                  {t(`digital.${key}`)}
                </Typography>
              ))}
            </div>
            <div className="lg:w-1/2">
              <img src="/img/dm.png" alt="Digital Marketing" className="h-[400px] w-full object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">{t("digital.servicesTitle")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            {t("digital.services", { returnObjects: true }).map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
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
              {t("digital.audience_title")}
            </Typography>
            <Typography className="text-blue-gray-600 text-base whitespace-pre-line">
              {t("digital.audience_content")}
            </Typography>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/img/hk.png"
              alt="Audience"
              className="h-[400px] w-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>


      

      
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            {t("digital.whyTitle")}
          </h2>
          <div className="relative border-l-4 border-gradient-to-b from-blue-600 to-purple-500 pl-8 space-y-10">
            {t("digital.whyReasons", { returnObjects: true }).map((reason, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-4 top-1 w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-500 rounded-full" />
                <h3 className="text-xl font-semibold text-gray-800">{reason.title}</h3>
                <p className="text-gray-600 mt-1">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

   
     
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            {t("digital.processTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t("digital.processSteps", { returnObjects: true }).map((step, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-left">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.step}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="bg-[url('/img/b5.jpg')] bg-cover bg-center py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">{t("digital.featuresTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {t("digital.features", { returnObjects: true }).map((item, idx) => (
              <div key={idx} className="group [perspective:1000px] w-full h-64">
                <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                 
                  <div className="absolute inset-0 bg-black text-white rounded-xl shadow-xl flex items-center justify-center px-6 py-4 text-center">
                    <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
                  </div>
                  
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
