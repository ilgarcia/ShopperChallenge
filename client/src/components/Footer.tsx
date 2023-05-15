import { RiCopyrightLine } from "react-icons/ri";

function Footer() {
  return (
    <footer className="text-white">
      <section className="bg-theme-green">
        <div className="max-w-7xl w-full mx-auto py-4">Redes Sociais</div>
      </section>
      <section className=" bg-black">
        <div className="flex items-center max-w-7xl w-full mx-auto py-4 text-sm font-light">
          <RiCopyrightLine className="mr-1" /> 2023 Igor Lima Garcia
        </div>
      </section>
    </footer>
  );
}

export default Footer;
