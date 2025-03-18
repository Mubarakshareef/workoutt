import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header Component', () => {
  const renderHeader = () => {
    return render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  };

  test('renders app title', () => {
    renderHeader();
    expect(screen.getByText('Exercise Planner')).toBeInTheDocument();
  });

  test('renders profile button', () => {
    renderHeader();
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });
});