import styles from './page.module.sass'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Image from 'next/image'

export default function Test() {
  return (
    <div className={styles.page}>
      <div className={styles.topButtonBox}>
        <svg className={styles.icon} viewBox='0 0 14 44' xmlns='http://www.w3.org/2000/svg'>
          <path d='m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z'></path>
        </svg>
        {/*<i className='fab fa-apple'></i>*/}
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
        <div className={styles.text1}>
          用 iPhone 13 或后续机型来换购 iPhone 17 Pro,预计可享 RMB 1100 至 RMB 6550 的折抵优惠。
        </div>
      </div>
      <div className={styles.TopVideoWrapper}>
        <Image src='/test2.gif' width={600} height={800} alt={'error'} />
        <Image src='/Apple.png' width={600} height={800} alt={'error'} />
        <div className={styles.text2}>
          This page is used to test the GXLing's Next.js project. It is not a real page, but a test
          page.
        </div>
      </div>
      <div className={styles.VideoBox}>
        <div className={styles.SectionHeader}>
          <div className={styles.headline}>
            先看重点
          </div>
          <div className={styles.headlink1}>
            观看影片
          </div>
        </div>
        <Image src='/test2.gif' width={600} height={800} alt={'error'} />
        <Image src='/test2.gif' width={600} height={800} alt={'error'} />
        <Image src='/test2.gif' width={600} height={800} alt={'error'} />
        <div className={styles.text2}>
          This page is used to test the GXLing's Next.js project. It is not a real page, but a test
          page.
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.title}>This is GXLing's test page</div>
      </div>
    </div>
  )
}
