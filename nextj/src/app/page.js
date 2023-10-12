import Link from "next/link";
import Image from 'next/image'

export default function Home() {
  return (
    <div>
메인

<BtnRed bgColor="yellow"></BtnRed>
    </div>
  )
}


function BtnRed(props){
  return(
    <button style={{background : props.bgColor, color : '#fff', border : 'none'}}>버튼</button>
  )
}