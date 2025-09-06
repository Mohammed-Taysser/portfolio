import { FEEDS } from '../constants/feeds';
import CircleAnimation from './CircleAnimation';
import SectionTitle from './SectionTitle';
import SingleFeed from './SingleFeed';

function Feed() {
	return (
		<section className='my-blogs py-5 ' id='blogs'>
			<div className='container my-5'>
				<SectionTitle center title='My Blogs' subtitle='Feeds' />

				<div className='row justify-content-center align-items-stretch mt-5'>
					{FEEDS.map((feed, index) => (
						<div className='col-xg-3 col-lg-4 col-md-6 my-3' key={index}>
							<SingleFeed feed={feed} />
						</div>
					))}
				</div>
			</div>
			<CircleAnimation />
		</section>
	);
}

export default Feed;
