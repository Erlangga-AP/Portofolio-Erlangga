export default function Home() {
  return (
    <section id="hero-section" className="bg-BG1 pb-[115px] pt-[110px]">
      <hr />
      <h1 className="flex justify-center font-Ubuntu text-[80px] text-Brand2">
        Developer
      </h1>
      <div className="flex flex-col items-center justify-between gap-12 px-[150px] pt-4 lg:flex-row">
        <div className="w-fit rounded-br-[150px] rounded-tl-[150px] border border-white p-8 text-sm font-medium text-white shadow-[-5px_-5px_3px_#12F7D6]">
          <div className="mb-[32px] flex flex-col items-center">
            <div className="h-20 w-20 overflow-hidden rounded-full border-[4px] border-Brand1">
              <img src="/image-angga.jpg" alt="" />
            </div>
            <div className="flex flex-col items-center gap-5">
              <h2 className="mt-4 text-[28px]">Erlangga</h2>
              <h3 className="font-IBMPlexMono">Full-Stack Developer</h3>
            </div>
          </div>

          <div className="grid gap-3 font-IBMPlexMono">
            <div className="flex items-baseline gap-4 text-center">
              <img
                className="h-[14px] w-[14px]"
                src="/contact-color-logo.svg"
                alt=""
              />
              <span>erlanggaadiprasatya@gmail.com</span>
            </div>
            <div className="flex gap-4 text-center">
              <img src="/location-color-logo.svg" alt="" />
              <span>Jakarta</span>
            </div>
            <div className="flex gap-4 text-center">
              <img src="/briefcase-color-logo.svg" alt="" />
              <span>Full-time / Freelance</span>
            </div>
            <div className="flex gap-4 text-center">
              <img src="/linked-color-logo.svg" alt="" />
              <span>www.erlangga.com</span>
            </div>
          </div>
          <div className="mb-[32px] mt-4 flex gap-2">
            <span className="rounded-xl border-white bg-Brand2 px-2 text-BG1">
              HTML
            </span>
            <span className="rounded-xl border-white bg-Brand2 px-2 text-BG1">
              CSS
            </span>
            <span className="rounded-xl border-white bg-Brand2 px-2 text-BG1">
              JS
            </span>
            <span className="rounded-xl border-white bg-Brand2 px-2 text-BG1">
              REACT
            </span>
          </div>
          <button className="flex gap-4 rounded-full bg-white px-[32px] py-[16px] text-BG2">
            Download CV <img src="/download-logo.svg" alt="" />
          </button>
        </div>

        <div className="text-[45px] text-white">
          <h1 className="relative font-Ubuntu">
            <img src="/h1-color-logo.svg" alt="" className="absolute" />
            <span>Hey</span>
            <div className="-mt-1 text-[40px]">
              <span>I'm </span>
              <span className="text-Brand1">Erlangga</span>
              <span>,</span>
            </div>
            <div className="flex gap-4 lg:items-baseline">
              <span className="text-[40px]">Full-Stack Developer</span>
              <img className="mt-20" src="/h1-close-color-logo.svg" alt="" />
            </div>
          </h1>
          <div className="mx-auto mt-6 max-w-2xl">
            <h2>
              <img src="/p-color-logo.svg" alt="" />
              <p className="mx-auto mb-2 mt-2 max-w-2xl font-IBMPlexMono text-[15px] text-base">
                I help business grow by crafting amazing web experiences. If
                you're looking for a developer that likes to get stuff done,
              </p>
              <img src="/p-closed-color-logo.svg" alt="" />
            </h2>
          </div>
          <div className="mt-4 flex items-center gap-4 text-[32px] text-Brand1">
            <span>Let's Talk</span>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-Grey">
              <img className="h-6 w-6" src="/contact-color-logo.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="flex h-fit max-w-[210px] flex-col gap-[48px] rounded-[70px] bg-BG2 p-7 font-IBMPlexMono text-white">
          <h2 className="flex items-center space-x-3">
            <span className="text-[48px] text-Brand1">2</span>
            <span>Programming Language</span>
          </h2>
          <h2 className="flex items-center space-x-3">
            <span className="text-[48px] text-Brand1">4</span>
            <span>Development Tools</span>
          </h2>
          <h2 className="flex items-center space-x-3">
            <span className="text-[48px] text-Brand1">1</span>
            <span>Years of Experience</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
