import HomeFab from '@/components/HomeFab'

export default function BlogLayout({
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
