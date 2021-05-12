import styles from './items.module.css'
interface iDados{
  titulo: string;
}

export const Item = (Props:iDados) =>{
    return(
      <div className={styles.ground}>
        <h2>{Props.titulo}</h2>
      <div className={styles.container}>
         <div className={styles.content}>
           <img src="/item1.jpg" alt="Item Image" />
           <p>Titulo do Item</p>
         </div>
         <div className={styles.content}>
           <img src="/item2.jpg" alt="Item Image" />
           <p>Titulo do Item</p>
         </div>  
         <div className={styles.content}>
           <img src="/item1.jpg" alt="Item Image" />
           <p>Titulo do Item</p>
         </div>
         <div className={styles.content}>
           <img src="/item2.jpg" alt="Item Image" />
           <p>Titulo do Item</p>
         </div>    
      </div>
      </div>
    )
  }