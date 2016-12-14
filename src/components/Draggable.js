function draggable(params){

  // 移动修正
  let moveStartCorrectionX = 0;
  let moveStartCorrectionY = 0;

  function moveStart(e){
    // 添加窗口移动和释放监听
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', moveEnd);
    window.addEventListener('mouseout', moveOut);
    moveStartCorrectionX = e.pageX - params.el.offsetLeft;
    moveStartCorrectionY = e.pageY - params.el.offsetTop;
    // 设置 全局不能选中
    let style = document.body.style;
    if('userSelect' in document.body.style) style.userSelect = 'none'
    params.start && params.start({
      e: e,
      pageX: e.pageX,
      pageY: e.pageY
    })
  }

  function move(e){
    params.move && params.move({
      e: e,
      pageX: e.pageX - moveStartCorrectionX,
      pageY: e.pageY - moveStartCorrectionY
    })
  }

  function moveEnd(e){
    window.removeEventListener('mousemove', move);
    window.removeEventListener('mouseup', moveEnd);
    window.removeEventListener('mouseout', moveOut);
    let style = document.body.style;
    if('userSelect' in style) style.userSelect = null
    params.end && params.end({e: e})
  }

  function moveOut(e){
    e = e ? e : window.event;
    var from = e.relatedTarget || e.toElement;
    if (!from || from.nodeName == "HTML") {
      moveEnd(e)
    }
  }

  params.el.addEventListener('mousedown', moveStart);


  let exp = {}
  exp.clear = function(){
    params.el.removeEventListener('mousedown', moveStart)
  }
  return exp;
}

export default draggable
