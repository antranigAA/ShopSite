
import {useEffect, useContext} from "react";
import GoodsList from "./GoodsList";
import PreLoader from "./PreLoader";
import Cart from "./Cart";
import BasketList from "./BasketList";
import {ShopContext} from "../context";

const Shop = () => {

    const {loading, isBasketShow, setGoods} = useContext(ShopContext);

        useEffect(()=>{
            fetch("https://fortniteapi.io/v1/shop?lang=en",{
                headers:{
                    Authorization:"54c46929-b03668bb-317bc735-4ecc9f1e"
                }
            })
                .then( response => response.json())
                .then( data => {
                    data && setGoods(data.featured);
                });
        },[]);

            return (
                <main className="container">
                    <Cart />
                    { isBasketShow && <BasketList/> }
                    {loading ? <PreLoader/> :
                        <GoodsList/>
                    }
                </main>
            );
        }


export default Shop;