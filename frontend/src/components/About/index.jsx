import './style.scss'

function Heading(props) {
    // props = {
    //     children: "..." ,
    //     size: 2,
    // }
    const size = `${48 / props.size}px`
    return (
        <h1 style={{fontSize: size}}>{props.children}</h1>
    )
}
function About() {
    return (
        <div id='about-page'>
            <Heading size={2}>
                About page heading
            </Heading>
        </div>
    );
}

export default About;