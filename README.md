# [**Project 4**] 오드컨셉 실습 과제

## 🔗 배포 주소

- 아래 URL을 클릭하면 배포된 페이지로 이동합니다.

*과제 1 과제 2가 모두 포함되어 있습니다. (Header 오른쪽 상단 과제 2로 이동 클릭 시 과제 2 확인 가능)

https://oddconcepts-fe.netlify.app/



<br>

## ****⚙****개발 환경

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">

<br>

## 🧑 참여 멤버

- 김도연 : 과제 1 - 컴포넌트 및 스타일 구현 
- 유지수 : 과제 1 - 언어 팩 생성 및 페이지/컴포넌트 취합
- 손한빈 : 과제 1 - 페이지네이션, 데이터 fetching 구현 
- 박세은 : 과제 1 - 검색 및 필터링 기능 구현
- 유혜정 : 과제 2 구현

<br>

## 🕹  설치 및 시작방법

```
# install dependencies
 $ npm install

# serve with hot reload at localhost:3000
 $ npm start
```

<br>

## 📝 구현 목록

## 📌 문제 1

### **검색 기능**

- `keyword` 검색

![키워드검색](https://user-images.githubusercontent.com/81206124/156719073-4523d9f2-61e5-43a5-b849-dd4184c5fc80.gif)


    원 페이지
        - product.json의 category_names와 일치하거나 유사한 것 나열 (클릭 시 url 이동)
        - 검색어 강조
        - 페이지네이션
- `image_url` / `product_code` 검색

![url검색](https://user-images.githubusercontent.com/81206124/156718321-9838a257-430d-4006-851a-bc9840ea4d65.gif)![번호검색](https://user-images.githubusercontent.com/81206124/156718625-8c84984a-f347-4be2-99ec-f826c9897e67.gif)


    - Left Aside
        - 검색한 것과 정확히 일치한 상품 이미지 (클릭 X)
        - ITEMS 및 ATTRIBUITES 나열
    - Right Aside
        - 검색한 것과 카테고리가 일치하거나 유사한 것들 나열 (클릭 시 url 이동)
        - 페이지네이션

### **라우팅**

- 리스트 페이지에서 아이템 클릭 시 image url로 이동 (디테일 페이지 X)
- PXL 로고 클릭 시 검색 창으로 다시 돌아오기

### **기타**

- 반응형 구현
- 데이터 로딩 스피너 추가 및 다른 액션 차단
- 캐시 사용하여 새로고침 시에 http 요청하지 않고 캐시된 데이터 사용
- url 검색 쿼리 네이밍 직관성

<br>

## 📌  문제2

이미지의 특정 영역을 드래그해 선택 후 선택한 영역의 이름 붙이기

- 지정한 영역 수정(삭제, 이름변경, 크기변경 등)
- 페이지 reload시에도 지정한 영역 유지

`영역을 처음부터 설정할 경우`

![1](https://user-images.githubusercontent.com/81206124/156720063-1e2d2d80-b447-4839-8216-5536cac30ceb.gif)


`영역을 추가할 경우`

![2](https://user-images.githubusercontent.com/81206124/156720353-55111b65-ff46-4bad-8e62-e8bc5bec96a5.gif)


<br>

## 🗂 프로젝트 구조
```
📁src
│  App.js
│  index.js
│  reset.css
│
├─📁components
│	│ Tag.js
│	│ ItemCard.js
│	│ ItemGrid.js
│	│ Detail.js
│	│ Loader.js
│	└─Paginator.js
│
├─📁pages
│      SearchHome.js
│      Result.js
├─📁hooks
│	└─useFetch.js
│			
└─📁utils
	│ searchItems.js
	└─queryUtils.js
```
