import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => (props.whiteSchema ? "#f5f5f5" : "#D7A119")};
  color: ${(props) => (props.whiteSchema ? "#D7A119" : "#f5f5f5")};
  height: 45px;
  border-radius: 8px;
  border: 2px solid var(--primary);
  font-family: "Roboto Mono", monospace;
  margin-top: 16px;
  width: 100%;
  transition: 0.5s;
  :hover {
    border: 2px solid var(--primary);
    background: ${(props) => (props.whiteSchema ? "#D7A119" : "#f5f5f5")};
    color: ${(props) => (props.whiteSchema ? "#f5f5f5" : "#D7A119")};
  }
`;
