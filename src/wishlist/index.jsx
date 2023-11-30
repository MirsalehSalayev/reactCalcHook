import React, { useState } from 'react';
import './wishlist.css';

function Wishlist() {
    const [items, setItems] = useState([]);

    const addItem = () => {
        const item = prompt('Yeni öğe ekleyin:');
        if (item) {
            setItems([...items, item]);
        }
    };

    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <div className="wishlist">
            <h2>Wishlist</h2>
            <button className="add-button" onClick={addItem}>Öğe Ekle</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className="wishlist-item">
                        {item}
                        <button className="remove-button" onClick={() => removeItem(index)}>Sil</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Wishlist;
