// components/Navbar.tsx

"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },

  {
    label: "Work",
    href: "/work",
    submenu: [
      { label: "Acting Reels", href: "/work/acting-videos" },
      { label: "Web Series", href: "/work/web-series" },
      { label: "Advertisements", href: "/work/advertisements" },
      { label: "Monologue", href: "/work/monologue" },
      
      
      
    ],
  },

  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  /* Scroll */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock body scroll */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  /* Close dropdown outside click */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setWorkOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav
        className={`${styles.navbar}
        ${scrolled ? styles.navbarScrolled : ""}
        ${menuOpen ? styles.navbarMenuOpen : ""}
      `}
      >
        <div className={styles.inner}>
          {/* LOGO */}
          <Link href="/" className={styles.logo}>
            <span className={styles.logoFirst}>NIKHIL</span>
            <span className={styles.logoLast}>VERMA</span>
          </Link>

          {/* DESKTOP */}
          <ul className={styles.links}>
            {NAV_LINKS.map((link) => (
              <li key={link.label} className={styles.item}>
                {!link.submenu ? (
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                ) : (
                  <div
                    className={styles.dropdown}
                    ref={dropdownRef}
                    onMouseEnter={() => setWorkOpen(true)}
                    onMouseLeave={() => setWorkOpen(false)}
                  >
                    <button
                      className={`${styles.link} ${styles.dropdownBtn}`}
                      onClick={() => setWorkOpen(!workOpen)}
                    >
                      {link.label}

                      <span
                        className={`${styles.arrow} ${
                          workOpen ? styles.arrowOpen : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>

                    <div
                      className={`${styles.dropdownMenu} ${
                        workOpen ? styles.dropdownOpen : ""
                      }`}
                    >
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={styles.dropdownItem}
                          onClick={() => setWorkOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}

            <li>
              <Link href="/contact" className={styles.cta}>
                Book Now
              </Link>
            </li>
          </ul>

          {/* HAMBURGER */}
          <button
            className={`${styles.hamburger} ${
              menuOpen ? styles.hamburgerOpen : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* MOBILE PANEL */}
      <div
        className={`${styles.mobilePanel} ${
          menuOpen ? styles.mobilePanelOpen : ""
        }`}
      >
        <div className={styles.mobileInner}>
          {NAV_LINKS.map((link) => (
            <div key={link.label} className={styles.mobileItem}>
              {!link.submenu ? (
                <Link
                  href={link.href}
                  className={styles.mobileLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <>
                  <p className={styles.mobileHeading}>Work</p>

                  <div className={styles.mobileSubmenu}>
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={styles.mobileSubLink}
                        onClick={() => setMenuOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}

          <Link
            href="/contact"
            className={styles.mobileCta}
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
}