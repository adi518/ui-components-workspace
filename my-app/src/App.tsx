import React from 'react';
import './App.css';

import { Button, Icon, Modal /* PopperTooltip */ } from '@spotim/ui-components';

function App() {
  return (
    <div className="App" id="spotim-specific" data-spot-im-direction="ltr">
      <header className="App-header">
        {/* <Modal isLtr={true} onClose={() => {}} showModal={true}></Modal> */}
        {/* <PopperTooltip></PopperTooltip> */}
        <Button mode="primary">Button</Button>
        <Icon name="arrow" type="fa-regular"></Icon>
      </header>
    </div>
  );
}

export default App;
