import "../index.css";

function Header({ scrollToTop }) {
  return (
    <nav className="fixed top-0 left-0 w-full shadow-lg max-w-screen-2xl bg-white px-4 py-2 sm:px-8 sm:py-4 flex sm:items-center sm:gap-16 border-b-2 sm:h-16 h-14">
      <div className="flex flex-col sm:flex-row items-start mb-1 w-full sm:w-auto">
        <a href="#" className="">
          <img
            className="h-10  min-w-[123px] min-h-[40px] justify-start "
            src="/pravi-logo.png"
          ></img>
        </a>
      </div>

      <div className="flex-1"></div>
      <div className="flex flex-row gap-4 sm:gap-10 justify-center sm:justify-normal sm:mr-0  md:mr-20 h-auto">
        <div
          className="bg-white border-black border rounded text-black text-center leading-tight justify-center sm:px-3 py-1 sm:py-1.5 hover:text-white hover:bg-black transition-all duration-300 ease-in-out hover:cursor-pointer w-[60px] sm:min-w-[120px] text-xs sm:text-base"
          onClick={scrollToTop}
        >
          Watch demo
        </div>
        <div className="bg-custom-pink border-custom-pink-border border rounded text-white text-center leading-tight sm:px-3 py-1 sm:py-1.5 hover:bg-custom-pink-border transition-all duration-300 ease-in-out hover:cursor-pointer w-[70px] sm:min-w-[180px] text-xs sm:text-base">
          Download pitch deck
        </div>
      </div>
    </nav>
  );
}

export default Header;
