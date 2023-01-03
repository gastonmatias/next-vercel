import Link from 'next/link'
import { MainLayout } from '../components/layout/MainLayout'

export default function HomePage( ) {
  return (
    <>
    <MainLayout>
        <h1 className={'title'}>
          ir a <Link href='/about'>About</Link>
        </h1>

        <p className={'description'}>
          Get started by editing&nbsp;
          <code className={'code'}>pages/index.js</code>
        </p>      
    </MainLayout>
    </>
  )
}
