"use client";

import { useState } from "react";
import { TopBar } from "./TopBar";
import { DesktopDrawer } from "./desktopDrawer/DesktopDrawer";
import { MobileDrawer } from "./mobileDrawer/MobileDrawer";
import MiddleBar from "./MiddleBar";
import { categoriesData } from "./categoriesData";

export const Menu = () => {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header>
      <TopBar />

      <MiddleBar
        mobileSearchOpen={mobileSearchOpen}
        setMobileSearchOpen={setMobileSearchOpen}
        setDrawerOpen={setDrawerOpen}
      />
      <DesktopDrawer categories={categoriesData} />
      <MobileDrawer
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        categories={categoriesData}
      />
    </header>
  );
};

export default Menu;