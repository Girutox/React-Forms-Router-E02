import './App.css'
// import SignUp from './components/SignUp'
import SignUpV2 from './components/SignUpV2'
import { Route, Routes, Outlet, useParams, Link, useOutletContext } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <header style={{ border: '1px solid white', padding: '10px' }}>
        <h1>Home</h1>
        <h2>Travel around my sites</h2>
        <hr />
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around', padding: '0' }}>
            <li>
              {/* <a href='/home/contacts'>Contacts</a> */}
              <Link to='/home/contacts'>Contacts</Link>
            </li>
            <li>
              {/* <a href='/home/aboutus'>About Us</a> */}
              <Link to='/home/aboutus'>About Us</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet context={{ name: 'Giancarlo', age: 30 }} />
      </main>
    </>
  )
}

const Contacts = () => {
  const { name, age } = useOutletContext()

  return (
    <>
      <h3>Contacts</h3>
      <section>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </section>
    </>
  )
}

const AboutUs = () => {
  const vips = ['John', 'Jane', 'James', 'Judy']

  return (
    <>
      <h3>About Us</h3>
      <ul>
        {vips.map((vip, index) => (
          <li key={index}>
            <Link to={`/home/aboutus/${vip}`}>{vip}</Link>
          </li>
        ))}
      </ul>
      <section>
        <Outlet />
      </section>
    </>
  )
}

const AboutUsVIP = () => {
  const { vipParam } = useParams()

  return <h3>VIP selected: {vipParam}</h3>
}

function App() {
  return (
    <>
      {/* <SignUp /> */}
      <Routes>
        <Route path='/' element={<SignUpV2 />} />
        <Route path='/home' element={<Home />}>
          <Route path='contacts' element={<Contacts />} />
          <Route path='aboutus' element={<AboutUs />}>
            <Route path=':vipParam' element={<AboutUsVIP />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
