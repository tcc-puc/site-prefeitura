import "./style.scss"

export default function Error(data) {

  const info = data["content"]

    return (
      <>
        <div className="error">
          <p>{info.message}</p>
          <p>{info.detail}</p>
        </div>
      </>
    )
  }