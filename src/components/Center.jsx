import Link from "./core/Link";

export default function Center() {
  return (
    <div>
      <br />
      <div className="cst-center-img d-flex align-items-center py-4 mt-4">
        <div className="container">
          <div className="row">
            <div
              className="col-sm-7 wow fadeInLeft"
              data-wow-duration="100ms"
              data-wow-delay="100ms"
            >
              <h1 className="title">Price Chart</h1>
              <p>Just Consult with Us & Let's see how cool your business is.</p>
            </div>
            <div
              className="col-sm-5 text-center wow fadeInRight"
              data-wow-duration="100ms"
              data-wow-delay="100ms"
            >
              <div className="tour-button2">
                <Link
                  to="/"
                  className="btn btn-primary d-md-inline-block d-none"
                >
                  Testimonials
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
