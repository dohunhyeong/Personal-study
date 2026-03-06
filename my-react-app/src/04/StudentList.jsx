import Student from './Student.jsx';

function StudentList(){
    return(
        <>
        <Student name="주진범" age={30} isStudent={true} />
        <Student name="형도훈" age={41} isStudent={false} />
        <Student name="심선조" age={50} isStudent={false} />
        {/* <Student name="이정인" age="20" isStudent={true} /> */}
        <Student/>
      </>
    )
}

export default StudentList;
