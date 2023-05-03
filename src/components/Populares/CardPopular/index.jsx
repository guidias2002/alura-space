import React from 'react'

export default function CardPopular({fotoPopular, styles}) {
  return (
    <ul className={styles.populares__imagens}>
        {fotoPopular.map((foto) => {
          return (
            <li key={foto.id}>
              <img src={foto.path} alt={foto.alt} />
            </li>
          )
        })}
      </ul>
  )
}
