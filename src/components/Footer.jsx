export default function Footer(){
    return(
        <div className="max-w-[1720px] flex flex-row justify-between items-center font-[Poppins] mx-[80px] my-[24px] relative ">
            <div><p className="text-neutral-500">Lala's Expense Tracker</p></div>
            <div className="">
                <ul className="flex flex-row text-neutral-500 gap-x-[16px] items-center">
                    <li className="hover:text-neutral-700 cursor-pointer"><img src="images/fb-icon.png" alt="facebook-icon" /></li>
                    <li className="hover:text-neutral-700 cursor-pointer"><img src="images/ln-icon.png" alt="linkedIn-icon" /></li>
                    <li className="hover:text-neutral-700 cursor-pointer"><img src="images/yt-icon.png" alt="youtube-icon" /></li>
                    <li className="hover:text-neutral-700 cursor-pointer"><img src="images/ig-icon.png" alt="instagram-icon" /></li>
                </ul>
            </div>
        </div>
    )
}