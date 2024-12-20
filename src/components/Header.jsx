import "../index.css";

function Header({ scrollToTop, scrollToSection }) {
  const handleSelectChange = (event) => {
    const sectionId = event.target.value;
    if (sectionId) {
      scrollToSection(sectionId);
    }
  };

  return (
    <nav className="z-[100] fixed top-0 left-0 w-full shadow-lg bg-white px-2 py-2 sm:px-4 sm:py-4 flex sm:items-center md:gap-8 gap-2 border-b-2 sm:h-16 h-14 justify-start">
      <div className="flex flex-col sm:flex-row items-start mb-1">
        <a href="/">
          <img
            className="min-w-[10px] max-w-[150px] h-auto"
            src="/pravi-logo.svg"
            alt="pravi company logo"
          ></img>
        </a>
      </div>
      <select
        onChange={handleSelectChange}
        className="below-1200:hidden block p-2  max-w-[20%] sm:max-w-[25%] sm:ml-4 ml-auto rounded border shadow-sm"
      >
        <option disabled selected value="">
          Section
        </option>
        <option value="problem">Problem and solution</option>
        <option value="traction">Traction</option>
        <option value="market">Market and projections</option>
        <option value="business">Business model</option>
        <option value="ask">The ask</option>
      </select>
      <div className="flex-1 below-1200:block hidden">
        <ul className="flex below-1200:space-x-12 sm:space-x-4 space-x-2 flex-row md:text-base text-sm">
          <button onClick={() => scrollToSection("problem")}>
            Problem and solution
          </button>
          <button onClick={() => scrollToSection("traction")}>Traction</button>
          <button onClick={() => scrollToSection("market")}>
            Market and projections
          </button>
          <button onClick={() => scrollToSection("business")}>
            Business model
          </button>
          <button onClick={() => scrollToSection("ask")}>The ask</button>
        </ul>
      </div>
      <div className="flex flex-row gap-2 md:gap-10 sm:ml-auto ml-4 justify-center sm:justify-normal mr-4  md:mr-8 h-auto">
        <div
          onClick={() => (window.location.href = "Pravi Pitch Deck.pdf")}
          className="font-sans font-normal bg-custom-pink border-custom-pink-border border rounded text-white text-center leading-tight sm:px-3 py-1 sm:py-1.5 hover:bg-custom-pink-border transition-all duration-300 ease-in-out hover:cursor-pointer w-[70px] sm:min-w-[180px] text-xs sm:text-base"
        >
          Download pitch deck
        </div>
      </div>
    </nav>
  );
}

export default Header;
