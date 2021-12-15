import Card from '../card-item/card-item'
import './cards.scss'

// images
import phoenix from './../../../img/Phoenix.svg'
import jett from './../../../img/Jett.png'

// images

function Cards() {
    return(
        <div className="cards__wrapper">
             <div className="cards__inner">
                 <Card background={"Black"} img={phoenix} titleCard={"Phoenix"} subTitleCard={"United Kingdom"}/>
                 <Card background={"Black"} img={jett} titleCard={"Jett"} subTitleCard={"South Korea"}/>
             </div>
        </div>
       
    )
}

export default Cards