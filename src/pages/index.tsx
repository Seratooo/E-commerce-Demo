import Head from 'next/head'
import Image from 'next/image'
import {Header} from '../componets/header/header'
import { Item } from '../componets/items'

export default function Home() {
  return (
    <div>
        <Header/>
        <Item titulo="Produtos Em destaque"/>
    </div>
  )
}
