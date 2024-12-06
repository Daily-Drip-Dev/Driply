import { useState } from "react";
import S from "./style";
import Image from "../Image";

interface LogPreviewProps {
  place: string;
  title: string;
  imageUrl?: string;
}

export default function LogPreview({ place, title, imageUrl }: LogPreviewProps) {
  const [isLoading, setIsLoading] = useState(!!imageUrl);
  const [isError, setIsError] = useState(false);

  return (
    <S.Container>
      <S.InfoContainer>
        <S.Place>{place}</S.Place>
        <S.Title>{title}</S.Title>
      </S.InfoContainer>
      <S.ImageContainer>
        <Image
          src={imageUrl}
          isLoading={isLoading}
          isError={isError}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsError(true)}
          alt={`${title} 이미지`}
        />
      </S.ImageContainer>
    </S.Container>
  );
}
