import './App.css'
// import SignUp from './components/SignUp'
import SignUpV2 from './components/SignUpV2'
import { Route, Routes, Outlet, useParams, Link, useOutletContext, NavLink as NavLinkRouter, useNavigate, Navigate } from 'react-router-dom'
import AuthProvider from './store/AuthProvider'
import { useAuth } from './hooks/useAuth'
import { AuthContext } from './store/AuthProvider'
import { useContext } from 'react'

const NavLink = ({ to, children }: { to: string, children: React.ReactNode }) => {
  return (
    <NavLinkRouter className={({ isActive }) => {
      return isActive ? 'is-active' : ''
    }} to={to}>
      {children}
    </NavLinkRouter>
  )
}

const Home = () => {
  // useAuth()

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
              <NavLink to='/home/contacts'>Contacts</NavLink>
            </li>
            <li>
              {/* <a href='/home/aboutus'>About Us</a> */}
              <NavLink to='/home/aboutus'>About Us</NavLink>
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
  const { name, age } = useOutletContext<{ name: string, age: number }>()

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

const Videogames = () => {
  // useAuth()

  return <h3>Videogames 🎮</h3>
}

const ProtectedRoute = ({children}: { children: React.ReactNode }) => {
  // const { isLoggedIn } = useContext(AuthContext)
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
  console.log(isLoggedIn);  

  if (!isLoggedIn) {
    return <Navigate to='/' />
  }

  return children
}

function App() {
  return (
    <>
      {/* <SignUp /> */}
      <AuthProvider>
        <Routes>
          <Route path='/' element={<SignUpV2 />} />
          <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>}>
            <Route index element={<h2>This is a placeholder page for HOME!!!</h2>} />
            <Route path='contacts' element={<Contacts />} />
            <Route path='aboutus' element={<AboutUs />}>
              <Route path=':vipParam' element={<AboutUsVIP />} />
            </Route>
          </Route>
          <Route path='/videogames' element={<Videogames />} />
        </Routes >
      </AuthProvider>
    </>
  )
}

export default App
