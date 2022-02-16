import React, {useEffect} from "react";
import DefaultLayout from "../components/DefaultLayout";
import {useSelector, useDispatch} from "react-redux";
import {getAllCars} from "../redux/actions/carsAction";

const Home = () => {
    const {cars} = useSelector(state=>state.carsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars());
    }, []);

    return (
        <DefaultLayout>
            <h1>Home Page</h1>
            <h1>Number of Cars : {cars.length}</h1>
        </DefaultLayout>
    )
};

export default Home;