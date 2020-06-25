import React from "react"
import { css } from "@emotion/core"

const TextWithTitle = ({ content }) => {
  return (
    <>
      <div
        id="nosotros"
        className="container"
        css={css`
          padding-top: 120px;
          padding-bottom: 120px;
          h2,
          p {
            margin: 0;
          }
          h2 {
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            font-size: 1.2rem;
          }
          p {
            line-height: 2;
          }
        `}
      >
        <div className="row">
          <div
            css={css`
              width: 100%;
              flex: 0 0 100%;
              padding-left: 15px;
              padding-right: 15px;
              text-align: center;
              @media (min-width: 768px) {
                width: 40%;
                flex: 0 0 40%;
              }
            `}
          >
            <h2>{content.title[0].text}</h2>
          </div>
          <div
            css={css`
              width: 100%;
              flex: 0 0 100%;
              padding-left: 15px;
              padding-right: 15px;
              @media (min-width: 768px) {
                width: 55%;
                flex: 0 0 55%;
              }
            `}
          >
            <p>{content.text[0].text}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TextWithTitle