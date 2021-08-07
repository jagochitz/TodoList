import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: var(--secondary) 2px solid;

  span {
    color: var(--primary);
  }

  div {
    display: flex;
    a {
      text-decoration: none;
      border: 2px solid var(--secondary);
      height: 50px;
      padding: 5px;
      transition: 0.4s;
      margin-right: 10px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      span {
        display: none;
      }
    }
  }

  @media (min-width: 900px) {
    width: 100%;
    height: 100px;

    span {
      font-size: 1.5rem;
    }

    div {
      display: flex;
      a {
        padding: 20px;
        border-radius: 15px;
        text-transform: uppercase;
        margin-right: 30px;

        span {
          display: flex;
          font-size: 1rem;
          color: var(--secondary);
          margin-left: 15px;
        }
        &:hover {
          background-color: var(--secondary);
          color: var(--white);
          span {
            color: var(--white);
          }
        }
      }
    }

    a + a {
      margin-left: 30px;
    }
  }
`;
