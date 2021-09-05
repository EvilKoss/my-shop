import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

import firebase from "firebase/app";
import "firebase/auth";

function Navbar() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  },[])
  return (
    <div>
      <div className={styles.nav}>
        <div className={styles.navIcon}>
          <img
            alt="icon"
            src="https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667"
          />
        </div>
        <div className={styles.linksContainer}>
          <NavLink
            activeClassName={styles.activeNavLink}
            className={styles.navLink}
            exact
            to="/"
          >
            Shop
          </NavLink>
          <NavLink
            activeClassName={styles.activeNavLink}
            className={styles.navLink}
            to="/cart"
          >
            Cart
          </NavLink>
          <NavLink
            activeClassName={styles.activeNavLink}
            className={styles.navLink}
            to="/about"
          >
            About
          </NavLink>
          {!user ? (
            <NavLink
              activeClassName={styles.activeNavLink}
              className={styles.navLink}
              to="/login"
            >
              Login
            </NavLink>
          ) : (
            <button
              onClick={() => {
                let da = window.confirm("are you sure?");
                if (da) {
                  firebase
                    .auth()
                    .signOut()
                    .then(() => {
                      alert("da");
                    })
                    .catch((error) => {
                      alert("error");
                    });
                }
              }}
            >Log out</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
