function SectionTitle(props: SectionTitleProps) {
	return (
		<h2
			className={`header-with-point ${props.center ? 'text-center' : ''} ${
				props.className
			}`}
			data-text={props.subtitle}
		>
			{props.title}
		</h2>
	);
}

SectionTitle.defaultProps = {
	className: '',
	center: false,
};

export default SectionTitle;
