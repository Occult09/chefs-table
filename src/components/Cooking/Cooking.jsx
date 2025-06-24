const Cooking = ({ cooking }) => {

    const { recipe_name, preparing_time, calories } = cooking

    return (
        <div className="flex justify-between">
            <table className="mt-1 w-[514px] h-[100px]">
                <tr className="font-medium text-[#282828B3]">
                    <td className="w-[122px] h-[52px]">{recipe_name}</td>
                    <td className="">{preparing_time}</td>
                    <td className="">{calories}</td>
                    <td>
                        <button className="bg-[#0BE58A] text-[#150B2B] font-medium mr-1 w-[115px] h-[38px] rounded-3xl">Preparing</button>
                    </td>
                </tr>
            </table>

        </div>
    );
};

export default Cooking;