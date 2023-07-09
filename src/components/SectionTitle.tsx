/**
 * The SectionTitle component is a TypeScript React component that renders a header
 * with a title and optional subtitle, with the ability to center the text and add
 * custom CSS classes.
 * @param {SectionTitleProps} props - The "props" parameter is an object that
 * contains the properties passed to the SectionTitle component. It is of type
 * "SectionTitleProps".
 */
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
