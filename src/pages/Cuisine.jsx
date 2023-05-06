import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { Card, Grid } from "../styles/Pages.style";

function Cuisine() {

    const params = useParams()    

    const [cuisine, setCuisine] = useState([]);

    useEffect(() => {
      getCuisine(params.cuisine);
    }, [params.cuisine])
    

    const getCuisine = async(name) => {

        name = name.toLowerCase();

        const check = localStorage.getItem(`${name}`)
        
        if (check) {
            setCuisine(JSON.parse(check))
        } else { 
            try{
                await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}&number=9&tags=${name}`).then(response => response.json()).then(data => {
                    data = data.recipes;
                    setCuisine(data);
                    localStorage.setItem(`${name}`, JSON.stringify(data))
                })
                } catch (err){
                console.log("🚀 ~ file: Popular.jsx:10 ~ getPopular ~ err:", err)
                }
        }
    }

  return (
    <>
      <h2>{params.cuisine}</h2>
        <Grid
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 1.2}}
        >
        {cuisine && cuisine.map((item) => 
            <Card key={item.id}>
                <Link to={`/recipe/${item.id}`}>
                    {item.image ? <img src={item.image} alt={item.title} /> :
                    <div>No image yet 😞 </div>}
                    <h4>{item.title.toLowerCase()}</h4>
                </Link>
            </Card>
        )}
        </Grid>
    </>
  )
}

export default Cuisine
