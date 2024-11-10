import "../index.css";

function Header({ scrollToTop }) {
  return (
    <nav className="z-[100] fixed top-0 left-0 w-full shadow-lg bg-white px-2 py-2 sm:px-4 sm:py-4 flex sm:items-center sm:gap-8 border-b-2 sm:h-16 h-14 justify-start">
      <div className="flex flex-col sm:flex-row items-start mb-1">
        <a href="#" className="">
          <img
            className="h-10  min-w-[123px] min-h-[40px] "
            src="/pravi-logo.png"
          ></img>
        </a>
      </div>
      <select className="md:hidden block p-2  max-w-[20%] sm:max-w-[25%] sm:ml-4 ml-auto rounded">
        <option disabled selected></option>
        <option>Problem and solution</option>
        <option>Traction</option>
        <option>Market and projections</option>
        <option>Business model</option>
        <option>The ask</option>
      </select>
      <div className="flex-1 md:block hidden">
        <ul className="flex md:space-x-12 sm:space-x-4 space-x-2 flex-row md:text-base text-sm">
          <li>Problem and solution</li>
          <li>Traction</li>
          <li>Market and projections</li>
          <li>Business model</li>
          <li>The ask</li>
        </ul>
      </div>
      <div className="flex flex-row gap-4 sm:gap-10 ml-auto justify-center sm:justify-normal sm:mr-0  md:mr-20 h-auto">
        <div
          className="font-sans font-normal bg-white border-black border rounded text-black text-center leading-tight justify-center sm:px-3 py-1 sm:py-1.5 hover:text-white hover:bg-black transition-all duration-300 ease-in-out hover:cursor-pointer w-[60px] sm:min-w-[120px] text-xs sm:text-base"
          onClick={scrollToTop}
        >
          Watch demo
        </div>
        <div className="font-sans font-normal bg-custom-pink border-custom-pink-border border rounded text-white text-center leading-tight sm:px-3 py-1 sm:py-1.5 hover:bg-custom-pink-border transition-all duration-300 ease-in-out hover:cursor-pointer w-[70px] sm:min-w-[180px] text-xs sm:text-base">
          Download pitch deck
        </div>
      </div>
    </nav>
  );
}

export default Header;
