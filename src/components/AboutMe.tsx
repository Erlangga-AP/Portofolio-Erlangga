export default function AboutMe() {
  return (
    <section
      id="about-me-section"
      className="min-h-[100vh] bg-BG2 bg-[url('/about-me.png')] bg-cover bg-no-repeat px-10 font-Ubuntu text-white"
    >
      <div
        className="hidden justify-center pb-[50px] pt-[60px] lg:flex"
        aria-hidden="true"
      >
        <img src="/mouse-logo.svg" alt="" />
      </div>

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 justify-center justify-items-center gap-16 pb-9 align-middle lg:grid-cols-[2fr_1fr] lg:items-end">
        <div className="flex flex-col items-center gap-16 pt-16">
          <h1 className="w-fit rounded-br-[55px] rounded-tl-[55px] border-8 border-Brand1 bg-BG1 px-10 py-3 text-[20px] font-normal text-white lg:text-[50px]">
            About Me
          </h1>
          <div className="rounded-2xl bg-BG1 p-10">
            <img src="/p-color-logo.svg" alt="" aria-hidden="true" />
            <h2 className="mt-4 text-[35px] text-Brand1">Hello!</h2>
            <p className="color-text">
              My name is Sinan and I specialize in web development that utilizes{" "}
              <span>HTML</span>, <span>CSS</span>, <span>JS</span>, and{" "}
              <span>REACT</span> etc. I am a highly motivated individual and
              eternal optimist dedicated to writing clear, concise, robust code
              that works. Striving to never stop learning and improving. When
              I'm not coding, I am <span>writing blogs</span>, reading, or
              picking up some new hands-on art project like
              <span>photography</span>. I like to have my perspective and belief
              systems challenged so that I see the world through new eyes.
            </p>
            <img
              className="mt-4"
              src="/p-closed-color-logo.svg"
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>

        <div>
          <img
            className="w-99"
            src="/Image-laptop.svg"
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
