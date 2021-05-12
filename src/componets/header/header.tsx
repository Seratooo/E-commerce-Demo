import styles from './Header.module.css'
import Image from 'next/image'

export const Header = () =>{
  return(
    <>
  <header className={styles.cabacalho} >
    <div className={styles.content}> 
      <ul className={styles.list}>
        <li className={styles.listItem}><a href="#">Quem-Somos</a></li>
        <li className={styles.listItem}><a href="#">Nossos Produtos</a></li>
        <li className={styles.listItem}><a href="#">Lojas</a></li>
        <li className={styles.listItem}><a href="#">Promoções</a></li>
        <li className={styles.listItem}><a href="#">Contactos</a></li>
      </ul>
    </div>
  </header>
    <div className={styles.Imagem}>
        <img src="/image.svg" alt="Ecommerce" />
        <h2>E-commerce<br/> <strong>Mangues</strong></h2>
    </div>
  </>
  )
}