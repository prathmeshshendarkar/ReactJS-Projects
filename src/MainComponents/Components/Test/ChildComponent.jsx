import React from 'react';

const ChildComponent = (props) => {
  const {onClickHandler} = props;
  console.log(onClickHandler);
  // onClickHandler();
  return (
    <>
      <h1>Child Component</h1>
      <button onClick={onClickHandler}>Click Me</button>
    </>
  );
}

export default ChildComponent;