/* eslint-disable max-len */
import Header from '../components/header/header';
import Dropdown from '../components/dropdown/dropdown';
import myVars from '../variables/variables';
import TextField from '../components/text-field/text-field';
import Footer from '../components/footer/footer';
import AboutsRoom from '../components/abouts-room/abouts-room';
import BlockColor from '../components/block-color/block-color';
import Type from '../components/type/type';
import SubmitButton from '../components/submit-button/submit-button';
import DateDropdown from '../components/date-dropdown/date-dropdown';
import BookingRoomCard from '../components/booking-room-card/booking-room-card';
import BulletList from '../components/bullet-list/bullet-list';
import Checkbox from '../components/checkbox/checkbox';
import RadioButton from '../components/radio-button/radio-button';
import ExpandableCheckbox from '../components/expandable-checkbox/expandable-checkbox';
import FilterDate from '../components/filter-date/filter-date';
import FooterCreative from '../components/footer-creative/footer-creative';

class TestPage extends React.Component {
  render() {
    // return <Header navbar={navbarInHeaderRu} userName="Maykl Yakubchuk" />;
    // return <Header navbar={navbarInHeaderRu} butLogin="Войти" butRegister="Зарегистрироваться"/>;
    return (
      <>
        <FooterCreative />
      </>
    );
  }
}

export default TestPage;
