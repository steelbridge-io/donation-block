/**
 * BLOCK: donation-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { RichText, MediaUpload, PlainText } = wp.editor;
const { registerBlockType } = wp.blocks;
const { Button } = wp.components;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-donation-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'donation-block - CGB Block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'donation-block — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],
	attributes: {
		title: {
			source: 'text',
			selector: '.card__title'
		},
		body: {
			type: 'array',
			source: 'children',
			selector: '.card__body'
		},
		imageAlt: {
			attribute: 'alt',
			selector: '.card__image'
		},
		imageUrl: {
			attribute: 'src',
			selector: '.card__image'
		},
		title2: {
			source: 'text',
			selector: '.card__title2'
		},
		body2: {
			type: 'array',
			source: 'children',
			selector: '.card__body2'
		},
		imageAlt2: {
			attribute: 'alt',
			selector: '.card__image2'
		},
		imageUrl2: {
			attribute: 'src',
			selector: '.card__image2'
		},
		title3: {
			source: 'text',
			selector: '.card__title3'
		},
		body3: {
			type: 'array',
			source: 'children',
			selector: '.card__body3'
		},
		imageAlt3: {
			attribute: 'alt',
			selector: '.card__image3'
		},
		imageUrl3: {
			attribute: 'src',
			selector: '.card__image3'
		},
		title4: {
			source: 'text',
			selector: '.card__title4'
		},
		body4: {
			type: 'array',
			source: 'children',
			selector: '.card__body4'
		},
		imageAlt4: {
			attribute: 'alt',
			selector: '.card__image4'
		},
		imageUrl4: {
			attribute: 'src',
			selector: '.card__image4'
		},
		title5: {
			source: 'text',
			selector: '.card__title5'
		},
		body5: {
			type: 'array',
			source: 'children',
			selector: '.card__body5'
		},
		imageAlt5: {
			attribute: 'alt',
			selector: '.card__image5'
		},
		imageUrl5: {
			attribute: 'src',
			selector: '.card__image5'
		},
		title6: {
			source: 'text',
			selector: '.card__title6'
		},
		body6: {
			type: 'array',
			source: 'children',
			selector: '.card__body6'
		},
		imageAlt6: {
			attribute: 'alt',
			selector: '.card__image6'
		},
		imageUrl6: {
			attribute: 'src',
			selector: '.card__image6'
		},
		title7: {
			source: 'text',
			selector: '.card__title7'
		},
		body7: {
			type: 'array',
			source: 'children',
			selector: '.card__body7'
		},
		imageAlt7: {
			attribute: 'alt',
			selector: '.card__image7'
		},
		imageUrl7: {
			attribute: 'src',
			selector: '.card__image7'
		},
		title8: {
			source: 'text',
			selector: '.card__title8'
		},
		body8: {
			type: 'array',
			source: 'children',
			selector: '.card__body8'
		},
		imageAlt8: {
			attribute: 'alt',
			selector: '.card__image8'
		},
		imageUrl8: {
			attribute: 'src',
			selector: '.card__image8'
		},
		title9: {
			source: 'text',
			selector: '.card__title9'
		},
		body9: {
			type: 'array',
			source: 'children',
			selector: '.card__body9'
		},
		imageAlt9: {
			attribute: 'alt',
			selector: '.card__image9'
		},
		imageUrl9: {
			attribute: 'src',
			selector: '.card__image9'
		},
		title10: {
			source: 'text',
			selector: '.card__title10'
		},
		body10: {
			type: 'array',
			source: 'children',
			selector: '.card__body10'
		},
		imageAlt10: {
			attribute: 'alt',
			selector: '.card__image10'
		},
		imageUrl10: {
			attribute: 'src',
			selector: '.card__image10'
		},
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function( props ) {
		const { attributes, className, setAttributes } = props;

		const getImageButton = (openEvent) => {
			if(attributes.imageUrl) {
				return (
					<img
						src={ attributes.imageUrl }
						onClick={ openEvent }
						className="image"
					/>
				);
			}
			else {
				return (
					<div className="button-container">
						<Button
							onClick={ openEvent }
							className="button button-large"
						>
							Pick an image
						</Button>
					</div>
				);
			}
		};

		const getImageButtonTwo = (openEvent) => {
			if(attributes.imageUrl2) {
				return (
					<img
						src={ attributes.imageUrl2 }
						onClick={ openEvent }
						className="image"
					/>
				);
			}
			else {
				return (
					<div className="button-container">
						<Button
							onClick={ openEvent }
							className="button button-large"
						>
							Pick an image
						</Button>
					</div>
				);
			}
		};

		const getImageButtonThree = (openEvent) => {
			if(attributes.imageUrl3) {
				return (
					<img
						src={ attributes.imageUrl3 }
						onClick={ openEvent }
						className="image"
					/>
				);
			}
			else {
				return (
					<div className="button-container">
						<Button
							onClick={ openEvent }
							className="button button-large"
						>
							Pick an image
						</Button>
					</div>
				);
			}
		};

		const getImageButtonFour = (openEvent) => {
			if(attributes.imageUrl4) {
				return (
					<img
						src={ attributes.imageUrl4 }
						onClick={ openEvent }
						className="image"
					/>
				);
			}
			else {
				return (
					<div className="button-container">
						<Button
							onClick={ openEvent }
							className="button button-large"
						>
							Pick an image
						</Button>
					</div>
				);
			}
		};

		const getImageButtonFive = (openEvent) => {
			if(attributes.imageUrl5) {
				return (
					<img
						src={ attributes.imageUrl5 }
						onClick={ openEvent }
						className="image"
					/>
				);
			}
			else {
				return (
					<div className="button-container">
						<Button
							onClick={ openEvent }
							className="button button-large"
						>
							Pick an image
						</Button>
					</div>
				);
			}
		};

		const getImageButtonSix = (openEvent) => {
			if(attributes.imageUrl6) {
				return (
					<img
						src={ attributes.imageUrl6 }
						onClick={ openEvent }
						className="image"
					/>
				);
			}
			else {
				return (
					<div className="button-container">
						<Button
							onClick={ openEvent }
							className="button button-large"
						>
							Pick an image
						</Button>
					</div>
				);
			}
		};

		const getImageButtonSeven = (openEvent) => {
			if(attributes.imageUrl7) {
				return (
					<img
						src={ attributes.imageUrl7 }
						onClick={ openEvent }
						className="image"
					/>
				);
			}
			else {
				return (
					<div className="button-container">
						<Button
							onClick={ openEvent }
							className="button button-large"
						>
							Pick an image
						</Button>
					</div>
				);
			}
		};

		const getImageButtonEight = (openEvent) => {
			if(attributes.imageUrl8) {
				return (
					<img
						src={ attributes.imageUrl8 }
						onClick={ openEvent }
						className="image"
					/>
				);
			}
			else {
				return (
					<div className="button-container">
						<Button
							onClick={ openEvent }
							className="button button-large"
						>
							Pick an image
						</Button>
					</div>
				);
			}
		};

		const getImageButtonNine = (openEvent) => {
			if(attributes.imageUrl9) {
				return (
					<img
						src={ attributes.imageUrl9 }
						onClick={ openEvent }
						className="image"
					/>
				);
			}
			else {
				return (
					<div className="button-container">
						<Button
							onClick={ openEvent }
							className="button button-large"
						>
							Pick an image
						</Button>
					</div>
				);
			}
		};

		const getImageButtonTen = (openEvent) => {
			if(attributes.imageUrl10) {
				return (
					<img
						src={ attributes.imageUrl10 }
						onClick={ openEvent }
						className="image"
					/>
				);
			}
			else {
				return (
					<div className="button-container">
						<Button
							onClick={ openEvent }
							className="button button-large"
						>
							Pick an image
						</Button>
					</div>
				);
			}
		};

		return (
			<div className={ props.className }>
				<div className="container">
					<MediaUpload
						onSelect={ media => { setAttributes({ imageAlt: media.alt, imageUrl: media.url }); } }
						type="image"
						value={ attributes.imageID }
						render={ ({ open }) => getImageButton(open) }
					/>
					<PlainText
						onChange={ content => setAttributes({ title: content }) }
						value={ attributes.title }
						placeholder="Your card title"
						className="heading"
					/>
					<RichText
						onChange={ content => setAttributes({ body: content }) }
						value={ attributes.body }
						multiline="p"
						placeholder="Your card text"
					/>
				</div>
				<div className="container containertwo">
					<MediaUpload
						onSelect={ media => { setAttributes({ imageAlt2: media.alt, imageUrl2: media.url }); } }
						type="image"
						value={ attributes.imageID2 }
						render={ ({ open }) => getImageButtonTwo(open) }
					/>
					<PlainText
						onChange={ content => setAttributes({ title2: content }) }
						value={ attributes.title2 }
						placeholder="Title 2"
						className="headingtwo"
					/>
					<RichText
						onChange={ content => setAttributes({ body2: content }) }
						value={ attributes.body2 }
						multiline="p"
						placeholder="Your card text"
					/>
				</div>
				<div className="container containerthree">
					<MediaUpload
						onSelect={ media => { setAttributes({ imageAlt3: media.alt, imageUrl3: media.url }); } }
						type="image"
						value={ attributes.imageID3 }
						render={ ({ open }) => getImageButtonThree(open) }
					/>
					<PlainText
						onChange={ content => setAttributes({ title3: content }) }
						value={ attributes.title3 }
						placeholder="Title 3"
						className="headingthree"
					/>
					<RichText
						onChange={ content => setAttributes({ body3: content }) }
						value={ attributes.body3 }
						multiline="p"
						placeholder="Your card text"
					/>
				</div>
				<div className="container containerfour">
					<MediaUpload
						onSelect={ media => { setAttributes({ imageAlt4: media.alt, imageUrl4: media.url }); } }
						type="image"
						value={ attributes.imageID4 }
						render={ ({ open }) => getImageButtonFour(open) }
					/>
					<PlainText
						onChange={ content => setAttributes({ title4: content }) }
						value={ attributes.title4 }
						placeholder="Title 4"
						className="headingfour"
					/>
					<RichText
						onChange={ content => setAttributes({ body4: content }) }
						value={ attributes.body4 }
						multiline="p"
						placeholder="Your card text"
					/>
				</div>
				<div className="container containerfive">
					<MediaUpload
						onSelect={ media => { setAttributes({ imageAlt5: media.alt, imageUrl5: media.url }); } }
						type="image"
						value={ attributes.imageID5 }
						render={ ({ open }) => getImageButtonFive(open) }
					/>
					<PlainText
						onChange={ content => setAttributes({ title5: content }) }
						value={ attributes.title5 }
						placeholder="Title 5"
						className="headingfive"
					/>
					<RichText
						onChange={ content => setAttributes({ body5: content }) }
						value={ attributes.body5 }
						multiline="p"
						placeholder="Your card text"
					/>
				</div>
				<div className="container containersix">
					<MediaUpload
						onSelect={ media => { setAttributes({ imageAlt6: media.alt, imageUrl6: media.url }); } }
						type="image"
						value={ attributes.imageID6 }
						render={ ({ open }) => getImageButtonSix(open) }
					/>
					<PlainText
						onChange={ content => setAttributes({ title6: content }) }
						value={ attributes.title6 }
						placeholder="Title #6"
						className="headingsix"
					/>
					<RichText
						onChange={ content => setAttributes({ body6: content }) }
						value={ attributes.body6 }
						multiline="p"
						placeholder="Your card text"
					/>
				</div>
				<div className="container containerseven">
					<MediaUpload
						onSelect={ media => { setAttributes({ imageAlt7: media.alt, imageUrl7: media.url }); } }
						type="image"
						value={ attributes.imageID7 }
						render={ ({ open }) => getImageButtonSeven(open) }
					/>
					<PlainText
						onChange={ content => setAttributes({ title7: content }) }
						value={ attributes.title7 }
						placeholder="Title #7"
						className="headingseven"
					/>
					<RichText
						onChange={ content => setAttributes({ body7: content }) }
						value={ attributes.body7 }
						multiline="p"
						placeholder="Your card text"
					/>
				</div>
				<div className="container containereight">
					<MediaUpload
						onSelect={ media => { setAttributes({ imageAlt8: media.alt, imageUrl8: media.url }); } }
						type="image"
						value={ attributes.imageID8 }
						render={ ({ open }) => getImageButtonEight(open) }
					/>
					<PlainText
						onChange={ content => setAttributes({ title8: content }) }
						value={ attributes.title8 }
						placeholder="Title #8"
						className="headingeight"
					/>
					<RichText
						onChange={ content => setAttributes({ body8: content }) }
						value={ attributes.body8 }
						multiline="p"
						placeholder="Your card text"
					/>
				</div>
				<div className="container containernine">
					<MediaUpload
						onSelect={ media => { setAttributes({ imageAlt9: media.alt, imageUrl9: media.url }); } }
						type="image"
						value={ attributes.imageID9 }
						render={ ({ open }) => getImageButtonNine(open) }
					/>
					<PlainText
						onChange={ content => setAttributes({ title9: content }) }
						value={ attributes.title9 }
						placeholder="Title #9"
						className="headingnine"
					/>
					<RichText
						onChange={ content => setAttributes({ body9: content }) }
						value={ attributes.body9 }
						multiline="p"
						placeholder="Your card text"
					/>
				</div>
				<div className="container containerten">
					<MediaUpload
						onSelect={ media => { setAttributes({ imageAlt10: media.alt, imageUrl10: media.url }); } }
						type="image"
						value={ attributes.imageID10 }
						render={ ({ open }) => getImageButtonTen(open) }
					/>
					<PlainText
						onChange={ content => setAttributes({ title10: content }) }
						value={ attributes.title10 }
						placeholder="Title #10"
						className="headingten"
					/>
					<RichText
						onChange={ content => setAttributes({ body10: content }) }
						value={ attributes.body10 }
						multiline="p"
						placeholder="Your card text"
					/>
				</div>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( props ) {

		const { attributes: {
			title, imageUrl, imageAlt, body,
			title2='', body2, imageUrl2, imageAlt2,
			title3='', body3, imageUrl3, imageAlt3,
			title4='', body4, imageUrl4, imageAlt4,
			title5='', body5, imageUrl5, imageAlt5,
			title6='', body6, imageUrl6, imageAlt6,
			title7='', body7, imageUrl7, imageAlt7,
			title8='', body8, imageUrl8, imageAlt8,
			title9='', body9, imageUrl9, imageAlt9,
			title10='', body10, imageUrl10, imageAlt10
		} } = props;

		const isEmpty2 = title2.length > 0 ? false : true;
		const isEmpty3 = title3.length > 0 ? false : true;
		const isEmpty4 = title4.length > 0 ? false : true;
		const isEmpty5 = title5.length > 0 ? false : true;
		const isEmpty6 = title6.length > 0 ? false : true;
		const isEmpty7 = title7.length > 0 ? false : true;
		const isEmpty8 = title8.length > 0 ? false : true;
		const isEmpty9 = title9.length > 0 ? false : true;
		const isEmpty10 = title10.length > 0 ? false : true;

		const cardImage = (src, alt) => {
				if(!src) return null;

				if(alt) {
					return (
						<img
							className="card__image"
							src={ src }
							alt={ alt }
						/>
					);
				}
			return (
				<img
					className="card__image"
					src={ src }
					alt=""
					aria-hidden="true"
				/>
			);
		};

		const cardImage2 = (src, alt) => {
			if(!src) return null;

			if(alt) {
				return (
					<img
						className="card__image2"
						src={ src }
						alt={ alt }
					/>
				);
			}
			return (
				<img
					className="card__image2"
					src={ src }
					alt=""
					aria-hidden="true"
				/>
			);
		};

		const cardImage3 = (src, alt) => {
			if(!src) return null;

			if(alt) {
				return (
					<img
						className="card__image3"
						src={ src }
						alt={ alt }
					/>
				);
			}
			return (
				<img
					className="card__image3"
					src={ src }
					alt=""
					aria-hidden="true"
				/>
			);
		};

		const cardImage4 = (src, alt) => {
			if(!src) return null;

			if(alt) {
				return (
					<img
						className="card__image4"
						src={ src }
						alt={ alt }
					/>
				);
			}
			return (
				<img
					className="card__image4"
					src={ src }
					alt=""
					aria-hidden="true"
				/>
			);
		};

		const cardImage5 = (src, alt) => {
			if(!src) return null;

			if(alt) {
				return (
					<img
						className="card__image5"
						src={ src }
						alt={ alt }
					/>
				);
			}
			return (
				<img
					className="card__image5"
					src={ src }
					alt=""
					aria-hidden="true"
				/>
			);
		};

		const cardImage6 = (src, alt) => {
			if(!src) return null;

			if(alt) {
				return (
					<img
						className="card__image6"
						src={ src }
						alt={ alt }
					/>
				);
			}
			return (
				<img
					className="card__image6"
					src={ src }
					alt=""
					aria-hidden="true"
				/>
			);
		};

		const cardImage7 = (src, alt) => {
			if(!src) return null;

			if(alt) {
				return (
					<img
						className="card__image7"
						src={ src }
						alt={ alt }
					/>
				);
			}
			return (
				<img
					className="card__image7"
					src={ src }
					alt=""
					aria-hidden="true"
				/>
			);
		};

		const cardImage8 = (src, alt) => {
			if(!src) return null;

			if(alt) {
				return (
					<img
						className="card__image8"
						src={ src }
						alt={ alt }
					/>
				);
			}
			return (
				<img
					className="card__image8"
					src={ src }
					alt=""
					aria-hidden="true"
				/>
			);
		};

		const cardImage9 = (src, alt) => {
			if(!src) return null;

			if(alt) {
				return (
					<img
						className="card__image9"
						src={ src }
						alt={ alt }
					/>
				);
			}
			return (
				<img
					className="card__image9"
					src={ src }
					alt=""
					aria-hidden="true"
				/>
			);
		};

		const cardImage10 = (src, alt) => {
			if(!src) return null;

			if(alt) {
				return (
					<img
						className="card__image10"
						src={ src }
						alt={ alt }
					/>
				);
			}
			return (
				<img
					className="card__image10"
					src={ src }
					alt=""
					aria-hidden="true"
				/>
			);
		};

		return (
			<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
				<div className="panel panel-default">
					<div className="panel-heading" role="tab" id="headingOne">
						<h4 className="panel-title">
							<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne"
							   aria-expanded="true" aria-controls="collapseOne">
								<h3 className="card__title">{ title }</h3>
							</a>
						</h4>
					</div>
					<div id="collapseOne" className="panel-collapse collapse in" role="tabpanel"
						 aria-labelledby="headingOne">
						<div className="panel-body">
							<div className="card">
							{ cardImage(imageUrl, imageAlt) }
							<div className="card__body">
								{ body }
							</div>
							</div>
						</div>
					</div>
				</div>

				{ (isEmpty2) ? ({}) : ( <div className="panel panel-default">
					<div className="panel-heading" role="tab" id="headingTwo">
						<h4 className="panel-title">
							<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"
							   aria-expanded="false" aria-controls="collapseTwo">
								<h3 className="card__title2"> {title2} </h3>
							</a>
						</h4>
					</div>
					<div id="collapseTwo" className="panel-collapse collapse" role="tabpanel"
						 aria-labelledby="headingTwo">
						<div className="panel-body">
							<div className="card">
								{ cardImage2(imageUrl2, imageAlt2) }
								<div className="card__body2">
									{ body2 }
								</div>
							</div>
						</div>
					</div>
				</div> ) }

				{ (isEmpty3) ? ({}) : ( <div className="panel panel-default">
					<div className="panel-heading" role="tab" id="headingThree">
						<h4 className="panel-title">
							<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree"
							   aria-expanded="false" aria-controls="collapseThree">
								<h3 className="card__title3"> {title3} </h3>
							</a>
						</h4>
					</div>
					<div id="collapseThree" className="panel-collapse collapse" role="tabpanel"
						 aria-labelledby="headingThree">
						<div className="panel-body">
							<div className="card">
								{ cardImage3(imageUrl3, imageAlt3) }
								<div className="card__body3">
									{ body3 }
								</div>
							</div>
						</div>
					</div>
				</div> ) }

				{ (isEmpty4) ? ({}) : ( <div className="panel panel-default">
					<div className="panel-heading" role="tab" id="headingFour">
						<h4 className="panel-title">
							<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour"
							   aria-expanded="false" aria-controls="collapseFour">
								<h3 className="card__title4"> {title4} </h3>
							</a>
						</h4>
					</div>
					<div id="collapseFour" className="panel-collapse collapse" role="tabpanel"
						 aria-labelledby="headingFour">
						<div className="panel-body">
							<div className="card">
								{ cardImage4(imageUrl4, imageAlt4) }
								<div className="card__body4">
									{ body4 }
								</div>
							</div>
						</div>
					</div>
				</div> ) }

				{ (isEmpty5) ? ({}) : ( <div className="panel panel-default">
					<div className="panel-heading" role="tab" id="headingFive">
						<h4 className="panel-title">
							<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive"
							   aria-expanded="false" aria-controls="collapseFive">
								<h3 className="card__title5"> {title5} </h3>
							</a>
						</h4>
					</div>
					<div id="collapseFive" className="panel-collapse collapse" role="tabpanel"
						 aria-labelledby="headingFive">
						<div className="panel-body">
							<div className="card">
								{ cardImage5(imageUrl5, imageAlt5) }
								<div className="card__body5">
									{ body5 }
								</div>
							</div>
						</div>
					</div>
				</div> ) }

				{ (isEmpty6) ? ({}) : ( <div className="panel panel-default">
					<div className="panel-heading" role="tab" id="headingSix">
						<h4 className="panel-title">
							<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix"
							   aria-expanded="false" aria-controls="collapseSix">
								<h3 className="card__title6"> {title6} </h3>
							</a>
						</h4>
					</div>
					<div id="collapseSix" className="panel-collapse collapse" role="tabpanel"
						 aria-labelledby="headingSix">
						<div className="panel-body">
							<div className="card">
								{ cardImage6(imageUrl6, imageAlt6) }
								<div className="card__body6">
									{ body6 }
								</div>
							</div>
						</div>
					</div>
				</div> ) }

				{ (isEmpty7) ? ({}) : ( <div className="panel panel-default">
					<div className="panel-heading" role="tab" id="headingSeven">
						<h4 className="panel-title">
							<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven"
							   aria-expanded="false" aria-controls="collapseSeven">
								<h3 className="card__title7"> {title7} </h3>
							</a>
						</h4>
					</div>
					<div id="collapseSeven" className="panel-collapse collapse" role="tabpanel"
						 aria-labelledby="headingSeven">
						<div className="panel-body">
							<div className="card">
								{ cardImage7(imageUrl7, imageAlt7) }
								<div className="card__body7">
									{ body7 }
								</div>
							</div>
						</div>
					</div>
				</div> ) }

				{ (isEmpty8) ? ({}) : ( <div className="panel panel-default">
					<div className="panel-heading" role="tab" id="headingEight">
						<h4 className="panel-title">
							<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseEight"
							   aria-expanded="false" aria-controls="collapseEight">
								<h3 className="card__title8"> {title8} </h3>
							</a>
						</h4>
					</div>
					<div id="collapseEight" className="panel-collapse collapse" role="tabpanel"
						 aria-labelledby="headingEight">
						<div className="panel-body">
							<div className="card">
								{ cardImage8(imageUrl8, imageAlt8) }
								<div className="card__body8">
									{ body8 }
								</div>
							</div>
						</div>
					</div>
				</div> ) }

				{ (isEmpty9) ? ({}) : ( <div className="panel panel-default">
					<div className="panel-heading" role="tab" id="headingNine">
						<h4 className="panel-title">
							<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseNine"
							   aria-expanded="false" aria-controls="collapseNine">
								<h3 className="card__title9"> {title9} </h3>
							</a>
						</h4>
					</div>
					<div id="collapseNine" className="panel-collapse collapse" role="tabpanel"
						 aria-labelledby="headingNine">
						<div className="panel-body">
							<div className="card">
								{ cardImage9(imageUrl9, imageAlt9) }
								<div className="card__body9">
									{ body9 }
								</div>
							</div>
						</div>
					</div>
				</div> ) }

				{ (isEmpty10) ? ({}) : ( <div className="panel panel-default">
					<div className="panel-heading" role="tab" id="headingTen">
						<h4 className="panel-title">
							<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTen"
							   aria-expanded="false" aria-controls="collapseTen">
								<h3 className="card__title10"> {title10} </h3>
							</a>
						</h4>
					</div>
					<div id="collapseTen" className="panel-collapse collapse" role="tabpanel"
						 aria-labelledby="headingTen">
						<div className="panel-body">
							<div className="card">
								{ cardImage10(imageUrl10, imageAlt10) }
								<div className="card__body10">
									{ body10 }
								</div>
							</div>
						</div>
					</div>
				</div> ) }

			</div>
		);
	},
} );
