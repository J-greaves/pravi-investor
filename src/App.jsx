import "./App.css";

function App({ scrollToTop }) {
  return (
    <main className="flex flex-col min-h-[570px] sm:pt-16 pt-14 content-center justify-center">
      <div className="bg-home-banner sm:bg-cover sm:bg-center bg-no-repeat bg-top">
        <h1 className="p-8 sm:pl-16 font-extrabold font-manrope text-[32px] md:max-w-[60%] sm:max-w-[80%] sm:text-left text-center">
          Technology that helps nonprofits change the world
        </h1>
        <div className="flex flex-row sm:p-16 sm:py-0 py-0 p-4 pt-0">
          <div className="flex flex-col">
            <div className="md:hidden flex justify-center">
              <img
                className="min-w-[200px] max-w-[380px] w-full mb-4"
                src="/video-placeholder.jpg"
                alt="Video Placeholder"
              ></img>
            </div>
            <p className="p-1 pt-0 text-left sm:pt-0 sm:p-4 sm:pr-8 sm:text-lg text-sm">
              <span className="font-bold">Problem -</span> In the UK, 168,000
              nonprofits are struggling to find donors to give to their cause.
              They lack the resources, data and expertise to fix this problem on
              their own. <br />
              <br />
              <span className="font-bold">Solution -</span> Pravi creates
              precise donor personas, builds conversion funnels, and optimises
              fundraising campaigns. Nonprofits boost their donor base, grow
              their income, and maximise their impact.
              <br />
              <br />
              65% of all donations go to the top 0.85% of nonprofits.
              <br />
              <br />
              <span className="font-bold sm:text-left text-center block">
                We’re here to help the other 99%.
              </span>
            </p>
            <div className="flex flex-row sm: gap-10 p-8 sm:justify-start px-0 justify-center">
              <div className="bg-custom-pink border-custom-pink-border border rounded text-white text-center leading-tight px-3 py-1.5 hover:bg-custom-pink-border transition-all duration-300 ease-in-out hover:cursor-pointer">
                Download pitch deck
              </div>
            </div>
          </div>
          <div className="hidden md:flex sm:w-1/2 justify-center items-start ">
            <img
              className="min-w-[350px] max-w-[550px] ml-8"
              src="/video-placeholder.jpg"
            ></img>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center ">
        <h2 className="text-3xl text-center font-manrope font-extrabold mt-4 mb-6">
          Market and Projections
        </h2>
        <div className="flex flex-wrap gap-[10px] mt-4">
          <div className="flex-1 min-w-[calc(50%-16px)] flex flex-col items-center justify-start">
            <img className="w-[50px] sm:w-[75px]" src="/globe-icon.png" />
            <p className="p-4 sm:text-lg text-center text-sm">
              TAM: 4.5m nonprofits across the developed world with a CAGR of
              9.18%
              <br />
              <br />
              SAM: 1.5m nonprofits with revenues between £100k-£3.5m
            </p>
          </div>
          <div className="flex-1 min-w-[calc(50%-16px)] flex flex-col items-center justify-start">
            <img className="w-[50px] sm:w-[75px]" src="/graph-icon.png" />
            <p className="p-4 sm:text-lg text-center text-sm">
              12-Month Revenue Forecast: £7.2 million ARR
              <br />
              <br />
              Customer Target: 10,000 nonprofits within 12 months
              <br />
              <br />
              Revenue Growth: £78.9 million by Year 5, with over 100,000
              customers
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center my-4">
          <div className="inline-block bg-custom-pink border-custom-pink-border border rounded text-white text-center leading-tight px-3 py-1.5 hover:bg-custom-pink-border transition-all duration-300 ease-in-out hover:cursor-pointer">
            Download pitch deck
          </div>
        </div>
      </div>
      <div className="sm:px-16 sm:py-16 py-4  px-8 flex flex-col">
        <h2 className="text-3xl text-left font-manrope font-extrabold my-4 mb-0">
          Traction
        </h2>
        <div className="flex flex-row gap-[10px] mt-4">
          <div className="flex-1 min-w-[calc(50%-16px)] flex flex-row items-center justify-start m-4 ml-0">
            <img className="w-[50px] sm:w-[75px]" src="/group-icon.png" />
            <p className="sm:pl-8 pl-2 sm:text-2xl font-manrope text-custom-grey text-center text-base font-bold">
              300+ Waitlist
            </p>
          </div>
          <div className="flex-1 min-w-[calc(50%-16px)] flex flex-row items-center justify-start m-4 ml-0">
            <img className="w-[50px] sm:w-[75px]" src="/bulb-icon.png" />
            <p className="sm:pl-8 pl-2 sm:text-2xl font-manrope text-custom-grey text-center text-base font-bold">
              3 Early Adopters
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-[10px] mt-4">
          <div className="flex-1 min-w-[calc(50%-16px)] flex flex-row items-center justify-start m-4 ml-0">
            <img className="w-[50px] sm:w-[75px]" src="/cart-icon.png" />
            <p className="sm:pl-8 pl-2 sm:text-2xl font-manrope text-custom-grey text-center text-base font-bold">
              15 Pre-sales
            </p>
          </div>
          <div className="flex-1 min-w-[calc(50%-16px)] flex flex-row items-center justify-start m-4 ml-0">
            <img className="w-[50px] sm:w-[75px]" src="/check-icon.png" />
            <p className="sm:pl-8 pl-2 sm:text-2xl font-manrope text-custom-grey text-base font-bold text-left">
              Achieved with £0 <br /> marketing spend
            </p>
          </div>
        </div>
      </div>
      <div className="sm:px-16 px-8 sm:py-4 py-4 flex flex-row">
        <div className="flex flex-col sm:w-[50%] w-[100%]">
          <h2 className="text-3xl text-left font-manrope font-extrabold my-0">
            Business model
          </h2>
          <div className="flex flex-row">
            <div className="flex flex-col w-[50%]">
              <img
                className="w-[50px] sm:w-[75px] py-6"
                src="/calendar-icon.png"
              />
              <p className="p-4 sm:text-lg text-left pl-0">
                Subscription-based model with tiered pricing for nonprofits and
                nonprofit consultants.
              </p>
            </div>
            <div className="flex flex-col w-[50%]">
              <img
                className="w-[50px] sm:w-[75px] py-6"
                src="/check-icon.png"
              />
              <p className="p-4 sm:text-lg text-left pl-0 pb-10 text-sm">
                £350,000 Innovate UK Smart Grant covers research and developmet
                costs.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-10">
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
        <div className="flex flex-col w-[50%] hidden sm:flex items-center justify-center">
          <img
            className="w-[35vw] max-w-[350px] justify-center align-middle"
            src="/placeholder-img.png"
          />
        </div>
      </div>
      <h2 className="text-3xl text-center font-manrope font-extrabold mt-8">
        In partnership with
      </h2>
      <div className="flex flex-wrap gap-4 justify-center mt-10 mb-4">
        <div className="max-w-[350px] w-full mx-12 sm:m-0 sm:w-1/3 md:w-1/4 p-4 rounded-[35px] border-2 shadow-md">
          <img src="/orbital-global-logo.png" alt="Logo 1" className="w-full" />
        </div>
        <div className="max-w-[350px] w-full mx-12 sm:m-0 sm:w-1/3 md:w-1/4 p-4 rounded-[35px] border-2 shadow-md">
          <img src="/nkmt-logo.png" alt="Logo 2" className="w-full" />
        </div>
        <div className="max-w-[350px] w-full mx-12 sm:m-0 sm:w-1/3 md:w-1/4 p-4 rounded-[35px] border-2 shadow-md">
          <img src="/rainforest-logo.png" alt="Logo 3" className="w-full" />
        </div>
        <div className="max-w-[350px] w-full mx-12 sm:m-0 sm:w-1/3 md:w-1/4 p-4 rounded-[35px] border-2 shadow-md">
          <img src="/innovateuk-logo.png" alt="Logo 4" className="w-full" />
        </div>
      </div>
      <h2 className="text-3xl text-center font-manrope font-extrabold mt-8">
        Meet the team
      </h2>
      <div className="flex flex-wrap md:gap-8 gap-4 justify-center mt-10">
        <div className="flex-grow-0 flex-shrink-0 w-[150px] sm:w-[250px] md:w-[250px] p-4 rounded-[25px] border-2 shadow-md">
          <img src="/jeremy-profile.jpg" alt="Logo 1" className="p-2 w-full" />
          <h3 className="font-manrope font-bold text-[12px] mt-4 sm:text-lg text-center">
            Jeremy Healsmith
          </h3>
          <h4 className="font-manrope font-bold text-[10px] mb-4 sm:text-lg text-center">
            Co-Founder
          </h4>
        </div>
        <div className="flex-grow-0 flex-shrink-0 w-[150px] sm:w-[250px] md:w-[250px] p-4 rounded-[25px] border-2 shadow-md">
          <img src="/robyn-profile.jpg" alt="Logo 2" className="p-2 w-full" />
          <h3 className="font-manrope font-bold text-[12px] mt-4 sm:text-lg text-center">
            Robyn Greaves
          </h3>
          <h4 className="font-manrope font-bold text-[10px] mb-4 sm:text-lg text-center">
            Co-Founder
          </h4>
        </div>
        <div className="flex-grow-0 flex-shrink-0 w-[150px] sm:w-[250px] md:w-[250px] p-4 rounded-[25px] border-2 shadow-md">
          <img src="/placeholder-img.png" alt="Logo 3" className="p-2 w-full" />
          <h3 className="font-manrope font-bold text-[12px] mt-4 sm:text-lg text-center">
            Sathish Sankarpandi, Ph.D
          </h3>
          <h4 className="font-manrope font-bold text-[10px] mb-4 sm:text-lg text-center">
            Data Scientist
          </h4>
        </div>
        <div className="flex-grow-0 flex-shrink-0 w-[150px] sm:w-[250px] md:w-[250px] p-4 rounded-[25px] border-2 shadow-md">
          <img src="/placeholder-img.png" alt="Logo 4" className="p-2 w-full" />
          <h3 className="font-manrope font-bold text-[12px] mt-4 sm:text-lg text-center">
            Antonio Redono Plata
          </h3>
          <h4 className="font-manrope font-bold text-[10px] mb-4 sm:text-lg text-center">
            Product Lead
          </h4>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-4">
        <div className="inline-block bg-custom-pink border-custom-pink-border border rounded text-white text-center leading-tight mt-4 sm:mt-8 px-3 py-1.5 hover:bg-custom-pink-border transition-all duration-300 ease-in-out hover:cursor-pointer">
          Download pitch deck
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl text-center font-manrope font-extrabold mt-8 mb-4">
          The Ask
        </h2>
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
        <img
          src="/ask.png"
          alt="Logo 4"
          className="p-2 sm:w-[70%] w-full shadow"
        />
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
