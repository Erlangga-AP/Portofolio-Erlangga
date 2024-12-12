export default function Skill() {
  return (
    <section
      id="skill-section"
      className="content- bg-BG2 bg-[url('/bg-skill.svg')] bg-cover bg-no-repeat text-white"
    >
      <div className="hidden justify-center pb-[35px] pt-[60px] lg:flex">
        <img src="/mouse-logo.svg" alt="" />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-[55px] text-Brand1">Skills</h2>
        <img src="/line-22-logo.svg" alt="" />
        <p className="mt-3 font-IBMPlexMono">
          I am striving to never stop learning and improving
        </p>
      </div>

      <div className="mt-12 flex flex-col items-center justify-center gap-14 lg:flex-row">
        <div className="flex flex-col items-center rounded-lg border-l-[10px] border-[#0C73B8] bg-Brand2 p-8 text-center">
          <img src="/monitor-logo.svg" alt="" />

          <div className="flex gap-3">
            <h2 className="text-[24px] text-BG1">Web </h2>
            <h2 className="text-[24px] text-BG1">Development </h2>
          </div>

          <ul className="flex gap-2 text-center text-[16px] text-Grey">
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>REACT</li>
          </ul>
        </div>

        <div className="flex flex-col items-center rounded-lg border-l-[10px] border-[#0C73B8] bg-Brand2 p-8">
          <img src="smartphone-logo.svg" alt="" />

          <div className="flex gap-3">
            <h2 className="text-[24px] text-BG1">App </h2>
            <h2 className="text-[24px] text-BG1">Development </h2>
          </div>

          <ul className="flex gap-3 text-[16px] text-Grey">
            <li>iOS</li>
            <li>Android</li>
          </ul>
        </div>
      </div>

      <div className="mt-[50px] grid grid-cols-2 items-center justify-center gap-10 pb-[50px] lg:flex lg:gap-20">
        <div className="flex flex-col items-center gap-5">
          <img src="/html-orange-logo.svg" className="h-[120px]" alt="" />
          <p className="text-[#E54F26]">HTML</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <img src="/css-blue-logo.svg" className="h-[120px]" alt="" />
          <p className="text-[#0C73B8]">CSS</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <img src="/js-yellow-logo.svg" className="h-[120px]" alt="" />
          <p className="text-[#E7A020]">JS</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <img src="/react-blue-logo.svg" className="h-[120px]" alt="" />
          <p className="text-[#28A9E0]">REACT</p>
        </div>
      </div>
    </section>
  );
}
