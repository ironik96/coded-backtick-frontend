const Card = ({ leading, trailing, content }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div>{leading}</div>
        {trailing}
      </div>
      <div className="card-content">{content}</div>
    </div>
  );
};

export default Card;
