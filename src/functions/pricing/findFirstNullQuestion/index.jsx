
import QUESTIONS from '../../../constants/pricing/questions';
const findFirstNullQuestion = (answers, excludingId = null ) => (

  QUESTIONS.find((question) => {
    
    const answer = answers.get(question.id)
    if (question.id === excludingId ) return false
    return (answer === null || answer === undefined)
  })
)

export default findFirstNullQuestion
