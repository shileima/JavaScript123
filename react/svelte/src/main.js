import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		age: 24,
		handleClick:function(){
			return 24
		}
	}
});

export default app;