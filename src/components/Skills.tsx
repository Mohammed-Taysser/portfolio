import { BsStars } from 'react-icons/bs';
import { PiBracketsCurlyBold } from 'react-icons/pi';
import { TbServerCog } from 'react-icons/tb';
import { BACKEND_ICONS, FRONTEND_ICONS, TOOLS_ICONS } from '../constants';
import SectionTitle from './SectionTitle';
import SingleSkill from './SingleSkill';

function Skills() {
	return (
		<section className='my-skills py-5 my-5' id='skills'>
			<div className='container'>
				<SectionTitle center subtitle='Skills' title='My Skills' />

				<div className='row mt-5 align-items-stretch justify-content-center'>
					<div className='col-md-6 my-4'>
						<SingleSkill
							skills={FRONTEND_ICONS}
							icon={BsStars}
							title='&lt;Frontend/&gt;'
						/>
					</div>
					<div className='col-md-6 my-4'>
						<SingleSkill
							skills={BACKEND_ICONS}
							icon={TbServerCog}
							title='&lt;Backend/&gt;'
						/>
					</div>
					<div className='col-md-6 my-4'>
						<SingleSkill
							skills={TOOLS_ICONS}
							icon={PiBracketsCurlyBold}
							title='&lt;Tools/&gt;'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
