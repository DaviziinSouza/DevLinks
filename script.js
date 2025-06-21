function toggleMode(){
  const html = document.documentElement;
  html.classList.toggle("light");

  /*caso haja uma imagem apenas para o fundo branco
  aqui está o passo a passo
  if {html.classList.contains("Light)){
  img.setAttribute{"src", "./assets/AvatarLight.png"}
  }else{
  img.setAttribute("src", "./assets/Avatar.png")
  }
  */
}