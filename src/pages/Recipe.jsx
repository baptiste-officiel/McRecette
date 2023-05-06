import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, DetailWrapper, Info } from "../styles/Recipe.style";

function Recipe() {

    let params = useParams();
    const [recipe, setRecipe] = useState([]);
    const [activeTab, setActiveTab] = useState('instructions');

    useEffect(() => {
      getRecipe(params.id)
    }, [params.id])
    

    const getRecipe = async(id) => {

        const check = localStorage.getItem(`${id}`)
        
        if (check) {
            setRecipe(JSON.parse(check))
        } else {
            try{
                await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`).then(response => response.json()).then(data => {
                    setRecipe(data)
                    localStorage.setItem(`${id}`, JSON.stringify(data))
                })
                } catch (err){
                console.log("🚀 ~ file: Popular.jsx:10 ~ getPopular ~ err:", err)
                }
        }
    }


  return (
    <DetailWrapper
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 1.2}}
    >
      {recipe && 
      <>
      <h2>{recipe.title}</h2>
      {recipe.image &&
       <div className="image-container">
        <img src={recipe.image} alt={recipe.title} />
      </div>}
      <Info>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients </Button>
        {activeTab === 'instructions'&& 
        (<>
            <p dangerouslySetInnerHTML={{__html: recipe.summary}} ></p>
            <div dangerouslySetInnerHTML={{__html: recipe.instructions}}></div>
        </>)}
        {activeTab === 'ingredients' && (
        <ul>
            {recipe.extendedIngredients.map((ingredient) =>
                <li key={ingredient.id}>{ingredient.original}</li>
            )}
        </ul>
        )}
      </Info>
      </>
      }
    </DetailWrapper>
  )
}


export default Recipe
