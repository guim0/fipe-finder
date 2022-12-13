import styled from "styled-components";

type ButtonProps = {
  disable?: boolean;
};
export const Button = styled.a<ButtonProps>`
  background-color: ${(props) => (props.disable ? "#797D81" : "#a9cef4")};
  padding: 1rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  color: ${(props) => (props.disable ? " #434242" : "#02020b")};
`;
