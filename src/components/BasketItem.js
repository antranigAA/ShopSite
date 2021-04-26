import {useContext} from "react";
import {ShopContext} from "../context";

const BasketItem = ({item}) => {

    const {decQuantity, incQuantity, removeFromBasket} = useContext(ShopContext);

    return (
        <li className="collection-item">
            <span><b>Name: </b> {item.name}</span> &nbsp;
            <span><b>Quantity: </b>  <i className="tiny material-icons"
                                        onClick={item.quantity === 1 ? () => removeFromBasket(item.id) : () => decQuantity(item.id)}>remove</i> {item.quantity}
                <i className="tiny material-icons" onClick={() => incQuantity(item.id)}>add</i></span>
            <span><b>Price: </b> {item.price * item.quantity}</span>
            <span><i className="material-icons" onClick={() => removeFromBasket(item.id)}>close</i></span>
        </li>
    );
}

export default BasketItem;