const quotes = [
  {
    quote: "질병은 입을 좇아 들어가고 화근은 입을 좇아 나온다.",
    person: "태평어람",
  },
  {
    quote: "탐욕은 일체를 얻고자 욕심내어서 도리어 모든 것을 잃어버린다.",
    person: "몽태뉴",
  },
  {
    quote: "가장 높은 곳에 올라가려면 가장 낮은 곳부터 시작하라.",
    person: "푸블릴리우스 시루스",
  },
  {
    quote: "확실한 일을 실행할 힘은 누구나 가지고 있다.",
    person: "괴테",
  },
  {
    quote: "힘으로 유지되어야 할 필요가 있는 것은 무엇이나 불운이다.",
    person: "펄벅",
  },
  {
    quote:
      "공포로 인해 타협하지 말 것이며, 남이 나에게 타협하는 것을 두려워하지도 말라.",
    person: "케네디",
  },
  {
    quote: "최대 다수의 최대 행복을 얻는 행동이 최선이다.",
    person: "허치슨",
  },
  {
    quote: "모든 날 중 가장 완전히 잃어버린 날은 웃지 않는 날이다.",
    person: "샹포르",
  },
  {
    quote: "일이 재미있으면 인생은 낙원이다. 일이 의무라면 인생은 지옥이다.",
    person: "고리키",
  },
  {
    quote: "내일에 아무런 도움이 되지 않는다면 당신의 과거는 쫓아버려라.",
    person: "오슬러",
  },
];
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");

function randomQuote() {
  const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerText = todayQuote.quote;
  person.innerText = todayQuote.person;
}

randomQuote();
setInterval(randomQuote, 2000);
