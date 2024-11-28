import { PropsWithChildren } from "react";
import S from "./style";

export default function TestLayout({ children }: PropsWithChildren) {
  return <S.Container>{children}</S.Container>;
}
