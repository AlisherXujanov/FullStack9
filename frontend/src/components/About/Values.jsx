import Diamond from '../../assets/icons/diamond.png'

function Values(props) {
    return (
        <div className="info">
            <div className="value">
                <img src={Diamond} alt="Diamond" />
                <div className='value-content'>
                    <h2>Стабильность</h2>
                    <p>Сохранность капитала клиентов приоритетнее доходности - каждое решение взвешено, обдумано и оценено.</p>
                </div>
            </div>
        </div>
    );
}

export default Values;