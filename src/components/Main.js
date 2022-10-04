import { useState } from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useEffect } from "react";
import "../css/main.css";

function Main({ exchangeCourse }) {
    const course = exchangeCourse;
    const [currencyFromConvert, setCurrencyFromConvert] = useState();
    const [numberFromConvert, setNumberFromConvert] = useState();
    const [currencyToConvert, setCurrencyToConvert] = useState();
    const [numberToConvert, setNumberToConvert] = useState();
    let coefFrom;
    let coefTo;

    function currencyConvert(currencyFromConvert, currencyToConvert) {
        coefFrom = course.filter((elem) => {
            if (elem.cc === currencyFromConvert) {
                return elem;
            }
        });
        coefTo = course.filter((elem) => {
            if (currencyToConvert === elem.cc) {
                return elem;
            }
        });
    }
    useEffect(() => {
        convertorTo(numberToConvert);
    }, [currencyFromConvert]);
    useEffect(() => {
        convertorFrom(numberFromConvert);
    }, [currencyToConvert]);
    function convertorFrom(numberFromConvert) {
        if (numberFromConvert && currencyFromConvert && currencyToConvert) {
            currencyConvert(currencyFromConvert, currencyToConvert);
            let num = (numberFromConvert * coefFrom[0].rate) / coefTo[0].rate;
            setNumberToConvert(num.toFixed(4));
        }
    }
    function convertorTo(numberToConvert) {
        if (numberToConvert && currencyFromConvert && currencyToConvert) {
            currencyConvert(currencyFromConvert, currencyToConvert);
            let num = (numberToConvert * coefTo[0].rate) / coefFrom[0].rate;
            setNumberFromConvert(num.toFixed(4));
        }
    }

    return (
        <div>
            <Container className="main-container">
                <div className="main-wrap">
                    <Form className="text-center">
                        <h4>Type the number and choose currency</h4>
                        <InputGroup className="mb-3">
                            <Form.Select
                                aria-label="Default select example"
                                onChange={(e) => {
                                    setCurrencyFromConvert(
                                        e.currentTarget.value
                                    );
                                }}
                            >
                                <option selected disabled>
                                    Choose from currency
                                </option>
                                {course.map((currency) => (
                                    <option
                                        key={currency.r030}
                                        value={currency.cc}
                                    >
                                        {currency.cc}
                                    </option>
                                ))}
                            </Form.Select>
                            <Form.Control
                                aria-label="Amount (to the nearest dollar)"
                                value={numberFromConvert}
                                onChange={(e) => {
                                    setNumberFromConvert(e.target.value);
                                    convertorFrom(e.target.value);
                                }}
                            />
                        </InputGroup>
                        <h4>Choose currency</h4>
                        <InputGroup className="mb-3">
                            <Form.Select
                                onChange={(e) => {
                                    setCurrencyToConvert(e.currentTarget.value);
                                }}
                            >
                                <option disabled selected>
                                    Choose to currency
                                </option>
                                {course.map((currency) => (
                                    <option
                                        key={currency.cc}
                                        value={currency.cc}
                                    >
                                        {currency.cc}
                                    </option>
                                ))}
                            </Form.Select>
                            <Form.Control
                                value={numberToConvert}
                                onChange={(e) => {
                                    setNumberToConvert(e.target.value);
                                    convertorTo(e.target.value);
                                }}
                            />
                        </InputGroup>
                    </Form>
                </div>
            </Container>
        </div>
    );
}

export default Main;
