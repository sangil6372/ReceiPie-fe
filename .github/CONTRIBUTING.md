# Commit Message 규칙

## 커밋 메시지 형식

커밋 메시지는 **`<타입>(scope): <주제>`** 형식 지켜야 함!

# 주의 사항

- 주제는 영어일때 **소문자**로 시작!
- scope 는 **선택사항** : 기능을 작성!  
  예시 :  
  feat(auth): 로그인 기능 추가  
  fix(user-profile): 이메일 안 보임  

## 커밋 타입

- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 문서 수정 (코드 변경 없음)
- style: 코드 스타일 (띄어쓰기, 세미콜론 등) 변경
- refactor: 코드 리팩토링 (기능 변화 없음)
- perf: 성능 향상
- test: 테스트 코드 추가
- build: 빌드 시스템, 외부 의존성 변경
- ci: CI 설정 변경 (GitHub Actions)

- chore: 빌드 업무 수정, 패키지 매니저 수정
- revert: 이전 커밋으로 되돌리기 (오류 발생 시)

## commit 예시

feat: user-login page 작성  
fix(store): 데이터 반응형 미작동 수정  
docs: update README.md  
style: 작은 따옴표에서 큰 따옴표로 수정  
refactor(filename): views -> pages 로 이름 변경  
