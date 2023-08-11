import { atom } from "recoil";
import { IAccount } from "../interfaces/loginInterface";

export const accountAtom = atom<IAccount>({
  key: "account",
  default: {
    id: "",
    pw: "",
  },
});
