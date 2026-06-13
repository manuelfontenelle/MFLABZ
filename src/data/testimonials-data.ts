export type TestimonialGender = "male" | "female"
export type TestimonialCountryFlag =
	| "US"
	| "CA"
	| "AU"
	| "GB"
	| "IT"
	| "DE"
	| "FR"
	| "ES"
	| "NL"
	| "SE"
	| "JP"
	| "BR"

export type TestimonialItem = {
	name: string
	country: string
	countryFlag: TestimonialCountryFlag
	gender: TestimonialGender
	rating: 5
	review: string
}

export const testimonialsData: TestimonialItem[] = [
	{
		name: "ema_alsh",
		country: "Canada",
		countryFlag: "CA",
		gender: "male",
		rating: 5,
		review:
			"Great experience overall. Communication was smooth, very responsive, and easy to work with. Open to feedback and made adjustments quickly without issues. Delivery was on time and the quality of work was solid. Professional and reliable, would definitely work together again 👍",
	},
	{
		name: "hypnokacee",
		country: "United States",
		countryFlag: "US",
		gender: "female",
		rating: 5,
		review:
			"Manuel is awesome! He designed my brochures and they turned out gorgeous! The turnaround was fast, and he asked thoughtful questions to make sure everything was correct in the design. He also explained things in a clear, easy-to-understand way, which I really appreciate, as I'm technologically challenged. Highly recommend! 5 stars!",
	},
	{
		name: "reflectionsbym",
		country: "Australia",
		countryFlag: "AU",
		gender: "male",
		rating: 5,
		review:
			"Manuel was great to work with — responsive, professional, and easy to communicate with throughout the process. He quickly understood the brief and delivered a strong initial concept, and was very open to feedback and revisions. His turnaround time was fast, and the final design was high quality and print-ready. Would definitely recommend Manuel for banner and marketing design work",
	},
	{
		name: "charliecates",
		country: "united states",
		countryFlag: "US",
		gender: "male",
		rating: 5,
		review:
			"Thank you so much for creating such a beautiful trifold for my business! My wife and I are absolutely thrilled with the final result. The attention to detail you showed during every step of the process helped us get exactly what we were looking for from this project. A fast turnaround, responsive, and extremely easy to work with. Highly recommend!",
	},
	{
		name: "aleksja2024",
		country: "Canada",
		countryFlag: "CA",
		gender: "female",
		rating: 5,
		review:
			"wow! Manuel was amazing to say the least, very friendly, professional, kind, quick to respond, always delivered and paid attention to details, very flexible and kind with his time, he went above and beyond in my experience, was very patient, i highly recommend Manuel if you care about a smooth pleasant process and great results, i will definitely be working with Manuel again for near future project!",
	},
	{
		name: "peptidesyringes",
		country: "United States",
		countryFlag: "US",
		gender: "female",
		rating: 5,
		review:
			"Manuel was great! I needed a printable logo at the last minute. We messaged back and forth for about 30 min until we were both comfortable that the expectations of the project were well defined. I needed something clean, modern, and simple enough to be printed on gloss finish, 1 color, boxes He told me that he'd have my 1st revs within 24 hours. The next morning I logged in and there was my new logo. I loved the first rev so no further work was needed.",
	},
	{
		name: "brunopiccolo07",
		country: "Spain",
		countryFlag: "ES",
		gender: "male",
		rating: 5,
		review:
			"Manuel has delivered an excellent design. Delivery was on time and with many iterative sessions. When working with Manuel, he had an excellent answer time, creativity and profesionalism. Also, he is able to suggest when the client look for suggestion and able to work in a cooperation interaction with the client. I would repeat as a client. Thanks Manuel",
	},
	{
		name: "zedek1",
		country: "Israel",
		countryFlag: "IL",
		gender: "female",
		rating: 5,
		review:
			"Excellent experience. The work was delivered quickly and at a very high level. The designer was patient, attentive, and understood exactly what I needed. Communication was smooth, and the final result exceeded my expectations. Highly recommended.",
	},
	{
		name: "reflectionsbym",
		country: "Australia",
		countryFlag: "AU",
		gender: "female",
		rating: 5,
		review:
			"Manuel was great to work with — responsive, professional, and easy to communicate with throughout the process. He quickly understood the brief and delivered a strong initial concept, and was very open to feedback and revisions. His turnaround time was fast, and the final design was high quality and print-ready. Would definitely recommend Manuel for banner and marketing design work.",
	},
	{
		name: "nena_sainz",
		country: "France",
		countryFlag: "FR",
		gender: "male",
		rating: 5,
		review:
			"Un énième projet avec Manuel et je le conseille (encore une fois) : il comprend vite mes besoins, ses design sont tops, il est réactif et le rapport qualité prix est excellent. Ne cherchez pas plus loin, c’est lui qu’il vous faut pour vos projets ! ",
	},
	{
		name: "fcxcdjodv",
		country: "Guadeloupe",
		countryFlag: "GP",
		gender: "female",
		rating: 5,
		review:
			"Manuel est un infographiste talentueux et polyvalent. Il a su s'adapter à nos besoins changeants et a toujours livré des résultats impeccables. Sa passion pour son métier transparaît dans chacune de ses créations. Nous le recommandons vivement à tous ceux qui recherchent un travail de qualité",
	},
	{
		name: "thomasrsd",
		country: "Netherlands",
		countryFlag: "NL",
		gender: "male",
		rating: 5,
		review:
			"Working with Manuel is a pleasure every single time. He delivered exactly as planned, and everything was perfect on the first try. I’m already looking forward to the next project together. It's smooth, effortless, and worry-free.",
	},
]
