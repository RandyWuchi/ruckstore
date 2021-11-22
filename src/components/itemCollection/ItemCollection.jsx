import './itemCollection.scss';

const ItemCollection = ({ id, name, price, imageUrl }) => {
  return (
    <div className="item-collection">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

export default ItemCollection;
