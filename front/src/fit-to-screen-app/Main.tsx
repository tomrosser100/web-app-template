import React from "react";
import {
  ScrollingChatContainer,
  InputSubmitContainer,
  DebugCSS,
  Body,
  HeaderGrid,
  Chat,
  InputBar,
} from "./styledComponents";

const ScrollingChat = () => {
  return (
    <ScrollingChatContainer>
      <div>Example chat msg</div>
    </ScrollingChatContainer>
  );
};

const InputSubmit = () => {
  return (
    <InputSubmitContainer>
      <input className="p-3" type="textbox" placeholder="type here"></input>
      <button
        className="cursor-pointer hover:bg-blue-100 transition-colors duration-100"
        type="submit"
      >
        enter
      </button>
    </InputSubmitContainer>
  );
};

export default () => {
  return (
    <DebugCSS>
      <Body>
        <HeaderGrid></HeaderGrid>
        <Chat>
          <ScrollingChat></ScrollingChat>
        </Chat>
        <InputBar>
          <InputSubmit></InputSubmit>
        </InputBar>
      </Body>
    </DebugCSS>
  );
};
