import ReactMarkdown from "react-markdown";

export default function Accordion({ data }) {
  return (
    <div className="mb-8 md:mb-16">
      {data.map(function (data, index) {
        const classIdx = `accordion-multi-` + index;
        return (
          <ul className="shadow-md">
            {data.titulo
              ? accordionOpen(data, index, classIdx)
              : accordionSingle(data, index)}
          </ul>
        );
      })}
    </div>
  );
}

const accordionOpen = (data, index, classIdx) => {
  return (
    <li className="accordion w-full overflow-hidden border-t" key={index}>
      <input
        className="absolute opacity-0 "
        id={classIdx}
        type="checkbox"
        name="tabs"
      />
      <label
        className="block p-5 leading-normal cursor-pointer"
        htmlFor={classIdx}
      >
        {data.titulo}
      </label>

      <div className="accordion-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
        <div className="p-5">
          <ReactMarkdown source={data.list} />
        </div>
      </div>
    </li>
  );
};

const accordionSingle = (data, index) => {
  return (
    <li
      className=" accordion-open accordion w-full overflow-hidden border-t"
      key={index}
    >
      <div className="max-h-full overflow-hidden  bg-gray-100  leading-normal">
        <div className="p-5">
          <ReactMarkdown source={data.list} />
        </div>
      </div>
    </li>
  );
};
