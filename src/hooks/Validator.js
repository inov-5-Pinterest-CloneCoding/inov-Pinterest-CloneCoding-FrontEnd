function Validator(inputValDict) {
    // 유요한 값으로 이루어져 있는지 확인하는 함수
    const validateValue = (value, pattern) => {
        let isOk = true;
        if (value === "") isOk = false; // 값이 없는 경우
        else isOk = pattern.test(value) // 조건에 부합하지 않는 경우
        return isOk;
    };

    const email = inputValDict["email"]; // 이메일
    const username = inputValDict["username"]; // 닉네임
    const password = inputValDict["password"]; // 비밀번호

    let errorMsg = "";
    // 이메일
    if (!validateValue(email, /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/)) errorMsg = '잘못된 형식의 이메일 입니다. 다시 입력해주세요.';

    // 닉네임 - 영문(대문자, 소문자), 숫자, 한글만 가능
    else if (!validateValue(username, /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]*$/)) errorMsg = '잘못된 형식의 닉네임 입니다. 다시 입력해주세요.';

    // 비밀 번호 - 영문(대문자, 소문자), 숫자만 입력 가능
    else if (!validateValue(password, /^[a-zA-Z0-9]*$/)) errorMsg = '잘못된 형식의 비밀번호 입니다. 다시 입력해주세요.';

    return errorMsg;
}
export default Validator;