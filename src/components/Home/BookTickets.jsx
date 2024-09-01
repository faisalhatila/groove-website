'use client';
import React from 'react';
import BookTicketsCarousel from './BookTicketsCarousel';

const BookTickets = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  return (
    <div>
      <BookTicketsCarousel items={items} />
    </div>
  );
};

export default BookTickets;
