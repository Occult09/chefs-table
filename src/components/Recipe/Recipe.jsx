import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";

const Recipe = ({ recipe, handleAddToCookings }) => {

    const { recipe_name, recipe_image, description, ingredients, preparing_time, calories } = recipe

    return (
        <div className="w-[379px] h-[685px] p-[24px] border border-[#28282833] rounded-xl mb-10 mt-5">
            <img className="w-[331px] h-[200px] rounded-2xl" src={recipe_image} alt="" />
            <h3 className="text-[20px] font-semibold text-neutral-700 my-3 pl-2">{recipe_name}</h3>
            <p className="text-neutral-500 border-b border-[#2828281A] pb-3 pl-2">{description}</p>
            <div className="mt-5 border-b border-[#2828281A] p-2">
                <h3 className="text-[18px] font-medium text-neutral-700">Ingrerients: {ingredients.length}</h3>
                <ul className="list-disc ml-8">
                    {
                        recipe.ingredients.map((ingredient, index) => (
                            <li className="text-[18px] text-neutral-500" key={index}>{ingredient}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="flex gap-20 mt-5 ml-2 text-[#282828CC]">
                <p className="flex items-center gap-1"><CiClock2></CiClock2>{preparing_time}</p>
                <p className="flex items-center gap-1"><FaFire></FaFire> {calories}</p>
            </div>
            <button onClick={() => handleAddToCookings(recipe)} className="w-[170px] h-[49px] bg-[#0BE58A] text-[#150B2B] text-[18px] font-medium rounded-3xl mt-5">Want to cook</button>
        </div>
    );
};

export default Recipe;