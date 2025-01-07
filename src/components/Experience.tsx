export default function Experience() {
  return (
    <section
      id="experience-section"
      className="bg-BG1 bg-[url('/bg-works.svg')] bg-cover bg-no-repeat text-white"
    >
      {/* Mouse logo - hanya dekoratif */}
      <div
        className="hidden justify-center pb-[35px] pt-[60px] lg:flex"
        aria-hidden="true"
      >
        <img src="/mouse-logo.svg" alt="" />
      </div>

      {/* Header Section */}
      <div className="flex flex-col items-center p-10 text-center">
        <h2 className="text-[33px] text-Brand1">Experience</h2>
        {/* Garis dekoratif */}
        <img src="/line-22-logo.svg" alt="" aria-hidden="true" />
        <p className="mt-3 font-IBMPlexMono">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>

      {/* Experience Cards */}
      <div className="mx-[120px] grid grid-cols-1 gap-10 pb-20 pt-5 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="grid gap-10 rounded-xl bg-BG1 p-10 lg:grid-rows-[2fr_3fr]">
          <div aria-hidden="true">
            <img src="/mknows-logo.svg" alt="Mknows logo" />
          </div>
          <div className="flex flex-col justify-between gap-5">
            <div>
              <h3 className="mb-1 text-[20px] text-Brand1">iOS Developer</h3>
              <ul className="text-15 mt-2">
                <li>Developing KampusGratis App</li>
                <li>Creating various features</li>
                <li>Deployment to AppStore</li>
              </ul>
            </div>
            <span>Feb 2023 - Jul 2023</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="grid gap-10 rounded-xl bg-BG1 p-10 lg:grid-rows-[2fr_3fr]">
          <div aria-hidden="true">
            <img src="vision-logo.png" alt="Vision logo" />
          </div>
          <div className="flex flex-col justify-between gap-5">
            <div>
              <h3 className="mb-1 text-[20px] text-Brand1">
                Frontend Developer
              </h3>
              <ul className="text-15 mt-2">
                <li>Collaborated with UI/UX team to design responsive web</li>
                <li>Implemented components using React.js</li>
                <li>Optimized performance for faster load times</li>
              </ul>
            </div>
            <span>Jun 2022 - Aug 2022</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="grid gap-10 rounded-xl bg-BG1 p-10 lg:grid-rows-[2fr_3fr]">
          <div aria-hidden="true">
            <img src="/google-logo.svg" alt="Google logo" />
          </div>
          <div className="flex flex-col justify-between gap-5">
            <div>
              <h3 className="mb-1 text-[20px] text-Brand1">
                Full Stack Developer
              </h3>
              <ul className="text-15 mt-2">
                <li>Designed and built end-to-end web applications</li>
                <li>Managed cloud infrastructure on AWS</li>
                <li>Ensured application security through rigorous testing</li>
              </ul>
            </div>
            <span>Mar 2021 - May 2022</span>
          </div>
        </div>
      </div>
    </section>
  );
}
