"use client"; // 标记为客户端组件

import Image from 'next/image';
import React, { useState } from 'react';


import styles from './page.module.sass'; // 正确导入Sass模块

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// 示例商品数据（移到组件外部，避免每次渲染重新创建）
const sampleItems = [
  { id: 1, name: '婴儿奶粉 1段', price: 299, image: '/1.jpg' },
  { id: 2, name: '婴儿湿巾 80抽', price: 39.9, image: '/2.jpg' },
  { id: 3, name: '婴儿爽身粉', price: 49.9, image: '/3.jpg' },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // 初始化购物车
  React.useEffect(() => {
    setCartItems(sampleItems.map(item => ({ ...item, quantity: 1 })));
  }, []);

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity > 0) {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className={styles.cartPage}>
      <h1>我的购物车</h1>

      {cartItems.length === 0 ? (
        <p className={styles.emptyCart}>购物车为空</p>
      ) : (
        <div className={styles.cartContainer}>
          <div className={styles.cartItems}>
            {cartItems.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <Image
                  src={item.image}
                  alt={item.name}
                  className={styles.itemImage}
                  width={100}
                  height={100}
                />
                <div className={styles.itemDetails}>
                  <div className={styles.itemName}>{item.name}</div>
                  <div className={styles.itemPrice}>¥{item.price.toFixed(2)}</div>
                </div>

                <div className={styles.quantityControl}>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                    min="1"
                  />
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>
                </div>

                <div className={styles.itemTotal}>¥{(item.price * item.quantity).toFixed(2)}</div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className={styles.removeButton}
                >
                  删除
                </button>
              </div>
            ))}
          </div>

          <div className={styles.cartFooter}>
            <div className={styles.totalRow}>
              <span>总计:</span>
              <span className={styles.totalPrice}>¥{getTotal().toFixed(2)}</span>
            </div>
            <button className={styles.checkoutButton}>结算</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;