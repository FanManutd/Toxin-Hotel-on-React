/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import LikeButton from '../like-button/like-button';

function Comment(props) {
  const {
    avatar, name, dateText, likeButton, text,
  } = props;

  return (
    <div className="comment">
      <div className="comment__author">
        <div className="comment__avatar">
          <img src={require(`@components/comment/image/${avatar}`).default} alt="Avatar" className="comment__image"/>
        </div>
        <div className="comment__wrapper">
          <div className="comment__name">{name}</div>
          <div className="comment__date-text">{dateText}</div>
        </div>
      </div>
      <div className="comment__feedback">
        <div className="comment__like-button">
          <LikeButton count={likeButton.count} isLiked={likeButton.isLiked} />
        </div>
        <div className="comment__text">{text}</div>
      </div>
    </div>
  );
}

Comment.defaultProps = {
  avatar: 'avatar1.jpg',
  name: 'Мурад Сарафанов',
  dateText: '5 дней назад',
  likeButton: { count: 12, isLiked: true },
  text: 'Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.',
};

export default Comment;
