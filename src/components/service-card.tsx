/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

interface ServiceCardProps {
  heading: string;
  subheading: string;
  bgColor: string;
  headingColor: string;
  src: string;
  btnTextColor: string;
  svgClass: string;
}

const ServiceCard = ({
  heading,
  subheading,
  bgColor,
  headingColor,
  src,
  btnTextColor,
  svgClass,
}: ServiceCardProps) => {
  return (
    <div
      className={`${bgColor} grid w-full grid-cols-2 items-center rounded-3xl border border-b-8 border-black p-10 shadow-black`}
    >
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col text-xl font-medium">
          <h3
            className={`${headingColor} self-start rounded-md p-1 text-black`}
          >
            {heading}
          </h3>
          <h3
            className={`${headingColor} self-start rounded-md p-1 text-black`}
          >
            {subheading}
          </h3>
        </div>
        <Link
          href="/"
          className={`${btnTextColor} flex items-center gap-2 text-lg`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`${svgClass} size-8 rounded-full px-2`}
          >
            <path
              fillRule="evenodd"
              d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
              clipRule="evenodd"
            />
          </svg>
          Learn more
        </Link>
      </div>
      <img src={src} alt={heading} className="object-cover" />
    </div>
  );
};

export default ServiceCard;
