import styled from 'styled-components';
import { color, timer } from './constants';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.orange};
  padding: 1rem 2rem;
  border-radius: 0.8rem;
  color: white;
  font-weight: 700;
  transition: all ${timer.default};

  &:hover {
    background-color: ${color.lightOrange};
    box-shadow: 0px 25px 25px 0px rgba(255, 125, 27, 0.1);
    -webkit-box-shadow: 0px 25px 25px 0px rgba(255, 125, 27, 0.1);
    -moz-box-shadow: 0px 25px 25px 0px rgba(255, 125, 27, 0.1);
  }

  &:disabled {
    background-color: ${color.graylishBlue};
    cursor: not-allowed;

    &:hover {
      box-shadow: none;
    }
  }
`;

export const RoundButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${color.white};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    transition: color ${timer.default};
  }

  &:hover {
    color: ${color.orange};
  }
`;
