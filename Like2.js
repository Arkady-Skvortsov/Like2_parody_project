let block = document.getElementById('product-block');
    	let block2 = document.getElementById('product-block2');
    	let block3 = document.getElementById('product-block3');
    	let choice = document.querySelector('.choice-block');
    	let choice2 = document.querySelector('.choice-block2');
    	let choice3 = document.querySelector('.choice-block3');
    	let interesting1 = document.querySelector('.interesting-block');
    	let information1 = document.querySelector('.information-block1');
    	let information2 = document.querySelector('.information-block2');
    	let interesting2 = document.querySelector('.dizlike-block');
    	let heart = document.getElementById('h');
    	let like = document.querySelector('.c');
        let HEART = document.querySelectorAll('.h');
    	let dizlike = document.getElementById('d');
        let DIZLIKE = document.querySelectorAll('.d');
    	let count = document.querySelector('.c2');
        let look1 = document.querySelector('.look1');
        let look2 = document.querySelector('.look2');
        let images = document.querySelector('.img');
        let busket1 = document.getElementById('busket1');
        let txt = document.querySelector('.text');
        let busket2 = document.getElementById('busket2');
        let heart2 = document.getElementById('h2');
        let dizlike2 = document.getElementById('d2');
        let like2 = document.querySelector('.c3');
        let count2 = document.querySelector('.c4');
        let heart3 = document.getElementById('h3');
        let dizlike3 = document.getElementById('d3');
        let like3 = document.querySelector('.c5');
        let count3 = document.querySelector('.c6');     
    	let items = [];
        let items2 = [];

    	block.addEventListener('mouseover', Show);

    	block2.addEventListener('mouseover', Show2);

    	block3.addEventListener('mouseover', Show3);

    	interesting1.addEventListener('click', Open1);

    	interesting2.addEventListener('click', Open2);
        
        heart.addEventListener('click', Symm);
        heart2.addEventListener('click', Symm2);
        heart3.addEventListener('click', Symm3);

        dizlike.addEventListener('click', Minus);
        dizlike2.addEventListener('click', Minus2);
        dizlike3.addEventListener('click', Minus3);
       
        let h = 0;
        let h2 = 0;
        let h3 = 0;
 
        function Symm() {
            h++;
            like.textContent = h;


            if(like) {
               heart.classList.add('p');
               look1.classList.add('b1');
            } 
        }

        function Symm2() {
        	h2++;
        	like2.textContent = h2;

        	if(like2) {
        		heart2.classList.add('p2');
        		look1.classList.add('b1');
        	}
        }

        function Symm3() {
            h3++;
            like3.textContent = h3;

            if(like3) {
                heart3.classList.add('p3');
                look1.classList.add('b1');
            }
        }
        
        let c = 0;
        let c2 = 0;
        let c3 = 0; 

        function Minus() {
           c++;
           count.textContent = c;

           if(count) {
              dizlike.classList.add('r');
              look2.classList.add('b2');
              AddItem2();
           }
        }

        function Minus2() {
        	c2++;
            count2.textContent = c2;

            if(count2) {
            	dizlike2.classList.add('r2');
            	look2.classList.add('b2');
            	AddItem2();
            }
        }

        function Minus3() {
            c3++;
            count3.textContent = c3;

            if(count3) {
                dizlike3.classList.add('r3');
                look2.classList.add('b2');
                AddItem2();
            }
        }
        
    	function Show() {
    		choice.classList.toggle('show');
            AddItem();
    	}

        function Open1() {
            information1.classList.toggle('s1');
        }

        function Open2() {
            information2.classList.toggle('s2');
        }
        
        function AddItem() {
            //В .appendChild(), нельзя добавлять 2 элемента, т.к 2-ой элемент он просто не читает, а точнее отказывается воспроизводить

            let blocks_of_product = document.querySelectorAll('.blocks');

            /*blocks_of_product.forEach(function(b) {
               b.addEventListener('click', function() {
                  if(b) {
                    let fullPath = b.children[0].src;

                    let like_block = document.createElement('div');

                    items.push(like_block);
 
                    let name_of_product = b.children[1].children[0].textContent;


                    like_block.innerHTML = `<img src="${item.img}" alt="cake" title="cake" id="Img" />
                    <div class="txt-block">
                       <p id="txt">${item.name}</p>
                    </div>`;
            
                    like_block.className = 'l';

                    items.push(like_block);

                    information1.appendChild(like_block);

                    busket1.textContent = items.length;

                    alert('Item added');
                  } 
               }); 
            }); */

            HEART.forEach((hr) => {
               hr.addEventListener('click', () => {
                  if(hr) {
                    let main_img = hr.parentElement.parentElement.children[0].src;
                    let main_txt = hr.parentElement.parentElement.children[1].children[0].textContent;

                    let bl = document.createElement('div');
                    let bl_txt = document.createElement('span');
                    let bl_img = document.createElement('img');
                    let bl_div = document.createElement('div');

                    bl.className = 'bl';
                    bl_txt.className = 'bl_txt';
                    bl_img.className = 'bl_img';
                    bl_div.className = 'txt-block';
                    
                    information1.appendChild(bl);
                    bl.appendChild(bl_img);
                    bl.appendChild(bl_div);
                    bl_div.appendChild(bl_txt);

                    bl.src = main_img;
                    bl_txt.textContent = main_txt;
                    
                    items.push(bl);

                    busket.textContent = items.length;

                    alert('Item added');
                  }
               }); 
            });

            if(items.length >= 5) {
            	if(confirm('Вы больше не можете пополнить список, т.к он достиг максимальной длинны')) {
            		alert('Хотитие очистить список?');
            		let n = document.querySelectorAll('.l');
            		n.forEach(function(net) {
                       net.classList.add('hide1');
            		});
                    alert('Список очищен');
               	} else {
                    alert('Но вы все равно не можете пополнить список');
            	}
            }
        }

        function AddItem2() {
            let dizlike_block = document.createElement('div');
            let img2_block = document.createElement('img');
            let txt2_block = document.createElement('span');
            dizlike_block.className = 'diz';
            img2_block.className = 'img2';
            txt2_block.className = 'txt2';


            items2.push(dizlike_block);
            dizlike_block.appendChild(img2_block);
            dizlike_block.appendChild(txt2_block);

            busket2.textContent = items2.length;

            information2.appendChild(dizlike_block);
            if(items2.length >= 5) {
                if(confirm('Вы больше не можете пополнить список, т.к он достиг максимальной длинны')) {
                    alert('Хотите очистить список?');
                    let y = document.querySelectorAll('.diz');
                    y.forEach(function(yqrick) {
                       yqrick.classList.add('hide2');
                    });
                    alert('Список очищен');
                } else {
                    alert('Выбирайте продукты');
                }
            } 
        }

        function Show2() {
        	choice2.classList.toggle('open');
            AddItem();
        }

        function Show3() {
        	choice3.classList.toggle('open2');
            AddItem();
        }