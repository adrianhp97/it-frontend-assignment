/** Configs */
import STORAGE_KEY from "configs/storage";

/** Styles */
import s from "./s.module.css";

/** Utils */
import { set } from "utils/storage";

/** Utils */
import { useLoaderData } from "react-router-dom";

export default function SelectLanguage() {
  const { languages } = useLoaderData();

  return (
    <div className={s.languageWrapper}>
      {
        languages.map(({ code, flag, id, name, name_en: nameEn }) => (
          <div
            key={id}
            className={s.box}
            onClick={() => set(STORAGE_KEY.language, code)}
          >
            <img src={flag} alt={name} />
            {code !== "en" ? <div>{nameEn} ({name})</div> : <div>{nameEn}</div>}
          </div>
        ))
      }
    </div>
  );
}
