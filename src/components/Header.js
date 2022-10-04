import { Container } from "react-bootstrap";
import "../css/header.css";

function Header({ exchangeCourse }) {
    console.log(exchangeCourse);

    return (
        <div className="header-overlay">
            <Container className="header-container ">
                <div className="header-wrap d-flex  ">
                    <div className="header-text-wrap">
                        <h3>Currency Convertor</h3>
                    </div>
                    <div className="header-exchange-wrap">
                        <p>
                            {exchangeCourse[25].cc} {exchangeCourse[25].rate}
                        </p>
                        <p>
                            {exchangeCourse[32].cc} {exchangeCourse[32].rate}
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Header;
