import { useState } from "react";
import { formatPrice } from "../utils";

function FormRange({ label, name, size }) {
    const [price, setPrice] = useState("1");
    const step = 1000;
    const maxPrice = 100000;

    return (
        <div className="form-control">
            <label className="label cursor-pointer" htmlFor={name}>
                <span className="label-text capitalize">{label}</span>
                <span>{formatPrice(price)}</span>
            </label>
            <input
                type="range"
                name={name}
                step={step}
                min={0}
                max={maxPrice}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className={`range range-primary ${size}`}
            />
            <div className="w-full flex justify-between text-xs px-2 mt-2">
                <span className='font-bold text-md'>0</span>
                <span className='font-bold text-md'>MAX: {formatPrice(maxPrice)}</span>
            </div>
        </div>
    );
}

export default FormRange;
