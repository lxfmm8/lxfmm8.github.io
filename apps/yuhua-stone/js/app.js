var htmlBody = document.querySelector("html");
var buttonHome = document.querySelector(".btnHome");
var buttonHistory = document.querySelector(".btnHistory");
var buttonDiscern = document.querySelector(".btnDiscern");
var buttonStore = document.querySelector(".btnStore");
var pageTitleChinese = document.querySelector("#pageTitleCN");
var pageTitleEnglish = document.querySelector("#pageTitleEN");
var pageNum = document.querySelector("#pageNumber");
var rightImage = document.querySelector(".right-image");


buttonClear = function() {
	htmlBody.classList.remove("selectedHome");
	htmlBody.classList.remove("selectedHistory");
	htmlBody.classList.remove("selectedDiscern");
	htmlBody.classList.remove("selectedStore");
	rightImage.classList.remove("hide-image");
};

buttonHome.addEventListener ("click", function(){
	buttonClear();
	htmlBody.classList.add("selectedHome");
	pageTitleCN.textContent = "白雨花";
	pageTitleEN.textContent = "White Yuhua";
	pageNum.textContent = "01";
});

buttonHistory.addEventListener ("click", function(){
	buttonClear();
	htmlBody.classList.add("selectedHistory");
	pageTitleCN.textContent = "历史";
	pageTitleEN.textContent = "Yuhua History";
	pageNum.textContent = "02";
	rightImage.classList.add("hide-image");
});

buttonDiscern.addEventListener ("click", function(){
	buttonClear();
	htmlBody.classList.add("selectedDiscern");
	pageTitleCN.textContent = "甄别";
	pageTitleEN.textContent = "Yuhua Discern";
	pageNum.textContent = "03";
});

buttonStore.addEventListener ("click", function(){
	buttonClear();
	htmlBody.classList.add("selectedStore");
	pageTitleCN.textContent = "商店";
	pageTitleEN.textContent = "Yuhua Store";
	pageNum.textContent = "04";
});