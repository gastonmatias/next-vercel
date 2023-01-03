import Link from "next/link"
import { useRouter } from "next/router"
import { FC , CSSProperties } from "react"

interface ActiveProps  {
    text: string,
    href: string
}

export const ActiveLink: FC<ActiveProps> = ({text, href}) => {
  
    const style: CSSProperties ={
        color:'#0070f3',
        textDecoration: 'underline',
    }

    //useRouter es un hook propio de next
    // contiene info de la ruta actual!
    // ej de uso: const router = useRouter()
    const {asPath} = useRouter()
  
    return (
    <Link href={href} legacyBehavior>
        <a style={asPath===href ? style:undefined} >{text}</a>
        {/* <a style={asPath===href && style}>{text}</a> */}
    </Link>
  )
}