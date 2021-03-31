
const getLanguage = (req) => {
	const languages = ["ptbr", "en"]
	let lang = (req.body.lang ?? "ptbr").toLowerCase().trim()
	return languages.includes(lang) ? lang : "ptbr"
}

export default (req, res) => {
	if (req.method != "POST") res.status(404).end()
	let lang = getLanguage(req)
	let name = "Marcus Vinicius Bassalobre de Assis"
	let title = { ptbr: "Desenvolvedor Fullstack", en: "Fullstack Developer" }
	let email = "bassalobre.vinicius@gmail.com"
	let phone = "+55 (14) 99676-6177"
	let location = "Taboão da Serra - SP / BR"
	res.status(200).json({
		name,
		title: title[lang],
		phone,
		location,
		email,
		lang
	})
}
