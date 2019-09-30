/**
 * Gets the processing page
 * @param {array} data 
 */
export default async function getProcessingPage(states) {
	for (let i = 0; i < states.length; i++) {
		if (states[i].state === "success") {
			return { title: "Order complete", message: null };
		}
		else if (states[i].state === "processing") {
			await new Promise(res => setTimeout(res, 2000));
		}
		else if (states[i].state === "error") {
			return handleError(states[i].errorCode);
		}
	}
}

function handleError(errorCode) {
	switch (errorCode) {
		case "NO_STOCK": {
			return { title: 'Error page', message: 'No stock has been found' };
		}
		case "INCORRECT_DETAILS": {
			return { title: 'Error page', message: 'Incorrect details have been entered' };
		}
		default: {
			return { title: 'Error page', message: null };
		}
	}
}