import { CustomCard } from "./Card";
import { CardContainerStyled } from '../styled-components/CardContainer.styled';
import { LikedContainerStyled } from '../styled-components/LikedContainer.styled';
import { useState } from "react";
import { Text } from '@nextui-org/react';
import { LikedCard } from "./LikedCard";

export default function CardContainer() {
  let liked = JSON.parse(localStorage.getItem('liked')) || [];
  const [show, setShow] = useState(false);
  const text = liked.length === 0 ? "No liked images" : liked.length === 1 ? `${liked.length} Liked image` : `${liked.length} Liked images`;

  const updateLiked = () => {
    setShow(!show);
  }

  function renderLiked() {
    if (liked.length !== 0) {
      return liked.map((item, index) => {
        return (
          <LikedCard id={index} img={item} updateLiked={updateLiked}/>
        )
      })
    }
  }

  return (
    <CardContainerStyled>
      <CustomCard updateLiked={updateLiked}/>

      <Text h3>{text}</Text>

      <LikedContainerStyled>
        { renderLiked() }
      </LikedContainerStyled>
    </CardContainerStyled>
  );
}