import styles from './footer.module.sass'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.shop}>
        <div className={styles.text}>
          更多选购方式：查找你附近的 Apple Store 零售店及更多门店，或者致电 400-666-8800。
        </div>
      </div>

      <div className={styles.legal}>
        <div className={styles.copyright}>
          Copyright © 2025 Apple Inc. 保留所有权利。
        </div>
        <div className={styles.link}>
          隐私政策
        </div>
        <div className={styles.link}>
          使用条款
        </div>
        <div className={styles.link}>
          销售政策
        </div>
        <div className={styles.link}>
          法律信息
        </div>
        <div className={styles.link}>
          网站地图
        </div>
      </div>
    </footer>
  )
}
