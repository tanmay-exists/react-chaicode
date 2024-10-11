import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import chai from './chai.jsx'
import './index.css'
import React from 'react'

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}
// the following object won't work coz its not structured according to react
// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "drabkidnapper"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  <App/>
)
// MyApp above can be executed as MyApp() as a function but it is avoided due to some code practices