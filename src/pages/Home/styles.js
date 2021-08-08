import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;

  @media (min-width: 900px) {
    div {
      img {
        display: flex;
      }
    }
  }
`;

export const TitleContent = styled.section`
  display: flex;

  h1 {
    margin: 5rem 0;
    font-size: 2.5rem;
    color: var(--primary);
    span {
      color: var(--yellow);
    }
  }

  img {
    display: none;
  }
  @media (min-width: 900px) {
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
    h1 {
      font-size: 5rem;
    }
    img {
      width: 40%;
      display: flex;
    }
  }
`;

export const ContentContainer = styled.section`
  margin: 7rem 0;
  img {
    display: none;
  }

  div {
    width: 80%;
    margin: 0 auto;
    p {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
    button {
      width: 200px;
      height: 75px;
      a {
        color: var(--white);
      }
      &:hover {
        a {
          color: var(--black);
        }
      }
    }
    button + button {
      margin-top: 4rem;
    }
  }
  @media (min-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 50%;
      margin: 0;

      p {
        width: 80%;
        font-size: 2rem;
        margin-bottom: 2rem;
      }
      button {
        width: 250px;
        height: 75px;
      }
    }
    img {
      width: 40%;
      display: flex;
    }

    button + button {
      margin-top: 4rem;
    }
  }
`;
