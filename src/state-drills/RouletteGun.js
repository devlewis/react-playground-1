import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = { bulletInChamber: 8 };

    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false,
        }
    }
    
  buttonClick = () => {
      this.setState({ spinningTheChamber: true})
      this.timeOut = setTimeout(() => {
          const randomChamber = Math.ceil(Math.random() * 8)

          this.setState({
              chamber: randomChamber,
              spinningTheChamber: false,
          })
      }, 2000)
  }

  gunLogic() {
      const { chamber, spinningTheChamber } = this.state
      const { bulletInChamber } = this.props
      if (spinningTheChamber) {
          return "spinning the chamber and pulling the trigger! ..."
      } else if (chamber === bulletInChamber) {
          return "BANG!!!!!"
      } else {
          return "you\'re safe!"
      }
  }

    render() {
        return(
            <div>
                <p>{this.gunLogic()}</p>
                <button onClick={this.buttonClick}></button>
                Pull the trigger!
            </div>

        )
    }



}



export default RouletteGun;