import '../styles/Doar.css';

export default function Doar() {
    return (
        <div>
            <div className="banner">
                <img src="/images/banners/doar.jpg" alt=""/>
                <div className="title"><h1>Doar</h1></div>
            </div>

            <div className="donationList">
                <p>O seu donativo ajuda a garantir:</p>
                <ul>
                    <li>Cuidados veterinários para animais doentes e feridos, incluindo cirurgias, medicação, fisioterapia e acompanhamento especializado.</li>
                    <li>Alimentação e abrigo seguro num ambiente livre de maus-tratos, proporcionando bem-estar físico e emocional aos animais resgatados.</li>
                </ul>
            </div>

            <div className="content donations">
                <div className="mbway">
                    <img src="/images/mb.png" alt="MBWay" />
                    <h2>MBWay</h2>
                    <p>910 425 702</p>
                </div>
                <div className="wire">
                    <img src="/images/tb.png" alt="Transferência Bancária" />
                    <h2>IBAN</h2>
                    <p>PT50 0036 0379 99106009374 74</p>
                </div>
            </div>

            <div className="thanks">
                <p>Obrigado pelo seu donativo! A sua contribuição é importante para continuarmos a cuidar e proteger os animais que mais precisam.</p>
                <p>Juntos, fazemos a diferença!</p>
            </div>
        </div>

    );
}