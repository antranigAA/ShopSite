import {useContext} from "react";
import {ShopContext} from "../context";

const GoodsItem = ({item}) => {

    const {addToBasket} = useContext(ShopContext);

    return(
            <div className="card">
                <div className="card-image">
                    <img src={item.full_background} alt="Broken_img" />
                </div>
                <div className="card-content" style={{"height": "160px"}}>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                </div>
                <div className="card-action">
                    <a className="btn light-green darken-2" onClick={()=>{
                        addToBasket({
                            id:item.id,
                            name:item.name,
                            price:item.price
                        });
                    }}>Add To Cart</a>
                </div>
            </div>
    );
}

export default GoodsItem;

