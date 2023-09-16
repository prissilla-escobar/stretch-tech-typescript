import "./Header.css";
import Search from "../Search/Search";
import nbaLogo from "../../Assets/NBA-logo-png.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

type HeaderProps = {
  setSearchTerm: (term: string) => void;
};

const Header = ({ setSearchTerm }: HeaderProps) => {
  const { pathname } = useLocation();

  const isHomePage = pathname === "/";

  useEffect(() => {
    if (isHomePage) {
      setSearchTerm("");
    }
  }, [isHomePage, setSearchTerm]);

  return (
    <header>
      <div className="page-name">
        <Link to={"/"}>
          <h1>ROSTERWATCH</h1>
        </Link>
        <img
          className="nba-logo"
          src={nbaLogo}
          alt="a silhouette of a man running and bouncing a basketball with NBA next to him"
        />
      </div>
      {isHomePage && <Search setSearchTerm={setSearchTerm} />}
    </header>
  );
};

export default Header;
