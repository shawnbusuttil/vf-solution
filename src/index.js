import getProcessingPage from "./getProcessingPage";

(async function render() {
	document.getElementById("state").textContent = "loading...";
	const state = await getProcessingPage([{ state: 'processing' }, { state: 'error' }]);
	document.getElementById("state").textContent = JSON.stringify(state);
})();