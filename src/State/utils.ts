import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";

export type AsyncActionStatus = "idle" | "loading" | "succeeded" | "failed";
export type AsyncActionError = string | undefined;

export function useAppDispatch() {
  return useDispatch<AppDispatch>();
}
