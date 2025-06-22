import { CiSearch } from "react-icons/ci";
import { GiTigerHead } from "react-icons/gi";

const Header = () => {
    return (
        <nav>
            <div className="flex flex-col md:flex-row lg:flex-row justify-evenly max-w-[1320px] mx-auto mt-5 items-center">
                <div>
                    <h3 className="text-3xl text-[#150B2B]">Recipe Calories</h3>
                </div>
                <div>
                    <ul className="flex justify-around gap-5 items-center">
                        <li><a className="text-[#150B2BB3]" href="">Home</a></li>
                        <li><a className="text-[#150B2BB3]" href="">Recipes</a></li>
                        <li><a className="text-[#150B2BB3]" href="">About</a></li>
                        <li><a className="text-[#150B2BB3]" href="">Search</a></li>
                    </ul>
                </div>
                <div className="mb-3 flex items-center gap-4">
                    <div>
                        <CiSearch className="relative left-3 top-8"></CiSearch>
                        <input className="w-[240px] h-[48px] pl-10 placeholder-[#150B2BB3] bg-[#150B2B0D] rounded-2xl" type="text" name="" id="" placeholder="Search" />
                    </div>
                    <div className="bg-[#0BE58A] w-[48px] h-[48px] pl-3 rounded-full mt-4">
                        <GiTigerHead className="w-[24px] h-[24px] mt-3"></GiTigerHead>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;