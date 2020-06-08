import constate from "constate";
import { useState, useEffect } from "react";
import { Message } from "src/model";
import socketIO from "socket.io-client";

const io = socketIO("http://localhost:3000");

function useMessages(settings: ReturnType<typeof useSettings>) {
  const [messagesList, setMessagesList] = useState<Message[]>([]);

  function sendMessage(content: string) {
    const message: Message = {
      authorId: io.id,
      authorUsername: io.id,
      content,
      timestamp: Date.now(),
    };

    io.send(message);
  }

  useEffect(() => {
    io.on("message", (message: Message) => setMessagesList((list) => [...list, message]));
  }, []);

  return { messagesList, sendMessage };
}

function useSettings() {
  return {};
}

const [StoreProvider, useStore] = constate(function () {
  const settings = useSettings();
  const messages = useMessages(settings);

  return {
    settings,
    messages,
  };
});

export { StoreProvider, useStore };
