import { useState } from "react";

const CustomLocal = (key, defVal) => {
    const [local, setLocal] = useState(() => {
        const value = localStorage.getItem(key)
        if (value) {
            return JSON.parse(value)
        } else {
            localStorage.setItem(key, JSON.stringify(defVal));
            return defVal
        }
    })



}

export default CustomLocal;
