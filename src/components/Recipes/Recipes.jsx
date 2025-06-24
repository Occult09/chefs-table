import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('Recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    return (
        <div className="w-2/3 grid grid-col-1 md:grid-cols-2 lg:grid-col-2 gap-5">
            {
                recipes.map(recipe => <Recipe recipe_id={recipe.recipe_id} recipe={recipe}></Recipe>)
            }
        </div>
    );
};

export default Recipes;