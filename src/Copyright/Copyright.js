import React from 'react';

const Copyright = ({ text, year, creator }) => {
	return (
		<div className='container text-center'>
			<small>
				Copyright &copy; {year}, {creator}
			</small>
		</div>
	);
};

export default Copyright;
