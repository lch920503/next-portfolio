## 구현사항

- vercel 배포를 이용해 github와 연동.
- Notion API를 이용해 해당 페이지에 데이터베이스 작업 시, 해당 내용이 자동으로 반영되도록 설정함.
- 데이터 패칭을 위해 getStaticProps에 revalidate를 지정하여 정적 페이지 생성 후, 다시 빌드하지 않고 페이지를 갱신.
- next/image를 사용해 이미지 최적화.
- 전역 상태관리를 위해 Context API를 이용하여 다크모드 구현. 로컬스토리지를 이용해 현재 모드 저장.
- axios를 이용해 데이터 fetching.

## next/image 장단점 및 특징

- 이미지 캐싱도 자동으로 해주고 expiration time 설정도 가능.
- next.config.js를 통해 지정된 곳에서만 이미지를 받아오며 악의적인 유저로부터 앱을 보호할 수 있음.

### 필수 props

1. src  
   정적 import된 이미지 파일일 경우 필수.  
   외부 url의 경우는 next.config.js의 domain에 추가해두어야 해당 사이트에서 이미지를 받아올때 보안에 신경쓸 수 있음.
2. width, height  
   layout이 fill 또는 정적으로 import 해오는 이미지(내부 이미지 폴더)의 경우를 제외하고는 모두 필수로 지정해야 함.

### 옵셔널 props

1. layout
   이미지를 뷰포트 기준으로 어떤 사이즈로 출력할지 지정.  
   layout이 responsive 나 fill 인 경우를 사용하기 위해 부모 요소에 따로 설정이 필요.
2. loader
   URL을 커스텀할 수 있는 함수.
   loader의 경우 src, width, quality를 props로 받아 url에 포함시킨 후 return 하게 됨.
3. quality
   1부터 100 사이의 숫자를 지정할 수 있으며, 숫자는 높아질수록 높은 퀄리티.
   default는 75.
4. priority
   LazyLoading을 자동 지원. Lazy Loading을 사용할 필요가 없는 경우는 priority를 true로 줌으로써 lazy loading을 취소시킬 수 있음.
5. placeholder
   image가 로딩되기 이전에 상태를 지정가능하고 blur, empty 중 설정 가능.

- 참고링크 [https://velog.io/@joy37/NextImage에-대해-얼만큼-알아](https://velog.io/@joy37/NextImage%EC%97%90-%EB%8C%80%ED%95%B4-%EC%96%BC%EB%A7%8C%ED%81%BC-%EC%95%8C%EC%95%84)
