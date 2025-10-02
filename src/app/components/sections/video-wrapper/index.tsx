import Image from 'next/image'

import styles from "./videoWrapper.module.sass"

export default function videoWrapper(){
  return (
    <div className={styles.videoWrapper}>
      <Image
        className={styles.image}
        src='/images/iPhone17ProMax/hero__bdntboqignj6_large_2x.jpg'
        width={2880}
        height={1682}
        alt={'iPhone 17 Pro Max Image'} />
      <div className={styles.themeDark}>
        <div className={styles.button}>购买</div>
        <div className={styles.text}>RMB 375/月起或 RMB 8999 起**</div>
      </div>
    </div>
  );
}