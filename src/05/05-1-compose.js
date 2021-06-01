import { multiplyThree, multiplyTwo, addFour } from './05-1-currying.js';

[multiplyTwo, multiplyThree, addFour].reduce(
    function (prevFunc, nextFunc) {
        return function (value) {
            return nextFunc(prevFunc(value));
        };
    },
    function (k) {
        return k;
    },
);

////////////////////

function compose(funcArr) {
    return funcArr.reduce(function (prevFunc, nextFunc) {
        return function (value) {
            return nextFunc(prevFunc(value));
        };
    });
}

const formulaWithCompose = compose([multiplyTwo, multiplyThree, addFour]);
console.log(formulaWithCompose(3));

///////////////////////////////////////

// 실무에서 사용하는 함수 조합 기법 알아보기
// 1. arguments 를 사용하여 배열 인자 대신 나열형 인자로 함수 구조를 유연하게 만들기

function compose2() {
    const funcArr = Array.prototype.slice.call(arguments);
    return funcArr.reduce(
        function (prevFunc, nextFunc) {
            return function (value) {
                return nextFunc(prevFunc(value));
            };
        },
        function (k) {
            return k;
        },
    );
}

const formulaWithCompose2 = compose2(multiplyTwo, multiplyThree, addFour);

// 2. arguments 를 활용하여 하난의 실행 인자 value 를 다중 인자로 사용 가능하게 확장하기
function compose3() {
    const funcArr = Array.prototype.slice.call(arguments);
    return funcArr.reduce(
        function (prevFunc, nextFunc) {
            return function () {
                const args = Array.prototype.slice.call(arguments);
                return nextFunc(prevFunc.apply(null, args));
            };
        },
        function (k) {
            return k;
        },
    );
}

// 3. 전개 연산자로 더 간결하게 만들기
function compose4(...funArr) {
    return funArr.reduce(
        function (prevFunc, nextFunc) {
            return function (...args) {
                return nextFunc(prevFunc(...args));
            };
        },
        function (k) {
            return k;
        },
    );
}

// 4. 함수 조합 실행하기
const formulaWithCompose3 = compose4(multiplyTwo, multiplyThree, addFour);

console.log(formulaWithCompose3(10));
