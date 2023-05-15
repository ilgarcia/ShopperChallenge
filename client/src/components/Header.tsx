import Image from "next/image";

function Header() {
  return (
    <header className="sticky top-0 w-full z-50">
      <nav className="border-t-4 border-solid border-theme-green shadow-lg bg-white">
        <div className="max-w-7xl mx-auto py-5">
          <Image src={"/logo.png"} alt={"logo"} width={150} height={55} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
