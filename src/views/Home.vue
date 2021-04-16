<template>
	<div>
		<Navbar />
		<Banner />
		<AboutMe />
		<Works />
		<Skills />
		<Blogs />
	</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Banner from '@/components/Banner.vue';
import AboutMe from '@/components/AboutMe.vue';
import Works from '@/components/Works.vue';
import Blogs from '@/components/Blogs.vue';
import Skills from '@/components/Skills.vue';

export default {
	components: {
		Navbar,
		Banner,
		AboutMe,
		Works,
		Blogs,
		Skills
	}
};
</script>

<style lang="less" scoped></style>
