import styled from "styled-components";
import BackgroundImage from "../../assets/animes-mix-bg.png";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  background: url(${BackgroundImage}) no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  max-width: 400px;
  border-radius: 10px;

  h1 {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 2.5rem;
    color: var(--primary);
    span {
      color: var(--secondary);
    }
  }
  span {
    color: var(--secondary);
    margin-bottom: 2rem;
    font-size: 1.8rem;
    flex-wrap: wrap;
  }

  div {
    flex: 1;
    display: flex;
    margin-top: 1rem;

    button + button {
      margin-left: 1rem;
    }
  }

  @media (min-width: 900px) {
    max-width: 60%;
    padding: 5rem;

    h1 {
      margin-bottom: 5rem;
    }
    span {
      margin-bottom: 5rem;
    }

    button {
      margin-top: 5rem;
    }
  }
`;
