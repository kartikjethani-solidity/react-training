import { useSelector } from "react-redux";
import type { RootState } from "../../redux-toolkit-store";

export const postFormData = async (param: string) => {
  try {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ name: param, password: 1231241 }),
    });
  } catch {
    alert("error");
  }
};
