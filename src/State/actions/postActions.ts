import { getUser } from "../selectors/selectors";
import { useSelector } from "react-redux";

export const submitNewPost = (title: string, body: string, user: string) => (
  dispatch: any
) => {
  const user = useSelector(getUser);
};
