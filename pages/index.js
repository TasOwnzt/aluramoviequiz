import Head from 'next/head'
import QuizHome from './quiz'

function IndexPage() {
  return (
    <QuizHome>
        <Head>
          <title>Quiz Movie</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />

          <meta name="title" content="Quiz Movie" />
          <meta name="description" content="Projeto didático desenvolvido durante a Imersão React v2 do Alura" />

          <meta property="og:title" content="Quiz Movie" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://aluramoviequiz.vercel.app/" />
          <meta property="og:description" content="Projeto didático desenvolvido durante a Imersão React v2 do Alura" />
          <meta property="og:image" content="" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://aluramoviequiz.vercel.app/" />
          <meta property="twitter:title" content="Quiz Movie" />
          <meta property="twitter:description" content="Projeto didático desenvolvido durante a Imersão React v2 do Alura" />
          <meta property="twitter:image" content="" />
        </Head>
    </QuizHome>
  )
}

export default IndexPage;