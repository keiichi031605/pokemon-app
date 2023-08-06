import * as React from "react";

export default function Navigation() {
  const navItems = [
    { label: 'Home', url: '' },
    { label: 'Pokemon', url: '' },
    { label: 'Analysis', url: '' }
  ]

  return (
    <>
      {navItems.map((navItem, i) => {
        return (
          <a
            className='site-nav-item'
            href={navItem.url}
            key={i}
            target="_blank"
            rel="noopener noreferrer"
          >
            {navItem.label}
          </a>
        )
      })}
    </>
  );
}