import React, { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useNavigate } from "react-router-dom";

const servicesList = [
  { label: "Web Development", to: "/services#web-development" },
  { label: "App Development", to: "/services#app-development" },
  { label: "E-Commerce", to: "/services#e-commerce" },
  { label: "Digital Marketing", to: "/services#digital-marketing" },
  { label: "SEO", to: "/services#seo" },
  { label: "Graphic Design", to: "/services#graphic-design" },
  // Add more as needed
];

const industriesList = [
  { label: "E-Commerce", to: "/industries#e-commerce" },
  { label: "Education", to: "/industries#education" },
  { label: "Healthcare", to: "/industries#healthcare" },
  { label: "Food", to: "/industries#food" },
  { label: "Fitness", to: "/industries#fitness" },
  { label: "Enterprise", to: "/industries#enterprise" },
  // Add more as needed
];

const greetings = ["hi", "hii", "hey", "hello"];
const byeWords = ["bye", "goodbye", "see you", "see ya"];

const Chatbot = ({ open, onClose }) => {
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hi! 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open)
      setMessages([{ from: "ai", text: "Hi! 👋 How can I help you today?" }]);
  }, [open]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    processAIResponse(input);
    setInput("");
  };

  const processAIResponse = (input) => {
    const lower = input.toLowerCase();

    // Greetings
    if (greetings.some((g) => lower === g)) {
      setTimeout(() => {
        setMessages((msgs) => [
          ...msgs,
          {
            from: "ai",
            text: "Hello, welcome to SRJ Global Technologies team! I am here to assist you.",
          },
        ]);
      }, 600);
      return;
    }

    // About SRJ
    if (
      lower.includes("what is srj") ||
      lower.includes("about srj") ||
      lower.includes("SRJ Global Technologies")
    ) {
      setTimeout(() => {
        setMessages((msgs) => [
          ...msgs,
          {
            from: "ai",
            text: "SRJ Global Technologies is a leading digital solutions provider offering web development, app development, SEO, branding, and more.",
          },
        ]);
      }, 600);
      return;
    }

    // Services
    if (lower.includes("service")) {
      setTimeout(() => {
        setMessages((msgs) => [
          ...msgs,
          {
            from: "ai",
            text: "We offer a wide range of services. Click any to learn more:",
            links: servicesList.map((s) => ({
              ...s,
              onClick: () => {
                navigate(s.to);
              },
            })),
          },
        ]);
      }, 600);
      return;
    }

    // Industries
    if (lower.includes("industry") || lower.includes("industries")) {
      setTimeout(() => {
        setMessages((msgs) => [
          ...msgs,
          {
            from: "ai",
            text: "We help businesses in these industries. Click any to learn more:",
            links: industriesList.map((i) => ({
              ...i,
              onClick: () => {
                navigate(i.to);
              },
            })),
          },
        ]);
      }, 600);
      return;
    }

    // Duration/Time
    if (
      lower.includes("duration") ||
      lower.includes("time") ||
      lower.includes("how long") ||
      lower.includes("timetable")
    ) {
      setTimeout(() => {
        setMessages((msgs) => [
          ...msgs,
          {
            from: "ai",
            text: "Project duration depends on your requirements. For an accurate estimate, please connect with our team.",
            button: {
              label: "Chat on WhatsApp",
              href: "https://wa.me/9266594199",
            },
          },
        ]);
      }, 600);
      return;
    }

    // Bye
    if (byeWords.some((b) => lower.includes(b))) {
      setTimeout(() => {
        setMessages((msgs) => [
          ...msgs,
          { from: "ai", text: "Bye! Thank you for the day." },
        ]);
      }, 600);
      return;
    }

    // Fallback
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        {
          from: "ai",
          text: "Sorry, I can't answer that directly. Please connect with our team on WhatsApp.",
          button: {
            label: "Chat on WhatsApp",
            href: "https://wa.me/9266594199",
          },
        },
      ]);
    }, 600);
  };

  if (!open) return null;

  return (
    <div
      className="fixed z-50 chatbot-modal"
      style={{
        bottom: "6.5rem",
        right: "1.5rem",
        width: "310px",
        maxWidth: "92vw",
        height: "370px",
        overflow: "hidden",
        maxHeight: "75vh",
        background: "#fff",
        borderRadius: "2rem",
        borderTopLeftRadius: "2rem",
        borderTopRightRadius: "2rem",
        borderBottomLeftRadius: "2rem",
        borderBottomRightRadius: "2rem",
        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
        display: "flex",
        flexDirection: "column",
        border: "2px solid #e5e7eb",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-[#0A49D9]"
        style={{ borderTopLeftRadius: "2rem", borderTopRightRadius: "2rem" }}
      >
        <span className="font-semibold text-white">SRJ Chatbot</span>
        <button onClick={onClose} className="text-white text-xl font-bold">
          &times;
        </button>
      </div>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-3 bg-white">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} {...msg} />
        ))}
        <div ref={chatEndRef} />
      </div>
      {/* Input */}
      <div className="flex items-center border-t border-gray-200 p-2 bg-white">
        <input
          type="text"
          className="flex-1 px-3 py-2 rounded-full border border-gray-300 focus:outline-none text-sm bg-[#0A0A23] text-white placeholder-gray-400"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="ml-2 px-4 py-2 bg-[#0A49D9] text-white rounded-full font-semibold text-sm hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
      {/* Responsive styles */}
      <style>
        {`
          @media (max-width: 900px) {
            .chatbot-modal {
              width: 90vw !important;
              right: 2vw !important;
              height: 60vh !important;
              min-height: 300px;
              max-width: 98vw !important;
            }
          }
          @media (max-width: 600px) {
            .chatbot-modal {
              width: 98vw !important;
              right: 1vw !important;
              bottom: 5.5rem !important;
              height: 55vh !important;
              min-height: 220px;
              border-radius: 1.2rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Chatbot;
