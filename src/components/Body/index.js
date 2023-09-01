// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-navbar-container">
              <h1 className="body-heading">Left Navbar Menu</h1>
              <ul className="menu-list">
                <li className="list-item">Item1</li>
                <li className="list-item">Item2</li>
                <li className="list-item">Item3</li>
                <li className="list-item">Item4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-container">
              <h1 className="body-heading">Content</h1>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right-navbar-container">
              <h1 className="body-heading">Right Navbar</h1>
              <div className="right-navbar-item-container">
                <div className="container">
                  <p className="container-description">Ad 1</p>
                </div>
                <div className="container">
                  <p className="container-description">Ad 2</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
