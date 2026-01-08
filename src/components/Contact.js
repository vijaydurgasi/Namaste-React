import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [detailsSent, setdetailsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    setdetailsSent(true);

    setTimeout(() => setdetailsSent(false), 2000);
  };

  return (
    <div className="max-w-[700px] mx-auto my-10 p-5 font-sans">
      <h1 className="text-4xl text-[#ff5200] mb-4 font-bold">
        Contact Us
      </h1>

      <p className="text-base text-gray-700 mb-5">
        We’d love to hear from you! Whether you have questions, feedback, or
        suggestions, feel free to reach out.
      </p>

      <div className="mb-6">
        <p className="text-sm my-1">
          <strong>Name:</strong> Vijay Durgasi
        </p>
        <p className="text-sm my-1">
          <strong>Email:</strong> durgasivijay2005@example.com
        </p>
        <p className="text-sm my-1">
          <strong>Location:</strong> Hyderabad, India
        </p>
      </div>

      <h2 className="text-xl mt-6 mb-2 font-semibold">
        Get in Touch
      </h2>

      <form
        className="flex flex-col gap-3"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 text-sm border border-gray-300 rounded-md outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Your Email"
          className="p-3 text-sm border border-gray-300 rounded-md outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Your Message"
          className="p-3 text-sm border border-gray-300 rounded-md outline-none min-h-[100px] resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          type="submit"
          className="p-3 text-sm bg-[#ff5200] text-white rounded-md cursor-pointer transition hover:bg-[#e64500]"
        >
          Send Message
        </button>

        {detailsSent && (
          <p className="text-green-600 text-sm mt-2">
            ✅ Message sent successfully!
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
