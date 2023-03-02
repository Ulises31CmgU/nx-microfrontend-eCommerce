import { Image, Route } from '@e-commerce/common-types-functions';
import { Link } from 'react-router-dom';
import { Logo } from './custom-logo.styles';

/* eslint-disable-next-line */
export interface CustomLogoProps {
  image: Image;
  link?: string;
}

export function CustomLogo({ image, link }: CustomLogoProps) {
  return (
    <Link to={link ?? '#'}>
      <Logo src={image.url} alt={image.alt ?? ''} />
    </Link>
  );
}

export default CustomLogo;
