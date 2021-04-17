class Colorful extends React.Component {
    render() {
      return (
        <div style={{color: "red", fontSize: 72}}>Big Red</div>
      );
    }
  };

// HTML style elements as a string
// BUT in JSX they must be an object
// no kebab-case