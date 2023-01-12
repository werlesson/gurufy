import MainLayout from 'components/Layout/MainLayout'
import PageContent from 'components/PageContent'
import { useEffect } from 'react'
import { getDashboard } from 'services/DashboardService'

export default function Home() {
  useEffect(() => {
    console.count()
    getDashboard()
  }, [])

  return <PageContent title="Dashboard">Esta é a página principal</PageContent>
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>
}
