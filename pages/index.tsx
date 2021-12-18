import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = (props:any) => {
  // get current date human readable format day as string
  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })


  // const date = new Date()
  // const year = date.getFullYear()
  // const month = date.getMonth()
  // const day = date.getDate()
  // const hours = date.getHours()
  // const minutes = date.getMinutes()
  // const seconds = date.getSeconds()
  // const dateHuman = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`


  return (
    <div className='h-screen p-10 bg-red'>
      <p className='text-center font-bold text-6xl text-white'>
        {date} Ethereum price {props.ethereumPrice} USD
      </p>
    </div>
  )
}


export async function getServerSideProps() {
  //  
  const ethereumPriceResponse = await fetch('https://api.coinbase.com/v2/prices/ETH-USD/spot')
  const ethereumPrice = await ethereumPriceResponse.json()
  return {
    props: {
      ethereumPrice: ethereumPrice.data.amount 
    }, 
  }
}

export default Home