import React, { FC } from 'react';
import './index.scss';

type TProps = {
	isFailed?: boolean;
}

const Loader: FC<TProps> = ({ isFailed }) => {
	const imgSrc = isFailed ? '/load-failed.png' : '/loader.gif';
	const imgAlt = isFailed ? 'Nothing here :(' : 'Loading...';

	return (
		<div className='loader'>
			<img className='loader__content' src={imgSrc} alt={imgAlt} />
		</div>
	);
}

export default Loader;