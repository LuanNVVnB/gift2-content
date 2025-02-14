// Lấy các phần tử
const giftBox = document.getElementById("giftBox");
const giftContent = document.getElementById("giftContent");

// Thêm sự kiện click
giftBox.addEventListener("click", () => {
  // Thêm lớp 'open' để kích hoạt hiệu ứng
  giftBox.classList.add("open");

  // Hiển thị nội dung bên trong quà sau khi mở
  setTimeout(() => {
    giftContent.style.opacity = "1";
    giftContent.style.visibility = "visible";
  }, 1000); // Đợi hiệu ứng mở quà hoàn thành
});
