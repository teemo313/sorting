import '../styles/globals.css';
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  let arraynum = [];
  for(let i =0; i<100; i++){
      let arraytemp= [Math.floor(Math.random() * 100)];
      arraynum = [...arraynum, ...arraytemp];
  }
  console.log(arraynum)
  
  return (
    <div>
      <h1>Sorting</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/bubble">
        <a>버블 정렬</a>
      </Link>
      <Link href="/selection">
        <a>선택 정렬</a>
      </Link>
      <Link href="/insertion">
        <a>삽입 정렬</a>
      </Link>
      <Link href="/heap">
        <a>힙 정렬</a>
      </Link>
      <Link href="/merge">
        <a>병합 정렬</a>
      </Link>
      <Link href="/quick">
        <a>퀵 정렬</a>
      </Link>
      <hr />
      <Component {...pageProps} />
      <style jsx>{`
      div{
        text-align : center;
      }
      a{
        color : black;
        margin : 1rem;
        background-color : yellow;
      }
      a:hover {
        color : blue ;
        margin : 1rem;
      }
      a:focus {
        color : blue ;
        margin : 1rem;
      }
      `}
      </style>
    </div>
    
  )
}

export default MyApp
