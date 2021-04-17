<template>
	<div>
		<Navbar ref="navBar"/>
		<Banner ref="banner" />
		<AboutMe ref="about" />
		<Skills ref="skills" />
		<Works ref="works" />
		<Blogs ref="blogs" />
		<Footer ref="contact" />
	</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Banner from '@/components/Banner.vue';
import AboutMe from '@/components/AboutMe.vue';
import Works from '@/components/Works.vue';
import Blogs from '@/components/Blogs.vue';
import Skills from '@/components/Skills.vue';
import Footer from '@/components/Footer.vue';

export default {
	components: {
		Navbar,
		Banner,
		AboutMe,
		Works,
		Blogs,
		Skills,
		Footer
	},
	mounted () {

		const navLinks = this.$refs.navBar.$refs.navLinks;
		const sectionObserver = new IntersectionObserver( entries => {
			entries.forEach( entry => {

				if( entry.isIntersecting )
				{
					navLinks.querySelector('a.active').classList.remove('active');
					navLinks.querySelector( `a#${entry.target.id}Link` ).classList.add('active');
				}
			});
		}, { rootMargin: "-200px" } );

		Object.values( this.$refs ).forEach( ref => {
			if( ref === this.$refs.navBar ) { return; }
			sectionObserver.observe( ref.$el );
		});
	},
};
</script>

<style lang="less" scoped></style>
