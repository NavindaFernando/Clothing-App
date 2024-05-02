import bg_login from "../../assets/images/home_bg.png";
import nextIcon from "../../assets/images/next_icon.png";
import CompanyInfoText from "../(components)/(Footer)/CompanyInfoText";
import Image from "next/image";
import TextCategory from "../(components)/(Category)/TextCategory";
import Button from "../(components)/(Button)/Button";
import Link from "next/link";
import CategoryBodyContent from "../(components)/(BodyContent)/CategoryBodyContent";
// import HomeNavbar from "../(components)/(Navbar)/HomeNavbar";

function page() {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen w-full"
        style={{ backgroundImage: `url(${bg_login.src})` }}
      >
        {/* <HomeNavbar /> */}
        <div className="flex justify-center items-center h-screen w-full absolute top-0">
          <div className="py-10 px-14 rounded-3xl text-center relative max-md:w-full max-sm:px-10">
            <h2 className="text-[2rem] font-bold pb-4 max-sm:text-3xl">
              Where Fashion Dreams Take Flight
            </h2>
            <div className="bg-[#f4f4f494] flex flex-row justify-center items-center gap-4 rounded-full pr-2 [box-shadow:0_10px_25px_rgba(0,0,0,0.1)]">
              <input
                type="text"
                placeholder="What are you looking for ?"
                className={`w-full py-4 px-5 bg-transparent h-h-100 rounded-full max-sm:w-full`}
              />
              <Button btnWidth="w-40" btnName="Search" btnType="button" />
            </div>

            <div className="flex">
              <CategoryBodyContent>
                <div className="max-w-full w-[28.9rem] px-2 py-5 flex justify-start items-center gap-4 max-sm:py-3">
                  <TextCategory
                    categoryName="Clothes"
                    categoryBgColor="bg-[#f4f4f494]"
                    categoryBoxShadow="[box-shadow:0_5px_15px_rgba(0,0,0,0.1)]"
                  />
                  <TextCategory
                    categoryName="Shoes"
                    categoryBgColor="bg-[#f4f4f494]"
                    categoryBoxShadow="[box-shadow:0_5px_15px_rgba(0,0,0,0.1)]"
                  />
                  <TextCategory
                    categoryName="Jewelry"
                    categoryBgColor="bg-[#f4f4f494]"
                    categoryBoxShadow="[box-shadow:0_5px_15px_rgba(0,0,0,0.1)]"
                  />
                  <TextCategory
                    categoryName="Clothes"
                    categoryBgColor="bg-[#f4f4f494]"
                    categoryBoxShadow="[box-shadow:0_5px_15px_rgba(0,0,0,0.1)]"
                  />
                  <TextCategory
                    categoryName="Shoes"
                    categoryBgColor="bg-[#f4f4f494]"
                    categoryBoxShadow="[box-shadow:0_5px_15px_rgba(0,0,0,0.1)]"
                  />
                  <TextCategory
                    categoryName="Jewelry"
                    categoryBgColor="bg-[#f4f4f494]"
                    categoryBoxShadow="[box-shadow:0_5px_15px_rgba(0,0,0,0.1)]"
                  />
                </div>
              </CategoryBodyContent>

              <div className="max-w-full w-fit px-4 py-3 flex justify-start items-center gap-4 max-sm:hidden max-sm:py-3">
                <Link href="/">
                  <div className="relative w-[110px] h-[44px] px-10 py-2 bg-[#f4f4f494] text-[#9B9B9B] rounded-full cursor-pointer [box-shadow:0_5px_15px_rgba(0,0,0,0.1)]">
                    <Image
                      src={nextIcon}
                      width={28}
                      height={28}
                      className="animate-move_right"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <CompanyInfoText />
      </div>
    </>
  );
}

export default page;
