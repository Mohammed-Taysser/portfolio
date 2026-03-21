function SingleFeed(props: { feed: SingleFeed }) {
	const date = props.feed.publishAt.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});

	return (
		<div className='single-item nice-shadow'>
			<div className='img'>
				<img
					className='img-fluid rounded-top'
					src={props.feed.img}
					alt={props.feed.title}
					loading='lazy'
				/>
			</div>
			<div className='content p-4 rounded'>
				<a
					className='item-title my-3 fw-bold hovered bg-underline h4'
					href={props.feed.url}
					target='_blank'
					rel='noopener'
				>
					{props.feed.title}
				</a>
				<div className='d-flex gap-2 mt-3 mb-2'>
					<span className='badge bg-aurora'>{props.feed.provider}</span>
					<span className='badge bg-secondary'>{date}</span>
				</div>
				<p className='text-muted mt-2 mb-0 feed-info'>{props.feed.info}</p>
			</div>
		</div>
	);
}

export default SingleFeed;
