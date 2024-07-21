import React from "react";
import {
  DebugCSS,
  DraftCell,
  DraftGrid,
  DraftWrapper,
} from "./styled-components/testGrid";

export default () => {
  return (
    <DebugCSS>
      <DraftWrapper>
        <DraftGrid>
          <DraftCell className="self-end">
            <div className="text-4xl">Tom's Site</div>
          </DraftCell>
          <DraftCell className="self-end">
            <div className="text-xl">What A Fine Site</div>
          </DraftCell>
          <DraftCell className="h-full justify-self-end self-center">
            <div className="flex h-full">
              <div>Link1</div>
              <div>Link2</div>
              <div>Link3</div>
            </div>
          </DraftCell>
        </DraftGrid>
      </DraftWrapper>
    </DebugCSS>
  );
};
