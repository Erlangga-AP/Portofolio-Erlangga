export default function ContactMe() {
  return (
    <section id="contact-section" className="bg-BG1 text-white">
      {/* Mouse logo - hanya dekoratif */}
      <div
        className="hidden justify-center pb-[35px] pt-[60px] lg:flex"
        aria-hidden="true"
      >
        <img src="/mouse-logo.svg" alt="" />
      </div>

      {/* Bagian utama */}
      <div className="flex flex-col items-center pt-10">
        <h2 className="text-[35px] text-Brand1">Contact</h2>
        {/* Garis dekoratif */}
        <img src="/line-22-logo.svg" alt="" aria-hidden="true" />
        <p className="mt-3 font-IBMPlexMono">
          I'm currently available for freelance work:
        </p>
      </div>

      {/* Konten kontak */}
      <div className="flex flex-col items-center p-4 lg:p-10">
        <span className="text-center text-[16px] lg:text-[18px]">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </span>

        {/* Informasi kontak */}
        <div className="flex w-full flex-col items-center justify-center gap-5 pb-6 pt-10 lg:pb-10 lg:pt-14">
          <div className="flex gap-3 text-center text-[18px] font-bold lg:text-[30px]">
            <img
              className="w-5 lg:w-9"
              src="/email.logo.svg"
              alt="Email icon"
            />
            <span>erlanggaadiprasatya2005@gmail.com</span>
          </div>
          <div className="flex gap-3 text-[18px] font-bold lg:text-[30px]">
            <img className="w-5 lg:w-9" src="/call-logo.svg" alt="Phone icon" />
            <span>+62 85692777342</span>
          </div>
        </div>

        {/* Platform tambahan */}
        <div>
          <span>You may also find me on these platforms!</span>
        </div>
        <div className="flex gap-5 pt-8 lg:gap-7 lg:pt-10">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/githubb-logo.svg" alt="GitHub" />
          </a>
          <a
            href="https://id.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin-logo.svg" alt="LinkedIn" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/x-logo.svg" alt="Twitter" />
          </a>
        </div>
      </div>
    </section>
  );
}
