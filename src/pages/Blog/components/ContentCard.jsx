import PropTypes from "prop-types";

export const ContentCard = (props) => {
  return (
    <>
      <div
        className="flex flex-col w-full lg:w-[22rem] outline-dashed outline-2 otuline-offset-4 outline-blueMunsell shadow"
      >
        <div id="thumbnail" className="h-[200px] w-full hidden lg:block">
          <img
            src={props.image}
            alt={props.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div
          id="exceprt"
          className="flex flex-col gap-4 justify-between p-4 h-full"
        >
          <div>
            <h1>{props.title}</h1>
            <p className="text-sm text-dimGray">{props.excerpt}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-dimGray">{props.author}</p>
            <p className="text-sm text-dimGray">{props.date}</p>
          </div>
        </div>
      </div>
    </>
  );
};

ContentCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
};
