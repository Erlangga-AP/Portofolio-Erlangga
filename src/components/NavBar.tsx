export default function NavBar() {
  return (
    <header className="absolute w-full bg-BG1 p-[40px] text-white">
      <nav className="flex justify-between">
        <h1 className="flex items-center gap-2 text-[15px] lg:text-[20px]">
          <img className="h-4 lg:h-6" src="/close-logo.svg" alt="" />
          <span>ErlanggaAdiPrasetya</span>
        </h1>

        <div className="flex gap-[30px] lg:gap-[64px]">
          <ul className="flex gap-[10px] lg:gap-[32px]">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Blogs</a>
            </li>
          </ul>

          <img
            className="block lg:hidden"
            src="/search-white-logo.svg"
            alt=""
          />

          <div className="relative hidden lg:block">
            <input id="search" className="rounded-full" type="text" />
            <label htmlFor="search">
              <img
                className="absolute right-[10px] top-[2px]"
                src="/search-logo.svg"
                alt=""
              />
            </label>
          </div>

          <ul className="flex gap-5">
            <li className="hidden lg:block">
              <a
                className="flex items-center gap-2"
                href="https://www.instagram.com/"
                target="_blank"
              >
                <img
                  className="h-[20px] w-[20px]"
                  src="/instagram-logo.svg"
                  alt=""
                />
                <span>Instagram</span>
              </a>
            </li>
            <li className="hidden lg:block">
              <a
                className="flex items-center gap-2"
                href="https://discord.com/"
                target="_blank"
              >
                <img
                  className="h-[20px] w-[20px]"
                  src="/discord-logo.svg"
                  alt=""
                />
                <span>Discord</span>
              </a>
            </li>
            <li className="hidden lg:block">
              <a
                className="flex items-center gap-2"
                href="https://github.com/"
                target="_blank"
              >
                <img
                  className="h-[20px] w-[20px]"
                  src="/github-logo.svg"
                  alt=""
                />
                <span>Github</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
