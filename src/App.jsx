import "./App.css";
import LoomEmbed from "./components/LoomEmbed";

function App({ scrollToTop }) {
  return (
    <main className="flex flex-col min-h-[570px] sm:pt-16 pt-14 content-center justify-center sm:px-4">
      <div className="bg-home-banner sm:bg-cover sm:bg-center bg-no-repeat bg-top below-1000:p-16 pt-4 flex flex-row">
        <div className="flex flex-col sm:p-8 sm:pr-0 sm:py-0 py-0 p-4  justify-center">
          <h1 className="font-medium font-sans sm:text-[48px] text-[36px] sm:pr-4 sm:text-left text-center leading-tight mb-4">
            Technology that helps nonprofits change the world
          </h1>
          <div className="flex flex-col">
            <div className="md:hidden flex justify-center mt-8 mb-6">
              <LoomEmbed />
            </div>
            <p className="sm:text-left text-center sm:text-lg text-base font-sans">
              65% of all donations go to the top 0.85% of nonprofits.
              <br />
              <span className="font-normal sm:text-left test-base text-center block font-sans">
                We’re here to help the other 99%.
              </span>
            </p>
            <div className="flex flex-row sm: gap-10 p-8 sm:justify-start px-0 justify-center">
              <button
                onClick={() =>
                  (window.location.href = "Pravi-deck-Canopy-community.pdf")
                }
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
      <div
        id="problem"
        className="flex flex-col w-full sm:px-8 px-6 md:px-20 md:pt-16 pt-8 gap-16"
      >
        <div className="flex flex-row md:w-[60%] sm:w-[80%] w-[100%] bg-gray-100 rounded-xl pb-4">
          <div className="relative flex flex-row h-full sm:-mt-8 -mt-4 sm:-ml-8 -ml-4 min-h-[150px] min-w-[100px]">
            <div className="absolute z-[20]">
              <img
                alt="abstract art in the shape of a question mark"
                src="QMark.png"
                className="sm:h-[270px] h-[180px] min-w-max mt-6"
              />
            </div>
            <div className="absolute -mr-40 -mt-14 z-[10] hidden sm:block">
              <img
                alt="abstract circle image for page decoration"
                src="pinkcirc.svg"
                className="min-h-[200px] min-w-[150px] mt-24 self-end place-self-end justify-self-end"
              />
            </div>
          </div>
          <div className="sm:p-4 flex flex-col gap-4 sm:ml-40 ml-8 ">
            <img
              alt="problem number one bullet point"
              src="probcirc.svg"
              className="self-start"
            />
            <h2 className="font-bold font-sans text-lg">Problem</h2>
            <p className="pr-4 font-sans">
              In the UK, 168,000 nonprofits are struggling to find donors to
              give to their cause. <br />
              They lack the resources, data, and expertise to fix this problem
              on their own.
            </p>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="ml-auto">
            <img
              alt="arrow connecting problem and solution boxes"
              src="arrow.svg"
              className="-mt-16 below-1000:block hidden"
            />
          </div>

          <div
            id="solution"
            className="flex flex-row-reverse md:w-[60%] sm:w-[80%] w-[100%] bg-gray-100 rounded-xl pb-4 sm:mr-20"
          >
            <div className="relative flex flex-row h-full sm:-mt-8 -mt-4 sm:-ml-8 -ml-4 min-h-[150px] min-w-[100px]">
              <div className="absolute z-[20]">
                <img
                  alt="rubiks cube to represent problem solving"
                  src="rubiks.png"
                  className="sm:h-[270px] h-[180px] min-w-max mt-6"
                />
              </div>
              <div className="absolute -mr-40 -mt-14 z-[10] hidden sm:block">
                <img
                  alt="abstract pink circle for page design"
                  src="pinkcirc.svg"
                  className="min-h-[200px] min-w-[150px] mt-24 self-end place-self-end justify-self-end"
                />
              </div>
            </div>
            <div className="p-4 flex flex-col gap-4 sm:mr-8 mr-4">
              <img
                alt="solution bullet point"
                src="probcirc2.svg"
                className="self-end"
              />
              <h2 className="font-bold font-sans text-lg text-right">
                Solution
              </h2>
              <p className="text-right sm:pl-4 font-sans">
                Pravi creates precise donor personas, builds conversion funnels,
                and optimises fundraising campaigns.
                <br />
                Nonprofits boost their donor base, grow their income, and
                maximise their impact.
              </p>
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
      <div className="sm:px-20 sm:py-16 py-4 sm:pt-0 px-2 flex flex-row w-full justify-evenly flex-wrap">
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
      </div>
      <div id="market" className="flex flex-col justify-center ">
        <h2 className="text-3xl text-center font-sans font-extrabold mt-4 mb-6">
          Market and Projections
        </h2>
        <div className="flex flex-wrap  mt-4 below-1000:mx-32 mx-8 md:gap-0 gap-6 justify-center mb-8">
          <img
            alt="abstract page decoration shape"
            src="shape2.svg"
            className="self-end -mr-14 -mb-8 z-[50] md:block hidden"
          />
          <div className="flex-1 max-w-[70%] min-w-[300px] flex flex-col items-center justify-start bg-[#fff2f9] p-8 rounded-xl md:mr-4">
            <img alt="globe icon" className="" src="/globe-icon.svg" />
            <p className="p-4 sm:text-lg text-center font-sans text-sm">
              <span className="font-bold">TAM:</span> 4.5m nonprofits across the
              developed world with a CAGR of 9.18%
              <br />
              <span className="font-bold">SAM:</span> 1.5m nonprofits with
              revenues between £100k-£3.5m
            </p>
          </div>
          <div className="flex-1 max-w-[70%] min-w-[300px] flex flex-col items-center justify-start bg-[#fff2f9] p-8 rounded-xl md:ml-4">
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
          </div>
        </div>
        <div className="flex flex-col justify-center items-center my-4">
          <button
            onClick={() =>
              (window.location.href = "Pravi-deck-Canopy-community.pdf")
            }
            className="inline-block font-sans bg-custom-pink border-custom-pink-border border rounded text-white text-center leading-tight px-3 py-1.5 hover:bg-custom-pink-border transition-all duration-300 ease-in-out hover:cursor-pointer"
          >
            Download pitch deck
          </button>
        </div>
      </div>
      <div
        id="business"
        className="sm:px-16 px-8 sm:py-4 py-4 flex flex-row justify-center"
      >
        <div className="flex flex-col sm:w-[50%] w-[100%]">
          <h2 className="text-3xl text-left font-sans font-extrabold my-0">
            Business model
          </h2>
          <div className="flex flex-row">
            <div className="flex flex-col w-[60%]">
              <img
                alt="calendar icon"
                className="w-[75px] sm:w-[100px] py-6"
                src="/calendar-icon.svg"
              />
              <p className="p-4 sm:text-lg font-sans text-left pl-0">
                Subscription-based model with tiered pricing for nonprofits and
                nonprofit consultants.
              </p>
            </div>
            <div className="flex flex-col w-[50%]">
              <img
                alt="checklist icon"
                className="w-[75px] sm:w-[100px] py-6"
                src="/checklist-icon.svg"
              />
              <p className="p-4 sm:text-lg font-sans text-left pl-0 pb-10 text-sm">
                £350,000 Innovate UK Smart Grant covers research and developmet
                costs.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-10 mt-auto">
            <button
              onClick={scrollToTop}
              className="bg-white font-sans border-custom-pink-border border rounded hover:text-white text-center leading-tight px-3 py-1.5 hover:bg-black transition-all duration-300 ease-in-out hover:cursor-pointer"
            >
              Watch demo
            </button>
            <button
              onClick={() =>
                (window.location.href = "Pravi-deck-Canopy-community.pdf")
              }
              className="bg-custom-pink font-sans border-custom-pink-border border rounded text-white text-center leading-tight px-3 py-1.5 hover:bg-custom-pink-border transition-all duration-300 ease-in-out hover:cursor-pointer"
            >
              Download pitch deck
            </button>
          </div>
        </div>
        <div className="flex-col w-[40%] hidden sm:flex items-center justify-center">
          <img
            alt="graphic of a notice board in an office covered in notes"
            className="w-[35vw] max-w-[400px] justify-center align-middle"
            src="notice.png"
          />
        </div>
      </div>
      <div id="ask" className="flex flex-col justify-center items-center">
        <h2 className="text-3xl text-center font-sans font-extrabold mt-8 mb-4">
          The Ask
        </h2>
        <div className="w-full md:px-16 px-2 justify-center items-center flex flex-row flex-wrap">
          <div className="below-1000:w-[35%] w-[58%]">
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
          </div>
          <div className="mb-4 flex-1 h-[100%] bg-[#fff2f9] below-1000:w-[35%] w-[80%] rounded-xl min-h-[200px] flex items-start flex-col sm:px-8 px-4 sm:py-6 py-3 gap-8 ">
            <div className="flex flex-row">
              <img
                alt="checkmark icon"
                src="check.svg"
                className="sm:block hidden self-center max-h-[24px] w-auto"
              />
              <div className="flex flex-col ml-2">
                <h3 className="text-xl font-sans font-bold">£400,000</h3>
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
                <h3 className="text-xl font-sans font-bold">66.8%</h3>
                <p className="font-sans">
                  of funds will be directed toward marketing, targeting a
                  customer base of 10,000 within the first year.
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
                  launch in the USA, and generate £7.2 million ARR
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
            onClick={() =>
              (window.location.href = "Pravi-deck-Canopy-community.pdf")
            }
            className="bg-custom-pink font-sans border-custom-pink-border border rounded text-white text-center leading-tight px-3 py-1.5 hover:bg-custom-pink-border transition-all duration-300 ease-in-out hover:cursor-pointer"
          >
            Download pitch deck
          </button>
        </div>
      </div>
      <h2 className="text-3xl text-center font-sans font-extrabold sm:mt-10 mt-8 sm:mb-6 mb-4">
        In partnership with
      </h2>
      <div className="flex flex-wrap gap-4 justify-center mt-6 mb-4">
        <div className="max-w-[450px] w-full mx-12 sm:m-0 sm:w-1/3 md:w-1/4 p-4 rounded-[35px] border-2 shadow-md">
          <img
            alt="Orbital Global company logo"
            src="/orbital-global-logo.png"
            className="w-full"
          />
        </div>
        <div className="max-w-[450px] w-full mx-12 sm:m-0 sm:w-1/3 md:w-1/4 p-4 rounded-[35px] border-2 shadow-md">
          <img
            alt="N K M T company logo"
            src="/nkmt-logo.png"
            className="w-full"
          />
        </div>
        <div className="max-w-[450px] w-full mx-12 sm:m-0 sm:w-1/3 md:w-1/4 p-4 rounded-[35px] border-2 shadow-md">
          <img
            alt="rainforest foundation uk company logo"
            src="/rainforest-logo.png"
            className="w-full"
          />
        </div>
        <div className="max-w-[450px] w-full mx-12 sm:m-0 sm:w-1/3 md:w-1/4 p-4 rounded-[35px] border-2 shadow-md">
          <img
            alt="innovate UK company logo"
            src="/innovateuk-logo.png"
            className="w-full"
          />
        </div>
      </div>
      <div className="relative mt-6">
        <div className="absolute inset-0  below-1000:w-[60%] w-[80%] below-1000:h-[110%] sm:h-[80%]  bg-[#fff2f9] -z-10 left-1/2 transform -translate-x-1/2 rounded-xl"></div>
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
            <div className="flex-grow-0 flex-shrink-0 bg-white w-[150px] sm:w-[250px] md:w-[250px] p-4 rounded-[25px] border-2 shadow-md">
              <img
                alt="Jeremy Healsmith profile picture"
                src="/jeremy-profile.jpg"
                className="p-2 w-full"
              />
              <h3 className="font-sans font-bold text-[12px] mt-4 sm:text-lg text-center">
                Jeremy Healsmith
              </h3>
              <h4 className="font-sans text-[10px] mb-4 sm:text-lg text-center">
                Co-Founder
              </h4>
            </div>
            <div className="flex-grow-0 flex-shrink-0 bg-white w-[150px] sm:w-[250px] md:w-[250px] p-4 rounded-[25px] border-2 shadow-md">
              <img
                src="/robyn-profile.jpg"
                alt="Robyn Greaves profile picture"
                className="p-2 w-full"
              />
              <h3 className="font-sans font-bold text-[12px] mt-4 sm:text-lg text-center">
                Robyn Greaves
              </h3>
              <h4 className="font-sans text-[10px] mb-4 sm:text-lg text-center">
                Co-Founder
              </h4>
            </div>
            <div className="flex-grow-0 flex-shrink-0 bg-white w-[150px] sm:w-[250px] md:w-[250px] p-4 rounded-[25px] border-2 shadow-md">
              <img
                src="antonio.png"
                alt="Antonio Redono Plata profile picture"
                className="p-2 w-full"
              />
              <h3 className="font-sans font-bold text-[12px] mt-4 sm:text-lg text-center">
                Antonio Redono Plata
              </h3>
              <h4 className="font-sans text-[10px] mb-4 sm:text-lg text-center">
                Product Lead
              </h4>
            </div>
            <div className="flex-grow-0 flex-shrink-0 bg-white w-[150px] sm:w-[250px] md:w-[250px] p-4 rounded-[25px] border-2 shadow-md">
              <img
                src="sathish.png"
                alt="Sathish Sankarpandi profile picture"
                className="p-2 w-full"
              />
              <h3 className="font-sans font-bold text-[12px] mt-4 sm:text-lg text-center">
                Sathish Sankarpandi
              </h3>
              <h4 className="font-sans text-[10px] mb-4 sm:text-lg text-center">
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
              Priavacy policy
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
            <a href="https://uk.linkedin.com/company/pravi-ai">
              <img
                alt="linkedin logo"
                src="linkedin.svg"
                className="max-w-[25px]"
              />
            </a>
            <a href="https://www.instagram.com/pravi.ai/">
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
