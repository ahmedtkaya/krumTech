import React from "react";
import {
  Card,
  Typography,
} from "@material-tailwind/react";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard } from "@/widgets/cards";
import { featuresData, contactData } from "@/data";
import { useTranslation } from "react-i18next";

export function Profile() {
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
                {t("profile.bannerTitle")}
              </Typography>
              <Typography variant="h2" color="white" className="mb-6 font-black">
                {t("profile.bannerSubtitle")}
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                {t("profile.bannerDescription")}
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
                {t("profile.visionTitle")}
              </Typography>
              <Typography className="text-blue-gray-600 text-base">
                {t("profile.visionDescription1")}
              </Typography>
              <Typography className="text-blue-gray-600 text-base">
                {t("profile.visionDescription2")}
              </Typography>
              <Typography className="text-blue-gray-600 text-base">
                {t("profile.visionDescription3")}
              </Typography>
            </div>
            <div className="lg:w-1/2">
              <img src="/img/D.png" alt="E-Ticaret Teknoloji" className="h-[400px] w-full object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      
      <section className="bg-white py-24 px-4">
        <div className="container mx-auto flex flex-col gap-24">
          <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <Typography variant="h3" className="mb-4 font-bold text-blue-gray-800">
                {t("profile.missionTitle")}
              </Typography>
              <Typography className="text-blue-gray-600 text-base">
                {t("profile.missionDescription")}
              </Typography>
            </div>
            <div className="lg:w-1/2">
              <img src="/img/w.png" alt="E-İhracat" className="h-[400px] w-full object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Uzmanlık Alanları */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="container mx-auto text-center">
          <Typography variant="h2" className="mb-6 font-bold text-blue-gray-800">
            {t("profile.teamTitle")}
          </Typography>
          <Typography className="mb-12 max-w-3xl mx-auto text-blue-gray-600">
            {t("profile.teamDescription")}
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <i className="fas fa-code text-3xl text-blue-600" />
              </div>
              <Typography variant="h5" className="font-bold mb-2">
                {t("profile.expertise.techTitle")}
              </Typography>
              <Typography className="text-blue-gray-600 text-sm">
                {t("profile.expertise.techDesc")}
              </Typography>
            </Card>

            <Card className="p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <i className="fas fa-bullhorn text-3xl text-green-600" />
              </div>
              <Typography variant="h5" className="font-bold mb-2">
                {t("profile.expertise.marketingTitle")}
              </Typography>
              <Typography className="text-blue-gray-600 text-sm">
                {t("profile.expertise.marketingDesc")}
              </Typography>
            </Card>

            <Card className="p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <i className="fas fa-headset text-3xl text-purple-600" />
              </div>
              <Typography variant="h5" className="font-bold mb-2">
                {t("profile.expertise.supportTitle")}
              </Typography>
              <Typography className="text-blue-gray-600 text-sm">
                {t("profile.expertise.supportDesc")}
              </Typography>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
