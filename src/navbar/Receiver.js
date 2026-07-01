import CryptoJS from "crypto-js";
import { useParams } from "react-router-dom";

function Receiver() {
    const { data } = useParams();

    const SECRET_KEY = "mySecretKey";

    let decryptedData = "";

    try {
        const bytes = CryptoJS.AES.decrypt(
            decodeURIComponent(data),
            SECRET_KEY
        );

        decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        decryptedData = "Invalid data";
    }

    return (
        <div>
            <h2>Received Data</h2>
            <p>{decryptedData}</p>
        </div>
    );
}

export default Receiver;