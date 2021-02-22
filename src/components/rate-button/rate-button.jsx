function RateButton(props) {
  const activeStars = props.activeStars;
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (activeStars > i) {
      stars.push(<div className="star" key={i}>star</div>);
    } else {
      stars.push(<div className="star" key={i}>star_border</div>);
    }
  }

  return (
    <div className="stars">
      {stars}
    </div>
  );
}

RateButton.defaultProps = {
  activeStars: 3,
};

export default RateButton;
