import { ArrowDropDownCircle, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import "./navbar.scss";
import cinema from './cinema.jpeg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={cinema} alt="logo" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
         <img src="https://scontent.fktm1-1.fna.fbcdn.net/v/t1.6435-9/160317355_756575875286955_971551541033133443_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Uf5JeXTwj6UAX_nbb3l&_nc_ht=scontent.fktm1-1.fna&oh=00_AT_wjBzLONvuBYRoa8xuEJWb4stVi9wDjStLqINVCpKpZQ&oe=620E4A9D"></img>
          <div className="profile">
            <ArrowDropDownCircle className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
