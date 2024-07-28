export default interface SocketEvents {
  userPrompt: (userInput: string, callback: (response: string) => void) => void;
}
