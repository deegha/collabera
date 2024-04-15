"use client";
import { NavBar, Input } from "@/components";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const navLinks = [
  {
    href: "/2",
    name: "Showcase",
  },
  {
    href: "/3",
    name: "Docs",
  },
  {
    href: "/4",
    name: "Blog",
  },
  {
    href: "/5",
    name: "Analytics",
  },
  {
    href: "/6",
    name: "Tmeplates",
  },
  {
    href: "/7",
    name: "Enterprise",
  },
];

export default function HeaderSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <NavBar navLinks={navLinks} />

        <Input
          placeHolder="Search documentation..."
          onTextChange={(value: string) => console.log(value)}
          name="search"
        />
      </div>
      <div className={styles.mobileContainer}>
        <div className={styles.mobileHeader}>
          <div>AEON</div>
          <div className={styles.mobileRightIconset}>
            {showSearch ? (
              <Input
                placeHolder="Search documentation..."
                onTextChange={(value: string) => console.log(value)}
                name="search"
              />
            ) : (
              <div onClick={() => setShowSearch(true)}>
                <FontAwesomeIcon icon={faMagnifyingGlass} width={15} />
              </div>
            )}

            <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <FontAwesomeIcon
                icon={!isMenuOpen ? faBars : faXmark}
                width={15}
              />
            </div>
          </div>
        </div>
        <div
          className={styles[isMenuOpen ? "mobileNavOpen" : "mobileNavClosed"]}
        >
          <NavBar navLinks={navLinks} />
        </div>
      </div>
    </>
  );
}
