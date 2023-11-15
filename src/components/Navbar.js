export default function Navbar(){
    return (
        <div className="navbar container">
            <a href="#!" className="logo">Re<span>cip</span>eSha<span>rin</span>g</a>
            <div className="nav-links">
                <a href="#!">Login</a>
                <a href="#!">About Us</a>
            </div>

        </div>
    )
}

// export default function Navbar({ onLoginClick }) {
//     return (
//       <div className="navbar container">
//         <a href="#!" className="logo">
//           Re<span>cip</span>eSha<span>rin</span>g
//         </a>
//         <div className="nav-links">
//           <a href="#!" onClick={onLoginClick}>
//             Login
//           </a>
//           <a href="#!">About Us</a>
//         </div>
//       </div>
//     );
//   }
  
// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Navbar({ onLoginClick }) {
//   return (
//     <div className="navbar container">
//       <Link to="/" className="logo">
//         Re<span>cip</span>eSha<span>rin</span>g
//       </Link>
//       <div className="nav-links">
//         <Link to="/login" onClick={onLoginClick}>
//           Login
//         </Link>
//         <Link to="/about">About Us</Link>
//       </div>
//     </div>
//   );
// }

