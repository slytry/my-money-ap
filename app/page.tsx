import { getData } from "../src/data";

export default async function Page() {
	const fd = await getData();
	console.log("🚀 ~ Page ~ fd:", fd);
	const pre = JSON.stringify(fd, null, 2);
	return (
		<div>
			<h1>Hello, Next.js!</h1>
			<pre>{pre}</pre>
		</div>
	);
}
