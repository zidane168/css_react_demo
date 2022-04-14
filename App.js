

import GlobalStyles from './components/GlobalStyles'    // include global style
import Button from './components/Button.js'

function App() {
  return (
    
    <GlobalStyles>
      <div className="app d-flex">
          {/* <Button primary={true} /> */}
          <Button primary > Click </Button>
          <Button danger > Danger </Button>

          <Button disabled primary> Disabled </Button>
          <Button disabled danger> Disabled </Button>
      </div>
    </GlobalStyles>
  );
}

export default App;
