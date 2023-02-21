import styles from '@/styles/success.module.css';
import Box from '@mui/material/Box';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function success() {
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
            <CheckRoundedIcon className={styles.check}/>
            <p className={styles.para}>Your voucher has been sent to your registered email <br /> address. Please see your spam folder if you haven't <br /> received the voucher yet.</p>
            {/* Resend Email Link */}
            <a href="#" className={styles.resend}>send me the email again</a>
          {/* Continue Button  */}
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
