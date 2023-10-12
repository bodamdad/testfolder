'use client';
import {useState} from 'react'
import Image from 'next/image'
import item0 from 'public/food0.png'
import item1 from 'public/food1.png'
import item2 from 'public/food2.png'

export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
  let [수량, set수량] = useState([0,2,0]);
  let [수량1, set수량1] = useState(0);
  let [수량2, set수량2] = useState(0);

  return (
    <div> 
      <h4 className="title">상품목록</h4>
      { 
        상품.map((a, i)=>{
          return ( 
            <div className="food" key={i}> 
              <Image src={item0} className="food-img"/>
              <h4>{ a } $40</h4>
              <span> { 수량[i] } </span>
              <button onClick={()=>{ 
                let copy = [...수량];
                copy[i]++
                set수량(copy)
                }}>+</button>
              <button onClick={()=>{ 
                let copy = [...수량];
                copy[i]--
                set수량(copy)
                }}>-</button>
            </div>
          )
      }) }
    </div>
  )
}

