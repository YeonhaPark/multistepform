# 최종 결과물에 대한 안내

## 파일 실행 방법

#### 파일 실행에 문제가 있을 시 yonaprisca@gmail.com 으로 메일 주세요 :)

1. 폴더 압축을 푼 뒤 터미널에서 아래 명령어를 실행합니다.

```bash
npm install
```

윈도우 사용자이거나, npm으로 설치해서 오류가 날 경우 yarn으로 설치해주세요

```bash
yarn install
```

2. 로컬 환경에서 실행하기 위한 명령어입니다.

```bash
npm run start
```

yarn 사용시

```bash
yarn start
```

3. 디렉토리 구조입니다.

```bash

|-- dist: 빌드 결과물. 번들링되는 파일이 위치합니다.
|-- src : 프로젝트 소스 폴더
    |-- assets: 숨고 초기 더미데이터 json 형태의 파일
        |-- input.json: 인풋 더미데이터
        |-- output.json: 아웃풋 더미데이터(형식참고용)
    |-- components
        |-- FormType: 입력 폼 단계를 구성하는 각각의 기능 컴포넌트
            |-- CheckBox.js: 체크박스 타입
            |-- Radio.js: 라디오 타입
            |-- Text.js: 인풋 텍스트 타입
            |-- SelectBox.js: 셀렉트박스 타입
            |-- index.js: 위 파일들의 export를 위한 파일
        |-- StepBody: multistep 컴포넌트를 렌더링하는 중간 컴포넌트
            |-- StepBody.js
            |-- StepBody.scss
    |-- pages: 전체 폼을 감싸는 Wrapper.
        |-- Main.js
        |-- Main.scss
    |-- styles: 공통되는 스타일을 모아놓은 폴더
    |-- index.js: 앱이 시작되는 구간이며 ReactDOM.render를 호출하여 화면에 그려주기 위한 파일입니다.
    |-- index.html: 이 파일을 템플릿으로 최종 html파일이 번들링됩니다.
|-- package.json: 프로젝트에 사용된 dependencies, devdependencies가 열거되어 있습니다.
|-- webpack.config.js: 웹팩 설정 파일입니다. 설정에 대한 설명을 파일 안에 적어두었습니다.
|-- readme.me: 리드미파일

```
