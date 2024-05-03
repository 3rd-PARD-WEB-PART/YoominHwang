import { atom, selector } from "recoil";

export const myBday = atom({
  key: 'myBday',
  default: "",
});

export const myEmail = atom({
  key: 'myEmail',
  default: "",
});

export const myDomain = atom({
  key: 'myDomain',
  default: "",
});

export const myGender = atom({
  key: 'myGender',
  default: -1,
});

export const myHomepage = atom({
  key: 'myHomepage',
  default: "",
});

export const myIntro = atom({
  key: 'myIntro',
  default: "",
});

export const myNickname = atom({
  key: 'myNickname',
  default: "",
});

export const myProfile = atom({
  key: "myProfile",
  default: "",
});

export const myInfoSelector = selector({
  key: 'myInfoSelector',
  get: ({get}) => {
    const email = get(myEmail);
    const domain = get(myDomain);
    const gender = get(myGender);
    const bday = get(myBday);
    const homepage = get(myHomepage);
    const intro = get(myIntro);
    const nickname = get(myNickname);
    const profile = get(myProfile);

    return {email, domain, gender, bday, homepage, intro, nickname, profile};
  },
  set: ({set}, newValue) => {
    set(myEmail, newValue.email);
    set(myDomain, newValue.domain);
    set(myGender, newValue.gender);
    set(myBday, newValue.bday);
    set(myHomepage, newValue.homepage);
    set(myIntro, newValue.intro);
    set(myNickname, newValue.nickname);
    set(myProfile, newValue.profile);
  },
});