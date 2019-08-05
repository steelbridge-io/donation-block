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
				<div className="container">
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
		//const { attributes } = props;
		const { attributes: { title, imageUrl, imageAlt, body, title2='', body2, imageUrl2, imageAlt2 } } = props;
		const isEmpty = title2.length > 0 ? false : true;
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

		//const cardTwo = () => { (isEmpty) ? ({}) : ( <h3 className="card__title2"> {attributes.title2} </h3> ) }

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
				{ (isEmpty) ? ({}) : ( <div className="panel panel-default">
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

			</div>
		);
	},
} );
