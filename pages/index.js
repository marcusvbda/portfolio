import Head from 'next/head'
import Resume from 'components/resume'
export default function Home({ infos }) {
	return (
		<>
			<Head>
				<title>{infos.name} | {infos.title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Resume infos={infos} />
		</>
	)
}

export async function getServerSideProps({ req, query }) {
	let lang = query?.lang
	const res = await fetch(`http://${req.headers.host}/api/infos`, {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		method: "POST",
		body: JSON.stringify({ lang })
	})
	const infos = await res.json()
	return {
		props: {
			infos
		},
	}
}