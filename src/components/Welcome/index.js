import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {subscribe: 'Subscribe'}

  onSubscribeButton = () => {
    const {subscribe} = this.state
    if (subscribe === 'Subscribe') {
      this.setState(() => ({
        subscribe: 'Subscribed',
      }))
    } else {
      this.setState(() => ({subscribe: 'Subscribe'}))
    }
  }

  render() {
    const {subscribe} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button
          className="button"
          onClick={this.onSubscribeButton}
          type="button"
        >
          {subscribe}
        </button>
      </div>
    )
  }
}

export default Welcome
