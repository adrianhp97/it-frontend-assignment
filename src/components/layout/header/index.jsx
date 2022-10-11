/** Components */
import { Layout, Select } from "antd";

/** Configs */
import STORAGE_KEY from "configs/storage";

/** Hooks */
import { useStorage } from "hooks/useStorage";

/** Utils */
import { set } from "utils/storage";
import { useLoaderData } from "react-router-dom";

/** Styles */
import s from "./s.module.css";

const { Option } = Select;

export default function Header() {
  const { languages } = useLoaderData();
  const storage = useStorage();

  return (
    <Layout.Header className={s.container}>
      <Select
        style={{ width: 200 }}
        bordered={false}
        value={storage[STORAGE_KEY.language]}
        onChange={(value) => {
          console.log(value)
          set(STORAGE_KEY.language, value)
        }}
      >
        {
          languages.map(({ code, name, flag }) => (
            <Option className={s.option} value={code} key={code}>
              <img src={flag} alt={name} />
              <span>{name}</span>
            </Option>
          ))
        }
      </Select>
    </Layout.Header>
  );
}
