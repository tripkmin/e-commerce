## English

### 🔗 Links

- Github URL: [Click here](https://github.com/tripkmin/e-commerce)
- Live Site URL: [Click here](https://e-commerce-rose-mu.vercel.app/)

### 🛠️ Technologies Used

- `React JS`
- `TypeScript`
- `Styled-Components`
- `HTML5`, `CSS`
- `Swiper JS`

### 🗒️ Core Features

- Add/Remove items to/from the cart
- Switch main image when clicking on a small thumbnail
- Display a lightbox gallery when clicking on the main image
- Responsive layout

### ⚡ Additional Features

- User's order information is stored and managed in Context API.
- Implementation of a slider that works on both desktop and mobile environments
  - Slider layout changes for desktop, tablet, and smartphone.
- Ability to input order quantity via the keyboard, allowing up to 2 digits.
- Animation implemented using basic hooks without a separate animation library.
- Clicking on the backdrop automatically closes the cart, mobile menu, and lightbox gallery.

### ‼️ To-Do for Improvement

- When removing a Cart item, Navbar gets re-rendered due to an update in ProductContext, causing the CartBox to close.
- Faced difficulty in implementing unmount animation using basic hooks.

## 한국어

### 🔗 링크

- Github URL: [여기를 클릭해주세요](https://github.com/tripkmin/e-commerce)
- Live Site URL: [여기를 클릭해주세요](https://e-commerce-rose-mu.vercel.app/)

### 🛠️ 사용한 기술

- `React JS`
- `TypeScript`
- `Styled-Components`
- `HTML5`, `CSS`
- `Swiper JS`

### 🗒️ 기본 기능

- 카트 품목 추가/제거
- 작은 썸네일 클릭 시 메인 이미지로 전환
- 메인 이미지 클릭 시 라이트박스 갤러리 출현
- 반응형 레이아웃

### ⚡ 추가 기능

- 회원의 주문 정보는 ContextAPI에 저장되어 관리되도록 함.
- 데스크탑, 모바일 환경 모두에서 동작하는 슬라이더 구현
  - 데스크탑, 태블릿, 스마트폰에 맞게 슬라이더 레이아웃이 변경됨.
- 주문 수량을 키보드로 입력할 수 있으며 2자리까지만 허용.
- 별도의 애니메이션 라이브러리 없이 기본 hooks를 이용해 애니메이션 구현.
- 카트, 모바일 메뉴, 라이트박스 갤러리 출현 시 Backdrop 클릭하면 자동으로 사라짐.

### ‼️ 보완해야 할 기능

- Cart 아이템을 지웠을 때, ProductContext의 업데이트로 Navbar가 리렌더링되어 CartBox가 꺼짐.
- 기본 hooks로 컴포넌트 언마운트 애니메이션을 구현하는 데 어려움을 겪음.
