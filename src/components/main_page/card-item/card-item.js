import './card-item.scss'


function Card({numberLesson, subTitleCard, background = "Black"}) {

    let clasesCard = 'card'
    if(background == "Black"){
        clasesCard += ' black';
    }
    else{
        clasesCard += ' white'
    }

return(
    <div className={clasesCard}>
        <div className="card__title">
            <h1>Lesson {numberLesson}</h1>
            <h2>{subTitleCard}</h2>
        </div>

    </div>
)
}

export default Card