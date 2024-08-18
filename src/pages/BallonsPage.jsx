import { useEffect, useState } from "react";
import BallonList from "../components/BallonsList/BallonsList"
import FiltersBar from "../components/FiltersBar/FiltersBar"
import ModalOrder from "../components/Modal/Modal";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export default function BalloonsPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const priceParam = searchParams.get('price')
    const futureParam = searchParams.get('category')
    const [isOpen, setIsOpen] = useState(false)
    const [orderId, setOrderId] = useState()
    const [sets, setSets] = useState({})
    const [filters, setFilters] = useState({
        category: '',
        price: ''
    })

    function onOrderOpenModal(id) {
        setIsOpen(true)
        setOrderId(id)
    }

    function onFilterSubmit(data) {
        const params = {}
        if(data.price !== '') params.price = data.price
        if(data.category !== '') params.category = data.category
        setSearchParams(params)
    }

    function onFilterReset() {
        setFilters({
            category: '',
            price: ''
        })
        setSearchParams()
    }

    useEffect(() => {
        async function getBalloons() {
            try {
                const balloonsData = await axios.get('https://top-shar-online-server.onrender.com/balloons')
            setSets(balloonsData.data.data)
            } catch (err) {
                console.log(err)
            }
        }
        getBalloons()
       

    }, [])

    return (
        <div>
            <FiltersBar submitHandler={onFilterSubmit} initial={filters} clickHandler={onFilterReset}></FiltersBar>
            {sets.data ? <BallonList balloons={sets.data} onOrder={onOrderOpenModal}></BallonList> : <></>}
            {isOpen ? <ModalOrder isOpen={isOpen} onClose={setIsOpen} orderId={orderId}></ModalOrder> : <></>}
        </div>
    )
}