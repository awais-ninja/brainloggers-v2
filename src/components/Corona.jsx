import Link from "./core/Link";

export default function Corona() {
  return (
    <section className="corona">
      <div className="container">
        <h1>
          <i className="fa fa-info"></i> Coronavirus Update
        </h1>
        <h2>Still Taking Projects for H2 of 2020</h2>
        <p>
          Hi there!
          <br />
          Like many companies, we are taking all the necessary steps to mitigate
          the risks of the now-evolving Coronavirus.
          <br />
          Despite this, we are still in almost a hundred percent working
          condition. Due to the increased load on our IT lines, we may be busy
          on times. So thank you in advance for your patience.
          <br />
          For Existing clients, you can email all your queries on
          <Link to="mailto:care@brainloggers.co.uk">
            care@brainloggers.co.uk
          </Link>
          Or you can contact us via Whatsapp, Phone Call or Visit us at our
          Office.
          <br />
          Take care of yourself and your loved ones. Kind Regards!
        </p>
      </div>
    </section>
  );
}
