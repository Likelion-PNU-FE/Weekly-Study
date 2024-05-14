// 맛집추가 버튼
document.getElementById('addbtn').addEventListener('click', function () {
    //입력된 값 저장
    const name = document.getElementById('name').value;
    const content = document.getElementById('content').value;
    const image_url = document.getElementById('image_url').value;

    // 맛집칸 생성
    const res_section = document.createElement('div');
    res_section.classList.add('res_section');
    //맛집이름
    const restaurant = document.createElement('h2');
    restaurant.classList.add('restaurant');
    restaurant.innerText = name;
    res_section.appendChild(restaurant);
    //맛집이미지
    const res_image = document.createElement('div');
    res_image.classList.add('res_image');
    const restaurant_image = document.createElement('img');
    restaurant_image.classList.add('restaurant_image');
    restaurant_image.src = image_url;
    restaurant_image.alt = name;
    res_image.appendChild(restaurant_image);
    res_section.appendChild(res_image);
    //맛집소개
    const restaurant_content = document.createElement('p');
    restaurant_content.classList.add('restaurant_content');
    restaurant_content.innerText = content;
    res_section.appendChild(restaurant_content);
    //좋아요버튼
    const like_btn = document.createElement('button');
    like_btn.innerText = '❤️';
    res_section.appendChild(like_btn);
    //맛집삭제 버튼
    const delete_btn = document.createElement('button');
    delete_btn.innerText = '맛집 삭제';
    delete_btn.classList.add('delete_btn');
    res_section.appendChild(delete_btn);
    //맛집리스트에 추가
    res_main.appendChild(res_section);
    //추가 후 입력된 내용을 지우고 alert창을 띄움
    document.getElementById('name').value = ' ';
    document.getElementById('content').value = ' ';
    document.getElementById('image_url').value = ' ';
    alert(`${name} 맛집 등록 완료!`);
});

// 맛집 삭제 버튼
const res_main = document.querySelector('#res_main');

res_main.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete_btn')) {
        event.target.parentElement.remove();
        alert('삭제 완료!');
    }
});
