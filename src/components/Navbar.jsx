import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <div className="max-w-[1720px] flex flex-row justify-between items-center mx-[80px] my-[48px]  font-[Poppins]">
            <div><p className="text-neutral-500">Expense Tracker</p></div>
            <div className="">
                <ul className="flex flex-row text-neutral-500 gap-x-[48px]">
                    <li className="hover:text-neutral-700 cursor-pointer duration-500"><Link to="/">Home</Link></li>
                    <li className="hover:text-neutral-700 cursor-pointer duration-500"><Link to="/expenses">Expenses</Link></li>
                </ul>
            </div>
        </div>
    )
}