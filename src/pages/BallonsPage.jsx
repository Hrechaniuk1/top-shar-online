import { useEffect, useState } from "react";
import BallonList from "../components/BallonsList/BallonsList"
import FiltersBar from "../components/FiltersBar/FiltersBar"
import ModalOrder from "../components/Modal/Modal";
import css from './BalloonsPage.module.css';
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export default function BalloonsPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const categoryParam = searchParams.get('category');
    const sortOrderParam = searchParams.get('sortOrder')
    const [isOpen, setIsOpen] = useState(false)
    const [orderInfo, setOrderInfo] = useState()
    const [sets, setSets] = useState([])
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState({nextPage: false, prevPage: false})
    const [filters, setFilters] = useState({
        category: categoryParam ? categoryParam : '',
        sortOrder: sortOrderParam ? sortOrderParam : '',
    })

    function onOrderOpenModal(id) {
        setIsOpen(true)
        setOrderInfo(id) 
    }

    function onFilterSubmit(data) {
        const params = {}
        if(data.sortOrder !== '') params.sortOrder = data.sortOrder
        if(data.category !== '') params.category = data.category
        setSearchParams(params)
        setFilters(params)
    }

    function onFilterReset() {
        setFilters({
            category: '',
            sortOrder: ''
        })
        setSearchParams()
    }

    function showNextHandler() {
        setPage(page+1)
    }

    function showPrevHandler() {
        setPage(page-1)
    }

    useEffect(() => {
        setFilters(prevFilters => ({...prevFilters, page: page}))
    }, [page])

    useEffect(() => {
        const params = {}
        if(filters.category) params.category = filters.category
        if(filters.sortOrder) {
            params.sortOrder = filters.sortOrder
            params.sortBy = 'price'
        }
        if(filters.page) params.page = filters.page
            async function getBalloons() {
                try {
                    const balloonsData = await axios.get('https://top-shar-online-server.onrender.com/balloons', {params: params})

                setPages({nextPage: balloonsData.data.data.hasNextPage, prevPage: balloonsData.data.data.hasPreviousPage})
                
                setSets(balloonsData.data.data.data)
                } catch (err) {
                    console.log(err)
                }
            }
        getBalloons()
    
    }, [filters])

    return (
        <div>
            <FiltersBar submitHandler={onFilterSubmit} initial={filters} clickHandler={onFilterReset}></FiltersBar>
            {sets.length !==0 ? <BallonList balloons={sets} onOrder={onOrderOpenModal}></BallonList> : <></>}
            {isOpen ? <ModalOrder isOpen={isOpen} onClose={setIsOpen} order={orderInfo}></ModalOrder> : <></>}
            <div className={css.box}>
            {pages.nextPage ? <button className={css.btn} onClick={() => showNextHandler()} >Наступна</button> : <></>}
            {pages.prevPage ? <button className={css.btn} onClick={() => showPrevHandler()} >Попередня</button> : <></>}
            </div>
        </div>
    )
}