import "./App.css";
import LoomEmbed from "./components/LoomEmbed";

function App({ scrollToTop }) {
  return (
    <main className="flex flex-col min-h-[570px] sm:pt-16 pt-12 content-center justify-center sm:px-4">
      <div className="below-1000:p-16 pt-4 flex flex-row">
        <img
          alt="abstract background page decoration"
          src="topbg.png"
          className="-mx-4 w[110%] h-auto absolute -z-10 below-1000:-m-16 -m-2 min-h-[300px]"
        />
        <div className="flex flex-col sm:p-8 sm:pr-0 p-4  justify-center">
          <h1 className="font-medium font-sans sm:text-[48px] text-[32px] sm:pr-4 sm:text-left text-center leading-tight mb-2">
            Technology that helps nonprofits change the world
          </h1>
          <div className="flex flex-col">
            <div className="md:hidden flex justify-center mt-8 sm:mb-4 mb-10">
              <LoomEmbed />
            </div>
            <p className="sm:text-left text-center sm:text-lg text-base font-sans">
              65% of all donations go to the top 0.85% of nonprofits.
              <br />
              <span className="font-normal sm:text-left test-base text-center block font-sans">
                We’re here to help the other 99%.
              </span>
            </p>
            <div className="flex flex-row sm: gap-10 p-8 sm:justify-start px-0 pb-14 justify-center">
              <button
                onClick={() => (window.location.href = "Pravi Pitch Deck.pdf")}
                className="font-sans bg-custom-pink border-custom-pink-border border rounded text-white text-center leading-tight px-3 py-2.5 hover:bg-custom-pink-border transition-all duration-300 ease-in-out hover:cursor-pointer"
              >
                Download pitch deck
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex below-1200:w-[80%] w-full justify-center items-start md:mt-4 mt-4">
          <LoomEmbed />
        </div>
      </div>
      <div className="below-1200:mx-20">
        <div
          id="problem"
          className="flex flex-col w-full sm:px-8 px-6 md:px-20 md:pt-16 pt-8 gap-16 "
        >
          <div className="flex flex-row below-1200:w-[60%] sm:w-[80%] w-[100%] max-w-[800px] bg-gray-100 rounded-xl sm:pb-0 pb-8 ">
            <div className="relative flex-row h-full sm:-mt-8 sm:-ml-8 -ml-4 min-h-[150px] min-w-[100px] hidden below-1200:block">
              <div className="absolute z-[20]">
                <img
                  alt="abstract art in the shape of a question mark"
                  src="QMark.png"
                  className="sm:h-[270px] h-[180px] min-w-max below-1200:block hidden"
                />
              </div>
            </div>
            <div className="sm:p-4 flex flex-col below-1200:ml-48 sm:ml-4 ml-8 pt-4">
              <div className="flex flex-row">
                <img
                  alt="problem number one bullet point"
                  src="probcirc.svg"
                  className="self-start mt-auto mb-6 place-self-end justify-start justify-self-start mr-auto"
                />
                <img
                  src="QMark.png"
                  className="below-1200:hidden block max-w-[45vw] sm:max-h-[180px] ml-auto mr-2 -mt-20"
                />
              </div>
              <div className="-mt-2 sm:-mt-0 mb-2">
                <h2 className="font-bold font-sans text-lg">Problem</h2>
                <p className="pr-4 font-sans sm:mt-4 mt-2">
                  In the UK, 168,000 nonprofits are struggling to find donors to
                  give to their cause. <br />
                  They lack the resources, data, and expertise to fix this
                  problem on their own.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="ml-auto">
              <img
                alt="arrow connecting problem and solution boxes"
                src="arrow.svg"
                className="-mt-16 below-1000:block hidden below-2200:hidden"
              />
            </div>

            <div
              id="solution"
              className="flex flex-row-reverse h-auto below-1200:w-[50%] min-h-[250px] sm:w-[80%] w-[100%] max-w-[635px] bg-gray-100 rounded-xl pb-4 below-1200:mr-40"
            >
              <div className="relative flex-row sm:-mt-8 -mt-4 sm:-ml-8 -ml-4 min-h-[150px] min-w-[100px] hidden below-1200:block">
                <div className="absolute z-[20]">
                  <img
                    alt="rubiks cube to represent problem solving"
                    src="rubiks.png"
                    className="sm:h-[270px] h-[180px] min-w-max below-1200:block hidden"
                  />
                </div>
              </div>
              <div className="p-4 flex flex-col gap-4 below-1200:mr-12 mr-4">
                <div className="flex flex-row w-full">
                  <img
                    src="rubiks.png"
                    className="below-1200:hidden block max-w-[45vw] sm:max-h-[180px] mr-auto -mt-16"
                  />
                  <img
                    alt="problem number one bullet point"
                    src="probcirc2.svg"
                    className="self-start mt-auto mb-8 place-self-end justify-end justify-self-end ml-auto"
                  />
                </div>
                <div className="-mt-6">
                  <h2 className="font-bold font-sans text-lg text-right">
                    Solution
                  </h2>
                  <p className="text-right sm:pl-4 font-sans sm:mt-4 mt-2">
                    Pravi creates precise donor personas, builds conversion
                    funnels, and optimises fundraising campaigns.
                    <br />
                    Nonprofits boost their donor base, grow their income, and
                    maximise their impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="traction" className="relative">
        <h2 className="text-3xl text-center font-sans font-extrabold mb-8 mt-16">
          Traction
        </h2>
        <img
          src="shape.svg"
          alt="decoration Image"
          className="sm:w-[85px] sm:h-[85px] w-[42px] h-[42px] absolute top-0 right-0 mt-16 mr-8"
        />
      </div>
      <p className="place-self-center text-xl font-sans pb-4 sm:pb-12 sm:pt-2 text-center mx-4">
        Hundreds of nonprofits on our waitlist, achieved with £0 marketing spend
      </p>
      <div className="flex flex-wrap gap-4 justify-center mt-4 mb-10">
        <div className="max-w-[450px] max-h-[120px] flex items-center justify-center w-[70%] mx-12 sm:m-0 sm:w-1/3 md:w-1/4 p-4 rounded-[35px] border-2 shadow-md">
          <img
            alt="SANDS company logo"
            src="/logo1-SANDS.png"
            className="w-full"
          />
        </div>
        <div className="max-w-[450px] max-h-[120px] flex items-center justify-center w-[70%] mx-12 sm:m-0 sm:w-1/3 md:w-1/4 p-4 rounded-[35px] border-2 shadow-md">
          <img
            alt="R D H C company logo"
            src="/logo-3RDHC.webp"
            className="w-full"
          />
        </div>
        <div className="max-w-[450px] max-h-[120px] flex items-center justify-center w-[70%] mx-12 sm:m-0 sm:w-1/3 md:w-1/4 p-4 rounded-[35px] border-2 shadow-md">
          <img
            alt="rainforest foundation uk company logo"
            src="/logo2-Rainforest.png"
            className="w-full"
          />
        </div>
        <div className="max-w-[450px] max-h-[120px] flex items-center justify-center w-[70%] mx-12 sm:m-0 sm:w-1/3 md:w-1/4 p-4 rounded-[35px] border-2 shadow-md">
          <img
            alt="one25 company logo"
            src="/logo-4one25.png"
            className="w-full"
          />
        </div>
        <div className="max-w-[450px] max-h-[120px] flex items-center justify-center w-[70%] mx-12 overflow-hidden sm:m-0 sm:w-1/3 md:w-1/4 rounded-[35px] border-2 shadow-md">
          <img
            alt="infocus company logo"
            src="/logo-5infocus.jpg"
            className="w-full object-cover overflow-hidden"
          />
        </div>
      </div>
      {/* <div className="sm:px-20 sm:py-16 py-4 sm:pt-0 px-2 flex flex-row w-full justify-evenly flex-wrap">
        <div className="flex-1 min-w-[75px] flex flex-col items-center justify-start m-4 ml-0">
          <img
            alt="group of people icon"
            className="w-[50px] sm:w-[75px]"
            src="/group-icon.svg"
          />
          <div className="flex flex-row h-full">
            <img
              alt="check mark icon"
              src="check.svg"
              className="below-1000:block hidden self-center max-h-[24px] w-auto"
            />
            <p className="below-1000:pl-2 sm:text-2xl font-sans text-custom-grey text-center text-sm sm:font-bold font-normal self-center">
              300+ Waitlist
            </p>
          </div>
        </div>
        <div className="flex-1 min-w-[75px] flex flex-col items-center justify-start m-4 ml-0">
          <img
            alt="lightbulb icon"
            className="w-[50px] sm:w-[75px]"
            src="/bulb-icon.svg"
          />
          <div className="flex flex-row h-full">
            <img
              alt="checkmark icon"
              src="check.svg"
              className="below-1000:block hidden self-center max-h-[24px] w-auto"
            />
            <p className="below-1000:pl-2 sm:text-2xl font-sans text-custom-grey text-center text-sm sm:font-bold font-normal self-center">
              3 Early Adopters
            </p>
          </div>
        </div>
        <div className="flex-1 min-w-[75px] flex flex-col items-center justify-start m-4 ml-0">
          <img
            alt="shopping cart icon"
            className="w-[50px] sm:w-[75px]"
            src="/cart-icon.svg"
          />
          <div className="flex flex-row h-full">
            <img
              alt="checkmark icon"
              src="check.svg"
              className="below-1000:block hidden self-center max-h-[24px] w-auto"
            />
            <p className="below-1000:pl-2 sm:text-2xl font-sans text-custom-grey text-center text-sm sm:font-bold font-normal self-center">
              15 Pre-sales
            </p>
          </div>
        </div>
        <div className="flex-1 min-w-[75px] flex flex-col items-center justify-start m-4 ml-0">
          <img
            alt="checkmark icon"
            className="w-[50px] sm:w-[75px]"
            src="/check-icon.svg"
          />
          <div className="flex flex-row h-full">
            <img
              alt="checkmark icon"
              src="check.svg"
              className="below-1000:block hidden self-center max-h-[24px] w-auto"
            />
            <p className=" below-1000:pl-4 sm:text-2xl font-sans text-custom-grey below-1000:text-left text-center text-sm sm:font-bold font-normal self-center">
              Achieved with £0 marketing spend
            </p>
          </div>
        </div>
      </div> */}
      <div id="market" className="flex flex-col justify-center mb-4">
        <h2 className="text-3xl text-center font-sans font-extrabold mt-4 mb-6">
          Market and Projections
        </h2>
        <div className="flex flex-wrap  mt-4 below-1000:mx-32 mx-8 md:gap-0 gap-6 justify-center mb-8">
          <img
            alt="abstract page decoration shape"
            src="shape2.svg"
            className="self-end -mr-14 -mb-8 z-[50] md:block hidden"
          />
          <div className="flex-1 max-w-[70%] below-1200:max-w-[50%] min-w-[300px] flex flex-col items-center justify-start bg-[#fff2f9] p-8 rounded-xl md:mr-4">
            <img alt="globe icon" className="" src="/globe-icon.svg" />
            <p className="p-4 sm:text-lg text-center font-sans text-sm">
              <span className="font-bold">TAM:</span> 4.5m nonprofits across the
              developed world with a CAGR of 9.18%
              <br />
              <span className="font-bold">SAM:</span> 1.5m nonprofits with
              revenues between £100k-£3.5m
            </p>
          </div>
          {/* <div className="flex-1 max-w-[70%] min-w-[300px] flex flex-col items-center justify-start bg-[#fff2f9] p-8 rounded-xl md:ml-4">
            <img alt="line graph icon" className="" src="/graph-icon.svg" />
            <p className="p-4 sm:text-lg text-center text-sm font-sans">
              <span className="font-bold">12-Month Revenue Forecast:</span> £7.2
              million ARR
              <br />
              <span className="font-bold">Customer Target:</span> 10,000
              nonprofits within 12 months
              <br />
              <span className="font-bold">Revenue Growth:</span> £78.9 million
              by Year 5, with over 100,000 customers
            </p>
          </div> */}
        </div>
        <div className="flex flex-col justify-center items-center my-4">
          <button
            onClick={() => (window.location.href = "Pravi Pitch Deck.pdf")}
            className="inline-block font-sans bg-custom-pink border-custom-pink-border border rounded text-white text-center leading-tight px-3 py-1.5 hover:bg-custom-pink-border transition-all duration-300 ease-in-out hover:cursor-pointer"
          >
            Download pitch deck
          </button>
        </div>
      </div>
      <div
        id="business"
        className="below-1200:px-16 px-8 sm:py-4 py-4 flex sm:flex-row flex-col justify-center sm:mx-4 below-1200:mx-16 gap-10"
      >
        <div className="flex flex-col sm:w-[50%] w-[100%] ml-auto">
          <h2 className="text-3xl text-center font-sans font-extrabold my-0">
            Business model
          </h2>
          <div className="flex flex-row justify-center items-center sm:mt-4">
            <div className="flex flex-col w-[60%] items-center mb-8">
              <img
                alt="calendar icon"
                className="w-[75px] sm:w-[100px] py-6"
                src="/calendar-icon.svg"
              />
              <p className="p-4 pt-0 sm:text-xl text-center font-sans">
                B2B, SaaS, Big data.
              </p>
            </div>
            {/* <div className="flex flex-col w-[50%]">
              <img
                alt="checklist icon"
                className="w-[75px] sm:w-[100px] py-6"
                src="/checklist-icon.svg"
              />
              <p className="p-4 sm:text-lg font-sans text-left pl-0 pb-10 text-sm">
                £350,000 Innovate UK Smart Grant covers research and developmet
                costs.
              </p>
            </div> */}
          </div>
          <div className="flex flex-row gap-10 mt-auto justify-center items-center">
            <button
              onClick={scrollToTop}
              className="bg-white font-sans border-custom-pink-border border rounded hover:text-white text-center leading-tight px-3 py-1.5 hover:bg-black transition-all duration-300 ease-in-out hover:cursor-pointer"
            >
              Watch demo
            </button>
            <button
              onClick={() => (window.location.href = "Pravi Pitch Deck.pdf")}
              className="bg-custom-pink font-sans border-custom-pink-border border rounded text-white text-center leading-tight px-3 py-1.5 hover:bg-custom-pink-border transition-all duration-300 ease-in-out hover:cursor-pointer"
            >
              Download pitch deck
            </button>
          </div>
        </div>
        <div className="flex-col flex sm:w-[50%] w-[100%] items-center justify-center mr-4">
          <img
            alt="business cycle image"
            className="sm:w-[50vw] w-full max-w-[600px]"
            src="bmimg.png"
          />
        </div>
      </div>
      <div id="ask" className="flex flex-col justify-center items-center">
        <h2 className="text-3xl text-center font-sans font-extrabold mt-8 mb-4">
          The Ask
        </h2>
        <div className="w-full md:px-16 px-2 justify-center items-center flex flex-row flex-wrap">
          {/* <div className="below-1000:w-[35%] w-[58%]">
            <img
              alt="piechart showing how the ask will be distributed"
              src="piechart.svg"
              className="p-4"
            />
          </div>
          <div className="below-1000:w-[30%] w-[42%]">
            <img
              alt="information panel further detailing split of investment ask"
              src="info.svg"
              className="p-4"
            />
          </div> */}
          <div className="sm:mb-4 mb-10 h-[100%] bg-[#fff2f9] below-1200:w-[40%] w-[70%] place-self-center rounded-xl min-h-[200px] flex items-start flex-col sm:px-8 px-4 sm:py-8 py-3 gap-8 ">
            <div className="flex flex-row">
              <img
                alt="checkmark icon"
                src="check.svg"
                className="self-center max-h-[24px] w-auto"
              />
              <div className="flex flex-col ml-2">
                <h3 className="text-xl font-sans font-bold">£500,000</h3>
                <p className="mr-2 font-sans">
                  to scale marketing and sales operations.
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <img
                alt="checkmark icon"
                src="check.svg"
                className="self-center max-h-[24px] w-auto"
              />
              <div className="flex flex-col ml-2">
                <h3 className="text-xl font-sans font-bold">SEIS / EIS</h3>
                <p className="font-sans">
                  get in quickly to access our remaining SEIS / EIS allocation
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <img
                alt="checkmark icon"
                src="check.svg"
                className="self-center max-h-[24px] w-auto"
              />
              <div className="flex flex-col ml-2">
                <h3 className="text-xl font-sans font-bold">
                  Accelerate growth
                </h3>
                <p className="font-sans">
                  launch in the USA. Targeting £80 million ARR by year
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-10 justify-center sm:my-8 mb-4">
          <button
            onClick={scrollToTop}
            className="bg-white font-sans border-custom-pink-border border rounded hover:text-white text-center leading-tight px-3 py-1.5 hover:bg-black transition-all duration-300 ease-in-out hover:cursor-pointer"
          >
            Watch demo
          </button>
          <button
            onClick={() => (window.location.href = "Pravi Pitch Deck.pdf")}
            className="bg-custom-pink font-sans border-custom-pink-border border rounded text-white text-center leading-tight px-3 py-1.5 hover:bg-custom-pink-border transition-all duration-300 ease-in-out hover:cursor-pointer"
          >
            Download pitch deck
          </button>
        </div>
      </div>
      {/* <h2 className="text-3xl text-center font-sans font-extrabold sm:mt-10 mt-8 sm:mb-6 mb-4">
        In partnership with
      </h2> */}
      {/* <div className="flex flex-wrap gap-4 justify-center mt-6 mb-4">
        <div className="max-w-[450px] w-[70%] mx-12 sm:m-0 sm:w-1/3 md:w-1/4 p-4 rounded-[35px] border-2 shadow-md">
          <img
            alt="Orbital Global company logo"
            src="/orbital-global-logo.png"
            className="w-full"
          />
        </div>
        <div className="max-w-[450px] w-[70%] mx-12 sm:m-0 sm:w-1/3 md:w-1/4 p-4 rounded-[35px] border-2 shadow-md">
          <img
            alt="N K M T company logo"
            src="/nkmt-logo.png"
            className="w-full"
          />
        </div>
        <div className="max-w-[450px] w-[70%] mx-12 sm:m-0 sm:w-1/3 md:w-1/4 p-4 rounded-[35px] border-2 shadow-md">
          <img
            alt="rainforest foundation uk company logo"
            src="/rainforest-logo.png"
            className="w-full"
          />
        </div>
        <div className="max-w-[450px] w-[70%] mx-12 sm:m-0 sm:w-1/3 md:w-1/4 p-4 rounded-[35px] border-2 shadow-md">
          <img
            alt="innovate UK company logo"
            src="/innovateuk-logo.png"
            className="w-full"
          />
        </div>
      </div> */}
      <div className="flex flex-col items-center">
        <div className="max-w-[450px] w-[70%] mx-12 my-10 sm:w-1/3 md:w-1/4 p-4 rounded-[35px] border-2 shadow-md place-self-center">
          <img
            alt="innovate UK company logo"
            src="/innovateuk-logo.png"
            className="w-full"
          />
        </div>
        <p className="font-sans text-xl mb-8 text-center mx-5">
          £350,000 Innovate UK Smart Grant covers research and development
          costs.
        </p>
      </div>
      <div className="relative mt-6">
        <div className="absolute inset-0  below-1000:w-[60%] w-[80%] below-1000:h-[110%] sm:h-[80%] h-[90%]  bg-[#fff2f9] -z-10 left-1/2 transform -translate-x-1/2 rounded-xl"></div>
        <div className="relative z-10 overflow-hidden">
          <img
            alt="abstract background page decoration"
            src="team-bg.svg"
            className="-mx-4 w-screen min-h-full absolute -z-10"
          />
          <h2 className="text-3xl text-center font-sans font-extrabold mt-8">
            Meet the team
          </h2>
          <div className="flex flex-wrap md:gap-8 gap-4 justify-center mt-10">
            <div className="flex-grow-0 justify-items-center flex-shrink-0 bg-white w-[120px] sm:w-[250px] md:w-[250px] p-4 rounded-[25px] border-2 shadow-md">
              <img
                alt="Jeremy Healsmith profile picture"
                src="/jeremy-profile.jpg"
                className="p-2 w-full"
              />
              <h3 className="font-sans mb-2 font-bold text-[12px] mt-4 sm:text-lg text-center">
                Jeremy
                <br /> Healsmith
              </h3>
              <h4 className="font-sans text-[10px] mb-2 sm:text-lg text-center">
                Co-Founder
              </h4>
              <a
                href="https://www.linkedin.com/in/jeremy-healsmith/"
                target="_blank"
              >
                <img
                  alt="linkedin logo"
                  src="linkedin.svg"
                  className="max-w-[25px]"
                />
              </a>
            </div>
            <div className="flex-grow-0 justify-items-center flex-shrink-0 bg-white w-[120px] sm:w-[250px] md:w-[250px] p-4 rounded-[25px] border-2 shadow-md">
              <img
                src="/robyn-profile.jpg"
                alt="Robyn Greaves profile picture"
                className="p-2 w-full"
              />
              <h3 className="font-sans mb-2 font-bold text-[12px] mt-4 sm:text-lg text-center">
                Robyn
                <br /> Greaves
              </h3>
              <h4 className="font-sans text-[10px] mb-2 sm:text-lg text-center">
                Co-Founder
              </h4>
              <a
                href="https://www.linkedin.com/in/robyn-greaves/"
                target="_blank"
              >
                <img
                  alt="linkedin logo"
                  src="linkedin.svg"
                  className="max-w-[25px]"
                />
              </a>
            </div>
            <div className="flex-grow-0 flex-shrink-0 bg-white w-[120px] sm:w-[250px] md:w-[250px] p-4 rounded-[25px] border-2 shadow-md">
              <img
                src="antonio.png"
                alt="Antonio Redono Plata profile picture"
                className="p-2 w-full"
              />
              <h3 className="font-sans mb-2 font-bold text-[12px] mt-4 sm:text-lg text-center">
                Antonio
                <br /> Redono Plata
              </h3>
              <h4 className="font-sans text-[10px] mb-2 sm:text-lg text-center">
                Product Lead
              </h4>
            </div>
            <div className="flex-grow-0 flex-shrink-0 bg-white w-[120px] sm:w-[250px] md:w-[250px] p-4 rounded-[25px] border-2 shadow-md">
              <img
                src="sathish.png"
                alt="Sathish Sankarpandi profile picture"
                className="p-2 w-full"
              />
              <h3 className="font-sans mb-2 font-bold text-[12px] mt-4 sm:text-lg text-center">
                Sathish
                <br /> Sankarpandi, Ph.D
              </h3>
              <h4 className="font-sans text-[10px] mb-2 sm:text-lg text-center">
                Data Scientist
              </h4>
            </div>
          </div>
        </div>
      </div>

      <footer className="h-[144px] border-t bg-white w-full md:mt-32 mt-8 flex flex-col items-center">
        <div className="flex md:flex-row flex-col sm:gap-8 gap-4 sm:w-[75vw] w-[85vw] pt-4 justify-center">
          <div className=" sm:gap-8 gap-4 mx-2 flex flex-row text-sm justify-center">
            <img
              alt="pravi logo small"
              src="lilpravi.svg"
              className="md:mr-32 mr-2 hover:cursor-pointer"
              onClick={scrollToTop}
            />
            <button
              className="font-sans"
              onClick={() =>
                (window.location.href = "https://pravi.ai/privacy-policy")
              }
            >
              Privacy policy
            </button>
            <button
              className="font-sans"
              onClick={() =>
                (window.location.href = "https://pravi.ai/terms-of-service")
              }
            >
              Terms and conditions
            </button>
            <button
              className="font-sans"
              onClick={() => (window.location.href = "https://pravi.ai/faq")}
            >
              FAQ
            </button>
            <button
              className="font-sans"
              onClick={() =>
                (window.location.href = "https://pravi.ai/contact-us")
              }
            >
              Contact us
            </button>
          </div>
          <div className="flex flex-row gap-4 md:ml-32 ml-0 md:justify-normal items-center justify-center">
            <a href="https://wa.me/447475760534" target="_blank">
              <img
                alt="whatsapp logo"
                src="whatsapp.svg"
                className="max-w-[25px]"
              />
            </a>
            <a href="https://uk.linkedin.com/company/pravi-ai" target="_blank">
              <img
                alt="linkedin logo"
                src="linkedin.svg"
                className="max-w-[25px]"
              />
            </a>
            <a href="https://www.instagram.com/pravi.ai/" target="_blank">
              <img
                alt="instagram logo"
                src="instagram.svg"
                className="max-w-[25px]"
              />
            </a>
          </div>
        </div>
        <h4 className="h-[50%] font-sans text-black text-left sm:text-base text-xs sm:ml-8 ml-2 pt-6 pb-2 ">
          Pravi @ 2024. All rights reserved.
        </h4>
      </footer>
    </main>
  );
}

export default App;
