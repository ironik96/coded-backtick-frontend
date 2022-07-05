const Card = ({ leading, trailing, content, onClick }) => {
  const cardClass = onClick ? "card cursor-pointer" : "card";
  return (
    <div className={cardClass} onClick={onClick}>
      <div className="card-header">
        <div>{leading}</div>
        {trailing}
      </div>
      <div className="card-content">{content}</div>
    </div>
  );
};

export default Card;
