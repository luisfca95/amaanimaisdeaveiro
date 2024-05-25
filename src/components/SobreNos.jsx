import '../styles/SobreNos.css';

export default function SobreNos() {
    return (
        <div>
            <div className="aboutUs">
                <h1>AMA - Animais de Aveiro</h1>
                <div className="wrapper">
                    <div className="wrapperRight">
                        <h2>Quem somos?</h2>
                        <p>A Associação de Animais de Aveiro iniciou as suas atividades a 11 de Julho de 2018. O objetivo principal é colaborar com o Abrigo Quintã do Loureiro, sendo que grande parte dos seus dirigentes fazem voluntariado neste Abrigo e conhecem as suas necessidades.</p>  
                    </div>
                    <div>
                        <img src="/images/quemsomos1.jpg" alt=""/>
                    </div>
                </div>
                <div className="wrapper">
                    <div>
                        <img src="/images/quemsomos2.jpg" alt=""/>
                    </div>
                    <div className="wrapperLeft">
                        <h2>O que fazemos?</h2>
                        <p>Providenciamos alimentação, cuidados de saúde, abrigo e muito amor.</p>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="wrapperRight">
                        <h2>Como ajudar?</h2>
                        <p>Adote. Seja Família de Acolhimento Temporário. Apadrinhe. Seja Voluntário. Faça um Donativo.</p>
                    </div>
                    <div>
                        <img src="/images/quemsomos3.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>

    );
}