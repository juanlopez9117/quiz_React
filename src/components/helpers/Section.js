import model_1 from '../../imagenes/model_1.jpg'
import model_2 from '../../imagenes/model_2.jpg'
import model_3 from '../../imagenes/model_3.webp'
import model_4 from '../../imagenes/model_4.webp'
import model_5 from '../../imagenes/model_5.webp'
import model_6 from '../../imagenes/model_6.jpg'
const Section = () =>{
    return (
        <section className="section">
           <a href="">
           <img className='model' src={model_1} alt=""/>
           </a>
           <a href="">
           <img className='model' src={model_2} alt=""/>
           </a>
           <a href="">
           <img className='model' src={model_3} alt=""/>
           </a>
           <a href="">
           <img className='model' src={model_4} alt=""/>
           </a>
           <a href="">
           <img className='model' src={model_5} alt=""/>
           </a>
           <a href="">
           <img className='model' src={model_6} alt=""/>
           </a>
        </section>
    )
}
export default Section;