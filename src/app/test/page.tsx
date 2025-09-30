import React from 'react';
import styles from './page.module.sass';

const Page = () => {
  const categories = ['全部商品', '奶粉', '婴儿用品', '洗护', '玩具'];
  const products = [
    { id: 1, name: '婴儿奶粉 1段', price: '¥299.00' },
    { id: 2, name: '婴儿湿巾 80抽', price: '¥39.90' },
    { id: 3, name: '婴儿洗发水', price: '¥59.00' },
    { id: 4, name: '益智玩具', price: '¥129.00' },
  ];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <input
          type="text"
          placeholder="搜索商品、品牌或关键字（例如：奶粉）"
          className={styles.searchBar}
        />
      </header>

      <div className={styles.content}>
        <nav className={styles.sidebar}>
          {categories.map((category, index) => (
            <div key={index} className={styles.categoryItem}>
              {category}
            </div>
          ))}
        </nav>

        <main className={styles.productGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImage} />
              <div className={styles.productName}>{product.name}</div>
              <div className={styles.productPrice}>{product.price}</div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Page;