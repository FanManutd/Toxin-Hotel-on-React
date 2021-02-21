function AboutsRoom(props) {
  const roomDetails = props.roomDetails;

  return (
    <div className="abouts-room">
      {roomDetails.map((item, index) => {
        const { materIcon, title, description } = item;
        return (
          <div className="about-room" key={index}>
            <div className="about-room__icon">{materIcon}</div>
            <div className="about-room__wrapper">
              <p className="about-room__title about-room__text">{title}</p>
              <p className="about-room__description about-room__text">{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

AboutsRoom.defaultProps = {
  roomDetails: [{ materIcon: 'insert_emoticon', title: 'Комфорт', description: 'Шумопоглащающие стены' },
    { materIcon: 'location_city', title: 'Удобство', description: 'Окно в каждой из спален' }],
};

export default AboutsRoom;
