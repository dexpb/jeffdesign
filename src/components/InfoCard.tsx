import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import styles from "./InfoCard.module.css";
import ScrollTrigger from "gsap/ScrollTrigger";

const InfoCard = () => {
 
  useEffect(() => {
    const title = titleRef.current;
    const subTitle = subTitleRef.current;
    const btn = btnRef.current;
    const imageDiv = imageDivRef.current;
    const container = containerRef.current;
    const comment1 = comment1Ref.current
    const comment2 = comment2Ref.current
    const comment3 = comment3Ref.current
    const comment4 = comment4Ref.current

    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(title, {
      opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 1.2,
        ease: "power1.inOut",
      });
    gsap.fromTo(subTitle, {
      opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 1.2,
        ease: "power1.inOut",
      });
      gsap.fromTo(btn, {
        opacity: 0,
      },{
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 1.2,
        ease: "power1.inOut",
      })
      gsap.fromTo(imageDiv, {
        opacity: 0,
      },{
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 2.5,
        ease: "power1.inOut",
      })
      gsap.fromTo(container, {
        opacity: 0,
      },{
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      })
      gsap.fromTo(comment1, {
        opacity: 0,
      },{
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 3,
        ease: "power1.inOut",
      })
      gsap.fromTo(comment2, {
        opacity: 0,
      },{
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 3.2,
        ease: "power1.inOut",
      })
      gsap.fromTo(comment3, {
        opacity: 0,
      },{
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 3.3,
        ease: "power1.inOut",
      })
      gsap.fromTo(comment4, {
        opacity: 0,
      },{
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 3.4,
        ease: "power1.inOut",
      })
    return () => {
      gsap.killTweensOf(title);
      gsap.killTweensOf(subTitle);
      gsap.killTweensOf(btn);
      gsap.killTweensOf(imageDiv);
      gsap.killTweensOf(container);
    };
  })


  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const btnRef = useRef(null);
  const imageDivRef = useRef(null)
  const containerRef = useRef(null)
  const comment1Ref = useRef(null)
  const comment2Ref = useRef(null)
  const comment3Ref = useRef(null)
  const comment4Ref = useRef(null)

  return (
    <>
      <div className={styles.card} id="card" ref={containerRef}>
        <div className={styles.content}>
          <div className={styles.leftSide}>
            <h1 ref={titleRef}>
              Seu <span>lar</span> mais <span>belo</span>
            </h1>
            <h2 className={styles.subTitle} ref={subTitleRef}>Faça como nossos clientes e clique no botão!</h2>
            <a
              href="https://wa.me/5521982083190?text=Tenho%20interesse"
              className={styles.btn}
              ref={btnRef}
            >
              Saiba Mais
            </a>
            <img src="./explode-emoji.png" alt="" className={styles.emojiExplode} />
          </div>
          <div className={styles.rightSide}>
            <div className={styles.imageDiv}>
              <img src="./wallpaper.svg" alt="" ref={imageDivRef}/>
            </div>
            <img src="./love-emoji.png" alt="" className={styles.emojiLove} />
          </div>
        </div>
      </div>
          <div className={styles.comments}>
            <img src="./solange-cliente.svg" alt="" className={styles.cliente1} ref={comment1Ref}/>
            <img src="./marcia-cliente.svg" alt="" className={styles.cliente2} ref={comment2Ref}/>
            <img src="./thiago-cliente.svg" alt="" className={styles.cliente3} ref={comment3Ref}/>
            <img src="./marcos-cliente.svg" alt="" className={styles.cliente4} ref={comment4Ref}/>
          </div>
    </>
  );
};

export default InfoCard;
