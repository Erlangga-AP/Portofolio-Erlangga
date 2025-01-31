import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import project from "../data/project";

export default function Project() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="project-section" className="bg-BG1 pt-[50px] text-white">
      <div className="flex flex-col items-center">
        <img
          className="hidden lg:flex"
          src="/line-22-logo.svg"
          alt=""
          aria-hidden="true"
        />
        <h2 className="text-[40px] text-Brand1">Project</h2>
        <img src="/line-22-logo.svg" alt="" aria-hidden="true" />
        <p className="font-IBMPlexMono">
          Some of the noteworthy projects I have built:
        </p>
      </div>

      <Slider {...settings} className="mx-auto w-[400px] pb-10 lg:w-[1000px]">
        {project.map((el, index) => {
          return (
            <div
              key={index}
              className="mt-3 flex rounded-xl bg-BG2 p-10"
              aria-hidden="false"
            >
              <div
                className="flex justify-center overflow-hidden rounded-xl"
                aria-hidden="true"
              >
                <img
                  className="w-[400px] rounded-2xl lg:w-[500px]"
                  src={el.image}
                  alt=""
                  aria-hidden="true"
                />
              </div>
              <div className="px-8">
                <h3 className="pb-4 pt-8 text-[24px] text-Brand1">{el.name}</h3>
                <p>{el.description}</p>
                <div className="mt-3 flex gap-3">
                  {el.stack.map((stackItem, stackIndex) => {
                    return (
                      <span
                        key={stackIndex}
                        className="rounded-2xl bg-Grey px-2 py-1"
                      >
                        {stackItem}
                      </span>
                    );
                  })}
                </div>
                <a href={el.name}>
                  <img
                    className="mt-5"
                    src="/share-logo.svg"
                    alt="Share project"
                  />
                </a>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}
