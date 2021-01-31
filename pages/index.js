/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('Nostra algo', name, setName);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz Movie</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta name="title" content="Quiz Movie" />
        <meta name="description" content="Projeto didático desenvolvido durante a Imersão React v2 do Alura" />

        <meta property="og:title" content="Quiz Movie" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aluramoviequiz.vercel.app/" />
        <meta property="og:description" content="Projeto didático desenvolvido durante a Imersão React v2 do Alura" />
        <meta property="og:image" content="../src/imgs/Imersão React.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://aluramoviequiz.vercel.app/" />
        <meta property="twitter:title" content="Quiz Movie" />
        <meta property="twitter:description" content="Projeto didático desenvolvido durante a Imersão React v2 do Alura" />
        <meta property="twitter:image" content="../src/imgs/Imersão React.png" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Quiz Movie</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(infosDoEvento) => {
              infosDoEvento.preventDefault();

              router.push(`/quiz?name=${name}`);

              console.log('Fazendo uma submissão por meio do react');

              // router manda para a próxima página
            }}
            >
              <input
                onChange={(infosDoEvento) => {
                  console.log(infosDoEvento.target.value);
                  // State
                  // name = infosDoEvento.target.value;
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Nome de jogador"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                { name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/TasOwnzt" />
    </QuizBackground>
  );
}
