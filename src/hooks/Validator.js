function Validator(inputValDict) {
    // 빈 문자열인지 확인
    const isValid = (val) => {
        return val !== "" ? true : false;
    };

    // 길이 확인
    const isLength = (val, min, max) => {
        return val.length >= min && val.length <=max;
    }

    // 유효한 값으로 이루어져 있는지 확인
    const isPattern = (value, pattern) => {
        return pattern.test(value);
    };

    // 에러 메시지 반환해주는 함수
    const getErrorMsg = (type, val, pattern, min=0, max=0) => {
        let msg = "";
        if (!isValid(val)) msg = `${type} 을/를 입력해주세요.`;
        else if (min && max && !isLength(val, min, max)) msg = `${type}의 글자 수는 ${min}이상 ${max}이하 입니다.`;
        else if (!isPattern(val, pattern)) msg = `잘못된 형식의 ${type} 입니다, 다시 입력해주세요.`;
        return msg;
    };

    const email = inputValDict["email"];       // 이메일
    const username = inputValDict["username"]; // 닉네임
    const password = inputValDict["password"]; // 비밀번호

    let errorMsg = "";
    // 이메일
    errorMsg = getErrorMsg("이메일", email, /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/);
    console.log(errorMsg)

    // 닉네임 - 영문(대문자, 소문자), 숫자, 한글만 가능
    if (errorMsg === "") errorMsg = getErrorMsg("닉네임", username, /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]*$/, 4, 10);
    
    // 비밀 번호 - 영문(대문자, 소문자), 숫자만 입력 가능
    if (errorMsg === "") errorMsg = getErrorMsg("비밀번호", password, /^[a-zA-Z0-9]*$/, 8, 15);

    return errorMsg;
}
export default Validator;