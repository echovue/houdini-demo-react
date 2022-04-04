import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div class='row'>
        <div class='column'>
          <h3 class='header'>Traditional CSS</h3>
          <div class='block'>
            HTML/CSS
          </div>
          <div class='arrow'>&darr;</div>
          <div class='block locked'>
            Parsing
          </div>
          <div class='multi-arrow-downline'>|</div>
          <hr width='50%'/>
          <div class='multi-block'>
            <div class='arrow multi-arrow'>&darr;</div>
            <div class='arrow multi-arrow'>&darr;</div>
          </div>
          <div class='multi-block'>
            <div class='block js-enabled'>
              DOM
            </div>
            <div class='block locked half-js-enabled'>
              CSS OM
            </div>
          </div>
          <div class='multi-block'>
            <div class='multi-arrow-downline'>|</div>
            <div class='multi-arrow-downline'>|</div>
          </div>
          <hr width='50%'/>
          <div class='arrow'>&darr;</div>
          <div class='block locked'>
            Render Tree
          </div>
          <div class='arrow'>&darr;</div>
          <div class='block locked'>
            Layout
          </div>
          <div class='arrow'>&darr;</div>
          <div class='block locked'>
            Paint
          </div>
          <div class='arrow'>&darr;</div>
          <div class='block locked'>
            Composite
          </div>
          <div class='arrow'>&darr;</div>
          <div class='block'>
            Screen
          </div>
        </div>
        <div class='column'>
          <h3 class='header'>Houdini</h3>
          <div class='block'>
            HTML/CSS
          </div>
          <div class='arrow'>&darr;</div>
          <div class='block js-enabled'>
            Parsing
          </div>
          <div class='multi-arrow-downline'>|</div>
          <hr width='50%'/>
          <div class='multi-block'>
            <div class='arrow multi-arrow'>&darr;</div>
            <div class='arrow multi-arrow'>&darr;</div>
          </div>
          <div class='multi-block'>
            <div class='block js-enabled'>
              DOM
            </div>
            <div class='block js-enabled'>
              Type OM
            </div>
          </div>
          <div class='multi-block'>
            <div class='multi-arrow-downline'>|</div>
            <div class='multi-arrow-downline'>|</div>
          </div>
          <hr width='50%'/>
          <div class='arrow'>&darr;</div>
          <div class='block js-enabled'>
            Render Tree
          </div>
          <div class='arrow'>&darr;</div>
          <div class='block js-enabled'>
            Layout
          </div>
          <div class='arrow'>&darr;</div>
          <div class='block js-enabled'>
            Paint
          </div>
          <div class='arrow'>&darr;</div>
          <div class='block js-enabled'>
            Composite
          </div>
          <div class='arrow'>&darr;</div>
          <div class='block'>
            Screen
          </div>
        </div>
      </div>      
    </div>
  );
}

export default App;
