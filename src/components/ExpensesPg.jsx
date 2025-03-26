export default function ExpensesPg(){
    const month = new Date().getMonth();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentMonth = monthNames[month];
  
    return(
        <div className="max-w-[1720px] mx-[80px] my-[48px] font-[Poppins]">
            <h2 className="text-4xl font-semibold my-[48px] 
            relative cursor-pointer inline
            before:absolute before:bottom-0
            before:left-0 before:bg-none
            before:w-0 before:h-[3px]
            before:transition-all hover:before:bg-pink-200 hover:before:w-full before:duration-400 before:rounded-xl
            ">{currentMonth}</h2>
            <div className="flex flex-row gap-x-[200px]">
                <div className="flex-1">
                    <p className="text-2xl font-semibold my-[48px]">Monthly Budget</p>
                    <ul className="flex flex-col gap-y-[160px]  text-neutral-600">
                        <li>This month’s budget: <span className="font-semibold">x</span></li>
                        <li>Spent this month: <span className="font-semibold">y</span></li>
                        <li>Left: <span className="font-semibold">z</span></li>
                    </ul>
                </div>
                <div className="flex-1">
                    <p className="text-2xl font-semibold my-[48px]">All Expenses</p>
                    <ul className="flex flex-col gap-y-[80px] text-neutral-600">
                        <li className="border-b-[3px] border-b-pink-200 pb-[64px] cursor-pointer">Rent</li>
                        <li className="border-b-[3px] border-b-pink-200 pb-[64px] cursor-pointer">Food</li>
                        <li className="border-b-[3px] border-b-pink-200 pb-[64px] cursor-pointer">Transport</li>
                        <li className="border-b-[3px] border-b-pink-200 pb-[64px] cursor-pointer">Self-care and Clothing</li>
                        <li className="border-b-[3px] border-b-pink-200 pb-[64px] cursor-pointer">Hobbies and Activities</li>
                        <li className="border-b-[3px] border-b-pink-200 pb-[64px] cursor-pointer">Other</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}