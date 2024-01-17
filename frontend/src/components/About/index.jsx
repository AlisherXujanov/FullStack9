import './style.scss'
import Heading from "../common/Heading"
import Licence from "./licence.png"
import AboutImg from "./about.png"
import Values from "./Values.jsx"
import Carousel from "../common/Carousel"

import Img1 from '../../assets/images/img1.png'
import Img2 from '../../assets/images/img2.png'
import Img3 from '../../assets/images/img3.png'
import Img4 from '../../assets/images/img4.png'
import Img5 from '../../assets/images/img5.png'


function About() {
    const images = [Img1, Img2, Img3, Img4, Img5]

    return (
        <div id='about-page'>
            <Carousel images={images} blurred={true}>
                <h2>Хедж-фонд</h2>
                <p>Классический выбор профессиональных инвесторов с заданными умеренными параметрами риска. Основан на инвестировании в бумаги индекса S&P 500 с диверсификацией по 11 секторам экономики.</p>
                <button className='warning-btn'>
                    Подробнее
                </button>
            </Carousel>

            <section className='about-content'>
                <Heading size={1.5}>
                    О нас
                </Heading>

                <div className="content">
                    <img src={AboutImg} alt="About" width={"100%"} />
                    <div className='info'>
                        <p>Наша Команда успешно осуществляет деятельность на нескольких рынках инвестиций. Богатство выбора инструментов этих рынков позволяет Нам успешно сохранять и преумножать капитал клиентов. </p>
                        <p>Вступить в партнерство с Fonte могут как профессиональные инвестора, так и частные лица, только начинающие открывать для себя новые перспективы. Наша юрисдикция - Международный финансовый центр «Астана» (МФЦА). Комфортные налоговые условия и регуляторные политики обеспечивают необходимые свободы и преимущества для достижения целей инвестиций. </p>
                        <p>В партнерстве с Fonte Capital LTD, инвесторы имеют возможность воспользоваться не только проверенными стратегиями, но и смогут совместно разработать персональные инвестиционные решения.</p>
                        <button className='warning-btn'>
                            <img src={Licence} alt="Licence" />
                            Лицензии
                        </button>
                    </div>
                </div>
            </section>
            <section className='values-content'>
                <Heading size={1.5}>
                    Наши ценности
                </Heading>

                <div className="content">
                    <Values />
                </div>
            </section>
        </div>
    );
}

export default About;