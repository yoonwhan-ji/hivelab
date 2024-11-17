// Swiper 초기화
const swiper = new Swiper(".swiper-container", {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 800,
      effect: "fade",
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
  });
  
  // 상품 데이터 (슬라이드별로 동적 생성)
  const products = {
      slide1: {
          1: [
              {
                  src: "./assets/img/slide-1-1.png",
                  name: "항목 1 상품 1",
              },
              {
                  src: "./assets/img/slide-1-2.png",
                  name: "항목 1 상품 2",
              },
              {
                  src: "./assets/img/slide-1-3.png",
                  name: "항목 1 상품 3",
              },
              {
                  src: "./assets/img/slide-1-4.png",
                  name: "항목 1 상품 4",
              },
              {
                  src: "./assets/img/slide-1-5.png",
                  name: "항목 1 상품 5",
              },
              {
                  src: "./assets/img/slide-1-6.png",
                  name: "항목 1 상품 6",
              },
          ],
          2: [
              {
                  src: "./assets/img/slide-2-1.png",
                  name: "항목 2 상품 1",
              },
              {
                  src: "./assets/img/slide-2-2.png",
                  name: "항목 2 상품 2",
              },
              {
                  src: "./assets/img/slide-2-3.png",
                  name: "항목 2 상품 3",
              },
          ],
          3: [
              {
                  src: "./assets/img/slide-3-1.png",
                  name: "항목 3 상품 1",
              },
              {
                  src: "./assets/img/slide-1-2.png",
                  name: "항목 3 상품 2",
              },
              {
                  src: "./assets/img/slide-3-3.png",
                  name: "항목 3 상품 3",
              },
          ],
      },
      slide2: {
          4: [
              {
                  src: "./assets/img/slide-4-1.png",
                  name: "항목 4 상품 1",
              },
              {
                  src: "./assets/img/slide-4-2.png",
                  name: "항목 4 상품 2",
              },
              {
                  src: "./assets/img/slide-4-3.png",
                  name: "항목 4 상품 3",
              },
          ],
          5: [
              {
                  src: "./assets/img/slide-5-1.png",
                  name: "항목 5 상품 1",
              },
              {
                  src: "./assets/img/slide-5-2.png",
                  name: "항목 5 상품 2",
              },
              {
                  src: "./assets/img/slide-5-3.png",
                  name: "항목 5 상품 3",
              },
          ],
      },
  };
  
  // 2번 박스 항목 리스트와 그리드 이미지 업데이트 함수
  function updateBoxAndGrid(slideIndex) {
      const box2List = document.getElementById("box2-list");
      const gridImages = document.getElementById("productGrid");
  
      // 기존 항목 초기화
      box2List.innerHTML = "";
  
      // 슬라이드 1일 때 항목 설정
      if (slideIndex === 0) {
          box2List.innerHTML = `
          <li data-id="1">top</li>
          <li data-id="2">pants</li>
          <li data-id="3">shoes</li>
      `;
          // 첫 번째 항목 1에 해당하는 그리드 내용 노출
          displayGrid(1, slideIndex);
          document.querySelector('[data-id="1"]').classList.add("active");
      }
      // 슬라이드 2일 때 항목 설정
      else if (slideIndex === 1) {
          box2List.innerHTML = `
          <li data-id="4">skin care</li>
          <li data-id="5">Etc.</li>
      `;
          // 첫 번째 항목 4에 해당하는 그리드 내용 노출
          displayGrid(4, slideIndex);
          document.querySelector('[data-id="4"]').classList.add("active");
      }
  
      // 항목 클릭 시 그리드 내용 갱신
      const listItems = document.querySelectorAll(".box-2 li");
      listItems.forEach((item) => {
          item.addEventListener("click", () => {
              const itemId = item.getAttribute("data-id");
              displayGrid(itemId, slideIndex);
              listItems.forEach((i) => i.classList.remove("active"));
              item.classList.add("active");
          });
      });
  }
  
  // 그리드 내용 업데이트 함수
  function displayGrid(itemId, slideIndex) {
      const gridImages = document.getElementById("productGrid");
      gridImages.innerHTML = ""; // 기존 그리드 초기화
  
      const selectedProducts =
          products[`slide${slideIndex + 1}`][itemId];
  
      selectedProducts.forEach((product) => {
          const productDiv = document.createElement("div");
          productDiv.innerHTML = `
          <a href="delivery.html">
              <img src="${product.src}" alt="${product.name}">
              <p>${product.name}</p>
          </a>
      `;
          gridImages.appendChild(productDiv);
      });
  }
  
  // Swiper 슬라이드가 변경될 때마다 항목과 상품 그리드 업데이트
  swiper.on("slideChange", function () {
      updateBoxAndGrid(swiper.realIndex);
  });
  
  // 초기 로드 시 첫 번째 슬라이드에 맞는 항목과 상품 표시
  updateBoxAndGrid(swiper.realIndex);
  