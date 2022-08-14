import { Link } from "react-router-dom"

export default function FourOFour() {
    return (
      <div className="nope">
        <h1 className="nope">NOTHING TO SEE HERE </h1>
        <img className="FOUR" src="https://i.pinimg.com/originals/52/49/2d/52492dfd578e53265da207e2903a5ce7.gif" alt="404"></img>
        <button className="new-button">
        <Link to="/">Go Home</Link>
      </button>
      </div>
    )
  }
  