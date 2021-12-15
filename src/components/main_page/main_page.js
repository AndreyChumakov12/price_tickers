import './main_page.scss';
import Header from './header/header';
import Cards from './cards/cards';
import Footer from './footer/footer';



function MainPade() {
    return(
        <div className="main__page">
            <Header/>
            <div className="main__content">
                <Cards/>

            </div>
            <Footer/>
        </div>
    )
}

export default MainPade
