import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from '@/styles/Home.module.css';
export default function Home() {
  return (
    <>
    {/* First Part of Landing Page */}
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
      <div className={styles.centerdiv}>
        <h1 className={styles.headingdiv}>
          <span className={styles.heading}>MAXSHOP</span>
          <br />
          <span className={styles.content}>Game night ?<br />Get your<br />Stream codes<br />now !</span>
          <br />
          {/* Shop Now button */}
          <a href="#" className={styles.linktext}>
            <div className={styles.buttondiv}>
            <p className={styles.buttontext}>SHOP NOW</p> <span className={styles.icon}><Box><ArrowForwardIcon /></Box></span>
            </div>
          </a>
          {/* ***************** */}
          </h1>
      </div>
    </div>
{/* ********************************************* */}

{/* Second Part of Landing Page */}

    <div className={styles.container2}>
      <div className={styles.leftdiv}>
        <img src="assets/img1.png" alt="demoimage" className={styles.img1}/>
      </div>
      <div className={styles.rightdiv}>
      <h1 className={styles.headingdiv2}>
          <span className={styles.content2}>MAXSHOP<br />IS ONE<br />STOP SHOP<br />FOR YOUR<br />GAMING<br />VOUCHERS</span>
          <br />
        </h1>
        <p className={styles.para}>
          Get your favourite game <br />vouchers delivered to your <br />inbox in just 5 seconds!
        </p>
        {/* See More button */}
          <a href="#" className={styles.linktext}>
            <div className={styles.buttondiv}>
            <p className={styles.buttontext}>SEE MORE</p> <span className={styles.icon2}><Box><ArrowForwardIcon /></Box></span>
            </div>
          </a>
          {/* ************ */}
      </div>
    </div>
{/* *********************************** */}

{/* Third Part of Landing Page */}

    <div className={styles.container3}>
        <div className={styles.maindiv}>
           <div className={styles.leftdiv3}>
                <h1 className={styles.content3}>Share your <br />feedback!</h1>
                <p className={styles.para3}>If you have a request for a game voucher not listed on the website, <br />Do reach out to us at <span><a href="#" className={styles.customerlink}>customers@maxshop.com</a></span></p>
                {/* Other Agreement and Policy Links */}
                <div className={styles.links3}>
                    <a href="#" className={styles.otherlink}>Service Agreement</a>
                    <a href="#" className={styles.otherlink}>Privacy Policy</a>
                    <a href="#" className={styles.otherlink}>Refund Policy</a>
                </div>
           </div>
           <div className={styles.rightdiv3}>
            <h1 className={styles.address}>91, Vasudev Nagar, <br />Indore, Madhya Pradesh, <br />India <br />452007</h1>
            {/* Contact Link */}
            <a href="#" className={styles.weblink}>hello@maxshop.com</a>
            <div className={styles.social}>                
                <TwitterIcon className={styles.social_icons}/>
                <FacebookIcon className={styles.social_icons}/>
                <YouTubeIcon className={styles.social_icons_youtube}/>
                <InstagramIcon className={styles.social_icons}/>
            </div>
           </div>
        </div>
    </div>
  
{/* ************************************* */}
    </>
  )
}
