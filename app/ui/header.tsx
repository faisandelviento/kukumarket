import SmallCard from "./smallcard";
import Slider from "./slider";
import styles from "@/app/ui/header.module.css";

export default function Header (){
    return(
        <div className={styles.header}>
            <div className={styles.cont_mid}>
                <Slider/>
            </div>
            <div className={styles.cont_small}>
                <SmallCard/>
                <SmallCard/>
            </div>
        </div>
    );
}