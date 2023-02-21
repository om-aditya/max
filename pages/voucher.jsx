import styles from '@/styles/voucher.module.css';
import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
export default function voucher() {
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
            <div className={styles.leftdiv}>
                <div className={styles.topdiv}>
                    <img src="assets/steam.png" alt="steamlogo" className={styles.steam}/>
                    <div className={styles.topsidediv}>
                    <div className={styles.shortdiv}>
                    <img src="assets/right.png" alt="correctsymbol" className={styles.check}/>
                    <p className={styles.shortpara}>can be activated in <span className={styles.color}>India</span> </p>
                    </div>
                    <div className={styles.shortdiv}>
                    <img src="assets/right.png" alt="correctsymbol" className={styles.check}/>
                    <p className={styles.shortpara}>can be activated on <span className={styles.color}>Steam</span></p>
                    </div>
                    {/* Check Activation Guide Link */}
                    <a href="#" className={styles.checkguide}>Check activation guide</a>
                    </div>
                </div>
                <div className={styles.bottomdiv}>
                    <h1 className={styles.heading}>Product description</h1>
                    <p className={styles.bottompara}>A Steam Wallet Code is a digital code with a specified amount you may add to your Steam Wallet account. It permits you to buy items from the Steam shop. Many gamers use or are familiar with Steam, one of the most prestigious gaming platforms that provide millions of players with up-to-date gaming material. Steam Code will offer you just adequate money for your Steam Wallet to browse the Steam shop and select games that suit your preferences and playstyle.</p>
                </div>
            </div>
            <div className={styles.rightdiv}>
                <h1 className={styles.rightheading}>Select the voucher</h1>
                <div className={styles.boxdiv}>
                    <div className={styles.divcolor}><span className={styles.boxtext}>130</span></div>
                    <div className={styles.divcolor}><span className={styles.boxtext}>325</span></div>
                    <div className={styles.div}><span className={styles.boxtext}>650</span></div>
                    <div className={styles.divcolor}><span className={styles.boxtext}>975</span></div>
                </div>
                <h1 className={styles.rightheading}>Quantity</h1>
                <input type="number" className={styles.input}/>
                <h1 className={styles.rightheading}>Amount</h1>
                <input type="number" className={styles.input}/>
                <h1 className={styles.rightheading}>Payment</h1>
                <div className={styles.boxdiv}>
                    <div className={styles.divcolor}><img src="assets/upi.png" alt="upilogo" className={styles.divimg}/></div>
                    <div className={styles.div}><img src="assets/card2.png" alt="cardlogo" className={styles.divimg}/></div>
                    <div className={styles.div}><img src="assets/bank.png" alt="cardlogo" className={styles.divimg}/></div>
                </div>
                {/* Buy Now Button */}
                <a href="#" className={styles.linktext}>
                <div className={styles.buttondiv}>
                <p className={styles.buttontext}>BUY NOW</p> <span className={styles.icon}><Box><ArrowForwardIcon /></Box></span>            
                </div>
                </a> 
                {/* ************ */}
            </div>
        </div>
    </div>
    </>
  )
}
