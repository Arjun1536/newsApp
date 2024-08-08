import React, { Component } from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import logo_img from "../images/logo_img.png"

// import { Link } from 'react-router-dom'

// export class NavBar extends Component {
//   static propTypes = {

//   }

const NavBar = () => {

const [isOpen, setIsOpen] = useState(false);

  

const handleMenu = ()=>{
  console.log("click icon")
setIsOpen(!isOpen);
}


  return (
    <div>
      <header className='bg-pink-100 shadow-md m-0'>
        
        <nav className='p-3 flex justify-between items-center '>
          <div className='flex gap-2 items-center'>
            <img className='object-cover max-w-12 max-h-14' src={logo_img} alt="" />
            <span className='font-bold '>News App</span>
          </div>

          <div className='hidden md:flex gap-12  '>
            <a href="" className='font-medium rounded-md   hover:bg-gray-400 hover:text-white px-3 py-2'>Home</a>
            <a href="" className='font-medium rounded-md   hover:bg-gray-400 hover:text-white px-3 py-2'>About</a>
            <a href=""className='font-medium rounded-md   hover:bg-gray-400 hover:text-white px-3 py-2'>Contact Us</a>
            <a href=""className='font-medium  bg-gray-900 text-white rounded-md px-3 py-2  hover:bg-gray-700 hover:text-white'>Login</a>
          </div>

          <div className='p-2 md:hidden' onClick={handleMenu}>
          <span>{isOpen ?'❌':'☰'}</span>
          </div>
          </nav>
        {/* mobile size code */}
        {isOpen && (
        <div className='  md:hidden fixed bg-green-400 inset-0 '>
            <nav className='flex justify-between items-center' >
            <a className='flex gap-2  items-center p-3'>
            <img className='object-cover max-w-12 max-h-14' src={logo_img} alt="" />
            <span className='font-bold '>News App</span>
            </a>
              <div className= 'p-2 md:hidden'  onClick={handleMenu}>
              <span>❌</span>
              </div>
            </nav>
            <div className='mt-6'>
              <a className='font-medium p-3 m-3 rounded-md hover:bg-gray-100 block' href="">Home</a>
              <a className='font-medium p-3 m-3 rounded-md hover:bg-gray-100 block' href="">About</a>
              <a className='font-medium p-3 m-3 rounded-md hover:bg-gray-100 block' href="">Contact Us</a>
              <a className='font-medium p-3 m-3 rounded-md hover:bg-gray-100 block' href="">Login</a>
            </div>
        </div>
        )}

      </header>
    </div>
  )


}

export default NavBar



// import React, { useState } from 'react';
// //import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
    
//       <nav className="bg-gray-900 p-4 flex justify-between items-center">
//         <div className="text-white text-xl font-bold">Logo</div>
//         <div className="flex items-center space-x-4 md:hidden">
//           <button onClick={toggleMenu} className="text-gray-300 focus:outline-none">
//             {isOpen ? (
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>
//         <div className={`md:flex items-center space-x-4 ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
//           <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
//             {/* <Link to="/science" className="text-gray-300 hover:text-white py-2 md:py-0">Science</Link>
//             <Link to="/sports" className="text-gray-300 hover:text-white py-2 md:py-0">Sports</Link>
//             <Link to="/politics" className="text-gray-300 hover:text-white py-2 md:py-0">Politics</Link>
//             <Link to="/business" className="text-gray-300 hover:text-white py-2 md:py-0">Business</Link> */}
//           </div>
//           <input
//             type="text"
//             placeholder="Search"
//             className="p-2 rounded bg-gray-800 text-gray-300 focus:outline-none focus:bg-gray-700 mt-2 md:mt-0"
//           />
//           <div className="flex items-center space-x-4 mt-2 md:mt-0">
//             <button className="text-gray-300 hover:text-white">Login</button>
//             <button className="text-gray-300 hover:text-white">Logout</button>
//           </div>
//         </div>
//       </nav>

      
//   );
// };

// export default Navbar;

