import error404 from '../assets/error404.gif';
import { Error, MainPageLink } from "../styles/Error404.style";

function Error404() {
  return (
    <Error>
      <img src={error404} alt="404 error" />
      <h2>404 ERROR</h2>
      <p>La page que vous demandez n'est pas disponible</p>
      <MainPageLink to={'/'}>Go back to main page</MainPageLink>
    </Error>
  )
}

export default Error404
