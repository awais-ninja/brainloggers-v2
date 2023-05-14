import Link from "./core/Link";

export default function Hero() {
  return (
    <section id="home-slider">
      <div className="container">
        <div className="row">
          <div className="main-slider animate-in">
            <div className="slide-text">
              <h1>
                Creating Success Stories
                <span className="cst-snap"> since 2014</span>
              </h1>
              <p>
                Providing Website and Graphic Design services since past 8 years
                in the United Kingdom. We build not only just websites but
                create a comprehensive brand recognition for our clients.
              </p>
              <Link to="/services" class="btn btn-outline-info">
                Explore Our Services
              </Link>
            </div>
            <img
              src="https://brainloggers.co.uk/images/home/slider/2045.svg"
              class="slider-hill"
              alt="slider image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
