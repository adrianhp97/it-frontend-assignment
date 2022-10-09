/** Services */
import { getLanguages } from "services/language";

const loader = async () => {
  try {
    const { data } = await getLanguages();
    return { languages: data }; 
  } catch (error) {
    return { languages: [] };
  }
}

export default loader;
