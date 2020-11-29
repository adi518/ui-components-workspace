import React from 'react';
import './App.css';

// import { Icon } from '@spotim/ui-components';
// import { Modal } from '@spotim/ui-components';
// import { Button } from '@spotim/ui-components';
// import { PopperTooltip } from '@spotim/ui-components';
// import { Icon } from 'ui-components-tsdx';
// import { Modal } from 'ui-components-tsdx';
import { Button } from 'ui-components-tsdx';

function App() {
  return (
    <div className="App" id="spotim-specific" data-spot-im-direction="ltr">
      <header className="App-header">
        <Button mode="primary">Button</Button>
        {/* <PopperTooltip></PopperTooltip> */}
        {/* <Icon name="arrow" type="fa-regular"></Icon> */}
        {/* <Modal isLtr={true} onClose={() => {}} showModal={true}></Modal> */}
      </header>
    </div>
  );
}

export default App;
