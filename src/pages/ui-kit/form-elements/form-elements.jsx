import { trim } from 'jquery';
import myVars from '../../../variables/variables';
import Logo from '../../../components/logo/logo';
import TextField from '../../../components/text-field/text-field';
import AboutsRoom from '../../../components/abouts-room/abouts-room';
import Checkbox from '../../../components/checkbox/checkbox';
import ExpandableCheckbox from '../../../components/expandable-checkbox/expandable-checkbox';
import RateButton from '../../../components/rate-button/rate-button';
import RadioButton from '../../../components/radio-button/radio-button';
import Toggle from '../../../components/toggle/toggle';
import LikeButton from '../../../components/like-button/like-button';
import Button from '../../../components/button/button';
import SubmitButton from '../../../components/submit-button/submit-button';
import Pagination from '../../../components/pagination/pagination';
import RichCheckbox from '../../../components/rich-checkbox/rich-checkbox';
import BulletList from '../../../components/bullet-list/bullet-list';
import Dropdown from '../../../components/dropdown/dropdown';
import DateDropdown from '../../../components/date-dropdown/date-dropdown';
import FilterDate from '../../../components/filter-date/filter-date';
import Comment from '../../../components/comment/comment';
import RangeSlider from '../../../components/range-slider/range-slider';

function FormElements() {
  return (
    <>
      <div className="logo">
        <div className="logo__wrapper">
          <Logo />
        </div>
      </div>
      <div className="form-elements">
        <div className="form-elements__content">
          <div className="form-elements__left">
            <div className="form-elements__field-default">
              <TextField type="text" title="text field" placeholder="Email" />
            </div>
            <div className="form-elements__field-focus">
              <TextField type="text" title="text field" value="This is pretty awesome" />
            </div>
            <div className="form-elements__dropdown-left_big">
              <Dropdown title="dropdown" elements={myVars.dropdownMidInFormEl} buttons={true} resultDefault="Сколько гостей" keyWords={['гость', 'гостя', 'гостей']} />
            </div>
            <div className="form-elements__masked-field">
              <TextField type="masked" title="masked text field" placeholder="ДД.ММ.ГГГГ" />
            </div>
            <div className="form-elements__date-dropdown">
              <DateDropdown title1="date dropdown" title2="date dropdown" />
            </div>
            <div className="form-elements__filter-date">
              <FilterDate title="filter date dropdown" />
            </div>
            <div className="form-elements__subscription">
              <TextField type="subscription" title="subscription text field" placeholder="Email" />
            </div>
            <div className="form-elements__dropdown-left">
              <Dropdown title="dropdown" elements={myVars.roomDropdown} resultDefault="Сколько комнат" />
            </div>
            <div className="form-elements__dropdown-left form-elements__dropdown-left_expanded">
              <Dropdown title="dropdown" elements={myVars.roomDropdown} resultDefault="Сколько комнат" isExpanded={true} />
            </div>
            <div className="form-elements__expandable-checkbox">
              <ExpandableCheckbox title="expandable checkbox list" checkboxList={myVars.checkboxesToList} />
            </div>
            <div className="form-elements__expandable-checkbox form-elements__expandable-checkbox_expanded">
              <ExpandableCheckbox title="expandable checkbox list" checkboxList={myVars.checkboxesToList} isExpanded={true} />
            </div>
            <div className="form-elements__abouts-room">
              <AboutsRoom roomDetails={myVars.roomDetailsInFormEl} />
            </div>
          </div>
          <div className="form-elements__mid">
            <div className="form-elements__checkbox-text form-elements__text">checkbox buttons</div>
            <div className="form-elements__checkbox">
              <Checkbox checkboxes={myVars.checkboxes} />
            </div>
            <div className="form-elements__radio-text form-elements__text">radio buttons</div>
            <div className="form-elements__radio">
              <RadioButton title="Пол" radioButtons={myVars.radioButtons} />
            </div>
            <div className="form-elements__toggle-text form-elements__text">toggle</div>
            <div className="form-elements__toggle">
              <Toggle label="Получать спецпредложения" isChecked={true} />
            </div>
            <div className="form-elements__toggle">
              <Toggle label="Получать спецпредложения" />
            </div>
            <div className="form-elements__like-button-text form-elements__text">like button</div>
            <div className="form-elements__like-button">
              <LikeButton count="2" />
            </div>
            <div className="form-elements__like-button">
              <LikeButton count="12" isLiked={true} />
            </div>
            <div className="form-elements__rate-button-text form-elements__text">rate button</div>
            <div className="form-elements__rate-button">
              <RateButton activeStars="4" />
            </div>
            <div className="form-elements__rate-button">
              <RateButton activeStars="5" />
            </div>
            <div className="form-elements__dropdown-mid">
              <Dropdown title="dropdown" elements={myVars.dropdownMidInFormEl} buttons={true} resultDefault="Сколько гостей" keyWords={['гость', 'гостя', 'гостей']} isExpanded={true} />
            </div>
            <div className="form-elements__rich-checkbox-text form-elements__text">rich checkbox buttons</div>
            <div className="form-elements__rich-checkbox">
              <RichCheckbox richCheckboxes={myVars.richCheckboxes} />
            </div>
          </div>
          <div className="form-elements__right">
            <div className="form-elements__range-slider">
              <RangeSlider title="range slider" />
            </div>
            <div className="form-elements__buttons-text form-elements__text">buttons</div>
            <div className="form-elements__button form-elements__button_purple">
              <Button color="purple" place="in-form" text="click me" />
            </div>
            <div className="form-elements__button form-elements__button_purple">
              <Button color="purple" place="in-form" text="click me" />
            </div>
            <div className="form-elements__button form-elements__button_white">
              <Button color="white" place="in-form" text="click me" />
            </div>
            <div className="form-elements__button form-elements__button_white">
              <Button color="white" place="in-form" text="click me" />
            </div>
            <div className="form-elements__button-text form-elements__button-text_purple">click me</div>
            <div className="form-elements__button-text form-elements__button-text_black">click me</div>
            <div className="form-elements__submit-button">
              <SubmitButton text="Перейти к оплате" />
            </div>
            <div className="form-elements__pagination-text form-elements__text">pagination</div>
            <div className="form-elements__pagination">
              <Pagination caption="1 - 12 из 100+ вариантов аренды" />
            </div>
            <div className="form-elements__dropdown-right">
              <Dropdown title="dropdown" elements={myVars.dropdownRightInFormEl} buttons={true} resultDefault="Сколько гостей" keyWords={['гость', 'гостя', 'гостей']} isExpanded={true} />
            </div>
            <div className="form-elements__bullet-list-text form-elements__text">bullet list</div>
            <div className="form-elements__bullet-list">
              <BulletList bulletList={myVars.bulletList} />
            </div>
          </div>
          <div className="form-elements__comment">
            <Comment avatar="avatar1.jpg" name="Мурад Сарафанов" dateText="5 дней назад" likeButton={{ count: 12, isLiked: true }} text="Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей." />
          </div>
        </div>
      </div>
    </>
  );
}

export default FormElements;
