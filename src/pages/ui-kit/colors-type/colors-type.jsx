import myVars from '../../../variables/variables';
import Logo from '../../../components/logo/logo';
import BlockColor from '../../../components/block-color/block-color';
import Type from '../../../components/type/type';

function ColorsType() {
  return (
    <>
    <div className="logo">
      <div className="logo__wrapper">
        <Logo />
      </div>
    </div>
    <div className="colors-type">
      <div className="blocks-color">
        {myVars.blocksColor.map((item, index) => (
          <div className="blocks-color__block-color" key={index}>
            <BlockColor color={item.color} name={item.name} rgb={item.rgb} />
          </div>
        ))}
      </div>
      <div className="types">
        {myVars.types.map((item, index) => (
          <div className="types__type" key={index}>
            <Type title={item.title} text={item.text} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default ColorsType;
