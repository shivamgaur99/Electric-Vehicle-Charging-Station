import Footer from "../components/Footer";
import ControlledCarousel from "../components/MyCarousel";

function Home() {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-12">
          <ControlledCarousel />
        </div>
      </div>

      <div className="row mt-5 justify-content-center ms-4 me-4">
        <div className="col-sm-12 col-md-6 m-0">
          <h1>
            <b style={{ color: "#3867d6" }}>Our growing charger network</b>
          </h1>
          <div
            className="col-sm-12 mt-2"
            style={{ fontFamily: "poppins", fontSize: "18px" }}
          >
            <h1>
              Find your nearest{" "}
              <b style={{ color: "#eb3b5a" }}>EVON Charging point</b>
            </h1>
            <a href="https://www.google.com/maps/search/kharghar+ev+charging+station/@19.0650847,73.0184128,13z/data=!3m1!4b1?entry=ttu" target="_main">
              <button id="idb" type="button" className="btn btn-primary mb-5">
                Click Here
              </button>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
