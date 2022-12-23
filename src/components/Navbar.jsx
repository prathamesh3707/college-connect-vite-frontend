import React, { useState,useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user,setUser]=useState(JSON.parse(localStorage.getItem("UserToken")));
  
  const handleLogout=()=>{
    localStorage.removeItem("UserToken")
    location.reload();
  }
  useEffect(() => {
   setUser(JSON.parse(localStorage.getItem("UserToken")));
  
  }, [])

 
  return (
    <div className="shadow-lg shadow-cyan-500/50">
      <nav className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">

                <Link to="/profile">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXW9Ec6ddh98_pjTzSP6VN2ltVVEVOdKQHFw&usqp=CAU"
                    alt="Workflow"
                  />
                </Link>
              </div>
              <div className="hidden w-full md:flex justify-between items-center">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link to="/">
                    <a
                      href="#"
                      className=" hover:bg-blue-400 text-white px-3 py-2 rounded-md text-md font-medium"
                    >
                      Home
                    </a>
                  </Link>

                  <Link to="/marketplace">
                    <a
                      href="#"
                      className="text-white hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    >
                      Market Place
                    </a>
                  </Link>
                  <Link to="/allresources">
                    <a
                      href="#"
                      className="text-white hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    >
                      Resources
                    </a>
                  </Link>
                  <Link to="discussions">
                    <a
                      href="#"
                      className="text-white hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    >
                      Discussions
                    </a>
                  </Link>
                </div>
                {!user?null:( <div className="ml-32 flex items-center">
                  
                  <img className="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={user.photo} />

                <div className="px-2 text-white font-semibold">{user.name}</div>
                <button className="px-2 text-white font-semibold border-2 border-black" 
                onClick={handleLogout}
                >Logout</button>
              </div>)}
               
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/home">
                  <a
                    href="#"
                    className="hover:bg-blue-400 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Home
                  </a>
                </Link>
                <Link to="/marketplace">
                  <a
                    href="#"
                    className="hover:bg-blue-400 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Marketplace
                  </a>
                </Link>
                <Link to="/allresources">
                  <a
                    href="#"
                    className="hover:bg-blue-400 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Resources
                  </a>
                </Link>

                <Link to="/discussions">
                  <a
                    href="#"
                    className="hover:bg-blue-400 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Discussions
                  </a>
                </Link>
                <div >
                {!user?null:( <div className="flex items-center">
                  
                  <img className="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={user.photo} />

                <div className="px-2 text-white font-semibold">{user.name}</div>
                <button className="px-2 text-white font-semibold border-2 border-black" 
                onClick={handleLogout}
                >Logout</button>
              </div>)}
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
