import HomeFab from '@/components/HomeFab'

export default function EnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <HomeFab label="Home" side="right" />
    </>
  )
}
