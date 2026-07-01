import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";

function Sender() {
    const navigate = useNavigate();

    const SECRET_KEY = "mySecretKey";

    const sendData = () => {
        const data = "user123";

        // Encrypt the data
        const encryptedData = CryptoJS.AES.encrypt(
            data,
            SECRET_KEY
        ).toString();

        // Encode for URL safety
        const safeData = encodeURIComponent(encryptedData);

        // Send data using URL param
        navigate(`/profile/${safeData}`);
    };

    return (
        <button onClick={sendData}>
            Go to Profile
        </button>
    );
}

export default Sender;