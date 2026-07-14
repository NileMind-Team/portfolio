import HomeFab from '@/components/HomeFab'

export default function SoftwareCompanyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <HomeFab />
    </>
  )
}
