import { useNavigation } from "react-router-dom";

function SubmitBtn({ text }) {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    if (isSubmitting) {
        return (
            <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={isSubmitting}
            >
                {isSubmitting ? 
                    <>
                        <span className="loading loading-spinner"></span>
                        Sending...
                    </>
                : 
                 (text || "submit")
                }
            </button>
        );
    }
    return <h1>test</h1>;
}

export default SubmitBtn;
