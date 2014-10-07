module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
 
 
		compass: {
			dist: {
				options: {
					basePath:'public/content/',
				sassDir:'scss',
				cssDir:'css',
				outputStyle:'compressed'
				}
			}
	 },
	 coffee:{
		compile:{ 
			expand: true,
			cwd: 'public/scripts/coffee',
			src: ['{,*/}*.coffee'],
			dest: 'public/scripts/js',
			ext: ".js"
		}
	 },
 
		watch: {
			compass: {
				files: 'public/content/scss/*.scss', // следить за изменениями любых файлов с разширениями .scss
				tasks: ['compass'] // и запускать такую задачу при их изменении
			},
			coffee: {
				files: 'public/scripts/**/*.coffee', // следить за изменениями любых файлов с разширениями .scss
				tasks: ['coffee:compile'] // и запускать такую задачу при их изменении
			}
		}
 
	});
 
	//погружаем все необходимые модули
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-coffee');
 
	//забиваем в задачу по умолчению все наши задачи
	grunt.registerTask('default', ['compass', 'coffee', 'watch']);
};