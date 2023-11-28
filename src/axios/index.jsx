import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Axios() {
    const [data, setData] = useState(null);
    const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket')) || []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://northwind.vercel.app/api/products');
                console.log(response.data)

                setData(response.data);
            } catch (error) {
                console.error('Error', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basket));
    }, [basket]);

    const addToBasket = (item) => {
        let newBasket = [...basket];
        let itemBaket = newBasket.find((i) => item.id === i.id);
        if (itemBaket) {
            itemBaket.count++;
        } else {
            item.count = 1;
            newBasket.push(item);
        }
        setBasket(newBasket);
    };

    const remove = (id) => {
        let newBasket = [...basket];
        let itemBaket = newBasket.find((i) => id === i.id);
        if (itemBaket.count > 1) {
            itemBaket.count--;
        } else {
            newBasket = newBasket.filter((i) => i.id !== id);
        }
        setBasket(newBasket);
    }

    return (
        <div>
            <div style={{ border: "1px solid black", width: "100%", }}>
                Basket
                {basket.length > 0 ? basket.map((x) => (
                    <div key={x.id}>
                        <p>{x.id}</p>
                        <h2>{x.name}</h2>
                        <p>{x.description}</p>
                        <p>Quantity: {x.count}</p>
                        <button onClick={() => remove(x.id)}>remove</button>
                    </div>
                )) : <p>Basket boshdu</p>}

            </div>
            {data ? data.map((item) => (
                <div key={item.id}>
                    <p>{item.id}</p>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <button onClick={() => addToBasket(item)}>add</button>
                </div>
            )) : <p>Loading...</p>}
        </div>
    );
}

export default Axios;
