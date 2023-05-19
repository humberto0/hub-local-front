import * as S from "./styles";
import backgroundImage from "../../assets/images/banner.png";

export const Banner = () => {
  return (
    <S.ImageContainer item xs={12} md={6}>
      <S.ImageSection>
        <S.Image src={backgroundImage} alt="men" />
        <S.CardImage>
          <S.CardTitle>Junte-se a vários clientes satisfeitos.</S.CardTitle>
          <S.CardText>
            Cliente HubLocal ganha mais relevância, autoridade e visibilidade.
            Mais de 7.000 marcas confiam na nossa plataforma. Seja uma delas!
          </S.CardText>
        </S.CardImage>
      </S.ImageSection>
    </S.ImageContainer>
  );
};
