import './pageTitle.css';

type PageTitleProps = {
  title: string;
  subtitle?: string;
  description?: string;
};

export default function PageTitle({ title, subtitle, description }: PageTitleProps) {
  return (
    <div className='title-container'>
      {subtitle &&
        <p className='sub-title'>{subtitle}</p>
      }
      <h2 className='featured-title'>{title}</h2>
      {description &&
        <p className='description'>{description}</p>
      }
    </div>
  );
}