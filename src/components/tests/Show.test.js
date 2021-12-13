import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';

test('renders without errors', ()=>{

    render(<Show />)

});

test('renders Loading component when prop show is null', () => {});


test('renders same number of options seasons are passed in', ()=>{});

test('handleSelect is called when an season is selected', () => {});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {});
