/*initiation des variables contenant une question, les possibilités de réponses contenues dans un tableau, l'indice de la bonne réponse par rapport au tableau et une explication.
Ces variables sont elles-mêmes contenues dans un tableau*/
const donneesQuiz = [
	{
    question: "Quel est le rôle principal du paracétamol ?",
    reponses: ["Antibiotique", "Antidépresseur", "Analgésique", "Antihistaminique"],
    correcte: 2,
    explication: "Le paracétamol est un analgésique utilisé pour traiter la douleur et la fièvre."
  },
	{
    question: "Quelle classe de médicament est utilisée pour traiter l'hypertension ?",
    reponses: ["Bêta-bloquants", "Antiviraux", "Antifongiques", "Anesthésiques"],
    correcte: 0,
    explication: "Les bêta-bloquants aident à réduire la pression artérielle."
  },
    {
    question: "Quel médicament est un anticoagulant ?",
    reponses: ["Warfarine", "Amoxicilline", "Ibuprofène", "Metformine"],
    correcte: 0,
    explication: "La warfarine est un anticoagulant qui aide à prévenir la formation de caillots."
  }
];

/* inititation de variable permettant de stocker le score et l'indice de la question */
let questionActuelle = 0;
let score = 0;

/* Ces déclarations permettent d'itérer et de récupérer de manière dynamique sur les variables nécessaire au quiz */
const elementQuestion = document.getElementById("question");
const elementReponses = document.getElementById("reponses");
const elementFeedback = document.getElementById("feedback");
const boutonSuivant = document.getElementById("boutonSuivant");
const elementScore = document.getElementById("score");

/* Cette fonction permet d'afficher les questions, elle commence par récupérer la question actuelle grâce à la variable "questionActuelle" déclarée plus tôt et mise à jour progressivement
La fonction va également récupérer les éléments contenues dans la variable de la question pour les afficher */
function loadQuestion() {
	const q = donneesQuiz[questionActuelle];
	elementQuestion.textContent = q.question;
	elementReponses.innerHTML = "";
	elementFeedback.textContent = "";

/* et pour les possibilités de réponses, la fonction contient une boucle permettant de créer un bouton pour chaque réponse possible */
	q.reponses.forEach((reponse, index) => {
		const bouton = document.createElement("button");
		bouton.textContent = reponse;
		bouton.onclick = () => Verif(index);
		elementReponses.appendChild(bouton);
  });
}

/* La fonction va comparer l'indice de la réponse donnée avec l'indice de la réponse correcte pour adapter l'affichage de la page*/
function Verif(selectionnee) {
	const q = donneesQuiz[questionActuelle];
	if (selectionnee === q.correcte) {
		score++;
		elementFeedback.textContent = "Bonne réponse ! " + q.explication;
		elementFeedback.style.color = "green";
	} else {
		elementFeedback.textContent = "Mauvaise réponse. " + q.explication;
		elementFeedback.style.color = "red";
  }
}

/* Cette fonction gère le passage à la question suivante et se déclenche quand le bouton "suivant" est cliqué.
Elle incréemente le compteur de question, vérifie si toutes les questions ont été lu et si c'est le cas, affiche le score */
boutonSuivant.onclick = () => {
	questionActuelle++;
	if (questionActuelle < donneesQuiz.length) {
		loadQuestion();
	} else {
		elementQuestion.textContent = "Quiz terminé !";
		elementReponses.innerHTML = "";
		elementFeedback.innerHTML = "";
		elementScore.textContent = `Votre score : ${score}/${donneesQuiz.length}`;
  }
};

/* La première fonction est lancée dès que la page est lancée */
loadQuestion();