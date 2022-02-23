import React from 'react';

function Button(props) { // function Button({ label, color })
  // const { label } = props;
  return (
    // <button>{props.label}</button>
    <button type={props.type}>{props.children}</button>
  );
}
Button.defaultProps = {
  label: 'Enter label for button',
  type: 'submit'
}

export default Button;

// App.js
//<div>
//  <span>Tekst</span>
//  <Button type="button">Cokolwiek</Button>
//  <Button>Cokolwiek 2</Button>
//</div>