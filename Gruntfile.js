module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
 
		requirejs: {
			compile: {
				options: {
					baseUrl: "./public/static/scripts/js",
					mainConfigFile:"./public/static/scripts/js/main.js",
				    name: "main",
				    out: "./public/static/scripts/main-built.js",
				    preserveLicenseComments: false,
				    optimize:'uglify2',
				    generateSourceMaps: true
				}
			}
			
		},
		compass: {
			dist: {
				options: {
					basePath:'public/static/content/',
					sassDir:'scss',
					cssDir:'css',
					imagesDir : 'img',
					httpPath : '/static/content/',
					outputStyle:'compressed'
				}
			}
		},
	 	coffee:{
			compile:{ 
				expand: true,
				cwd: 'public/static/scripts/coffee',
				src: ['{,*/}*.coffee'],
				dest: 'public/static/scripts/js',
				ext: ".js",
			}
	 	},
 
		watch: {
			compass: {
				files: 'public/static/content/scss/*.scss', // следить за изменениями любых файлов с разширениями .scss
				tasks: ['compass'] // и запускать такую задачу при их изменении
			},
			coffee: {
				files: 'public/static/scripts/**/*.coffee', // следить за изменениями любых файлов с разширениями .scss
				tasks: ['coffee:compile'] // и запускать такую задачу при их изменении
			},
			requirejs: {
				files: ['public/static/scripts/js/**/*.js', 'public/static/scripts/**/*.html'], // следить за изменениями любых файлов с разширениями .scss
				tasks: ['requirejs:compile'] // и запускать такую задачу при их изменении
			}
		}
 
	});
 
	//погружаем все необходимые модули
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
 
	//забиваем в задачу по умолчению все наши задачи
	grunt.registerTask('default', ['compass', 'coffee', 'requirejs', 'watch']);
};