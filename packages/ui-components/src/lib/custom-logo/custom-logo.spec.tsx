import { render } from '@testing-library/react';

import CustomLogo from './custom-logo';

describe('CustomLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomLogo />);
    expect(baseElement).toBeTruthy();
  });
});
