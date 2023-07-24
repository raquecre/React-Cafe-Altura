import React from 'react';


const addAndDelete = props => (
	<div>This is a component called addAndDelete.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class addAndDelete extends React.Component {
//   render() {
//     return <div>This is a component called addAndDelete.</div>;
//   }
// }

const addAndDeletePropTypes = {
	// always use prop types!
};

addAndDelete.propTypes = addAndDeletePropTypes;

export default addAndDelete;
