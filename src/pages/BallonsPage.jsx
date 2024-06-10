import { useEffect, useState } from "react";
import BallonList from "../components/BallonsList/BallonsList"
import FiltersBar from "../components/FiltersBar/FiltersBar"
import balloons from "../data/data";
import ModalOrder from "../components/Modal/Modal";
import { useSearchParams } from "react-router-dom";

export default function BalloonsPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const priceParam = searchParams.get('price')
    const futureParam = searchParams.get('future')
    const [isOpen, setIsOpen] = useState(false)
    const [orderId, setOrderId] = useState()

    function onOrderOpenModal(id) {
        setIsOpen(true)
        setOrderId(id)
    }

    function onsubmit(data) {
        const params = {}
        if(data.price !== '') params.price = data.price
        if(data.future !== '') params.future = data.future
        setSearchParams(params)
    }

    function onClick() {
        setFilters({
            future: '',
            price: ''
        })
        setSearchParams()
    }

    const [sets, setSets] = useState(balloons)
    const [filters, setFilters] = useState({
        future: '',
        price: ''
    })

    useEffect(() => {
        let filterByFeature = balloons
        if(futureParam) {
            filterByFeature = balloons.filter(curr => curr.future === futureParam)
            setSets(filterByFeature)
        }
        if(priceParam) {
            if(priceParam === 'cheap') {
                filterByFeature = filterByFeature.toSorted((a,b) => a.price - b.price)
             } else if (priceParam === 'expensive') {
                filterByFeature = filterByFeature.toSorted((a,b) => b.price - a.price)
             }
        }
        setSets(filterByFeature)
        setFilters({future: futureParam ? futureParam : '', price: priceParam ? priceParam : ''})
        
    }, [priceParam, futureParam])

    return (
        <div>
            <FiltersBar submitHandler={onsubmit} initial={filters} clickHandler={onClick}></FiltersBar>
            <BallonList balloons={sets} onOrder={onOrderOpenModal}></BallonList>
            {isOpen ? <ModalOrder isOpen={isOpen} onClose={setIsOpen} orderId={orderId}></ModalOrder> : <></>}
        </div>
    )
}