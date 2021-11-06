import React from 'react';
import Sales from '../modules/Charts/Sales';
import CategorySales from '../modules/Charts/CategorySales';
import Campaign from '../modules/Charts/Campaign';
import NearbuySales from '../modules/Charts/NearbuySales'

export default function Home() {
  return (
    <div id="chartGrid">
        <Sales/>
        <CategorySales/>
        <Campaign/>
        <NearbuySales/>
    </div>
  )
}
