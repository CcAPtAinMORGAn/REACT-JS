import React, { useEffect } from 'react';
//Bootstrap 5 Modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js'
import './mycss.css'

function App() {
    
 useEffect(() => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))
 });

  return (
    <div className="custom-tooltip">
      <button type="button" class="btn btn-secondary"
        data-bs-toggle="tooltip" data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="This top tooltip is themed via CSS variables.">
        Custom tooltip
      </button>
    </div>
  );
}
export default App;