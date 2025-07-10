import React, { useEffect, useRef } from "react";
import {
  Card,
  Typography,
  Button,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { PageTitle } from "@/widgets/layout";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import contactDataEn from "../locales/en/translation.json";
import contactDataTr from "../locales/tr/translation.json";
import i18n from "i18next";

// İkonlar
import {
  BriefcaseIcon,
  ChartBarIcon,
  PlayIcon,
  ComputerDesktopIcon,
  RocketLaunchIcon,
  PhoneIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/solid";


const iconMap = {
  BriefcaseIcon,
  ChartBarIcon,
  PlayIcon,
  ComputerDesktopIcon,
  RocketLaunchIcon,
  PhoneIcon,
  ChatBubbleBottomCenterTextIcon,
};

export function Home() {
  const form = useRef();
  const { t } = useTranslation();

  const featuresCards = t("home.features_cards", { returnObjects: true });

  const contactData =
    i18n.language === "tr"
      ? contactDataTr.home.contact_cards
      : contactDataEn.home.contact_cards;

  const features =
    i18n.language === "tr"
      ? contactDataTr.home.features
      : contactDataEn.home.features;

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#iletisim") {
      const section = document.getElementById("iletisim");
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yabazpr",
        "template_v4s9mst",
        form.current,
        "GL_yKndO8Bm1CiAOu"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(t("home.message_success"));
        },
        (error) => {
          console.log(error.text);
          alert(t("home.message_error"));
        }
      );
  };

  return (
    <>
     
     {/* HERO SECTION */}
<div className="relative h-[90vh] flex items-center justify-center">
  <div className="absolute inset-0 bg-[url('/img/3.png')] bg-cover bg-center" />
  <div className="absolute inset-0 bg-black/60" />
  <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
      {t("home.hero_title")}
    </h1>
    <p className="text-lg text-white opacity-90">
      {t("home.hero_description")}
    </p>
  </div>
</div>

{/* ÖNE ÇIKAN KARTLAR */}
<section className="relative z-20 -mt-20 px-6 pb-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {[0, 1, 2, 3].map((index) => {
      const { title, description, icon } = features[index];
      const IconComponent = iconMap[icon];
      return (
        <div
          key={index}
          className="rounded-lg shadow-xl bg-white p-6 text-center flex flex-col items-center"
        >
          {IconComponent && (
            <IconComponent className="w-10 h-10 text-black mb-4" />
          )}
          <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      );
    })}
  </div>
</section>


<div className="w-full bg-gray-100 py-12">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 place-items-center">
      {featuresCards.map((card, index) => (
        <div key={index} className="w-full max-w-[500px] rounded-lg shadow-lg overflow-hidden bg-white">
          <img src={card.image} alt={card.title} className="h-60 w-full object-cover" />
          <div className="p-6">
            <Typography variant="h5" className="mb-2 font-bold text-blue-gray-800">
              {card.title}
            </Typography>
            <Typography className="text-blue-gray-600 text-base">
              {card.desc}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


      
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section={t("home.section_title")} sectionClass="text-black">
            {t("home.section_desc")}
          </PageTitle>

          <div className="mx-auto mt-8 mb-20 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <Card
                  key={index}
                  color="transparent"
                  shadow={false}
                  className="text-center text-blue-gray-900"
                >
                  <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                    {IconComponent && (
                      <IconComponent className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {item.title}
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    {item.description}
                  </Typography>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

    
      <section id="iletisim" className="relative bg-gray-100 py-24 px-4">
  <div className="container mx-auto">
    <PageTitle
      section={t("home.contact_title")}
      heading={
        <Typography variant="h2" className="text-black">
          {t("home.contact_sub")}
        </Typography>
      }
    >
      {t("home.contact_desc")}
    </PageTitle>

    <form
      ref={form}
      onSubmit={sendEmail}
      className="mx-auto w-full mt-12 lg:w-5/12"
    >
      <div className="mb-8 flex flex-col gap-6 md:flex-row">
        <Input
          name="name"
          variant="outlined"
          size="lg"
          label={t("home.form_name")}
          required
        />
        <Input
          name="email"
          type="email"
          variant="outlined"
          size="lg"
          label={t("home.form_email")}
          required
        />
      </div>
      <Input
        name="title"
        variant="outlined"
        size="lg"
        label={t("home.form_subject")}
        className="mb-6"
        required
      />
      <Textarea
        name="message"
        variant="outlined"
        size="lg"
        label={t("home.form_message")}
        rows={8}
        required
      />
      <Checkbox
        required
        
        label={
          <Typography
            variant="small"
            color="gray"
            className="flex items-center font-normal"
            
          >
            {t("home.form_terms")} &nbsp;
            <a
              href="#"
              className="font-medium transition-colors hover:text-gray-900"
            >
              Terms and Conditions
            </a>
          </Typography>
          
        }
        containerProps={{ className: "-ml-2.5" }}
      />
      <Button
        type="submit"
        variant="gradient"
        size="lg"
        className="mt-8"
        fullWidth
      >
        {t("home.form_button")}
      </Button>
    </form>
  </div>
</section>

    </>
  );
}

export default Home;
