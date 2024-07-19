import styled from "styled-components";

export const DraftGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 4fr;
    grid-template-rows: 1fr;
    align-items: center;
    padding: 5px;
    gap: 5px;
`;

export const DraftCell = styled.div`
    white-space: nowrap;
`
