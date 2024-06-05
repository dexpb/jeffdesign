import styles from "./Header.module.css";
import { Link } from "react-scroll/modules";

const Header = () => {
  return (
    <div className={styles.head}> 
        <img src="./logo.png" className={styles.logo}></img>
      <nav>
        <ul>
          <li className={styles.navigate}>
            
            <a href="#">
              início
            </a>
          </li>
          <li className={styles.navigate}>
          <Link
                activeClass="active"
                to="products"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              ><a href="#">trabalhos</a>
              </Link>
          </li>
          <li>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              ><a href="#">contato</a>
              </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
