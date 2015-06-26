module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
 
		requirejs: {
			compile: {
				options: {
					baseUrl: "./static/scripts/js",
					mainConfigFile:"./static/scripts/js/main.js",
				    name: "main",
				    out: "./static/scripts/main-built.js",
				    preserveLicenseComments: false,
				    optimize:'uglify2',
				    generateSourceMaps: true
				}
			}
			
		},
		compass: {
			dist: {
				options: {
					basePath:'static/content/',
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
				cwd: 'static/scripts/coffee',
				src: ['{,*/}*.coffee'],
				dest: 'static/scripts/js',
				ext: ".js",
			}
	 	},
 
		watch: {
			compass: {
				files: 'static/content/scss/*.scss', // следить за изменениями любых файлов с разширениями .scss
				tasks: ['compass'] // и запускать такую задачу при их изменении
			},
			coffee: {
				files: 'static/scripts/**/*.coffee', // следить за изменениями любых файлов с разширениями .scss
				tasks: ['coffee:compile'] // и запускать такую задачу при их изменении
			},
			requirejs: {
				files: ['static/scripts/js/**/*.js', 'static/scripts/**/*.html'], // следить за изменениями любых файлов с разширениями .scss
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