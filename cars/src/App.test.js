import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import FormPlus from './components/FormPlus'



it('renders correctly App', () => {
  const {queryByTestId} = render(<App/>)
  
  expect(queryByTestId('app')).toBeTruthy()


})


it('renders correctly Form', () => {
  const {queryByTestId} = render(<FormPlus/>)

  expect(queryByTestId('button')).toBeTruthy()


})



  it('Input Render', () => {
    const {queryByPlaceholderText} = render(<FormPlus/>)

    expect(queryByPlaceholderText('Name')).toBeTruthy()
  })
