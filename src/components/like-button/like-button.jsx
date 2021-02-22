class LikeButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLiked: this.props.isLiked };
  }

  handleLikeButtonClicked = () => {
    this.setState((state) => ({
      isLiked: !state.isLiked,
    }));
  }

  render() {
    const count = this.props.count;

    const heart = this.state.isLiked ? 'favorite' : 'favorite_border';
    const isLikeButtonLiked = this.state.isLiked ? 'like-button_liked' : '';
    const isHeartLiked = this.state.isLiked ? 'like-button__heart_liked' : '';
    const isCountLiked = this.state.isLiked ? 'like-button__count_liked' : '';

    return (
      <div className={`like-button ${isLikeButtonLiked}`} onClick={this.handleLikeButtonClicked}>
        <p className={`like-button__heart like-button__text ${isHeartLiked}`}>{heart}</p>
        <p className={`like-button__count like-button__text ${isCountLiked}`}>{count}</p>
      </div>
    );
  }
}

LikeButton.defaultProps = {
  count: '14',
  isLiked: false,
};

export default LikeButton;
