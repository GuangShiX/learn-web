import styles from './highlights.module.sass'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Image from 'next/image'

export default function Test() {
  return (
    <div className={styles.page}>
      <div className={styles.section1}>
        <div className={styles.sectionHeader}>
          <div className={styles.headline}>先刷重点</div>
          <div className={styles.headLinkBox}>
            <div className={styles.headerLinkText}>观看影片</div>
            <div className={styles.headLinkIco}>X</div>
          </div>
        </div>
        <div className={styles.bigVideoBox}>
          <div className={styles.videoBox}>
            <Image
              className={styles.video}
              src='/images/iPhone17ProMax/highlights_design_endframe__flng.jpg'
              width={1868 * 0.3}
              height={1256 * 0.3}
              alt={'error'}
            />
            <div className={styles.text1}>热锻铝金属一体成型机身，造就巅峰实力。</div>
          </div>
          <div className={styles.videoBox}>
            <Image
              className={styles.video}
              src='/images/iPhone17ProMax/highlights_chip_endframe__eiseso.jpg'
              width={1868 * 0.3}
              height={1256 * 0.3}
              alt={'error'}
            />
            <div className={styles.text2}>
              A19 Pro，第三代 3 纳米芯片，配合蒸发冷却技术,
              <br />
              强势性能火力全开。电池续航也大大突破。
            </div>
          </div>
          <div className={styles.videoBox}>
            <Image
              className={styles.video}
              src='/images/iPhone17ProMax/highlights_zoom_endframe__qilnpa.jpg'
              width={1868 * 0.3}
              height={1256 * 0.3}
              alt={'error'}
            />
            <div className={styles.text3}>
              顶尖的 Pro 级拍摄系统。后摄全上 4800 万像素融合式摄像头，变焦幅度更是 iPhone
              历来最大。
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
