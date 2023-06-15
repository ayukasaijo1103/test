const menu=document.querySelector('#menu');


//配列
const lists=[
    'big-bg.png',
    'big-bg2.png',
    'big-bg3.png',
    'big-bg4.png',
    'big-bg5.png',
];

const content=`<div><img src="images/${lists[0]}" alt=""></div>
<div><img src="images/${lists[1]}" alt=""></div>
<div><img src="images/${lists[2]}" alt=""></div>
<div><img src="images/${lists[3]}" alt=""></div>
<div><img src="images/${lists[4]}" alt=""></div>
`;

menu.insertAdjacentHTML('beforeend',content);


$(".slider").slick({
  autoplay: true, // 自動再生
  autoplaySpeed: 4000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
  infinite: true, // 無限スライド
});