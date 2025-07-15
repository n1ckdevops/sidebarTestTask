/** @format */

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";
import {
  SidebarContainer,
  SidebarHeader,
  LogoText,
  ToggleButton,
  MenuSection,
  MenuItem,
  LogoImg,
  MenuItemText,
  ThemeToggle,
  IconWrapper,
  SidebarFooter,
} from "./Sidebar.styled";

const routes = [
  { title: "Home", icon: "fas-solid fa-house", path: "/" },
  { title: "Sales", icon: "chart-line", path: "/sales" },
  { title: "Costs", icon: "chart-column", path: "/costs" },
  { title: "Payments", icon: "wallet", path: "/payments" },
  { title: "Finances", icon: "chart-pie", path: "/finances" },
  { title: "Messages", icon: "envelope", path: "/messages" },
];

const bottomRoutes = [
  { title: "Settings", icon: "sliders", path: "/settings" },
  { title: "Support", icon: "phone-volume", path: "/support" },
];

const Sidebar = ({ themeName, setTheme }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isActive, setIsActive] = useState(routes[0].path);

  const goToRoute = (path) => {
    console.log(`going to "${path}"`);
  };

  const toggleSidebar = () => {
    setIsOpened((v) => !v);
  };

  return (
    <SidebarContainer isOpened={isOpened}>
      <SidebarHeader>
        <LogoImg src={logo} alt="TensorFlow logo" />
        <LogoText isOpened={isOpened}>TensorFlow</LogoText>
        <ToggleButton isOpened={isOpened} onClick={toggleSidebar}>
          <FontAwesomeIcon icon={isOpened ? "angle-left" : "angle-right"} />
        </ToggleButton>
      </SidebarHeader>
      <MenuSection isOpened={isOpened}>
        {routes.map((route) => (
          <MenuItem
            isOpened={isOpened}
            key={route.title}
            active={isActive === route.path}
            onClick={() => {
              setIsActive(route.path);
              goToRoute(route.path);
            }}
          >
            <FontAwesomeIcon icon={route.icon} />
            <MenuItemText isOpened={isOpened}>{route.title}</MenuItemText>
          </MenuItem>
        ))}
      </MenuSection>
      <MenuSection isOpened={isOpened}>
        {bottomRoutes.map((route) => (
          <MenuItem
            isOpened={isOpened}
            key={route.title}
            active={isActive === route.path}
            onClick={() => {
              setIsActive(route.path);
              goToRoute(route.path);
            }}
          >
            <FontAwesomeIcon icon={route.icon} />
            <MenuItemText isOpened={isOpened}>{route.title}</MenuItemText>
          </MenuItem>
        ))}
      </MenuSection>
      <SidebarFooter>
        <ThemeToggle
          onClick={() => setTheme(themeName === "dark" ? "light" : "dark")}
        >
          <IconWrapper>
            <FontAwesomeIcon
              icon={["fas", themeName === "dark" ? "sun" : "moon"]}
            />
          </IconWrapper>
          <MenuItemText isOpened={isOpened}>
            {themeName === "dark" ? "Light" : "Dark"}
          </MenuItemText>
        </ThemeToggle>
      </SidebarFooter>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  color: PropTypes.string,
};

export default Sidebar;
