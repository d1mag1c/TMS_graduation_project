import styled from "styled-components";

export const PaginateContainer = styled.div<{theme: string}>`
  .pagination {
    color: #0366d6;
    display: flex;
    margin: 40px auto 0 ;
    list-style: none;
    width: max-content;
  }

  li {
    margin: 0 10px;
    cursor: pointer;

    a:hover {
      color: ${({theme}) => theme.colorHover};
    }
  }

  .break-me {
    cursor: default;
  }

  .active {
    border-color: transparent;
    background-color: #0366d6;
    color: white;
  }

  .selected a {
    color: rgba(128, 128, 128, 0.33);
    cursor: auto;

    &:hover {
      color: rgba(128, 128, 128, 0.33);
    }
  }
  .disabled {
    visibility: hidden;
  }
`;