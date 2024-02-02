import './style.scss'
import { context } from '../../store'
import { useContext } from 'react'


function NoPage(props) {
    const { store, setStore } = useContext(context)

    return (
        <div id="no-page-wrapper">
            <h2>404 Page Not Found</h2>
            <h3>{store.counter}</h3>
            <button className="warning-btn"
                onClick={() => setStore({type:'decrement'})}
            >Decrement
            </button>
        </div>
    );
}

export default NoPage;