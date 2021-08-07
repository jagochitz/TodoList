import styled, { keyframes } from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 350px;
  padding: 50px;
  margin: 5rem auto;
  border: 5px solid var(--secondary);
  border-radius: 50px;
  h1 {
    color: var(--primary);
  }
  div {
    margin-top: 15px;
  }
  button {
    width: 150px;
    height: 50px;
    margin-top: 30px;
  }
  @media (min-width: 900px) {
    max-width: 700px;
    padding: 100px;
    h1 {
      font-size: 2.5rem;
    }
    div {
      width: 400px;
    }
    button {
      width: 200px;
    }
  }
`;

const appearFromLeft = keyframes`
    from {
        opacity: 0;

    }

    to {
        opacity: 1;

    }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 8px;
    }

    p {
      margin-top: 4px;

      a {
        font-weight: bold;
        color: var(--primary);
      }
    }
  }
`;
