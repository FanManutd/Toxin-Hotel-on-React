function BulletList(props) {
  const bulletList = props.bulletList;

  return (
    <ul className="bullet-list">
      {bulletList.map((item, index) => <li className="bullet-list__el" key={index}>{item}</li>)}
    </ul>
  );
}

BulletList.defaultProps = {
  bulletList: ['Нельзя с питомцами', 'Без вечеринок и мероприятий', 'Время прибытия — после 13:00, а выезд до 12:00'],
};

export default BulletList;
