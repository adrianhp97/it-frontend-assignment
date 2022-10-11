/** Hooks */
import { useState, useEffect } from "react";

/** Utils */
import { getAll } from "utils/storage";

export const useStorage = () => {
  const [storage, setStorage] = useState(getAll());

  useEffect(() => {
    function changeStorage() {
      console.log(getAll());
      setStorage(getAll());
    }
    window.addEventListener("storage", changeStorage);

    return () => {
      window.removeEventListener("storage", changeStorage);
    }
  }, []);

  return storage;
}