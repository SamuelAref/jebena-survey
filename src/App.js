import { useState } from "react";
import Header from "./components/Header";
import Surveys from "./pages/Surveys";

function App() {

  // state
  const [surveys, setSurveys] = useState([
    {
      id: 0,
      surveyTitle: "Jebena Survey",
      surveyType: "Feedback",
      surveyDuration: 4,
      surveyDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci accusantium voluptates animi eum rerum, sunt quibusdam quam! Repellendus dolores impedit nisi mollitia fugit. Nulla nostrum architecto placeat dicta voluptatem at!",
      questions: [
        {
          id: 0,
          questionText: "What are your first impressions on this website?",
          questionType: "text",
        },

        {
          id: 1,
          questionText: "How many minutes a day do you spend on this website?",
          questionType: "numbered",
        },

        {
          id: 2,
          questionText: "I would recommend this website to my friends and family",
          questionType: "boolean",
        },

        {
          id: 3,
          questionText: "How satisfied are you from the services this website provides?",
          questionType: "choice",
          choices: ["Dissatisfied", "Somewhat satisfied", "Satisfied", "Very Satisfied"],
        },
      ],
    },
    {
      id: 1,
      surveyTitle: "Sini Survey",
      surveyType: "Research",
      surveyDuration: 15,
      surveyDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci accusantium voluptates animi eum rerum, sunt quibusdam quam! Repellendus dolores impedit nisi mollitia fugit. Nulla nostrum architecto placeat dicta voluptatem at!",
        questions: [
          {
            id: 0,
            questionText: "How familiar are you with deforestation, it's causes and effects?",
            questionType: "text",
          },
  
          {
            id: 1,
            questionText: "Since the dawn of time, in your opinion, what percentage of the earth has been deforested till date?",
            questionType: "numbered",
          },
  
          {
            id: 2,
            questionText: "I am against overworking laborers in plantations and factories?",
            questionType: "boolean",
          },
  
          {
            id: 3,
            questionText: "Which pesticides do you think are used frequently?",
            questionType: "choice",
            choices: ["Insecticides", "Herbicides", "Fungicides"],
          },
        ],
    }
  ]);

  // functions
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
