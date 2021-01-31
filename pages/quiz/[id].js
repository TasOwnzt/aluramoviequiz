/* eslint-disable linebreak-style */
import React from 'react';
import db from '../../db.json';
import Widget from '../../src/components/Widget';

export default function QuizDaGaleraPage() {
  return (
    <div>
      Desafio da próxima aula junto com as animações
      {/*       <ExternalQuizList hasName={hasName}>
        {db.external.map((url) => {
          const prepareUrl = url
            .replace(/\//g, '')
            .replace('https:', '')
            .replace('.vercel.app', '');

          const [repoName, user] = prepareUrl.split('.');
          return (
            <li key={url}>
              <Widget.Topic href={`/quiz/${user}__${repoName}?name=${name}`}>
                {`${user}/${repoName}`}
              </Widget.Topic>
            </li>
          );
        })}
      </ExternalQuizList> */}
      ;
    </div>
  );
}
