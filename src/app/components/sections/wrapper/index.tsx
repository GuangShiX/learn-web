import styles from "./wrapper.module.sass"

export default function wrapper(){
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>用 iPhone 13 或后续机型来换购 iPhone 17 Pro,预计可享 RMB 1100 至 RMB 6550 的折抵优惠</div>
      <div className={styles.a}>*</div>
      <div className={styles.text}>。</div>
    </div>
  );
}