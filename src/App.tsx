import React from 'react';
import './App.css'

function App() {
	const questions: string[] = [
		"Tell me about yourself",
		"What inspires you to work?",
		"Why are you interested in this position?",
		"Why do you think you are a good fit for this job?",
		"What do you know about our company?",
		"What do you hope to get out of a job?",
		"What skills do you think are needed for this position?",
		"What have you had the most success with in your career?",
		"What are your strengths?",
		"What are your weaknesses?",
		"Tell me about your work relationship with your colleagues.",
		"What do you think is the most important thing in working with people?",
		"Where do you see yourself in five years?"
	]

	const [currentQuestion, setCurrentQuestion] = React.useState<string>(questions[0])
	const [dup, setIsDup] = React.useState<number[]>([...new Array(questions.length)].map(item => 0))

	React.useEffect(() => {
		dup[0] = 1
		setIsDup(dup)
	}, [])

	React.useEffect(() => {
		if (dup.every(item => item === 1)) {
			setIsDup(dup.map(item => 0))
		}
	})

	const handleChangeQuestion = () => {
		const min = 0
		const max = questions.length - 1

		const index = Math.floor(Math.random() * (max - min + 1)) + min

		if (dup[index]) return handleChangeQuestion()

		dup[index] = 1 // not dup anymore
		setIsDup(dup)

		return setCurrentQuestion(questions[index])
	}

  return (
		<div className="container">
			<div className="question">"{currentQuestion}"</div>
			<button onClick={() => handleChangeQuestion()}>Change Question</button>
		</div>
  );
}

export default App;
