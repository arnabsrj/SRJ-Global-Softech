import React from "react";
import { Link } from "react-router-dom";

const ChatMessage = ({ from, text, links, button }) => (
  <div className={`flex ${from === "user" ? "justify-end" : "justify-start"}`}>
    <div
      className={`px-4 py-2 rounded-2xl max-w-[80%] text-sm shadow
        ${from === "ai"
          ? "bg-gray-100 text-gray-800 rounded-bl-none"
          : "bg-blue-500 text-white rounded-br-none"}`}
    >
      <div>
        {text}
        {links && (
          <ul className="mt-2 space-y-1">
            {links.map((l, i) => (
              <li key={i}>
                <Link
                  to={l.to}
                  className="text-blue-600 underline hover:text-blue-800"
                  onClick={l.onClick}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
        {button && (
          <div className="mt-2">
            <a
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 py-1 bg-green-600 text-white rounded-full text-xs font-semibold hover:bg-green-700 transition"
            >
              {button.label}
            </a>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default ChatMessage;