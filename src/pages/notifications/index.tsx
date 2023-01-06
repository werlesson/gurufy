import MainLayout from 'components/Layout/MainLayout'
import PageContent from 'components/PageContent'

export default function Home() {
  return (
    <PageContent title="Notificações">
      Aqui é a página de notificações
    </PageContent>
  )
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>
}
