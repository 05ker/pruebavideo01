jwplayer("container").setup({

		    controls: true,
		    displaytitle: true,
		    fullscreen: "true",
		    primary: 'html5',
		    
		    autostart: true,

		    skin: {
		    	name: 'Netflix',
		    },

		    //sharing: {
		    	//sites: ["reddit","facebook","twitter"]
		    //},
		     
		    captions: {
		        color: '#FFF',
		         fontSize: 14,
		         backgroundOpacity: 0,
		         edgeStyle: 'raised' 
		    },

		  playlist: [
        ,
        //Begin Movies Truyen Ky Ly Tieu Long Tap 1
       {        
		    title: "Truyền Kỳ Lý Tiểu Long Tập 01 720P VietSub EngSub",
		    description: "Truyền Kỳ Lý Tiểu Long Tập 01 720P VietSub EngSub",
		    image: "https://cdn.vietsubtv.org/images/film/truyen-ky-ly-tieu-long-5726.jpg",
		    sources: [{
		    file: "https://ia601608.us.archive.org/10/items/spky-01-cs-ds/SPKY_01%5BCS-DS%5D.mp4",
		      label: '4K',
		      'type': 'mp4',
		      primary: 'html5',

		    }
		    ],
		    
		  }//end of movies
      ]
		});
jwplayer("container").setCaptions({
  "back": true,
  "backgroundOpacity": "32",
  "edgeStyle": "dropshadow",
  "fontSize": 14,
  "fontOpacity": 100,
  "fontScale": 0.05,
  "windowOpacity": 0,
  "color": "#ffff00"
});