<template>
	<ul class="load__bar">
		<li id="rotateG_01" class="blockG"></li>
		<li id="rotateG_02" class="blockG"></li>
		<li id="rotateG_03" class="blockG"></li>
		<li id="rotateG_04" class="blockG"></li>
		<li id="rotateG_05" class="blockG"></li>
		<li id="rotateG_06" class="blockG"></li>
		<li id="rotateG_07" class="blockG"></li>
		<li id="rotateG_08" class="blockG"></li>
		<li id="rotateG_09" class="blockG"></li>
		<li id="rotateG_10" class="blockG"></li>
		<li id="rotateG_11" class="blockG"></li>
		<li id="rotateG_12" class="blockG"></li>
	</ul>
</template>

<script>
export default {
	name: "LoadList",
};
</script>

<style>
.blockG {
	position: absolute;
	background-color: rgb(171, 120, 10);
	width: 7px;
	height: 13px;
	border-radius: 37%;
	transform: scale(0.4);
	list-style: none;
	animation: changeColor 2.9s infinite ease-in-out;
}

#rotateG_01 {
	transform-origin: 50% -200%;
	animation-delay: 0.2625s;

	transform: rotate(0deg);
}

#rotateG_02 {
	transform-origin: 50% -200%;
	animation-delay: 0.495s;

	transform: rotate(30deg);
}

#rotateG_03 {
	transform-origin: 50% -200%;
	animation-delay: 0.7275s;

	transform: rotate(60deg);
}

#rotateG_04 {
	transform-origin: 50% -200%;
	animation-delay: 0.96s;

	transform: rotate(90deg);
}

#rotateG_05 {
	transform-origin: 50% -200%;
	animation-delay: 1.1925s;

	transform: rotate(120deg);
}

#rotateG_06 {
	transform-origin: 50% -200%;
	animation-delay: 1.425s;

	transform: rotate(150deg);
}

#rotateG_07 {
	transform-origin: 50% -200%;
	animation-delay: 1.6575s;

	transform: rotate(180deg);
}

#rotateG_08 {
	transform-origin: 50% -200%;
	animation-delay: 1.9s;
	transform: rotate(210deg);
}

#rotateG_09 {
	transform-origin: 50% -200%;
	animation-delay: 2.1325s;
	transform: rotate(240deg);
}

#rotateG_10 {
	transform-origin: 50% -200%;
	animation-delay: 2.375s;
	transform: rotate(270deg);
}

#rotateG_11 {
	transform-origin: 50% -200%;
	animation-delay: 2.6075s;
	transform: rotate(300deg);
}

#rotateG_12 {
	transform-origin: 50% -200%;
	animation-delay: 2.85s;
	transform: rotate(330deg);
}

.load__bar {
	margin-left: -48px;
}

@keyframes changeColor {
	0% {
		background-color: rgb(255, 227, 167);
	}

	100% {
		background-color: rgb(171, 120, 10);
	}
}
</style>
