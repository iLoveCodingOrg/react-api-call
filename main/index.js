import React from 'react'
import ReactDOM from 'react-dom'
import SearchApp from '../components/SearchApp'

function App (){
  return (
    <SearchApp />
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)