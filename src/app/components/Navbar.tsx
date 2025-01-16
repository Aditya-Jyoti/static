export default function Navbar() {
  return (
    <nav className="fixed md:flex hidden items-center justify-between top-0 left-0 w-full py-2 px-4 backdrop-blur-md shadow-lg z-40">
      <img src="/vnest-logo.svg" alt="VNest Logo" className="w-20" />

      <div className="uppercase flex items-center justify-center gap-8 font-bold text-white">
        <a
          href="#home"
          className="w-36 text-center py-2 hover:bg-foreground hover:text-background rounded-xl transition-colors duration-300"
        >
          Home
        </a>
        <a
          href="#about"
          className="w-36 text-center py-2 hover:bg-foreground hover:text-background rounded-xl transition-colors duration-300"
        >
          About Us
        </a>
        <a
          href="#gallery"
          className="w-36 text-center py-2 hover:bg-foreground hover:text-background rounded-xl transition-colors duration-300"
        >
          Gallery
        </a>
        <a
          href="#initiatives"
          className="w-36 text-center py-2 hover:bg-foreground hover:text-background rounded-xl transition-colors duration-300"
        >
          Our Startups
        </a>
        <a
          href="#contact"
          className="w-36 text-center py-2 hover:bg-foreground hover:text-background rounded-xl transition-colors duration-300"
        >
          Contact
        </a>
      </div>

      <img src="/vit-logo.png" alt="VIT Logo" className="w-28" />
    </nav>
  );
}
