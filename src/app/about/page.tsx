import styles from './about.module.css';

const About = () => {
	return (
		<div className={styles.aboutContainer}>
			<h3>A little bit about me and the project</h3>
			<p>
				This is a part of a coding test. It is built with React, Next.js and
				TypeScript. <br />
				My main focus has been to become more familiar with NextJS which is a
				new framework for me. <br />
				I have enjoyed the process of creating something inspired by a
				childhood-memory - specifically, a classic Gameboy
				<br />
				<br />
				The biggest challenge I faced was to stop fiddling with design and
				styling. I had so much fun that it was difficult to scope my vision and
				prioritize what was most important to include in the project.
			</p>
		</div>
	);
};
export default About;
