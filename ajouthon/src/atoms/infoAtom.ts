import { atom } from "recoil";

interface IInfo {
  직책: string;
  학번: string;
  성명: string;
  학부: string;
  전공: string;
  핸드폰번호: string;
  이메일: string;
}

export const infoAtom = atom<IInfo>({
  key: "info",
  default: {
    직책: "",
    학번: "",
    성명: "",
    학부: "",
    전공: "",
    핸드폰번호: "",
    이메일: "",
  },
});
