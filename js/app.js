"use strict";

//Burger
const burgerBtn = document.querySelector(".header__burger");
const nav = document.querySelector(".nav");

burgerBtn.addEventListener("click", function() {
	burgerBtn.classList.toggle("active");
	nav.classList.toggle("active");
});

//Accordion
document.querySelectorAll(".accordion__header").forEach(item => {
	item.addEventListener("click", () => {
		let parent = item.parentNode;
		parent.classList.toggle("active");
	})
})

//Reviews Slider
let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const container = document.querySelector(".reviews__container");
const track = document.querySelector(".reviews__track");
const items = document.querySelectorAll(".reviews__item");
const btnPrev = document.querySelector(".reviews__btn--prev");
const btnNext = document.querySelector(".reviews__btn--next");
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

btnNext.addEventListener("click", () => {
	const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

	position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

	setPosition();
	checkBtns();
});

btnPrev.addEventListener("click", () => {
	const itemsLeft = Math.abs(position) / itemWidth;

	position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

	setPosition();
	checkBtns();
});

const setPosition = () => {
	track.style.transform = `translateX(${position}px`;
};

const checkBtns = () => {
	(position === 0) ? btnPrev.style.display = `none` : btnPrev.style.display = `block`;

	(position <= -(itemsCount - slidesToShow) * itemWidth) ? btnNext.style.display = `none` : btnNext.style.display = `block`;
};

checkBtns();


//Quote Slider
let quotePosition = 0;
const quoteContainer = document.querySelector(".quote__container");
const quoteTrack = document.querySelector(".quote__track");
const quoteItems = document.querySelectorAll(".quote__item");
const quoteBtnPrev = document.querySelector(".quote__btn--prev");
const quoteBtnNext = document.querySelector(".quote__btn--next");
const quoteItemsCount = quoteItems.length;
const quoteItemWidth = quoteContainer.clientWidth / slidesToShow;
const quoteMovePosition = slidesToScroll * quoteItemWidth;

quoteBtnNext.addEventListener("click", () => {
	const quoteItemsLeft = quoteItemsCount - (Math.abs(quotePosition) + slidesToShow * quoteItemWidth) / quoteItemWidth;

	quotePosition -= quoteItemsLeft >= slidesToScroll ? quoteMovePosition : quoteItemsLeft * quoteItemWidth;

	quoteSetPosition();
	quoteCheckBtns();
});

quoteBtnPrev.addEventListener("click", () => {
	const quoteItemsLeft = Math.abs(quotePosition) / quoteItemWidth;

	quotePosition += quoteItemsLeft >= slidesToScroll ? quoteMovePosition : quoteItemsLeft * quoteItemWidth;

	quoteSetPosition();
	quoteCheckBtns();
});

const quoteSetPosition = () => {
	quoteTrack.style.transform = `translateX(${quotePosition}px`;
};

const quoteCheckBtns = () => {
	(quotePosition === 0) ? quoteBtnPrev.style.display = `none` : quoteBtnPrev.style.display = `block`;

	(quotePosition <= -(quoteItemsCount - slidesToShow) * quoteItemWidth) ? quoteBtnNext.style.display = `none` : quoteBtnNext.style.display = `block`;
};

quoteCheckBtns();