import { useEffect, useState } from "react";
import BallonList from "../components/BallonsList/BallonsList"
import FiltersBar from "../components/FiltersBar/FiltersBar"
import balloons from "../data/data";
import { useSearchParams } from "react-router-dom";

export default function BalloonsPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const priceParam = searchParams.get('price')
    const futureParam = searchParams.get('future')

    function onsubmit(data) {
        setFilters(data)
        const params = {}
        if(data.price !== '') params.price = data.price
        if(data.future !== '') params.future = data.future
        setSearchParams(params)
    }

    const [sets, setSets] = useState(balloons)
    const [filters, setFilters] = useState(() => { 
        const initial = {}
        if(priceParam) initial.price = priceParam
        if(futureParam) initial.future = futureParam

        if(initial.price || initial.future) {return {future: initial.future, price: initial.price}} else {
            return  {
                future: '',
                price: '',
              }
        }})

    useEffect(() => {
        let filterByFeature = balloons
        if(filters.future) {
            filterByFeature = balloons.filter(curr => curr.future === filters.future)
        }
        if(filters.price === '') {setSets(filterByFeature)} else if (filters.price === 'cheap') {
           const result = filterByFeature.toSorted((a,b) => a.price - b.price)
            setSets(result)
        } else if (filters.price === 'expensive') {
           const result = filterByFeature.toSorted((a,b) => b.price - a.price)
            setSets(result)
        }
        
    }, [filters])

    return (
        <div>
            <FiltersBar submitHandler={onsubmit} initial={filters}></FiltersBar>
            <BallonList balloons={sets}></BallonList>
        </div>
    )
}