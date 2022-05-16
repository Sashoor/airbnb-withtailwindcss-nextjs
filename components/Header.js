import Image from "next/image"
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UserIcon
} from '@heroicons/react/solid'
import { useState } from "react"






function Header() {
const [searchInput, setSearchInput] = useState("");
const [startDate, setStartDate] = useState(new Date())
const [endDate, setEndDate] = useState(new Date())
const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
}



    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
           {/* <link rel="stylesheet" href="https://unpkg.com/react-day-picker/lib/style.css"> */}
            {/* left-side */}

            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src="https://links.papareact.com/qd3"
                    layout='fill'
                    objectFit="contain" objectPosition="left"
                />
            </div>
            {/* Middle-side  search*/}
            <div className="flex md:border-2 rounded-full py-2 md:shadow-sm ">
                <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value) }
                className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-600" type="text" placeholder="Start your search" />
                <SearchIcon className="hidden md:inline h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
            </div>

            {/* Right-side */}

            <div className="flex space-x-4 items-center justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className="flex items-center border-2 rounded-full space-x-2 p-2">
                    <MenuIcon className="h-6 cursor-pointer" />
                    <UserCircleIcon className="h-6 cursor-pointer" />
                </div>
            </div>

            {searchInput && (
                <div>
                    <DateRangePicker 
                    ranges={[selectionRange]}

                    />
                </div>
            ) }
        </header>
    )
}

export default Header



