import axios from "axios";

const handler = async (event, context) => {
	const listId = "84c73d102b";
	const apiKey = "ee4c5bf044716e6f3c3bed0719abdb1e-us14";

	const body = JSON.parse(event.body);

	const { email_address, merge_fields } = body;

	if (!email_address) {
		return {
			statusCode: 400,
			body: JSON.stringify({ message: "Please provide Email!!" }),
		};
	}

	try {
		const payload = {
			email_address,
			merge_fields,
			status: "subscribed",
		};
		const { data } = await axios.post(
			`https://us14.api.mailchimp.com/account/api/3.0/lists/${listId}/members`,
			payload,
			{
				headers: {
					Authorization: `Basic ${apiKey}`,
				},
			}
		);

		return {
			statusCode: 200,
			body: JSON.stringify(data),
		};
	} catch (error) {
		console.log(error);
		return {
			statusCode: 500,
			body: JSON.stringify(error),
		};
	}
};

export { handler };
