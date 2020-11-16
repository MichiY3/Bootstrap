$(function(){
	ajaxRequest();

	function ajaxRequest(){
		let url = 'https://www.googleapis.com/youtube/v3/search?key=';
		let key = 'AIzaSyC6EGYS9QYaJ8J_Gd9pDTp1hyw_wc64H_s';
		let part = '&part=snippet&maxResults=1';
		// let id = '&id=UC6vH90E1cc-e1IC1_Zb5T5A';
		// let q = '&q=邦楽';
		let q ='&q=PGCDOFFICIAL'
		let type = '&type=video';
		// let channelId ='&channelID=PGCDOFFICIAL'
		url = url + key + part + q + type;

		$.ajax({
			url: url,
			type: 'GET',
		})
		.done(function(data){
			console.log(data)
			renderResult(data);
		})
		.fail(function(error){

		})


	}

	function renderResult(data){
		$('#result').text('');

		for(item of data.items){
			let title = item.snippet.title;
			let thumbnail = item.snippet.thumbnails.medium;
			let videoId = item.id.videoId;
			let iframe = $('<iframe>')
                    .attr('width',thumbnail.width)
                    .attr('height',thumbnail.height)
                    .attr('src','https://www.youtube.com/embed/' + videoId)
                    .attr('frameborder',0)
                    .attr('allow','accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture')
					.attr('allowFullscreen',true);
			$('#result').append(iframe);
		}
	}



});