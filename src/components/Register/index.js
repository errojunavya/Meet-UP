import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'

import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        changeName,
        changeTopic,
        showError,
        registerName,
        updateError,
      } = value

      const onSubmitForm = event => {
        event.preventDefault()

        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }

      return (
        <div>
          <Header />
          <div className="register-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
              className="register-image"
            />
            <form className="form-container" onSubmit={onSubmitForm}>
              <h1 className="form-heading">Let us join</h1>
              <div className="input-container">
                <label className="label" htmlFor="input">
                  NAME
                </label>
                <input
                  className="input"
                  id="input"
                  value={name}
                  placeholder="Your name"
                  type="text"
                  onChange={onChangeName}
                />
              </div>
              <div className="input-container">
                <label htmlFor="input" className="label">
                  TOPICS
                </label>
                <select
                  id="topic"
                  value={topic}
                  onChange={onChangeTopic}
                  className="select"
                >
                  {topicsList.map(each => (
                    <option key={each.id} value={each.id}>
                      {each.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="register-button">
                Register Now
              </button>
              {showError === true ? (
                <p className="error-msg">Please enter your name</p>
              ) : null}
            </form>
          </div>
        </div>
      )
    }}
  </RegisterContext.Consumer>
)
export default Register
