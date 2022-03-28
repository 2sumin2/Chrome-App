# Chrome-App
### Vanilla JS로 Chrome-App 만들기

<ol>
  <span><li>로컬 스토리지를 사용한 로그인</li></span>
  ![image](https://user-images.githubusercontent.com/75177553/160424593-5ff8d9b6-94f7-4171-b9c1-9e8cd19999ff.png)
  <ul>
    <li>사용자 이름 입력받기</li>
        <ul>
          <li>로컬 스토리지에 사용자 이름이 저장되어 있지 않다면 입력받음</li>
        </ul>
      <li>사용자 이름 표시하기</li>
        <ul>
          <li>로컬 스토리지에 사용자 이름이 저장되어 있다면 로그인 하지 않고 사용자 이름 불러와서 출력하기</li>
        </ul>
  </ul>
  ![image](https://user-images.githubusercontent.com/75177553/160425535-849ad6a8-9acb-48ec-819e-16b2ce2b7bd1.png)
  <span><li>실시간 시계</li></span>
  <ul>
    <li>오늘 날짜 표시</li>
    <li>현재 시간 표시, 매초마다 업데이트</li>
  </ul>
  <span><li>디데이</li></span>
  <ul>
    <li>로컬 스토리지에 저장되어 있는 디데이가 있으면 출력</li>
  </ul>
  
  <span><li>메모</li></span>
  <ul>
    <li>로컬 스토리지에 저장되어 있는 메모가 있으면 출력</li>
  </ul>
  
  <span><li>날씨와 위치 (geolocation)</li></span>
  <ul>
    <li>현재 위치한 도시와 현재 기온 표시</li>
    <li>현재 날씨 아이콘 표시</li>
  </ul>
  
  <span><li>배경 색상 변경</li></span>
  <ul>
    <li>배경 색상 랜덤 출력</li>
    <li>Color버튼으로 원하는 배경색 선택 후 출력</li>
  </ul>
  
  <span><li>로컬 스토리지를 사용한 투두리스트</li></span>
    <ol>
    <li>주간 투두 리스트</li>
    <ul>
      <li>요일별로 할일 입력받기</li>
      <ul>
        <li>빈칸은 입력되지 않음</li>
        <li>할 일 목록에 출력</li>
        <li>로컬 스토리지에 저장</li>
      </ul>
      <li>할일 삭제</li>
      <ul>
        <li>x 버튼으로 목록과 로컬 스토리지에서 삭제</li>
      </ul>
      <li>완료된 일은 체크</li>
      <ul>
        <li>빈칸 버튼을 체크표시로 변경</li>
        <li>로컬 스토리지에 완료된 일으로 업데이트</li>
      </ul>
      <li>목록 전체 삭제</li>
      <ul>
        <li>주간 할일 목록 내용 전체 삭제</li>
      </ul>
    </ul>
    <li>월간 투두 리스트</li>
      ![image](https://user-images.githubusercontent.com/75177553/160425668-88aca44f-5dc4-41c9-9119-2b9bbe541f29.png)
    <ul>
      <li>이번 달의 달력 출력</li>
      <ul>
        <li>오늘 날짜에 해당하는 날은 배경책 채워짐</li>
        <li>왼쪽 화살표 버튼 누르면 이전 달의 달력 표시</li>
        <li>오른쪽 화살표 버튼 누르면 다음 달의 달력 표시</li>
      </ul>
      <li>날짜별로 할일 입력받기</li>
      <ul>
        <li>빈칸은 입력되지 않음</li>
        <li>할 일 목록에 출력</li>
        <li>로컬 스토리지에 저장</li>
      </ul>
      <li>할일 삭제</li>
      <ul>
        <li>x 버튼으로 목록과 로컬 스토리지에서 삭제</li>
      </ul>
      <li>완료된 일은 체크</li>
      <ul>
        <li>빈칸 버튼을 체크표시로 변경</li>
        <li>로컬 스토리지에 완료된 일으로 업데이트</li>
      </ul>
      <li>목록 전체 삭제</li>
      <ul>
        <li>월간 할일 목록 내용 전체 삭제</li>
      </ul>
        </ul>
    </ul>
  </ol>

  <span><li>창 크기에 따른 이벤트</li></span>
  <ul>
    <li>sidebox와 mainbox</li>
    <li>sidebox숨기기</li>
  ![image](https://user-images.githubusercontent.com/75177553/160425827-4eec34cf-a8c9-4e57-9780-6da9fbbfc6ae.png)
    <li>sidebox숨기고 주간task에서 오늘날짜에 해당하는 요일만 보이기</li>
  ![image](https://user-images.githubusercontent.com/75177553/160425917-cc657d67-7a6b-4879-890f-372b79fe027d.png)
  </ul>
 </ol>
