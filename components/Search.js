import React from 'react'
import {MdOutlineShortText} from "react-icons/md"

function Search({search,setSearch}) {
  return (
    <div className="rounded-full overflow-hidden border-2 border-[#303030] p-1.5 max-w-[1150px] bg-[#1a1a1a] px-5 pr-8 flex items-center">
        <div className="rounded-full border-2 h-4 w-4 flex-shrink-0 animate-pulse"/>
        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-[#1a1a1a] text-white border-none lg:w-full focus:ring-0 outline-none placeholder-[#fafafa] text-xs"
            placeholder="Search..."
        />
        <div className="flex items-center divide-dotted divide-x-2 divide-[#333] ml-auto">
            <div className="flex space-x-2 pr-5">
                <button className="tag">Minimal</button>
                <button className="tag">House</button>
                <button className="tag">Extras</button>
            </div>
            <div className="flex items-center space-x-1.5 text-[#cecece] pl-4">
                <MdOutlineShortText className="text-2xl animate-pulse"/>
                <span className="font-medium text-xs">Filters</span>
            </div>
        </div>
    </div>
  )
}

export default Search