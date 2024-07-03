import { Accordion } from "../../Components/HomeSection/Accordion"
import { Banner } from "../../Components/HomeSection/Banner"
import { EmpoweringHealth } from "../../Components/HomeSection/EmpoweringHealth"
import { Help_Solution } from "../../Components/HomeSection/Help_Solution"
import { OfferBanner } from "../../Components/HomeSection/OfferBanner"
import { Review } from "../../Components/HomeSection/Review"
import { Stats } from "../../Components/HomeSection/Stats"

export const Home = () => {
  return (
    <div>
        <Banner />
        <Stats />
        <Help_Solution />
        <EmpoweringHealth />
        <Review />
        <Accordion />
        <OfferBanner />
    </div>
  )
}
