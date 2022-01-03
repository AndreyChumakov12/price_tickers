import Card from '../card-item/card-item'
import './cards.scss'



// images

function Cards() {
    return(
        <div className="lesson_cards__wrapper">
                <button className="add_lesson">add</button>
             <div className="lesson_cards"> 
                 <Card background={"Black"} numberLesson={1} subTitleCard={""}/>
                 <Card background={"Black"} numberLesson={2} subTitleCard={""}/>
                 <Card background={"Black"} numberLesson={3} subTitleCard={""}/>
                 <Card background={"White"} numberLesson={4} subTitleCard={""}/>
                 <Card background={"Black"} numberLesson={5} subTitleCard={""}/>
             </div>
        </div>
       
    )
}

export default Cards