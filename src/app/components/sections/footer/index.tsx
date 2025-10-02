import styles from './footer.module.sass'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.breadCrumbs}>
        <div className={styles.breadCrumbsPath}>
          <div className={styles.text1}>iPhone</div>
          <div className={styles.text2}>iPhone 17 Pro</div>
        </div>
      </div>
    </footer>
  )
}
