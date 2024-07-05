import '../styles/SobreNos.css';

export default function SobreNos() {
    return (
        <div>
            <div className="banner">
                <h1>Sobre a AMA</h1>
                <img src="./images/banners/sobre.jpg" alt=""/>
            </div>
            <main className="content">
                <div className="aboutUs">
                    <div className="wrapper">
                        <div className="text">
                            <h2>Quem somos?</h2>
                            <p>A Associação de Animais de Aveiro iniciou as suas atividades a 11 de Julho de 2018. O objetivo principal é colaborar com o Abrigo Quintã do Loureiro<span>, sendo que grande parte dos seus dirigentes fazem voluntariado neste Abrigo e conhecem as suas necessidades</span>.</p>  
                        </div>
                        <div className="image">
                            <img src="./images/quemsomos/quemsomos.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="image">
                            <img src="./images/quemsomos/quefazemos.jpg" alt=""/>
                        </div>
                        <div className="text">
                            <h2>O que fazemos?</h2>
                            <p>Providenciamos alimentação, cuidados de saúde, abrigo e muito amor.</p>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="text">
                            <h2>Como ajudar?</h2>
                            <p>Adote. Seja Família de Acolhimento Temporário. Apadrinhe. Seja Voluntário. Faça um Donativo.</p>
                        </div>
                        <div className="image">
                            <img src="./images/quemsomos/comoajudar.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
