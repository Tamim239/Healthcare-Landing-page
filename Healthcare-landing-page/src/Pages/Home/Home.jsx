import { Banner } from "../../Components/HomeSection/Banner"
import { EmpoweringHealth } from "../../Components/HomeSection/EmpoweringHealth"
import { Help_Solution } from "../../Components/HomeSection/Help_Solution"
import { Stats } from "../../Components/HomeSection/Stats"

export const Home = () => {
  return (
    <div>
        <Banner />
        <Stats />
        <Help_Solution />
        <EmpoweringHealth />
    </div>
  )
}
