### 1장. 리액트 입문

**04. JSX의 기본 규칙 알아보기**

- JSX는 리액트에서 생김새를 정의할 때, 사용하는 문법이다. 얼핏보면 HTML 같이 생겼지만 실제로는 JavaScript 이다.
- **규칙**
    - 태그는 꼭 닫혀야 한다.

        ```jsx
        function App() {
          return (
        		<div>
        		  <Hello />
        		  <Hello />
        		  <Hello />
        		  <input />
        		  <br />
        		</div>
        	);
        }
        ```

    - 두 개 이상의 태그는 무조건 하나의 태그로 감싸져야 한다.

    ```jsx
    function App() {
      return (
        <div>
          <Hello />
          <div>안녕히계세요</div>
        </div>
      );
    }
    ```

    - 태그를 작성 할 때 이름 없이 작성을 하게 되면 Fragment가 만들어 진다. Fragment는 브라우저 상에서 따로 별도의 엘리먼트로 나타나지 않는다.

    ```jsx
    function App() {
      return (
        <>
          <Hello />
          <div>안녕히계세요</div>
        </>
      );
    }
    ```

    - JSX 내부에 자바스크립트 변수를 보여줘야 할 때에는 {}으로 감싸서 보여준다.

    ```jsx
    function App() {
      const name = 'react';
      return (
        <>
          <Hello />
          <div>{name}</div>
        </>
      );
    }
    ```

    - style과 ClassName 를 설정하는 방법은 HTML에서 설정하는 방법과 다르다.

    ```jsx
    function App() {
      const name = 'react';
      const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 24, // 기본 단위 px
        padding: '1rem' // 다른 단위 사용 시 문자열로 설정
      }

      return (
        <>
          <Hello />
          <div style={style}>{name}</div>
    			<div className="gray-box"></div>
        </>
      );
    }
    ```

    - JSX 내부 주석은 {/* */} 형태로 작성한다.

**10. useRef로 특정 DOM 선택하기**

- DOM을 직접 선택할 때 사용 된다. 예를 들어, 특정 엘리먼트 크기를 가져와야 한다던지, 스크롤바 위치를 가져오거나 설정해야된다던지, 또는 포커스를 설정해야된다던지, D3, chart.js 같은 그래프 관련 라이브러리 등의 외부 라이브러리를 사용해야 할 때
- 컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리

**16. useEffect를 사용하여 마운트/언마운트/업데이트시 할 작업 설정하기**

- useEffect는 마운트/언마운트/업데이트시 사용
- 사용하는 경우
    - 마운트
        - props 로 받은 컴포넌트의 로컬 상태로 설정
        - 외부 API 요청(REST API)
        - 라이브러리 사용(D3, Video.js 등..)
        - setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약
    - 언마운트
        - setInterval, setTimeout 을 사용하여 등록한 작업들 clear 하기(clearInterval, clearTimeout)
        - 라이브러리 인스턴스 제거

**18. useCallback을 사용하여 함수 재사용하기**

- 컴포넌트에서 props 가 바뀌지 않았으면 Virtual DOM에 새로 렌더링하는 것 조차 하지 않고 컴포넌트의 결과물을 재사용하는 최적화 작업에 사용된다. 이 작업을 하기 위해서는, 함수는 재사용하는 것이 필수다.

**19. React.memo 를 사용한 컴포넌트 리렌더링 방지**

- 컴포넌트의 props 가 바뀌지 않았다면, 리렌더링을 방지하여 컴포넌트의 리렌더링 성능 최적화에 사용

**20. useReducer 를 사용하여 상태 업데이트 로직 분리하기**

- useReducer을 사용하면 컴포넌트 바깥에 작성할 수도 있고, 다른 파일 작성 후 불러올 수 있다.
- reducer 는 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수이다.
    - reducer 에서 return 하는 상태는 컴포넌트가 지닐 새로운 상태가 된다.
- useReducer VS useState
    - 상황에 따라 사용하면 된다.
    - 컴포넌트에서 관리하는 값이 딱 하나이고, 그 값이 단순한 경우는 useState로 관리하는 것이 편할 것이다.
    - 만약, 관리하는 값이 많아지고 구조가 복잡해진다면 useReducer을 사용하는 것이 맞을 것이다.
