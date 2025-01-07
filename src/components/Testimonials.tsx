import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import testimonials from "../data/testimonials";

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section
      id="testimonial-section"
      className="bg-[url('/bg-works.svg')] bg-cover bg-no-repeat pb-10 text-white"
    >
      <div
        className="hidden justify-center pb-[10px] pt-[60px] lg:flex"
        aria-hidden="true"
      >
        <img src="/mouse-logo.svg" alt="" />
      </div>

      <div className="flex flex-col items-center pt-10">
        <h2 className="text-[25px] text-Brand1">Testimonials</h2>
        <img src="/line-22-logo.svg" alt="" aria-hidden="true" />
        <p className="mt-3 font-IBMPlexMono">
          Nice things people have said about me:
        </p>
      </div>

      <Slider {...settings} className="mx-auto w-[400px] p-3 lg:w-[500px]">
        {testimonials.map((el) => {
          return (
            <div
              className="mt-3 rounded-3xl bg-BG1 px-10 pb-6 pt-8"
              aria-hidden="false"
            >
              <div className="flex justify-center">
                <img
                  className="rounded-2xl"
                  src={el.image}
                  alt={`${el.name}'s portrait`}
                  aria-hidden="false"
                />
              </div>

              <p className="pt-5 text-[17px]">{el.description}</p>

              <div>
                <h3 className="mt-1 text-[20px] font-semibold text-Brand1">
                  {el.name}
                </h3>
                <p className="-mt-1 text-[15px] font-medium">{el.works}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}
