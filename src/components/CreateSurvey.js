import { Children, useState } from 'react';
import exit from '../assets/images/exit.png'
const CreateSurvey = ({handleSurveyAddition, surveys, onClose}) => {

    const [surveyTitle,setSurveyTitle] = useState('');
    const [surveyType,setSurveyType] = useState('none');
    const [surveyDuration,setSurveyDuration] = useState();
    const [surveyDescription,setSurveyDescription] = useState('');
    const [addChoice, setAddChoice] = useState(['choiceOne', 'choiceTwo'])
    const [questions,setQuestions] = useState(

        [
            {
                id:0, 
                questionText:'',
                questionType:'',
                choices:addChoice,
            }
        
        ]
        
        );
    // const [choiceCounter, setChoiceCounter] = useState(2);
    let choiceCounter = 2;
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setSurveyTitle('');
        setSurveyType('none');
        setSurveyDuration();
        setSurveyDescription('');
        setQuestions([]);

    }
    const handleQuestions = () => setQuestions([...questions, {id:questions.length, questionText:'', questionType:'', choices:addChoice}]);
    const handleAddQuestions = (id, text, type,choices, addBtn) => {
        
        addBtn.target.innerText = 'added';
        addBtn.target.disabled = true;
        let choiceArr = Object.values(choices);
        const newChoice = choiceArr.filter(choice => Number(choice.name) === id);
        // choiceCounter = 2;
        // setAddChoice(['choiceOne', 'choiceTwo']);

        if(id === 0) 
        {
        setQuestions(
    
            [
                {
                    id:id, 
                    questionText:text, 
                    questionType:type, 
                    choices: newChoice.map(choice => {

                        return choice.value
                    })
                    
                }
            ]
        
        )

        }
        
        else  
        {   
            questions.splice(id);
            setQuestions(
                [
                    ...questions, 
                    {
                        id:id, 
                        questionText:text, 
                        questionType:type,
                        choices: newChoice.map(choice => {

                            return choice.value
                        })
                    
                    }])

        }
    }
    const handleMultiple = (data, component) => {

        if(data === "choice") component.style.display = 'block';
        else component.style.display = 'none'

    }

    const handleChoiceAdd = (id) => {


        setAddChoice([...addChoice, 'choiceAdded'])
        questions[id].choices.push(`added choice ${questions[id].choices.length}`)
        // choiceCounter = choiceCounter + 1;

        // const handleQuestionSwitch = questions.map(question => {

        //     if(question.id === id) {

        //         return {...question, choices:addChoice};
        //     } 

        //     return question;
        // })

        // setQuestions(handleQuestionSwitch);



    }

    const handleQuestionDelete = (id) => {


        setQuestions(questions.filter(question => {

            return question.id !== id;
        }))

        
    }


    const handleChoiceDelete = (questId, choiceId) => {

        // setQuestions(questions.filter(question => {

        //     return question.choices !== id;
        // }))

        // setQuestions(questions.filter(question => {

        //     return question.choices.filter(choice => {

        //         return question.choices.indexOf(choice) !== choiceId;
        //     })
        // }))

        // console.log('yp')


            // setQuestions(questions.filter(question => {
            //     return question.choices.id !== choiceId;
            //   })
            // );

            // setQuestions(questions.map(question => {

            //    return question.choices.filter(choice => {

            //         return choice[this.choices.indexOf(choice)] !== choiceId
            //     })
            // }))

            // console.log(questions[questId]);
            console.log(choiceId)
            setAddChoice(questions[questId].choices.splice(choiceId, 1))


    }

  return (
    <div className=" w-full h-full flex flex-row flex-wrap justify-center items-center overflow-y-auto">

        <div className="cards border-brandBrown survey-basics w-72 h-85 m-2 flex flex-col">
            
            <form action="#" onSubmit={handleSubmit} className="flex flex-col">

            <label className="text-xl pl-4 pt-2 font-bold" htmlFor="surveyTitle">Survey Title</label>
            <textarea onChange={(e) => setSurveyTitle(e.target.value)} value={surveyTitle} required cols="70" rows="1" className="border-b-2 resize-none border-khaki w-60 mx-4 my-1 focus:outline-none text-sm px-1" type="text" id="surveyTitle" name="surveyTitle"/>
            <label className="text-xl pl-4 pt-2 font-bold" htmlFor="surveyType">Survey Type</label>
            <div className="flex flex-row m-1 justify-evenly items-center">
            
            <div className="flex flex-row justify-evenly items-center">
            <input onChange={(e) => setSurveyType(e.target.value)} className="hover:cursor-pointer" type="radio" value="Personal" name="surveyType"  />
            <div className="text-sm m-1 text-center font-medium">Personal</div>
            </div>

            <div className="flex flex-row  justify-evenly items-center">
            <input onChange={(e) => setSurveyType(e.target.value)} className="hover:cursor-pointer" type="radio" value="Research" name="surveyType"  />
            <div className="text-sm m-1 text-center font-medium">Research</div>
            </div>

            <div className="flex flex-row  justify-evenly items-center">
            <input onChange={(e) => setSurveyType(e.target.value)} className="hover:cursor-pointer" type="radio" value="Feedback" name="surveyType"  />
            <div className="text-sm m-1 text-center font-medium">Feedback</div>
            </div>

 

            </div>
            <div className=" m-1 flex flex-row justify-around items-center">
                <label htmlFor="surveyDuration" className="text-xl   font-bold w-40">Survey Duration</label>
                <input  onChange={(e) => setSurveyDuration(e.target.value)} className="focus:outline-none w-16 border-b-2 border-khaki" placeholder="minute" max={60} min={1} type="number" />
            </div>
            <div className="flex flex-col justify-start items-start">
            <label className="text-xl pl-3 pt-2 ml-1 font-bold" htmlFor="surveyDescription">Survey Description</label>
            <textarea required onChange={(e) => setSurveyDescription(e.target.value)} value={surveyDescription} className=" focus:outline-none border-2 border-khaki m-4 mt-2 resize-none p-1" name="" id="" cols="30" rows="3"></textarea>
            <div className='w-64 ml-4 flex justify-end items-center'>
            <button onClick={() => {

                {surveys   && handleSurveyAddition(surveys.length,surveyTitle,surveyType,surveyDuration,surveyDescription,questions)}
                {!surveys && handleSurveyAddition(0,surveyTitle,surveyType,surveyDuration,surveyDescription,questions)}
                {surveyTitle && surveyDescription && onClose()}

            }} 

                
                type='submit' className="button bg-headerBlue text-white rounded-2xl h-6 w-20 flex justify-center items-center text-center text-md p-2 mb-2">
            Submit
          </button>
          </div>

            </div>

            </form>
          

        </div>
        <div className="cards survey-questions w-134  h-82 m-2  flex-col justify-evenly relative">

            <div className="font-bold text-brandBrown text-2xl pl-3">Questions</div>
            <div className="overflow-auto w-full h-72">
                
                {questions && questions.map(question => (

                    <div key={question.id} className="cards border-headerBlue border-l-8 border-t-2 question w-133 h-auto my-4 relative flex-col">
                    <div onClick={() => handleQuestionDelete(question.id)} className='w-8 h-8 absolute right-0 top-0 p-1 hover:p-0 hover:cursor-pointer'><img src={exit} alt="" /></div>
                    <div className="font-bold text-brandBrown text-lg pl-1">Question {question.id + 1}</div>
                    <div className='flex flex-row justify-evenly items-center'>
                    <textarea className="question-text focus:outline-none border-2 border-khaki m-2 mb-6 resize-none p-1 text-xs" name="" id="" cols="70" rows="2"></textarea>
                    <select onChange={() => handleMultiple(document.getElementsByClassName('questionType')[question.id].value, document.getElementsByClassName('show-Multiple')[question.id])}  className='questionType border-2 border-khaki text-md font-medium bg-khaki m-2 -mt-6 hover:cursor-pointer' name="questionType" id="questionType">
                        <option value="null">Question Type</option>
                        <option value="text">Open Question</option>
                        <option value="boolean">True or False</option>
                        <option value="numbered">Numbered Question</option>
                        <option value="choice">Multiple Choice</option>

                    </select>
                    <button id={`button-${question.id}`} onClick={(e) => 
                        {
                            handleAddQuestions(

                                question.id,
                                document.getElementsByClassName('question-text')[question.id].value,
                                document.getElementsByClassName('questionType')[question.id].value,
                                document.querySelectorAll('input[type="text"]'),
                                e

                            )}} 
                            
                            className="button bg-headerBlue absolute right-0 bottom-0 text-white rounded-2xl h-5 w-24 flex justify-center items-center text-center text-xs p-2 m-1">Add question</button>
                    </div>

                    {
                    
                    <div className='show-Multiple' style={{display:'none'}}>
                        
                     <div className="font-bold text-brandBrown text-md pl-1 mb-5">Add Choices</div>

                    <div className='choice-container flex flex-col max-h-48 overflow-auto '>

                       {question && question.choices &&  question.choices.map(choice => (

                            <div  key={question.choices.indexOf(choice)} className={`cont flex flex-row justify-center items-center ${question.choices.indexOf(choice) <= 1 ? 'mr-5' : ''}`}>
                                                        
                            <div  className= 'font-bold text-brandBrown text-sm pl-1'>Choice</div>
                            <div className='flex flex-row justify-center items-center'>
                                    <input type="text" className='focus:outline-none border-2 border-khaki m-2  p-1 text-xs h-7 w-96' name={question.id} />
                                    <svg onClick={() => handleChoiceDelete(question.id, question.choices.indexOf(choice))} className={`${question.choices.indexOf(choice) <= 1 ? 'hidden' : ''} fill-red hover:cursor-pointer`} width="20" height="20" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM4.50003 7C4.22389 7 4.00003 7.22386 4.00003 7.5C4.00003 7.77614 4.22389 8 4.50003 8H10.5C10.7762 8 11 7.77614 11 7.5C11 7.22386 10.7762 7 10.5 7H4.50003Z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                            </div>

                            </div>


                       ))  }


                    <div
                    onClick={() => handleChoiceAdd(question.id)}
                         className="rounded-full ml-28 hover:border-2 border-headerBlue opacity-100 hover:opacity-100 hover:cursor-pointer  border-2 w-6 h-6 mr-2 mb-2 bg-none flex justify-center items-center"
                    >

                    <svg
                    className="fill-headerBlue cover w-full bg-white rounded-full height-full hover:p-0  p-1"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    ></path>
                    </svg>
                        </div>

                        

                           
                    </div>
                    </div>
                    
                    }
    



                    <svg className='w-5 h-5 absolute left-0 bottom-0 fill-black rotate-90' viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 4.625C6.12132 4.625 6.625 4.12132 6.625 3.5C6.625 2.87868 6.12132 2.375 5.5 2.375C4.87868 2.375 4.375 2.87868 4.375 3.5C4.375 4.12132 4.87868 4.625 5.5 4.625ZM9.5 4.625C10.1213 4.625 10.625 4.12132 10.625 3.5C10.625 2.87868 10.1213 2.375 9.5 2.375C8.87868 2.375 8.375 2.87868 8.375 3.5C8.375 4.12132 8.87868 4.625 9.5 4.625ZM10.625 7.5C10.625 8.12132 10.1213 8.625 9.5 8.625C8.87868 8.625 8.375 8.12132 8.375 7.5C8.375 6.87868 8.87868 6.375 9.5 6.375C10.1213 6.375 10.625 6.87868 10.625 7.5ZM5.5 8.625C6.12132 8.625 6.625 8.12132 6.625 7.5C6.625 6.87868 6.12132 6.375 5.5 6.375C4.87868 6.375 4.375 6.87868 4.375 7.5C4.375 8.12132 4.87868 8.625 5.5 8.625ZM10.625 11.5C10.625 12.1213 10.1213 12.625 9.5 12.625C8.87868 12.625 8.375 12.1213 8.375 11.5C8.375 10.8787 8.87868 10.375 9.5 10.375C10.1213 10.375 10.625 10.8787 10.625 11.5ZM5.5 12.625C6.12132 12.625 6.625 12.1213 6.625 11.5C6.625 10.8787 6.12132 10.375 5.5 10.375C4.87868 10.375 4.375 10.8787 4.375 11.5C4.375 12.1213 4.87868 12.625 5.5 12.625Z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    </div>


                ))
               }
                

            </div>

                    <div onClick={handleQuestions}
                    className="rounded-full hover:border-2 border-headerBlue opacity-100 hover:opacity-100 hover:cursor-pointer  border-2 w-6 h-6 absolute left-0 top-0 ml-32 mt-1  bg-none flex justify-center items-center"
                >

                    <svg
                    className="fill-headerBlue cover w-full bg-white rounded-full height-full hover:p-0  p-1"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    ></path>
                    </svg>
                </div>

        </div>

    </div>
  );
};

export default CreateSurvey;
