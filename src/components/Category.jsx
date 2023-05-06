import { GiFullPizza, GiHamburger, GiNoodles, GiChopsticks } from "react-icons/gi";
import {List, SLink} from '../styles/Category.style'

function Category() {

  return (
    <List>
        <SLink to={'/cuisine/Italian'} >
            <GiFullPizza />
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <GiHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Thai'}>
            <GiNoodles />
            <h4>Thaï</h4>
        </SLink>
        <SLink to={'/cuisine/Japanese'}>
            <GiChopsticks />
            <h4>Japanese</h4>
        </SLink>
    </List>
  )
}


export default Category
