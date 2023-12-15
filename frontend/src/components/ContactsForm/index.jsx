import "./style.scss"
import Rectangle from "./Rectangle.png"

function ContactsForm() {
    return (
        <div id="contacts-form-wrapper">
            <form>
                <input id="full-name-input" type="text" placeholder="Full name" /> 
                <div>
                    <input id="email-input" type="email" placeholder="Email" />
                    <input id="number-input" type="number" placeholder="Phone number" />
                </div>
                <textarea 
                    id="description-area" 
                    cols="10" 
                    rows="3"
                ></textarea>
                <button className="warning-btn">
                    Получить консультацию
                </button>
            </form>
            <img src={Rectangle} alt="Rectangle" width={"100%"} height={450} />
        </div>
    );
}

export default ContactsForm;