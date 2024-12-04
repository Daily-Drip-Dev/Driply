import { ImgHTMLAttributes } from "react";
import S from "./style";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  isLoading?: boolean;
  isError?: boolean;
}

export default function Image(props: ImageProps) {
  return props.isError ? <S.Image {...props} alt="props" /> : null;
}
