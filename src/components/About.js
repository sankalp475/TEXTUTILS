import React from 'react'
import './css/about.css'

const About_button = {
	color: '#20c997',
	background: '#20c997',
	border: '2px solid #20c997',
	padding: '5px 13px',
	borderRadius: '5px',
	textTransform: 'uppercase',
	marginBottom: '10px',
	marginTop: '10px',
	marginLeft: '10px',
	marginRight: '10px'
}
function About(props) {

	return (
		<div className="my-5 ">
			<h1 className="my-3">ABOUT US</h1>
			<div className="accordion shadow-soft " id="accordionExample">
				<div className="accordion-item">
					<h2 className="accordion-header " id="headingOne">
						<button className={`accordion-button bg-${(props.ThemeMode)} text-${(props.ThemeMode === 'light')? 'dark': 'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
							Accordion Item #1
						</button>
					</h2>
					<div id="collapseOne" className="accordion-collapse collapsed" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
						<div className={`accordion-body bg-${(props.ThemeMode)} text-${(props.ThemeMode === 'light')? 'dark': 'light'}`}>
							<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as
							well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
							<code>.accordion-body</code>, though the transition does limit overflow.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingTwo">
						<button className={`accordion-button collapsed bg-${(props.ThemeMode)} text-${(props.ThemeMode === 'light')? 'dark': 'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
							Accordion Item #2
						</button>
					</h2>
					<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
						<div className={`accordion-body bg-${(props.ThemeMode)} text-${(props.ThemeMode === 'light')? 'dark': 'light'}`}>
							<strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as
							well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
							<code>.accordion-body</code>, though the transition does limit overflow.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingThree">
						<button className={`accordion-button collapsed bg-${(props.ThemeMode)} text-${(props.ThemeMode === 'light')? 'dark': 'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
							Accordion Item #3
						</button>
					</h2>
					<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
						<div className={`accordion-body bg-${(props.ThemeMode)} text-${(props.ThemeMode === 'light')? 'dark': 'light'}`}>
							<strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as
							well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
							<code>.accordion-body</code>, though the transition does limit overflow.
						</div>
					</div>
				</div>
			</div>
			<button className={`my-3 bg-${(props.Mode === 'light')?'dark':'dark'}`} style={About_button}>Enable Dark Mode</button>
		</div >
	)
}

export default About
