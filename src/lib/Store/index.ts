import constate from "constate";
import { useState, useEffect } from "react";
import { Message, Settings } from "src/model";
import socketIO from "socket.io-client";
import useLocalStorage from "react-use/lib/useLocalStorage";

const io = socketIO("http://localhost:3000");

function useMessages(settings: ReturnType<typeof useSettings>) {
  const [messagesList, setMessagesList] = useState<Message[]>([]);

  function sendMessage(content: string) {
    const message: Message = {
      authorId: io.id,
      authorUsername: settings.settings.username,
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
  const defaultSettings: Settings = {
    interfaceColor: "light",
    username: "helloWorld",
    clockFormat: "12hours",
    sendOnEnter: "on",
    language: "english",
  };

  const [settings, setSettings] = useLocalStorage<Settings>("settings", defaultSettings);

  return { settings: settings!, setSettings, defaultSettings };
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
