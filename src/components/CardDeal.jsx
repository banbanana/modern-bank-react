import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/> in few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[480px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus soluta praesentium ullam voluptatibus excepturi. Corporis nobis optio aspernatur fugiat excepturi.</p>
      <Button styles='mt-10'/>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[100%] aspect-square'/>
    </div>
    
  </section>
)

export default CardDeal