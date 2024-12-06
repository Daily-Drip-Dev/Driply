import { ImgHTMLAttributes } from "react";
import S from "./style";
import { BiSolidError } from "react-icons/bi";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  isLoading?: boolean;
  isError?: boolean;
}

export default function Image(props: ImageProps) {
  return props.isError ? <BiSolidError size={"50%"} /> : props.src ? <S.Image {...props} /> : null;
}
