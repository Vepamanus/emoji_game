// Write your code here.

import './index.css'

const NavBar = props => {
  const {Score, TopScore} = props
  return (
    <div className="navbar-container">
      <div style={{display: 'flex'}}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="icon"
        />
        <h1 className="heading">EmojiGame</h1>
      </div>

      <div className="score-container">
        <p className="score">Score: {Score}</p>

        <p className="topScore">Top Score: {TopScore}</p>
      </div>
    </div>
  )
}

export default NavBar
