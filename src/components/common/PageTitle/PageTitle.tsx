import { Link } from "react-router";

import './pageTitle.css';

type PageTitleProps = {
  title: string;
  subtitle?: string;
  description?: string;
  titleClassName?: string;
  linkInfo?: {
    target: string,
    value: string
  };
};

export default function PageTitle({ title, subtitle, description, titleClassName, linkInfo }: PageTitleProps) {
  return (
    <div className='title-container'>
      <div className='text-container'>
        {subtitle &&
          <p className='sub-title'>{subtitle}</p>
        }

        <h2 className={`featured-title ${titleClassName || ''}`}>{title}</h2>

        {description &&
          <p className='description'>{description}</p>
        }
      </div>

      {linkInfo &&
        <Link className='title-link group' to={`/${linkInfo.target}`} aria-label='Explore all work'>
          {linkInfo.value}
          <div className='link-line'></div>
        </Link>
      }

    </div>
  );
}