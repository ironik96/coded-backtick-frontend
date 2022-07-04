const Card = ({ leading, trailing, content }) => {
  return (
    <div className="card">
      <div className="card-header">
        {leading}
        {trailing}
      </div>
      <div className="card-content">{content}</div>
    </div>
  );
};

export default Card;
