import React from 'react';
import './styles.css';

const FilterSortControls = ({ filter, setFilter, sort, setSort }) => {
    return (
        <div className="filter-sort-controls">
            <select className="select" onChange={(e) => setFilter(e.target.value)} value={filter}>
                <option value="all">All tasks</option>
                <option value="completed">Сompleted tasks</option>
                <option value="incomplete">Unfinished tasks</option>
            </select>
            <select className="select" onChange={(e) => setSort(e.target.value)} value={sort}>
                <option value="date">By date</option>
                <option value="status">By status</option>
            </select>
        </div>
    );
};

export default FilterSortControls;
