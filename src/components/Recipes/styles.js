import styled from "styled-components";

export const Container = styled.div`
  margin: 30px 0;
`;
export const Wrapper = styled.div`
  max-width: 1170px;
  margin: auto;
`;

export const RecipesBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const RecipesSideBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 49%;
  justify-content: space-between;
`;
export const RecipeItem = styled.div``;
export const Spotlight = styled(RecipeItem)`
  display: block;
  max-width: 49%;
  img {
    width: 100%;
    min-height: 369px;
    object-fit: cover;
  }
`;
export const SmallItem = styled(RecipeItem)`
  display: flex;
  min-height: 225px;
  width: ${props => (props.media ? "100%" : "47%")};
  margin-top: ${props => (props.media ? "0" : "31px")};
  img {
    width: 50%;
  }
`;

export const Image = styled.img`
  display: block;
`;
export const RecipeContent = styled.div`
  background: #fff;
  padding: 15px 30px;
  position: relative;
`;
export const RecipeTitle = styled.h3`
  font-size: 25px;
  font-weight: 100;
  margin-bottom: 10px;
`;
export const RecipeText = styled.p`
  color: #5f5f5f;
  font-size: 15px;
  width: 75%;
  line-height: 20px;
  font-weight: 500;
  height: 44px;
  overflow: hidden;
`;
export const ReadMore = styled.a`
  position: absolute;
  bottom: 0;
  right: 0;
  display: block;
  background: #fb8b45;
  width: 45px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
