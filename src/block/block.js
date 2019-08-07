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
		imageCap: {
			type: 'array',
			source: 'children',
			selector: '.img_cap'
		},
		headingDiv: {
			source: 'text',
			selector: '.heading_div'
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
		imageCap2: {
			type: 'array',
			source: 'children',
			selector: '.img_cap2'
		},
		headingDiv2: {
			source: 'text',
			selector: '.heading_div2'
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
		imageCap3: {
			type: 'array',
			source: 'children',
			selector: '.img_cap3'
		},
		headingDiv3: {
			source: 'text',
			selector: '.heading_div3'
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
		imageCap4: {
			type: 'array',
			source: 'children',
			selector: '.img_cap4'
		},
		headingDiv4: {
			source: 'text',
			selector: '.heading_div4'
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
		imageCap5: {
			type: 'array',
			source: 'children',
			selector: '.img_cap5'
		},
		headingDiv5: {
			source: 'text',
			selector: '.heading_div5'
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
		imageCap6: {
			type: 'array',
			source: 'children',
			selector: '.img_cap6'
		},
		headingDiv6: {
			source: 'text',
			selector: '.heading_div6'
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
		imageCap7: {
			type: 'array',
			source: 'children',
			selector: '.img_cap7'
		},
		headingDiv7: {
			source: 'text',
			selector: '.heading_div7'
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
		imageCap8: {
			type: 'array',
			source: 'children',
			selector: '.img_cap8'
		},
		headingDiv8: {
			source: 'text',
			selector: '.heading_div8'
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
		imageCap9: {
			type: 'array',
			source: 'children',
			selector: '.img_cap9'
		},
		headingDiv9: {
			source: 'text',
			selector: '.heading_div9'
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
		imageCap10: {
			type: 'array',
			source: 'children',
			selector: '.img_cap10'
		},
		headingDiv10: {
			source: 'text',
			selector: '.heading_div10'
		},
		title11: {
			source: 'text',
			selector: '.card__title11'
		},
		body11: {
			type: 'array',
			source: 'children',
			selector: '.card__body11'
		},
		imageAlt11: {
			attribute: 'alt',
			selector: '.card__image11'
		},
		imageUrl11: {
			attribute: 'src',
			selector: '.card__image11'
		},
		imageCap11: {
			type: 'array',
			source: 'children',
			selector: '.img_cap11'
		},
		headingDiv11: {
			source: 'text',
			selector: '.heading_div11'
		},
		title12: {
			source: 'text',
			selector: '.card__title12'
		},
		body12: {
			type: 'array',
			source: 'children',
			selector: '.card__body12'
		},
		imageAlt12: {
			attribute: 'alt',
			selector: '.card__image12'
		},
		imageUrl12: {
			attribute: 'src',
			selector: '.card__image12'
		},
		imageCap12: {
			type: 'array',
			source: 'children',
			selector: '.img_cap12'
		},
		headingDiv12: {
			source: 'text',
			selector: '.heading_div12'
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

		const getImageButtonEleven = (openEvent) => {
			if(attributes.imageUrl11) {
				return (
					<img
						src={ attributes.imageUrl11 }
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

		const getImageButtonTwelve = (openEvent) => {
			if(attributes.imageUrl12) {
				return (
					<img
						src={ attributes.imageUrl12 }
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
					<PlainText
						onChange={ content => setAttributes({ headingDiv: content }) }
						value={ attributes.headingDiv }
						placeholder="Optional Heading Divider"
						className="headingdivider"
					/>
					<MediaUpload
						onSelect={ media => { setAttributes({ imageAlt: media.alt, imageUrl: media.url }); } }
						type="image"
						value={ attributes.imageID }
						render={ ({ open }) => getImageButton(open) }
					/>
					<RichText
						onChange={ content => setAttributes({ imageCap: content }) }
						value={ attributes.imageCap }
						multiline="p"
						placeholder="Optional Image Caption"
					/>
					<PlainText
						onChange={ content => setAttributes({ title: content }) }
						value={ attributes.title }
						placeholder="Title &#35;1"
						className="heading"
					/>
					<RichText
						onChange={ content => setAttributes({ body: content }) }
						value={ attributes.body }
						multiline="p"
						placeholder="Your card text"
						className="card_text"
					/>
				</div>
				<div className="container containertwo">
					<PlainText
						onChange={ content => setAttributes({ headingDiv2: content }) }
						value={ attributes.headingDiv2 }
						placeholder="Optional Heading Divider"
						className="headingdivider2"
					/>
					<MediaUpload
						onSelect={ media => { setAttributes({ imageAlt2: media.alt, imageUrl2: media.url }); } }
						type="image"
						value={ attributes.imageID2 }
						render={ ({ open }) => getImageButtonTwo(open) }
					/>
					<RichText
						onChange={ content => setAttributes({ imageCap2: content }) }
						value={ attributes.imageCap2 }
						multiline="p"
						placeholder="Optional Image Caption"
					/>
					<PlainText
						onChange={ content => setAttributes({ title2: content }) }
						value={ attributes.title2 }
						placeholder="Title #2"
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
					<PlainText
						onChange={ content => setAttributes({ headingDiv3: content }) }
						value={ attributes.headingDiv3 }
						placeholder="Optional Heading Divider"
						className="headingdivider3"
					/>
					<MediaUpload
						onSelect={ media => { setAttributes({ imageAlt3: media.alt, imageUrl3: media.url }); } }
						type="image"
						value={ attributes.imageID3 }
						render={ ({ open }) => getImageButtonThree(open) }
					/>
					<RichText
						onChange={ content => setAttributes({ imageCap3: content }) }
						value={ attributes.imageCap3 }
						multiline="p"
						placeholder="Optional Image Caption"
					/>
					<PlainText
						onChange={ content => setAttributes({ title3: content }) }
						value={ attributes.title3 }
						placeholder="Title #3"
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
					<PlainText
						onChange={ content => setAttributes({ headingDiv4: content }) }
						value={ attributes.headingDiv4 }
						placeholder="Optional Heading Divider"
						className="headingdivider4"
					/>
					<MediaUpload
						onSelect={ media => { setAttributes({ imageAlt4: media.alt, imageUrl4: media.url }); } }
						type="image"
						value={ attributes.imageID4 }
						render={ ({ open }) => getImageButtonFour(open) }
					/>
					<RichText
						onChange={ content => setAttributes({ imageCap4: content }) }
						value={ attributes.imageCap4 }
						multiline="p"
						placeholder="Optional Image Caption"
					/>
					<PlainText
						onChange={ content => setAttributes({ title4: content }) }
						value={ attributes.title4 }
						placeholder="Title #4"
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
					<PlainText
						onChange={ content => setAttributes({ headingDiv5: content }) }
						value={ attributes.headingDiv5 }
						placeholder="Optional Heading Divider"
						className="headingdivider5"
					/>
					<MediaUpload
						onSelect={ media => { setAttributes({ imageAlt5: media.alt, imageUrl5: media.url }); } }
						type="image"
						value={ attributes.imageID5 }
						render={ ({ open }) => getImageButtonFive(open) }
					/>
					<RichText
						onChange={ content => setAttributes({ imageCap5: content }) }
						value={ attributes.imageCap5 }
						multiline="p"
						placeholder="Optional Image Caption"
					/>
					<PlainText
						onChange={ content => setAttributes({ title5: content }) }
						value={ attributes.title5 }
						placeholder="Title #5"
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
					<PlainText
						onChange={ content => setAttributes({ headingDiv6: content }) }
						value={ attributes.headingDiv6 }
						placeholder="Optional Heading Divider"
						className="headingdivider6"
					/>
					<MediaUpload
						onSelect={ media => { setAttributes({ imageAlt6: media.alt, imageUrl6: media.url }); } }
						type="image"
						value={ attributes.imageID6 }
						render={ ({ open }) => getImageButtonSix(open) }
					/>
					<RichText
						onChange={ content => setAttributes({ imageCap6: content }) }
						value={ attributes.imageCap6 }
						multiline="p"
						placeholder="Optional Image Caption"
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
					<PlainText
						onChange={ content => setAttributes({ headingDiv7: content }) }
						value={ attributes.headingDiv7 }
						placeholder="Optional Heading Divider"
						className="headingdivider7"
					/>
					<MediaUpload
						onSelect={ media => { setAttributes({ imageAlt7: media.alt, imageUrl7: media.url }); } }
						type="image"
						value={ attributes.imageID7 }
						render={ ({ open }) => getImageButtonSeven(open) }
					/>
					<RichText
						onChange={ content => setAttributes({ imageCap7: content }) }
						value={ attributes.imageCap7 }
						multiline="p"
						placeholder="Optional Image Caption"
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
					<PlainText
						onChange={ content => setAttributes({ headingDiv8: content }) }
						value={ attributes.headingDiv8 }
						placeholder="Optional Heading Divider"
						className="headingdivider8"
					/>
					<MediaUpload
						onSelect={ media => { setAttributes({ imageAlt8: media.alt, imageUrl8: media.url }); } }
						type="image"
						value={ attributes.imageID8 }
						render={ ({ open }) => getImageButtonEight(open) }
					/>
					<RichText
						onChange={ content => setAttributes({ imageCap8: content }) }
						value={ attributes.imageCap8 }
						multiline="p"
						placeholder="Optional Image Caption"
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
					<PlainText
						onChange={ content => setAttributes({ headingDiv9: content }) }
						value={ attributes.headingDiv9 }
						placeholder="Optional Heading Divider"
						className="headingdivider9"
					/>
					<MediaUpload
						onSelect={ media => { setAttributes({ imageAlt9: media.alt, imageUrl9: media.url }); } }
						type="image"
						value={ attributes.imageID9 }
						render={ ({ open }) => getImageButtonNine(open) }
					/>
					<RichText
						onChange={ content => setAttributes({ imageCap9: content }) }
						value={ attributes.imageCap9 }
						multiline="p"
						placeholder="Optional Image Caption"
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
					<PlainText
						onChange={ content => setAttributes({ headingDiv10: content }) }
						value={ attributes.headingDiv10 }
						placeholder="Optional Heading Divider"
						className="headingdivider10"
					/>
					<MediaUpload
						onSelect={ media => { setAttributes({ imageAlt10: media.alt, imageUrl10: media.url }); } }
						type="image"
						value={ attributes.imageID10 }
						render={ ({ open }) => getImageButtonTen(open) }
					/>
					<RichText
						onChange={ content => setAttributes({ imageCap10: content }) }
						value={ attributes.imageCap10 }
						multiline="p"
						placeholder="Optional Image Caption"
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
				<div className="container containereleven">
					<PlainText
						onChange={ content => setAttributes({ headingDiv11: content }) }
						value={ attributes.headingDiv11 }
						placeholder="Optional Heading Divider"
						className="headingdivider11"
					/>
					<MediaUpload
						onSelect={ media => { setAttributes({ imageAlt11: media.alt, imageUrl11: media.url }); } }
						type="image"
						value={ attributes.imageID11 }
						render={ ({ open }) => getImageButtonEleven(open) }
					/>
					<RichText
						onChange={ content => setAttributes({ imageCap11: content }) }
						value={ attributes.imageCap11 }
						multiline="p"
						placeholder="Optional Image Caption"
					/>
					<PlainText
						onChange={ content => setAttributes({ title11: content }) }
						value={ attributes.title11 }
						placeholder="Title #11"
						className="headingten"
					/>
					<RichText
						onChange={ content => setAttributes({ body11: content }) }
						value={ attributes.body11 }
						multiline="p"
						placeholder="Your card text"
					/>
				</div>
				<div className="container containertwelve">
					<PlainText
						onChange={ content => setAttributes({ headingDiv12: content }) }
						value={ attributes.headingDiv12 }
						placeholder="Optional Heading Divider"
						className="headingdivider12"
					/>
					<MediaUpload
						onSelect={ media => { setAttributes({ imageAlt12: media.alt, imageUrl12: media.url }); } }
						type="image"
						value={ attributes.imageID12 }
						render={ ({ open }) => getImageButtonTwelve(open) }
					/>
					<RichText
						onChange={ content => setAttributes({ imageCap12: content }) }
						value={ attributes.imageCap12 }
						multiline="p"
						placeholder="Optional Image Caption"
					/>
					<PlainText
						onChange={ content => setAttributes({ title12: content }) }
						value={ attributes.title12 }
						placeholder="Title #10"
						className="headingten"
					/>
					<RichText
						onChange={ content => setAttributes({ body12: content }) }
						value={ attributes.body12 }
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
			headingDiv='', title, imageUrl, imageAlt, body, imageCap,
			headingDiv2='', title2='', body2, imageUrl2, imageAlt2, imageCap2,
			headingDiv3='', title3='', body3, imageUrl3, imageAlt3, imageCap3,
			headingDiv4='', title4='', body4, imageUrl4, imageAlt4, imageCap4,
			headingDiv5='', title5='', body5, imageUrl5, imageAlt5, imageCap5,
			headingDiv6='', title6='', body6, imageUrl6, imageAlt6, imageCap6,
			headingDiv7='', title7='', body7, imageUrl7, imageAlt7, imageCap7,
			headingDiv8='', title8='', body8, imageUrl8, imageAlt8, imageCap8,
			headingDiv9='', title9='', body9, imageUrl9, imageAlt9, imageCap9,
			headingDiv10='', title10='', body10, imageUrl10, imageAlt10, imageCap10,
			headingDiv11='', title11='', body11, imageUrl11, imageAlt11, imageCap11,
			headingDiv12='', title12='', body12, imageUrl12, imageAlt12, imageCap12
		} } = props;

		const hdDivEmp = headingDiv.length > 0 ? false : true;
		const hdDivEmp2 = headingDiv2.length > 0 ? false : true;
		const hdDivEmp3 = headingDiv3.length > 0 ? false : true;
		const hdDivEmp4 = headingDiv4.length > 0 ? false : true;
		const hdDivEmp5 = headingDiv5.length > 0 ? false : true;
		const hdDivEmp6 = headingDiv6.length > 0 ? false : true;
		const hdDivEmp7 = headingDiv7.length > 0 ? false : true;
		const hdDivEmp8 = headingDiv8.length > 0 ? false : true;
		const hdDivEmp9 = headingDiv9.length > 0 ? false : true;
		const hdDivEmp10 = headingDiv10.length > 0 ? false : true;
		const hdDivEmp11 = headingDiv11.length > 0 ? false : true;
		const hdDivEmp12 = headingDiv12.length > 0 ? false : true;

		const isEmpty2 = title2.length > 0 ? false : true;
		const isEmpty3 = title3.length > 0 ? false : true;
		const isEmpty4 = title4.length > 0 ? false : true;
		const isEmpty5 = title5.length > 0 ? false : true;
		const isEmpty6 = title6.length > 0 ? false : true;
		const isEmpty7 = title7.length > 0 ? false : true;
		const isEmpty8 = title8.length > 0 ? false : true;
		const isEmpty9 = title9.length > 0 ? false : true;
		const isEmpty10 = title10.length > 0 ? false : true;
		const isEmpty11 = title11.length > 0 ? false : true;
		const isEmpty12 = title12.length > 0 ? false : true;

		const capEmpty	= imageCap.length > 0 ? false : true;
		const capEmpty2 = imageCap2.length > 0 ? false : true;
		const capEmpty3 = imageCap3.length > 0 ? false : true;
		const capEmpty4 = imageCap4.length > 0 ? false : true;
		const capEmpty5 = imageCap5.length > 0 ? false : true;
		const capEmpty6 = imageCap6.length > 0 ? false : true;
		const capEmpty7 = imageCap7.length > 0 ? false : true;
		const capEmpty8 = imageCap8.length > 0 ? false : true;
		const capEmpty9 = imageCap9.length > 0 ? false : true;
		const capEmpty10 = imageCap10.length > 0 ? false : true;
		const capEmpty11 = imageCap11.length > 0 ? false : true;
		const capEmpty12 = imageCap12.length > 0 ? false : true;

		const cardImage = (src, alt ) => {
				if(!src) return null;

				if(alt) {
					return (
						<img
							className="card__image img-responsive"
							src={ src }
							alt={ alt }
						/>
					);
				}
			return (
				<img
					className="card__image img-responsive"
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
						className="card__image2 img-responsive"
						src={ src }
						alt={ alt }
					/>
				);
			}
			return (
				<img
					className="card__image2 img-responsive"
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
						className="card__image3 img-responsive"
						src={ src }
						alt={ alt }
					/>
				);
			}
			return (
				<img
					className="card__image3 img-responsive"
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
						className="card__image4 img-responsive"
						src={ src }
						alt={ alt }
					/>
				);
			}
			return (
				<img
					className="card__image4 img-responsive"
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
						className="card__image5 img-responsive"
						src={ src }
						alt={ alt }
					/>
				);
			}
			return (
				<img
					className="card__image5 img-responsive"
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
						className="card__image6 img-responsive"
						src={ src }
						alt={ alt }
					/>
				);
			}
			return (
				<img
					className="card__image6 img-responsive"
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
						className="card__image7 img-responsive"
						src={ src }
						alt={ alt }
					/>
				);
			}
			return (
				<img
					className="card__image7 img-responsive"
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
						className="card__image8 img-responsive"
						src={ src }
						alt={ alt }
					/>
				);
			}
			return (
				<img
					className="card__image8 img-responsive"
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
						className="card__image9 img-responsive"
						src={ src }
						alt={ alt }
					/>
				);
			}
			return (
				<img
					className="card__image9 img-responsive"
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
						className="card__image10 img-responsive"
						src={ src }
						alt={ alt }
					/>
				);
			}
			return (
				<img
					className="card__image10 img-responsive"
					src={ src }
					alt=""
					aria-hidden="true"
				/>
			);
		};

		const cardImage11 = (src, alt) => {
			if(!src) return null;

			if(alt) {
				return (
					<img
						className="card__image11 img-responsive"
						src={ src }
						alt={ alt }
					/>
				);
			}
			return (
				<img
					className="card__image11 img-responsive"
					src={ src }
					alt=""
					aria-hidden="true"
				/>
			);
		};

		const cardImage12 = (src, alt) => {
			if(!src) return null;

			if(alt) {
				return (
					<img
						className="card__image12 img-responsive"
						src={ src }
						alt={ alt }
					/>
				);
			}
			return (
				<img
					className="card__image12 img-responsive"
					src={ src }
					alt=""
					aria-hidden="true"
				/>
			);
		};

		return (
			<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

				{ (hdDivEmp) ? ({}) : (
				<div className="heading_div">
				<h2>{ headingDiv }</h2>
				</div>
				)}
				<div className="panel panel-default">
					<div className="panel-heading rotate-click" role="tab" id="headingOne">
						<div className="panel-title">
							<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne"
							   aria-expanded="false" aria-controls="collapseOne">
								<h3 className="card__title">{ title }&nbsp;<i className="fas fa-2x fa-caret-right rotate"></i></h3>
							</a>
						</div>
					</div>
					<div id="collapseOne" className="panel-collapse collapse" role="tabpanel"
						 aria-labelledby="headingOne">
						<div className="panel-body">
							<div className="card blockimg">
								{ cardImage(imageUrl, imageAlt) }

								{ (capEmpty) ? ({}) : (
								<div className="img_cap">{ imageCap }</div>
								)}

								<div className="card__body">
									{ body }
								</div>
							</div>
						</div>
					</div>
				</div>

				{ (hdDivEmp2) ? ({}) : (
				<div className="heading_div2">
					<h2>{ headingDiv2 }</h2>
				</div>
				)}

				{ (isEmpty2) ? ({}) : (

					<div className="panel panel-default">
					<div className="panel-heading rotate-click" role="tab" id="headingTwo">
						<div className="panel-title">
							<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"
							   aria-expanded="false" aria-controls="collapseTwo">
								<h3 className="card__title2"> {title2}&nbsp;<i className="fas fa-2x fa-caret-right rotate"></i></h3>
							</a>
						</div>
					</div>
					<div id="collapseTwo" className="panel-collapse collapse" role="tabpanel"
						 aria-labelledby="headingTwo">
						<div className="panel-body">
							<div className="card blockimg">
								<div className="card__body2">
									{ body2 }
								</div>
								{ cardImage2(imageUrl2, imageAlt2) }
								{ (capEmpty2) ? ({}) : (
									<div className="img_cap2">{ imageCap2 }</div>
								)}
							</div>
						</div>
					</div>
				</div> ) }

				{ (hdDivEmp3) ? ({}) : (
					<div className="heading_div3">
						<h2>{ headingDiv3 }</h2>
					</div>
				)}

				{ (isEmpty3) ? ({}) : ( <div className="panel panel-default">
					<div className="panel-heading rotate-click" role="tab" id="headingThree">
						<div className="panel-title">
							<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree"
							   aria-expanded="false" aria-controls="collapseThree">
								<h3 className="card__title3">{title3}&nbsp;<i className="fas fa-2x fa-caret-right rotate"></i></h3>
							</a>
						</div>
					</div>
					<div id="collapseThree" className="panel-collapse collapse" role="tabpanel"
						 aria-labelledby="headingThree">
						<div className="panel-body">
							<div className="card blockimg">
								{ cardImage3(imageUrl3, imageAlt3) }
								{ (capEmpty3) ? ({}) : (
									<div className="img_cap3">{ imageCap3 }</div>
								)}
								<div className="card__body3">
									{ body3 }
								</div>
							</div>
						</div>
					</div>
				</div> ) }

				{ (hdDivEmp4) ? ({}) : (
					<div className="heading_div4">
						<h2>{ headingDiv4 }</h2>
					</div>
				)}

				{ (isEmpty4) ? ({}) : ( <div className="panel panel-default">
					<div className="panel-heading rotate-click" role="tab" id="headingFour">
						<div className="panel-title">
							<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour"
							   aria-expanded="false" aria-controls="collapseFour">
								<h3 className="card__title4">{title4}&nbsp;<i className="fas fa-2x fa-caret-right rotate"></i></h3>
							</a>
						</div>
					</div>
					<div id="collapseFour" className="panel-collapse collapse" role="tabpanel"
						 aria-labelledby="headingFour">
						<div className="panel-body">
							<div className="card blockimg">
								<div className="card__body4">
									{ body4 }
								</div>
								{ cardImage4(imageUrl4, imageAlt4) }
								{ (capEmpty4) ? ({}) : (
									<div className="img_cap4">{ imageCap4 }</div>
								)}
							</div>
						</div>
					</div>
				</div> ) }

				{ (hdDivEmp5) ? ({}) : (
					<div className="heading_div5">
						<h2>{ headingDiv5 }</h2>
					</div>
				)}

				{ (isEmpty5) ? ({}) : ( <div className="panel panel-default">
					<div className="panel-heading rotate-click" role="tab" id="headingFive">
						<div className="panel-title">
							<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive"
							   aria-expanded="false" aria-controls="collapseFive">
								<h3 className="card__title5">{title5}&nbsp;<i className="fas fa-2x fa-caret-right rotate"></i></h3>
							</a>
						</div>
					</div>
					<div id="collapseFive" className="panel-collapse collapse" role="tabpanel"
						 aria-labelledby="headingFive">
						<div className="panel-body">
							<div className="card blockimg">
								{ cardImage5(imageUrl5, imageAlt5) }
								{ (capEmpty5) ? ({}) : (
									<div className="img_cap5">{ imageCap5 }</div>
								)}
								<div className="card__body5">
									{ body5 }
								</div>
							</div>
						</div>
					</div>
				</div> ) }

				{ (hdDivEmp6) ? ({}) : (
					<div className="heading_div6">
						<h2>{ headingDiv6 }</h2>
					</div>
				)}

				{ (isEmpty6) ? ({}) : ( <div className="panel panel-default">
					<div className="panel-heading rotate-click" role="tab" id="headingSix">
						<div className="panel-title">
							<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix"
							   aria-expanded="false" aria-controls="collapseSix">
								<h3 className="card__title6">{title6}&nbsp;<i className="fas fa-2x fa-caret-right rotate"></i></h3>
							</a>
						</div>
					</div>
					<div id="collapseSix" className="panel-collapse collapse" role="tabpanel"
						 aria-labelledby="headingSix">
						<div className="panel-body">
							<div className="card blockimg">
								<div className="card__body6">
									{ body6 }
								</div>
								{ cardImage6(imageUrl6, imageAlt6) }
								{ (capEmpty6) ? ({}) : (
									<div className="img_cap6">{ imageCap6 }</div>
								)}
							</div>
						</div>
					</div>
				</div> ) }

				{ (hdDivEmp7) ? ({}) : (
					<div className="heading_div7">
						<h2>{ headingDiv7 }</h2>
					</div>
				)}

				{ (isEmpty7) ? ({}) : (<div className="panel panel-default">
					<div className="panel-heading rotate-click" role="tab" id="headingSeven">
						<div className="panel-title">
							<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven"
							   aria-expanded="false" aria-controls="collapseSeven">
								<h3 className="card__title7">{title7}&nbsp;<i className="fas fa-2x fa-caret-right rotate"></i></h3>
							</a>
						</div>
					</div>
					<div id="collapseSeven" className="panel-collapse collapse" role="tabpanel"
						 aria-labelledby="headingSeven">
						<div className="panel-body">
							<div className="card blockimg">
								{cardImage7(imageUrl7, imageAlt7)}
								{ (capEmpty7) ? ({}) : (
									<div className="img_cap7">{ imageCap7 }</div>
								)}
								<div className="card__body7">
									{body7}
								</div>
							</div>
						</div>
					</div>
				</div>) }

				{ (hdDivEmp8) ? ({}) : (
					<div className="heading_div8">
						<h2>{ headingDiv8 }</h2>
					</div>
				)}

				{ (isEmpty8) ? ({}) : (<div className="panel panel-default">
					<div className="panel-heading rotate-click" role="tab" id="headingEight">
						<div className="panel-title">
							<a role="button" data-toggle="collapse" data-parent="#accordion"
							   href="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
								<h3 className="card__title8">{title8}&nbsp;<i className="fas fa-2x fa-caret-right rotate"></i></h3>
							</a>
						</div>
					</div>
					<div id="collapseEight" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingEight">
						<div className="panel-body">
							<div className="card blockimg">
								<div className="card__body8">
									{body8}
								</div>
								{cardImage8(imageUrl8, imageAlt8)}
								{ (capEmpty8) ? ({}) : (
									<div className="img_cap8">{ imageCap8 }</div>
								)}
							</div>
						</div>
					</div>
				</div>) }

				{ (hdDivEmp9) ? ({}) : (
					<div className="heading_div9">
						<h2>{ headingDiv9 }</h2>
					</div>
				)}

				{ (isEmpty9) ? ({}) : (<div className="panel panel-default">
					<div className="panel-heading rotate-click" role="tab" id="headingNine">
						<div className="panel-title">
							<a role="button" data-toggle="collapse" data-parent="#accordion"
							   href="#collapseNine"
							   aria-expanded="false" aria-controls="collapseNine">
								<h3 className="card__title9">{title9}&nbsp;<i className="fas fa-2x fa-caret-right rotate"></i></h3>
							</a>
						</div>
					</div>
					<div id="collapseNine" className="panel-collapse collapse" role="tabpanel"
						 aria-labelledby="headingNine">
						<div className="panel-body">
							<div className="card blockimg">
								{cardImage9(imageUrl9, imageAlt9)}
								{ (capEmpty9) ? ({}) : (
									<div className="img_cap9">{ imageCap9 }</div>
								)}
								<div className="card__body9">
									{body9}
								</div>
							</div>
						</div>
					</div>
				</div>) }

				{ (hdDivEmp10) ? ({}) : (
					<div className="heading_div10">
						<h2>{ headingDiv10 }</h2>
					</div>
				)}

				{(isEmpty10) ? ({}) : (<div className="panel panel-default">
					<div className="panel-heading rotate-click" role="tab" id="headingTen">
						<div className="panel-title">
							<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTen"
							   aria-expanded="false" aria-controls="collapseTen">
								<h3 className="card__title10">{title10}&nbsp;<i className="fas fa-2x fa-caret-right rotate"></i> </h3>
							</a>
						</div>
					</div>
					<div id="collapseTen" className="panel-collapse collapse" role="tabpanel"
						 aria-labelledby="headingTen">
						<div className="panel-body">
							<div className="card blockimg">
								<div className="card__body10">
									{body10}
								</div>
								{cardImage10(imageUrl10, imageAlt10)}
								{ (capEmpty10) ? ({}) : (
									<div className="img_cap10">{ imageCap10 }</div>
								)}
							</div>
						</div>
					</div>
				</div>)}

				{ (hdDivEmp11) ? ({}) : (
					<div className="heading_div11">
						<h2>{ headingDiv11 }</h2>
					</div>
				)}

				{(isEmpty11) ? ({}) : (<div className="panel panel-default">
					<div className="panel-heading rotate-click" role="tab" id="headingEleven">
						<div className="panel-title">
							<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven"
							   aria-expanded="false" aria-controls="collapseEleven">
								<h3 className="card__title11">{title11}&nbsp;<i className="fas fa-2x fa-caret-right rotate"></i> </h3>
							</a>
						</div>
					</div>
					<div id="collapseEleven" className="panel-collapse collapse" role="tabpanel"
						 aria-labelledby="headingEleven">
						<div className="panel-body">
							<div className="card blockimg">
								<div className="card__body11">
									{body11}
								</div>
								{cardImage10(imageUrl11, imageAlt11)}
								{ (capEmpty11) ? ({}) : (
									<div className="img_cap11">{ imageCap11 }</div>
								)}
							</div>
						</div>
					</div>
				</div>)}

				{ (hdDivEmp12) ? ({}) : (
					<div className="heading_div12">
						<h2>{ headingDiv12 }</h2>
					</div>
				)}

				{(isEmpty12) ? ({}) : (<div className="panel panel-default">
					<div className="panel-heading rotate-click" role="tab" id="headingTwelve">
						<div className="panel-title">
							<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwelve"
							   aria-expanded="false" aria-controls="collapseTwelve">
								<h3 className="card__title12">{title12}&nbsp;<i className="fas fa-2x fa-caret-right rotate"></i> </h3>
							</a>
						</div>
					</div>
					<div id="collapseTwelve" className="panel-collapse collapse" role="tabpanel"
						 aria-labelledby="headingTwelve">
						<div className="panel-body">
							<div className="card blockimg">
								<div className="card__body12">
									{body12}
								</div>
								{cardImage10(imageUrl12, imageAlt12)}
								{ (capEmpty12) ? ({}) : (
									<div className="img_cap12">{ imageCap12 }</div>
								)}
							</div>
						</div>
					</div>
				</div>)}
			</div>
		);
	}
});
