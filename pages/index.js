import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'
import Services from '../components/services'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Prefeitura de Bom Destino</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"></link>
      </Head>

      <Header />

      <Services />

      <main>
        <div className="grid">
        <a href="https://nextjs.org/docs" className="card">
            <h3>Coronavírus &rarr;</h3>
            <p>O que você precisa saber sobre Covid-19</p>
          </a>

          <a href="https://nextjs.org/docs" className="card">
            <h3>Concursos &rarr;</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in est dolor.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Licitações &rarr;</h3>
            <p>Duis pulvinar bibendum tellus, a interdum nisi vestibulum quis.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Diário Oficial &rarr;</h3>
            <p>Donec nec tellus euismod, rhoncus massa eu, vestibulum velit.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Vagas de Emprego &rarr;</h3>
            <p>Nullam sed lobortis lectus. Morbi nunc nisi, posuere eu dignissim.</p>
          </a>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: 'Roboto', sans-serif;
        }

        main {
          padding: 0 0 5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 1140px;
          margin-top: 3rem;
        }

        .card {
          margin: 2%;
          flex-basis: 46%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #ef8354;
          border-color: #ef8354;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
