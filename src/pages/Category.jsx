import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { TbBowlChopsticks } from "react-icons/tb";
import { GiFullPizza } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiHamburger } from "react-icons/gi";
export const Categories = [
    {
        id: 1,
        name: "All",
        image: <TiThSmallOutline className="text-green-600 w-[60px] h-[60px]" />
    },
    {
        id: 2,
        name: "Breakfast",
        image: <MdOutlineFreeBreakfast className="text-green-600 w-[60px] h-[60px]"  />
    },
    {
        id: 3,
        name: "Soups",
        image: <TbSoup className="text-green-600 w-[60px] h-[60px]"  />
    },
    {
        id: 4,
        name: "Pasta",
        image: <TbBowlChopsticks  className="text-green-600 w-[60px] h-[60px]" />
    },
    {
        id: 5,
        name: "Main_course",
        image: <MdOutlineFoodBank  className="text-green-600 w-[60px] h-[60px]" />
    },
    {
        id: 6,
        name: "Pizza",
        image: <GiFullPizza className="text-green-600 w-[60px] h-[60px]"  />
    },
    {
        id: 7,
        name: "Burger",
        image: <GiHamburger className="text-green-600 w-[60px] h-[60px]"  />
    },
]