import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='row'>
        <div className='column'>
          <h3 className='header'>Traditional CSS</h3>
          <div className='block'>
            HTML/CSS
          </div>
          <div className='arrow'>&darr;</div>
          <div className='block locked'>
            Parsing
          </div>
          <div className='multi-arrow-downline'>|</div>
          <hr width='50%'/>
          <div className='multi-block'>
            <div className='arrow multi-arrow'>&darr;</div>
            <div className='arrow multi-arrow'>&darr;</div>
          </div>
          <div className='multi-block'>
            <div className='block js-enabled'>
              DOM
            </div>
            <div className='block locked half-js-enabled'>
              CSS OM
            </div>
          </div>
          <div className='multi-block'>
            <div className='multi-arrow-downline'>|</div>
            <div className='multi-arrow-downline'>|</div>
          </div>
          <hr width='50%'/>
          <div className='arrow'>&darr;</div>
          <div className='block locked'>
            Render Tree
          </div>
          <div className='arrow'>&darr;</div>
          <div className='block locked'>
            Layout
          </div>
          <div className='arrow'>&darr;</div>
          <div className='block locked'>
            Paint
          </div>
          <div className='arrow'>&darr;</div>
          <div className='block locked'>
            Composite
          </div>
          <div className='arrow'>&darr;</div>
          <div className='block'>
            Screen
          </div>
        </div>
        <div className='column'>
          <h3 className='header'>Houdini</h3>
          <div className='block'>
            HTML/CSS
          </div>
          <div className='arrow'>&darr;</div>
          <div className='block js-enabled'>
            Parsing
          </div>
          <div className='multi-arrow-downline'>|</div>
          <hr width='50%'/>
          <div className='multi-block'>
            <div className='arrow multi-arrow'>&darr;</div>
            <div className='arrow multi-arrow'>&darr;</div>
          </div>
          <div className='multi-block'>
            <div className='block js-enabled'>
              DOM
            </div>
            <div className='block js-enabled'>
              Type OM
            </div>
          </div>
          <div className='multi-block'>
            <div className='multi-arrow-downline'>|</div>
            <div className='multi-arrow-downline'>|</div>
          </div>
          <hr width='50%'/>
          <div className='arrow'>&darr;</div>
          <div className='block js-enabled'>
            Render Tree
          </div>
          <div className='arrow'>&darr;</div>
          <div className='block js-enabled'>
            Layout
          </div>
          <div className='arrow'>&darr;</div>
          <div className='block js-enabled'>
            Paint
          </div>
          <div className='arrow'>&darr;</div>
          <div className='block js-enabled'>
            Composite
          </div>
          <div className='arrow'>&darr;</div>
          <div className='block'>
            Screen
          </div>
        </div>
      </div>      
    </div>
  );
}

export default App;
