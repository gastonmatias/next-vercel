import Link from 'next/link'
import { MainLayout } from '../components/layout/MainLayout'

const about = () => {
  return (
    <>
    <MainLayout>
      <h1 className={'title'}>
        ir a <Link href='/'>Home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing&nbsp;
        <code className={'code'}>pages/index.js</code>
      </p>

    </MainLayout>

  </>
  )
}
export default about