import { Link } from "react-router-dom"

export default function FourOFour() {
    return (
      <div className="nope">
        <h1>NOTHING TO SEE HERE </h1>
        <img className="FOUR" src="https://i.gifer.com/origin/3f/3fcf565ccc553afcfd89858c97304705.gif" alt="404"></img>
        <button className="new-button">
        <Link to="/">Go Home</Link>
      </button>
      </div>
    )
  }
  