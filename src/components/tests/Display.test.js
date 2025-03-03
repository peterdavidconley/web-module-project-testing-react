import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockFetchShow from '../../api/fetchShow';
jest.mock('../../api/fetchShow');
import Display from './../Display';
import Show from '../Show';

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

test('renders without errors with no props', ()=>{

    render(<Display />)

});

test('renders Show component when the button is clicked ', async ()=>{

    // Arrange 

    render(<Display />)
    mockFetchShow.mockResolvedValueOnce(testData);

    // Act

    const button = screen.getByRole('button')
    userEvent.click(button)

    // Assert

    await waitFor(() => {
    const showComponent = screen.getByTestId('show-container');
    expect(showComponent).toBeInTheDocument();
    })


});

test('X renders show season options matching your data when the button is clicked', async ()=>{

    // Arrange 

    render(<Display />)
    mockFetchShow.mockResolvedValueOnce(testData);

    // Act

    const button = screen.getByRole('button');
    userEvent.click(button);

    // Assert

    await waitFor(() => {
        const seasonOptions = screen.getAllByTestId('season-option');
        expect(seasonOptions).toHaveLength(4)
    })

});


