import styled from "styled-components";

export const AppMain = styled.div`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  color: red;
  margin-top: -50px;
  font-size: 4rem;
  color: white;
  text-shadow: 1px 1px 0px rgba(254, 250, 83, 1);
`;

export const HeaderMain = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImgLogo = styled.img`
  width: 75px;
  height: 75px;
`;

export const RightSpace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-right: 3rem;
  position: relative;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SectionMain = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Paragraph = styled.p`
  width: 50%;
  font-size: 1.5rem;
  text-align: center;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  font-family: "Bebas Neue", cursive;
  font-size: 2.2rem;
  margin-right: 2.8rem;
  margin-bottom: 3rem;
  border: none;
  background-color: #07b6b7;
  border-radius: 1rem;
  box-shadow: -5px -5px 0px 0px rgba(0, 0, 0, 1) inset;

  &:hover {
    background-color: #fff;
    cursor: pointer;
    box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 1) inset;
  }

  &:active {
    box-shadow: -5px -5px 0px 0px rgba(0, 0, 0, 1) inset;
  }
`;

export const Input = styled.input`
  line-height: 50px;
  width: 400px;
  margin-bottom: 2rem;
  font-size: 1.5rem;
`;

export const ButtonMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%auto;
`;

export const Link = styled.span`
  color: #07b6b7;
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonHeader = styled.button`
  padding: 0.5rem;
  font-family: "Bebas Neue", cursive;
  font-size: 1.1rem;
  margin-right: 2.8rem;
  margin-bottom: 3rem;
  border: none;
  background-color: #07b6b7;
  border-radius: 1rem;
  box-shadow: -5px -5px 0px 0px rgba(0, 0, 0, 1) inset;

  &:hover {
    background-color: #fff;
    cursor: pointer;
    box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 1) inset;
  }

  &:active {
    box-shadow: -5px -5px 0px 0px rgba(0, 0, 0, 1) inset;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckBox = styled.input`
  width: 25px;
  height: 25px;
`;

export const TodoContainer = styled.label`
  font-size: 2rem;
  border: 2px solid white;
  box-sizing: border-box;
  margin: 2rem;
`;

export const TodoItem = styled.span`
  margin: 0 2rem;
`;

export const TodoUserItem = styled.span`
  border-right: 2px solid white;
  padding: 0 2rem;
`;

export const ButtonIcon = styled.button`
  border: none;
  background: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;
export const TodoListMain = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 2rem;
  list-style: none;
`;

export const TodoListItem = styled.li`
  display: block;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const SubTitle = styled.h2`
  font-size: 2.5rem;
`;

export const MenuMain = styled.nav`
  background-color: #fff;
  color: #000;
  font-size: 1.5rem;
  padding: 3rem;
  position: absolute;
  top: 30px;
`;

export const MenuList = styled.ul`
  list-style: none;
`;

export const MenuItem = styled.li`
  margin-bottom: 1rem;
`;
