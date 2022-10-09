/** Components */
import { Layout as Container } from "antd";
import { Outlet } from "react-router-dom";
import BottomBar from "./bottom-bar";
import Header from "./header";
import SelectLanguage from "./select-language";

/** Configs */
import STORAGE_KEY from "configs/storage";

/** Hooks */
import { useEffect, useState } from "react";

/** Styles */
import s from "./s.module.css";

/** Utils */
import cx from "classnames";
import { get } from "utils/storage";

export default function Layout() {
  const [isLanguageSet, setIsLanguageSet] = useState(!!get(STORAGE_KEY.language));

  useEffect(() => {
    function localStorageListener() {
      setIsLanguageSet(!!get(STORAGE_KEY.language));
    }

    window.addEventListener("storage", localStorageListener);
    return () => {
      window.removeEventListener("storage", localStorageListener)
    }
  }, []);

  if (!isLanguageSet) {
    return (
      <Container className={cx(s.container, s.center)}>
        <SelectLanguage />
      </Container>  
    );
  }

  return (
    <Container className={s.container}>
      <Header />
      <Container.Content>
        <Outlet />
      </Container.Content>
      <BottomBar />
    </Container>
  );
}
