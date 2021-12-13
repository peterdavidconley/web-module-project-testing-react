import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';
import Loading from '../Loading';

const testData = {

    name: 'Stranger Things',
    seasons: [
        {id: 0, name: 'Season 1', episodes: []},
        {id: 1, name: 'Season 2', episodes: []},
        {id: 2, name: 'Season 3', episodes: []},
        {id: 3, name: 'Season 4', episodes: []},
    ],
    summary: 'A very strange thing happened in the 80s.',

};

console.log(testData)

test('renders without errors', ()=>{

    render(<Show show={testData} selectedSeason={'none'}/>)

});

test('renders Loading component when prop show is null', () => {

    render(<Loading show={null}/>);

});


test('renders same number of options seasons are passed in', ()=>{

    // Arrange 

    render(<Show show={testData} selectedSeason={'none'}/>)

    // Act 

    const seasonOptions = screen.getByRole('option')
    const dataOptions = testData.seasons.length

    // Assert 

    expect(seasonOptions).toHaveLength(dataOptions)


});

test('handleSelect is called when an season is selected', () => {

    const handleCalled = jest.fn();

     // Arrange 

     render(<Show selectedSeason={1} handleSelect={handleCalled}/>)

    // Act 

    const button = screen.getByRole('button');
    userEvent.click(button);

    // Assert 

    expect(handleCalled).toBeCalled();

});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {

    // Arrange 1

    const { rerender } = render(<Show selectedSeason={'none'}/>)

    // Act 1

    const noSeasons = screen.queryByText('Chapter One: The Vanishing of Will Byers')

    // Assert 1

    expect(noSeasons).not.toBeInTheDocument();

    // Arrange 2

    rerender(<Show selectedSeason={1}/>)

    // Act 2

    noSeasons = screen.queryByText('Chapter One: The Vanishing of Will Byers')

    // Assert 2

    expect(noSeasons).toBeInTheDocument();

});
