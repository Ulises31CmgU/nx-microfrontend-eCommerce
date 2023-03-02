import { Route } from '@e-commerce/common-types-functions';

import { StyledLink } from './custom-link.styles';

/* eslint-disable-next-line */
export interface CustomLinkProps {
  route: Route;
}

export function CustomLink({ route }: CustomLinkProps) {
  return <StyledLink to={route.url}>{route.name}</StyledLink>;
}

export default CustomLink;
