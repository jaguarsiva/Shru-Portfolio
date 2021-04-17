<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="less">

/* Less Variables */

@primary-color: #FFB800;

@ibm-font: 'IBM Plex Sans', sans-serif;

/* General Stylings */

*, *::before, *::after
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
	font-family: 'IBM Plex Sans', sans-serif;
	scroll-padding-top: 150px;
}

html
{
	overflow-x: hidden;
	scroll-behavior: smooth;
	height: 100%;
	scrollbar-color: @primary-color;

	&.no-scroll
	{
		overflow: hidden;

		& body { overflow: hidden; }
	}
}

body
{
	overflow-x: hidden;
	height: 100%;
	scrollbar-color: @primary-color;
	scroll-behavior: smooth;

	&::-webkit-scrollbar { width: 15px; }

	&::-webkit-scrollbar-track { background: black; }

	&::-webkit-scrollbar-thumb { background: @primary-color; }
}

h1, h2, h3, h4, h5, h6 { font-weight: normal; }

ul { list-style-type: none; }

a { text-decoration: none; }

i { font-style: normal; }

img { display: block; }

@media only screen and (max-width: 767px)
{
    body::-webkit-scrollbar { width: 0px; }
}

// Helper Classes

.container
{
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 15px;
}

.flex
{
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
	flex-wrap: wrap;

	&.nowrap { flex-wrap: nowrap; }

	&.col { flex-direction: column; }

	&.center
	{
		align-items: center;
		justify-content: center;
	}

	&.align-center { align-items: center; }

	&.justify-btw { justify-content: space-between; }
}

.btn
{
    border: 0;
    outline: 0;
    cursor: pointer;
    position: relative;
    z-index: 1;

	&.fancy-btn
	{
		overflow: hidden;

		&::after
		{
			content: "";
			position: absolute;
			top: 0; left: 0;
			z-index: -1;
			width: 100%; height: 100%;
			background-color: rgba(0, 0, 0,0.25);
			border-radius: inherit;
			transform: scaleX(0);
			transform-origin: left;
			transition: transform 0.3s ease-out;
		}

		&:hover::after, &:focus::after { transform: scaleX(1); }
	}
}

.d-none { display: none !important; }

.ml-15 { margin-left: 15px; }

.mr-15 { margin-right: 15px; }

.ml-auto { margin-left: auto; }

.mr-auto { margin-right: auto; }

h2.sub-headings
{
	font-style: normal;
	font-weight: 600;
	font-size: 32px;
	color: #000000;
	margin-bottom: 50px;
	position: relative;

	&::after
	{
		content: '';
		width: 90px;
		height: 4px;
		background-color: @primary-color;
		position: absolute;
		bottom: -10px; left: 0;
	}
}

.icons-sprite
{
	background-image: url('./assets/icons_sprite.png');
}

@media (max-width: 767px)
{
    ::-webkit-scrollbar { width: 0px; }
}

</style>
