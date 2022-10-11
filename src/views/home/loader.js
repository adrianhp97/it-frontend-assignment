/** Services */
import { getProviders } from "services/providers";

const loader = async () => {
  try {
    const { data } = await getProviders();
    return { languages: data }; 
  } catch (error) {
    return { languages: [] };
  }
}

export default loader;
