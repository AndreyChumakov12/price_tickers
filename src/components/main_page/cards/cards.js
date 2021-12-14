import Card from '../card-item/card-item'
import './cards.scss'

function Cards() {
    return(
        <div className="cards__wrapper">
             <div className="cards__inner">
                 <Card/>
             </div>
        </div>
       
    )
}

export default Cards