import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ADMIN,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        return emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        );
      })
      .then((result) => {
        console.log("Les deux messages sont envoyés !", result.text);
        alert(
          "Merci ! Votre message a bien été envoyé et vous allez recevoir une confirmation.",
        );
        e.target.reset();
      })
      .catch((error) => {
        console.log("Erreur lors de l'envoi...", error);
        alert("Oups, une erreur est survenue lors de l'envoi.");
      });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-4 max-w-md mx-auto w-full text-white"
    >
      <input
        type="text"
        name="user_name"
        placeholder="Nom"
        required
        className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 outline-none focus:border-cyan-400 transition-colors"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Email"
        required
        className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 outline-none focus:border-cyan-400 transition-colors"
      />
      <textarea
        name="message"
        placeholder="Message"
        rows="4"
        required
        className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 outline-none focus:border-cyan-400 transition-colors"
      />
      <input
        type="submit"
        value="Envoyer le message"
        className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded-lg cursor-pointer transition-all shadow-lg shadow-cyan-900/20"
      />
    </form>
  );
};

export default ContactUs;
