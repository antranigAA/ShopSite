import BasketItem from "./BasketItem";
import {useContext} from "react";
import {ShopContext} from "../context";

const BasketList = () => {

    const {order,handleBasketShow } = useContext(ShopContext);

    const totalPrice = order.reduce((sum, el)=>{
        return sum + el.price * el.quantity;
    }, 0);

    return(
        <ul className="collection basket-list">
            <li className="collection-item">Header</li>
            <span className="basket-close" onClick={handleBasketShow}>X</span>
            {order.length ?
                order.map((el) => {
                    return(
                        <BasketItem item={el} key={el.id} />
                    )
                }) :
                <li className="collection-item">Basket Is Empty</li>
            }
            <li className="collection-item"> <strong>Total Price: </strong>  {totalPrice}</li>
        </ul>
    );
}
export default BasketList;


