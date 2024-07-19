import React from "react";
import { DraftCell, DraftGrid } from "./styled-components/testGrid";

export default () => {
  return (
    <DraftGrid>
      <DraftCell className="text-4xl bg-red-400 order-1">
        Welcome
      </DraftCell>
      <DraftCell className="text-xl bg-blue-400 order-2 self-end">
        To my test site
      </DraftCell>
      <DraftCell className="bg-green-400 order-3 justify-self-end">
        Links over here
      </DraftCell>
    </DraftGrid>
  );
};
