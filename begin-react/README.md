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
