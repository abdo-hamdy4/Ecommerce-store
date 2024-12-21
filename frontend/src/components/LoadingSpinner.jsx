import './LoadingSpinner.css';

const LoadingSpinner = () => {
	return (
		<div className='loading-spinner-container'>
			<div className='spinner-wrapper'>
				<div className='spinner-circle' />
				<div className='spinner-circle-animate' />
				<div className='sr-only'>Loading</div>
			</div>
		</div>
	);
};

export default LoadingSpinner;
