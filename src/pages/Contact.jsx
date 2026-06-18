import { Helmet } from "react-helmet";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Helmet>
        <title> Bibi Zhara | About</title>
        <meta
          name="description"
          content="Get in touch with us through our contact form."
        />
      </Helmet>

      <ContactForm />
    </>
  );
}

export default Contact;
