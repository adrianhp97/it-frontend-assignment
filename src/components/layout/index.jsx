/** Components */
import { LoadingOutlined } from '@ant-design/icons';
import { Layout as Container, Spin } from "antd";
import { Outlet, useNavigation } from "react-router-dom";
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

const antIcon = <LoadingOutlined style={{ fontSize: 56 }} spin />;

export default function Layout() {
  const [isLanguageSet, setIsLanguageSet] = useState(!!get(STORAGE_KEY.language));
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

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
        {isLoading ? <Spin indicator={antIcon} size="large" /> : <SelectLanguage />}
      </Container>
    );
  }

  return (
    <Container className={s.container}>
      <Header />
      <Container.Content className={cx(s.content, isLoading && s.center)}>
        {isLoading ? <Spin indicator={antIcon} size="large" /> : (
          <div className={s.contentWrapper}>
            <Outlet />
          </div>
        )}
      </Container.Content>
    </Container>
  );
}
