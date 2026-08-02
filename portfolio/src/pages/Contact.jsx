import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:9000/message", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        alert("successfully sent!");
        console.log(formData); // used to reset form after submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("reduce size of name");
      }
    } catch (err) {
      alert("message not sent!");
    }
  };

  return (
    <div className="min-h-screen px-3 md:px-20 py-8 text-white">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold">
          Contact <span className="text-orange-400">Me</span>
        </h1>
      </div>

      {/* Main Section */}
      <div className="grid md:grid-cols-2 gap-10 ">
        {/* Left Info */}
        <div className="space-y-2 mt-15">
          <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10">
            <h3 className="text-xl font-semibold mb-2">Let’s Connect</h3>
            <p className="text-slate-400 mb-4">
              I’m open to internships, projects, and Full time Job.
            </p>

            <div className="space-y-3 text-slate-300">
              <p>
                📧 <span className="ml-2">mistrydeepak1028@gmail.com</span>
              </p>
              <p className="flex items-center mt-2">
                <FaLinkedin className="text-white-600" />
                <a
                  href="https://www.linkedin.com/in/deepakmistry-8a3219261"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-5 text-white-600 "
                >
                  linkedin.com/Deepak-Mistry
                </a>
              </p>

              <p>
                📍 <span className="ml-2">India</span>
              </p>
              <p>
                💼 <span className="ml-2"> Full Stack Web Developer</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className="
            p-8 rounded-2xl
            bg-gradient-to-br from-slate-900 to-slate-800
            border border-white/10
            space-y-6
          "
        >
          <div>
            <label className="text-sm text-slate-400">Name</label>
            <input
              onChange={handleChange}
              type="text"
              value={formData.name}
              name="name"
              placeholder="Your name"
              required
              className="
                w-full mt-2 px-4 py-3 rounded-lg
                bg-black/40 border border-white/10
                focus:outline-none focus:border-orange-400
              "
            />
          </div>

          <div>
            <label className="text-sm text-slate-400">Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              value={formData.email}
              required
              placeholder="your@email.com"
              className="
                w-full mt-2 px-4 py-3 rounded-lg
                bg-black/40 border border-white/10
                focus:outline-none focus:border-orange-400
              "
            />
          </div>

          <div>
            <label className="text-sm text-slate-400">Message</label>
            <textarea
              onChange={handleChange}
              value={formData.message}
              rows="4"
              required
              name="message"
              placeholder="Your message..."
              className="
                w-full mt-2 px-4 py-3 rounded-lg
                bg-black/40 border border-white/10
                focus:outline-none focus:border-orange-400
                resize-none
              "
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() =>
                setFormData({
                  message: "",
                })
              }
              className="
              w-full md:w-48 h-12 rounded-lg 
              bg-[var(--color-accent)] hover:[var(--color-accent)]
              text-black font-semibold
              transition
            "
            >
              Reset Message
            </button>
            <button
              type="submit"
              className="
               w-full md:w-48 py-3 rounded-lg ml-10
              bg-[var(--color-accent)] hover:[var(--color-accent)]
              text-black font-semibold
              transition
            "
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
