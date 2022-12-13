import styled from "styled-components";

type ButtonProps = {
  disable?: boolean;
};
export const ButtonSubmit = styled.button<ButtonProps>`
  margin: 0 auto;
  background-color: ${(props) => (props.disable ? "#797D81" : "#a9cef4")};
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.8rem;
  color: ${(props) => (props.disable ? " #434242" : "#02020b")};
  outline: none;
  border: none;
  cursor: pointer;
`;
