import GoodsItem from "./GoodsItem";
import {useContext} from "react";
import {ShopContext} from "../context";

const GoodsList = () => {

    const {goods} = useContext(ShopContext);

    if(!goods.length){
        return <h3>Nothing Here</h3>
    }

    return(
        <div className="goods">
            {goods.map( el => (
                <GoodsItem key={el.id} item={el}/>
            ))}
        </div>
    );
}

export default GoodsList;

