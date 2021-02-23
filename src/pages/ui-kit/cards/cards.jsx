import Logo from '../../../components/logo/logo';
import SearchRoomCard from '../../../components/search-room-card/search-room-card';
import SignUpCard from '../../../components/sign-up-card/sign-up-card';
import SignInCard from '../../../components/sign-in-card/sign-in-card';
import BookingRoomCard from '../../../components/booking-room-card/booking-room-card';
import RoomCard from '../../../components/room-card/room-card';

function Cards() {
  return (
    <>
    <div className="logo">
      <div className="logo__wrapper">
        <Logo />
      </div>
    </div>
    <div className="cards">
      <div className="cards__content">
        <div className="cards__column">
          <div className="cards__search-room-card">
            <SearchRoomCard />
          </div>
          <div className="cards__sign-up-card">
            <SignUpCard />
          </div>
        </div>
        <div className="cards__column">
          <div className="cards__booking-room-card">
            <BookingRoomCard number="888" costForDay="9 990" isLux={true} />
          </div>
          <div className="cards__sign-in-car">
            <SignInCard />
          </div>
        </div>
        <div className="cards__column">
          <div className="cards__calendar">
            <div className="datepicker-here"></div>
          </div>
          <div className="cards__room-card">
            <RoomCard images={['room1.jpg', 'room2.jpg', 'room3.jpg', 'room4.jpg']} number="888" isLux={true} costForDay="9 990" activeStars={5} numOfComments="145" />
          </div>
          <div className="cards__room-card">
          <RoomCard images={['room2.jpg', 'room3.jpg', 'room4.jpg', 'room5.jpg']} number="840" costForDay="9 990" activeStars={4} numOfComments="65" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Cards;
