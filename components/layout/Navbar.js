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
            <Link href = '/'>
              <a>Performance</a>
            </Link>
          </li>
          <li>
            <Link href = '/'>
            Positioning
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}