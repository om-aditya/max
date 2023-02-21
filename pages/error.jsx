import styles from '@/styles/error.module.css';
import Box from '@mui/material/Box';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function error() {
  return (
    <>
    <div className={styles.container}>
      {/* Navbar Start */}
        <div className={styles.navbar}>
            <div className={styles.logo}>
            <img src="assets/logo.png" alt="logo" />
            </div>
            <div className={styles.link}>
            <a href="#" className={`${styles.products} ${styles.navlink}`}>Products</a>
            <a href="#" className={styles.navlink}>Login/Register</a>
            </div>
        </div>
        {/* Navbar End */}
        <div className={styles.maindiv}>
          <div className={styles.centerdiv}>
            <ClearRoundedIcon className={styles.check}/>
            <p className={styles.para}>{"{{Error Response}}"}</p>
            {/* Continue Button */}
          <a href="#" className={styles.linktext}>
            <div className={styles.buttondiv}>
            <p className={styles.buttontext}>CONTINUE</p> <span className={styles.icon}><Box><ArrowForwardIcon /></Box></span>            
            </div>
          </a> 
          {/* ************** */}
          </div>                    
        </div>
    </div>
    </>
  )
}
