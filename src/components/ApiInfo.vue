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
				{{ index }} : <span class="hidden">{{ getHomeworldName(item) }}</span>
				<a :href="item" class="api-info__link">{{ homeworld }}</a>
			</p>
			<p v-else-if="index === 'films'" class="api-info__text">
				{{ index }} :
				<a
					v-for="(element, index) in item"
					:key="element"
					:href="element"
					class="api-info__link"
					><span class="hidden">{{ getFilmsTitle(element) }}</span>
					{{ filmTitle[index] + ", " }}</a
				>
			</p>
			<p v-else-if="index === 'vehicles'" class="api-info__text">
				{{ index }} :
				<a
					v-for="(element, index) in item"
					:key="element"
					:href="element"
					class="api-info__link"
					><span class="hidden">{{ getVehiclesNames(element) }}</span
					>{{ vehicles[index] + ", " }}</a
				>
			</p>
			<p v-else-if="index === 'starships'" class="api-info__text">
				{{ index }} :
				<a
					v-for="(element, index) in item"
					:key="element"
					:href="element"
					class="api-info__link"
					><span class="hidden">{{ getStarshipsNames(element) }}</span
					>{{ starships[index] + ", " }}</a
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
			homeworld: "",
			filmTitle: [],
			vehicles: [],
			starships: [],
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

		async getHomeworldName(url) {
			try {
				let response = await fetch(url);
				let data = await response.json();
				this.homeworld = data.name;
			} catch (error) {
				alert(error);
			}
		},

		async getFilmsTitle(url) {
			try {
				let response = await fetch(url);
				let data = await response.json();
				this.filmTitle.push(data.title);
			} catch (error) {
				alert(error);
			}
		},

		async getVehiclesNames(url) {
			try {
				let response = await fetch(url);
				let data = await response.json();
				this.vehicles.push(data.name);
			} catch (error) {
				alert(error);
			}
		},

		async getStarshipsNames(url) {
			try {
				let response = await fetch(url);
				let data = await response.json();
				this.starships.push(data.name);
			} catch (error) {
				alert(error);
			}
		},

		getInfoFromApi(url) {
			let info = this.requestApi(url);
			return info;
		},

		async requestApi(url) {
			try {
				let response = await fetch(url);
				let data = await response.json();
				return data;
			} catch (error) {
				alert(error);
			}
		},

		async requestFirstApi(url) {
			try {
				let response = await fetch(url);
				let data = await response.json();
				this.list = data;
				return data;
			} catch (error) {
				alert(error);
			}
		},
	},

	beforeMount() {
		const apiList = this.requestFirstApi("https://swapi.dev/api/people/1/");
		this.list = apiList;
	},
};
</script>

<style>
.hidden {
	display: none;
}
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
