import { useState } from 'react'

function About(props) {
    const [theme, setTheme] = useState(false)

    function handleTheme(e) {
        try {
            setTheme(!theme)
        } catch (e) {
            console.error(e)
        }
    }

    const style = {
        backgroundColor: theme ? "#333" : "#FFF",
        color: theme ? "#FFF" : "#333"
    }

    return (
        <div style={style}>
            <h1>{props.title}</h1>
            {props.children}

            <hr />
            <h3>{theme ? "Dark theme" : "Light theme"}</h3>
            <button onClick={handleTheme}>
                Toggle Theme
            </button>
        </div>
    );
}

export default About;