import Head from 'next/head'
import { ReactElement, ReactNode } from 'react'

type Props = { children: ReactNode; title?: string }

export default function Layout({ children, title }: Props): ReactElement {
  const headTitle = title
    ? `${process.env.NEXT_PUBLIC_APP_NAME} - ${title}`
    : process.env.NEXT_PUBLIC_APP_NAME

  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>
      {children}
    </>
  )
}
