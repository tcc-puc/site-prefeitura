import "./style.scss"

export default function Services() {
    return (
      <>
      <section className="container-services">
        <div className="services">
            <ul>
              <li>
                <a href="/">
                  <svg width="80" height="80" viewBox="0 0 1024 1024" fill="currentColor"><g stroke="currentColor"><path d="M250.5 339.5l-16.7-11c23.5-35.6 53.2-66 88.3-90.3l11.4 16.4c-33 22.9-60.9 51.5-83 84.9zM199.3 493.4l-20-1.2c2.5-42.7 13-83.9 31.2-122.4l18.1 8.5c-17 36.2-26.9 74.9-29.3 115.1zM214 661.2c-19.1-38.1-30.6-79-34.1-121.7l19.9-1.6c3.3 40.1 14 78.5 32 114.3l-17.8 9zM328.5 790.2c-35.6-23.5-66-53.2-90.3-88.3l16.4-11.4c22.9 33 51.5 60.9 84.9 83l-11 16.7zM492.2 844.6c-42.7-2.5-83.9-13-122.4-31.2l8.5-18.1c36.2 17.1 74.9 27 115 29.3l-1.1 20zM539.5 844.1l-1.6-19.9c40.1-3.3 78.5-14 114.3-32l9 17.9c-38.1 19-79 30.5-121.7 34zM701.9 785.8l-11.4-16.4c33-22.9 60.9-51.5 83-84.9l16.7 11c-23.5 35.6-53.2 66-88.3 90.3zM813.4 654.2l-18.1-8.5c17.1-36.2 27-74.9 29.3-115l20 1.2c-2.5 42.6-13 83.8-31.2 122.3zM824.2 486.1c-3.3-40.1-14-78.5-32-114.3l17.9-9c19.1 38.1 30.6 79 34.1 121.7l-20 1.6zM769.4 333.5c-22.9-33-51.5-60.9-84.9-83l11-16.7c35.6 23.5 66 53.2 90.3 88.3l-16.4 11.4zM645.7 228.7c-36.2-17.1-74.9-27-115-29.3l1.2-20c42.7 2.5 83.9 13 122.4 31.2l-8.6 18.1zM371.8 231.9l-9-17.9c38.1-19.1 79-30.6 121.7-34.1l1.6 19.9c-40.1 3.3-78.5 14.1-114.3 32.1z"></path><path d="M541.2 233.3h-20v-62.2c0-18.3 8.6-35.7 23.1-46.5 3.3-2.4 8.7-7.4 8.7-13.9 0-11.4-18.4-24.2-44.8-24.2s-44.8 12.7-44.8 24.2c0 6.4 5.5 11.5 8.7 13.9 14.5 10.8 23.1 28.1 23.1 46.5v62.2h-20v-62.2c0-12-5.6-23.4-15-30.4-10.8-8.1-16.8-18.7-16.8-29.9 0-24.8 28.5-44.2 64.8-44.2S573 86 573 110.8c0 11.3-6 21.9-16.8 29.9-9.4 7-15 18.4-15 30.4v62.2zM515.8 957.4c-36.3 0-64.8-19.4-64.8-44.2 0-11.3 6-21.9 16.8-29.9 9.4-7 15-18.4 15-30.4v-62.2h20v62.2c0 18.3-8.6 35.7-23.1 46.5-3.3 2.4-8.7 7.4-8.7 13.9 0 11.4 18.4 24.2 44.8 24.2s44.8-12.7 44.8-24.2c0-6.4-5.5-11.5-8.7-13.9-14.5-10.8-23.1-28.1-23.1-46.5v-62.2h20v62.2c0 12 5.6 23.4 15 30.4 10.8 8.1 16.8 18.7 16.8 29.9-.1 24.8-28.5 44.2-64.8 44.2zM110.8 580.5c-24.8 0-44.2-28.5-44.2-64.8s19.4-64.8 44.2-64.8c11.3 0 21.9 6 29.9 16.8 7 9.4 18.4 15 30.4 15h62.2v20h-62.2c-18.3 0-35.7-8.6-46.5-23.1-2.4-3.3-7.4-8.7-13.9-8.7-11.4 0-24.2 18.4-24.2 44.8s12.7 44.8 24.2 44.8c6.4 0 11.5-5.5 13.9-8.7 10.8-14.5 28.1-23.1 46.5-23.1h62.2v20h-62.2c-12 0-23.4 5.6-30.4 15-8 10.9-18.7 16.8-29.9 16.8zM913.2 573c-11.3 0-21.9-6-29.9-16.8-7-9.4-18.4-15-30.4-15h-62.2v-20h62.2c18.3 0 35.7 8.6 46.5 23.1 2.4 3.3 7.4 8.7 13.9 8.7 11.4 0 24.2-18.4 24.2-44.8s-12.7-44.8-24.2-44.8c-6.4 0-11.5 5.5-13.9 8.7-10.8 14.5-28.1 23.1-46.5 23.1h-62.2v-20h62.2c12 0 23.4-5.6 30.4-15 8.1-10.8 18.7-16.8 29.9-16.8 24.8 0 44.2 28.5 44.2 64.8 0 36.4-19.4 64.8-44.2 64.8zM340.8 289l-31.1-53.8c-6-10.4-16.6-17.5-28.2-18.8-13.4-1.6-23.9-7.8-29.5-17.5-12.4-21.4 2.6-52.5 34-70.6 14.3-8.2 29.9-12.5 43.9-12 15.8.5 27.9 6.9 34.3 17.9 5.6 9.7 5.8 21.9.4 34.3-4.6 10.8-3.8 23.4 2.2 33.9l31.1 53.8-17.3 10-31.1-53.8c-9.2-15.9-10.4-35.2-3.2-51.8 1.6-3.7 3.8-10.8.6-16.4-3.7-6.5-12.7-7.7-17.6-7.9-10.2-.3-22.3 3.1-33.2 9.4-22.9 13.2-32.4 33.4-26.7 43.3 3.2 5.6 10.5 7.2 14.5 7.7 17.9 2.1 34 12.8 43.2 28.7l31.1 53.8-17.4 9.8zM696.2 907.9h-2.1c-15.8-.5-27.9-6.9-34.3-17.9-5.6-9.7-5.8-21.9-.4-34.3 4.6-10.8 3.8-23.4-2.2-33.9L626.1 768l17.3-10 31.1 53.8c9.2 15.9 10.4 35.2 3.2 51.8-1.6 3.7-3.8 10.8-.6 16.4 3.7 6.5 12.7 7.7 17.6 7.9 10.2.3 22.3-3.1 33.2-9.4 22.8-13.2 32.4-33.4 26.7-43.3-3.2-5.6-10.5-7.2-14.5-7.7-17.9-2.1-34-12.8-43.2-28.7L665.8 745l17.3-10 31.1 53.8c6 10.4 16.6 17.5 28.2 18.8 13.4 1.6 23.9 7.8 29.5 17.5 12.4 21.4-2.6 52.5-34 70.6-13.5 7.9-28.2 12.2-41.7 12.2zM182.2 776.3c-18.9 0-40.2-14.4-54-38.4-8.2-14.3-12.5-29.8-12-43.9.5-15.8 6.9-27.9 17.9-34.3 9.7-5.6 21.9-5.8 34.3-.4 10.8 4.6 23.4 3.8 33.9-2.2l53.8-31.1 10 17.3-53.8 31.1c-15.9 9.2-35.2 10.4-51.8 3.2-3.7-1.6-10.8-3.8-16.4-.6-6.5 3.7-7.7 12.7-7.9 17.6-.3 10.2 3.1 22.3 9.4 33.2 13.2 22.8 33.4 32.4 43.3 26.7 5.6-3.2 7.2-10.5 7.7-14.5 2.1-17.9 12.8-34 28.7-43.2l53.8-31.1 10 17.3-53.8 31.1c-10.4 6-17.5 16.6-18.8 28.2-1.6 13.4-7.8 23.9-17.5 29.5-5.3 3.1-10.9 4.5-16.8 4.5zM768 397.9l-10-17.3 53.8-31.1c15.9-9.2 35.2-10.4 51.8-3.2 3.7 1.6 10.8 3.8 16.4.6 6.5-3.7 7.7-12.7 7.9-17.6.3-10.2-3.1-22.3-9.4-33.2-13.2-22.9-33.4-32.4-43.3-26.7-5.6 3.2-7.2 10.5-7.7 14.5-2.1 17.9-12.8 34-28.7 43.2L745 358.2l-10-17.3 53.8-31.1c10.4-6 17.5-16.6 18.8-28.2 1.6-13.4 7.8-23.9 17.5-29.5 21.4-12.4 52.5 2.6 70.6 34 8.2 14.3 12.5 29.8 12 43.9-.5 15.8-6.9 27.9-17.9 34.3-9.7 5.6-21.9 5.8-34.3.4-10.8-4.6-23.4-3.8-33.9 2.2l-53.6 31zM252.3 404.5l-53.8-31.1c-10.4-6-23.1-6.8-33.8-2.2-12.4 5.3-24.6 5.2-34.3-.4-11-6.3-17.4-18.5-17.9-34.3-.5-14 3.8-29.6 12-43.9 18.2-31.5 49.2-46.4 70.6-34 9.7 5.6 16 16.1 17.5 29.5 1.4 11.6 8.4 22.2 18.8 28.2l53.8 31.1-10 17.3-53.8-31.1c-15.9-9.2-26.6-25.3-28.7-43.2-.5-4-2.1-11.3-7.7-14.5-9.9-5.7-30.1 3.8-43.3 26.7-6.3 10.9-9.7 23-9.4 33.2.2 5 1.4 13.9 7.9 17.6 5.6 3.2 12.7 1 16.4-.6 16.5-7.1 35.9-5.9 51.7 3.2l53.8 31.1-9.8 17.4zM845.6 769.8c-5.9 0-11.5-1.4-16.6-4.3-9.7-5.6-16-16.1-17.5-29.5-1.4-11.6-8.4-22.2-18.8-28.2l-53.8-31.1 10-17.3 53.8 31.1c15.9 9.2 26.6 25.3 28.7 43.2.5 4 2.1 11.3 7.7 14.5 9.9 5.7 30.1-3.9 43.3-26.7 6.3-10.9 9.7-23 9.4-33.2-.2-5-1.4-13.9-7.9-17.6-5.6-3.2-12.7-1-16.4.6-16.5 7.1-35.9 5.9-51.7-3.2L762 637l10-17.3 53.8 31.1c10.4 6 23.1 6.8 33.8 2.2 12.4-5.3 24.6-5.2 34.3.4 11 6.3 17.4 18.5 17.9 34.3.5 14-3.8 29.6-12 43.9-14.1 23.8-35.4 38.2-54.2 38.2zM334.3 911.7c-13.5 0-28.2-4.2-41.7-12.1-31.5-18.2-46.4-49.2-34-70.6 5.6-9.7 16.1-16 29.5-17.5 11.6-1.4 22.2-8.4 28.2-18.8l31.1-53.8 17.3 10-31.1 53.8c-9.2 15.9-25.3 26.6-43.2 28.7-4 .5-11.3 2.1-14.5 7.7-5.7 9.9 3.8 30.1 26.7 43.3 10.9 6.3 23 9.7 33.2 9.4 5-.2 13.9-1.4 17.6-7.9 3.2-5.6 1-12.7-.6-16.4-7.1-16.5-5.9-35.9 3.2-51.7l31.1-53.8 17.3 10-31.1 53.8c-6 10.4-6.8 23.1-2.2 33.8 5.3 12.4 5.2 24.6-.4 34.3-6.3 11-18.5 17.4-34.3 17.9-.7-.2-1.4-.1-2.1-.1zM676.6 285.2l-17.3-10 31.1-53.8c9.2-15.9 25.3-26.6 43.2-28.7 4-.5 11.3-2.1 14.5-7.7 5.7-9.9-3.8-30.1-26.7-43.3-10.9-6.3-23-9.7-33.2-9.4-5 .2-13.9 1.4-17.6 7.9-3.2 5.6-1 12.7.6 16.4 7.1 16.5 5.9 35.9-3.2 51.7l-31.1 53.8-17.3-10 31.1-53.8c6-10.4 6.8-23.1 2.2-33.8-5.3-12.4-5.2-24.6.4-34.3 6.3-11 18.5-17.4 34.3-17.9 14-.5 29.6 3.8 43.9 12 31.5 18.2 46.4 49.2 34 70.6-5.6 9.7-16.1 16-29.5 17.5-11.6 1.4-22.2 8.4-28.2 18.8l-31.2 54zM485.4 405.7c-30 0-54.4-24.4-54.4-54.4s24.4-54.4 54.4-54.4 54.4 24.4 54.4 54.4-24.4 54.4-54.4 54.4zm0-88.8c-19 0-34.4 15.4-34.4 34.4s15.4 34.4 34.4 34.4 34.4-15.4 34.4-34.4-15.4-34.4-34.4-34.4zM521.2 574.4c-30 0-54.4-24.4-54.4-54.4s24.4-54.4 54.4-54.4 54.4 24.4 54.4 54.4-24.4 54.4-54.4 54.4zm0-88.9c-19 0-34.4 15.4-34.4 34.4s15.4 34.4 34.4 34.4 34.4-15.4 34.4-34.4-15.4-34.4-34.4-34.4zM665 493.5c-30 0-54.4-24.4-54.4-54.4s24.4-54.4 54.4-54.4 54.4 24.4 54.4 54.4-24.4 54.4-54.4 54.4zm0-88.9c-19 0-34.4 15.4-34.4 34.4s15.4 34.4 34.4 34.4 34.4-15.4 34.4-34.4-15.4-34.4-34.4-34.4zM349.9 548.1c-30 0-54.4-24.4-54.4-54.4s24.4-54.4 54.4-54.4 54.4 24.4 54.4 54.4-24.4 54.4-54.4 54.4zm0-88.8c-19 0-34.4 15.4-34.4 34.4s15.4 34.4 34.4 34.4 34.4-15.4 34.4-34.4-15.4-34.4-34.4-34.4zM448.4 718.8c-30 0-54.4-24.4-54.4-54.4s24.4-54.4 54.4-54.4 54.4 24.4 54.4 54.4c0 29.9-24.4 54.4-54.4 54.4zm0-88.9c-19 0-34.4 15.4-34.4 34.4s15.4 34.4 34.4 34.4 34.4-15.4 34.4-34.4-15.4-34.4-34.4-34.4zM652.1 666.3c-30 0-54.4-24.4-54.4-54.4s24.4-54.4 54.4-54.4 54.4 24.4 54.4 54.4-24.4 54.4-54.4 54.4zm0-88.9c-19 0-34.4 15.4-34.4 34.4s15.4 34.4 34.4 34.4 34.4-15.4 34.4-34.4-15.5-34.4-34.4-34.4z"></path></g></svg>
                  <span>Coronavírus</span>
                </a>
              </li>
              <li>
                <a href="/iptu">
                  <svg width="80" height="80" viewBox="0 0 512 512" fill="currentColor"><path d="M494.933 93.867h-17.067v-25.6c0-5.12-3.413-8.533-8.533-8.533h-51.2c-5.12 0-8.533 3.413-8.533 8.533v25.6h-17.067c-5.12 0-8.533 3.413-8.533 8.533v136.533h-8.533v-25.6c0-5.12-3.413-8.533-8.533-8.533H358.4v-8.533c0-5.12-3.413-8.533-8.533-8.533-5.12 0-8.533 3.413-8.533 8.533v8.533H332.8c-5.12 0-8.533 3.413-8.533 8.533v25.6h-25.6V68.267c0-5.12-3.413-8.533-8.533-8.533h-25.6v-51.2C264.533 3.413 261.12 0 256 0H153.6c-5.12 0-8.533 3.413-8.533 8.533v51.2h-25.6c-5.12 0-8.533 3.413-8.533 8.533v221.867H93.867v-25.6c0-5.12-3.413-8.533-8.533-8.533h-51.2c-5.12 0-8.533 3.413-8.533 8.533v25.6h-8.533c-5.12 0-8.533 3.413-8.533 8.533v204.8c0 5.12 3.413 8.533 8.533 8.533H494.935c5.12 0 8.533-3.413 8.533-8.533V102.4c-.001-5.12-3.415-8.533-8.535-8.533zM426.667 76.8H460.8v17.067h-34.133V76.8zm-85.334 145.067H358.4v17.067h-17.067v-17.067zM128 76.8h25.6c5.12 0 8.533-3.413 8.533-8.533v-51.2h85.333v51.2c0 5.12 3.413 8.533 8.533 8.533h25.6v162.133h-17.067V102.4c0-5.12-3.413-8.533-8.533-8.533-5.12 0-8.533 3.413-8.533 8.533v136.533H230.4V102.4c0-5.12-3.413-8.533-8.533-8.533-5.12 0-8.533 3.413-8.533 8.533v136.533h-17.067V102.4c0-5.12-3.413-8.533-8.533-8.533S179.2 97.28 179.2 102.4v187.734h-17.067V102.4c0-5.12-3.413-8.533-8.533-8.533-5.12 0-8.533 3.413-8.533 8.533v187.733H128V76.8zM42.667 273.067H76.8v17.067H42.667v-17.067zM25.6 307.2H179.2v17.067h-59.733c-5.12 0-8.533 3.413-8.533 8.533v162.133H25.6V307.2zM128 341.333h51.2V358.4h-25.6c-5.12 0-8.533 3.413-8.533 8.533s3.413 8.533 8.533 8.533h25.6v17.067h-25.6c-5.12 0-8.533 3.413-8.533 8.533 0 5.12 3.413 8.533 8.533 8.533h25.6v17.067h-25.6c-5.12 0-8.533 3.413-8.533 8.533s3.413 8.533 8.533 8.533h25.6V460.8h-25.6c-5.12 0-8.533 3.413-8.533 8.533s3.413 8.533 8.533 8.533h25.6v17.067H128v-153.6zm68.267-8.533V256H384v238.933h-17.067V281.6c0-5.12-3.413-8.533-8.533-8.533s-8.533 3.413-8.533 8.533v213.333H332.8V281.6c0-5.12-3.413-8.533-8.533-8.533s-8.533 3.413-8.533 8.533v213.333h-17.067V281.6c0-5.12-3.413-8.533-8.533-8.533s-8.533 3.413-8.533 8.533v213.333h-17.067V281.6c0-5.12-3.413-8.533-8.533-8.533-5.12 0-8.533 3.413-8.533 8.533v213.333H230.4V281.6c0-5.12-3.413-8.533-8.533-8.533-5.12 0-8.533 3.413-8.533 8.533v213.333h-17.067V332.8zM486.4 494.933h-85.333v-384H486.4v384z"></path><path d="M426.667 332.8c-5.12 0-8.533 3.413-8.533 8.533V358.4c0 5.12 3.413 8.533 8.533 8.533s8.533-3.413 8.533-8.533v-17.067c0-5.12-3.413-8.533-8.533-8.533zM426.667 384c-5.12 0-8.533 3.413-8.533 8.533V409.6c0 5.12 3.413 8.533 8.533 8.533s8.533-3.413 8.533-8.533v-17.067c0-5.12-3.413-8.533-8.533-8.533zM426.667 435.2c-5.12 0-8.533 3.413-8.533 8.533V460.8c0 5.12 3.413 8.533 8.533 8.533s8.533-3.413 8.533-8.533v-17.067c0-5.12-3.413-8.533-8.533-8.533zM426.667 281.6c-5.12 0-8.533 3.413-8.533 8.533V307.2c0 5.12 3.413 8.533 8.533 8.533s8.533-3.413 8.533-8.533v-17.067c0-5.12-3.413-8.533-8.533-8.533zM426.667 128c-5.12 0-8.533 3.413-8.533 8.533V153.6c0 5.12 3.413 8.533 8.533 8.533s8.533-3.413 8.533-8.533v-17.067c0-5.12-3.413-8.533-8.533-8.533zM426.667 179.2c-5.12 0-8.533 3.413-8.533 8.533V204.8c0 5.12 3.413 8.533 8.533 8.533s8.533-3.413 8.533-8.533v-17.067c0-5.12-3.413-8.533-8.533-8.533zM426.667 230.4c-5.12 0-8.533 3.413-8.533 8.533V256c0 5.12 3.413 8.533 8.533 8.533S435.2 261.12 435.2 256v-17.067c0-5.12-3.413-8.533-8.533-8.533zM460.8 332.8c-5.12 0-8.533 3.413-8.533 8.533V358.4c0 5.12 3.413 8.533 8.533 8.533 5.12 0 8.533-3.413 8.533-8.533v-17.067c0-5.12-3.413-8.533-8.533-8.533zM460.8 435.2c-5.12 0-8.533 3.413-8.533 8.533V460.8c0 5.12 3.413 8.533 8.533 8.533 5.12 0 8.533-3.413 8.533-8.533v-17.067c0-5.12-3.413-8.533-8.533-8.533zM460.8 179.2c-5.12 0-8.533 3.413-8.533 8.533V204.8c0 5.12 3.413 8.533 8.533 8.533 5.12 0 8.533-3.413 8.533-8.533v-17.067c0-5.12-3.413-8.533-8.533-8.533zM460.8 128c-5.12 0-8.533 3.413-8.533 8.533V153.6c0 5.12 3.413 8.533 8.533 8.533 5.12 0 8.533-3.413 8.533-8.533v-17.067c0-5.12-3.413-8.533-8.533-8.533zM460.8 281.6c-5.12 0-8.533 3.413-8.533 8.533V307.2c0 5.12 3.413 8.533 8.533 8.533 5.12 0 8.533-3.413 8.533-8.533v-17.067c0-5.12-3.413-8.533-8.533-8.533zM460.8 384c-5.12 0-8.533 3.413-8.533 8.533V409.6c0 5.12 3.413 8.533 8.533 8.533 5.12 0 8.533-3.413 8.533-8.533v-17.067c0-5.12-3.413-8.533-8.533-8.533zM460.8 230.4c-5.12 0-8.533 3.413-8.533 8.533V256c0 5.12 3.413 8.533 8.533 8.533 5.12 0 8.533-3.413 8.533-8.533v-17.067c0-5.12-3.413-8.533-8.533-8.533zM51.2 426.667c-5.12 0-8.533 3.413-8.533 8.533v17.067c0 5.12 3.413 8.533 8.533 8.533s8.533-3.413 8.533-8.533V435.2c0-5.12-3.413-8.533-8.533-8.533zM51.2 324.267c-5.12 0-8.533 3.413-8.533 8.533v17.067c0 5.12 3.413 8.533 8.533 8.533s8.533-3.413 8.533-8.533V332.8c0-5.12-3.413-8.533-8.533-8.533zM51.2 375.467c-5.12 0-8.533 3.413-8.533 8.533v17.067c0 5.12 3.413 8.533 8.533 8.533s8.533-3.413 8.533-8.533V384c0-5.12-3.413-8.533-8.533-8.533zM85.333 375.467c-5.12 0-8.533 3.413-8.533 8.533v17.067c0 5.12 3.413 8.533 8.533 8.533s8.533-3.413 8.533-8.533V384c.001-5.12-3.413-8.533-8.533-8.533zM85.333 426.667c-5.12 0-8.533 3.413-8.533 8.533v17.067c0 5.12 3.413 8.533 8.533 8.533s8.533-3.413 8.533-8.533V435.2c.001-5.12-3.413-8.533-8.533-8.533zM85.333 324.267c-5.12 0-8.533 3.413-8.533 8.533v17.067c0 5.12 3.413 8.533 8.533 8.533s8.533-3.413 8.533-8.533V332.8c.001-5.12-3.413-8.533-8.533-8.533zM187.733 76.8c5.12 0 8.533-3.413 8.533-8.533v-25.6c0-5.12-3.413-8.533-8.533-8.533s-8.533 3.413-8.533 8.533v25.6c0 5.12 3.413 8.533 8.533 8.533zM221.867 76.8c5.12 0 8.533-3.413 8.533-8.533v-25.6c0-5.12-3.413-8.533-8.533-8.533-5.12 0-8.533 3.413-8.533 8.533v25.6c-.001 5.12 3.413 8.533 8.533 8.533z"></path></svg>
                  <span>IPTU</span>
                </a>
              </li>
              <li>
                <a href="/portal-transparencia">
                  <svg width="80" height="80" viewBox="0 0 512 512"><rect width="100%" height="100%" fill="none"></rect><g fill="currentColor" stroke="currentColor"><path d="M376.568 55.557h-81.635C291.417 37.22 275.215 23.405 256 23.405c-19.341 0-35.417 13.815-38.933 32.152h-81.635c-21.852 0-39.686 17.833-39.686 39.686v353.665c0 21.853 17.834 39.687 39.686 39.687h241.136c21.852 0 39.686-17.834 39.686-39.687V95.243c0-21.853-17.834-39.686-39.686-39.686zm-177.335 23.61c0-4.646 3.893-8.54 8.54-8.54h16.076c4.144 0 7.535-3.39 7.535-7.535 0-13.564 11.052-24.616 24.616-24.616s24.616 11.052 24.616 24.616c0 4.144 3.39 7.535 7.535 7.535h16.076c4.772 0 8.54 3.894 8.54 8.54v16.076c0 4.773-3.893 8.54-8.54 8.54h-96.454c-4.647 0-8.54-3.767-8.54-8.54V79.168zm8.54 39.687h96.454c10.424 0 19.215-6.781 22.355-16.075h42.45v338.594H142.968V102.779h42.45c3.14 9.294 11.93 16.075 22.355 16.075zm193.41 330.054c0 13.564-11.052 24.616-24.615 24.616H135.432c-13.563 0-24.615-11.052-24.615-24.616V95.243c0-13.564 11.052-24.616 24.615-24.616h50.363c-1.005 2.638-1.633 5.526-1.633 8.54v8.54h-48.73c-4.144 0-7.535 3.392-7.535 7.536v353.665c0 4.145 3.391 7.535 7.535 7.535h241.136c4.144 0 7.535-3.39 7.535-7.535V95.243c0-4.144-3.391-7.535-7.535-7.535h-48.73v-8.54c0-3.015-.628-5.903-1.633-8.54h50.363c13.563 0 24.615 11.051 24.615 24.615v353.665zm0 0"></path><path d="M256 78.665c4.145 0 7.535-3.39 7.535-7.535v-8.038c0-4.145-3.39-7.535-7.535-7.535s-7.535 3.39-7.535 7.535v8.038c0 4.144 3.39 7.535 7.535 7.535zm-87.914 88.919c0 4.144 3.391 7.535 7.536 7.535h104.491c4.145 0 7.536-3.39 7.536-7.535s-3.391-7.536-7.536-7.536H175.622c-4.145 0-7.536 3.391-7.536 7.536zm7.536 39.687H256c4.145 0 7.535-3.391 7.535-7.536 0-4.144-3.39-7.535-7.535-7.535h-80.378c-4.145 0-7.536 3.39-7.536 7.535s3.391 7.536 7.536 7.536zm104.491 17.08H175.622c-4.145 0-7.536 3.391-7.536 7.535 0 4.145 3.391 7.536 7.536 7.536h104.491c4.145 0 7.536-3.391 7.536-7.536 0-4.144-3.391-7.535-7.536-7.535zm-104.491 47.222H256c4.145 0 7.535-3.39 7.535-7.535s-3.39-7.536-7.535-7.536h-80.378c-4.145 0-7.536 3.391-7.536 7.536 0 4.144 3.391 7.535 7.536 7.535zm104.491 17.08H175.622c-4.145 0-7.536 3.392-7.536 7.536 0 4.145 3.391 7.536 7.536 7.536h104.491c4.145 0 7.536-3.391 7.536-7.536s-3.391-7.535-7.536-7.535zm-104.491 47.223H256c4.145 0 7.535-3.391 7.535-7.535s-3.39-7.536-7.535-7.536h-80.378c-4.145 0-7.536 3.391-7.536 7.536s3.391 7.535 7.536 7.535zm104.491 17.08H175.622c-4.145 0-7.536 3.391-7.536 7.536s3.391 7.535 7.536 7.535h104.491c4.145 0 7.536-3.39 7.536-7.535s-3.391-7.536-7.536-7.536zM256 385.108h-80.378c-4.145 0-7.536 3.39-7.536 7.535s3.391 7.536 7.536 7.536H256c4.145 0 7.535-3.391 7.535-7.536 0-4.144-3.39-7.535-7.535-7.535zm53.627-180.977c1.382 2.01 3.643 3.14 6.154 3.14 2.387 0 4.773-1.13 6.154-3.14l28.76-40.19c2.387-3.39 1.633-8.037-1.758-10.549-3.39-2.386-8.037-1.633-10.55 1.758l-22.606 31.65-5.4-7.536c-2.386-3.391-7.159-4.145-10.55-1.758-3.39 2.386-4.144 7.158-1.758 10.55l11.554 16.075zm0 64.303c1.382 2.009 3.643 3.14 6.154 3.14 2.387 0 4.773-1.131 6.154-3.14l28.76-40.19c2.387-3.39 1.633-8.037-1.758-10.55-3.39-2.386-8.037-1.632-10.55 1.759l-22.606 31.649-5.4-7.536c-2.386-3.39-7.159-4.144-10.55-1.758-3.39 2.386-4.144 7.159-1.758 10.55l11.554 16.076zm0 64.302c1.382 2.01 3.643 3.14 6.154 3.14 2.387 0 4.773-1.13 6.154-3.14l28.76-40.189c2.387-3.39 1.633-8.038-1.758-10.55-3.39-2.386-8.037-1.632-10.55 1.759l-22.606 31.649-5.4-7.536c-2.386-3.39-7.159-4.144-10.55-1.758-3.39 2.386-4.144 7.159-1.758 10.55l11.554 16.075zm0 64.303c1.382 2.01 3.643 3.14 6.154 3.14 2.387 0 4.773-1.13 6.154-3.14l28.76-40.19c2.387-3.39 1.633-8.037-1.758-10.549-3.39-2.386-8.037-1.633-10.55 1.758l-22.606 31.65-5.4-7.536c-2.386-3.391-7.159-4.145-10.55-1.758-3.39 2.386-4.144 7.158-1.758 10.55l11.554 16.075zm0 0"></path></g></svg>
                  <span>Portal da Transparência</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <svg width="80" height="80" viewBox="0 0 512 512" fill="currentColor"><rect width="100%" height="100%" fill="none"></rect><g stroke="currentColor"><path d="M368.318 271.773v156.505h-15.661V288.883c-2.586 2.335-5.273 4.525-8.079 6.5-2.086 3.701-4.466 7.802-7.583 10.79V459.6H62.916c-12.952 0-23.493-10.54-23.493-23.492V83.722h234.925v54.816c0 4.322 3.5 7.83 7.831 7.83h54.816v82.929c.37-.603.74-1.207 1.122-1.803 3.79-5.911 8.332-12.279 14.54-15.89v-73.066c0-.165-.087-.306-.094-.47a7.64 7.64 0 00-.423-2.083c-.086-.25-.15-.501-.259-.736-.376-.807-.845-1.559-1.495-2.216-.016-.016-.016-.024-.032-.04l-62.63-62.638c-.008-.008-.024-.016-.032-.024-.65-.642-1.41-1.112-2.208-1.488-.25-.117-.517-.188-.783-.274a7.603 7.603 0 00-2.005-.407c-.18-.008-.329-.102-.517-.102H70.747V52.398h297.571v134.908a229.338 229.338 0 0110.478-16.011c.057-1.786.19-3.554.465-5.345.341-2.23 2.621-3.463 4.719-3.532V44.568c0-4.323-3.5-7.831-7.831-7.831H62.916a7.829 7.829 0 00-7.83 7.83V68.06H31.592a7.829 7.829 0 00-7.831 7.831v360.218c0 21.59 17.564 39.154 39.154 39.154h281.91c4.33 0 7.83-3.508 7.83-7.83V443.94h23.493c4.33 0 7.83-3.508 7.83-7.831v-186.9c-2.778 4.87-5.963 9.44-8.87 13.491a262.338 262.338 0 01-6.79 9.073zM290.01 94.803l35.912 35.904H290.01V94.802z"></path><g><path d="M260.11 391.402a4.925 4.925 0 01-5.773-5.816l12.77-62.72a4.93 4.93 0 01.739-1.761L427.03 84.113a4.918 4.918 0 016.831-1.342l40.462 27.178a4.918 4.918 0 011.342 6.832L316.482 353.77a4.855 4.855 0 01-1.35 1.35l-53.234 35.543a4.892 4.892 0 01-1.787.738zm16.453-65.617l-10.191 50.047 42.48-28.358 155.896-232.096L432.46 93.69 276.563 325.785z"></path><path d="M256.229 397.182a4.91 4.91 0 01-3.694-.745 4.918 4.918 0 01-1.342-6.831l3.882-5.78a4.918 4.918 0 016.831-1.342 4.918 4.918 0 011.342 6.83l-3.882 5.781a4.905 4.905 0 01-3.137 2.087zM416.1 240.34a4.91 4.91 0 01-3.694-.745 4.918 4.918 0 01-1.342-6.831l55.493-82.617-53.716-36.08a4.918 4.918 0 01-1.342-6.832 4.918 4.918 0 016.832-1.342l57.803 38.825a4.918 4.918 0 011.342 6.831l-58.239 86.704a4.908 4.908 0 01-3.137 2.087z"></path><path d="M269.18 327.949l5.492-8.174 40.458 27.177-5.49 8.174z"></path><path d="M460.968 111.102a4.91 4.91 0 01-3.695-.745 4.918 4.918 0 01-1.342-6.831l20.55-30.595-9.167-6.158-20.55 30.595c-1.519 2.26-4.572 2.86-6.832 1.342s-2.86-4.571-1.342-6.831l23.296-34.682a4.918 4.918 0 016.831-1.342l17.34 11.647a4.918 4.918 0 011.343 6.832l-23.296 34.681a4.9 4.9 0 01-3.136 2.087z"></path><path d="M323.54 247.025l5.49-8.174 40.46 27.177-5.492 8.174z"></path></g><path d="M272.065 203.468H80.209c-3.23 0-5.873-2.643-5.873-5.873s2.643-5.873 5.873-5.873h191.856c3.23 0 5.873 2.643 5.873 5.873 0 3.23-2.643 5.873-5.873 5.873zm0 41.243H80.209c-3.23 0-5.873-2.643-5.873-5.873s2.643-5.873 5.873-5.873h191.856c3.23 0 5.873 2.643 5.873 5.873 0 3.23-2.643 5.873-5.873 5.873zm-7.342 45.68H80.21c-3.23 0-5.873-2.643-5.873-5.873s2.643-5.873 5.873-5.873h184.514c3.23 0 5.873 2.643 5.873 5.873s-2.643 5.873-5.873 5.873zm-20.241 49.003H80.209c-3.23 0-5.873-2.643-5.873-5.873s2.643-5.873 5.873-5.873h164.273c3.23 0 5.873 2.643 5.873 5.873s-2.643 5.873-5.873 5.873zM229.81 385.4H80.21c-3.23 0-5.874-2.642-5.874-5.873 0-3.23 2.643-5.873 5.873-5.873H229.81c3.23 0 5.874 2.643 5.874 5.873s-2.643 5.873-5.874 5.873z"></path></g></svg>
                  <span>Prontuário Eletrônico</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <svg width="80" height="80" viewBox="0 0 380 380" fill="currentColor"><path fill="none" d="M-1-1h382v382H-1z"></path><g><g stroke="null"><path d="M363.066 91.24h-15.858V76.232a6.624 6.624 0 00-5.854-6.579L249.47 58.864c-20.608-2.425-41.233 1.022-59.874 9.965-18.646-8.943-39.265-12.39-59.874-9.965L37.838 69.652a6.625 6.625 0 00-5.854 6.58V91.24H16.126A6.629 6.629 0 009.5 97.866v216.839a6.626 6.626 0 006.626 6.626h346.94a6.623 6.623 0 006.626-6.626V97.867a6.629 6.629 0 00-6.626-6.627h0zm-115.14-19.213l86.029 10.103V279.2l-84.485-9.92c-18.197-2.14-36.402.305-53.248 7.061V80.364c16.143-7.54 33.93-10.426 51.704-8.337h0zm-116.659 0c17.77-2.089 35.56.797 51.703 8.337v195.977a108.516 108.516 0 00-53.247-7.062l-84.486 9.922V82.13l86.03-10.103zM356.44 308.079H22.753V104.493h9.231v182.159a6.627 6.627 0 007.4 6.579l91.883-10.79c19.094-2.244 38.213 1.246 55.28 10.09a6.626 6.626 0 006.1 0c17.066-8.844 36.177-12.334 55.275-10.09l91.883 10.79a6.606 6.606 0 005.176-1.63 6.62 6.62 0 002.228-4.948v-182.16h9.231V308.08h0zm0 0"></path><path fill="none" d="M9.5 57.607h361v264.787H9.5z"></path><path stroke="currentColor" d="M211.486 109.355a95.434 95.434 0 0136.314-2.7l68.99 8.096c.262.034.526.048.78.048a6.625 6.625 0 006.574-5.854 6.626 6.626 0 00-5.81-7.355l-68.989-8.098a108.643 108.643 0 00-41.337 3.071 6.625 6.625 0 00-4.654 8.133 6.627 6.627 0 008.132 4.659h0zm0 0M61.376 114.8c.255 0 .518-.014.781-.049l68.98-8.097a96.065 96.065 0 0136.32 2.71 6.632 6.632 0 008.137-4.655 6.622 6.622 0 00-4.655-8.132 109.235 109.235 0 00-41.341-3.084l-68.99 8.098a6.626 6.626 0 00-5.805 7.355 6.623 6.623 0 006.573 5.853h0zm0 0M211.486 139.747a95.48 95.48 0 0136.314-2.7l68.99 8.101a6.625 6.625 0 101.546-13.162l-68.99-8.101a108.627 108.627 0 00-41.338 3.075 6.62 6.62 0 00-4.654 8.132c.957 3.529 4.602 5.612 8.132 4.655h0zm0 0M61.376 145.192c.255 0 .518-.013.781-.048l68.98-8.097c12.197-1.42 24.569-.493 36.32 2.709a6.632 6.632 0 008.137-4.655 6.624 6.624 0 00-4.655-8.131c-13.379-3.646-27.446-4.703-41.341-3.084l-68.99 8.101c-3.632.422-6.233 3.719-5.805 7.352a6.623 6.623 0 006.573 5.853h0zm0 0M211.486 170.14a95.48 95.48 0 0136.314-2.702l68.99 8.102a6.625 6.625 0 101.546-13.162l-68.99-8.101a108.749 108.749 0 00-41.338 3.075 6.621 6.621 0 00-4.654 8.133c.957 3.528 4.602 5.612 8.132 4.655h0zm0 0M61.376 175.583c.255 0 .518-.013.781-.043l68.98-8.102c12.197-1.418 24.569-.49 36.32 2.71a6.629 6.629 0 008.137-4.65 6.628 6.628 0 00-4.655-8.137c-13.379-3.646-27.446-4.703-41.341-3.084l-68.99 8.101a6.624 6.624 0 00-5.805 7.351 6.624 6.624 0 006.573 5.854h0zm0 0M211.486 200.531a95.48 95.48 0 0136.314-2.7l68.99 8.102a6.629 6.629 0 007.355-5.806 6.625 6.625 0 00-5.81-7.356l-68.99-8.102a108.72 108.72 0 00-41.337 3.076 6.62 6.62 0 00-4.654 8.13 6.625 6.625 0 008.132 4.656h0zm0 0M61.376 205.98c.255 0 .518-.017.781-.047l68.98-8.098c12.192-1.423 24.569-.497 36.32 2.705a6.626 6.626 0 103.482-12.786c-13.379-3.645-27.45-4.702-41.341-3.085l-68.99 8.102a6.625 6.625 0 00-5.805 7.355 6.628 6.628 0 006.573 5.854h0zm0 0M318.338 223.162l-68.988-8.098a108.676 108.676 0 00-41.342 3.071 6.629 6.629 0 003.478 12.792 95.44 95.44 0 0136.315-2.7l68.989 8.096a6.624 6.624 0 007.355-5.806 6.627 6.627 0 00-5.807-7.355h0zm0 0M61.376 236.371c.255 0 .518-.016.781-.048l68.98-8.097c12.197-1.419 24.569-.491 36.32 2.71a6.632 6.632 0 008.137-4.656 6.63 6.63 0 00-4.655-8.136 109.328 109.328 0 00-41.341-3.08l-68.99 8.098a6.625 6.625 0 00-5.805 7.355 6.623 6.623 0 006.573 5.854h0zm0 0"></path></g></g></svg>
                  <span>Outros</span>
                </a>
              </li>
            </ul>
        </div>
      </section>
      </>
    )
  }