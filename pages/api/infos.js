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

const getProfessionalExperiences = lang => {
	let content = {
		en: [
			{
				title: "Ezcore Leads (Lead Lab.) | Software Owner and Fullstack Developer", subtitle: "São Paulo - SP / BR  |  Nov 2018 - Present",
				description: "Lead capture and conversion system created and developed by me for distance learning universities currently being used by more than 100 centers in Brazil.",
				technical_specifications: [
					"Development of backend systems using NODE, Express, PHP, Laravel, MYSQL and MongoDB",
					"Development of frontend systems using HTML, CSS, JS, Vue, React, React Native and Electron",
					"Integration with third-party REST APIs"
				]
			},
			{
				title: "Otimize | Tech. Lead and Fullstack developer", subtitle: "São Paulo - SP / BR  |  Nov 2019 - Present",
				description: "Development company, which develops solutions for ecommerce and digital marketing.",
				technical_specifications: [
					"Development of backend systems using NODE, Express, PHP, Laravel, MYSQL and MongoDB",
					"Development of frontend systems using HTML, CSS, JS, Vue, React, React Native and Electron",
					"Integration with third-party REST APIs",
					"Team manager and sprint planning",
					"Solution planning and project structuring"
				]
			},
			{
				title: "Diwe | Partner Frontend Developer", subtitle: "São Paulo - SP / BR  |  Dez 2020 - Present",
				description: "Partner developer of the largest construction companies in Brazil.",
				technical_specifications: [
					"Development of frontend systems using Figma, HTML, CSS, JS, Vue, Nuxt, React and Next",
					"Integration with third-party REST APIs"
				]
			},
			{
				title: "Alive | Fullstack Developer", subtitle: "Marilia - SP / BR  |  Apr 2017 - Nov 2019",
				description: "Development company, which develops solutions for liquid fuel stations and convenience stores.",
				technical_specifications: [
					"Development of backend systems using PHP, Laravel, MYSQL , C++,Delphi and Firebird",
					"Technical support and remote and in-person customer service",
					"Deployment of new customers"
				]
			},
		],
		ptbr: [
			{
				title: "Ezcore Leads (Lead Lab.)  | Dono e Desenvolvedor Fullstack", subtitle: "São Paulo - SP / BR  |  Nov 2018 - Atual",
				description: "Sistema para captação e conversão de leads criado e desenvolvido por mim para universidades EAD atualmente sendo utilizado por mais de 100 polos pelo Brasil.",
				technical_specifications: [
					"Desenvolvimento de sistemas backend utilizando NODE, Express, PHP, Laravel, MYSQL e MongoDB",
					"Desenvolvimento de sistemas frontend utilizando HTML, CSS, JS, Vue, React, React Native e Electron",
					"Integração com APIs REST de terceiros",
					"Gerencimanente de equipe e planejamento de sprints",
					"Planejamento de soluções e estruturação de projetos"
				]
			},
			{
				title: "Otimize | Tech. Lead e Desenvolvedor Fullstack", subtitle: "São Paulo - SP / BR  |  Nov 2019 - Atual",
				description: "Empresa de desenvolvimento, que desenvolve soluções para ecommerce e marketing digital.",
				technical_specifications: [
					"Desenvolvimento de sistemas backend utilizando NODE, Express, PHP, Laravel, MYSQL e MongoDB",
					"Desenvolvimento de sistemas frontend utilizando HTML, CSS, JS, Vue, React, React Native e Electron",
					"Integração com APIs REST de terceiros"
				]
			},
			{
				title: "Diwe | Parceiro Desenvolvedor Frontend", subtitle: "São Paulo - SP / BR  |  Dez 2020 - Atual",
				description: "Desenvolvedor parceira das maiores empresas de construção civil do Brasil.",
				technical_specifications: [
					"Desenvolvimento de sistemas frontend usando Figma, HTML, CSS, JS, Vue, Nuxt, React e Next",
					"Integração com APIs REST de terceiros"
				]
			},
			{
				title: "Alive | Desenvolvedor Fullstack", subtitle: "Marilia - SP / BR  |  Abr 2017 - Nov 2019",
				description: "Empresa de desenvolvimento, que desenvolve soluções para postos de combustíveis liquidos e lojas de conveniências.",
				technical_specifications: [
					"Desenvolvimento de sistemas backend utilizando PHP, Laravel, MYSQL , C++,Delphi and Firebird",
					"Suporte técnico e atendimento ao remoto e presencial ao cliente"
				]
			},
		]
	}
	return content[lang]
}



const getEducation = lang => {
	let content = {
		en: [
			{ title: "Systems analysis and development | University of Marília (UNIMAR)", subtitle: "Jan 2013 - Dez 2016" },
		],
		ptbr: [
			{ title: "Análise e desenvolvimento de sistemas  | Universidade de Marília (UNIMAR)", subtitle: "Jan 2013 - Dez 2016" },
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
	let professional_experiences = getProfessionalExperiences(lang)
	let educations = getEducation(lang)
	res.status(200).json({
		name,
		title: title[lang],
		phone,
		location,
		email,
		lang,
		sumary,
		key_skills,
		technical_skills,
		professional_experiences,
		educations
	})
}
