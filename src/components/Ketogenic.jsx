import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper, Card, Gradient } from "../styles/Slider.style";

function Ketogenic() {

    const [ketogenic, setKetogenic] = useState([]);

    useEffect(() => {
      getKetogenic();
    }, [])
    

    const getKetogenic = async() => {

        const check = localStorage.getItem('ketogenic')
        
        if (check) {
          setKetogenic(JSON.parse(check))
        } else {
            try{
                await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}&diet=ketogenic&number=9`).then(response => response.json()).then(data => {
                    setKetogenic(data);
                    localStorage.setItem('ketogenic', JSON.stringify(data))
                })
                } catch (err){
                console.log("🚀 ~ file: Popular.jsx:10 ~ getPopular ~ err:", err)
                }
        }
    }


  return (
    <Wrapper>
      <h2>Ketogenic</h2>
      <Splide options={{
        perPage:3,
        pagination: false,
        drag: 'free',
        gap: '3rem',
        breakpoints: {
          850: {
            perPage: 2,
            gap: '2rem'
          },
          550: {
            perPage: 1,
            gap: '1rem'
          }
        }
      }}>
      {ketogenic && ketogenic.map((recipe) => 
        <SplideSlide key={recipe.id}>
          <Card>
            <Link to={`/recipe/${recipe.id}`}>
            <h4>{recipe.title}</h4>
            <img src={recipe.image} alt={recipe.title} />
            <Gradient />
            </Link>
        </Card>
        </SplideSlide>
      )}
      </Splide>
    </Wrapper>
  )
}


export default Ketogenic
