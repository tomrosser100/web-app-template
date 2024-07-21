import styled from "styled-components";

export const DebugCSS = styled.div`
  * {
    box-sizing: border-box;
    border: solid black 1px;
    background-color: rgb(0, 0, 255, 0.2);
  }
`;

export const DraftGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 4fr;
  grid-template-rows: 1fr;
  gap: 5px;
  place-items: stretch stretch;
`;

export const DraftCell = styled.div`
  white-space: nowrap;
`;

export const DraftWrapper = styled.div`
  padding: 10px;
  border-radius: 5px;
`;

