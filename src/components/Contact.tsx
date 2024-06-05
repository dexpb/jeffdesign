import styles from "./Contact.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const Contact = () => {
  useEffect(() =>{
    const contact = contactRef.current
    
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(contact, {
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger:{
        trigger: contact,
        start: "top 400px"
      }
    });
    return() => {
      gsap.killTweensOf(contact)
    }
  })

  const contactRef = useRef(null)
  return (
    <div className={styles.contact} id="contact" ref={contactRef}>
      <h1>Faça já seu orçamento conosco! Com preços SUPER ACESSÍVEIS</h1>
      <a
        href="https://wa.me/5521982083190?text=Tenho%20interesse"
        className={styles.btn}
      >
        <a>Falar com atendente</a>
      </a>
      <h2>Saiba mais sobre nossos trabalhos</h2>
      <div className={styles.socialMedia}>
        <a href="https://www.instagram.com/freitasjefferson30/">
          <img src="./instagram-icon.svg" alt="" />
        </a>
        <a href="https://www.facebook.com/jefferson.freitasprisco">
          <img src="./messenger-icon.svg" alt="" />
        </a>
        <a href="https://wa.me/5521982083190?text=Tenho%20interesse">
          <img src="./whatsapp-icon.svg" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
