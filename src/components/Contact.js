import React from 'react';


const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contactez-moi</h2>
      <form>
        <input type="text" placeholder="Nom" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
      <div className="contact-info">
        <p>Email: votremail@gmail.com</p>
        <p>Téléphone: 06 XX XX XX XX</p>
      </div>
    </section>
  );
};

export default Contact;
