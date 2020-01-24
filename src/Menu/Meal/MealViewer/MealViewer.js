import React from 'react';

const MealViewer = (props) => {
	const { title, ingredients, prix } = props;
	return (
		<div className='card col-6 col-lg-3'>
			{props.children}
			<div className='card-body'>
				<div className='card-title'>{title}</div>
				<p className='card-text text-muted small'>
					<em>{ingredients}</em>
				</p>
			</div>
			<div className='card-img-overlay text-right'>
				<h3>
					<span className='badge badge-pill badge-secondary'>{prix}</span>
				</h3>
			</div>
		</div>
	);
};

export default MealViewer;
