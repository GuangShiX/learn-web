import styles from './footer.module.sass'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.breadCrumbs}>
        <div className={styles.breadCrumbsPath}>
          <div className={styles.breadCrumbsList}>
            <svg className={styles.icon} viewBox='0 0 14 44' xmlns='http://www.w3.org/2000/svg'>
              <path d='m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z'></path>
            </svg>
            <div className={styles.breadCrumbsItem}>
              iPhone
            </div>
            <div className={styles.breadCrumbsItem}>
              iPhone 17 Pro
            </div>
          </div>
        </div>
        <div className={styles.directory}>
          <div className={styles.column}>
            <div className={styles.columnBox}>
              <div className={styles.title}>选购及了解</div>
              <div className={styles.button}>商店</div>
              <div className={styles.button}>Mac</div>
              <div className={styles.button}>iPad</div>
              <div className={styles.button}>iPhone</div>
              <div className={styles.button}>Watch</div>
              <div className={styles.button}>Vison</div>
              <div className={styles.button}>AirPods</div>
              <div className={styles.button}>家具</div>
              <div className={styles.button}>AirTag</div>
              <div className={styles.button}>配件</div>
              <div className={styles.button}>App Store 充值卡</div>
            </div>
            <div className={styles.columnBox}>
              <div className={styles.title}>Apple钱包</div>
              <div className={styles.button}>Apple Pay</div>
              <div className={styles.button}>Apple Pay 公交</div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.columnBox}>
              <div className={styles.title}>账户</div>
              <div className={styles.button}>管理你的Apple账户</div>
              <div className={styles.button}>Apple Store 账户</div>
              <div className={styles.button}>iCloud.com</div>
            </div>
            <div className={styles.columnBox}>
              <div className={styles.title}>娱乐</div>
              <div className={styles.button}>Apple Music</div>
              <div className={styles.button}>Apple 播客</div>
              <div className={styles.button}>Apple Store</div>
            </div>

          </div>
          <div className={styles.column}>
            <div className={styles.columnBox}>
              <div className={styles.title}>Apple Store 商店</div>
              <div className={styles.button}>查找零售店</div>
              <div className={styles.button}>Genius Bar 天才吧</div>
              <div className={styles.button}>Today at Apple</div>
              <div className={styles.button}>团体预约</div>
              <div className={styles.button}>Apple 夏令营</div>
              <div className={styles.button}>Apple Store App</div>
              <div className={styles.button}>认证的翻新产品</div>
              <div className={styles.button}>Apple Trade In 换购计划</div>
              <div className={styles.button}>分期付款</div>
              <div className={styles.button}>订单状态</div>
              <div className={styles.button}>选购帮助</div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.columnBox}>
              <div className={styles.title}>商务应用</div>
              <div className={styles.button}>Apple 与商务</div>
              <div className={styles.button}>商务选购</div>
            </div>
            <div className={styles.columnBox}>
              <div className={styles.title}>教育应用</div>
              <div className={styles.button}>Apple 与教育</div>
              <div className={styles.button}>高校师生选购</div>
            </div>
            <div className={styles.columnBox}>
              <div className={styles.title}>Apple 价值观</div>
              <div className={styles.button}>辅助功能</div>
              <div className={styles.button}>教育</div>
              <div className={styles.button}>环境责任</div>
              <div className={styles.button}>隐私</div>
              <div className={styles.button}>供应链创新</div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.columnBox}>
              <div className={styles.title}>关于 Apple</div>
              <div className={styles.button}>Newsroom</div>
              <div className={styles.button}>Apple 管理层</div>
              <div className={styles.button}>工作机会</div>
              <div className={styles.button}>创造就业</div>
              <div className={styles.button}>商业道德与合规性</div>
              <div className={styles.button}>活动</div>
              <div className={styles.button}>联系 Apple</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
