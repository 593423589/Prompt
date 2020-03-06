(function () {
    var nod = document.createElement('style');
    nod.type = 'text/css';
    nod.innerHTML = `
    @keyframes fadeIn {
        0% {
          opacity: 0; 
        }
        25%{
            opacity:1;
        }
        75% {
          opacity: 1; 
        }
        100% {
          opacity: 0; 
        }
      }
`;
    document.head.appendChild(nod);
}())

function Prompt(text, duration = 1500) {
    let oFragment = document.createDocumentFragment();//创建碎片

    let div = document.createElement("div");  //创建div

    let attr = document.createAttribute("style"); //创建attr
    let left = document.body.clientWidth / 2 - 160 / 2
    attr.value = `display: block ;
           font-size:16px;
           line-height:8em;
        background: rgba(0,0,0,0.76);
        position: fixed; height:7em;width:160px;left:${left}px;top:18em; z-index:10000;
        text-align: center;line-height:6em; color: #dedede;border-radius:5px;
        animation: fadeIn ${duration}ms ;`
    let id = document.createAttribute("id"); //创建attr
    id.value = 'prompt'
    div.setAttributeNode(attr)
    div.setAttributeNode(id)

    let oTxt = document.createTextNode(text);//创建文本节点
    div.appendChild(oTxt);
    oFragment.appendChild(div);

    document.body.appendChild(oFragment) //放入body

    setTimeout(function () {
        document.body.removeChild(document.querySelector('#prompt'))
    }, duration)
}


export {Prompt}
