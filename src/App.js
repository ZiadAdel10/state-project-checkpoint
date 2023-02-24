import { Component } from "react";

class App extends Component {
  state = {
    person: {
      fullName: "Ziad Adel",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "https://via.placeholder.com/150",
      profession: "Software Developer",
    },
    show: false,
    timeInterval: 0,
  };

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, show, timeInterval } = this.state;
    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Show</button>
        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>{person.bio}</p>
            <p>{person.profession}</p>
          </div>
        )}
        <p>Time interval since last mount: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;
