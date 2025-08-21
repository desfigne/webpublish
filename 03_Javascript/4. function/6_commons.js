/**
 * commons 폴더에 저장된 자바스크립트 모듈 임포트
 */

// import {} from ''; 공식 폼, {} 안에는 함수를 넣어 가져옴

import { singleGugudan, multiGugudan } from '../commons/gugudan.js';

// 또는 디폴트 선언 방식
import singleGugudanDefault, { singleGugudan, multiGugudan } from '../commons/gugudan.js';

singleGugudan(3);
singleGugudan(7);
singleGugudanDefault(7);

multiGugudan(3, 7); // 3단 ~ 7단까지 출력