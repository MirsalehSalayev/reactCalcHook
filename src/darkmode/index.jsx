import React, { useState, useEffect } from "react";
import "./Darkmode.css";

const Filter = () => {
    const [products, setProducts] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [category, setCtgry] = useState("All");
    const [isLoading, setIsLoading] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        getProducts();
    }, []);

    function handleCategory(category) {
        setCtgry(category);
    }

    const filterProducts =
        category === "All"
            ? products
            : products.filter((item) => item.category === category);

    async function getProducts() {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data);
            setIsLoading(false);
        } catch (err) {
            console.error(err);
        }
    }


    function addToWishlist(item) {
        setWishlist([...wishlist, item]);
    }


    function toggleDarkMode() {
        setDarkMode(!darkMode);
    }

    return (
        <div className={darkMode ? 'App dark-mode' : 'App'}>
            <button onClick={toggleDarkMode}>
                {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
            {isLoading ? (
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            ) : (
                <>
                    <div className="filter">
                        <ul className="items">
                            <li onClick={() => handleCategory("All")}>All</li>
                            <li onClick={() => handleCategory("men's clothing")}>
                                Men's Clothing
                            </li>
                            <li onClick={() => handleCategory("jewelery")}>Jewelery</li>
                            <li onClick={() => handleCategory("electronics")}>Electronics</li>
                            <li onClick={() => handleCategory("women's clothing")}>
                                Women's Clothing
                            </li>
                        </ul>
                        <div className="wishlist">
                            <h2>Wishlist</h2>
                            {wishlist.map((x) => (
                                <div key={x.id} className={darkMode ? ' dark-mode-card' : 'card'}>
                                    <div className="cimg">
                                        <img src={x.image} alt={x.title} />
                                    </div>
                                    <div className="info">
                                        <h5>Title: {x.title}</h5>
                                        <p>Price: {x.price}$</p>
                                        <p>Description: {x.description.slice(0, 70)}...</p>
                                    </div>
                                    <h3>{x.category}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="cards">
                        {filterProducts.map((x) => (
                            <div key={x.id} className={darkMode ? 'dark-mode-card' : 'card'}>
                                <div className="cimg">
                                    <img src={x.image} alt={x.title} />
                                </div>
                                <div className="info">
                                    <h5>Title: {x.title}</h5>
                                    <p>Price: {x.price}$</p>
                                    <p>Description: {x.description.slice(0, 70)}...</p>
                                </div>
                                <h3>{x.category}</h3>
                                <button onClick={() => addToWishlist(x)}>Add to Wishlist</button>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Filter;
