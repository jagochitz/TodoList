import styled, { keyframes } from "styled-components";
import Dashboardbg from "../../assets/no-game-no-life-bg.png";

export const Background = styled.div`
  background: url(${Dashboardbg}) no-repeat;
  background-size: content;
  height: 70vh;
  margin-top: 2rem;
  width: 100%;
`;

export const Mask = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 98%;
  height: 100%;
  margin-top: -2rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30px;

  h1 {
    margin-bottom: 64px;
  }
`;

export const InputContainer = styled.form`
  flex: 1;
  margin-top: 32px;
  padding: 0 38px;

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
      margin-top: 2rem;
      max-width: 80%;
    }

    button {
      font-size: 0.8rem;
    }

    @media (min-width: 900px) {
      button {
        height: 50px;
        max-width: 25%;
        font-size: 1rem;
      }
    }
  }
`;

export const TasksContainer = styled.div`
  padding: 0 38px;
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;

  div {
    margin-top: 16px;
    margin-right: 32px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 2px solid var(--primary);

  h1 {
    margin-top: 2rem;
    font-size: 0.8rem;
  }

  button {
    max-width: 20%;
    margin-top: -2rem;
  }

  @media (min-width: 900px) {
    h1 {
      font-size: 2rem;
    }

    button {
      max-width: 10%none;
      margin-top: --2rem;
    }
  }
`;

const appearFromTop = keyframes`
from {
    opacity: 0;
    transform: translateY(-50px);
}

to {
    opacity: 1;
    transform: translateY(0px)
}   
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromTop} 1s;

  @media (min-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
