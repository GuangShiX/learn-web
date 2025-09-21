import styles from "./page.module.sass";

export default function Test(){
    return (
      <div className={styles.page}>
        {/*<div className={styles.buttonBox}>*/}
        {/*  <div className={styles.button}>Home</div>*/}
        {/*  <div className={styles.button}>Docs</div>*/}
        {/*  <div className={styles.button}>OTTO</div>*/}
        {/*</div>*/}
        <ul id={styles.globalnavList} className={styles.globalnavList}>
            <li>
                <a href={""}>
                    商店
                </a>
            </li>
            <li>
                <a href={""}>
                    Mac
                </a>
            </li>
            <button
                className={styles.menuButton}
                aria-label="商店">
            </button>
        </ul>

         {/*<div className={styles.box}>*/}
         {/*  <div className={styles.title}>This is GXLing's test page</div>*/}
         {/*  <div className={styles.text}>*/}
         {/*    This page is used to test the GXLing's Next.js project. It is not a real page, but a*/}
         {/*    test page.*/}
         {/*  </div>*/}
         {/*</div>*/}
       </div>
    )
}
