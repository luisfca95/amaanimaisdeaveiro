import '../styles/Doar.css';

export default function Doar() {
    return (
        <div>
            <div className="banner">
                <img src="/images/banners/doar.jpg" alt=""/>
                <div className="title"><h1>Doar</h1></div>
            </div>

            <div className="content">
                <div className="donationList">
                    <h2>O seu donativo ajuda a garantir:</h2>
                    <ul>
                        <li>Cuidados veterinários para animais doentes e feridos, incluindo cirurgias, medicação, fisioterapia e acompanhamento especializado.</li>
                        <li>Alimentação e abrigo seguro num ambiente livre de maus-tratos, proporcionando bem-estar físico e emocional aos animais resgatados.</li>
                    </ul>
                </div>

                <div className="donations">
                    <div className="mbway">
                        <img src="/images/mb.png" alt="MBWay" />
                        <h3>MBWay</h3>
                        <p>910 425 702</p>
                    </div>
                    <div className="wire">
                        <img src="/images/tb.png" alt="Transferência Bancária" />
                        <h3>IBAN</h3>
                        <p>PT50 0036 0379 99106009374 74</p>
                    </div>
                </div>

                <div className="thanks">
                    <p>Obrigado pelo seu donativo! <br/> A sua contribuição é importante para continuarmos a proteger os animais que mais precisam.</p>
                    <p>Juntos, fazemos a diferença!</p>
                </div>
            </div>
        </div>
    );
}