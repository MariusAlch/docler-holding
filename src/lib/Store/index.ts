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
      userId: io.id,
      username: settings.settings.username,
      content,
      timestamp: Date.now(),
    };

    io.send(message);
  }

  useEffect(() => {
    io.on("message", (message: Message) =>
      setMessagesList((list) => [...list, message])
    );
    io.on("history", (messagesHistory: Message[]) =>
      setMessagesList(messagesHistory)
    );
  }, []);

  return {
    messagesList,
    sendMessage,
  };
}

function useSettings() {
  const defaultSettings: Settings = {
    interfaceColor: "light",
    username: `anonymous${Math.floor(Math.random() * 10000)}`,
    clockFormat: "12hours",
    sendOnEnter: "on",
    language: "english",
  };
  const [settings, setSettings] = useLocalStorage<Settings>(
    "settings",
    defaultSettings
  );

  function resetSettings() {
    const newSettings: Settings = {
      ...defaultSettings,
      username: settings!.username,
    };
    setSettings(newSettings);
  }

  return { settings: settings!, setSettings, resetSettings };
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
