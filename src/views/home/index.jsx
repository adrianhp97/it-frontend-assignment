/** Components */
import { Avatar, List, Spin } from "antd";

/** Configs */
import STORAGE_KEY from "configs/storage";

/** Hooks */
import { useState, useEffect } from "react"
import { useStorage } from "hooks/useStorage";

/** Services */
import { getProviders } from "services/providers";
import { notification } from "antd";

/** Styles */
import s from "./s.module.css";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const storage = useStorage();

  const fetchProviders = async (lang) => {
    try {
      setLoading(true);
      const response = await getProviders(lang);
      setData(response.data);
    } catch (error) {
      notification.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProviders(storage[STORAGE_KEY.language])
  }, [storage[STORAGE_KEY.language]]);

  return loading ? (
    <div className={s.center}>
      <Spin />
    </div>
  ) : (
    <List>
      {
        data.map(({ comments_count: commentsCount, email, id, image, name, website }) => (
          <List.Item key={id}>
            <List.Item.Meta
              avatar={<Avatar src={image} />}
              title={<a href={website}>{name}</a>}
              description={email}
            />
            <div>Comment {commentsCount}</div>
          </List.Item>
        ))
      }
    </List>
  )
}
