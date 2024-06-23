import './App.css'

function App() {

  return (
    <div className='body'>
      <div className="project-main-container">
        <header className="header--container">
          <section className="header-nav-container">
            <div className="nav--logo-container">
              <h4 className='nav-logo-h4'>Learning</h4>
            </div>
            <nav className="nav--links-container">
              <li className="nav--link--li"><a href="#" className="nav-link-a">Home</a></li>
              <li className="nav--link--li"><a href="#" className="nav-link-a">About Us</a></li>
              <li className="nav--link--li"><a href="#" className="nav-link-a">Services</a></li>
              <li className="nav--link--li"><a href="#" className="nav-link-a">Courses</a></li>
              <li className="nav--link--li"><a href="#" className="nav-link-a">Blog</a></li>
              <li className="nav--link--li"><a href="#" className="nav-link-a active">Register</a></li>
            </nav>
          </section>
        </header>
      </div>
    </div>
  )
}

export default App
