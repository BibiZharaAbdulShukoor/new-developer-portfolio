import { useState, useEffect } from "react";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Load saved data
  useEffect(() => {
    const saved = localStorage.getItem("contactForm");

    if (saved) {
      try {
        setForm(JSON.parse(saved));
      } catch (err) {
        localStorage.removeItem("contactForm");
      }
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (form.email && !/\S+@\S+\.\S+/.test(form.email)) {
        setErrors((prev) => ({
          ...prev,
          email: "Invalid email format",
        }));
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [form.email]);

  // Save data
  useEffect(() => {
    localStorage.setItem("contactForm", JSON.stringify(form));
  }, [form]);

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    }
    {
      newErrors.email = "Invalid email";
    }

    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSuccess(true);

      localStorage.removeItem("contactForm");

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      {success && (
        <div className="success-toast">Message Sent Successfully 🎉</div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          placeholder="FullName"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <textarea
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit">Send Message</button>
      </form>

      <div className="preview">
        <h3>Live Preview</h3>

        <p>
          <strong>Full Name:</strong> {form.name}
        </p>
        <p>
          <strong>Email:</strong> {form.email}
        </p>
        <p>
          <strong>Your Message:</strong> {form.message}
        </p>
      </div>
    </section>
  );
}

export default ContactForm;
