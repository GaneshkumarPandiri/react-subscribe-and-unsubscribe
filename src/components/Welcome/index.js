import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {subscription: true}

  onSubscribe = () => {
    this.setState(item => ({subscription: false}))
  }

  onSubscribed = () => {
    this.setState(item => ({subscription: true}))
  }

  render() {
    const {subscription} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        {subscription ? (
          <button
            type="button"
            className="button-style"
            onClick={this.onSubscribe}
          >
            Subscribe
          </button>
        ) : (
          <button
            type="button"
            className="button-style"
            onClick={this.onSubscribed}
          >
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
