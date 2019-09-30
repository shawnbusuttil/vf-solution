import getProcessingPage from "../getProcessingPage";

describe("getProcessingPage", () => {
	test("processing and success", async() => {
		let state;
		
		setTimeout(() => expect(state).not.toEqual({ title: "Order complete", message: null }), 2000);
		setTimeout(() => expect(state).toEqual({ title: "Order complete", message: null }), 4500);
		
		state = await getProcessingPage([
			{ state: "processing" }, 
			{ state: "processing" }, 
			{ state: "success" }
		]);		
	});

	test("error", async() => {
		const state = await getProcessingPage([
			{ state: "error", errorCode: "NO_STOCK" }
		]);

		expect(state).toEqual({ title: 'Error page', message: 'No stock has been found' });
	});
});