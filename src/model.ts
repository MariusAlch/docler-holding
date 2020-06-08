export interface Message {
  userId: string;
  username: string;
  content: string;
  timestamp: number;
}

export interface Settings {
  interfaceColor: "light" | "dark";
  username: string;
  clockFormat: "12hours" | "24hours";
  sendOnEnter: "on" | "off";
  language: "english" | "lithuanian";
}
