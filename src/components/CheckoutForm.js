import FormInput from "./FormInput";
import { useNavigation } from "react-router-dom";
import SubmitBtn from "./SubmitBtn";

function CheckoutForm() {
    const navigation = useNavigation();

    return (
        <div>
            <h3>Shipping Information</h3>
            <FormInput label="First name" type="text" name="firstName" />
            <FormInput label="Address" type="text" name="address" />
            <SubmitBtn text="PLACE YOUR ORDER"/>
        </div>
    );
}

export default CheckoutForm;
