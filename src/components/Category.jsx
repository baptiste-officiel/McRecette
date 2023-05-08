import { GiFullPizza, GiHamburger, GiNoodles, GiChopsticks } from "react-icons/gi";
import {List, SLink} from '../styles/Category.style'

function Category() {

  return (
    <List>
        <SLink to={'/cuisine/Italian'} >
            <GiFullPizza />
            <h3>Italian</h3>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <GiHamburger />
            <h3>American</h3>
        </SLink>
        <SLink to={'/cuisine/Thai'}>
            <GiNoodles />
            <h3>Thaï</h3>
        </SLink>
        <SLink to={'/cuisine/Japanese'}>
            <GiChopsticks />
            <h3>Japanese</h3>
        </SLink>
    </List>
  )
}


export default Category
