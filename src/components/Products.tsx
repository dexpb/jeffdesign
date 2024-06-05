import styles from "./Products.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
const Products = () => {
  useEffect(() =>{
    const jobs = jobsRef.current
    
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(jobs, {
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger:{
        trigger: jobs,
        start: "top 400px"
      }
    });
    return() => {
      gsap.killTweensOf(jobs)
    }
  })

  const jobsRef = useRef(null)
  return (
    <>
      <div className={styles.title} id="products" ref={jobsRef}>
        <h1 className={styles.info}>
          Buscamos sempre o <span>MÁXIMO CONFORTO</span> visual e deixando o seu lar mais belo
        </h1>
        <div className={styles.gallery}>
            <img src="./jobs.svg" alt="" className={styles.jobs}/>
      </div>
        </div>
    </>
  );
};

export default Products;
