import { useState } from 'react';

import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'
import Services from '../components/services'
import Boleto from '../components/boleto'
import Loader from '../components/loader'

export default function Home() {

  const [boleto, setBoleto] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = () => {

    setLoading(true)

    setTimeout(()=> {

      setLoading(false)

      //TODO: incluir validacao e nova pesquisa

      setBoleto(true)
    }, 3000)
  }

  return (
    <div className="container">
      <Head>
        <title>Prefeitura de Bom Destino - IPTU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Services />

      <main>
        <div className="grid">
            <h1>Consulta IPTU</h1>
            <p>Este site é restrito aos contribuintes da Prefeitura Municipal de Bom Destino. <br/>
            Por favor, identifique seu imóvel fornecendo os dados solicitados:</p>

            <div>
                <input type="text" className="field" placeholder="Número do cadastro IPTU" />
                <button onClick={()=> request()}>Pesquisar</button>
            </div>

            {loading && <Loader /> }

            { boleto && <Boleto /> }

            <p>Contribuinte, verifique junto ao seu banco as condições e formas para fazer o pagamento do IPTU.</p>
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

        .field {
            height: 40px;
            width: 280px;
            padding: 0 15px;
            border-radius: 4px;
            border-width: 1px;
        }

        button {
            display: block;
            width: 120px;
            height: 40px;
            background: #fff;
            border: 1px solid #427ECC;
            color: #427ECC;
            border-radius: 4px;
            margin: 20px auto 0 auto;
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

        .grid p {
            width: 100%;
            text-align: center;
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