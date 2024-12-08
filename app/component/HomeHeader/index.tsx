import { PropsWithChildren } from "react";
import { MdAdd } from "react-icons/md";
import S from "./style";

interface HomeHeaderProps extends PropsWithChildren {
  onIconClick: () => void;
}

export default function HomeHeader({ children, onIconClick }: HomeHeaderProps) {
  return (
    <S.Container>
      <h1>{children}</h1>
      <S.IconWrapper>
        <S.RightButton onClick={onIconClick}>
          <MdAdd size={48} />
        </S.RightButton>
      </S.IconWrapper>
    </S.Container>
  );
}
