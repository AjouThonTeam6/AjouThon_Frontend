import { atom } from "recoil";

interface IStudentAcademyList {
  aplyColgCd: string;
  aplyDt: string;
  aplyShtmCd: string;
  aplySustCd: string;
  aplyYy: string;
  diuseDt: string;
  emplNo: string;
  intApprCtnt: string;
  meatngCd: string;
  meatngFg: string;
  meatngFondtPurp: string;
  meatngFormaPrecon: string;
  meatngNm: string;
  meatngTypeCd: string;
  modDttm: number;
  modId: string;
  modIp: string;
  modPosbYn: string;
  modPosbYnNm: string;
  rcnt: number;
  recaResn: string;
  regDttm: number;
  regId: string;
  regIp: string;
  rowStatus: number;
  tretSt1: string;
  tretSt2: string;
  tretSt3: string;
  tretStNm: string;
  useYn: string;
}

export const studentAcademyListAtom = atom<IStudentAcademyList[]>({
  key: "studentAcademyList",
  default: [],
});

export const studentCircleListAtom = atom<IStudentAcademyList[]>({
  key: "studentCircleList",
  default: [],
});
