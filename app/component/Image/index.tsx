/* eslint-disable jsx-a11y/alt-text */
import { ImgHTMLAttributes } from "react";
import { errorContainer, image, loading } from "./styles.css";
import { BiSolidError } from "react-icons/bi";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  isLoading?: boolean;
  isError?: boolean;
}

export default function Image({ isError, isLoading, ...props }: ImageProps) {
  if (isError) {
    return (
      <div className={errorContainer}>
        <BiSolidError size={"50%"} />
      </div>
    );
  }
  return props.src ? <img className={`${image} ${isLoading && loading}`} {...props} /> : null;
}
