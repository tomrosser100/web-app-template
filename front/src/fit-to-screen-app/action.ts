import socket from "../socket";

export default async function ({ request }: { request: any }) {
    const data = Object.fromEntries(await request.formData());
    console.log('action', data)
  
    const response = await new Promise((resolve) => {
      socket.emit('userPrompt', data.userInput, (response) => {
        resolve(response)
      })
    });

    console.log('received server response', response)
  
    return response;
  }