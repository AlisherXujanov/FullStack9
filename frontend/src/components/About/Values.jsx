import Diamond from '../../assets/icons/diamond.png'
import Graph from '../../assets/icons/graph.png'
import Bag from '../../assets/icons/bag.png'
import HandShake from '../../assets/icons/handShake.png'

function Values(props) {
    return (
        <div className="info">
            <div className="value">
                <img src={Diamond} alt="Diamond" />
                <div className='value-content'>
                    <h1>Стабильность</h1>
                    <p>Сохранность капитала клиентов приоритетнее доходности - каждое решение взвешено, обдумано и оценено.</p>
                </div>
            </div>
            <div className="value">
                <img src={Graph} alt="Graph" />
                <div className='value-content'>
                    <h1>Устойчивость</h1>
                    <p>Устойчивое развитие — основа нашей бизнес-модели. Начиная с поиска и оценки предоставившихся возможностей для бизнеса до последовательного развития наших проектов и реаллокации капитала в новые возможности.</p>
                </div>
            </div>
            <div className="value">
                <img src={Bag} alt="Bag" />
                <div className='value-content'>
                    <h1>Команда</h1>
                    <p>Команда Fonte Capital LTD – основа успеха. Каждый сотрудник Компании – это ценный актив в рабочем процессе фонда. Наша цель – создание такой рабочей атмосферы и условий, которые позволят максимально раскрыть потенциал каждого сотрудника для достижения максимального результата.</p>
                </div>
            </div>
            <div className="value">
                <img src={HandShake} alt="HandShake" />
                <div className='value-content'>
                    <h1>Репутация</h1>
                    <p>Ответственность и этика – основа нашей деятельности. Деятельность в рамках лучших практик (Корпоративный Кодекс этики и стандарты профессионального поведения) позволяет предлагать клиентам более качественные инвестиционные продукты, отвечающие высоким требованиям и ожиданиям самых требовательных клиентов.</p>
                </div>
            </div>
        </div>
    );
}

export default Values;