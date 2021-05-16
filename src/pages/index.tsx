import {Header} from '../componets/header/header'
import { Item } from '../componets/items'
import Link from 'next/link'
export default function Home() {
  return (
    <div>
        <Header/>
        <Item titulo="Produtos Em destaque"/>
        <Link href="/1?index=121">
            <button type="button">Header</button>
        </Link>

    </div>
  )
}
