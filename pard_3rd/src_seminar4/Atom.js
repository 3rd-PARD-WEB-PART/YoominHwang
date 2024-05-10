import { atom, selector } from 'recoil';

export const myInfoAge = atom({
    key: "myInfoAge",           // 이름 똑같이 해주는 게 좋음
    default: 22,
});

export const myInfoName = atom({
    key: "myInfoName",
    default: '황유민',
});

export const myInfoSelector = selector({
    key: 'myInfoSelector',
    get: ({get}) => {
        const age = get(myInfoAge);
        const name = get(myInfoName);
        return {age, name};
    },
    set: ({set}, newValue) => {
        set(myInfoAge, newValue.age);
        set(myInfoName, newValue.name);
    },
});

// 여러 데이터 관리하는 하나의 아톰도 가능