import MainLayout from 'components/Layout/MainLayout'
import PageContent from 'components/PageContent'

export default function Home() {
  return <PageContent title="Dashboard">Esta é a página principal</PageContent>
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>
}
