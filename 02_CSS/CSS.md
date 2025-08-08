## 1. CSS - HTML로 생성된 틀에 모양, 스타일을 입히는 속성
- HTML 태그에 속성으로 추가하거나, 별도의 파일로 분리하여 생성



## 2. 사용법
- Inline 방식 : HTML 태그에 style 속성을 추가하여 작성
ㄴ syntax> style = "프로퍼티 : 값;"
- Internal 방식 : HTML 파일의 head 태그에 페이지에서 호출되는 style 속성을 정리해둠
ㄴ 문서에서 바로 읽어서 스타일을 적용하므로 즉시 적용됨
- External 방식 : style 속성을 별도의 파일로 생성하여 호출
ㄴ 별도의 파일을 브라우저에서 캐시로 다운로드 받아 이전에 다운로드 받아둔 css 파일의 스타일을 적용해 최신 버전의 스타일을 가져 오지 않을 가능성이 있음



## 3. 선택자(Selector) - Internal, External 에서 사용됨
- 형식 : 선택자(selector) { 프로퍼티(Property) : 값(value); }
- selector 종류 : HTML 태그, Class(.), Id(#)-이벤트 처리할 때 더 많이 사용
ㄴ All selector (또는 Universal selector라 칭함) : * - body 안의 모든 태그들을 선택해 스타일 부여(전체 폰트 타입, 레이아웃 사이즈, 여백을 조정 ...)
ㄴ Tag selector : HTML 태그를 선택하여 스타일 정의
ㄴ Class selector : HTML 태그에 class 속성을 추가하여 스타일 정의, style 태그에서는 dot(.)으로 선택
ㄴ Id selector : HTML 태그에 id 속성을 추가하여 스타일 정의, style 태그에서는 sharph(#)으로 선택
ㄴ descendant(자손) selector : HTML 태그의 포함관계를 통해 부모 자식 태그로 구분하여 선택, 부모와 자식을 "공백"으로 구분 (뎁스 제한없이 가능)
ㄴ child(자식) selector : HTML 태그의 포함관계를 통해 부모 자식 태그로 구분하여 선택, 부모와 자식을 ">" 으로 구분 (하위 뎁스를 1단계까지만 인식해 처리)
ㄴ Sibling selector (형제 선택자) : HTML 태그의 포함관계 중 같은 레벨에 있는 태그들을 형제로 구분, 시작태그 + 형제 태그(인접한) 선택, 시작태그 ~ 형제태그(모든)
ㄴ Attribute selector(속성 선택자) : 태그의 속성값을 구분하여 스타일을 적용
ㄴ pseudo class selector : 정해진 이벤트적 요솔르 실행하면서 스타일 적용 



## 4. 단위 - Pixel, %, em, rem ...
- 픽셀(Pixel) : 고정된 길이로 설정, 화면 크기가 변경되어도 사이즈를 유지
- 퍼센트(Percent, %) : 상대적 크기로, 화면 크기가 변경되면 그 크기에 따라 퍼센트에 맞춰 사이즈를 조정
- 이엠(Em) : 부모의 크기가 픽셀로 고정되어 있는 경우, 자식은 퍼센트로 설정하여 크기를 조정
- 알(루트)이엠(Rem) : 부모의 크기가 퍼센트이면, 자식도 화면 크기 변경시 화면 크기에 맞춰 사이즈를 조정