import Link from "../core/Link";

import NavBar from "./Navbar";
export default function TopBar({ data }) {
  return (
    <header id="header">
      <div className="container d-none d-lg-block">
        <div className="row">
          <div className="col-sm-12 overflow ">
            <div className="social-icons float-end">
              <ul className="nav nav-pills ">
                {data.linkdata.map((items, index) => {
                  return (
                    <li>
                      <Link to={items.to}>
                        <i className={items.class}></i>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <NavBar />
    </header>
  );
}
