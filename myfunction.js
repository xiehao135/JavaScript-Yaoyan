function listChange1(){
			var na = document.getElementById("list-word1");
			var ca = document.getElementById("c1");
			document.getElementById("list-word2").className="listIndex";
			document.getElementById("list-word3").className="listIndex";
			document.getElementById("list-word4").className="listIndex";
			document.getElementById("list-word5").className="listIndex";
			document.getElementById("list-word6").className="listIndex-special";
			document.getElementById("c2").className="content2";
			document.getElementById("c3").className="content3";
			document.getElementById("c4").className="content4";
			document.getElementById("c5").className="content5";
			document.getElementById("c6").className="content6";
			if(na.className === "listIndex"){	
				na.className = "listIndex-other";
				c1.className = "content1";
			}
		}
		
		function listChange2(){
			var na = document.getElementById("list-word2");
			var ca = document.getElementById("c2");
			document.getElementById("list-word1").className="listIndex";
			document.getElementById("list-word3").className="listIndex";
			document.getElementById("list-word4").className="listIndex";
			document.getElementById("list-word5").className="listIndex";
			document.getElementById("list-word6").className="listIndex-special";
			document.getElementById("c1").className="content1-hid";
			document.getElementById("c3").className="content3";
			document.getElementById("c4").className="content4";
			document.getElementById("c5").className="content5";
			document.getElementById("c6").className="content6";
			if(na.className === "listIndex"){	
				na.className = "listIndex-other";
				ca.className = "content2-show";
			}
		}
		
		function listChange3(){
			var na = document.getElementById("list-word3");
			var ca = document.getElementById("c3");
			document.getElementById("list-word1").className="listIndex";
			document.getElementById("list-word2").className="listIndex";
			document.getElementById("list-word4").className="listIndex";
			document.getElementById("list-word5").className="listIndex";
			document.getElementById("list-word6").className="listIndex-special";
			document.getElementById("c1").className="content1-hid";
			document.getElementById("c2").className="content2";
			document.getElementById("c4").className="content4";
			document.getElementById("c5").className="content5";
			document.getElementById("c6").className="content6";
			if(na.className === "listIndex"){	
				na.className = "listIndex-other";
				ca.className = "content3-show";
			}
		}
		
		function listChange4(){
			var na = document.getElementById("list-word4");
			var ca = document.getElementById("c4");
			document.getElementById("list-word1").className="listIndex";
			document.getElementById("list-word2").className="listIndex";
			document.getElementById("list-word3").className="listIndex";
			document.getElementById("list-word5").className="listIndex";
			document.getElementById("list-word6").className="listIndex-special";
			document.getElementById("c1").className="content1-hid";
			document.getElementById("c2").className="content2";
			document.getElementById("c3").className="content3";
			document.getElementById("c5").className="content5";
			document.getElementById("c6").className="content6";
			if(na.className === "listIndex"){	
				na.className = "listIndex-other";
				ca.className = "content4-show";
			}
		}
		
		function listChange5(){
			var na = document.getElementById("list-word5");
			var ca = document.getElementById("c5");
			document.getElementById("list-word1").className="listIndex";
			document.getElementById("list-word2").className="listIndex";
			document.getElementById("list-word3").className="listIndex";
			document.getElementById("list-word4").className="listIndex";
			document.getElementById("list-word6").className="listIndex-special";
			document.getElementById("c1").className="content1-hid";
			document.getElementById("c2").className="content2";
			document.getElementById("c3").className="content3";
			document.getElementById("c4").className="content4";
			document.getElementById("c6").className="content6";
			if(na.className === "listIndex"){	
				na.className = "listIndex-other";
				ca.className = "content5-show";
			}
		}
		
		function listChange6(){
			var na = document.getElementById("list-word6");
			var ca = document.getElementById("c6");
			document.getElementById("list-word1").className="listIndex";
			document.getElementById("list-word2").className="listIndex";
			document.getElementById("list-word3").className="listIndex";
			document.getElementById("list-word4").className="listIndex";
			document.getElementById("list-word5").className="listIndex";
			document.getElementById("c1").className="content1-hid";
			document.getElementById("c2").className="content2";
			document.getElementById("c3").className="content3";
			document.getElementById("c4").className="content4";
			document.getElementById("c5").className="content5";
			if(na.className === "listIndex-special"){	
				na.className = "listIndex-special-other";
				ca.className = "content6-show";
			}
		}
		
		function listChange7(){
			var na = document.getElementById("list-word6");
			var ca = document.getElementById("c6");
			document.getElementById("list-word1").className="listIndex";
			document.getElementById("list-word2").className="listIndex";
			document.getElementById("list-word3").className="listIndex";
			document.getElementById("list-word4").className="listIndex";
			document.getElementById("list-word5").className="listIndex";
			document.getElementById("c1").className="content1-hid";
			document.getElementById("c2").className="content2";
			document.getElementById("c3").className="content3";
			document.getElementById("c4").className="content4";
			document.getElementById("c5").className="content5";
			if(na.className === "listIndex-special"){	
				na.className = "listIndex-special-other";
				ca.className = "content6-show";
			}
		}
		
		function addList(){
			var na = document.getElementById("hun");
			var la = document.getElementById("linkblock");
			var aa = document.getElementById("linkabove");
			if(na.className === "content2-title-test"){
				na.className = "content2-title-test-show";
				la.style = "display:block";
				aa.style = "margin-bottom:0";
			}else{
				na.className = "content2-title-test";
				la.style = "display:none";
				aa.style = "margin-bottom:91px";
			}
		}
		
		function showDetail()
		{
			var pa2=document.getElementById("image2");
			var pa3=document.getElementById("image3");
			var intr=document.getElementById("introduction");
			pa2.style="display:none";
			pa3.style="display:none";
			intr.style="display:block";
		}
		
		function hideDetail()
		{
			var pa2=document.getElementById("image2");
			var pa3=document.getElementById("image3");
			var intr=document.getElementById("introduction");
			pa2.style="display:block";
			pa3.style="display:block";
			intr.style="display:none";
		}
		
		function showblack()
		{
			document.getElementById("fade1").style.display="block";
			document.getElementById("fade2").style.display="block";
			document.getElementById("fade3").style.display="block";
			document.getElementById("fade4").style.display="block";
			document.getElementById("fade5").style.display="block";
		}
		
		function hideblack()
		{
			document.getElementById("fade1").style.display="none";
			document.getElementById("fade2").style.display="none";
			document.getElementById("fade3").style.display="none";
			document.getElementById("fade4").style.display="none";
			document.getElementById("fade5").style.display="none";
		}
		
		function init()
		{
			setInterval("changeImg()",5000);
		}
		
		var i = 1;
		function changeImg()
		{
			var shadow
			if(i == 0)
			{
				document.getElementById("circle3").style.backgroundColor="white";
				document.getElementById("circle1").style.backgroundColor="#65360a";
				i++;
				document.getElementById("zhong").className="middle"+i;
			}
			else{
				shadow = i;
				i++;
				document.getElementById("zhong").className="middle"+i;
				document.getElementById("circle"+shadow).style.backgroundColor="white";
				document.getElementById("circle"+i).style.backgroundColor="#65360a";
			}
			if(i == 3){
				i = 0;
			}
		}
		
		function changeImgOppo()
		{
			var shadow;
			if(i == 1)
			{
				i = 3;
				shadow = 1;
			}else if(i == 2)
			{
				i = 1;
				shadow = 2;
			}else
			{
				i = 2;
				shadow = 3
			}
			document.getElementById("zhong").className="middle"+i;
			document.getElementById("circle"+shadow).style.backgroundColor="white";
			document.getElementById("circle"+i).style.backgroundColor="#65360a";
			if(i == 3){
				i = 0;
			}
		}
		
		function turnToOne()
		{
			document.getElementById("zhong").className="middle1";
			document.getElementById("circle1").style.backgroundColor="#65360a";
			document.getElementById("circle2").style.backgroundColor="white";
			document.getElementById("circle3").style.backgroundColor="white";
			i = 1;
		}
		
		function turnToTwo()
		{
			document.getElementById("zhong").className="middle2";
			document.getElementById("circle1").style.backgroundColor="white";
			document.getElementById("circle2").style.backgroundColor="#65360a";
			document.getElementById("circle3").style.backgroundColor="white";
			i = 2;
		}
		
		function turnToThree()
		{
			document.getElementById("zhong").className="middle3";
			document.getElementById("circle1").style.backgroundColor="white";
			document.getElementById("circle2").style.backgroundColor="white";
			document.getElementById("circle3").style.backgroundColor="#65360a";
			i = 0;
		}