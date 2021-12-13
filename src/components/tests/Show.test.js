import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';
import Loading from '../Loading';

test('renders without errors', ()=>{

    render(<Show />)

});

test('renders Loading component when prop show is null', () => {

    render(<Loading show={null}/>);

});


test('renders same number of options seasons are passed in', ()=>{

    // Arrange 

    // Act 

    // Assert 


});

test('handleSelect is called when an season is selected', () => {

     // Arrange 

    // Act 

    // Assert 
    
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {

    // Arrange 1

    render(<Show selectedSeason={null}/>)

    // Act 1

    // Assert 1


    // Arrange 2

    // Act 2

    // Assert 2



});
