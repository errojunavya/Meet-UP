import {Link} from 'react-router-dom'
import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'
import './index.css'

const Home = props => {
  const onClickRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <RegisterContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value
        return (
          <div>
            <Header />
            <div className="app-container">
              {isRegistered === true ? (
                <div className="home-container1">
                  <h1 className="heading1">Hello {name}</h1>
                  <p className="para1">Welcome to {topic}</p>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                    className="image1"
                  />
                </div>
              ) : (
                <div className="home-container2">
                  <h1 className="heading2">Welcome to Meetup</h1>
                  <p className="para2">Please register for the topic</p>
                  <Link to="/register">
                    <button
                      type="button"
                      className="register-button"
                      onClick={onClickRegister}
                    >
                      Register
                    </button>
                  </Link>
                  <div>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                      alt="meetup"
                      className="image2"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )
      }}
    </RegisterContext.Consumer>
  )
}
export default Home
