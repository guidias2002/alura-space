import React from 'react'
import styles from './Populares.module.scss'
import fotosPopulares from './fotos-populares.json'
import CardPopular from './CardPopular'

export default function Populares() {
  return (
    <aside className={styles.populares}>
      <h2>Populares</h2>
      <CardPopular fotoPopular={fotosPopulares} styles={styles}/>
      <button>Ver mais fotos</button>
    </aside>
  )
}
