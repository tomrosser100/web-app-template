import React, { useState } from "react";
import {
  DebugCSS,
  DraftCell,
  DraftGrid,
  DraftWrapper,
} from "./styled-components/testGrid";

export default () => {
  const [showMenu, setShowMenu] = useState(true);

  const handleClick = () => {
    if (showMenu) {
      setShowMenu(false);
    } else setShowMenu(true);
  };

  return (
    <DebugCSS>
      <DraftWrapper>
        <DraftGrid>
          <DraftCell>
            <div className="text-4xl">Tom's Site</div>
          </DraftCell>
          <DraftCell className="flex">
            <div className="text-xl self-end">What A Fine Site</div>
          </DraftCell>
          <DraftCell className="flex flex-row-reverse">
            <button
              className="w-10 cursor-pointer hover:bg-blue-600"
              onClick={handleClick}
            >
              {showMenu ? "on" : "off"}
            </button>
          </DraftCell>
        </DraftGrid>
      </DraftWrapper>
      <DraftWrapper
        className={
          "inline-block position-relative float-right " +
          (!showMenu && "hidden")
        }
      >
        <div>
          <div className="cursor-pointer w-80">
            <div className="hover:bg-blue-600">Link1</div>
            <div className="hover:bg-blue-600">Link2</div>
            <div className="hover:bg-blue-600">Link3</div>
          </div>
        </div>
      </DraftWrapper>
    </DebugCSS>
  );
};
