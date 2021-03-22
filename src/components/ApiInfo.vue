<template>
	<div class="api-info">
		<div v-for="(item, index) in list" :key="index">
			<p
				v-if="index === 'created' || index === 'edited'"
				class="api-info__text"
			>
				{{ index }} : {{ getDate(item) }}
			</p>
			<p v-else-if="index === 'url'" class="api-info__text">
				{{ index }} : <a :href="item" class="api-info__link">Link to API</a>
			</p>
			<p v-else-if="index === 'homeworld'" class="api-info__text">
				{{ index }} :
				<a :href="item" class="api-info__link">{{
					getInfoFromApi(item).name
				}}</a>
			</p>
			<p v-else-if="index === 'films'" class="api-info__text">
				{{ index }} :
				<a
					v-for="element in item"
					:key="element"
					:href="element"
					class="api-info__link"
					>{{ getInfoFromApi(element).title + ", " }}</a
				>
			</p>
			<p v-else-if="index === 'vehicles'" class="api-info__text">
				{{ index }} :
				<a
					v-for="element in item"
					:key="element"
					:href="element"
					class="api-info__link"
					>{{ getInfoFromApi(element).name + ", " }}</a
				>
			</p>
			<p v-else-if="index === 'starships'" class="api-info__text">
				{{ index }} :
				<a
					v-for="element in item"
					:key="element"
					:href="element"
					class="api-info__link"
					>{{ getInfoFromApi(element).name + ", " }}</a
				>
			</p>

			<p v-else class="api-info__text">{{ index }} : {{ item }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "ApiInfo",

	data() {
		return {
			list: "",
		};
	},

	methods: {
		getDate(element) {
			let date = new Date(element);
			return this.formatDate(date);
		},

		formatDate(date) {
			let dd = date.getDate();
			if (dd < 10) dd = "0" + dd;

			let mm = date.getMonth() + 1;
			if (mm < 10) mm = "0" + mm;

			let yy = date.getFullYear() % 100;
			if (yy < 10) yy = "0" + yy;

			return dd + "." + mm + "." + yy;
		},

		getInfoFromApi(url) {
			let info = this.requestApi(url);
			return info;
		},

		requestApi(url) {
			const xhr = new XMLHttpRequest();
			xhr.open("GET", url, false);
			xhr.send();
			if (xhr.status != 200) {
				console.log(xhr.status + ": " + xhr.statusText);
			} else {
				let data = JSON.parse(xhr.responseText);
				return data;
			}
		},
	},

	created() {
		const apiList = this.requestApi("https://swapi.dev/api/people/1/");
		this.list = apiList;
	},
};
</script>

<style>
.api-info {
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.api-info__text {
	font-size: 20px;
	line-height: 1.48;

	text-align: center;

	color: #ffffff;
	margin: 10px 0;
}

.api-info__link {
	color: #f6c866;
	text-decoration: none;
}

.api-info__link:hover {
	cursor: pointer;
	opacity: 0.7;
}

@media screen and (max-width: 670px) {
	.api-info__text {
		font-size: 15x;
		line-height: 1.1;
		margin: 4px 0;
	}
}
</style>
