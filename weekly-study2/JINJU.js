function addPlace() {
    let placeName = document.getElementById('newPlaceName').value;
    let placeDesc = document.getElementById('newPlaceDesc').value;
    let placeImgUrl = document.getElementById('newPlaceImg').value;

    if (placeName.trim() === '' || placeDesc.trim() === '' || placeImgUrl.trim() === '') {
        alert('맛집 이름, 소개, 이미지 URL을 모두 입력해주세요.');
        return; // 하나라도 비어있다면 리턴
    }

    var hpList = document.querySelector('.hpList'); // 맛집 리스트를 담고 있는 컨테이너 선택
    var newPlace = document.createElement('div');
    newPlace.classList.add('li');

    // 입력받은 정보를 포함하는 HTML 생성
    newPlace.innerHTML = `
        <h2>${placeName}</h2>
        <img src="${placeImgUrl}" alt="사진" />
        <p>${placeDesc}</p>
        <button class="like">♥</button>
        <button onclick="removePlace(this)">맛집 삭제</button>
    `;

    hpList.appendChild(newPlace); // 새 맛집 목록 항목을 리스트에 추가
    document.getElementById('newPlaceName').value = '';
    document.getElementById('newPlaceDesc').value = '';
    document.getElementById('newPlaceImg').value = '';
    alert(placeName + ' 맛집 등록 완료!');
}

// 맛집 삭제 함수
function removePlace(button) {
    // 삭제 버튼의 부모 요소('li' 클래스를 가진 div)를 찾아서 제거
    var place = button.parentNode;
    place.remove();
    alert('삭제 완료 !');
}
