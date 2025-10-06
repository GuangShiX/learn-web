'use client'
import { clsx } from 'clsx'
import Image from 'next/image'
import { useRef, useState } from 'react'

import '@fortawesome/fontawesome-free/css/all.min.css'

import styles from './highlights.module.sass'

export default function Test() {
  // 视频数据数组 - 把重复的数据提取出来
  const videoData = [
    {
      id: 1, // 唯一标识，用于 React 的 key
      image: '/images/iPhone17ProMax/highlights_design_endframe__flng.jpg',
      text: '热锻铝金属一体成型机身，造就巅峰实力。',
      textClass: styles.text1, // 每个文本的样式类
    },
    {
      id: 2,
      image: '/images/iPhone17ProMax/highlights_chip_endframe__eiseso.jpg',
      text: 'A19 Pro，第三代 3 纳米芯片，配合蒸发冷却技术, 强势性能火力全开。电池续航也大大突破。',
      textClass: styles.text2,
    },
    {
      id: 3,
      image: '/images/iPhone17ProMax/highlights_zoom_endframe__qilnpa.jpg',
      text: '顶尖的 Pro 级拍摄系统。后摄全上 4800 万像素 融合式摄像头，变焦幅度更是 iPhone 历来最大。',
      textClass: styles.text3,
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  // 创建一个 ref 来引用滚动容器
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // 切换图片的函数
  const handleImageSwitch = (index: number) => {
    setActiveIndex(index)
    // 如果容器存在，执行平滑滚动
    if (scrollContainerRef.current) {
      // 计算每个图片的宽度（包括间距）
      const containerWidth = scrollContainerRef.current.offsetWidth
      // 滚动到指定位置
      scrollContainerRef.current.scrollTo({
        left: containerWidth * index,
        behavior: 'smooth', // 平滑滚动效果
      })
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.section1}>
        <div className={styles.sectionHeader}>
          <div className={styles.headline}>先刷重点</div>
          <a href='#' className={styles.headLinkBox}>
            <span className={styles.headerLinkText}>观看影片</span>
            <i className={`fas fa-play-circle ${styles.headLinkIco}`} aria-hidden='true'></i>
          </a>
        </div>
        <div ref={scrollContainerRef} className={styles.bigVideoBox}>
          <div className={styles.bigVideoBoxContent}>
            {videoData.map((item) => (
              <div key={item.id} className={styles.videoBox}>
                <Image className={styles.video} src={item.image} width={1868 * 0.3} height={1256 * 0.3} alt={'error'} />
                <div className={item.textClass}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.controlBar}>
          <div className={styles.controlBox}>
            {videoData.map((item, index) => (
              <div
                key={item.id}
                className={clsx(styles.button, activeIndex == index ? styles.activeButton : null)}
                onClick={() => handleImageSwitch(index)}
              ></div>
            ))}
          </div>
          <i className={styles.controlIco}></i>
        </div>
      </div>
    </div>
  )
}
