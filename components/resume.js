export default function Resume({ infos }) {
	const lang_names = {
		ptbr: { ptbr: "Português", en: "Portuguese" },
		en: { ptbr: "Inglês", en: "English" }
	}

	const labels = {
		sumary: { ptbr: "Resumo", en: "Sumary" },
	}
	return (
		<div className="resume">
			<div className="languages">
				<a className={`link ${infos.lang == 'ptbr' ? 'active' : ''}`} href="?lang=ptbr">{lang_names.ptbr[infos.lang]}</a>
				<div className='horizontal-separator' />
				<a className={`link ${infos.lang == 'en' ? 'active' : ''}`} href="?lang=en">{lang_names.en[infos.lang]}</a>
			</div>
			<h1 className="name">{infos.name}</h1>
			<div className="title">{infos.title}</div>
			<div className="contacts">
				<div>{infos.email}</div>
				<div className="vertical-separator" />
				<div>{infos.phone}</div>
				<div className="vertical-separator" />
				<div>{infos.location}</div>
			</div>

			<div className="section-title">{labels.sumary[infos.lang]}</div>
		</div>
	)
}