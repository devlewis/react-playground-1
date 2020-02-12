import React from 'react';


class Bomb extends React.Component {
    state = { count: 0 }
    interval = null

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    divisibleBy() {
        const { count } = this.state
        if(count >= 8){
            clearInterval(this.interval)
            return "BOOM!!!!"
        }
        if(count % 2 === 0){
            return "tick"
        }
        else {
            return "tock"
        }
    }

    render() {
        return (
            <div>
            {this.divisibleBy()}
            </div>
        )
    }
}


export default Bomb;