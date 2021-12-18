import logo from "./logo.svg";
import styles from "./App.module.css";

import { onMount } from "solid-js";

import TawkMessenger from './TawkMessenger';

function App() {
	let $tawkMessenger;

	onMount(() => {
		console.log($tawkMessenger);
	});

	const handleBeforeLoad = () => {
		console.log('handle before load was emit');
	};

	const handleOnLoad = () => {
		console.log('handle on load was emit');
		
		console.log($tawkMessenger.getStatus());
	};

	return (
		<div class={styles.App}>
			<header class={styles.header}>
			<img src={logo} class={styles.logo} alt="logo" />
			<p>
				Edit <code>src/App.jsx</code> and save to reload.
			</p>
			<a
				class={styles.link}
				href="https://github.com/solidjs/solid"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn Solid
			</a>
			
			<TawkMessenger
				propertyId="5f33cbbdc990133f3e60468e"
				widgetId="default"
				ref={$tawkMessenger}
				onBeforeLoad={handleBeforeLoad}
				onLoad={handleOnLoad}/>
			</header>
		</div>
	);
}

export default App;
