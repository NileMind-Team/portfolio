import HomeFab from '@/components/HomeFab'

export default function WorkLayout({
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
