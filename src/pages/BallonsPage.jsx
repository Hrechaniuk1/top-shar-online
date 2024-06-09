import { useEffect, useState } from "react";
import BallonList from "../components/BallonsList/BallonsList"
import FiltersBar from "../components/FiltersBar/FiltersBar"
import balloons from "../data/data";

export default function BalloonsPage() {
    const [sets, setSets] = useState(balloons)
    const [filters, setFilters] = useState(() => { return JSON.parse(localStorage.getItem('filters')) ?? {
        feature: '',
        price: '',
      }})

    useEffect(() => {
        let filterByFeature = balloons
        if(filters.feature) {
            filterByFeature = balloons.filter(curr => curr.feature === filters.feature)
        }
        if(filters.price === '') {setSets(filterByFeature)} else if (filters.price === 'cheap') {
           const result = filterByFeature.toSorted((a,b) => a.price - b.price)
            setSets(result)
        } else if (filters.price === 'expensive') {
           const result = filterByFeature.toSorted((a,b) => b.price - a.price)
            setSets(result)
        }
        localStorage.setItem('filters', JSON.stringify(filters))
        
    }, [filters])

    return (
        <div>
            <FiltersBar submitHandler={setFilters}></FiltersBar>
            <BallonList balloons={sets}></BallonList>
        </div>
    )
}