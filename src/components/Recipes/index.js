import React, { Component } from "react";
import {
  Container,
  Wrapper,
  Image,
  RecipesBox,
  RecipesSideBox,
  RecipeItem,
  Spotlight,
  SmallItem,
  RecipeContent,
  RecipeTitle,
  RecipeText,
  ReadMore
} from "./styles";
import { colors } from "../../globals";
import { HeaderTitle } from "../Titles/styles";
import { ReactComponent as ReadMoreImg } from "../../assets/images/arrow.svg";

export default class Recipes extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <HeaderTitle color={colors.softblack}>
            Receitas <strong>Mundial</strong>
          </HeaderTitle>
          <RecipesBox>
            <Spotlight>
              <Image
                src="https://www.supermercadosmundial.com.br/content/750x450/wc0E173yUWjX7mof.png"
                alt="Anéis de Cebola com Queijo"
              />
              <RecipeContent>
                <RecipeTitle>Anéis de Cebola com Queijo</RecipeTitle>
                <RecipeText>
                  Prepare em casa aquele petisco irresistível de restaurante.
                </RecipeText>
                <ReadMore>
                  <ReadMoreImg width={25} />
                </ReadMore>
              </RecipeContent>
            </Spotlight>

            <RecipesSideBox>
              <SmallItem media={true}>
                <Image
                  src="https://www.supermercadosmundial.com.br/content/278x226/ulLKsPjiTYngJOcD.png"
                  alt="Anéis de Cebola com Queijo"
                />
                <RecipeContent>
                  <RecipeTitle>Anéis de Cebola com Queijo</RecipeTitle>
                  <RecipeText>
                    Prepare em casa aquele petisco irresistível de restaurante.
                  </RecipeText>
                  <ReadMore>
                    <ReadMoreImg width={25} />
                  </ReadMore>
                </RecipeContent>
              </SmallItem>

              <SmallItem>
                <RecipeContent>
                  <RecipeTitle>Anéis de Cebola com Queijo</RecipeTitle>
                  <RecipeText>
                    Prepare em casa aquele petisco irresistível de restaurante.
                  </RecipeText>
                  <ReadMore>
                    <ReadMoreImg width={25} />
                  </ReadMore>
                </RecipeContent>
              </SmallItem>
              <SmallItem>
                <RecipeContent>
                  <RecipeTitle>Anéis de Cebola com Queijo</RecipeTitle>
                  <RecipeText>
                    Prepare em casa aquele petisco irresistível de restaurante.
                  </RecipeText>
                  <ReadMore>
                    <ReadMoreImg width={25} />
                  </ReadMore>
                </RecipeContent>
              </SmallItem>
            </RecipesSideBox>
          </RecipesBox>
        </Wrapper>
      </Container>
    );
  }
}
