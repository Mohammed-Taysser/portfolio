import { LazyLoadImage } from "react-lazy-load-image-component";

function SingleFeed(props: { feed: SingleFeed }) {
	return (
		<div className='single-item nice-shadow'>
			<div className='img'>
				<LazyLoadImage
					className='img-fluid rounded-top'
					src={props.feed.img}
					alt={props.feed.title}
				/>
			</div>
			<div className='content p-4 rounded'>
				<a
					className='item-title my-3 fw-bold hovered bg-underline h3'
					href={props.feed.url}
					target='_blank'
					rel='noopener'
				>
					{props.feed.title}
				</a>
				<p className='text-muted mt-4 mb-0 feed-info'>{props.feed.info}</p>
			</div>
		</div>
	);
}

export default SingleFeed;
