/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import EmojiCard from '../EmojiCard'

import NavBar from '../NavBar'

import './index.css'

class EmojiGame extends Component {
  state = {
    Score: 0,
    TopScore: 0,
    isGameInProgress : true;
  }



  render() {
    const {Score, TopScore} = this.state

    const {emojisList} = this.props

    return (
      <div className="app-container">
        <NavBar Score={Score} TopScore={TopScore} />
        <div className="emoji-container">
          {isGameInProgress ? this.getEmojiesList(): this.setScoreBoard() }
        </div>
      </div>
    )
  }
}

export default EmojiGame
