## 구현사항

- vercel 배포를 이용해 github와 연동.
- Notion API를 이용해 해당 페이지에 데이터베이스 작업 시, 해당 내용이 자동으로 반영되도록 설정함.
- 데이터가 변경되면 server에서 pre-rendering에 반영할 수 있도록 getServerSideProps를 이용해 작업.
- next/image를 사용해 이미지 최적화.
- 전역 상태관리를 위해 Context API를 이용하여 다크모드 구현. 로컬스토리지를 이용해 현재 모드 저장.
- axios를 이용해 데이터 fetching.

## 어려웠던 점

Notion api와 axios 사용에 익숙하지 않아 기존 fetch api로 작업 했던 부분을 axios로 변경하는데 에러 발생 및 오름차순 정렬 반영 안됨.

## 해결 방법

axios 공식문서와 검색, notion api 공식 문서를 이용해 지속적으로 시도한 끝에 구현 완료.

## 참고 링크

next/image 장단점, 특징 정리하기

- [https://velog.io/@joy37/NextImage에-대해-얼만큼-알아](https://velog.io/@joy37/NextImage%EC%97%90-%EB%8C%80%ED%95%B4-%EC%96%BC%EB%A7%8C%ED%81%BC-%EC%95%8C%EC%95%84)
