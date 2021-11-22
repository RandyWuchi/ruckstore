import { ItemCollection } from '..';
import './previewCollection.scss';

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="preview-collection">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <ItemCollection key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
