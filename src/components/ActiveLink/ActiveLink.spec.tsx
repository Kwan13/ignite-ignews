import { render, screen } from '@testing-library/react';
import { Activelink } from '.';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
});

describe('ActiveLink component', () => {
  it('renders correctly', () => {
    render(
      <Activelink href="/" activeClassName="active">
        <a>Home</a>
      </Activelink> 
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('adds active class if the link as currently active', () => {
    render(
      <Activelink href="/" activeClassName="active">
        <a>Home</a>
      </Activelink>
    );

    expect(screen.getByText('Home')).toHaveClass('active');
  });
});

