### React

1. 동적 UI

html, css로 미리 디자인완성<br>
UI 현재 상태를 state로 저장<br>
state에 따라 UI가 어떻게 보일지 작성

---
리턴문 안에선 기존 자바스크립트 코드 X

---

#### map()
1. array 자료 갯수만큼 함수안의 코드 실행
2. 함수의 파라미터는 array안에 있던 자료임
3. return안에 코드 작성시 array로 담아줌
4. 파라미터 첫번째 인자는 array데이터, 두번째 인자는 0,1,2 처럼 순번

#### props
1. props는 부모 -> 자식 관계만 전달 가능
2. state를 각각의 함수가 다 써야한다면 최상위 함수에 넣어야 함(부모->자식밖에 안되니까)
3. 물론 Context 배우기 전