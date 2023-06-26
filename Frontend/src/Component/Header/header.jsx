import React, { useEffect, useRef } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  const nav_link = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/about",
      display: "About",
    },
    {
      path: "/tours",
      display: "Tours",
    },
    {
      path: "/hotels",
      display: "Hotels",
    },
    {
      path: "/contact",
      display: "Contact",
    },
  ];

  const headerRef = useRef(null);

  const stickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    stickyHeader();
    return window.removeEventListener("scroll", stickyHeader);
  });
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            {/* Start Logo */}
            <div className="logo">
              <img src="../assets/images/logo3.jpg" alt="" />
            </div>
            {/* End Logo */}

            {/* Start Menu */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5 me-5 ">
                {nav_link.map((item, index) => {
                  return (
                    <li className="nav_item" key={index}>
                      <NavLink
                        to={item.path}
                        className={(navClass) => {
                          return navClass.isActive ? "active_link" : " ";
                        }}
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* End Menu */}

            {/* Start Right Menu */}
            <div className="nav_right d-flex align-items-center gap-4 mx-5 ">
              <div className="nav_btns d-flex align-items-center gap-4 mx-5">
                <Button className=" btn secondary__btn" variant="outline-info">
                  <Link to="/login"> Login</Link>
                </Button>

                <Button className=" btn primary__btn" variant="danger">
                  <Link to="/register"> Register</Link>
                </Button>
              </div>
            </div>
            {/* End Right Menu */}

            <span className="mobile_menu">
              <i class="fa-solid fa-bars"></i>
            </span>
          </div>
        </Row>
      </Container>
    </header>
  );
}