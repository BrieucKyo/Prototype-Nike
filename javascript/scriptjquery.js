/* WISH LIKED */

$(document).ready(function() {

			$("#wish").click(function(){
				$("#wish-liked").show();
				$("#wish").hide();
			});

			$("#wish-liked").click(function(){
				$("#wish").show();
				$("#wish-liked").hide();
			});

/* FIRST SHOES */

			$('#shoes1').click(function(){
				$('#viewshoes').css('background-image', 'url("images/firstblock/container/viewshoes1.png")');
				$('#viewshoes').css('width', '40em');
				$('#viewshoes').css('height', '19em');
				$('#viewshoes').css('background-size', '100% 100%');
				$('#secondblock').css('background-image', 'url("images/secondblock/background.png")');
				$('#shopright').css('background-image', 'url("images/thirdblock/shoesbox.png');
				$('#price').html('$ 160.OO');
				$('#shoes').html('AIR MAX TAVAS SD');
				$('#shopprice2').html('$ 160.OO');
				$('#shopshoes2').html('AIR MAX TAVAS SD');
				$('#thirdblock').css('background-image', 'url("images/thirdblock/shoes.png');
			});

/* SECOND SHOES */

			$('#shoes2').click(function(){
				$('#viewshoes').css('background-image', 'url("images/firstblock/container/viewshoes2.png")');
				$('#viewshoes').css('width', '40em');
				$('#viewshoes').css('height', '19em');
				$('#viewshoes').css('background-size', '100% 100%');
				$('#secondblock').css('background-image', 'url("images/secondblock/background2.png")');
				$('#shopright').css('background-image', 'url("images/thirdblock/shoesbox2.png');
				$('#price').html('$ 165.OO');
				$('#shoes').html('AIR MAX RAINBOW');
				$('#shopprice2').html('$ 165.OO');
				$('#shopshoes2').html('AIR MAX RAINBOW');
				$('#thirdblock').css('background-image', 'url("images/thirdblock/shoes2.png');
			});

/* THIRD SHOES */

			$('#shoes3').click(function(){
				$('#viewshoes').css('background-image', 'url("images/firstblock/container/viewshoes3.png")');
				$('#viewshoes').css('width', '40em');
				$('#viewshoes').css('height', '19em');
				$('#viewshoes').css('background-size', '100% 100%');
				$('#secondblock').css('background-image', 'url("images/secondblock/background3.png")');
				$('#shopright').css('background-image', 'url("images/thirdblock/shoesbox3.png');
				$('#price').html('$ 180.OO');
				$('#shoes').html('AIR MAX CLEAN GREEN');
				$('#shopprice2').html('$ 180.OO');
				$('#shopshoes2').html('AIR CLEAN GREEN');
				$('#thirdblock').css('background-image', 'url("images/thirdblock/shoes3.png');
			});

/* CART BUTTON */

			$('#cartbtn').click(function(){
			var plusone = $('nbproduct').data('0');
			$('nbproduct').data(plusone++);

});






