function FormSelect({ label, type, name, defaultValue, size, lists }) {
    return (
        <div className="form-control">
            <label htmlFor={name} className="label">
                <span className="label-text capitalize">{label}</span>
            </label>
            <select
                name={name}
                id={name}
                className={`select select-bordered ${size}`}
                defaultValue={defaultValue}
            >
                {lists.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default FormSelect;
