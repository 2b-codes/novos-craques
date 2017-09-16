import React, { Component } from "react";


import { Informations } from "../templates";

export default  class Welcome extends Component{ 

	constructor(props){ 	
		super(props);

		
	};
	render(){

		return(
			<div>
				<Informations 
					depoiments={[
						{
							pictureSrc:"https://trello-avatars.s3.amazonaws.com/949255df913920b06242fbfcda8af71e/30.png",
							pictureAlt:"alt",
							clickAction:() =>console.log("SARVE"),
							id:"1",
							subtitle:"SUbtitle",
							text:"Text",
							date:"20/20/020",
						},
						{
							pictureSrc:"https://scontent.fcgh5-1.fna.fbcdn.net/v/t1.0-9/15267609_1161074810655053_2983472521617430189_n.jpg?oh=b36d4f3a68bae3e9ca5e7e11ab673a56&oe=5A1CC960",
							pictureAlt:"alt",
							clickAction:() =>console.log("SARVE"),
							id:"2",
							subtitle:"Felipe",
							text:"O viadão",
							date:"20/20/020",
						}
					]}
					motivations={[
						{
							id: "id",
							src: "https://yt3.ggpht.com/-mpyeMZcwosY/AAAAAAAAAAI/AAAAAAAAAAA/CbWihKbYg28/s88-c-k-no-mo-rj-c0xffffff/photo.jpg",
							text: "texto texto texto texto texto texto texto texto texto ",
							subtitle: "SubTitle",
							onClick: () => console.log("Vai se foder")
						},
						{
							id: "id2",
							src: "https://yt3.ggpht.com/-mpyeMZcwosY/AAAAAAAAAAI/AAAAAAAAAAA/CbWihKbYg28/s88-c-k-no-mo-rj-c0xffffff/photo.jpg",
							text: "texto texto texto texto texto texto texto texto texto ",
							subtitle: "SubTitle",
							onClick: () => console.log("Vai se foder")
						}
					]}
					aboutUs={[
						{
							id: "id",
							text: "Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 do 'de Finibus Bonorum et Malorum' (Os Extremos do Bem e do Mal), de Cícero, escrito em 45 AC. Este livro é um tratado de teoria da ética muito popular na época da Renascença. A primeira linha de Lorem Ipsum, 'Lorem Ipsum dolor sit amet...' vem de uma linha na seção 1.10.32.",
							title: "TITLE",
						},
						{
							id: "id2",
							text: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
							title: "TITLE",
						}
					]} 
				/>			
			</div>
		);

	}
}