import Cooking from "../Cooking/Cooking";

const Cookings = ({ cookings }) => {
    return (
        <div className='w-[514px] h-[685px] text-center border border-[#28282833] rounded-2xl overflow-y-auto p-5'>
            <h2 className='text-[24px] font-semibold text-neutral-900 border-b border-[#28282826] pb-4'>Want to cook: {cookings.length}</h2>
            <table className="mt-3">
                <thead>
                    <tr className="font-medium text-neutral-600">
                        <th className="px-7 py-2">Name</th>
                        <th className="px-7 py-2">Time</th>
                        <th className="px-7 py-2">Calories</th>
                    </tr>
                </thead>
            </table>
            {
                cookings.map(cooking => <Cooking cooking={cooking}></Cooking>)
            }
        </div>
    );
};

export default Cookings;