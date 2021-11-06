import React from 'react';
import Sales from '../modules/Charts/Sales';
import CategorySales from '../modules/Charts/CategorySales';
import Campaign from '../modules/Charts/Campaign';
import NearbuySales from '../modules/Charts/NearbuySales'

export default function Home() {
  return (
    <div>
      <div>
        <Sales/>
      </div>
      <div>
        <CategorySales/>
      </div>
      <div>
        <Campaign/>
      </div>
      <NearbuySales/>
    </div>
  )
}
