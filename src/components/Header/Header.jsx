import { CiSearch } from "react-icons/ci";
import { GiTigerHead } from "react-icons/gi";
import banner from '../../assets/images/banner.jpg'

const Header = () => {
    return (
        <header className="max-w-[1320px] mx-auto">
            <nav className="flex flex-col md:flex-row lg:flex-row justify-evenly mt-5 items-center">
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
            </nav>
            <div>
                <div style={{ backgroundImage: `url(${banner})` }} className="bg-cover w-[1320px] h-[600px] pt-20 mt-5">
                    <div className="w-[933px] h-[341px] mx-auto text-center mt-12">
                        <h1 className="text-[52px] font-bold text-white">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="text-lg text-white">Learn to master basic cooking.Cook 500+ dishes to become an exceptionally well world-class chef.</p>
                        <div className="w-[412px] h-[65px] mx-auto mt-5">
                            <button className="w-[187px] h-[65px] text-[#150B2B] font-semibold text-[20px] bg-[#0BE58A] rounded-full mr-3">Explore Now</button>
                            <button className="w-[187px] h-[65px] text-white border border-white rounded-full font-semibold text-[20px] ml-3">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[823px] h-[126px] mx-auto text-center mt-5">
                <h3 className="text-[#150B2B] text-[40px] font-semibold">Our Recipes</h3>
                <p className="text-[#150B2B99] mt-5">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque.</p>
            </div>
        </header>
    );
};

export default Header;