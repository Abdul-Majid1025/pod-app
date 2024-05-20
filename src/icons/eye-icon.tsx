import React from 'react';

type Props = {
  onClick?: () => void
}

export const EyeIcon = ({ onClick }: Props) => {
  return (
    <svg onClick={onClick} style={{ cursor: 'pointer' }} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.833496 10.0002C0.833496 10.0002 4.16683 3.3335 10.0002 3.3335C15.8335 3.3335 19.1668 10.0002 19.1668 10.0002C19.1668 10.0002 15.8335 16.6668 10.0002 16.6668C4.16683 16.6668 0.833496 10.0002 0.833496 10.0002Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M10.0002 12.5002C11.3809 12.5002 12.5002 11.3809 12.5002 10.0002C12.5002 8.61945 11.3809 7.50016 10.0002 7.50016C8.61945 7.50016 7.50016 8.61945 7.50016 10.0002C7.50016 11.3809 8.61945 12.5002 10.0002 12.5002Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};