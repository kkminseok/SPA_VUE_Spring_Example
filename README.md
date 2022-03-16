# SPA_VUE_Spring_Example
실전 SPA 개발 Vue.js3  + 스프링 부트 책 내용. 개발하다가 번아웃오면 생각없이 공부하기 위해삼.

---

## Ch2_1 - var 선언자 특성

- 호이스팅  : 변수의 정의가 그 범위에 따라 선언과 할당으로 분리되는 것을 의미. 선언이 함수의 최상위로, 함수 바깥에서 정의된 경우 전역 컨텍스트의 최상위로 변경됨.

## Ch2_2 - let 선언자 특성.

- 일반적인 특성 : 중복선언 불가, 호이스팅 불가, 블록 외부에서 사용 불가.

## Ch2_3 - const

- 특성 : 선언과 동시에 초기화, 중복 선언 불가

## Ch2_4 - Symbol

- 자기 자신을 제외한 그 어떤 값과도 다른 유일무이한 값. 설명을 추가할 수 있고, 확인 가능.

## Ch2_5 - 화살표 함수

- 화살표 함수설명, 매개변수가 있을 때, this와의 관계

## Ch2_6 - for of 문

- for of 문에 대한 설명. for in 과 달리 프로퍼티를 나열하지 않는다.

## Ch2_7 - 비구조화 할당

- 비구조화에 대해서, 구조화로 변수 선언하는법, 이름이 생략도 가능. 기본값 지정도 가능.

## Ch2_8 - Map

- map, size, get, set, delete, has, foreach, clear, keys(), values(), entries() 설명

## Ch2_9 - Set

- Set에 대해/ size, add,has, foreach, clear, keys(), entries(), delete 설명

## Ch2_10 - 매개변수 함수

- 매개변수 여러개 들어올 때, 매개변수 기본값 설정

## Ch2_11 - 템플릿 리터럴

- ₩ 사용법, 플레이스 홀더 사용법
  
## Ch2_12 - 클래스 구문

- 클래스 연습 / 선언, 접근자, 정적메소드...

## Ch2_13 - 클래스 상속

- 클래스 연습 / 상속에 대하여, super(), 메소드 재정의

## Ch2_14 - 전개 연산자

- 전개 연산자에 대한 내용. 신기하지만 실전에 쓰기 힘들것 같음..  


## Ch2_15 - 객체 속성 생략 지정

- 객체리터럴로 객체 생성하는 법 여러가지. 

## Ch2_16 - 프로미스

- 프로미스와 비동기에 대해서.. 지겹도록 알려줌.

---

## Ch3_4 Vue인스턴스

- vue생성 방식.
    - 1. el속성을 이용.
    ```js
    new Vue(){
        el : ~
    }
    ```
    - 2. 인스턴스 마운트 메서드를 사용하여 생성(new Vue~.$mouunt) 이 경우는 UI 조작이나 통신 등의 작업을 진행한 후에 화면 요소가 생성되면 $mount() 뷰 인스턴스 메서드를 이용하여 마운트
    ```js
    new Vue({

    }).$mount('#app')
    ```
    - 3. vm 변수를 선언하여 생성 -> 이 경우 뷰 인스턴스 생성 후 뷰 인스턴스를 활용하고자 할 때 사용.
    ```js
    var vm = new Vue({

    })
    vm.$mount('#app')
    ```

## Ch3_5 Vue 인스턴스 옵션

- vue 구성방식에는 컴포지션 api(setup 함수를 이용한) 방식과 optionAPI방식이 있음.
- option API
    - template : 화면 요소를 정의하는 속성
    - data : 인스턴스의 상태/데이터
    - el : Vue인스턴스가 마운트되는 화면 요소
    - filters : 데이터를 형식화하는 함수 정의
    - methods : 이벤트 발생시 처리하는 함수 정의
    - computed : 데이터로부터 계산되어지는 값.
    - created : 뷰 인스턴스가 생성되자마자 실행할 로직을 정의할 수 있는 라이프 사이클 속성
  
## Ch3_6 Vue Life Cycle

- 컴포지션 api, option api 방식에 따라 확인법이 다름.
    - beforeCreated : 인스턴스가 생성되고 초기화 전 단계(data, methods 접근 불가)
    - created : data, methods 접근 가능.
    - beforedMount : el 속성에 지정한 화면 요소에 출력하기 위한 전 단계
    - mounted : el 속성에 지정한 화면 요소가 출력되는 단계
    - beforeupdated : 관찰하고 있는 데이터가 변경되면 가상 DOM으로 화면을 다시 그리기 전 단계
    - updated : 그린 단계
    - beforeDestory : 인스턴스 데이터를 삭제하기 좋은 단계 
    - destoryed : 뷰 인스턴스에 정의한 모든 속성과 하위 선언된 인스턴스 모두 삭제

## Ch3_7 Vue Data

- Data 속성에 대한 이야기.
  - 컴포지션 방식으로 data선언 방식 => 나는 익숙해져서 그런지 불편
  - Option API방식으로 data선언 => 내가 알고 있는 것.

## Ch3_8 Vue Template

