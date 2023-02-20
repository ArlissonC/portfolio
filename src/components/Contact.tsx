import { contacts } from "@/data";
import { ImLinkedin } from "react-icons/im";

const Contact = () => {
  return (
    <section className="mt-36 mb-12 flex flex-col items-center">
      <h1 className="section-title mb-10">Contato</h1>
      <div className="flex gap-16">
        {contacts.map(({ Icon, dns, label, url }) => (
          <div key={label} className="flex flex-col items-center">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition ease-in-out delay-75 bg-brand-light w-20 h-20 rounded-full hover:-translate-y-2 hover:scale-110 duration-300 flex justify-center items-center"
            >
              <Icon className="text-3xl text-brand" />
            </a>
            <h6 className="text-white text-sm font-semibold mt-2">{label}</h6>
            <span className="text-xs text-brand font-semibold">{dns}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
