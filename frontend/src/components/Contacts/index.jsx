import "./style.scss"
import Heading from "../common/Heading";
import MapComponent from "../common/MapComponent.jsx";

function Contacts() {

    function submit(e) {
        e.preventDefault()
    }

    return (
        <div className="contacts">
            <div className="contacts-wrapper">
                <div className="left">
                    <Heading size={1.8}>Контакты</Heading>

                    <div className="contact-line">
                        <h4>Задайте нам любой вопрос</h4>
                        <p>+99833 4747477</p>
                    </div>
                    <div className="contact-line">
                        <h4>Электронная почта</h4>
                        <p>alisherxujanov163@gmail.com</p>
                    </div>
                    <div className="contact-line">
                        <h4>Юридический адрес</h4>
                        <p>050040/A15E3H4, проспект Аль-Фараби, 77/7, 10 этаж, Алматы, Казахстан
                            Z05T3D0, проспект Мангилик Ел, 55/20, Офисы 345-346, Астана, Казахстан</p>
                    </div>
                </div>
                <div className="right">
                    <form onSubmit={submit}>
                        <input type="text" placeholder="Ваше имя" required />
                        <input type="text" placeholder="Ваша почта" required />
                        <input type="number" placeholder="Ваш телефон" required />
                        <button type="submit">Отправить</button>
                    </form>
                </div>
            </div>

            <div className="maps-wrapper">
                <div className="map-1">
                    <MapComponent />
                </div>
                <div className="map-2">
                    <MapComponent />
                </div>
            </div>
        </div>
    );
}

export default Contacts;