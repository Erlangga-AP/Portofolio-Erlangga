export default function ContactMe() {
  return (
    <section id="contact-section" className="bg-BG1 text-white">
      <div className="hidden justify-center pb-[35px] pt-[60px] lg:flex">
        <img src="/mouse-logo.svg" alt="" />
      </div>
      <div className="flex flex-col items-center pt-10">
        <h2 className="text-[35px] text-Brand1">Contact</h2>
        <img src="/line-22-logo.svg" alt="" />
        <p className="mt-3 font-IBMPlexMono">
          I'm currently available for freelance work:
        </p>
      </div>
      <div className="flex flex-col items-center p-10">
        <span className="text-center text-[18px]">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </span>

        <div className="flex w-full flex-col items-center justify-center gap-5 pb-10 pt-14">
          <div className="flex gap-3 text-center text-[20px] font-bold lg:text-[30px]">
            <img className="w-6 lg:w-9" src="/email.logo.svg" alt="" />
            <span>erlanggaadiprasatya2005@gmail.com</span>
          </div>
          <div className="flex gap-3 text-[20px] font-bold lg:text-[30px]">
            <img className="w-6 lg:w-9" src="/call-logo.svg" alt="" />
            <span>+62 85692777342</span>
          </div>
        </div>
        <div>
          <span>You may also find me on these platforms!</span>
        </div>
        <div className="flex gap-7 pt-10">
          <a href="https://github.com" target="blank">
            <img src="/githubb-logo.svg" alt="" />
          </a>
          <a href="https://id.linkedin.com" target="blank">
            <img src="linkedin-logo.svg" alt="" />
          </a>
          <a href="https://twitter.com" target="blank">
            <img src="/x-logo.svg" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}
