import styles from '@/styles/otp.module.css';
import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function verifyOtp() {
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
          <div className={styles.centerdiv2}>
           <p className={styles.para}>Please enter the OTP sent to the mobile number</p>
           <label htmlFor="otp" className={styles.label}>OTP (One Time password)</label><br />
           <input type="text" className={styles.input2}/>
           {/* Verify OTP button */}
           <a href="#" className={styles.linktext}>
            <div className={styles.buttondiv}>
            <p className={styles.buttontext}>VERIFY</p> <span className={styles.icon2}><Box><ArrowForwardIcon /></Box></span>            
            </div>
          </a>         
          {/* ****************** */}
          </div>
          <hr className={styles.hr2}/>
          <div className={styles.bottomdiv}>
          <p className={styles.para3}>OTP will expire in <span className={styles.color}>15</span> seconds</p>
          <br />
          {/* Resend OTP button */}
          <a href="#" className={styles.resendotp}>Resend OTP?</a>
          </div>
        </div>
    </div>
    </>
  )
}
