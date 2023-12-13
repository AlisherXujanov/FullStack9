import "./style.scss"
import AboutImg from "../../assets/images/about.png"
import Licence from "../../assets/icons/licence.png"
import Heading from "../common/Heading"
import Marquee from "../common/Marquee"

function About(props) {

    return (
        <div>
            <div id='about-wrapper'>
                <Heading size={2}>О Нас</Heading>

                <div className="about">
                    <div className="left">
                        <img src={AboutImg} alt="About" width="100%" height={350} />
                    </div>
                    
                    <div className="right">
                        <p>Наша Команда успешно осуществляет деятельность на нескольких рынках инвестиций. Богатство выбора инструментов этих рынков позволяет Нам успешно сохранять и преумножать капитал клиентов.</p>
                        <br />
                        <p>Вступить в партнерство с Fonte могут как профессиональные инвестора, так и частные лица, только начинающие открывать для себя новые перспективы. Наша юрисдикция - Международный финансовый центр «Астана» (МФЦА). Комфортные налоговые условия и регуляторные политики обеспечивают необходимые свободы и преимущества для достижения целей инвестиций.</p>
                        <br />
                        <p>В партнерстве с Fonte Capital LTD, инвесторы имеют возможность воспользоваться не только проверенными стратегиями, но и смогут совместно разработать персональные инвестиционные решения.</p>
                        <br />
                        <button className="warning-btn">
                            <img src={Licence} alt="Licence" />
                            Лицензии
                        </button>
                    </div>
                </div>
            </div>

            <Marquee />
        </div>
    );
}

export default About;