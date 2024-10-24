import styled from "styled-components";

export const UserLoginWrapper = styled.div`
  .dis_vip_card_img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .n-myinfo {
    height: 126px;
    background-position: 0 0;
    /* padding: 16px 22px; */
    padding-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      line-height: 25px;
      font-size: 12px;
      color: #666;
      width: 205px;
      margin: 0 auto;
      padding: 16px 0;
      line-height: 22px;
    }

    a {
      display: inline-block;
      width: 100px;
      height: 31px;
      line-height: 31px;
      text-align: center;
      color: #fff;
      text-decoration: none;
      background-position: 0 -195px;
      text-shadow: 0 1px 0 #8a060b;

      &:hover {
        background-position: -110px -195px;
      }
    }
  }
`;
