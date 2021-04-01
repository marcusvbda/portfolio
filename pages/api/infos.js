const getLanguage = (req) => {
	const languages = ["ptbr", "en"]
	let lang = (req.body.lang ?? "ptbr").toLowerCase().trim()
	return languages.includes(lang) ? lang : "ptbr"
}

const getSumary = lang => {
	let content = {
		en: "<b>Backend</b> and <b>frontend</b> developer with 6+ years of experience. I developed software in different segments and for different companies that i worked or hired my services. In addition to the software developed at the companies where I performed my work, I also <b>created my own software</b> that are currently in production.<br> I have solid experience with several programming languages, libraries and most current frameworks, among them are <b>Vue, React, Bootstrap, Laravel, Node, Express and much more.</b>",
		ptbr: "Desenvolvedor <b>backend</b> e <b>frontend</b> com 6+ anos de experiência. Desenvolvi softwares em diversos segmentos e para diversas empresas que trabalhei ou contrataram meus serviços. Além dos sofwares desenvolvidos nas empresas que desempenhei meu trabalho, também possuo <b>softwares próprios</b> criados por mim que estão em produção atualmente.<br> Possuo experiência sólida com diversas linguagens de programação, bibliotecas e frameworks mais atuais, entre elas estão <b>Vue, React, Bootstrap, Laravel, Node, Express e muito mais.</b>"
	}
	return content[lang]
}

const getKeySkills = lang => {
	let content = {
		en: [
			["Frontend", "Backend", "Api rest"],
			["Payment modules", "UX", "Systems analysis"],
			["Customer support", "Technical Maintenance", "Development agility"]
		],
		ptbr: [
			["Frontend", "Backend", "Rest api"],
			["Módulos de pagamento", "UX", "Análise de sistemas"],
			["Suporte ao cliente", "Manutenção Técnica", "Agilidade de desenvolvimento"]
		]
	}
	return content[lang]
}

const getTechnicalSkills = lang => {
	let content = {
		en: [
			{
				"Operational systems": "Windows, Linux and Mac",
				"Programming languages": "Node, C#, Java and Python", "Frameworks": "Express, Vue, Laravel and Magento",
				"Version control systems": "Github, Gitlab and Bitbucket"
			},
			{
				"Cloud platform": "Google cloud Platform and AWS",
				"Scripting languages": "PHP and Javascript",
				"Database": "MYSQL, SQL Server and MongoDB",
				"Others": "JQuery, Ajax, Bootstrap, React and Figma"
			}
		],
		ptbr: [
			{
				"Sistemas operacionais": "Windows, Linux and Mac",
				"Linguagens de programação": "PHP, Node, C#, Java e Python",
				"Frameworks": "Express, Vue, Laravel e Magento",
				"Sistemas de controle de versão": "Github, Gitlab e Bitbucket"
			},
			{
				"Plataformas em núvem": "Google cloud platform e AWS",
				"Linguagens scripts": "PHP e Script",
				"Bancos de dados": "MYSQL, SQL Server e MongoDB",
				"Outros": "JQuery, Ajax, Bootstrap, React e Figma"
			}
		]
	}
	return content[lang]
}



export default (req, res) => {
	if (req.method != "POST") res.status(404).end()
	let lang = getLanguage(req)
	let name = "Marcus Vinicius Bassalobre de Assis"
	let title = { ptbr: "Desenvolvedor Fullstack", en: "Fullstack Developer" }
	let email = "bassalobre.vinicius@gmail.com"
	let phone = "+55 (14) 99676-6177"
	let location = "Taboão da Serra - SP / BR"
	let sumary = getSumary(lang)
	let key_skills = getKeySkills(lang)
	let technical_skills = getTechnicalSkills(lang)
	res.status(200).json({
		name,
		title: title[lang],
		phone,
		location,
		email,
		lang,
		sumary,
		key_skills,
		technical_skills
	})
}
