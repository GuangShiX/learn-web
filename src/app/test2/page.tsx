import styles from "./page.module.sass";

export default function Test(){
    return (
      <div className={styles.page}>
        <div className={styles.topButtonBox}>
            <div className="icon">
              <i className="fas fa-search"></i>
            </div>
            <div className={styles.button}>商店</div>
            <div className={styles.button}>Mac</div>
            <div className={styles.button}>iPad</div>
            <div className={styles.button}>iPhone</div>
            <div className={styles.button}>Watch</div>
            <div className={styles.button}>Vison</div>
            <div className={styles.button}>AirPods</div>
            <div className={styles.button}>家具</div>
            <div className={styles.button}>娱乐</div>
            <div className={styles.button}>配件</div>
            <div className={styles.button}>技术支持</div>

          </div>
          <div className={styles.wrapper}>
            <div className={styles.text}>这是宣传内容</div>
          </div>
          <div className={styles.box}>
            <div className={styles.title}>This is GXLing's test page</div>
            <div className={styles.text}>
              This page is used to test the GXLing's Next.js project. It is not a real page, but a
              test page.
            </div>
          </div>
        </div>
        )
        }
