**[Roles](https://github.com/A11yance/aria-query#elements-to-roles)**

---

`"test": "react-scripts test --env=jsdom --verbose"`

- **--env=\<environment>**
  - 모든 테스트에 사용 된 테스트 환경. 이것은 모든 파일 또는 노드 모듈을 가리킬 수 있습니다. 예 : jsdom , node 또는 path/to/my-environment.js .
- **--verbose**
  - 테스트 스위트 계층으로 개별 테스트 결과를 표시

---

**[toBeTruthy](https://jestjs.io/docs/expect#tobetruthy)**

**`.toBeTruthy()`**

.toBeTruthy값이 무엇인지 신경 쓰지 않고 부울 컨텍스트에서 값이 true인지 확인하려는 경우 사용

**`get`**

대기시간 없이 처리

**`find`**

얻을 수 있을 때까지 기다리기(비동기 처리)

**`query`**

없는 것을 테스트하고 싶은 경우

**`ByRole`**

엘리먼트의 role을 알면 되도록 Role을 사용한다(button 등)

**`ByText or ByTestID`**

위 외의 경우
