// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import instaLogo from "../../components/assets/navbar/NavbarInstaLogo.png";
import logoLight from "../../components/assets/navbar/NavbarlogoWhite.png"; // visible이 true일 때 사용할 이미지
import logoDark from "../../components/assets/navbar/NavbarlogoDark.png"; // visible이 false일 때 사용할 이미지

import {
  NavContainer,
  NavItem,
  LogoItem,
  NavWrapper,
  UsersBox,
  InstaLogo,
  Logo,
  DropdownWrapper,
  SubmenuColumn,
  NavBox,
  DropdownMenuWrapper,
  SubmenuWrapper,
  SubmenuRow,
} from "./Navbar.style"; // styled-components로 정의된 스타일 임포트

const Navbar = () => {
  const navigate = useNavigate();

  const menuLst = ["소개", "가이드", "연합", "NEWS", "캠코더 맵", "문의"];
  const submenuLst = [
    ["가치관", "BM • Campaign"],
    ["사용방법"],
    ["동맹연합"],
    ["기사"],
    ["학교별 맵"],
    ["FAQ"],
  ];
  const [showDropdown, setShowDropdown] = useState(false); // 드롭다운 표시 상태

  // 각 서브메뉴와 연결된 경로
  const submenuLinks = [
    ["/value", "/bm"],
    ["/usageInfo"],
    ["/union"],
    ["/articles"],
    ["/univMap"],
    ["/faq"],
  ];

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(true);
  };
  const handleMenuClick = (link) => {
    navigate(link); // 클릭 시 해당 링크로 이동
  };

  const handleLogoClick = () => {
    navigate("/"); // 로고 클릭 시 홈 화면으로 이동
  };

  return (
    <NavWrapper visible={showDropdown} onMouseLeave={() => handleMouseLeave()}>
      <NavContainer>
        <LogoItem>
          <Logo
            src={showDropdown ? logoLight : logoDark}
            alt="Logo"
            onClick={() => handleLogoClick()}
          />
        </LogoItem>
        <NavBox>
          {menuLst.map((menu, index) => (
            <NavItem
              visible={showDropdown}
              onMouseEnter={() => handleMouseEnter()}
              key={index}
            >
              <p onClick={() => handleMenuClick(submenuLinks[index][0])}>
                {menu}
              </p>
            </NavItem>
          ))}
        </NavBox>
        <UsersBox visible={showDropdown}>
          <p>로그인</p>
          <a>|</a>
          <p>회원가입</p>
          <a>|</a>
          <InstaLogo src={instaLogo} />
        </UsersBox>
      </NavContainer>

      {showDropdown && (
        <DropdownWrapper>
          <DropdownMenuWrapper>
            <SubmenuWrapper>
              {submenuLst.map((submenus, index) => (
                <SubmenuRow key={index}>
                  {submenus.map((submenu, subIndex) => (
                    <SubmenuColumn
                      key={`${index}-${subIndex}`}
                      onClick={() =>
                        handleMenuClick(submenuLinks[index][subIndex])
                      }
                    >
                      {submenu}
                    </SubmenuColumn>
                  ))}
                </SubmenuRow>
              ))}
            </SubmenuWrapper>
          </DropdownMenuWrapper>
        </DropdownWrapper>
      )}
    </NavWrapper>
  );
};

export default Navbar;
