import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.introText}>
			<h1>Welcome to my small gameboy-project</h1>
			<h2>This is a tiny app, built with React, Next.js and TypeScript</h2>
			<p>
				It gets data from a free api and display it. This can be seen in the
				Gameboy page
			</p>
		</div>
	);
}
