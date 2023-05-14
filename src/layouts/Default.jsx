import { Footer } from "../components";
import TopBar from "../components/header/TopBar";

import TopBarData from "../assets/data/Topbardata";
import Hero from "../components/Hero";
import Corona from "../components/Corona";

import Service from "../components/Service";

import ServicesData from "../assets/data/ServicesData";
import Center from "../components/Center";
function Default(props) {
  return (
    <div>
      <TopBar data={TopBarData} />
      <Hero />
      <Corona />
      <Service data={ServicesData} />
      <Center />

      {props.children}
      <Footer />
    </div>
  );
}

export default Default;
