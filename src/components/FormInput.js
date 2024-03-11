function FormInput({ type, defaultValue, name, label, size }) {
    return (
        <div className="form-control">
            <label htmlFor={name} className="label">
                <span className="label-text capitalize">{label}</span>
            </label>
            <input
                type={type}
                name={name}
                defaultValue={defaultValue}
                className={`input input-bordered ${size}`}
            />
        </div>
    );
}

export default FormInput;
