import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Card, Grid } from "../styles/Pages.style";

function Searched() {

    const [searched, setSearched] = useState([]);
    let params = useParams();

    useEffect(() => {
      getSearched(params.search)
    }, [params.search])
    


    const getSearched = async(search) => {

        search = search.toLowerCase();
    
            const check = localStorage.getItem(`${search}`)
            
            console.log("🚀 ~ file: Cuisine.jsx:24 ~ getCuisine ~ check:", check)
            if (check) {
                setSearched(JSON.parse(check))
            } else {
                try{
                    await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}&number=9&query=${search}`).then(response => response.json()).then(data => {
                        data = data.results;
                        setSearched(data);
                        localStorage.setItem(`${search}`, JSON.stringify(data))
                    })
                    } catch (err){
                    console.log("🚀 ~ file: Popular.jsx:10 ~ getPopular ~ err:", err)
                    }
            }
        }

        return (
            <>
              <h2>{params.search}</h2>
                <Grid
                    animate={{opacity: 1}}
                    initial={{opacity: 0}}
                    exit={{opacity: 0}}
                    transition={{duration: 1.2}}
            >
                {searched && searched.map((item) => 
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


export default Searched
