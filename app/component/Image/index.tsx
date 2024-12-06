import { ImgHTMLAttributes } from "react";
import S from "./style";
import { BiSolidError } from "react-icons/bi";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  isLoading?: boolean;
  isError?: boolean;
}

export default function Image({ isError, ...props }: ImageProps) {
  if (isError) {
    return <BiSolidError size={"50%"} />;
  }
  return props.src ? <S.Image {...props} /> : null;
}
