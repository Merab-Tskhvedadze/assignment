import axios from "axios";
import config from "@/config";

export default async function registerUser(payload: {
  email: string;
  password: string;
  username: string;
}) {
  try {
    const response = await axios.post(
      `${config.api}/api/auth/local/register`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      return { success: true };
    } else {
      const errorData = response.data;
      return { error: errorData.error.message };
    }
  } catch (error: any) {
    return { error: error?.response?.data?.error?.message };
  }
}
