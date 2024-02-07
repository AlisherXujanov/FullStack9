import "./style.scss"
import Rectangle from "./Rectangle.png"
import emailjs from '@emailjs/browser';
import { useState } from "react";

function ContactsForm() {
    const [form, setForm] = useState({})

    function handleChange(e) {
        e.preventDefault()
        let key = e.target.name
        let val = e.target.value
        setForm({ ...form, [key]: val })
    }

    function submit(e) {
        e.preventDefault()
    }

    return (
        <div id="contacts-form-wrapper">
            <form onSubmit={submit}>
                <input
                    id="full-name-input" type="text"
                    placeholder="Полное имя" name='name'
                    required onChange={handleChange}
                />
                <div>
                    <input
                        id="email-input" type="email" placeholder="Почта"
                        name='email' required onChange={handleChange}
                    />
                    <input
                        id="number-input" type="number" placeholder="Номер телефона"
                        name='number' required onChange={handleChange}
                    />
                </div>
                <textarea
                    id="description-area"
                    cols="10"
                    rows="8"
                    placeholder="Текст сообщения"
                    name='notes'
                    required
                    onChange={handleChange}
                ></textarea>
                <button className="warning-btn">
                    Получить консультацию
                </button>
            </form>
            <img src={Rectangle} alt="Rectangle" width={"100%"} height={"100%"} />
        </div>
    );
}

export default ContactsForm;