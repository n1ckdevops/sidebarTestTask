/** @format */

import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: ${({ isOpened }) => (isOpened ? "220px" : "80px")};
  background: ${({ theme }) => theme.sidebarBg};
  color: ${({ theme }) => theme.text};

  min-height: 97vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  transition: width 0.3s, background 0.3s;
  border-radius: 12px;
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: ${({ isOpened }) => (isOpened ? "space-between" : "center")};
  padding: 25px 0px 16px 22px;
`;

export const LogoImg = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
`;

export const MenuSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 12px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 19px;
  border-radius: 18px;
  cursor: pointer;
  background: ${({ active, theme }) =>
    active ? theme.sidebarActive : "transparent"};
  color: ${({ active, theme }) => (active ? theme.textActive : theme.text)};
  &:hover {
    background: ${({ theme }) => theme.sidebarHover};
    color: ${({ theme }) => theme.textHover};
  }
  transition: background 0.2s, color 0.2s;
`;

export const MenuItemText = styled.span`
  margin-left: 12px;
  transition: opacity 0.2s, width 0.2s;
  opacity: ${({ isOpened }) => (isOpened ? 1 : 0)};
  width: ${({ isOpened }) => (isOpened ? "auto" : "0")};
  overflow: hidden;
  white-space: nowrap;
`;

export const ToggleButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: ${({ isOpened }) => (isOpened ? "-15px" : "-40px")};
  background: ${({ isOpened, theme }) =>
    isOpened ? theme.buttonActive : theme.buttonBg};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: ${({ theme }) => theme.sidebarHover};
  }
`;

export const LogoText = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.logo};
  margin-left: 12px;
  flex: 1;
  transition: opacity 0.2s, width 0.2s;
  opacity: ${({ isOpened }) => (isOpened ? 1 : 0)};
  width: ${({ isOpened }) => (isOpened ? "auto" : "0")};
  overflow: hidden;
  white-space: nowrap;
`;
