import React from "react";

const OperatorButton = props => {
  return <button className="operator-div">{props.button}</button>;
};

export default OperatorButton;

// const NumberButton = props => {
//   return <button className="number-button">{props.button}</button>;
// };

// const Numbers = () => {

//   const [numberValues] = useState(numbers);
//   return (
//     <div className="numbers-container">
//       {numberValues.map((button, index) => (
//         <NumberButton key={index} button={button} />
//       ))}
//       ;
//     </div>
//   );
// };
