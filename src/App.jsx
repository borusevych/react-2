import './App.css';
import Button from './components/Button.jsx';
import Modal from './components/Modal.jsx';
import { useState } from "react"

function App() {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsFirstModalOpen(true)}>Open first modal</Button>
      <Button onClick={() => setIsSecondModalOpen(true)}>Open second modal</Button>

      {isFirstModalOpen && (
        <Modal onClose={() => setIsFirstModalOpen(false)}>
          <div class="block"></div>
          <h1 class="header">Product Delete!</h1>
          <p class="description">By clicking the “Yes, Delete” button, PRODUCT NAME will be deleted.</p>
          <div class="buttons">
            <button class="button-violet">NO, CANCEL</button>
            <button class="button">YES, DELETE</button>
          </div>

        </Modal>
      )}

      {isSecondModalOpen && (
        <Modal onClose={() => setIsSecondModalOpen(false)}>
          <h1 class="header">Add Product “NAME”</h1>
          <p class="description">Description for you product</p>
          <button class="button-violet">ADD TO FAVORITE</button>
        </Modal>
      )}
    </div>
  );
}

export default App;
