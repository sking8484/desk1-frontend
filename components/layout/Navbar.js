import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'


export default function Navbar() {
  return (
    <div className = {styles.container}>
      <div className = {`${styles.title}`}>
        <Link href = '/'>
          <a>DeskOne</a>
        </Link>
      </div>
      <div className = {`${styles.option_container}`}>
        <ul className = {styles.option_list}>
          <li>
            <Link href = '/performance'>
              <a>Relative Performance</a>
            </Link>
          </li>
          <li>
            <Link href = '/positioning'>
              <a>Positioning</a>
            </Link>
          </li>
          <li>
            <Link href = '/securities'>
              <a>Securities</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}