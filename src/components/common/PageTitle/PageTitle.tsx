import { Link } from "react-router";

import './pageTitle.css';

type PageTitleProps = {
  title: string;
  subtitle?: string | string[];
  description?: string;
  style?: string;
  linkInfo?: {
    target: string,
    value: string
  };
};

export default function PageTitle({ title, subtitle, description, style, linkInfo }: PageTitleProps) {
  return (
    <div className={`title-container ${style || ''}`}>
      <div className='text-container'>
        {subtitle &&
          <p className='sub-title'>
            {Array.isArray(subtitle) ? subtitle.map((line, index) => (
              <span key={index} className={index === 0 ? 'text-color' : ''}>
                {line}
              </span>
            )) : subtitle}
          </p>
        }

        <h2 className='featured-title space-grotesk'>{title}</h2>

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