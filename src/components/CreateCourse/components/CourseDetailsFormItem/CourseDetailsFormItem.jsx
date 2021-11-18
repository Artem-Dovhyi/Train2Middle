import React from 'react';

export const CourseDetailsFormItem = ({ title, children }) => {
	return (
		<div>
			<h2>{title}</h2>
			{children}
		</div>
	);
};
