import './style.scss'
import { context } from '../../store'
import { useContext } from 'react'


function Products(props) {
    const { store, setStore } = useContext(context)

    return (
        <div id="products-wrapper">
            <h2>Products</h2>
            <h3>{store.counter}</h3>
            <button className="warning-btn"
                onClick={() => setStore({type:'increment'})}
            >
                Increment
            </button>
        </div>
    );
}

export default Products;
