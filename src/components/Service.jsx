export default function Service({ data }) {
  return (
    <section id="services">
      <br />
      <br />
      <div className="container align-item-center">
        <div class="row">
          {data.services.map((items, index) => {
            return (
              <div
                class="my-4 text-center cst-service-one col-lg-4 wow fadeIn hvr-grow-shadow animated"
                data-wow-duration="1000ms"
                data-wow-delay="100ms"
              >
                <img
                  src={items.path}
                  alt={items.title}
                  width="80px"
                  className="pb-4"
                ></img>
                <h2>{items.title}</h2>
                <p>{items.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
