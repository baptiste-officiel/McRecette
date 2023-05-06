import { GiKnifeFork } from "react-icons/gi";
import { Title } from "../styles/NavBar.style";

function NavBar() {
  return (
    <>
      <Title to={'/'}><h1><GiKnifeFork /> McRecette</h1></Title>
    </>
  )
}

export default NavBar
