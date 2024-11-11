import "./App.css";
import LoomEmbed from "./components/LoomEmbed";

function App({ scrollToTop }) {
  return (
    <main className="flex flex-col min-h-[570px] sm:pt-16 pt-14 content-center justify-center sm:px-4">
      <div className="bg-home-banner sm:bg-cover sm:bg-center bg-no-repeat bg-top below-1000:p-16 sm:pt-0 pt-4 flex flex-row">
        <div className="flex flex-col sm:p-8 sm:pr-0 sm:py-0 py-0 p-4 pt-8 justify-center">
          <h1 className="font-extrabold font-sans text-[48px] md:max-w-[90%] sm:max-w-[80%] sm:text-left text-center">
            Technology that helps nonprofits change the world
          </h1>
          <div className="flex flex-col">
            <div className="md:hidden flex justify-center mt-8 mb-6">
              <LoomEmbed />
            </div>
            <p className="sm:text-left text-center sm:text-lg text-base">
              65% of all donations go to the top 0.85% of nonprofits.
              <br />
              <span className="font-normal sm:text-left test-base text-center block">
                We’re here to help the other 99%.
              </span>
            </p>
            <div className="flex flex-row sm: gap-10 p-8 sm:justify-start px-0 justify-center">
              <div className="bg-custom-pink border-custom-pink-border border rounded text-white text-center leading-tight px-3 py-2.5 hover:bg-custom-pink-border transition-all duration-300 ease-in-out hover:cursor-pointer">
                Download pitch deck
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex sm:w-full justify-center items-start md:mt-4 mt-4">
          <LoomEmbed />
        </div>
      </div>
      <div
        id="prob and solu"
        className="flex flex-col w-full px-8 md:px-20 md:pt-16 pt-8 gap-16"
      >
        <div
          id="problem"
          className="flex flex-row md:w-[60%] sm:w-[80%] w-[100%] bg-gray-100 rounded-xl pb-4"
        >
          <div className="relative flex flex-row max-w-[50%] w-auto h-[100%] sm:-mt-8 -mt-4 sm:-ml-8 -ml-4 min-h-[150px] min-w-[100px]">
            <img src="QMark.png" className=" z-[20]" />
            <img
              src="pinkcirc.svg"
              className="-ml-48 z-[10] below-1000:block hidden self-end"
            />
          </div>
          <div className="p-4 flex flex-col gap-4 sm:ml-8 ml-1">
            <img src="probcirc.svg" className="self-start" />
            <h2 className="font-bold font-sans text-lg">Problem</h2>
            <p className="pr-4">
              In the UK, 168,000 nonprofits are struggling to find donors to
              give to their cause. <br></br>They lack the resources, data and
              expertise to fix this problem on their own.
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="ml-auto">
            <img src="arrow.svg" className="-mt-16 below-1000:block hidden" />
          </div>
          <div
            id="solution"
            className="flex flex-row-reverse md:w-[60%] sm:w-[80%] w-[100%] bg-gray-100 rounded-xl pb-4"
          >
            <div className="relative flex flex-row max-w-[50%] w-auto below-1000:max-h-[321px] max-h-0 sm:-mt-8 -mt-4 sm:-ml-8 -ml-4 min-h-[150px] min-w-[100px]">
              <img src="rubiks.png" className=" z-[20]" />
              <img
                src="pinkcirc.svg"
                className="-ml-48 z-[10] below-1000:block hidden self-end"
              />
            </div>
            <div className="p-4 flex flex-col gap-4 sm:mr-8 mr-4">
              <img src="probcirc2.svg" className="self-end" />
              <h2 className="font-bold font-sans text-lg text-right">
                Solution
              </h2>
              <p className="text-right pl-4">
                Pravi creates precise donor personas, builds conversion funnels,
                and optimises fundraising campaigns.<br></br>Nonprofits boost
                their donor base, grow their income, and maximise their impact.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <h2 className="text-3xl text-center font-sans font-extrabold mb-8 mt-16">
          Traction
        </h2>
        <img
          src="shape.svg"
          alt="SVG Image"
          className="sm:w-[85px] sm:h-[85px] w-[42px] h-[42px] absolute top-0 right-0 mt-16 mr-8"
        />
      </div>
      <div className="sm:px-20 sm:py-16 py-4 sm:pt-0 px-2 flex flex-row w-full justify-evenly flex-wrap">
        <div className="flex-1 min-w-[75px] flex flex-col items-center justify-start m-4 ml-0">
          <img className="w-[50px] sm:w-[75px]" src="/group-icon.svg" />
          <div className="flex flex-row h-full">
            <img src="check.svg" className="self-center max-h-[24px] w-auto" />
            <p className=" pl-2 sm:text-2xl font-sans text-custom-grey text-center text-sm sm:font-bold font-normal self-center">
              300+ Waitlist
            </p>
          </div>
        </div>
        <div className="flex-1 min-w-[75px] flex flex-col items-center justify-start m-4 ml-0">
          <img className="w-[50px] sm:w-[75px]" src="/bulb-icon.svg" />
          <div className="flex flex-row h-full">
            <img src="check.svg" className="self-center max-h-[24px] w-auto" />
            <p className=" pl-2 sm:text-2xl font-sans text-custom-grey text-center text-sm sm:font-bold font-normal self-center">
              3 Early Adopters
            </p>
          </div>
        </div>
        <div className="flex-1 min-w-[75px] flex flex-col items-center justify-start m-4 ml-0">
          <img className="w-[50px] sm:w-[75px]" src="/cart-icon.svg" />
          <div className="flex flex-row h-full">
            <img src="check.svg" className="self-center max-h-[24px] w-auto" />
            <p className=" pl-2 sm:text-2xl font-sans text-custom-grey text-center text-sm sm:font-bold font-normal self-center">
              15 Pre-sales
            </p>
          </div>
        </div>
        <div className="flex-1 min-w-[75px] flex flex-col items-center justify-start m-4 ml-0">
          <img className="w-[50px] sm:w-[75px]" src="/check-icon.svg" />
          <div className="flex flex-row h-full">
            <img src="check.svg" className="self-center max-h-[24px] w-auto" />
            <p className=" pl-4 sm:text-2xl font-sans text-custom-grey text-left text-sm sm:font-bold font-normal self-center">
              Achieved with
              <br />
              £0 marketing spend
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center ">
        <h2 className="text-3xl text-center font-sans font-extrabold mt-4 mb-6">
          Market and Projections
        </h2>
        <div className="flex flex-wrap  mt-4 below-1000:mx-32 mx-8 md:gap-0 gap-6 justify-center mb-8">
          <img
            src="shape2.svg"
            className="self-end -mr-14 -mb-8 z-[50] md:block hidden"
          />
          <div className="flex-1 max-w-[70%] min-w-[300px] flex flex-col items-center justify-start bg-[#fff2f9] p-8 rounded-xl md:mr-4">
            <img className="" src="/globe-icon.svg" />
            <p className="p-4 sm:text-lg text-center text-sm">
              <span className="font-bold">TAM:</span> 4.5m nonprofits across the
              developed world with a CAGR of 9.18%
              <br />
              <span className="font-bold">SAM:</span> 1.5m nonprofits with
              revenues between £100k-£3.5m
            </p>
          </div>
          <div className="flex-1 max-w-[70%] min-w-[300px] flex flex-col items-center justify-start bg-[#fff2f9] p-8 rounded-xl md:ml-4">
            <img className="" src="/graph-icon.svg" />
            <p className="p-4 sm:text-lg text-center text-sm">
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
          <div className="inline-block bg-custom-pink border-custom-pink-border border rounded text-white text-center leading-tight px-3 py-1.5 hover:bg-custom-pink-border transition-all duration-300 ease-in-out hover:cursor-pointer">
            Download pitch deck
          </div>
        </div>
      </div>
      <div className="sm:px-16 px-8 sm:py-4 py-4 flex flex-row justify-center">
        <div className="flex flex-col sm:w-[50%] w-[100%]">
          <h2 className="text-3xl text-left font-sans font-extrabold my-0">
            Business model
          </h2>
          <div className="flex flex-row">
            <div className="flex flex-col w-[60%]">
              <img
                className="w-[75px] sm:w-[100px] py-6"
                src="/calendar-icon.svg"
              />
              <p className="p-4 sm:text-lg text-left pl-0">
                Subscription-based model with tiered pricing for nonprofits and
                nonprofit consultants.
              </p>
            </div>
            <div className="flex flex-col w-[50%]">
              <img
                className="w-[75px] sm:w-[100px] py-6"
                src="/checklist-icon.svg"
              />
              <p className="p-4 sm:text-lg text-left pl-0 pb-10 text-sm">
                £350,000 Innovate UK Smart Grant covers research and developmet
                costs.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-10 mt-auto">
            <div
              onClick={scrollToTop}
              className="bg-white border-custom-pink-border border rounded hover:text-white text-center leading-tight px-3 py-1.5 hover:bg-black transition-all duration-300 ease-in-out hover:cursor-pointer"
            >
              Watch demo
            </div>
            <div className="bg-custom-pink border-custom-pink-border border rounded text-white text-center leading-tight px-3 py-1.5 hover:bg-custom-pink-border transition-all duration-300 ease-in-out hover:cursor-pointer">
              Download pitch deck
            </div>
          </div>
        </div>
        <div className="flex-col w-[40%] hidden sm:flex items-center justify-center">
          <img
            className="w-[35vw] max-w-[400px] justify-center align-middle"
            src="notice.png"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl text-center font-sans font-extrabold mt-8 mb-4">
          The Ask
        </h2>
        <div className="w-full md:px-16 px-2 justify-center items-center flex flex-row flex-wrap">
          <div className="sm:w-[35%] w-[60%]">
            <img src="piechart.svg" className="p-4" />
          </div>
          <div className="sm:w-[30%] w-[40%]">
            <img src="info.svg" className="p-4" />
          </div>
          <div className="mb-4 flex-1 h-[100%] bg-[#fff2f9] sm:w-[35%] w-[80%] rounded-xl min-h-[200px] flex items-start flex-col sm:px-8 px-4 sm:py-6 py-3 gap-8 ">
            <div className="flex flex-row">
              <img
                src="check.svg"
                className="self-center max-h-[24px] w-auto"
              />
              <div className="flex flex-col ml-2">
                <h3 className="text-xl font-sans font-bold">£400,000</h3>
                <p className="mr-2">to scale marketing and sales operations.</p>
              </div>
            </div>
            <div className="flex flex-row">
              <img
                src="check.svg"
                className="self-center max-h-[24px] w-auto"
              />
              <div className="flex flex-col ml-2">
                <h3 className="text-xl font-sans font-bold">66.8%</h3>
                <p>
                  of funds will be directed toward marketing, targeting a
                  customer base of 10,000 within the first year.
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <img
                src="check.svg"
                className="self-center max-h-[24px] w-auto"
              />
              <div className="flex flex-col ml-2">
                <h3 className="text-xl font-sans font-bold">
                  Accelerate growth
                </h3>
                <p>launch in the USA, and generate £7.2 million ARR</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-10 justify-center sm:my-8 mb-4">
          <div
            onClick={scrollToTop}
            className="bg-white border-custom-pink-border border rounded hover:text-white text-center leading-tight px-3 py-1.5 hover:bg-black transition-all duration-300 ease-in-out hover:cursor-pointer"
          >
            Watch demo
          </div>
          <div className="bg-custom-pink border-custom-pink-border border rounded text-white text-center leading-tight px-3 py-1.5 hover:bg-custom-pink-border transition-all duration-300 ease-in-out hover:cursor-pointer">
            Download pitch deck
          </div>
        </div>
      </div>
      <h2 className="text-3xl text-center font-sans font-extrabold sm:mt-16 mt-8 sm:mb-8 mb-4">
        In partnership with
      </h2>
      <div className="flex flex-wrap gap-4 justify-center mt-10 mb-4">
        <div className="max-w-[450px] w-full mx-12 sm:m-0 sm:w-1/3 md:w-1/4 p-4 rounded-[35px] border-2 shadow-md">
          <img src="/orbital-global-logo.png" alt="Logo 1" className="w-full" />
        </div>
        <div className="max-w-[450px] w-full mx-12 sm:m-0 sm:w-1/3 md:w-1/4 p-4 rounded-[35px] border-2 shadow-md">
          <img src="/nkmt-logo.png" alt="Logo 2" className="w-full" />
        </div>
        <div className="max-w-[450px] w-full mx-12 sm:m-0 sm:w-1/3 md:w-1/4 p-4 rounded-[35px] border-2 shadow-md">
          <img src="/rainforest-logo.png" alt="Logo 3" className="w-full" />
        </div>
        <div className="max-w-[450px] w-full mx-12 sm:m-0 sm:w-1/3 md:w-1/4 p-4 rounded-[35px] border-2 shadow-md">
          <img src="/innovateuk-logo.png" alt="Logo 4" className="w-full" />
        </div>
      </div>
      <div className=" inset-0 bg-team-banner bg-cover">
        <h2 className="text-3xl text-center font-sans font-extrabold mt-8">
          Meet the team
        </h2>
        <div className="flex flex-wrap md:gap-8 gap-4 justify-center mt-10">
          <div className="flex-grow-0 flex-shrink-0 bg-white w-[150px] sm:w-[250px] md:w-[250px] p-4 rounded-[25px] border-2 shadow-md">
            <img
              src="/jeremy-profile.jpg"
              alt="Logo 1"
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
            <img src="/robyn-profile.jpg" alt="Logo 2" className="p-2 w-full" />
            <h3 className="font-sans font-bold text-[12px] mt-4 sm:text-lg text-center">
              Robyn Greaves
            </h3>
            <h4 className="font-sans text-[10px] mb-4 sm:text-lg text-center">
              Co-Founder
            </h4>
          </div>
          <div className="flex-grow-0 flex-shrink-0 bg-white w-[150px] sm:w-[250px] md:w-[250px] p-4 rounded-[25px] border-2 shadow-md">
            <img src="antonio.png" alt="Logo 4" className="p-2 w-full" />
            <h3 className="font-sans font-bold text-[12px] mt-4 sm:text-lg text-center">
              Antonio Redono Plata
            </h3>
            <h4 className="font-sans text-[10px] mb-4 sm:text-lg text-center">
              Product Lead
            </h4>
          </div>
          <div className="flex-grow-0 flex-shrink-0 bg-white w-[150px] sm:w-[250px] md:w-[250px] p-4 rounded-[25px] border-2 shadow-md">
            <img src="sathish.png" alt="Logo 3" className="p-2 w-full" />
            <h3 className="font-sans font-bold text-[12px] mt-4 sm:text-lg text-center">
              Sathish Sankarpandi
            </h3>
            <h4 className="font-sans text-[10px] mb-4 sm:text-lg text-center">
              Data Scientist
            </h4>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-4">
        <div className="inline-block bg-custom-pink border-custom-pink-border border rounded text-white text-center leading-tight mt-4 sm:mt-8 px-3 py-1.5 hover:bg-custom-pink-border transition-all duration-300 ease-in-out hover:cursor-pointer">
          Download pitch deck
        </div>
      </div>
      <footer className="h-[32px] bg-custom-grey mt-16 flex flex-row items-center">
        <h4 className="text-white text-left sm:text-base text-xs sm:ml-8 ml-2">
          Pravi @ 2024. All rights reserved.
        </h4>
        <div className="flex-1"></div>
        <img src="/linkedin.png" className="h-[20px] sm:mr-8 mr-2"></img>
      </footer>
    </main>
  );
}

export default App;
