import React, {useEffect} from "react";
import DefaultLayout from "../components/DefaultLayout";
import {useSelector, useDispatch} from "react-redux";
import {getAllCars} from "../redux/actions/carsAction";
import {Button, Row, Col, Divider, Spin} from "antd";
import {Spinner} from "../components/Spinner";

const Home = () => {
    const {cars} = useSelector(state=>state.carsReducer);
    const {loading} = useSelector(state=>state.alertsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars());
        console.log(cars);
    }, []);

    return (
        <DefaultLayout>
            {loading ? <Spinner size="large" tip="Loading..."/> : <></>}

            <Row justify="center" gutter={16} className="mt-5">
                {cars.map(car=>{
                 return (
                     <Col lg={6} sm={24} xs={24} className="my-3">
                         <div className="car p-2 box-shadow-1 my-5">
                             <img src={car.image} className="carImg" alt={car.name} />
                                <div className="car-content">
                                    <Divider />
                                     <div className="d-flex align-items-center justify-content-between mx-4">
                                         <div className="d-flex flex-column">
                                             <h3>{car.name}</h3>
                                             <h4>Rent: ${car.rentPerHour}/hr</h4>
                                         </div>

                                         <div>
                                             <button className="btn1 mr-2">Book Now</button>
                                         </div>
                                     </div>
                                </div>
                         </div>
                     </Col>
                 );
                })}
            </Row>
        </DefaultLayout>
    )
};

export default Home;