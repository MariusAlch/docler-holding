import { useState, useEffect } from "react";
import { Message } from "src/model";
import socketIO from "socket.io-client";
import { useSettings } from "./useSettings";

const io = socketIO("http://localhost:3000");

export function useMessages(settings: ReturnType<typeof useSettings>) {
  const [messagesList, setMessagesList] = useState<Message[]>([]);
  const [unreadNotification, setUnreadNotification] = useState<boolean>(false);

  function clearUnreadNotification() {
    setUnreadNotification(false);
  }

  function sendMessage(content: string) {
    const message: Message = {
      userId: io.id,
      username: settings.settings.username,
      content,
      timestamp: Date.now(),
    };
    io.send(message);
  }

  useEffect(() => {
    io.on("message", (message: Message) => {
      setMessagesList((list) => [...list, message]);
      if (location.pathname !== "/") {
        setUnreadNotification(true);
      }
    });
    io.on("history", (messagesHistory: Message[]) =>
      setMessagesList(messagesHistory)
    );
  }, []);

  return {
    messagesList,
    sendMessage,
    unreadNotification,
    clearUnreadNotification,
  };
}
