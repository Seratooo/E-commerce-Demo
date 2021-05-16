import {useRouter}from 'next/router'

export default () =>{
  const router = useRouter();
  const {id} = router.query
  console.log(router)

  return(
    <div>
        <h1>Hello Word {id}</h1>
    </div>
  )
}