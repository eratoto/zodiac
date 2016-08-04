

var characters = [
	{
		month: "January",
		sign: "AQUARIUS",
		image: "img/aquarius.jpg",
		strengths: "Progressive, original, independent, humanitarian",
		weaknesses: "Runs from emotional expression, temperamental, uncompromising, aloof",
		likes: "Fun with friends, helping others, fighting for causes, intellectual conversation, a good listener",
		dislikes: "Limitations, broken promises, being lonely, dull or boring situations, people who disagree with them"
	},
	{
		month: "February",
		sign: "PISCES",
		image: "img/pisces.jpg",
		strengths: "Compassionate, artistic, intuitive, gentle, wise, musical",
		weaknesses: "Fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr",
		likes: "Being alone, sleeping, music, romance, visual media, swimming, spiritual themes",
		dislikes: "Know-it-all, being criticized, the past coming back to haunt, cruelty of any kind"
	},
	{
		month: "March",
		sign: "ARIES",
		image: "img/aries.jpg",
		strengths: "Courageous, determined, confident, enthusiastic, optimistic, honest, passionate.",
		weaknesses: "Impatient, moody, short-tempered, impulsive, aggressive",
		likes: "Comfortable clothes, taking on leadership roles, physical challenges, individual sports",
		dislikes: "Inactivity, delays, work that does not use one's talents"
	},
	{
		month: "April",
		sign: "TAURUS",
		image: "img/taurus.jpg",
		strengths: "Reliable, patient, practical, devoted, responsible, stable",
		weaknesses: "Stubborn, possessive, uncompromising",
		likes: "Gardening, cooking, music, romance, high quality clothes, working with hands",
		dislikes: "Sudden changes, complications, insecurity of any kind, synthetic fabrics"
	},
	{
		month: "May",
		sign: "GEMINI",
		image: "img/gemini.jpg",
		strengths: "Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas",
		weaknesses: "Nervous, inconsistent, indecisive",
		likes: "Music, books, magazines, chats with nearly anyone, short trips around the town",
		dislikes: "Being alone, being confined, repetition and routine"
	},
	{
		month: "June",
		sign: "CANCER",
		image: "img/cancer.jpg",
		strengths: "Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive",
		weaknesses: "Moody, pessimistic, suspicious, manipulative, insecure",
		likes: "Art, home-based hobbies, relaxing near or in water, helping loved ones, a good meal with friends",
		dislikes: "Strangers, any criticism of Mom, revealing of personal life"
	},
	{
		month: "July",
		sign: "LEO",
		image: "img/leo.jpg",
		strengths: "Creative, passionate, generous, warm-hearted, cheerful, humorous",
		weaknesses: "Arrogant, stubborn, self-centered, lazy, inflexible",
		likes: "Theater, taking holidays, being admired, expensive things, bright colors, fun with friends",
		dislikes: "Being ignored, facing difficult reality, not being treated like a king or queen"
	},
	{
		month: "August",
		sign: "VIRGO",
		image: "img/virgo.jpg",
		strengths: "Loyal, analytical, kind, hardworking, practical",
		weaknesses: "Shyness, worry, overly critical of self and others, all work and no play",
		likes: "Animals, healthy food, books, nature, cleanliness",
		dislikes: "Rudeness, asking for help, taking center stage",
	},
	{
		month: "September",
		sign: "LIBRA",
		image: "img/libra.jpg",
		strengths: "Cooperative,diplomatic, gracious, fair-minded, social",
		weaknesses: "Indecisive, avoids confrontations, will carry a grudge, self-pity",
		likes: "Harmony, gentleness, sharing with others, the outdoors",
		dislikes: "Violence, injustice, loudmouths, conformity",
	},
	{
		month: "October",
		sign: "SCORPIO",
		image: "img/scorpio.jpg",
		strengths: "Resourceful, brave, passionate, stubborn, a true friend",
		weaknesses: "Distrusting, jealous, secretive, violent",
		likes: "Truth, facts, being right, longtime friends, teasing, a grand passion",
		dislikes: "Dishonesty, revealing secrets, passive people"
	},
	{
		month: "November",
		sign: "SAGITTARIUS",
		image: "img/scorpio.jpg",
		strengths: "Generous, idealistic, great sense of humor",
		weaknesses: "Promises more than can deliver, very impatient, will say anything no matter how undiplomatic",
		likes: "Freedom, travel, philosophy, being outdoors",
		dislikes: "Clingy people, being constrained, off-the-wall theories, details"
	},
	{
		month: "December",
		sign: "CAPRICORN",
		image: "img/capricorn.jpg",
		strengths: "Responsible, disciplined, self-control, good managers",
		weaknesses: "Know-it-all, unforgiving, condescending, expecting the worst",
		likes: "Family, tradition, music, understated status, quality craftsmanship",
		dislikes: "Almost everything at some point"
	}
]

function getInfo() {
	var day = document.getElementById("day").value
	var month = document.getElementById("month").value

	for(i = 0; i < characters.length; i++) {

		while(characters[i].month == month) {
			//For dates from the 22nd till the end of the month display the current month...
			if(22 <= day) {
				document.getElementById("sign").innerHTML = characters[i].sign
				document.getElementById("icon").src = characters[i].image
				document.getElementById("strengths").innerHTML = "<h4>Strengths</h4>" + characters[i].strengths
				document.getElementById("weaknesses").innerHTML = "<h4>Weaknesses</h4>" + characters[i].weaknesses
				document.getElementById("likes").innerHTML = "<h4>Likes</h4>" + characters[i].likes
				document.getElementById("dislikes").innerHTML = "<h4>Dislikes</h4>" + characters[i].dislikes;
				return
			}
			//For dates from the 1st to the 22nd, display the previous month....
			else if(1 <= day) {
				//For January days before the 22nd to display the previous month, December...
				if(characters[i].month === characters[0].month) {
					document.getElementById("sign").innerHTML = characters[11].sign
					document.getElementById("icon").src = characters[11].image
					document.getElementById("strengths").innerHTML = "<h4>Strengths</h4>" + characters[11].strengths
					document.getElementById("weaknesses").innerHTML = "<h4>Weaknesses</h4>" + characters[11].weaknesses
					document.getElementById("likes").innerHTML = "<h4>Likes</h4>" + characters[11].likes
					document.getElementById("dislikes").innerHTML = "<h4>Dislikes</h4>" + characters[11].dislikes;
					}

				document.getElementById("sign").innerHTML = characters[i - 1].sign
				document.getElementById("icon").src = characters[i - 1].image
				document.getElementById("strengths").innerHTML = "<h4>Strengths</h4>" + characters[i - 1].strengths
				document.getElementById("weaknesses").innerHTML = "<h4>Weaknesses</h4>" + characters[i - 1].weaknesses
				document.getElementById("likes").innerHTML = "<h4>Likes</h4>" + characters[i - 1].likes
				document.getElementById("dislikes").innerHTML = "<h4>Dislikes</h4>" + characters[i - 1].dislikes;
				return
			}
		}
		
		document.getElementById("sign").innerHTML = "Try again...."
		document.getElementById("icon").src = ""
		document.getElementById("strengths").innerHTML = ""
		document.getElementById("weaknesses").innerHTML = ""
		document.getElementById("likes").innerHTML = ""
		document.getElementById("dislikes").innerHTML = ""

	} 
}

		
			


























