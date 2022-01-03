import './main_page.scss';
import Header from './header/header';
import Cards from './cards/cards';
import Footer from './footer/footer';



function MainPade() {
    return(
        <main className="main__page">
            <Header/>
            <div className="main__content">
                {/* <Cards/> */}

            </div>
            <Footer/>
        </main>
    )
}

export default MainPade
