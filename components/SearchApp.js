import React from 'react'

export default class SearchApp extends React.Component {
  constructor() {
    super();
    this.state = {
      results: []
    }
  }

  componentWillMount(){
    fetch('https://itunes.apple.com/search?term=jack+johnson')
      .then((response)=>{
        return response.json()
      })
      .then((json)=>{
        console.log(json)
        this.setState({
          results: json.results
        })
      })
  }

  render() {
    return (
      <div>
        {
          this.state.results.map((item, index)=>{
            return(
              <div key={index}>
                {item.trackName}
              </div>
            )
          })
        }
      </div>
    )
  }
}