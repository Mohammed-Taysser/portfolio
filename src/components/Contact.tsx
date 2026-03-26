import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { useState } from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { FiAlertTriangle } from 'react-icons/fi';
import { IoMdCheckmark } from 'react-icons/io';
import { LuMapPin, LuSun } from 'react-icons/lu';
import { MdAlternateEmail } from 'react-icons/md';
import contactUsBG from '../assets/images/background/contact-us-bg.svg';
import SectionTitle from './SectionTitle';

function Contact() {
	const [isSuccess, setIsSuccess] = useState(false);
	const [error, setError] = useState<EmailJSResponseStatus | null | string>(
		null
	);
	const [isLoading, setIsLoading] = useState(false);
	const [formInfo, setFormInfo] = useState({
		name: '',
		email: '',
		message: '',
		phone: '',
		subject: '',
	});

	const onInputChange = (
		evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormInfo({
			...formInfo,
			[evt.target.name]: evt.target.value,
		});
	};

	const onFormSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault();

		setIsLoading(true);

		setIsSuccess(false);
		setError(null);

		const templateParams = {
			from_name: formInfo.name,
			to_name: 'Mohammed Taysser',
			phone: formInfo.phone,
			email: formInfo.email,
			message: formInfo.message,
			subject: formInfo.subject,
			source: window.location.href,
		};

		const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
		const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
		const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

		if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
			setError('Missing env variables');
			return;
		}

		await emailjs
			.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
				publicKey: PUBLIC_KEY,
			})
			.then(
				function () {
					setIsSuccess(true);

					setFormInfo({
						name: '',
						email: '',
						message: '',
						phone: '',
						subject: '',
					});

					setIsLoading(false);
				},
				function (error) {
					setError(error);
				}
			);
	};

	return (
		<section className='contact-me my-5' id='contact-me'>
			<div className='container my-5 '>
				<SectionTitle center title='Contact Me' subtitle='Thanks' />

				<div className='pt-5'>
					<div className='nice-shadow rounded-4 p-1 my-5'>
						<div className='row align-items-stretch'>
							<div className='col-md-5'>
								<div
									className='contact-information h-100'
									style={{
										backgroundImage: `url(${contactUsBG})`,
									}}
								>
									<h3 className='text-white mb-4'>Contact information</h3>

									<a className='row my-3 text-white align-items-center text-decoration-none' href='mailto:mohamedtaysser983@gmail.com'>
										<div className='col-auto'>
											<MdAlternateEmail className='fs-2' />
										</div>
										<div className='col'>
											<div className='opacity-75 text-small'>Email</div>
											<p className='mb-0'>mohamedtaysser983@gmail.com</p>
										</div>
									</a>

									<a className='row my-3 text-white align-items-center text-decoration-none' href='tel:+201015081861'>
										<div className='col-auto'>
											<BiPhoneCall className='fs-2' />
										</div>
										<div className='col'>
											<div className='opacity-75 text-small'>Phone</div>
											<p className='mb-0'>+201015081861</p>
										</div>
									</a>

									<div className='row my-3 text-white align-items-center'>
										<div className='col-auto'>
											<LuMapPin className='fs-2' />
										</div>
										<div className='col'>
											<div className='opacity-75 text-small'>Address</div>
											<p className='mb-0'>Egypt, Ad Daqahliyah, Markaz Meet Ghamr</p>
										</div>
									</div>

									<div className='row my-3 text-white align-items-center'>
										<div className='col-auto'>
											<LuSun className='fs-2' />
										</div>
										<div className='col'>
											<div className='opacity-75 text-small'>Working hours</div>
											<p className='mb-0'>8 a.m. - 10 p.m.</p>
										</div>
									</div>
								</div>
							</div>

							<div className='col-md-7'>
								<form onSubmit={onFormSubmit} className='mx-4 mb-3 h-100'>
									<h3 className='mb-4 mt-4'>Get in touch</h3>

									<div className='row'>
										<div className='col-md-6 my-3'>
											<input
												placeholder='Your name'
												name='name'
												required
												value={formInfo.name}
												type='text'
												className='form-control'
												onChange={onInputChange}
												aria-label='Your name'
											/>
										</div>

										<div className='col-md-6 my-3'>
											<input
												placeholder='Your email'
												name='email'
												type='email'
												value={formInfo.email}
												onChange={onInputChange}
												required
												className='form-control'
												aria-label='Your email'
											/>
										</div>

										<div className='col-md-6 my-3'>
											<input
												placeholder='Your subject'
												name='subject'
												type='text'
												value={formInfo.subject}
												onChange={onInputChange}
												required
												className='form-control'
												aria-label='Your subject'
											/>
										</div>

										<div className='col-md-6 my-3'>
											<input
												placeholder='Your phone'
												name='phone'
												type='tel'
												onChange={onInputChange}
												required
												value={formInfo.phone}
												className='form-control'
												aria-label='Your phone number'
											/>
										</div>

										<div className='col-12 my-3'>
											<textarea
												placeholder='Your message'
												name='message'
												required
												rows={3}
												value={formInfo.message}
												onChange={onInputChange}
												className='form-control'
												aria-label='Your message'
											/>
										</div>

										<div className='col-12 my-3'>
											{isSuccess && (
												<div
													className='alert alert-success d-flex gap-2 align-items-center'
													role='alert'
												>
													<IoMdCheckmark size={20} />
													<div>
														Thank you for your message, I will get back to you
														as soon as possible
													</div>
												</div>
											)}

											{error && (
												<div
													className='alert alert-error gap-2 d-flex align-items-center'
													role='alert'
												>
													<FiAlertTriangle size={20} />
													<div>{JSON.stringify(error)}</div>
												</div>
											)}
											<button
												className='btn btn-primary btn-lg'
												disabled={isLoading}
												type='submit'
											>
												{isLoading ? (
													<>
														<span
															className='spinner-border spinner-border-sm'
															aria-hidden='true'
														></span>
														<span role='status' className='mx-2'>
															Loading...
														</span>
													</>
												) : (
													<span>Send message</span>
												)}
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
