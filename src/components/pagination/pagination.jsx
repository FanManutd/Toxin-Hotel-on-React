function Pagination(props) {
  const caption = props.caption;

  return (
    <>
    <div className="pagination">
      <div className="pagination__number">1</div>
      <div className="pagination__number">2</div>
      <div className="pagination__number">3</div>
      <div className="pagination__number">...</div>
      <div className="pagination__number">15</div>
      <div className="pagination__number">arrow_forward</div>
    </div>
    <div className="pagination__caption">{caption}</div>
    </>
  );
}

Pagination.defaultProps = {
  caption: '1 - 12 из 100+ вариантов аренды',
};

export default Pagination;
