import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 300px;
`;

export const Column = styled.div`
  flex: 1;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Title = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  max-width: 90%;
  margin-bottom: 20px;
  line-height: 44px;

  color: #ffffff;
`;

export const TitleCadastro = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  margin-bottom: 8px;
`;

export const SubtitleCadastro = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 35px;
`;

export const TemCadastro = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
`;

export const CriarText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;

  color: #23dd7a;
`;
export const Click = styled.p`
  padding-top: 15px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;

  color: #fff;
`;
