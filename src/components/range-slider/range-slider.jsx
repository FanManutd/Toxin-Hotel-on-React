import 'ion-rangeslider';

class RangeSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { result: '' };
    this.rangeSliderHere = React.createRef();
  }

  componentDidMount() {
    $(this.rangeSliderHere.current).ionRangeSlider({
      type: 'double',
      skin: 'round',
      hide_from_to: true,
      hide_min_max: true,
      min: 500,
      max: 15000,
      from: 5000,
      to: 10000,
      onChange: this.onChange,
      onStart: this.printResult,
    });
  }

  onChange = (data) => {
    this.printResult(data);
  }

  printResult = (data) => {
    const result = `${data.from_pretty}\u20BD - ${data.to_pretty}\u20BD`;
    this.setState({ result });
  }

  render() {
    const title = this.props.title;

    return (
      <div className="range-slides">
        <div className="range-slider__wrapper">
          <div className="range-slider__title">{title}</div>
          <div className="range-slider__result">{this.state.result}</div>
        </div>
        <div className="range-slider__slider">
          <input type="text" className="range-slider-here" ref={this.rangeSliderHere} name="my-rane" defaultValue=""/>
        </div>
      </div>
    );
  }
}

RangeSlider.defaultProps = {
  title: 'range slider',
};

export default RangeSlider;
