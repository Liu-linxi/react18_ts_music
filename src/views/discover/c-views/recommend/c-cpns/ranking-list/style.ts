import styled from "styled-components";
import recommendTopBg from "@/assets/img/recommend-top-bg.png";
export const RankingWrapper = styled.div`
  .tops {
    margin: 30px 0;
    /* display: flex; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-image: url(${recommendTopBg});
    height: 472px;
  }
`;
