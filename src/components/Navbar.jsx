import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

export default function Navbar(){
    const location = useLocation();

    return(
        <div className="max-w-[1720px] flex flex-row justify-between items-center mx-[80px] my-[48px]  font-[Poppins]">
            <div><p className="text-neutral-500">Expense Tracker</p></div>
            <div className="">
                <ul className="flex flex-row text-neutral-500 gap-x-[48px]">
                    <li className={`hover:text-neutral-700 cursor-pointer duration-500 ${(location.pathname === "/") ? 'text-neutral-800' : ''}`}><Link to="/">Home</Link></li>
                    <li className={`hover:text-neutral-700 cursor-pointer duration-500 ${(location.pathname === "/expenses") ? 'text-neutral-800' : ''}`}><Link to="/expenses">Expenses</Link></li>
                </ul>
            </div>
        </div>
    )
}