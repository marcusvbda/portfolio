import Link from 'next/link'
// const profileImage = require('../../assets/images/mac-iphone.jpg');

export default function Resume({ infos }) {
	const lang_names = {
		ptbr: { ptbr: "Português", en: "Portuguese" },
		en: { ptbr: "Inglês", en: "English" }
	}

	const labels = {
		sumary: { ptbr: "Resumo", en: "Sumary" },
		key_skills: { ptbr: "Habilidades Chave", en: "Key Skills" },
		technical_skills: { ptbr: "Habilidades Técnicas", en: "Technical Skills" },
	}

	return (
		<div className="resume">
			<div className="languages">
				<Link href="/">
					<a className={`link ${infos.lang == 'ptbr' ? 'active' : ''}`} >{lang_names.ptbr[infos.lang]}</a>
				</Link>
				<div className='horizontal-separator' />
				<Link href="/?lang=en">
					<a className={`link ${infos.lang == 'en' ? 'active' : ''}`} >{lang_names.en[infos.lang]}</a>
				</Link>
			</div>
			<div className="header">
				<img src="profile_image.jpeg" />
				<h1 className="name">{infos.name}</h1>
			</div>
			<div className="title">{infos.title}</div>
			<div className="contacts">
				<span className="text-muted">{infos.email}</span>
				<div className="vertical-separator" />
				<span className="text-muted">{infos.phone}</span>
				<div className="vertical-separator" />
				<span className="text-muted">{infos.location}</span>
			</div>

			<div className="section-title bordered">{labels.sumary[infos.lang]}</div>
			<div className="section-content">
				<span
					dangerouslySetInnerHTML={{
						__html: infos.sumary
					}} />
			</div>

			<div className="section-title bordered mt-3">{labels.key_skills[infos.lang]}</div>
			<div className="section-content">
				{
					infos.key_skills.map((row, i) => (
						<ul className="col-4" key={i}>
							{row.map((item, y) => <li key={y}>{item}</li>)}
						</ul>
					))
				}
			</div>

			<div className="section-title bordered mt-3">{labels.technical_skills[infos.lang]}</div>
			<div className="section-content">
				{
					infos.technical_skills.map((row, i) => (
						<ul className="col-4" key={i}>
							{
								Object.keys(row).map((key, y) => (
									<li key={y}>
										<b className="text-primary mr-2">{key} :</b>{row[key]}
									</li>
								))
							}
						</ul>
					))
				}
			</div>
		</div>
	)
}