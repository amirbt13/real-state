interface Props {
  data: string[];
}

const ItemList: React.FC<Props> = ({ data }) => {
  return (
    <div className=" mb-10">
      {data.length ? (
        <ul className=" pr-5 mb-12 list-disc">
          {data.map((item, index) => (
            <li className=" marker:text-meBlue" key={index}>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p>هیچ موردی ذکر نشده است</p>
      )}
    </div>
  );
};

export default ItemList;
