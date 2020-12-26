import "./style.scss"

export default function Loader() {
    return (
      <>
        <div className="loaderConent">
          <svg width="76px" height="76px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
              <path d="M24 50A26 26 0 0 0 76 50A26 28.7 0 0 1 24 50" fill="#0e7dd5" stroke="none">
              <animateTransform attributeName="transform" type="rotate" dur="1.0638297872340425s" repeatCount="indefinite" keyTimes="0;1" values="0 50 51.35;360 50 51.35"></animateTransform>
              </path>
          </svg>
        </div>
      </>
    )
  }