import HomeFab from '@/components/HomeFab'

export default function ServicesLayout({
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
