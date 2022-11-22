import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Taco Bell

        </a>
        <Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
{
  /* There is already an h1 in the page, let's not duplicate it. */
}
<Typography variant="h1" component="h2">
  h1. Heading
</Typography>
<Typography variant="h6" component="h2">
This is my body
</Typography>
      </header>
    </div>
  );
}

export default App;
