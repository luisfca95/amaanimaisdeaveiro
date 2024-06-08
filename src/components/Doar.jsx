import '../styles/Doar.css';

export default function Doar() {
    return (
        <div>
            <div className="banner">
                <img src="/images/banner.jpg" alt=""/>
                <div className="title"><h1>Doar</h1></div>
            </div>
            <h2>Ajude-nos a salvar vidas!</h2>
            <p>O seu donativo faz toda a diferença. Com a sua ajuda, podemos garantir todos os cuidados necessários aos nossos patudos.</p>
            <div className="content donations">
                <div className="mbway">
                    <img src="images/mb.png" alt="MBWay"></img>
                    <h2>MBWay</h2>
                    <p>910 425 702</p>
                </div>
                <div className="wire">
                    <img src="images/tb.png" alt="Transferência Bancária"></img>
                    <h2>Transferência Bancária</h2>
                    <p>PT50 0036 0379 99106009374 74</p>
                </div>
            </div>
        </div>

    );
}