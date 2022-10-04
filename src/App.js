import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [exchangeCourse, setExchangeCourse] = useState([]);
    useEffect(() => {
        fetch(
            "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
        )
            .then((res) => res.json())
            .then((data) => {
                setExchangeCourse(data);
            });
        const UAH = { cc: "UAH", rate: "1" };
        exchangeCourse.push(UAH);
    }, []);
    if (exchangeCourse.length) {
        return (
            <div className="wrap">
                <Header exchangeCourse={exchangeCourse} />
                <Main exchangeCourse={exchangeCourse} />
            </div>
        );
    }
}

export default App;
