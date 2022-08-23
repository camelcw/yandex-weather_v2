import { Image } from "antd";
import { Footer } from "antd/lib/layout/layout";
import React, { useContext } from "react";
import { Context } from "../../../pages/_app";
import { Store } from "../../../store/store";
import theme from "../../../styles/Theme.module.scss";

const MainFooter = () => {
  const { active } = (useContext(Context) as Store).Theme;

  return (
    <div className={active ? theme.lightTheme : theme.darkTheme}>
      <Footer
        style={{ textAlign: "center" }}
        className={active ? theme.lightTheme : theme.darkTheme}
      >
        <Image
          width={430}
          height={300}
          src="/537839_66.png"
          alt="advertisement"
        />
      </Footer>
    </div>
  );
};

export default MainFooter;
