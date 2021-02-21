function BlockColor(props) {
  const { color, name, rgb } = props;

  return (
    <div className="block-color">
      <div className={`block-color__color-box block-color__color-box_${color}`}></div>
      <div className="block-color__description">
        <p className="block-color__name block-color__text">{name}</p>
        <p className="block-color__rgb block-color__text">{rgb}</p>
      </div>
    </div>
  );
}

BlockColor.defaultProps = {
  color: 'dark-shade-100',
  name: 'Dark Shade 100%',
  rgb: '#1F2041',
};

export default BlockColor;
