const Contact = () => {
  return (
    <div className="min-h-screen px-6 md:px-20 py-16 text-white">

      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold">
          Contact <span className="text-orange-400">Me</span>
        </h1>
       
      </div>

      {/* Main Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left Info */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10">
            <h3 className="text-xl font-semibold mb-2">Let’s Connect</h3>
            <p className="text-slate-400 mb-4">
              I’m open to internships, projects, and Full time Job.
            </p>

            <div className="space-y-3 text-slate-300">
              <p>
                📧 <span className="ml-2">mistrydeepak1028@gmail.com</span>
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
              type="text"
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
              type="email"
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
              rows="4"
              required
              placeholder="Your message..."
              className="
                w-full mt-2 px-4 py-3 rounded-lg
                bg-black/40 border border-white/10
                focus:outline-none focus:border-orange-400
                resize-none
              "
            ></textarea>
          </div>

          <button
            type="submit"
            className="
              w-full py-3 rounded-lg
              bg-orange-500 hover:bg-orange-600
              text-black font-semibold
              transition
            "

          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;
