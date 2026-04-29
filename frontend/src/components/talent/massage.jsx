import { Button } from "@/components/ui/button";
import {
  Phone,
  Video,
  MoreVertical,
  Send,
  Paperclip,
  ArrowLeft,
} from "lucide-react";
import { useState } from "react";

function TalentMessage() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");

  const [conversations] = useState([
    {
      id: 1,
      name: "University Advisor",
      message: "The internship documents are ready...",
      time: "10:45 AM",
    },
    {
      id: 2,
      name: "Sarah Miller (HR)",
      message: "Thank you for attending the interview...",
      time: "Yesterday",
    },
  ]);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "them",
      text: "Hello Alex! I've reviewed your internship proposal...",
      time: "10:42 AM",
    },
    {
      id: 2,
      sender: "me",
      text: "Great news! Should I upload the signed copy?",
      time: "10:44 AM",
    },
  ]);

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const msg = {
      id: Date.now(),
      sender: "me",
      text: newMessage,
      time: "Now",
    };

    setMessages((prev) => [...prev, msg]);
    setNewMessage("");
  };

  return (
    <div className="h-[calc(100vh-64px)] flex bg-white overflow-hidden border rounded-xl">

      {/* ================= LEFT PANEL ================= */}
      <div
        className={`${
          selectedChat ? "hidden md:flex" : "flex"
        } flex-col w-full md:w-[320px] border-r bg-white`}
      >
        {/* TABS */}
        <div className="flex gap-2 px-4 py-3 text-sm">
          <button className="bg-blue-600 text-white px-3 py-1 rounded-full">
            All
          </button>
          <button className="text-slate-500">Unread</button>
          <button className="text-slate-500">Archived</button>
        </div>

        {/* CONVERSATIONS */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-slate-100"
            >
              <div className="w-10 h-10 bg-slate-300 rounded-full" />

              <div className="flex-1">
                <p className="font-medium text-sm">{chat.name}</p>
                <p className="text-xs text-slate-500 truncate">
                  {chat.message}
                </p>
              </div>

              <span className="text-xs text-slate-400">
                {chat.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= RIGHT PANEL ================= */}
      <div
        className={`${
          selectedChat ? "flex" : "hidden md:flex"
        } flex-1 flex-col`}
      >
        {/* EMPTY STATE (DESKTOP) */}
        {!selectedChat ? (
          <div className="hidden md:flex flex-1 items-center justify-center text-slate-400">
            Select a conversation
          </div>
        ) : (
          <>
            {/* CHAT HEADER */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b">
              <div className="flex items-center gap-3">
                {/* BACK BUTTON (MOBILE) */}
                <Button
                  onClick={() => setSelectedChat(null)}
                  className="md:hidden p-2 rounded-md hover:bg-slate-100 bg-transparent text-black cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                </Button>

                <div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    {selectedChat.name}
                  </h3>
                  <p className="text-xs text-green-500">Online</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 text-slate-600">
                <Phone className="w-4 h-4 cursor-pointer" />
                <Video className="w-4 h-4 cursor-pointer hidden sm:block" />
                <MoreVertical className="w-4 h-4 cursor-pointer" />
              </div>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-slate-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "me"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >  
                  <div className="max-w-[85%] sm:max-w-md">
                    <div
                      className={`px-4 py-3 rounded-2xl text-sm shadow-sm ${
                        msg.sender === "me"
                          ? "bg-blue-600 text-white"
                          : "bg-white text-slate-700"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* INPUT */}
            <div className="p-3 sm:p-4 border-t bg-white">
              <div className="flex items-center gap-2 sm:gap-3 bg-slate-100 rounded-xl px-3 sm:px-4 py-2">

                <Paperclip className="w-5 h-5 text-slate-400 cursor-pointer" />

                <input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent outline-none text-sm"
                />

                <Button
                  onClick={handleSend}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>

              <p className="text-xs text-slate-400 text-center mt-2">
                End-to-end encrypted • Chats stored for 30 days
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TalentMessage;