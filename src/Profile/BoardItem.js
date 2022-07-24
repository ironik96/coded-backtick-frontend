export function BoardItem({ board }) {
  const { title, description } = board;
  return (
    <div className="grid bg-white w-56 h-28 justify-items-center text-xs rounded-[10px]">
      <h1 className="bg-lightgreen text-green h-8 w-[95%] pt-2 m-2 text-center rounded-[10px]">
        {title}
      </h1>
      <p className="overflow-hidden wrap">{description}</p>
    </div>
  );
}
