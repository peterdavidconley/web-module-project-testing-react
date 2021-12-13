import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';


test("renders without error", () => {
    render(<Episode episode={1}/>)
});

test("renders the summary test passed as prop", ()=>{

    // Arrange 

    render(<Episode episode={1} summary={/Such a strange thing./i}/>)

    // Act 

    const summary = screen.queryByText(/Such a strange thing./i);

    // Assert

    expect(summary).toBeInTheDocument();
    expect(summary).toBeTruthy();
    expect(summary).not.toBeFalsy();

});

test("renders default image when image is not defined", ()=>{

    // Arrange
    render(<Episode episode={1} image={null}/>)

    // Act 

    const image = screen.getByRole('img');

    // Assert

    expect(image).toBeInTheDocument();


});
