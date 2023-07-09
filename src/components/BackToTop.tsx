import { useEffect, useState } from 'react';
import { TbTriangleFilled } from 'react-icons/tb';

function BackToTop() {
	const [shadow, setShadow] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	const onScroll = () => {
		const isInView =
			document.body.scrollTop > 700 || document.documentElement.scrollTop > 700;

		if (isInView) {
			setShadow(true);
		} else {
			setShadow(false);
		}
	};

	const onClickBtn = (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		evt.preventDefault();
		document.documentElement.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	};

	if (!shadow) {
		return <></>;
	}

	return (
		<a
			className='back-to-top text-white p-2 bg-aurora'
			id='js-back-to-top'
			href='#bact-to-top'
			title='back to top'
			onClick={onClickBtn}
		>
			<TbTriangleFilled />
		</a>
	);
}

export default BackToTop;
