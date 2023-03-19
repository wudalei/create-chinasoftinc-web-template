/*
 * @Author: wudalei
 * @LastEditors: wudalei
 * @LastEdit: wudalei
 * @Descripttion: 
 * @params: 
 * @Date: 2023-02-22 09:52:10
 * @LastEditTime: 2023-02-22 09:55:35
 */
import React from 'react';
import styles from './{{{name}}}{{{ cssExt }}}';

export default function Page() {
  return (
    <div>
      <h1 className={styles.title}>Page123 {{{ name }}}</h1>
    </div>
  );
}
