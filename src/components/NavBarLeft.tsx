export default function NavBarLeft() {
  return (
    <nav className="fixed bottom-0 left-9 top-0 z-50 my-auto hidden h-fit w-[50px] flex-col items-center gap-[32px] rounded-full border border-white bg-BG2 px-2 py-5 lg:flex">
      <a aria-label="link for hero" href="#hero-section">
        <img src="/home-white-logo.svg" alt="" className="h-[24px] w-[24px]" />
      </a>

      <a aria-label="link for aboutme" href="#about-me-section">
        <img src="/about-me-logo.svg" alt="" className="h-[24px] w-[24px]" />
      </a>

      <a aria-label="link for skill" href="#skill-section">
        <img src="/skill-logo.svg" alt="" className="h-[24px] w-[24px]" />
      </a>

      <a aria-label="link for experience" href="#experience-section">
        <img src="/work-logo.svg" alt="" className="h-[24px] w-[24px]" />
      </a>

      <a aria-label="link for project" href="#project-section">
        <img src="/blogs-logo.svg" alt="" className="h-[24px] w-[24px]" />
      </a>

      <a aria-label="link for testimonial" href="#testimonial-section">
        <img
          src="/testimoni-logo.svg"
          alt=""
          className="h-[24px] w-[24px] stroke-white"
        />
      </a>

      <a aria-label="link for contact" href="#contact-section">
        <img src="/contact-logo.svg" alt="" className="h-[24px] w-[24px]" />
      </a>
    </nav>
  );
}
