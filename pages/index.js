import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          <iframe src="https://media.discordapp.net/attachments/1012671893188399145/1019946000409960538/3dgifmaker14645.gif" title="Spinning Hottie"></iframe>
        </p>
      </main>

      <Footer />
    </div>
  )
}
