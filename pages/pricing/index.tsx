import { MainLayout } from '../../components/layout/MainLayout'

const pricing = () => {
  return (
    <>
      <h1 className={'title'}>
        Pricing Page!
      </h1>

      <p className={'description'}>
        Get started by editing&nbsp;
        <code className={'code'}>pages/index.js</code>
      </p>
  </>
  )
}
export default pricing

pricing.getLayout = function getLayout(page:JSX.Element){
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}