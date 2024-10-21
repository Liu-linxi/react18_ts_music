import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { NavWrapper } from "./styled";
import { NavLink } from "react-router-dom";
import { dicoverMenu } from "@/service/local-data";

interface IProps {
  children?: ReactNode;
}

const Navbar: FC<IProps> = () => {
  return (
    <NavWrapper>
      <div className="wrap-v1 nav">
        {dicoverMenu.map((item) => {
          return (
            <div className='item' key={item.title}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          );
        })}
      </div>
    </NavWrapper>
  );
};

export default memo(Navbar);
