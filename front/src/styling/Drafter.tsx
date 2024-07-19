import React from "react";
import { DraftCell, DraftGrid, DraftWrapper } from "./styled-components/testGrid";

export default () => {
  return (
    <DraftWrapper>
      <DraftGrid>
        <DraftCell className="text-4xl bg-red-400 order-1">
          Tom's Site
        </DraftCell>
        <DraftCell className="text-xl bg-blue-900 order-2 self-end">
          What A Good Site
        </DraftCell>
        <DraftCell className="h-full bg-green-400 order-3 justify-self-end">
          Links over here
        </DraftCell>
      </DraftGrid>
    </DraftWrapper>
  );
};
