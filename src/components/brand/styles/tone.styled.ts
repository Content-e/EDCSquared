import { Dropdown } from "react-bootstrap";
import styled from "styled-components";

export const DropdownTag = styled(Dropdown)`
  margin: 20px 0 30px;
  background: #fff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  max-width: 280px;
  width: 100%;
  min-height: 48px;
  font-size: 12px;
  color: #666666;
  border-radius: 8px;
  font-family: "Lato";

  & .btn-success {
    border: none;
    background: transparent;
    color: #666666;
    box-shadow: none;
    line-height: 16px;
    font-weight: 400;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    & span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 80%;
      }
    }
  }

  &.show {
    & .btn-success.dropdown-toggle,
    & .btn-success.dropdown-toggle:focus {
      background: transparent;
      color: #666666;
      box-shadow: none;
    }
  }
  & .dropdown-toggle:not(:disabled):not(.disabled):active:focus,
  & .dropdown-toggle:not(:disabled):not(.disabled):active,
  & .dropdown-toggle:hover,
  & .dropdown-toggle:focus {
    background: transparent;
    color: #666666;
    box-shadow: none;
  }

  & .dropdown-toggle:after {
    content: none;
  }

  & .dropdown-menu {
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 23.5024px 47.0049px -4.27317px rgba(159, 159, 159, 0.15);
    overflow: hidden;
  }

  & .dropdown-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    margin: 0px;
    max-height: 350px;
    overflow-x: hidden;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    color: #666666;
    &::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }
  }

  & .dropdown-item:hover,
  & .dropdown-item:focus,
  & .dropdown-item:active,
  & .dropdown-item.active {
    background: #f9f9f9;
    color: #666666;
  }
`;

export const IconDown = styled.span`
  width: 10px;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;

  & img {
    max-width: 100%;
    object-fit: contain;
    pointer-events: none;
  }
`;
