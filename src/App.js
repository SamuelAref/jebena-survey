import { useState } from "react";
import Header from "./components/Header";
import Surveys from "./pages/Surveys";

function App() {
  const [surveys, setSurveys] = useState([
    {
      id: 0,
      surveyTitle: "Survey 1",
      surveyType: "Personal",
      surveyDuration: 5,
      surveyDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci accusantium voluptates animi eum rerum, sunt quibusdam quam! Repellendus dolores impedit nisi mollitia fugit. Nulla nostrum architecto placeat dicta voluptatem at!",
      questions: [
        {
          id: 0,
          questionText: "What is your name?",
          questionType: "text",
        },

        {
          id: 1,
          questionText: "How old are you?",
          questionType: "numbered",
        },

        {
          id: 2,
          questionText: "Mitochondria is the power-house of the cell",
          questionType: "boolean",
        },

        {
          id: 3,
          questionText: "What is the power-house of the cell?",
          questionType: "choice",
          choices: ["choiceOne", "choiceTwo", "choiceThree"],
        },
      ],
    },
    {
      id: 1,
      surveyTitle: "Survey 2",
      surveyType: "Personal",
      surveyDuration: 5,
      surveyDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci accusantium voluptates animi eum rerum, sunt quibusdam quam! Repellendus dolores impedit nisi mollitia fugit. Nulla nostrum architecto placeat dicta voluptatem at!",
      questions: [
        {
          id: 0,
          questionText: "What is your name?",
          questionType: "text",
        },

        {
          id: 1,
          questionText: "How old are you?",
          questionType: "numbered",
        },

        {
          id: 2,
          questionText: "Mitochondria is the power-house of the cell",
          questionType: "boolean",
        },

        {
          id: 3,
          questionText: "What is the power-house of the cell?",
          questionType: "choice",
          choices: ["choiceOne", "choiceTwo", "choiceThree"],
        },
      ],
    },
    {
      id: 2,
      surveyTitle: "Survey 3",
      surveyType: "Personal",
      surveyDuration: 5,
      surveyDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci accusantium voluptates animi eum rerum, sunt quibusdam quam! Repellendus dolores impedit nisi mollitia fugit. Nulla nostrum architecto placeat dicta voluptatem at!",
      questions: [
        {
          id: 0,
          questionText: "What is your name?",
          questionType: "text",
        },

        {
          id: 1,
          questionText: "How old are you?",
          questionType: "numbered",
        },

        {
          id: 2,
          questionText: "Mitochondria is the power-house of the cell",
          questionType: "boolean",
        },

        {
          id: 3,
          questionText: "What is the power-house of the cell?",
          questionType: "choice",
          choices: ["choiceOne", "choiceTwo", "choiceThree"],
        },
      ],
    },
    {
      id: 3,
      surveyTitle: "Survey 4",
      surveyType: "Personal",
      surveyDuration: 5,
      surveyDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci accusantium voluptates animi eum rerum, sunt quibusdam quam! Repellendus dolores impedit nisi mollitia fugit. Nulla nostrum architecto placeat dicta voluptatem at!",
      questions: [
        {
          id: 0,
          questionText: "What is your name?",
          questionType: "text",
        },

        {
          id: 1,
          questionText: "How old are you?",
          questionType: "numbered",
        },

        {
          id: 2,
          questionText: "Mitochondria is the power-house of the cell",
          questionType: "boolean",
        },

        {
          id: 3,
          questionText: "What is the power-house of the cell?",
          questionType: "choice",
          choices: ["choiceOne", "choiceTwo", "choiceThree"],
        },
      ],
    },
    {
      id: 4,
      surveyTitle: "Survey 5",
      surveyType: "Personal",
      surveyDuration: 5,
      surveyDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci accusantium voluptates animi eum rerum, sunt quibusdam quam! Repellendus dolores impedit nisi mollitia fugit. Nulla nostrum architecto placeat dicta voluptatem at!",
      questions: [
        {
          id: 0,
          questionText: "What is your name?",
          questionType: "text",
        },

        {
          id: 1,
          questionText: "How old are you?",
          questionType: "numbered",
        },

        {
          id: 2,
          questionText: "Mitochondria is the power-house of the cell",
          questionType: "boolean",
        },

        {
          id: 3,
          questionText: "What is the power-house of the cell?",
          questionType: "choice",
          choices: ["choiceOne", "choiceTwo", "choiceThree"],
        },
      ],
    },
  ]);

  const handleSurveyAddition = (
    id,
    surveyTitle,
    surveyType,
    surveyDuration,
    surveyDescription,
    questions
  ) => {
    if (surveys && surveyTitle !== "" && surveyDescription !== "") {
      setSurveys([
        ...surveys,
        {
          id: id,
          surveyTitle: surveyTitle,
          surveyType: surveyType,
          surveyDuration: surveyDuration,
          surveyDescription: surveyDescription,
          questions: questions,
        },
      ]);
    } else if (!surveys && surveyTitle !== "" && surveyDescription !== "") {
      setSurveys([
        {
          id: id,
          surveyTitle: surveyTitle,
          surveyType: surveyType,
          surveyDuration: surveyDuration,
          surveyDescription: surveyDescription,
          questions: questions,
        },
      ]);
    }
  };
  const handleSurveyDeletion = (id) => {
    setSurveys(
      surveys.filter((survey) => {
        return survey.id !== id;
      })
    );
  };

  const handleSurveyEdition = (
    id,
    surveyTitle,
    surveyType,
    surveyDuration,
    surveyDescription,
    questions
  ) => {
    setSurveys(
      surveys.map((survey) => {
        if (survey.id === id) {
          return {
            ...survey,
            surveyTitle: surveyTitle,
            surveyType: surveyType,
            surveyDuration: surveyDuration,
            surveyDescription: surveyDescription,
            questions: questions,
          };
        }
        return survey;
      })
    );
  };

  return (
    <div className="App scroll-smooth">
      <Header />
      <Surveys
        surveys={surveys}
        handleSurveyAddition={handleSurveyAddition}
        handleSurveyDeletion={handleSurveyDeletion}
        handleSurveyEdition={handleSurveyEdition}
      />
    </div>
  );
}

export default App;
