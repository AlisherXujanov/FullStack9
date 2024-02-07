import "./style.scss"
import Rectangle from "./Rectangle.png"
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { toast } from 'react-toastify';


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

        const templateParams = {
            from_name: form.name,
            to_name: 'admin',
            from_email: form.email,
            phone: form.number,
            message: form.notes,
        }

        emailjs
            .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, {
                publicKey: 'YOUR_PUBLIC_KEY',
            })
            .then(
                (response) => {
                    toast.success('Ваше сообщение отправлено!', {theme: "dark"})
                },
                (err) => {
                    toast.error('Что-то пошло не так, попробуйте позже', {theme: "dark"})
                },
            );
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