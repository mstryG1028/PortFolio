import React, { useEffect, useState } from "react";
import { FaReply, FaTrash } from "react-icons/fa";

const Messages = () => {

  const [messages, setMessages] = useState([]);

  // Fetch messages
  const fetchMessages = async () => {

    try {

      const response = await fetch("http://localhost:9000/message");

      const data = await response.json();

      setMessages(data);

    } catch(err) {

      console.log(err);

    }

  };

  useEffect(() => {

    fetchMessages();

  }, []);

  // Delete Message
  const handleDelete = async (id) => {

    try {

      await fetch(`http://localhost:9000/message/${id}`, {
        method: "DELETE"
      });

      // Refresh messages
      fetchMessages();

    } catch(err) {

      console.log(err);

    }

  };

  return (

    <div className="min-h-screen px-6 md:px-20 py-16 bg-black text-white">

      {/* Heading */}
      <div className="mb-12 text-center">

        <h1 className="text-4xl md:text-5xl font-bold">
          User <span className="text-cyan-400">Messages</span>
        </h1>

      </div>

      {/* Cards */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
      >

        {messages.map((msg) => (

          <div
            key={msg.id}
            className="
              bg-gradient-to-br
              from-slate-900
              to-slate-800
              border border-white/10
              rounded-2xl
              p-6
              shadow-lg
              hover:scale-[1.02]
              transition
              duration-300
            "
          >

            {/* Top Section */}
            <div className="flex items-center justify-between mb-5">

              <div>

                <h2 className="text-xl font-bold">
                  {msg.name}
                </h2>

                <p className="text-slate-400 text-sm">
                  {msg.email}
                </p>

              </div>

              <div
                className="
                  w-12 h-12
                  rounded-full
                  bg-cyan-400
                  text-black
                  flex items-center justify-center
                  font-bold text-lg
                "
              >
                {msg.name.charAt(0).toUpperCase()}
              </div>

            </div>

            {/* Message Box */}
            <div
              className="
                bg-black/30
                rounded-xl
                p-4
                text-slate-300
                min-h-[120px]
                leading-relaxed
              "
            >
              {msg.message}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">

              {/* Reply */}
              <a
                href={`mailto:${msg.email}`}
                className="flex-1"
              >
                <button
                  className="
                    w-full
                    flex items-center justify-center gap-2
                    py-3
                    rounded-xl
                    bg-cyan-400
                    hover:bg-cyan-300
                    text-black
                    font-semibold
                    transition
                  "
                >
                  <FaReply />
                  Reply
                </button>
              </a>

              {/* Delete */}
              <button
                onClick={() => handleDelete(msg.id)}
                className="
                  flex-1
                  flex items-center justify-center gap-2
                  py-3
                  rounded-xl
                  bg-red-500
                  hover:bg-red-400
                  text-white
                  font-semibold
                  transition
                "
              >
                <FaTrash />
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

};

export default Messages;