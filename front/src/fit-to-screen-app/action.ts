import type { Msg } from "../../../shared/types";
import socket from "../socket";
import { eventEmitter } from "./eventEmitter";

export default async function ({ request }: { request: any }) {
  const data = Object.fromEntries(await request.formData());
  eventEmitter.emit("actionSubmit", { type: "user", msg: data.userInput });

  const response = (await new Promise((resolve) => {
    socket.emit("userPrompt", data.userInput, (response) => {
      resolve(response);
    });
  })) as Msg;

  console.log("received server response", response);
  eventEmitter.emit("actionComplete", response);

  return response;
}
