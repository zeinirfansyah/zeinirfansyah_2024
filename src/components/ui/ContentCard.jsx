import PropTypes from "prop-types";

export const ContentCard = (props) => {
  return (
    <div className="flex flex-row lg:flex-col gap-3 max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow">
      <div className="card-header w-full h-44 hidden lg:block">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="px-4">{props.title}</div>
      <div className="desc flex flex-row lg:flex-col justify-between h-full px-4">
        <div className="text-sm text-dimGray">{props.excerpt}</div>
        <div className="flex justify-between my-5">
          <small>{props.author}</small>
          <small className="text-dimGray">{props.date}</small>
        </div>
      </div>
    </div>
  );
};

ContentCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
};
