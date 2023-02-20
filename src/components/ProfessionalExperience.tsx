import Accordion from "./Accordion";
import { FiExternalLink } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { profissionalExperiences } from "@/data";

const ProfessionalExperience = () => {
  return (
    <section className="mt-48" id="professionalExperience">
      <h1 className="section-title mb-10">Experiência Profissional</h1>
      {profissionalExperiences.map(
        ({
          Logo,
          description,
          location,
          technologies,
          webSiteUrl,
          title,
          period,
          webSiteDns,
          current,
        }) => (
          <Accordion
            current={current}
            label={title}
            period={period}
            key={title}
          >
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              <div className="flex flex-col space-y-6 max-w-xl">
                <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                  <div className="flex items-center gap-2">
                    <GoLocation className="text-2xl text-brand" />
                    <span className="text-sm font-semibold text-white">
                      {location}
                    </span>
                  </div>
                  <a
                    href={webSiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FiExternalLink className="text-2xl text-brand" />
                    <span className="text-sm font-semibold text-white">
                      {webSiteDns}
                    </span>
                  </a>
                </div>
                <p className="font-medium text-white text-sm">{description}</p>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tec) => (
                    <span
                      key={tec}
                      className="py-1 px-4 bg-brand text-brand-light rounded-xl text-sm font-semibold"
                    >
                      {tec}
                    </span>
                  ))}
                </div>
              </div>
              <Logo />
            </div>
          </Accordion>
        ),
      )}
    </section>
  );
};

export default ProfessionalExperience;