- v-bind, v-for에 대한 간단한 실습.
  - 컴포지션 방식, Option API를 사용하여 실습.
  - v-bind는 아이디, 클래스, 스타일 등의 HTML 속성 값에 뷰 데이터를 연결할 때 사용. 형식은 v-bind 속성을 지정할 HTML 속성 앞에 접두사로 v-bind:를 붙여준다.

## Ch3_9 Vue Computed 속성

- computed에 대한 설명
  - computed에 의해 한 번 계산된 값은 캐시기능을 지원하여 값이 변하지 않으면 캐시된 값을 사용하기에 렌더링 속도 향상에 기여함. 인터넷이 연결되지 않아도 자동으로 감지하여 계산한다는게 신기
  - 컴포지션 방식, Option API 방식
  - reduce()가 나온다. 콜백함수로 
    > <https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce>에 자세히 나옴.

## Ch3_10 Vue Methods 속성

- methods에 대한 설명
  - 컴포지션 방식, Option API방식.

## Ch3_11 Vue Watch 속성

- watch속성에 대한 설명 / 두가지 방식
  - 데이터 값의 변화를 감지하여 자동으로 로직을 수행하게 함.
  - 데이터 호출과 같이 시간이 오래걸리는 비동기 작업에 적합.

## Ch3_12 Vue Directive

- Directive에 관한 설명
  - v-if : 지정한 뷰 데이터 값의 참, 거짓 여부에 따라 HTML 태그를 화면에 표시하거나 표시하지 않음.
  - v-for : 지정한 뷰 데이터의 개수만큼 해당 HTML 태그를 반복 출력
  - v-show : v-if와 다르게 돔에서 제거하지 않고 display:none처리해서 안 보여줌.
  - v-bind : HTML 태그의 기본 속성과 뷰 데이터 속성을 연결
  - v-on : 화면 요소의 이벤트를 감지하여 처리
  - v-model : 폼에 입력한 값을 뷰 인스턴스의 데이터와 즉시 동기화함. 'input', 'select', 'textarea' 태그에만 사용가능

## Ch3_13 Vue Event

- event에 대한 설명
  - submit.prevent -> 페이지를 다시 로드하지 않음.
  - v-on:input -> 입력한 값이 계속 v-bind에 매핑
  - v-on:change -> 입력한 후에 입력요소에 키 포커스가 사라지면 반영

## Ch3_14 Vue Formbinding

- 폼 바인딩에 대한 설명
  - 크게 텍스트 바인딩, 체크박스 바인딩, 셀렉트 박스 바인딩, 라디오 버튼 바인딩, 등이 있다.

## Ch3_15 Vue Components

- 컴포넌트에 대한 설명
  - 케밥 케이스(ex: board-register-form), 파스칼 케이스(BoardRegisterForm)가 있는데, 케밥 케이스로 명명된 컴포넌트는 HTML에서 그대로 사용.
  ```js
  <board-register-form @submit="onSubmit">
  ```

  파스칼 케이스 경우 위처럼 사용 가능하고, 다음과 같이도 사용 가능
  ```js
  <BoardRegisterForm @submit="onSubmit">
  ```

- 싱글 파일 컴포넌트(SFC)
  - 하나의 파일로 Vue의 컴포넌트를 나타내는 방식으로 정의

- Vue.js 3 이전 방식
  - 전역 컴포넌트 등록 방식
    ```js
    Vue.component('컴포넌트 이름',{
      //컴포넌트 내용
    })
    ```
  - 지역 컴포넌트 등록 방식
    ```js
    new Vue({
      components:{
        '컴포넌트 이름' : 컴포넌트 내용
      }
    })
    ```
지역과 전역은 복습을 할 필요가 있음. 

## Ch3_16 props

- props에 대한 설명.
  - 상위-> 하위 컴포넌트 v-bind로 매핑, 하위에서는 props으로 받을 데이터를 선언해놔야함.

## Ch3_17 Vue Provide/inject + readonly

- Provide, inject에 대한 설명
  - 공유 데이터를 선언(Provide) 하위 컴포넌트는 Inject을 통하여 받아올 수 있음.
  - readonly속성을 넣으면 inject한 컴포넌트는 해당 데이터 수정이 불가.
  
## Ch3_18 Vue event 전달

- 하위컴포넌트에서 상위 컴포넌트로 이벤트 전달할 때 emit을 사용. 컴포지션 방식에서는 추가로 context를 사용.

## Ch3_19 Vue ref, reactive

- ref,reactive라는 반응형 변수 선언 방법

---

## Ch4 TodoAPP

- vuex사용, Ch3에서 배웠던 내용 학습.
  - dispatch(), actions으로 연결. actions내에서는 mutations을 호출,커밋
- 끝 
  - 딱히 뭘 배웠는지 모르겠네. 책 괜히 샀나.
  - 일단 읽자.

## Ch5 CRUD board APP

- routes 사용, axios사용
- CRUD 개념잡기 좋았지만, 아쉬운건 RESTAPI서버를 직접 구축하지는 않음.
- 저자사이트에서 java API서버를 jar파일로 제공.


## Ch6 File upload Board Application

- 파일 업로드 하는 방법을 배움

## Ch7 Image Market Application

