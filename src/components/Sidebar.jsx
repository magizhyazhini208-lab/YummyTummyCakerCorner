import { useEffect, useState } from "react"
function Sidebar() {
    const [isOpen,setIsOpen]=useState(false);
     const clsName = isOpen ? "openSlideBar" : "sidebar";
    function toggle()
    {
        setIsOpen((pre)=>!pre);
    }
  return (
    <>
      <button onClick={toggle} className="toggleBtn">
        {isOpen ? '❌' : '🔛'}
      </button>
        <menu>
            <div className={clsName}>
                <ul>
                    <li>menu</li>
                    <li>hello</li>
                </ul>

            </div>
        </menu>
    </>
  )
}

export default Sidebar
