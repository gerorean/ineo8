








////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////  ojo res3A c003A 
//////////////////////////////////mI AQUI VOY...  	6500-r003A		+programada  -haciendo  .terminada		
// 1.mIo003A   		2.mIres3A    3.mIr003A     4.mIc003A   	13.mIrrr3A    16.mIr001A    19.mIr002A    22.mIr004A
// 5.mIo003Z   		6.mIres3Z    7.mIr003Z     8.mIc003Z   	14.mIrrr3Z    17.mIr001Z    20.mIr002Z    23.mIr004Z
// 9.mIo003B  		10.mIres3B   11.mIr003B    12.mIc003B   15.mIrrr3B    18.mIr001B    21.mIr002B    24.mIr004B
// 25.mIr004ATG
// 26.mIr008A       2.mIwModeA   32?mIkTapaA  35.mIkControl
// 27.mIr008Z		30.mIkTapaI   33?mIkIntro  36
// 28.mIr008B       31.mIkComun   34.mIkBoton  37




//f FUNCIONES ..
/*	f0000()	... f0144()*   *NOTA! las funciones de la f0128() a la f0137() estan reservadas en inded.js para el servidor, aquí no se pueden usar ver tabla de registros en indet.js
	hh1() 	... hh111()
*/
//============================================================
f0000=()=>	//ALISTAR ambiente en 0-blanco, 1-desarrollo o 2-producción (SI ya cargo el documento)
		{	//console.timeEnd('tiempoDeCarga');//:/SwitchS0//INFORMAR cuánto tiempo demoró en cargar
			lOI(0);
			iTitle.innerHTML = app;//CARGAR el titulo
			
/*
			let ruta = window.location.hash;
			nruta = ruta.slice(1);//quita el # ajusta el string ruta
	
			rumbi = '';
			rumbo = nruta.split('/');
			console.log('rumbo=',rumbo);
			rumbi = rumbo.join('i');
			console.log('rumbi=',rumbi);
*/


			//f0141();//ENRUTAR al usuario con rutas validas y TRAER anuncios de la ruta actual de la base de datos

			//loC = window.location.hash;//Carga inicial de la ruta actual
			f0107();//ACTUALIZAR el idioma, la seña (desde wIdi y wSign), el string de los botones de los sitios y la ruta #
			switch(tModo)
			{	case 0:
					console.log('[AMBIENTE en blanco..');
					f0116();//PONER a marchar las marquesinas
				break;
				case 1:
					console.log('[AMBIENTE de desarrollo..');
					f0119();//CONMUTAR el botón seña(1) o idioma visible()
					hh21(6);//APLICAR color azul
					hh5(1);//APLICAR el modo 1
					tM = vF * cut;console.log('tM='+ tM);//
					//speed = g00VARS[44][2];//Velocidad configurada por el usuario
					canTts.onvoiceschanged = f0002;//L Asincrona => Carga el objeto voices y maneja las voces disponibles cuando hay cambios en la voz
					if (canVibrate)//si puede vibrar:  on Firefox, Chrome and Safari on some iOS devices the code will be broken at this line
					{	iV2e.style.backgroundColor = 'yellow';
						//window.navigator.vibrate(0);//ver si hacer un try-catch aquí para quitar el error "Blocked call to navigator.vibrate because user hasn't tapped on the frame or any embedded frame yet", en Safari si se presenta el error de vibración por falta de interacción no continua, se detiene el prog
					}
					else
					{	iV2e.style.backgroundColor = 'red';
					}
					if (canTts)//si puede vibrar:  on Firefox, Chrome and Safari on some iOS devices the code will be broken at this line
					{	iV2d.style.backgroundColor = 'yellow';
						canTts.cancel();//cancela los anuncios que estén corriendo
					}
					else
					{	iV2d.style.backgroundColor = 'red';
					}

					//f0043(1);//L HACER faro off y si puede vibrar PARAR cualquier vibración anterior (1: por reset)
				

					//f0045();//DETENER vibraciones parpadeos e intervalos pendientes	- aqui no hace nada porque no se ha detectado que pueda vibrar 
					
					const	i555			= setInterval(f0003,miliS);//C 300 o 500 PRODUCIR pulsaciones
					
				
				/*	if (window.navigator && window.navigator.vibrate)//Si pasa la prueba de soporte API VIBRATE de navegadores
					{	console.log('[Vibration API is supported]');
						g00VARS[60][3] = 1;
					}
					else//Si NO pasa la prueba de soporte API VIBRATE de navegadores
					{	console.log('[Vibration API Not supported]');
					}*/
					f0017(1);//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
				//	f0051();//MOSTRAR capa ruta y botones
					//f0028();//ACTUALIZAR tamaño texto por defecto
				//	f0086();//ENCONTRAR todos los elementos cLife y cPros (ruta) o de cPros0 y cLife0 (tapa)
					f0067();//K OBTENER la constante del tamaño de la ventana, SI la pantalla es máxima, ALERTA ES OFF y no es una presentacion AV entonces CARGAR los guiones de RUTA y POSICIONAR el foco sobre la casilla actual
				//	f0087();//REINICIAR los contadores de señas


					window.addEventListener('resize',f0067);//K
					const	i556 = setInterval(f0085,aasen);//aasen*speed*speed  600  // L 300 o 500 INTERVALOS EN MILISEGUNDOS PARA MOSTRAR EL CAMBIO DE SEÑA DEL (LOS) INTERPRETE(S)


// ... ... ... Aquí Voy!! ... ... ...
					//Deteccíon de eventos: nota se esta presentando un pequeño error sobre el scroll cuando pasa a anuncios se corre un tris que quita la presentacion, para arreglarlo abria que temporizar un poco la deteccion del scroll apenas pasa a mostrar la presentacion de los anuncios
					document.addEventListener('click',function(){f0079()});//console.log('...click del mouse');MOVIMIENTO SOBRE EL TOUCH
					aRUTA.addEventListener('scroll',function(){f0079(1)});//MOVIMIENTO SOBRE EL TOUCH
					aTAPA.addEventListener('scroll',function(){f0079(1)});//MOVIMIENTO SOBRE EL TOUCH
					document.addEventListener('mousemove',function(){f0079()});//console.log('...MOVIMIENTO del mouse');MOVIMIENTO SOBRE EL TOUCH
					document.addEventListener('touchstart',function(){f0079()});//console.log('. . .TOQUE SOBRE EL TOUCH');'TOQUE' SOBRE EL TOUCH



				break;
				case 2:
					console.log('[AMBIENTE de producción..');
				break;
			}
			hh35();//L ESTILIZAR: texto negro, botón blanco, fondo oscuro
			//console.log('[Ending f0000()]');
			fff();
		}

f0001=()=>//CONSEGUIR la hora local actual
		{	lOG(1);
			zTime[0] = new Date();
  			zTime[1] = zTime[0].getHours();
  			zTime[2] = zTime[0].getMinutes();
  			zTime[2] = f0019(zTime[2]);
  			miHora = ''.concat(zTime[1] + ':' + zTime[2]);
  		}
 
f0002=()=>//CONSEGUIR la voz (GetVoices), Manejador de eventos cuando las voces cambian...
		{	lOL(2);
			//console.time('duracionCargaVoces');//:/Switch S1
			iV1e.style.backgroundColor = 'white';
			let timeout = 0;
			const maxTimeout = 10000;//2000 Tiempo máximo para conseguir las voces
			const interval = 1000;//250
			const loadVoices = function(cb) 
			{	iV1d.style.backgroundColor = 'orange';//inici asinc
				ii[0] += 1;
				switch (ii[0])//Contador de color:
				{	case (1):iV1c.style.backgroundColor = 'blue';break;
					case (2):iV1c.style.backgroundColor = 'lightgreen';break;
					case (3):iV1c.style.backgroundColor = 'yellow';break;
					case (4):iV1c.style.backgroundColor = 'orange';break;
				}
				if(5 <= ii[0])
				{	if(10 <= ii[0])
					{	iV1c.style.backgroundColor = 'white';
					}
					else
					{	iV1c.style.backgroundColor = 'red';
					}
				}
				voices = canTts.getVoices()//__/:__[voices] = [window.voices] es un objeto de window no requiere declararse, consigue las voces que esten disponibles
				if (timeout >= maxTimeout)
			  	{	iV1a.style.backgroundColor = 'red';
			  		return cb(new Error('[LoadVoices max timeout exceeded]'))
			  	}
			  	else
			  	{	iV1a.style.backgroundColor = 'yellow';
			  	}
				if (voices.length > 0)
				{	iV1b.style.backgroundColor = 'yellow';
					return cb(undefined, voices)
			  	}
			  	else
			  	{	iV1b.style.backgroundColor = 'red';
			  	}
			  	timeout += interval;
			  	setTimeout(()=>
			  	{	loadVoices(cb)
			  	}	,interval);
			}	
			loadVoices((err, voices) =>
			{	iV1d.style.backgroundColor = 'blue';//fin asin
				if (err)//SI hay error..
				{	iV2f.style.backgroundColor = 'red';
					console.log('[Voices not loaded and not available]');	
					return console.error(err);
				}
				else
				{	iV2f.style.backgroundColor = 'lightgreen';
				}
				//g00VARS[60][2] = 1;//Voces cargadas - hay que quitar este campo porque pueden cargarse voces por defecto en el equipo, voices es bueno que se cargue pero no es necesario para que funcione
				console.log('[Voices API loaded and available]');
				//console.timeEnd('duracionCargaVoces');//:/Switch S1
				fff();
				//voices;//:/Switch S1 (voices loaded and available) No entiendo que hace esta linea, nada??, verificar???
			});
		}

f0003=()=>//PRODUCIR pulsaciones
		{	lOC(3);//Se oculta para no contar pulsaciones
			if(tics > 2)//DETECTAR cuando van más de N pulsos rapidos
			{	tics = 0;//REINICIAR conteo de pulsos rapidos
				f0001();//CONSEGUIR la hora local actual
				if(zTime[1]>=19||zTime[1]<4)//7pm - 4am temp Calida (9horas)
				{ 	luZ[1] = 'rgba(213,133,42,0.15)';
				}
				if(zTime[1]>=4&&zTime[1]<9)//4am - 9am temp Fría (5horas)
				{ 	luZ[1] = 'rgba(70,70,255,0.05)';
				}
				if(zTime[1]>=9&&zTime[1]<14)//9am - 2pm temp Neutra (5horas)
				{ 	luZ[1] = 'transparent';
				}
				if(zTime[1]>=14&&zTime[1]<19)//2pm - 7pm temp Amarilla (5horas)
				{ 	luZ[1] = 'rgba(255,255,70,0.04)';
				}
				iBody.style.setProperty('--cDia',luZ[1]);
				iHora.innerHTML = miHora;// + "<div id='iMenu' class='cFlex cR'></div>";
				if(flip)//CONMUTAR on/off el pulso lento
				{	flip = 0;
					iV1f.style.backgroundColor = 'grey';
				}
				else
				{	flip = 1;
					iV1f.style.backgroundColor = 'pink';
				}
			}
			else
			{ 	tics += 1;//INCREMENTAR un pulso rápido
			}

			if(g00VARS[55][2])// && g00VARS[60][2])//Si ya ocurrio el primer clic y las voces estan cargadas
			{	if(canTts.speaking)//DETECTAR SI está dando un anuncio
				{	iDice.classList.remove('cX');//ACTIVAR el "parlante" óptico
				}
				else//SI NO está dando un anuncio
				{	iDice.classList.add('cX');//DESACTIVAR el "parlante" óptico
				}
			}			
			if(g00VARS[76][2] && g00VARS[55][3])//SI YA SE SELECCIONO TIPO DE persona Y NO HAY ALERTA
			{	


				//console.log('conteo[1]=',conteo[1]);
				if(conteo[1])//SI la presentación esta desactivada, el conteo esta activado
				{	//falta reiniciar el conteo cuando ocurre scroll o clic sobre el "hueco"
					conteo[0] -= 1;//DECREMENTAR EL CONTEO
					//console.log('conteo[0]=',conteo[0]);
					if((conteo[0] < 1)||(conteo[3]))//SI SE TERMINO LA CUENTA DE LOS PULSOS o hay orden desde la ventana i
					{ 	conteo[1] = 0;//inhabilita el conteo porque se activa la presentación
						conteo[3] = 0;//desactiva orden del tablón desde el menú
						accion = 0;//no han transcurrido alertas ni eventos durante el conteo
						console.log('se activa la presentación');
						



						//console.log('f3 g00VARS[64][3]=',g00VARS[64][3],'; g00VARS[64][2]=',g00VARS[64][2],'\n\n');
						//g00VARS[64][2] = 4;//icono grande
						

			//aqui pasa la primer vez..
						hh61();//CARGAR la ruta 3 con la presentación de anuncios					
						f0087();//REINICIAR los contadores de señas
					}
				}
				else//la presentación esta activada, el conteo esta desactivado...
				{	/*if(contPre[0] > 0)//Controlar el cambio de cada anuncio
					{	contPre[0] -= 1;//DECREMENTAR EL conteo de la presentación
						//console.log('contPre[0]=',contPre[0]);
					}
					else
					{	contPre[0] = aPulPre;//Reinicia el conteo de la duración del anuncio
						if(contPre[1] < (vis3.length - 2))//Cantidad de anuncios comunitarios visibles
						{	contPre[1] += 1;//Avanza al siguiente anuncio visible
							console.log('contPre[1]=',contPre[1]);
						}
						else
						{	contPre[1] = 0;//Reinicia al anuncio 0 de Portada
							//contPre[1] = 1;//Reinicia al anuncio 1 visible
							console.log('contPre[1]=',contPre[1]);
						}
						//si contPre[1] = 0 => mostrar una aviso extra de "Bienvenido a [NOMBRE DE LA COMUNIDAD]"
						f0090();//REINICIAR animación incluido g00VARS[3]
						hh62(contPre[1]);//reiniciar las marquesinas y reiniciar el guion de señas, CARGAR los guiones del anuncio contPre[1] de la presentación AV Audio Visual
					}*/

					if(contPre[0])//Controlar el cambio de cada anuncio
					{	contPre[0] = 0;//Desactivar orden de pasar al siguiente anuncio
						iBody.style.setProperty('--cOL','transparent');//
						iBody.style.setProperty('--cOI','transparent');//
						iBody.style.setProperty('--cOy','transparent');//
						iBody.style.setProperty('--cOw','transparent');//
						if(contPre[1] < (vis3.length - 2))//Cantidad de anuncios comunitarios visibles
						{	contPre[1] += 1;//Avanza al siguiente anuncio visible
							console.log('... 1 contPre[0]=',contPre[0],'; contPre[1]=',contPre[1]);
						}
						else
						{	contPre[1] = 0;//Reinicia al anuncio 0 de Portada
							//contPre[1] = 1;//Reinicia al anuncio 1 visible
							console.log('... 2 contPre[0]=',contPre[0],'; contPre[1]=',contPre[1]);
						}
						//si contPre[1] = 0 => mostrar una aviso extra de "Bienvenido a [NOMBRE DE LA COMUNIDAD]"
						f0090();//REINICIAR animación incluido g00VARS[3]
						hh62(contPre[1]);//reiniciar las marquesinas y reiniciar el guion de señas, CARGAR los guiones del anuncio contPre[1] de la presentación AV Audio Visual
					}
				}
			}
			if(((!g00VARS[55][3])||(accion))&&(!conteo[1]))//funcion de restablecer por detectar actividad o está activa alguna alerta, si hay alerta o ocurrio un evento y el conteo no esta activo porque se activo la presentación
			{	
				hh74();//DESACTIVAR la presentación AV
				intM.classList.remove('cX');//Muestra la interfaz M
				iRUTA.classList.remove('cX');//Muestra LA RUTA
				hh8();//CARGAR la ruta 3 en pantalla

			/*	conteo[1] = 1;//se habilita el conteo porque se desactiva la presentación
				conteo[0] = aaini;//se reinicia el conteo
				accion = 0;//reset de eventos para dar inicio al conteo
				if(g00VARS[5][2])//Si esta i1..
				{	inteL.innerHTML = '';
				}
				inteR.innerHTML = '';//Error?
				console.log(' ::::: se DESactiva la presentación');
				iPRESE.classList.add('cX');
				iCodQ.classList.add('cX');
				iRUTA.classList.remove('cX');//OCULTA LA RUTA por dar info
				hh8();//CARGAR la ruta 3 en pantalla
			*/

			}
			






		}

f0007=()=>	//CONVERTIR texto NORMALIZADO a braille - IN g00HTML[3][2] OUT g00HTML[19][2] pro7
		{	lOL(7);
			let v4;
			let v6;
			g00VARS[49][2] = '';//RESET DEL HTML
			for (v6 = 0; v6 < g00HTML[3][2].length; v6++)//RECORRE UNA A UNA TODAS LAS SUBCADENAS "PALABRAS" DEL ARREGLO
			{	g00HTML[15][2] = g00HTML[3][2][v6];
				if (((g00VARS[28][2] == 1)&&(g00VARS[5][2]))||(g00VARS[6][2] == 1))//si i1 y idioma internacional o es una palabra inter -ASIGNA LOS PREFIJOS INTERNACIONALES
				//if (g00VARS[28][2] >= 1)//idioma internacional o LOGO -ASIGNA LOS PREFIJOS INTERNACIONALES
				{	g00HTML[16][2] = g00HTML[15][2].split(g00eREG[kLineIdi[1][4]][1]);//FRACCIONA LA SUBCADENA:separa los grupos de acuerdo al idioma INTERNACIONAL
				}
				else//idioma local -ASIGNA LOS PREFIJOS LOCALES
				{	g00HTML[16][2] = g00HTML[15][2].split(g00eREG[kLineIdi[g00VARS[27][2]][4]][1]);//FRACCIONA LA SUBCADENA:separa los grupos de acuerdo al idioma LOCAL
				}
				g00HTML[16][2] = g00HTML[16][2].filter(function(el)
				{	if (el != '')
					{ 	return el
					}
				});//quita los '' EXTRA del arreglo 16
				g00HTML[17][2] = '';
				for (v4 = 0; v4 < g00HTML[16][2].length; v4++)//RECORRER 16 LA SUBCADENA PARA CARACTERIZAR CADA GRUPO
				{	if(g00HTML[16][2][v4].match(/[a-z]+/g))//DETECTA SI EL GRUPO ACTUAL ES(SON) MINÚSCULA(S)
					{	g00HTML[17][2] += '1,';
					}
					if(g00HTML[16][2][v4].match(/[0-9]+/g))//DETECTA SI EL GRUPO ACTUAL ES(SON) NUMERO(S)
					{	if((v4 + 1 < g00HTML[16][2].length)&&(g00HTML[16][2][v4 + 1].match(/[a-z]+/g)))//SI NO ES EL ULTIMO GRUPO DETECTA SI EL SIGUIENTE GRUPO ES/SON LETRA(S) MINUSCULA(S)
						{	g00HTML[17][2] += '5,9,';
							v4 += 1;//brinca el siguiente grupo
						}
						else
						{	g00HTML[17][2] += '4,';
						}
					}
					if(g00HTML[16][2][v4].match(/[A-Z]+/g))//DETECTA SI EL GRUPO ACTUAL ES(SON) MAYÚSCULA(S)
					{	if(g00HTML[16][2][v4].length == 1)//DETECTA SI EL TAMAÑO DEL GRUPO ES DE UNA LETRA MAYÚSCULA
						{	if((v4 + 1 < g00HTML[16][2].length)&&(g00HTML[16][2][v4 + 1].match(/[a-z]+/g)))//SI NO ES EL ULTIMO GRUPO DETECTA SI EL SIGUIENTE GRUPO ES/SON LETRA(S) MINUSCULA(S)
							{	g00HTML[17][2] += '6,1,';
								v4 += 1;//brinca el siguiente grupo
							}
							else
							{	g00HTML[17][2] += '6,';
							}
						}
						else//SON VARIAS LETRAS MAYÚSCULAS
						{	if((v4 + 1 < g00HTML[16][2].length)&&(g00HTML[16][2][v4 + 1].match(/[a-z]+/g)))//SI NO ES EL ULTIMO GRUPO DETECTA SI EL SIGUIENTE GRUPO ES/SON LETRA(S) MINUSCULA(S)
							{	g00HTML[17][2] += '8,9,';
								v4 += 1;//brinca el siguiente grupo
							}
							else
							{	g00HTML[17][2] += '7,';
							}
						}
					}
					if(g00HTML[16][2][v4].match(/[^0-9A-Za-zÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç]+/g))//DETECTA SI EL GRUPO ACTUAL ES(SON) CARACTER(ES) ESPECIAL(ES)
					{	if((v4 + 1 < g00HTML[16][2].length)&&(g00HTML[16][2][v4 + 1].match(/[a-z]+/g)))//SI NO ES EL ULTIMO GRUPO DETECTA SI EL SIGUIENTE GRUPO ES/SON LETRA(S) MINUSCULA(S)
						{	g00HTML[17][2] += '3,9,';
							v4 += 1;//brinca el siguiente grupo
						}
						else
						{	g00HTML[17][2] += '2,';
						}
					}			
				}
				g00HTML[17][2] = g00HTML[17][2].substring(0, g00HTML[17][2].length - 1);//Se quita la ultima ,
				g00HTML[17][2] = g00HTML[17][2].split(',');//Arreglo cantidades individuales por cada caracter especial encontrado
				for (v4 = 0; v4 < g00HTML[16][2].length; v4++)//RECORRER 16 LA SUBCADENA PARA SEPARAR CADA GRUPO
				{	let v3 = 0;//reset del prefijo
					for (let v5 = 1; v5 < s00Grupo.length; v5++)//RECORRE los tipos de GRUPO
					{	if(((g00VARS[28][2] == 1)&&(g00VARS[5][2]))||(g00VARS[6][2] == 1))//si i1 y es igual a ASL (1internacional) o es una palabra inter
						//if(g00VARS[28][2])//xxx es igual a true o 1 (internacional)
						{	if(g00HTML[17][2][v4] == s00Grupo[v5][0])
							{	v3 = s00Grupo[v5][1];//trae la casilla del codigo braile del prefijo
							}		
						}
						else//xxx es igual a false o 0 (local)
						{	if(g00HTML[17][2][v4] == s00Grupo[v5][0])
							{	v3 = s00Grupo[v5][g00VARS[27][2]];//trae la casilla del codigo braile del prefijo
							}
						}
					}
					if(v3)//si v3 != 0 ADICIONA EL PREFIJO!
					{	let v2;//numero intermedio y represantativo del caracter braille
						
						if (((g00VARS[28][2] == 1)&&(g00VARS[5][2]))||(g00VARS[6][2] == 1))//si i1 y idioma internacional o es una palabra inter -ASIGNA LOS PREFIJOS INTERNACIONALES
						//if(g00VARS[28][2])//es igual a true o 1 (internacional)
						{	v2 = s00braIdi[v3][1];
						}
						else//es igual a false o 0 (local)
						{	v2 = s00braIdi[v3][g00VARS[27][2]];
						}
						if(v2)//reviza que no hallan ceros! EN EL LOCAL y el internacional
						{	g00VARS[49][2] += s00brailG[v2][1];
							if((g00HTML[17][2][v4] == '7')||(g00HTML[17][2][v4] == '8' ))//Cuando suceden ciertos casos particulares SE REPITE el prefijo 
							{	g00VARS[49][2] += s00brailG[v2][1];
							}
						}
					}
					g00HTML[18][2] = g00HTML[16][2][v4].split('');
					for (let v7 = 0; v7 < g00HTML[18][2].length; v7++)//-RECORRER UNO A UNO TODOS LOS CARACTERES PARA adicionar el braille correspondiente
					{	f0008(g00HTML[18][2][v7]);//busca el braille correspondiente a ese caracter y lo agrega a g00VARS[49][2] += ;
					}
				}
				if(v6 != (g00HTML[3][2].length - 1))//si no es la ultima SUBCADENA'palabra' incerta un espacio
				{	g00VARS[49][2] += s00brailG[0][1];//' ';
				}
			}
			g00HTML[19][2] = g00VARS[49][2];
		}

f0008=(let)=>//PASAR caracteres especiales o letras SUELTAS a id braille //o0063
		{	lOL(8);
			let v3 = 0;
			switch (let)//-ASIGNA NUMERO A V3 QUE INDICA LA LETRA PARA PASARLA A BRAILLE
			{	case ('a'):v3 =  1;break;
				case ('b'):v3 =  2;break;
				case ('c'):v3 =  3;break;
				case ('d'):v3 =  4;break;
				case ('e'):v3 =  5;break;
				case ('f'):v3 =  6;break;
				case ('g'):v3 =  7;break;
				case ('h'):v3 =  8;break;
				case ('i'):v3 =  9;break;
				case ('j'):v3 = 10;break;
				case ('k'):v3 = 11;break;
				case ('l'):v3 = 12;break;
				case ('m'):v3 = 13;break;
				case ('n'):v3 = 14;break;
				case ('ñ'):v3 = 15;break;
				case ('o'):v3 = 16;break;
				case ('p'):v3 = 17;break;
				case ('q'):v3 = 18;break;
				case ('r'):v3 = 19;break;
				case ('s'):v3 = 20;break;
				case ('t'):v3 = 21;break;
				case ('u'):v3 = 22;break;
				case ('v'):v3 = 23;break;
				case ('w'):v3 = 24;break;
				case ('x'):v3 = 25;break;
				case ('y'):v3 = 26;break;
				case ('z'):v3 = 27;break;
				case ('á'):v3 = 28;break;
				case ('é'):v3 = 29;break;
				case ('í'):v3 = 30;break;
				case ('ó'):v3 = 31;break;
				case ('ú'):v3 = 32;break;
				case ('ü'):v3 = 33;break;
				case ('A'):v3 =  1;break;
				case ('B'):v3 =  2;break;
				case ('C'):v3 =  3;break;
				case ('D'):v3 =  4;break;
				case ('E'):v3 =  5;break;
				case ('F'):v3 =  6;break;
				case ('G'):v3 =  7;break;
				case ('H'):v3 =  8;break;
				case ('I'):v3 =  9;break;
				case ('J'):v3 = 10;break;
				case ('K'):v3 = 11;break;
				case ('L'):v3 = 12;break;
				case ('M'):v3 = 13;break;
				case ('N'):v3 = 14;break;
				case ('Ñ'):v3 = 15;break;
				case ('O'):v3 = 16;break;
				case ('P'):v3 = 17;break;
				case ('Q'):v3 = 18;break;
				case ('R'):v3 = 19;break;
				case ('S'):v3 = 20;break;
				case ('T'):v3 = 21;break;
				case ('U'):v3 = 22;break;
				case ('V'):v3 = 23;break;
				case ('W'):v3 = 24;break;
				case ('X'):v3 = 25;break;
				case ('Y'):v3 = 26;break;
				case ('Z'):v3 = 27;break;
				case ('Á'):v3 = 28;break;
				case ('É'):v3 = 29;break;
				case ('Í'):v3 = 30;break;
				case ('Ó'):v3 = 31;break;
				case ('Ú'):v3 = 32;break;
				case ('Ü'):v3 = 33;break;
				case ('1'):v3 = 34;break;
				case ('2'):v3 = 35;break;
				case ('3'):v3 = 36;break;
				case ('4'):v3 = 37;break;
				case ('5'):v3 = 38;break;
				case ('6'):v3 = 39;break;
				case ('7'):v3 = 40;break;
				case ('8'):v3 = 41;break;
				case ('9'):v3 = 42;break;
				case ('0'):v3 = 43;break;
				case ('.'):v3 = 44;break;
				case (','):v3 = 45;break;
				case ('¿'):v3 = 46;break;
				case ('?'):v3 = 47;break;
				case (';'):v3 = 48;break;
				case ('¡'):v3 = 49;break;
				case ('!'):v3 = 50;break;
				case (':'):v3 = 51;break;
				case ('\`'):v3 = 52;break;
				case ('\''):v3 = 53;break;
				case ('*'):v3 = 54;break;
				case ('('):v3 = 55;break;
				case (')'):v3 = 56;break;
				case ('-'):v3 = 57;break;
				case ('+'):v3 = 76;break;
				default:v3 = 54;	
			}
			let v2;//número intermedio y representativo del caracter braille
			if (((g00VARS[28][2] == 1)&&(g00VARS[5][2]))||(g00VARS[6][2] == 1))//si i1 y idioma internacional o es una palabra inter -ASIGNA LOS PREFIJOS INTERNACIONALES		
			{	v2 = s00braIdi[v3][1];
			}
			else//es igual a false o 0
			{	v2 = s00braIdi[v3][g00VARS[27][2]];	
			}
			if(v2)
			{	g00VARS[49][2] += s00brailG[v2][1];
				//LISTA DE CASOS PARTICULARES QUE REQUIEREN MÁS DE UN CARACTER BRAILLE:
				if((v3 == 54)&&((g00VARS[28][2])||((g00VARS[27][2] == 1)&&(g00VARS[5][2])))) 
				//if((v3 == 54)&&((g00VARS[28][2])||(g00VARS[27][2] == 1))) 
				{	g00VARS[49][2] += s00brailG[v2][1];//EN INGLES ingles se repite el signo de asterisco
				}
			}
		}

f0009=()=>//CONVERTIR puntos y rayas Morse a tiempo Morse (milisegundos) y ACTUALIZAR cada constante de tiempo Morse según la constante de velocidad morse actual
		{	lOG(9);
			let v1;
			let v2;
			if(bMors)//Aquí falta crear un ajuste para cambiar el valor de velocidad morse y bMors, Si g00VARS[48][2] cambia de valor entonces el siguiente código actualiza las constantes de tiempo Morse una sola vez gracias a la bandera bMors, es decir las actualiza si hay un cambio:
			{	bMors = 0;//Desactiva la bandera bMors para que no se repita si no hay un cambio en la velocidad Morse
				let v4 = (4.5 - (g00VARS[48][2]*2))*10;//la konstante de velocidad Morse varia entre 45(0-Lento) y 5(2-Rapido)
				for (v1 = 1; v1 < s00timeMor.length; v1++)//RECORRE UNA A UNA TODAS LAS SUBCADENAS "PALABRAS" DEL ARREGLO
				{	s00timeMor[v1][2] = s00timeMor[v1][1]*v4;//les asigna el peso
				}
			}
			for (v1 = 1; v1 < s00morseG.length; v1++)//RECORRE UNA A UNA TODAS LAS SUBCADENAS "PALABRAS" DEL ARREGLO
			{	s00morseG[v1][3] = s00morseG[v1][2].split('');
				for (v2 = 0; v2 < s00morseG[v1][3].length; v2++)//RECORRE UNA A UNA TODAS LAS SUBCADENAS "PALABRAS" DEL ARREGLO
				{	switch(s00morseG[v1][3][v2])
					{	case '1':s00morseG[v1][3][v2] = s00timeMor[1][2];
						break;
						case '2':s00morseG[v1][3][v2] = s00timeMor[2][2];
						break;
						case '3':s00morseG[v1][3][v2] = s00timeMor[3][2];
						break;
					} 
				}
			}
		}

f0010=(on)=>//CONVERTIR texto NORMALIZADO a morse  -> on: hacer los ·s y -s DEL HTML -> off: los tiempos DEL VIBRADOR
		{	lOL(10);
			let vt1 = '';//RESET de los ·'s, -'s y espacios acumulados que van a salir en HTML		
			let vt2 = '';//Reset de tiempos de vibrado
			let v1;
			let v2;
			g00HTML[24][2] = '';//Reset tiempos 50,100,300,100,80,350,80,
			for (v1 = 0; v1 < g00HTML[3][2].length; v1++)//RECORRE UNA A UNA TODAS LAS SUBCADENAS "PALABRAS" DEL ARREGLO
			{	//in B:
				g00HTML[20][2] = g00HTML[3][2][v1];//in Una subcadena 'PALABRA' de 3[x] para pasarla a MORSE...
				g00HTML[21][2] = g00HTML[20][2].toLowerCase();//[20] en minúsculas
				g00HTML[22][2] = g00HTML[21][2].split('');//[21] separado en caracteres sueltos
				for (v2 = 0; v2 < g00HTML[22][2].length; v2++)//-RECORRER UNO A UNO TODOS LOS CARACTERES PARA adicionar el braille correspondiente
				{	let v3 = 1;//el que sigue es un caracter:1
					if((v2 + 1) == g00HTML[22][2].length)
					{	v3 = 0;//es el último caracter de la subcadena o 'palabra'
					}				
					f0011(g00HTML[22][2][v2]);//L g00VARS[23][2]ASIGNAR número representativo a cada caracter (g00VARS[23]) para luego pasarla a morse
					if(g00VARS[23][2])
					{	if(on)
						{	vt1 += s00morseG[g00VARS[23][2]][1];//Adiciona los ·'s y -'s que van a salir en el HTML
						}
						else
						{	vt2 += s00morseG[g00VARS[23][2]][3];//Adiciona los tiempos de cada punto, raya y espacio del vibrador
						}
					}
					if(v3)//No es la ultima letra..
					{	if(on)
						{	vt1 += '\'';//AGREGA UNA CORTA SEPARACION DE TIEMPO en el HTML
						}
						else
						{	vt2 += ','+s00timeMor[4][2]+',';//Adiciona los tiempos de cada punto, raya y espacio
						}
					}
				}
				if(v1 != (g00HTML[3][2].length - 1))//si no es la ultima SUBCADENA'palabra' incerta un espacio
				{	if(on)
					{	vt1 += '| ';//AGREGA UNA LARGA SEPARACION DE TIEMPO
					}
					else
					{	vt2 += ','+s00timeMor[5][2]+',';//Adiciona los tiempos de cada punto, raya y espacio
					}
				}
			}
			if(on)
			{	g00HTML[23][2] = vt1;//HTML en ·s y -s morse del parrafo 0
			}
			else
			{	g00HTML[24][2] = vt2;//Tiempo en milisegundos morse del parrafo 0
				g00HTML[24][2] = g00HTML[24][2].split(',');
				//out C:
				for (v1 = 0; v1 < g00HTML[24][2].length; v1++)//-RECORRER LISTA CARACTERES ESPECIALES RESUMIDOS DEL ARREGLO
				{ 	g00HTML[24][2][v1] = parseInt(g00HTML[24][2][v1]);//El arreglo tipo string se pasa a tipo número
				}
			}
		}

f0011=(let)=>//ASIGNAR número representativo a cada caracter g00VARS[23] para luego pasarlo a morse//o0065
		{	lOL(11);
			let v3 = 0;
			switch (let)
			{	case ('a' ):v3 =  1;break;
				case ('b' ):v3 =  2;break;
				case ('c' ):v3 =  3;break;
				case ('d' ):v3 =  4;break;
				case ('e' ):v3 =  5;break;
				case ('f' ):v3 =  6;break;
				case ('g' ):v3 =  7;break;
				case ('h' ):v3 =  8;break;
				case ('i' ):v3 =  9;break;
				case ('j' ):v3 = 10;break;
				case ('k' ):v3 = 11;break;
				case ('l' ):v3 = 12;break;
				case ('m' ):v3 = 13;break;
				case ('n' ):v3 = 14;break;
				case ('ñ' ):v3 = 15;break;
				case ('o' ):v3 = 16;break;
				case ('p' ):v3 = 17;break;
				case ('q' ):v3 = 18;break;
				case ('r' ):v3 = 19;break;
				case ('s' ):v3 = 20;break;
				case ('t' ):v3 = 21;break;
				case ('u' ):v3 = 22;break;
				case ('v' ):v3 = 23;break;
				case ('w' ):v3 = 24;break;
				case ('x' ):v3 = 25;break;
				case ('y' ):v3 = 26;break;
				case ('z' ):v3 = 27;break;
				case ('á' ):v3 = 28;break;
				case ('é' ):v3 = 29;break;
				case ('í' ):v3 = 30;break;
				case ('ó' ):v3 = 31;break;
				case ('ú' ):v3 = 32;break;
				case ('ü' ):v3 = 33;break;
				case ('A' ):v3 =  1;break;
				case ('B' ):v3 =  2;break;
				case ('C' ):v3 =  3;break;
				case ('D' ):v3 =  4;break;
				case ('E' ):v3 =  5;break;
				case ('F' ):v3 =  6;break;
				case ('G' ):v3 =  7;break;
				case ('H' ):v3 =  8;break;
				case ('I' ):v3 =  9;break;
				case ('J' ):v3 = 10;break;
				case ('K' ):v3 = 11;break;
				case ('L' ):v3 = 12;break;
				case ('M' ):v3 = 13;break;
				case ('N' ):v3 = 14;break;
				case ('Ñ' ):v3 = 15;break;
				case ('O' ):v3 = 16;break;
				case ('P' ):v3 = 17;break;
				case ('Q' ):v3 = 18;break;
				case ('R' ):v3 = 19;break;
				case ('S' ):v3 = 20;break;
				case ('T' ):v3 = 21;break;
				case ('U' ):v3 = 22;break;
				case ('V' ):v3 = 23;break;
				case ('W' ):v3 = 24;break;
				case ('X' ):v3 = 25;break;
				case ('Y' ):v3 = 26;break;
				case ('Z' ):v3 = 27;break;
				case ('Á' ):v3 = 28;break;
				case ('É' ):v3 = 29;break;
				case ('Í' ):v3 = 30;break;
				case ('Ó' ):v3 = 31;break;
				case ('Ú' ):v3 = 32;break;
				case ('Ü' ):v3 = 33;break;
				case ('1' ):v3 = 34;break;
				case ('2' ):v3 = 35;break;
				case ('3' ):v3 = 36;break;
				case ('4' ):v3 = 37;break;
				case ('5' ):v3 = 38;break;
				case ('6' ):v3 = 39;break;
				case ('7' ):v3 = 40;break;
				case ('8' ):v3 = 41;break;
				case ('9' ):v3 = 42;break;
				case ('0' ):v3 = 43;break;
				case ('.' ):v3 = 44;break;
				case (',' ):v3 = 45;break;
				case ('¿' ):v3 = 46;break;
				case ('?' ):v3 = 47;break;
				case (';' ):v3 = 48;break;
				case ('¡' ):v3 = 49;break;
				case ('!' ):v3 = 50;break;
				case (':' ):v3 = 51;break;
				case ('"' ):v3 = 52;break;
				case ('/' ):v3 = 53;break;
				case ('\''):v3 = 54;break;
				case ('(' ):v3 = 55;break;
				case (')' ):v3 = 56;break;
				case ('-' ):v3 = 57;break;
				case ('&' ):v3 = 58;break;
				case ('=' ):v3 = 59;break;
				case ('+' ):v3 = 60;break;
				case ('_' ):v3 = 61;break;
				case ('$' ):v3 = 62;break;
				case ('@' ):v3 = 63;break;
				case ('*' ):v3 = 64;break;
				case ('ç' ):v3 = 65;break;
				case ('à' ):v3 = 66;break;
				case ('è' ):v3 = 67;break;
				case ('ù' ):v3 = 68;break;
				case ('â' ):v3 = 69;break;
				case ('ê' ):v3 = 70;break;
				case ('î' ):v3 = 71;break;
				case ('ô' ):v3 = 72;break;
				case ('û' ):v3 = 73;break;
				case ('ë' ):v3 = 74;break;
				case ('ï' ):v3 = 75;break;
			  //case (' ' ):v3 = 76;break;
			  //case (' ' ):v3 = 77;break;
				default:v3 = 57;	
			}
			if (((g00VARS[28][2] == 1)&&(g00VARS[5][2]))||(g00VARS[6][2] == 1))//si i1 y idioma internacional o es una palabra inter -ASIGNA LOS PREFIJOS INTERNACIONALES
			{	g00VARS[23][2] = s00morIdi[v3][1];
			}
			else//es igual a false o 0
			{	g00VARS[23][2] = s00morIdi[v3][g00VARS[27][2]];	
			}		
		}

f0012=(int)=>//CARGAR HTML desde 0 de capa ruta//vars IN: g00VARS[27][2] ,gRuta 
		{	lOL(12);
			f0090();//L BORRAR memoria de animación: señas y glosas
			let le = 0;//length del array
			let v1;//ciclo for
			v02 = '';//html parcial
			v03 = '';//html acumulado
			let id = g00VARS[27][2];//idioma
			if(gRuta == 3)
			{
				//Esta parte debe usarse para crear el primer anuncio local, de forma similar el primer anuncio tipo JSON
				f0001();//CONSEGUIR la hora local actual
				//f0123(dExt[3]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
				//f0123(dExt[3]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
				mIr003B[1][2][0] = dExt[3];//53;
				//r003B[2][1][0] = dExt[3];//53;

				//v9 = '<img src="'+(kTapa0[bus][2]||'files/chapinero.jpg')+'" class="c1x0">';
				//console.error('|> Flag  -> hh62');
				mIr003A[1][id][0] = mIkTapaI[25][id] + mIkComun[1][id];// +', '+ kLugar[id][1];
				mIr003A[1][1][0] = mIkTapaI[25][1] + mIkComun[1][1];// +', '+ kLugar[id][1];
				//r003A[id][1][0] = kTapaI[id][25] + kComun[id][1];// +', '+ kLugar[id][1];
				//r003A[1][1][0] = kTapaI[1][25] + kComun[1][1];// +', '+ kLugar[id][1];

			}
			visON = '0';//AGREGAR casilla 0 de "arriba"
			vMul = 0;//Variable de ruta que indica si al menos un elemento es multi
			//DETECTAR visibilidad o no de cada casilla y HABILITAR lectura en ingles de los limites
			switch (gRuta)//visibilidad de cada casilla y mirar si es MULTIMEDIA
			{	case 1:
				{	le = mIr001A.length;//longitud de las casillas			
					//le = r001A[1].length;//longitud de las casillas
					for (v1 = 1; v1 < le; v1++)
					{	if(mIr001B[v1][4])//Es visible      
						//if(r001B[4][v1])//Es visible
						{	visON += ','+v1;
							if(mIr001B[v1][5])//Es multi      
							//if(r001B[5][v1])//Es multi
							{	vMul += 1;
							}
						}
					}
				}
				break;
				case 2:
					le = mIr002A.length;//longitud de las casillas
					//le = r002A[1].length;//longitud de las casillas
					for (v1 = 1; v1 < le; v1++)
					{	if(mIr002B[v1][4])//Es visible
						//if(r002B[4][v1])//Es visible
						{	visON += ','+v1;
							if(mIr002B[v1][5])//Es multi
							//if(r002B[5][v1])//Es multi
							{	vMul += 1;
							}
						}	
					};
				break;
				case 3:
					le = mIr003A.length;//longitud de las casillas
					//le = r003A[1].length;//longitud de las casillas
					for (v1 = 1; v1 < le; v1++)
					{	if(mIr003B[v1][4])//Es visible
						//if(r003B[4][v1])//Es visible
						{	visON += ','+v1;
							if(mIr003B[v1][5][0][0])//Es multi
							//if(r003B[5][v1][0][0])//Es multi
							{	vMul += 1;
							}
						}
					}
				break;
				case 4:
					le = mIr004A.length;//longitud de las casillas
					//le = r004A[1].length;//longitud de las casillas
					for (v1 = 1; v1 < le; v1++)
					{	if(mIr004B[v1][4])//Es visible
						//if(r004B[4][v1])//Es visible
						{	visON += ','+v1;
							if(mIr004B[v1][5])//Es multi
							//if(r004B[5][v1])//Es multi
							{	vMul += 1;
							}
						}
					}
				break;
				case 5:/*
					le = r005A[1].length;//longitud de las casillas
					for (v1 = 1; v1 < le; v1++)
					{	if(r005B[4][v1])//Es visible
						{	visON += ','+v1;
							if(r005B[5][v1])//Es multi
							{	vMul += 1;
							}
						}
					}*/
				break;
				case 6:
					/*le = r006A[1].length;//longitud de las casillas
					for (v1 = 1; v1 < le; v1++)
					{	if(r006B[4][v1])//Es visible
						{	visON += ','+v1;
							if(r006B[5][v1])//Es multi
							{	vMul += 1;
							}
						}
					}*/
				break;
				case 7:
					/*le = r007A[1].length;//longitud de las casillas
					for (v1 = 1; v1 < le; v1++)
					{	if(v1 > 1)//SI no es la casilla 1..
						{	if(r007B[4][v1])//Es visible
							{	visON += ','+v1;
								if(r007B[5][v1])//Es multi
								{	vMul += 1;
								}
							}
						}
						else//es la casilla 1..
						{	if(r007B[4][v1])//Es visible
							{	visON += ','+v1;
								if(r007B[5][v1][0][0])//Es multi
								{	vMul += 1;
								}
							}
						}
					}*/
				break;
				case 8:
					le = mIr008A.length;//longitud de las casillas
					//le = r008A[1].length;//longitud de las casillas
					for (v1 = 1; v1 < le; v1++)
					{	if(mIr008B[v1][4])//Es visible
						//if(r008B[4][v1])//Es visible
						{	visON += ','+v1;
							if(mIr008B[v1][5][0][0])//Es multi
							//if(r008B[5][v1][0][0])//Es multi
							{	vMul += 1;
							}
						}
					}
				break;
			}
			visON += ','+le;//ADICIONAR 2 casillas extra a array una al inicio por "arriba" y otra al final por "abajo"
			//console.log(' - - - rrrr ojo visON=',visON);
		 	
		 //:ambi = 5;
		 //	g00VARS[26][2] = 0;//QUITAR???? - MOSTRANDO capa RUTA - implicito en ambi????
			//ACTUALIZAR HTML DE lLINES..
// ... ... ... Ojo código pendiente!! ... ... ...
			if(vMul)//usar la capa lMULTI con INFOMACION MULTIMEDIA O AMPLIADA
			{/*  //iRUTA.classList.add('cX');//Oculta iRUTA
//				lLINES.classList.add('cX');//Oculta lLINES
//				lMULTI.classList.remove('cX');//Muestra lMULTI
				//ALISTAR reproductor de youtube..
				if(api1)
				{	f0052();//INICIALIZAR la API de Youtube por primer vez
					api1 = 0;//ya no es la primer vez		
				}
				else
				{	f0054(4,1);//cargar el video 1 //no funciona :(
				}
				//setTimeout(function()//ESPERAR que se inicie la API de YouTube
				//{	f0054(1,1);//cargar el video 1
				//}	
				//,2000);
				//}*/
				console.log('+ + + + + + + + +!aqui se rompe!');
			}


			
// ... ... ... Pendiente hasta aquí!! ... ... ...
			else//Usar la capa lLINES de RUTA sin INFOMACION MULTIMEDIA O AMPLIADA, solo con INFORMACION BREVE O TITULOS
			{   //lMULTI.classList.add('cX');//Oculta lMULTI
				//iRUTA.classList.remove('cX');//Muestra iRUTA
				//lLINES.classList.remove('cX');//Muestra lLINES
				//INICIAR EL HTML con la primer casilla de "arriba"
				//PRECARGAR textos
				//console.log('+ + + + + + + + +!aqui va bien!');
	  			s00EXIT[1][2] = mIkTapaI[10][id].charAt(0).toUpperCase() + mIkTapaI[10][id].slice(1);;//carga el guión local: "arriba"
				s00EXIT[2][2] = 'i1, '+mIkTapaI[10][1];//carga el guión internacional: upper limit
				//s00EXIT[1][2] = kTapaI[id][10].charAt(0).toUpperCase() + kTapaI[id][10].slice(1);;//carga el guión local: "arriba"
				//s00EXIT[2][2] = 'i1, '+kTapaI[1][10];//carga el guión internacional: upper limit
				f0046();//CARGAR las variables s00EXIT con los STRINGS HTML INTERNACIONALES y LOCALES que se necesitan
				//CARGAR el HTML del boton/casilla de "arriba"
				v02 = '<div class="cNada"><button class="cButton cLUp" onclick="hh6(0)" onfocus="f0029(0)"><div aria-hidden="true" class="cCero cPicI"><span class="cObj cPic1 cCero"><div class="cBox cFon"><div class="c1x1 cZIn"><i class="'+kTapa1[13][2]+' cAjust8"></i></div></div></span>';
				if((g00VARS[11][2] == 0)||(g00VARS[11][2] == 4))//Si todos los modos o señas.. adiciona interprete(s) Local(Internacional) ..
				{	if((id > 1)&&(g00VARS[5][2]))//Si no es el idioma ingles, esta i1,.. adiciona el interprete Internacopnal de la izquierda..
					{	//v02 += '<div class="cPic2"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div>';
						v02 += '<div class="cLR cDer cFlex"><div class="cPic2 sepia"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div></div>';
					}
					//AGREGAR interprete Local de la derecha..
					//v02 += '<div class="cPic2 cRigh"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div>';
					v02 += '<div class="cLR cFlex"><div class="cPic2"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div></div>';
				}
				f0072(id);//ADICIONAR HTML para terminar los botones/hojas de la Ruta
				//CONTINUAR EL HTML con las siguientes casillas visibles y con contenido
				visOK = visON.split(',');
				for (v1 = 0; v1 < visOK.length; v1++)//-RECORRER el arreglo con los numeros de las funciones VISIBLES
				{ 	visOK[v1] = parseInt(visOK[v1]);//El arreglo tipo string se pasa a tipo número
				}
				//console.log(' - - - rrrr ojo visOK=',visOK);
							
				switch (gRuta)
				{	case 1://
						iMenu.innerHTML = '<i class="'+kTapa1[2][2]+'"></i>';
						for (v1 = 1; v1 < (visOK.length - 1); v1++)//SE CORRE UNA COLUMNA A LA DERECHA PARA PODER AGREGAR EL LIMITE SUPERIOR Y SE RESTA 1 POR EL LIMITE INFERIOR
						{	let v4 = visOK[v1];//v4:Número de la casilla que sigue
							//PRECARGA de textos:
							s00EXIT[1][2] = mIr001A[v4][id].charAt(0).toUpperCase() + mIr001A[v4][id].slice(1);//carga el guión local: haz clic para entrar			
							//s00EXIT[1][2] = r001A[id][v4].charAt(0).toUpperCase() + r001A[id][v4].slice(1);//carga el guión local: haz clic para entrar
							s00EXIT[2][2] = 'i1, '+mIr001A[v4][1];//carga el guión internacional:click to enter			
							//s00EXIT[2][2] = 'i1, '+r001A[1][v4];//carga el guión internacional:click to enter
							f0046();//L CARGAR las variables s00EXIT
							console.log(' - - - rrrr ojo v4=',v4,'; mIr001B[v4][3]=',mIr001B[v4][3]);    
							//console.log(' - - - rrrr ojo v4=',v4,'; r001B[3][v4]=',r001B[3][v4]);
							v02 = '<div class="cNada"><button class="cButton" onclick="hh'+mIr001B[v4][3]+'()" onfocus="f0029('+v1+')"><div aria-hidden="true" class="cCero cPicI"><span class="cObj cPic1 cCero"><div class="cBox cFon">';				
							//v02 = '<div class="cNada"><button class="cButton" onclick="hh'+r001B[3][v4]+'()" onfocus="f0029('+v1+')"><div aria-hidden="true" class="cCero cPicI"><span class="cObj cPic1 cCero"><div class="cBox cFon">';
							switch(mIr001B[v4][1])//Tipo de icono/imagen.. 0-3			
							//switch(r001B[1][v4])//Tipo de icono/imagen.. 0-3
							{	case 0://Imagen dinámica
									f0123(mIr001B[v4][2]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0			
									//f0123(r001B[2][v4]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
									v02 += '<div class="c1x1 cZIn"><img src="'+kTapa0[bus][2]+'" class="c1x0"></div>';
								break;
								case 1://Icono dinámico
									v02 += '<div class="c1x1 cZIn"><i class="'+kTapa1[mIr001B[v4][2]][2]+' cAjust8"></i></div>';			
									//v02 += '<div class="c1x1 cZIn"><i class="'+kTapa1[r001B[2][v4]][2]+' cAjust8"></i></div>';
								break;
								case 2://Texto dinámico
									v02 += '<div class="c1x1 cZIn cAjust8">'+kTapa2[mIr001B[v4][2]][2]+'</div>';			
									//v02 += '<div class="c1x1 cZIn cAjust8">'+kTapa2[r001B[2][v4]][2]+'</div>';
								break;
								case 3://Imagen estática
									f0123(mIr001B[v4][2]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0			
									//f0123(r001B[2][v4]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
									v02 += '<div class="c1x1 cZIn"><img src="'+kTapa0[bus][2]+'" class="c1x0"></div>';
								break;
								case 4://Video estático
									v02 += '<div class="c1x1 cZIn"></div>';
								break;
							}
							v02 += '</div></span>';//termina el HTML del area visual
							if((g00VARS[11][2] == 0)||(g00VARS[11][2] == 4))//todos los modos o señas
							{	if((id > 1)&&(g00VARS[5][2]))//Si no es el idioma ingles y esta i1..
								{	//v02 += '<div class="cPic2"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div>';
									v02 += '<div class="cLR cDer cFlex"><div class="cPic2 sepia"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div></div>';
								}
								//v02 += '<div class="cPic2 cRigh"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div>';
								v02 += '<div class="cLR cFlex"><div class="cPic2"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div></div>';
							}//Termina los interpretes señas
							f0072(id);//L ADICIONAR HTML para terminar los botones/hojas de la Ruta
						}
					break;
					case 2://AJUSTES información palanca - idioma i1 etc
						iMenu.innerHTML = '<i class="'+kTapa1[50][2]+'"></i>';
						for (v1 = 1; v1 < (visOK.length - 1); v1++)//SE CORRE UNA COLUMNA A LA DERECHA PARA PODER AGREGAR EL LIMITE SUPERIOR Y SE RESTA 1 POR EL LIMITE INFERIOR
						{	let v4 = visOK[v1];//v4:Número de la casilla que sigue
							//PRECARGA de textos:
							s00EXIT[1][2] = mIr002A[v4][id].charAt(0).toUpperCase() + mIr002A[v4][id].slice(1);//carga el guión local: haz clic para entrar
							//s00EXIT[1][2] = r002A[id][v4].charAt(0).toUpperCase() + r002A[id][v4].slice(1);//carga el guión local: haz clic para entrar
							//s00EXIT[2][2] = 'i1, '+r002A[1][v4];//carga el guión internacional:click to enter
							s00EXIT[2][2] = 'i1, '+mIr002A[v4][1];//carga el guión internacional:click to enter
							//s00EXIT[2][2] = 'i1, '+r002A[1][v4];//carga el guión internacional:click to enter
							f0046();//CARGAR las variables s00EXIT
							v02 = '<div class="cNada"><button class="cButton" onclick="hh'+mIr002B[v4][3]+'()" onfocus="f0029('+v1+')"><div aria-hidden="true" class="cCero cPicI"><span class="cObj cPic1 cCero"><div class="cBox cFon">';
							//v02 = '<div class="cNada"><button class="cButton" onclick="hh'+r002B[3][v4]+'()" onfocus="f0029('+v1+')"><div aria-hidden="true" class="cCero cPicI"><span class="cObj cPic1 cCero"><div class="cBox cFon">';
							switch(mIr002B[v4][1])//Tipo de icono/imagen.. 0-3
							//switch(r002B[1][v4])//Tipo de icono/imagen.. 0-3
							{	case 0://Imagen dinámica



									//Control id
									f0123(mIr002B[v4][2]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
									//f0123(r002B[2][v4]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
									v02 += '<div class="c1x1 cZIn"><img src="'+kTapa0[bus][2]+'" class="c1x0"></div>';
								//	v02 += '<div class="c1x1 cZIn"><img src="'+kTapa0[r002B[2][v4]][2]+'" class="c1x0"></div>';
								break;
								case 1://Icono dinámico
									v02 += '<div class="c1x1 cZIn"><i class="'+kTapa1[mIr002B[v4][2]][2]+' cAjust8"></i></div>';
									//v02 += '<div class="c1x1 cZIn"><i class="'+kTapa1[r002B[2][v4]][2]+' cAjust8"></i></div>';
								break;
								case 2://Texto dinámico
									v02 += '<div class="c1x1 cZIn cAjust8">'+kTapa2[mIr002B[v4][2]][2]+'</div>';
									//v02 += '<div class="c1x1 cZIn cAjust8">'+kTapa2[r002B[2][v4]][2]+'</div>';
								break;
								case 3://Imagen estática
									


									//Control id
									f0123(mIr002B[v4][2]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
									//f0123(r002B[2][v4]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
									v02 += '<div class="c1x1 cZIn"><img src="'+kTapa0[bus][2]+'" class="c1x0"></div>';
								//	v02 += '<div class="c1x1 cZIn"><img src="'+kTapa0[r002B[2][v4]][2]+'" class="c1x0"></div>';
								break;
								case 4://Video estático
									v02 += '<div class="c1x1 cZIn"></div>';
								break;
							}
							v02 += '</div></span>';//termina el HTML del area visual
							if((g00VARS[11][2] == 0)||(g00VARS[11][2] == 4))//todos los modos o señas
							{	


								if((id > 1)&&(g00VARS[5][2]))//Si no es el idioma ingles y esta i1..
								{	//v02 += '<div class="cPic2"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div>';
									v02 += '<div class="cLR cDer cFlex"><div class="cPic2 sepia"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div></div>';
								}
								//v02 += '<div class="cPic2 cRigh"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div>';
								v02 += '<div class="cLR cFlex"><div class="cPic2"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div></div>';
							}//Termina los interpretes señas
							f0072(id);//ADICIONAR HTML para terminar los botones/hojas de la Ruta
						}
					break;
					case 3://Anuncios - Información comunitaria
						iMenu.innerHTML = '<i class="'+kTapa1[3][2]+'"></i>';
						vis3 = visOK;//ESTA LINEA ES POR LA PRESENTACION AV: CREAR copia del arreglo de las casillas visibles de los anuncios comunitarios
						for (v1 = 1; v1 < (visOK.length - 1); v1++)//SE CORRE UNA COLUMNA A LA DERECHA PARA PODER AGREGAR EL LIMITE SUPERIOR Y SE RESTA 1 POR EL LIMITE INFERIOR
						{	let v4 = visOK[v1];//v4:Número de la casilla que sigue
							//PRECARGA de textos:
							if(mIr003B[v4][3] < mIr003B[v4][2].length)
							//if(r003B[3][v4] < r003B[2][v4].length)
							{	s00EXIT[1][2] = '';
								s00EXIT[2][2] = 'i1, ';
								if(( 0 < mIr003B[v4][3])&&(1 < mIr003B[v4][2].length))//Si no es la primer casilla(0) y la longitud es mayor a 1 
								//if(( 0 < r003B[3][v4])&&(1 < r003B[2][v4].length))//Si no es la primer casilla(0) y la longitud es mayor a 1 
								{	s00EXIT[1][2] += (mIr003B[v4][3] + 1) + '. ';
									s00EXIT[2][2] += (mIr003B[v4][3] + 1) + '. ';
									//s00EXIT[1][2] += (r003B[3][v4] + 1) + '. ';
									//s00EXIT[2][2] += (r003B[3][v4] + 1) + '. ';
								}
								s00EXIT[1][2] += mIr003A[v4][id][mIr003B[v4][3]].charAt(0).toUpperCase() + mIr003A[v4][id][mIr003B[v4][3]].slice(1);//carga el guión local: haz clic para entrar
								s00EXIT[2][2] += mIr003A[v4][1][mIr003B[v4][3]].charAt(0).toUpperCase() + mIr003A[v4][1][mIr003B[v4][3]].slice(1);//carga el guión internacional:click to enter
								//s00EXIT[1][2] += mIr003A[v4][id][r003B[3][v4]].charAt(0).toUpperCase() + mIr003A[v4][id][r003B[3][v4]].slice(1);// + ', '+ (r003B[3][v4] + 1)+' '+kTapaI[id][18]+' '+  r003B[2][v4].length;//carga el guión local: haz clic para entrar
								//s00EXIT[2][2] += mIr003A[v4][1][r003B[3][v4]].charAt(0).toUpperCase() + mIr003A[v4][1][r003B[3][v4]].slice(1);// + ', '+ (r003B[3][v4] + 1) +' '+kTapaI[1][18]+' '+ r003B[2][v4].length;//carga el guión internacional:click to enter
								if(mIr003B[v4][3] < mIr003B[v4][2].length)	
								//if(r003B[3][v4] < r003B[2][v4].length)
								{	if(1 < mIr003B[v4][2].length)//si la lonjitud es mayor que 1
									//if(1 < r003B[2][v4].length)//si la lonjitud es mayor que 1
									{	if(mIr003B[v4][3] < (mIr003B[v4][2].length - 1))
										//if(r003B[3][v4] < (r003B[2][v4].length - 1))
										{	s00EXIT[1][2] += mIkTapaI[21][id];//continuar
											s00EXIT[2][2] += mIkTapaI[21][1];//continue
											//s00EXIT[1][2] += kTapaI[id][21];//continuar
											//s00EXIT[2][2] += kTapaI[1][21];//continue
										}
										if(mIr003B[v4][3] == (mIr003B[v4][2].length - 1))
										//if(r003B[3][v4] == (r003B[2][v4].length - 1))
										{	s00EXIT[1][2] += mIkTapaI[4][id];//Fin, reiniciar
											s00EXIT[2][2] += mIkTapaI[4][1];//End, restart
											//s00EXIT[1][2] += kTapaI[id][4];//Fin, reiniciar
											//s00EXIT[2][2] += kTapaI[1][4];//End, restart
										}
									}
								}
							}
							f0046();//CARGAR las variables s00EXIT
							//Esta linea es distinta por ser la ruta de anuncios y siempre llevar a f106()::
							v02 = '<div class="cNada"><button class="cButton" onclick="hh6('+v4+')" onfocus="f0029('+v1+')"><div aria-hidden="true" class="cCero cPicI"><span class="cObj cPic1 cCero"><div class="cBox cFon">';
							if(mIr003B[v4][3] < mIr003B[v4][2].length)
							//if(r003B[3][v4] < r003B[2][v4].length)
							{	switch(mIr003B[v4][1][mIr003B[v4][3]])//[0])//Tipo de icono/imagen.. 0-3
								//switch(r003B[1][v4][r003B[3][v4]])//[0])//Tipo de icono/imagen.. 0-3
								{	case 0://Imagen dinámica
										f0123(mIr003B[v4][2][0]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
										//f0123(r003B[2][v4][0]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
										v02 += '<div class="c1x1 cZIn"><img src="'+kTapa0[bus][2]+'" class="c1x0"></div>';
									break;
									case 1://Icono dinámico
										v02 += '<div class="c1x1 cZIn"><i class="'+kTapa1[mIr003B[v4][2][mIr003B[v4][3]]][2]+' cAjust8"></i></div>';
										//v02 += '<div class="c1x1 cZIn"><i class="'+kTapa1[r003B[2][v4][r003B[3][v4]]][2]+' cAjust8"></i></div>';
									break;
									case 2://Texto dinámico
										v02 += '<div class="c1x1 cZIn cAjust8">'+kTapa2[mIr003B[v4][2][mIr003B[v4][3]]][2]+'</div>';
										//v02 += '<div class="c1x1 cZIn cAjust8">'+kTapa2[r003B[2][v4][r003B[3][v4]]][2]+'</div>';
									break;
									case 3://Imagen estática
										f0123(mIr003B[v4][2][mIr003B[v4][3]]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
										//f0123(r003B[2][v4][r003B[3][v4]]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
										v02 += '<div class="c1x1 cZIn"><img src="'+kTapa0[bus][2]+'" class="c1x0"></div>';
									break;
									case 4://Video estático
										v02 += '<div class="c1x1 cZIn"></div>';
									break;
								}
							}
							v02 += '</div></span>';//termina el HTML del area visual
							if((g00VARS[11][2] == 0)||(g00VARS[11][2] == 4))//todos los modos o señas
							{	if((id > 1)&&(g00VARS[5][2]))//Si no es el idioma ingles y esta i1..
								{	v02 += '<div class="cLR cDer cFlex"><div class="cPic2 sepia"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div></div>';
								}
								v02 += '<div class="cLR cFlex"><div class="cPic2"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div></div>';
							}//Termina los interpretes señas
							f0072(id);//ADICIONAR HTML para terminar los botones/hojas de la Ruta
						}
					break;
					case 4:
						iMenu.innerHTML = '<i class="'+kTapa1[4][2]+'"></i>';
						for (v1 = 1; v1 < (visOK.length - 1); v1++)//SE CORRE UNA COLUMNA A LA DERECHA PARA PODER AGREGAR EL LIMITE SUPERIOR Y SE RESTA 1 POR EL LIMITE INFERIOR
						{	let v4 = visOK[v1];//v4:Número de la casilla que sigue
							//PRECARGA de textos:
							s00EXIT[1][2] = mIr004A[v4][id].charAt(0).toUpperCase() + mIr004A[v4][id].slice(1);//carga el guión local: haz clic para entrar
							s00EXIT[2][2] = 'i1, '+mIr004A[v4][1];//carga el guión internacional:click to enter
							//s00EXIT[1][2] = r004A[id][v4].charAt(0).toUpperCase() + r004A[id][v4].slice(1);//carga el guión local: haz clic para entrar
							//s00EXIT[2][2] = 'i1, '+r004A[1][v4];//carga el guión internacional:click to enter
							if(mIr004ATG[v4][2])//este [2] se debe automatizar para que cuadre según la lengua de señas
							//if(r004ATG[2][v4])//este [2] se debe automatizar para que cuadre según la lengua de señas
							{	//tiene glosa manual
								//console.log('SI tiene glosa manual LSC en v4=',v4);
							}
							else
							{	//no tiene glosa manual
								//console.log('NO tiene glosa manual LSC en v4=',v4);
							}
							f0046();//CARGAR las variables s00EXIT - esta se debe afectar si tiene glosa manual ej f0046(1) => aquí usar el uno como parámetro 
							v02 = '<div class="cNada"><button class="cButton" onclick="hh'+mIr004B[v4][3]+'()" onfocus="f0029('+v1+')"><div aria-hidden="true" class="cCero cPicI"><span class="cObj cPic1 cCero"><div class="cBox cFon">';
							//v02 = '<div class="cNada"><button class="cButton" onclick="hh'+r004B[3][v4]+'()" onfocus="f0029('+v1+')"><div aria-hidden="true" class="cCero cPicI"><span class="cObj cPic1 cCero"><div class="cBox cFon">';
							switch(mIr004B[v4][1])//Tipo de icono/imagen.. 0-3
							//switch(r004B[1][v4])//Tipo de icono/imagen.. 0-3
							{	case 0://Imagen dinámica
									f0123(mIr004B[v4][2]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
									//f0123(r004B[2][v4]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
									v02 += '<div class="c1x1 cZIn"><img src="'+kTapa0[bus][2]+'" class="c1x0"></div>';
								break;
								case 1://Icono dinámico
									v02 += '<div class="c1x1 cZIn"><i class="'+kTapa1[mIr004B[v4][2]][2]+' cAjust8"></i></div>';
									//v02 += '<div class="c1x1 cZIn"><i class="'+kTapa1[r004B[2][v4]][2]+' cAjust8"></i></div>';
								break;
								case 2://Texto dinámico
									v02 += '<div class="c1x1 cZIn cAjust8">'+kTapa2[mIr004B[v4][2]][2]+'</div>';
									//v02 += '<div class="c1x1 cZIn cAjust8">'+kTapa2[r004B[2][v4]][2]+'</div>';
								break;
								case 3://Imagen estática
									f0123(mIr004B[v4][2]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
									//f0123(r004B[2][v4]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
									v02 += '<div class="c1x1 cZIn"><img src="'+kTapa0[bus][2]+'" class="c1x0"></div>';
								break;
								case 4://Video estático
									v02 += '<div class="c1x1 cZIn"></div>';
								break;
								case 6://Icono dinámico + Icono dinámico
									v02 += '<div class="c1x1 cZIn cAjust8"><i class="'+kTapa1[mIr004B[v4][2]][2]+' cAjust8"></i><i class="'+kTapa1[mIr004B[v4][7]][2]+' cAjust8"></i></div>';
									//v02 += '<div class="c1x1 cZIn cAjust8"><i class="'+kTapa1[r004B[2][v4]][2]+' cAjust8"></i><i class="'+kTapa1[r004B[7][v4]][2]+' cAjust8"></i></div>';
								break;
							}
							v02 += '</div></span>';//termina el HTML del area visual
							if((g00VARS[11][2] == 0)||(g00VARS[11][2] == 4))//todos los modos o señas
							{	if((id > 1)&&(g00VARS[5][2]))//Si no es el idioma ingles y esta i1..
								{	//v02 += '<div class="cPic2"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div>';
									v02 += '<div class="cLR cDer cFlex"><div class="cPic2 sepia"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div></div>';
								}
								//v02 += '<div class="cPic2 cRigh"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div>';
								v02 += '<div class="cLR cFlex"><div class="cPic2"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div></div>';
							}//Termina los interpretes señas
							f0072(id);//ADICIONAR HTML para terminar los botones/hojas de la Ruta
						}
					break;
					case 5://Multimedia - contenidos con información GENERAL
						/*
						for (v1 = 1; v1 < (visOK.length - 1); v1++)//SE CORRE UNA COLUMNA A LA DERECHA PARA PODER AGREGAR EL LIMITE SUPERIOR Y SE RESTA 1 POR EL LIMITE INFERIOR
						{	let v4 = visOK[v1];//v4:Número de la casilla que sigue
							//PRECARGA de textos:
							s00EXIT[1][2] = r005A[id][v4].charAt(0).toUpperCase() + r005A[id][v4].slice(1);//carga el guión local: haz clic para entrar
							s00EXIT[2][2] = 'i1, '+r005A[1][v4];//carga el guión internacional:click to enter
							f0046();//CARGAR las variables s00EXIT
							v02 = '<div class="cNada"><button class="cButton" onclick="hh'+r005B[3][v4]+'()" onfocus="f0029('+v1+')"><div aria-hidden="true" class="cCero cPicI"><span class="cObj cPic1 cCero"><div class="cBox cFon">';
							switch(r005B[1][v4])//Tipo de icono/imagen.. 0-3
							{	case 0://Imagen dinámica
									f0123(r005B[2][v4]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
									v02 += '<div class="c1x1 cZIn"><img src="'+kTapa0[bus][2]+'" class="c1x0"></div>';
								//	v02 += '<div class="c1x1 cZIn"><img src="'+kTapa0[r005B[2][v4]][2]+'" class="c1x0"></div>';
								break;
								case 1://Icono dinámico
									v02 += '<div class="c1x1 cZIn"><i class="'+kTapa1[r005B[2][v4]][2]+' cAjust8"></i></div>';
								break;
								case 2://Texto dinámico
									v02 += '<div class="c1x1 cZIn cAjust8">'+kTapa2[r005B[2][v4]][2]+'</div>';
								break;
								case 3://Imagen estática
									f0123(r005B[2][v4]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
									v02 += '<div class="c1x1 cZIn"><img src="'+kTapa0[bus][2]+'" class="c1x0"></div>';
								//	v02 += '<div class="c1x1 cZIn"><img src="'+kTapa0[r005B[2][v4]][2]+'" class="c1x0"></div>';
								break;
								case 4://Video estático
									v02 += '<div class="c1x1 cZIn"></div>';
								break;
							}
							v02 += '</div></span>';//termina el HTML del area visual
							if((g00VARS[11][2] == 0)||(g00VARS[11][2] == 4))//todos los modos o señas
							{	if((id > 1)&&(g00VARS[5][2]))//Si no es el idioma ingles y esta i1..
								{	//v02 += '<div class="cPic2"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div>';
									v02 += '<div class="cLR cDer cFlex"><div class="cPic2 sepia"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div></div>';
								}
								//v02 += '<div class="cPic2 cRigh"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div>';
								v02 += '<div class="cLR cFlex"><div class="cPic2"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div></div>';
							}//Termina los interpretes señas
							f0072(id);//ADICIONAR HTML para terminar los botones/hojas de la Ruta
						}*/
					break;
					case 6:/*
						for (v1 = 1; v1 < (visOK.length - 1); v1++)//SE CORRE UNA COLUMNA A LA DERECHA PARA PODER AGREGAR EL LIMITE SUPERIOR Y SE RESTA 1 POR EL LIMITE INFERIOR
						{	let v4 = visOK[v1];//v4:Número de la casilla que sigue
							//PRECARGA de textos:
							s00EXIT[1][2] = r006A[id][v4].charAt(0).toUpperCase() + r006A[id][v4].slice(1);//carga el guión local: haz clic para entrar
							s00EXIT[2][2] = 'i1, '+r006A[1][v4];//carga el guión internacional:click to enter
							//console.log('46<12G');
							f0046();//CARGAR las variables s00EXIT
							v02 = '<div class="cNada"><button class="cButton" onclick="hh'+r006B[3][v4]+'()" onfocus="f0029('+v1+')"><div aria-hidden="true" class="cCero cPicI"><span class="cObj cPic1 cCero"><div class="cBox cFon">';
							switch(r006B[1][v4])//Tipo de icono/imagen.. 0-3
							{	case 0://Imagen dinámica
									f0123(r006B[2][v4]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
									v02 += '<div class="c1x1 cZIn"><img src="'+kTapa0[bus][2]+'" class="c1x0"></div>';
								//	v02 += '<div class="c1x1 cZIn"><img src="'+kTapa0[r006B[2][v4]][2]+'" class="c1x0"></div>';
								break;
								case 1://Icono dinámico
									v02 += '<div class="c1x1 cZIn"><i class="'+kTapa1[r006B[2][v4]][2]+' cAjust8"></i></div>';
								break;
								case 2://Texto dinámico
									v02 += '<div class="c1x1 cZIn cAjust8">'+kTapa2[r006B[2][v4]][2]+'</div>';
								break;
								case 3://Imagen estática




									f0123(r006B[2][v4]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
									v02 += '<div class="c1x1 cZIn"><img src="'+kTapa0[bus][2]+'" class="c1x0"></div>';
								//	v02 += '<div class="c1x1 cZIn"><img src="'+kTapa0[r006B[2][v4]][2]+'" class="c1x0"></div>';
								break;
								case 4://Video estático
									v02 += '<div class="c1x1 cZIn"></div>';
								break;
							}
							v02 += '</div></span>';//termina el HTML del area visual
							if((g00VARS[11][2] == 0)||(g00VARS[11][2] == 4))//todos los modos o señas
							{	if((id > 1)&&(g00VARS[5][2]))//Si no es el idioma ingles y esta i1..
								{	//v02 += '<div class="cPic2"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div>';
									v02 += '<div class="cLR cDer cFlex"><div class="cPic2 sepia"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div></div>';
								}
								//v02 += '<div class="cPic2 cRigh"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div>';
								v02 += '<div class="cLR cFlex"><div class="cPic2"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div></div>';
							}//Termina los interpretes señas
							f0072(id);//ADICIONAR HTML para terminar los botones/hojas de la Ruta
						}*/
					break;
					case 7:/*
						iMenu.innerHTML = '<i class="'+kTapa1[43][2]+'"></i>';
						for (v1 = 1; v1 < (visOK.length - 1); v1++)//SE CORRE UNA COLUMNA A LA DERECHA PARA PODER AGREGAR EL LIMITE SUPERIOR Y SE RESTA 1 POR EL LIMITE INFERIOR
						{	let v4 = visOK[v1];//v4:Número de la casilla que sigue
							if(v1 > 1)//Si no es la casilla 1 entonces..
							{	//PRECARGA de textos:
								s00EXIT[1][2] = r007A[id][v4].charAt(0).toUpperCase() + r007A[id][v4].slice(1);//carga el guión local: haz clic para entrar
								s00EXIT[2][2] = 'i1, '+r007A[1][v4];//carga el guión internacional:click to enter
								f0046();//CARGAR las variables s00EXIT
								v02 = '<div class="cNada"><button class="cButton" onclick="hh'+r007B[3][v4]+'()" onfocus="f0029('+v1+')"><div aria-hidden="true" class="cCero cPicI"><span class="cObj cPic1 cCero"><div class="cBox cFon">';
								switch(r007B[1][v4])//Tipo de icono/imagen.. 0-3
								{	case 0://Imagen dinámica
										f0123(r007B[2][v4]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
										v02 += '<div class="c1x1 cZIn"><img src="'+kTapa0[bus][2]+'" class="c1x0"></div>';
									//	v02 += '<div class="c1x1 cZIn"><img src="'+kTapa0[r007B[2][v4]][2]+'" class="c1x0"></div>';
									break;
									case 1://Icono dinámico
										v02 += '<div class="c1x1 cZIn"><i class="'+kTapa1[r007B[2][v4]][2]+' cAjust8"></i></div>';
									break;
									case 2://Texto dinámico
										v02 += '<div class="c1x1 cZIn cAjust8">'+kTapa2[r007B[2][v4]][2]+'</div>';
									break;
									case 3://Imagen estática
										f0123(r007B[2][v4]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
										v02 += '<div class="c1x1 cZIn"><img src="'+kTapa0[bus][2]+'" class="c1x0"></div>';
									//	v02 += '<div class="c1x1 cZIn"><img src="'+kTapa0[r007B[2][v4]][2]+'" class="c1x0"></div>';
									break;
									case 4://Video estático
										v02 += '<div class="c1x1 cZIn"></div>';
									break;
									case 5://Texto dinámico + Icono dinámico
										v02 += '<div class="c1x1 cZIn cAjust8">'+kTapa2[r007B[2][v4]][2]+'<i class="'+kTapa1[r007B[7][v4]][2]+' cAjust8"></i></div>';
									break;
									case 6://Icono dinámico + Icono dinámico
										v02 += '<div class="c1x1 cZIn cAjust8"><i class="'+kTapa1[r007B[2][v4]][2]+' cAjust8"></i><i class="'+kTapa1[r007B[7][v4]][2]+' cAjust8"></i></div>';
									break;
									case 7://Icono dinámico + Icono dinámico + Fondo Negro
										v02 += '<div class="c1x1 cZIn cAjust9"><i class="'+kTapa1[r007B[2][v4]][2]+' cAjust8"></i><i class="'+kTapa1[r007B[7][v4]][2]+' cAjust8"></i></div>';
									break;
									case 8://Icono dinámico + Icono dinámico
										v02 += '<div class="c1x1 cZIn cAma"><i class="'+kTapa1[r007B[2][v4]][2]+' cAjust8"></i><i class="'+kTapa1[r007B[7][v4]][2]+' cAjust8"></i></div>';
									break;
									case 9://Icono dinámico + Icono dinámico
										v02 += '<div class="c1x1 cZIn cLuz"><i class="'+kTapa1[r007B[2][v4]][2]+' cAjust8"></i><i class="'+kTapa1[r007B[7][v4]][2]+' cAjust8"></i></div>';
									break;						
								}
							}
							else//Si es la casilla 1 entonces..
							{	//PRECARGA de textos:
								if(r007B[3][v4] < r007B[2][v4].length)
								{	s00EXIT[1][2] = '';
									s00EXIT[2][2] = 'i1, ';
									if(( 0 < r007B[3][v4])&&(1 < r007B[2][v4].length))//Si no es la primer casilla(0) y la longitud es mayor a 1 
									{	s00EXIT[1][2] += (r007B[3][v4] + 1) + '. ';//r007B[3][v4] + ', ';
										s00EXIT[2][2] += (r007B[3][v4] + 1) + '. ';//r007B[3][v4] + ', ';
									}
									s00EXIT[1][2] += r007A[id][v4][r007B[3][v4]].charAt(0).toUpperCase() + r007A[id][v4][r007B[3][v4]].slice(1);//carga el guión local: haz clic para entrar
									s00EXIT[2][2] += r007A[1][v4][r007B[3][v4]].charAt(0).toUpperCase() + r007A[1][v4][r007B[3][v4]].slice(1);//carga el guión internacional:click to enter
									if(r007B[3][v4] < r007B[2][v4].length)	
									{	if(1 < r007B[2][v4].length)//si la lonjitud es mayor que 1
										{	if(r007B[3][v4] < (r007B[2][v4].length - 1))
											{	s00EXIT[1][2] += kTapaI[id][21];//continuar
												s00EXIT[2][2] += kTapaI[1][21];//continue
											}
											if(r007B[3][v4] == (r007B[2][v4].length - 1))
											{	s00EXIT[1][2] += kTapaI[id][4];//Fin, reiniciar
												s00EXIT[2][2] += kTapaI[1][4];//End, restart
											}
										}
									}
								}
								f0046();//CARGAR las variables s00EXIT
								//Esta linea es distinta por ser la ruta de anuncios y siempre llevar a f106()::
								v02 = '<div class="cNada"><button class="cButton" onclick="hh6('+v4+')" onfocus="f0029('+v1+')"><div aria-hidden="true" class="cCero cPicI"><span class="cObj cPic1 cCero"><div class="cBox cFon">';
								if(r007B[3][v4] < r007B[2][v4].length)
								{	switch(r007B[1][v4][r007B[3][v4]])//Tipo de icono/imagen.. 0-3
									{	case 0://Imagen dinámica
											f0123(r007B[2][v4][r007B[3][v4]]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
											v02 += '<div class="c1x1 cZIn"><img src="'+kTapa0[bus][2]+'" class="c1x0"></div>';
											//v02 += '<div class="c1x1 cZIn"><img src="'+kTapa0[r007B[2][v4][r007B[3][v4]]][2]+'" class="c1x0"></div>';
										break;
										case 1://Icono dinámico
											v02 += '<div class="c1x1 cZIn"><i class="'+kTapa1[r007B[2][v4][r007B[3][v4]]][2]+' cAjust8"></i></div>';
										break;
										case 2://Texto dinámico
											v02 += '<div class="c1x1 cZIn cAjust8">'+kTapa2[r007B[2][v4][r007B[3][v4]]][2]+'</div>';
										break;
										case 3://Imagen estática
											f0123(r007B[2][v4][r007B[3][v4]]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
											v02 += '<div class="c1x1 cZIn"><img src="'+kTapa0[bus][2]+'" class="c1x0"></div>';
											//v02 += '<div class="c1x1 cZIn"><img src="'+kTapa0[r007B[2][v4][r007B[3][v4]]][2]+'" class="c1x0"></div>';
										break;
										case 4://Video estático
											v02 += '<div class="c1x1 cZIn"></div>';
										break;
										case 5://Texto dinámico + Icono dinámico
											v02 += '<div class="c1x1 cZIn cAjust8">'+kTapa2[r007B[2][v4][r007B[3][v4]]][2]+'<i class="'+kTapa1[r007B[7][v4][r007B[3][v4]]][2]+' cAjust8"></i></div>';
										break;
										case 6://Icono dinámico + Icono dinámico
											v02 += '<div class="c1x1 cZIn cAjust8"><i class="'+kTapa1[r007B[2][v4][r007B[3][v4]]][2]+' cAjust8"></i><i class="'+kTapa1[r007B[7][v4][r007B[3][v4]]][2]+' cAjust8"></i></div>';
										break;
										case 7://Icono dinámico + Icono dinámico + Fondo Negro
											v02 += '<div class="c1x1 cZIn cAjust9"><i class="'+kTapa1[r007B[2][v4][r007B[3][v4]]][2]+' cAjust8"></i><i class="'+kTapa1[r007B[7][v4][r007B[3][v4]]][2]+' cAjust8"></i></div>';
										break;
										case 8://Icono dinámico + Icono dinámico
											v02 += '<div class="c1x1 cZIn cAma"><i class="'+kTapa1[r007B[2][v4][r007B[3][v4]]][2]+' cAjust8"></i><i class="'+kTapa1[r007B[7][v4][r007B[3][v4]]][2]+' cAjust8"></i></div>';
										break;
										case 9://Icono dinámico + Icono dinámico
											v02 += '<div class="c1x1 cZIn cLuz"><i class="'+kTapa1[r007B[2][v4][r007B[3][v4]]][2]+' cAjust8"></i><i class="'+kTapa1[r007B[7][v4][r007B[3][v4]]][2]+' cAjust8"></i></div>';
										break;
										//AQUI falta desarrollarse case 10 para imagen con icono dinámico similar a case 5						
									}
								}
							}
							v02 += '</div></span>';//termina el HTML del area visual
							if((g00VARS[11][2] == 0)||(g00VARS[11][2] == 4))//todos los modos o señas
							{	if((id > 1)&&(g00VARS[5][2]))//Si no es el idioma ingles y esta i1..
								{	//v02 += '<div class="cPic2"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div>';
									v02 += '<div class="cLR cDer cFlex"><div class="cPic2 sepia"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div></div>';
								}
								//v02 += '<div class="cPic2 cRigh"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div>';
								v02 += '<div class="cLR cFlex"><div class="cPic2"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div></div>';
							}//Termina los interpretes señas
							f0072(id);//ADICIONAR HTML para terminar los botones/hojas de la Ruta
						}*/
					break;
					case 8://Ayudas - 

						iMenu.innerHTML = '<i class="'+kTapa1[73][2]+'"></i>';
						for (v1 = 1; v1 < (visOK.length - 1); v1++)//SE CORRE UNA COLUMNA A LA DERECHA PARA PODER AGREGAR EL LIMITE SUPERIOR Y SE RESTA 1 POR EL LIMITE INFERIOR
						{	let v4 = visOK[v1];//v4:Número de la casilla que sigue
							
							/*
							//PRECARGA de textos:
							s00EXIT[1][2] = r008A[id][v4].charAt(0).toUpperCase() + r008A[id][v4].slice(1);//carga el guión local: haz clic para entrar
							s00EXIT[2][2] = 'i1, '+r008A[1][v4];//carga el guión internacional:click to enter
							//console.log('46<12H');
							*/

							//PRECARGA de textos:
							if(mIr008B[v4][3] < mIr008B[v4][2].length)
							//if(r008B[3][v4] < r008B[2][v4].length)
							{	
								s00EXIT[1][2] = '';
								s00EXIT[2][2] = 'i1, ';
								if(( 0 < mIr008B[v4][3])&&(1 < mIr008B[v4][2].length))//Si no es la primer casilla(0) y la longitud es mayor a 1 
								//if(( 0 < r008B[3][v4])&&(1 < r008B[2][v4].length))//Si no es la primer casilla(0) y la longitud es mayor a 1 
								{	s00EXIT[1][2] += (mIr008B[v4][3] + 1) + '. ';
									s00EXIT[2][2] += (mIr008B[v4][3] + 1) + '. ';
									//s00EXIT[1][2] += (r008B[3][v4] + 1) + '. ';
									//s00EXIT[2][2] += (r008B[3][v4] + 1) + '. ';
								}
								s00EXIT[1][2] += mIr008A[v4][id][mIr008B[v4][3]].charAt(0).toUpperCase() + mIr008A[v4][id][mIr008B[v4][3]].slice(1);//carga el guión local: haz clic para entrar
								s00EXIT[2][2] += mIr008A[v4][1][mIr008B[v4][3]].charAt(0).toUpperCase() + mIr008A[v4][1][mIr008B[v4][3]].slice(1);//carga el guión internacional:click to enter
								//s00EXIT[1][2] += r008A[id][v4][r008B[3][v4]].charAt(0).toUpperCase() + r008A[id][v4][r008B[3][v4]].slice(1);//carga el guión local: haz clic para entrar
								//s00EXIT[2][2] += r008A[1][v4][r008B[3][v4]].charAt(0).toUpperCase() + r008A[1][v4][r008B[3][v4]].slice(1);//carga el guión internacional:click to enter
								if(mIr008B[v4][3] < mIr008B[v4][2].length)	
								//if(r008B[3][v4] < r008B[2][v4].length)	
								{	if(1 < mIr008B[v4][2].length)//si la lonjitud es mayor que 1
									//if(1 < r008B[2][v4].length)//si la lonjitud es mayor que 1
									{	if(mIr008B[v4][3] < (mIr008B[v4][2].length - 1))
										//if(r008B[3][v4] < (r008B[2][v4].length - 1))
										{	s00EXIT[1][2] += mIkTapaI[21][id];//continuar
											s00EXIT[2][2] += mIkTapaI[21][1];//continue
											//s00EXIT[1][2] += kTapaI[id][21];//continuar
											//s00EXIT[2][2] += kTapaI[1][21];//continue
										}
										if(mIr008B[v4][3] == (mIr008B[v4][2].length - 1))
										//if(r008B[3][v4] == (r008B[2][v4].length - 1))
										{	s00EXIT[1][2] += mIkTapaI[4][id];//Fin, reiniciar
											s00EXIT[2][2] += mIkTapaI[4][1];//End, restart
											//s00EXIT[1][2] += kTapaI[id][4];//Fin, reiniciar
											//s00EXIT[2][2] += kTapaI[1][4];//End, restart
										}
									}
								}
							}


							f0046();//CARGAR las variables s00EXIT


							//Esta linea es distinta por ser la ruta de anuncios y siempre llevar a f106()::
							v02 = '<div class="cNada"><button class="cButton" onclick="hh6('+v4+')" onfocus="f0029('+v1+')"><div aria-hidden="true" class="cCero cPicI"><span class="cObj cPic1 cCero"><div class="cBox cFon">';

							if(mIr008B[v4][3] < mIr008B[v4][2].length)
							//if(r008B[3][v4] < r008B[2][v4].length)
							{	
								switch(mIr008B[v4][1][mIr008B[v4][3]])//Tipo de icono/imagen.. 0-3
								//switch(r008B[1][v4][r008B[3][v4]])//Tipo de icono/imagen.. 0-3
								{	case 0://Imagen dinámica
										f0123(mIr008B[v4][2][mIr008B[v4][3]]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
										//f0123(r008B[2][v4][r008B[3][v4]]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
										v02 += '<div class="c1x1 cZIn"><img src="'+kTapa0[bus][2]+'" class="c1x0"></div>';
									break;
									case 1://Icono dinámico
										v02 += '<div class="c1x1 cZIn"><i class="'+kTapa1[mIr008B[v4][2][mIr008B[v4][3]]][2]+' cAjust8"></i></div>';
										//v02 += '<div class="c1x1 cZIn"><i class="'+kTapa1[r008B[2][v4][r008B[3][v4]]][2]+' cAjust8"></i></div>';
									break;
									case 2://Texto dinámico
										v02 += '<div class="c1x1 cZIn cAjust8">'+kTapa2[mIr008B[v4][2][mIr008B[v4][3]]][2]+'</div>';
										//v02 += '<div class="c1x1 cZIn cAjust8">'+kTapa2[r008B[2][v4][r008B[3][v4]]][2]+'</div>';
									break;
									case 3://Imagen estática
										f0123(mIr008B[v4][2][mIr008B[v4][3]]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
										//f0123(r008B[2][v4][r008B[3][v4]]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
										v02 += '<div class="c1x1 cZIn"><img src="'+kTapa0[bus][2]+'" class="c1x0"></div>';
									break;
									case 4://Video estático
										v02 += '<div class="c1x1 cZIn"></div>';
									break;
									case 5://Texto dinámico + Icono dinámico
										v02 += '<div class="c1x1 cZIn cAjust8">'+kTapa2[mIr008B[v4][2][mIr008B[v4][3]]][2]+'<i class="'+kTapa1[mIr008B[v4][7][mIr008B[v4][3]]][2]+' cAjust8"></i></div>';
										//v02 += '<div class="c1x1 cZIn cAjust8">'+kTapa2[r008B[2][v4][r008B[3][v4]]][2]+'<i class="'+kTapa1[r008B[7][v4][r008B[3][v4]]][2]+' cAjust8"></i></div>';
									break;
									case 6://Icono dinámico + Icono dinámico
										v02 += '<div class="c1x1 cZIn cAjust8"><i class="'+kTapa1[mIr008B[v4][2][mIr008B[v4][3]]][2]+' cAjust8"></i><i class="'+kTapa1[mIr008B[v4][7][mIr008B[v4][3]]][2]+' cAjust8"></i></div>';
										//v02 += '<div class="c1x1 cZIn cAjust8"><i class="'+kTapa1[r008B[2][v4][r008B[3][v4]]][2]+' cAjust8"></i><i class="'+kTapa1[r008B[7][v4][r008B[3][v4]]][2]+' cAjust8"></i></div>';
									break;
									case 7://Icono dinámico + Icono dinámico + Fondo Negro
										v02 += '<div class="c1x1 cZIn cAjust9"><i class="'+kTapa1[mIr008B[v4][2][mIr008B[v4][3]]][2]+' cAjust8"></i><i class="'+kTapa1[mIr008B[v4][7][mIr008B[v4][3]]][2]+' cAjust8"></i></div>';
										//v02 += '<div class="c1x1 cZIn cAjust9"><i class="'+kTapa1[r008B[2][v4][r008B[3][v4]]][2]+' cAjust8"></i><i class="'+kTapa1[r008B[7][v4][r008B[3][v4]]][2]+' cAjust8"></i></div>';
									break;
									case 8://Icono dinámico + Icono dinámico
										v02 += '<div class="c1x1 cZIn cAma"><i class="'+kTapa1[mIr008B[v4][2][mIr008B[v4][3]]][2]+' cAjust8"></i><i class="'+kTapa1[mIr008B[v4][7][mIr008B[v4][3]]][2]+' cAjust8"></i></div>';
										//v02 += '<div class="c1x1 cZIn cAma"><i class="'+kTapa1[r008B[2][v4][r008B[3][v4]]][2]+' cAjust8"></i><i class="'+kTapa1[r008B[7][v4][r008B[3][v4]]][2]+' cAjust8"></i></div>';
									break;
									case 9://Icono dinámico + Icono dinámico
										v02 += '<div class="c1x1 cZIn cLuz"><i class="'+kTapa1[mIr008B[v4][2][mIr008B[v4][3]]][2]+' cAjust8"></i><i class="'+kTapa1[mIr008B[v4][7][mIr008B[v4][3]]][2]+' cAjust8"></i></div>';
										//v02 += '<div class="c1x1 cZIn cLuz"><i class="'+kTapa1[r008B[2][v4][r008B[3][v4]]][2]+' cAjust8"></i><i class="'+kTapa1[r008B[7][v4][r008B[3][v4]]][2]+' cAjust8"></i></div>';
									break;
									//AQUI falta desarrollarse case 10 para imagen con icono dinámico similar a case 5						
								}
							}
							v02 += '</div></span>';//termina el HTML del area visual
							if((g00VARS[11][2] == 0)||(g00VARS[11][2] == 4))//todos los modos o señas
							{	if((id > 1)&&(g00VARS[5][2]))//Si no es el idioma ingles y esta i1..
								{	//v02 += '<div class="cPic2"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div>';
									v02 += '<div class="cLR cDer cFlex"><div class="cPic2 sepia"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div></div>';
								}
								//v02 += '<div class="cPic2 cRigh"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div>';
								v02 += '<div class="cLR cFlex"><div class="cPic2"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div></div>';
							}//Termina los interpretes señas
							f0072(id);//ADICIONAR HTML para terminar los botones/hojas de la Ruta
						}

					break;
				}
				//FINALIZAR EL HTML con la última casilla de "abajo"
				//PRECARGAR textos
	  			s00EXIT[1][2] = mIkTapaI[11][id].charAt(0).toUpperCase() + mIkTapaI[11][id].slice(1);//carga el guión local: abajo
				s00EXIT[2][2] = 'i1, '+mIkTapaI[11][1];//carga el guión internacional: down
				//s00EXIT[1][2] = kTapaI[id][11].charAt(0).toUpperCase() + kTapaI[id][11].slice(1);//carga el guión local: abajo
				//s00EXIT[2][2] = 'i1, '+kTapaI[1][11];//carga el guión internacional: down
				//console.log('46<12I');
				f0046();//CARGAR las variables s00EXIT
				v02 = '<div class="cNada"><button class="cButton cLDown" onclick="hh6(0)" onfocus="f0029('+(visOK.length - 1)+')"><div aria-hidden="true" class="cCero cPicI"><span class="cObj cPic1 cCero"><div class="cBox cFon"><div class="c1x1 cZIn"><i class="'+kTapa1[14][2]+' cAjust8"></i></div></div></span>';		
				//CARGAR HTML
				if((g00VARS[11][2] == 0)||(g00VARS[11][2] == 4))//Si todos los modos o señas.. adiciona interprete(s) Local(Internacional) ..
				{	if((id > 1)&&(g00VARS[5][2]))//Si no es el idioma ingles, esta i1,.. adiciona el interprete Internacopnal de la izquierda..
					{	//v02 += '<div class="cPic2"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div>';
						v02 += '<div class="cLR cDer cFlex"><div class="cPic2 sepia"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div></div>';
					}
					//AGREGAR interprete Local de la derecha..
					//v02 += '<div class="cPic2 cRigh"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div>';		
					v02 += '<div class="cLR cFlex"><div class="cPic2"><img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div></div></div>';
				}
				f0072(id);//ADICIONAR HTML para terminar los botones/hojas de la Ruta
				g00HTML[27][2] = v03;
				lLINES.innerHTML = v03;//Hacer esto mismo para lMULTI???
			}
			if(int)
			{	f0086();//L ENCONTRAR todos los elementos cLife y cPros (ruta) o de cPros0 y cLife0 (tapa)
			}
		}

/*
f0014=(ale)=>//CARGAR los guiones de la tapa (o alerta) y posicionar el cursor
		{	lOU(14);
			//f0015();// - * + TEMPORIZAR la duración de la tapa
		//NOTA PENDIENTE!!!! ESTA FUNCION anterior f15() es decir la f20()interna ponerla al final de la vibracion
			f0016();//CARGAR el/los guion/es de la tapa (o alerta)
		//	f0087();//REINICIAR los contadores de señas
		}
*/

f0015=(reg)=>//"MENU" CARGAR la ruta 4 en pantalla
		{	lOG(15);
			if(reg)//reg: interacción sobre la pantalla
			{	f0093(reg);//REGISTRAR el primer clic sobre pantalla
			}
			f0078();//L SONAR Clic
			if(yKEYS[2][5]&&yKEYS[2][8])//Si MENU esta habilitado y Es visible
			{	f0076();//SI LA TAPA INFORMATIVA esta activa PASAR de TAPA a RUTA porque hay clic sobre algun boton "informativo" 
				if(g02RUTA[gRuta][5])//SI el llamado viene desde una ruta principal por ej 3.. 
				{	gMemR = gRuta;//memorizar la Ruta principal temporalmente mientras pivota, por ejemplo las rutas de ajustes
					gMemF = gFoco;//memorizar el Foco principal temporalmente mientras pivota, por ejemplo las rutas de ajustes
				}
				gRuta = 4;//ruta de menú
				gFoco = 1;
				f0017(1);//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
			}
		}


f0016=()=>//CARGAR los guiones de la tapa
		{	lOG(16);
			f0090();//L BORRAR memoria de animación: señas y glosas
			let id = g00VARS[27][2];//id Idioma local
			let ss = '<img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div>';
			let v0 = '';//Inicio HTML del guíon local.. CON CÓDIGO HTML
			//CONTROL SENTIDO DE LECTURA DEPENDIENDO DEL IDIOMA:
			if(mIkControl[2][id])//1LeftToR
			//if(kControl[id][2])//1LeftToR
			{	v0 += '<span>';//Inicio del div HTML del guíon local..
				bTapaA1.style.textAlign = 'left';
			}
			else//0RightTL
			{	v0 += '<span class="cRTL">';//Inicio del div HTML del guíon local..
				bTapaA1.style.textAlign = 'right';
			}
			let v1 = '';//inicio guion local SIN CÓDIGO HTML
			let v2;//inicio guion internacional SIN CÓDIGO HTML
			//,elemento x de y y ayuda de botones:
			let v3 = mIkTapaI[17][id]+' '+(gFoco + 1)+' '+mIkTapaI[18][id]+' '+visOK.length;
			//let v3 = kTapaI[id][17]+' '+(gFoco + 1)+' '+kTapaI[id][18]+' '+visOK.length;
			if((id > 1)&&(g00VARS[5][2]))//Si no es el idioma ingles y esta i1..
			{	v2 = 'i1, ';//Inicio del guíon internaional..
			}
			f0001();//CONSEGUIR la hora local actual
			//CARGAR el icono central de la ventana usando la etiqueta i
			bTapaO.innerHTML = '<i class="'+kTapa1[g02RUTA[gRuta][6]][2]+' cAjust8"></i>';
			f0057(id,gRuta);//ALMACENAR en [preTAP] el guíon o guiones de la tapa desde las RUTAS
			//ADICIONAR El guíon de la casilla actual en lengua Local[vFocoL] más la ruta usando comas y signo +
			v0 += mIkTapaI[6][id] + vFocoL + mIkTapaI[3][id]+'<br>'+mIkTapaI[23][id]+vFocoLz+mIkTapaI[3][id]+'<br>'+mIkTapaI[2][id]+preTAP;//', ++ 'ruta
			v1 += mIkTapaI[6][id] + vFocoL + mIkTapaI[3][id]+mIkTapaI[23][id]+vFocoLz+mIkTapaI[3][id]+mIkTapaI[2][id]+preTAP;//
			//v0 += kTapaI[id][6] + vFocoL + kTapaI[id][3]+'<br>'+kTapaI[id][23]+vFocoLz+kTapaI[id][3]+'<br>'+kTapaI[id][2]+preTAP;//////', ++ 'ruta
			//v1 += kTapaI[id][6] + vFocoL + kTapaI[id][3]+kTapaI[id][23]+vFocoLz+kTapaI[id][3]+kTapaI[id][2]+preTAP;/////
			//SI la ruta es más larga continua hasta completar toda la ruta
			if(g02RUTA[gRuta].length - 1 > 8)////
			{	f0057(id,g02RUTA[gRuta][8]);
				v0 += mIkTapaI[3][id]+'+'+mIkTapaI[3][id]+preTAP;/////
				v1 += mIkTapaI[3][id]+'+'+mIkTapaI[3][id]+preTAP;/////
				//v0 += kTapaI[id][3]+'+'+kTapaI[id][3]+preTAP;/////
				//v1 += kTapaI[id][3]+'+'+kTapaI[id][3]+preTAP;/////
				if(g02RUTA[gRuta].length - 1 > 9)////
				{	f0057(id,g02RUTA[gRuta][9]);
					v0 += mIkTapaI[3][id]+'+'+mIkTapaI[3][id]+preTAP;/////
					v1 += mIkTapaI[3][id]+'+'+mIkTapaI[3][id]+preTAP;////
					//v0 += kTapaI[id][3]+'+'+kTapaI[id][3]+preTAP;/////
					//v1 += kTapaI[id][3]+'+'+kTapaI[id][3]+preTAP;////
					if(g02RUTA[gRuta].length - 1 > 10)////
					{	f0057(id,g02RUTA[gRuta][10]);
						v0 += mIkTapaI[3][id]+'+'+mIkTapaI[3][id]+preTAP;/////
						v1 += mIkTapaI[3][id]+'+'+mIkTapaI[3][id]+preTAP;////
						//v0 += kTapaI[id][3]+'+'+kTapaI[id][3]+preTAP;/////
						//v1 += kTapaI[id][3]+'+'+kTapaI[id][3]+preTAP;////
						if(g02RUTA[gRuta].length - 1 > 11)////
						{	f0057(id,g02RUTA[gRuta][11]);
							v0 += mIkTapaI[3][id]+'+'+mIkTapaI[3][id]+preTAP;/////
							v1 += mIkTapaI[3][id]+'+'+mIkTapaI[3][id]+preTAP;////
							//v0 += kTapaI[id][3]+'+'+kTapaI[id][3]+preTAP;/////
							//v1 += kTapaI[id][3]+'+'+kTapaI[id][3]+preTAP;////
						}
					}
				}
			}
			
			if(mIkControl[1][1])//Control formato hora nacional:   hora 00:00  /  00:00 hora
			//if(kControl[1][1])//Control formato hora nacional:   hora 00:00  /  00:00 hora
			{	v0 += mIkTapaI[3][id] + '<br>' + v3 + mIkTapaI[3][id]+'<br>'+ mIkTapaI[1][id] +'<span class="cLTR">'+ miHora +'</span>' + mIkTapaI[3][id] + '<br>'+ mIkBoton[6][id] + ' ';
				v1 += mIkTapaI[3][id] + ' ' + v3 + mIkTapaI[3][id] + mIkTapaI[1][id] + miHora  + mIkTapaI[3][id] + ' ' + mIkBoton[6][id] + ' ';
				//v0 += kTapaI[id][3] + '<br>' + v3 + kTapaI[id][3]+'<br>'+ kTapaI[id][1] +'<span class="cLTR">'+ miHora +'</span>' + kTapaI[id][3] + '<br>'+ kBoton[id][6] + ' ';
				//v1 += kTapaI[id][3] + ' ' + v3 + kTapaI[id][3] + kTapaI[id][1] + miHora  + kTapaI[id][3] + ' ' + kBoton[id][6] + ' ';
				if((!maX)&&((document.fullscreen != false)||(document.fullscreenElement != null)))//Si pantalla no permite ser maximizada desde JS, y está minimizada, la única forma de salir de ese estado es maximizar desde el navegador
				{	v0 += mIkBoton[7][id];
					v1 += mIkBoton[7][id];
					//v0 += kBoton[id][7];
					//v1 += kBoton[id][7];
				}
				else
				{	v0 += mIkBoton[8][id];
					v1 += mIkBoton[8][id];
					//v0 += kBoton[id][8];
					//v1 += kBoton[id][8];
				}
			
				v0 += '<br>' + mIkBoton[4][id] + ' ';
				v1 += ' ' + mIkBoton[4][id] + ' ';
				//v0 += '<br>' + kBoton[id][4] + ' ';
				//v1 += ' ' + kBoton[id][4] + ' ';
				if(g00VARS[59][2])//Si Lector de pantalla esta activo
				{	v0 += mIkBoton[2][id];
					v1 += mIkBoton[2][id];
					//v0 += kBoton[id][2];
					//v1 += kBoton[id][2];
				}
				else
				{	v0 += mIkBoton[3][id];
					v1 += mIkBoton[3][id];
					//v0 += kBoton[id][3];
					//v1 += kBoton[id][3];
				}
				v0 += '<br>' + mIkBoton[5][id] + ' ';
				v1 += ' ' + mIkBoton[5][id] + ' ';
				//v0 += '<br>' + kBoton[id][5] + ' ';
				//v1 += ' ' + kBoton[id][5] + ' ';
				if((g00VARS[11][2] == 0)||(g00VARS[11][2] == 2))//Si Vibrador esta activo o no se ha seleccinado
				{	v0 += mIkBoton[2][id];
					v1 += mIkBoton[2][id];
					//v0 += kBoton[id][2];
					//v1 += kBoton[id][2];
				}
				else
				{	v0 += mIkBoton[3][id];
					v1 += mIkBoton[3][id];
					//v0 += kBoton[id][3];
					//v1 += kBoton[id][3];
				}
				v0 +=  '<br>' + mIkBoton[1][id] + ' ';
				v1 +=  ' ' + mIkBoton[1][id] + ' ';
				//v0 +=  '<br>' + kBoton[id][1] + ' ';
				//v1 +=  ' ' + kBoton[id][1] + ' ';
				if(g00VARS[10][2])//Si capslock es ON
				{	v0 += mIkBoton[2][id];
					v1 += mIkBoton[2][id];
					//v0 += kBoton[id][2];
					//v1 += kBoton[id][2];
				}
				else
				{	v0 += mIkBoton[3][id];
					v1 += mIkBoton[3][id];
					//v0 += kBoton[id][3];
					//v1 += kBoton[id][3];
				}
				v0 += ' ' +'<br>' + mIkBoton[9][id];
				v1 += ' ' + mIkBoton[9][id];
				v0 += ' ' + '<br>'+mIkBoton[10][id];
				v1 += ' ' + mIkBoton[10][id];
				//v0 += ' ' +'<br>' + kBoton[id][9];
				//v1 += ' ' + kBoton[id][9];
				//v0 += ' ' + '<br>'+kBoton[id][10];
				//v1 += ' ' + kBoton[id][10];
				v0 += '</span>';
			}

			//CARGAR EN g00VARS[24] EL GUIÓN LOCAL sin HTML:
			g00VARS[24][2] = v1;
			bTapaA1.innerHTML = v0;//COMPLETAR EL HTML CON EL TEXTO LOCAL EN PANTALLA (BRAILLE, MORSE, ETC..)
			if((id > 1)&&(g00VARS[5][2]))//Si no es el idioma ingles y esta i1, Tapa informativa en ingles
			{	v2 += mIkTapaI[6][1]+' ';//You are in select
				//v2 += kTapaI[1][6]+' ';//You are in select
				f0057(1,gRuta);
				v2 += vFocoT + mIkTapaI[3][1] +mIkTapaI[23][1]+vFocoTz+mIkTapaI[3][1]+ mIkTapaI[2][1] + preTAP;////', ++ 'ruta
				//v2 += vFocoT + kTapaI[1][3] +kTapaI[1][23]+vFocoTz+kTapaI[1][3]+ kTapaI[1][2] + preTAP;////', ++ 'ruta
				if(g02RUTA[gRuta].length - 1 > 8)////
				{	f0057(1,g02RUTA[gRuta][8]);
					v2 += mIkTapaI[3][1]+'+'+mIkTapaI[3][id]+preTAP;/////
					//v2 += kTapaI[1][3]+'+'+kTapaI[id][3]+preTAP;/////
					if(g02RUTA[gRuta].length - 1 > 9)////
					{	f0057(1,g02RUTA[gRuta][9]);
						v2 += mIkTapaI[3][1]+'+'+mIkTapaI[3][id]+preTAP;////
						//v2 += kTapaI[1][3]+'+'+kTapaI[id][3]+preTAP;////
						if(g02RUTA[gRuta].length - 1 > 10)////
						{	f0057(1,g02RUTA[gRuta][10]);
							v2 += mIkTapaI[3][1]+'+'+mIkTapaI[3][id]+preTAP;/////
							//v2 += kTapaI[1][3]+'+'+kTapaI[id][3]+preTAP;/////
							if(g02RUTA[gRuta].length - 1 > 11)////
							{	f0057(1,g02RUTA[gRuta][11]);
								v2 += mIkTapaI[3][1]+'+'+mIkTapaI[3][id]+preTAP;////
								//v2 += kTapaI[1][3]+'+'+kTapaI[id][3]+preTAP;////
							}
						}
					}
				}
				v2 += mIkTapaI[3][1];//.
				//v2 += kTapaI[1][3];//.
				if(g00VARS[10][2])//Si esta capslock on
				{	v2 += mIkBoton[1][1];
					//v2 += kBoton[1][1];
				}
				else
				{	v2 += mIkBoton[2][1];
					//v2 += kBoton[1][2];
				}
				if(mIkControl[1][1])//Control formato hora internacional:   hora 00:00  /  00:00 hora
				//if(kControl[1][1])//Control formato hora internacional:   hora 00:00  /  00:00 hora
				{	v2 += mIkTapaI[17][1]+' '+(gFoco + 1)+' '+mIkTapaI[18][1]+' '+visOK.length +mIkTapaI[3][1] + mIkTapaI[1][1] + miHora +  mIkTapaI[3][1];
					//v2 += kTapaI[1][17]+' '+(gFoco + 1)+' '+kTapaI[1][18]+' '+visOK.length +kTapaI[1][3] + kTapaI[1][1] + miHora +  kTapaI[1][3];
				}
			
				//CARGAR EN g00VARS[25] EL 'GUIÓN INTERNACIONAL':
				g00VARS[25][2] = v2;
				//COMPLETAR EL HTML CON EL TEXTO en ingles EN PANTALLA (BRAILLE, MORSE, ETC..)
				bTapaA2.innerHTML = v2;
				//CARGAR el interprete en ingles ASL:
				iTL.innerHTML = ss;//habilita el interprete en ingles
			}
			else//Si es local no ingles
			{	bTapaA2.innerHTML = '';
				iTL.innerHTML = '';
			}
			//CARGAR el interprete local:
			iTR.innerHTML = ss;


			g00VARS[28][2] = 0;//* *0Local,1EUA(Inter) Guion en idioma local
			g00VARS[21][2] = v1;//* *carga el guion global TEXTO ORIGINAL A SER INTREPRETADO A SEÑAS, MORSE Y BRAILLE		
			f0021();//* *normaliza el guión global (g00VARS[21][2])
			

			f0010(1);//g00HTML[23][2](HTML) - MORSE
			bTapaD1.innerHTML = g00HTML[23][2];//morse local
			

			f0080();//* *HTML señas LOCAL
			//f0084();//* *FINALIZAR ] serie de señales y prosas
			
		//	f0086();//* *ENCONTRAR todos los elementos cLife y cPros (ruta) o de cPros0 y cLife0 (tapa)
			

			f0007();//OUT g00HTML[19][2] braille
			bTapaC1.innerHTML = g00HTML[19][2];//braille local
			

			if((id > 1)&&(g00VARS[5][2]))//Si no es el idioma ingles y esta i1..
			{	


				g00VARS[28][2] = 1;//* *Guion en ingles (internacional)
				g00VARS[21][2] = v2;//* *carga el guion global TEXTO ORIGINAL A SER INTREPRETADO A SEÑAS, MORSE Y BRAILLE
				f0021();//* *normaliza el guión global (g00VARS[21][2])
				

				f0010(1);//g00HTML[23][2](HTML) - MORSE
				bTapaD2.innerHTML = g00HTML[23][2];//morse inter
				

				f0080();//* *HTML señas INTERNACIONAL
				//f0084();//* *FINALIZAR ] serie de señales y prosas
				

			//	f0086();//* *ENCONTRAR todos los elementos cLife y cPros (ruta) o de cPros0 y cLife0 (tapa)
				


				f0007();//OUT g00HTML[19][2] braille
				bTapaC2.innerHTML = g00HTML[19][2];//braille inter
			}
			else
			{	bTapaD2.innerHTML =	'';
				bTapaC2.innerHTML = '';
			}
			f0086();//* *ENCONTRAR todos los elementos cLife y cPros (ruta) o de cPros0 y cLife0 (tapa)
		}

f0017=(scr)=>//CARGAR Ambiente RUTA X - HTML de capa ruta, (scr) se usa para POSICIONAR foco donde este el cursor actual (gFoco)
		{	lOL(17);
			ambi = 5;//RUTA X:: persona, Ruta Comunitaria, etc..
			g00VARS[55][3] = 1;//Modo normal
			iRUTA.classList.remove('cX');//Muestra capa RUTA iRUTA
			intM.classList.remove('cX');//Muestra interfaz M
			f0068();//L AJUSTAR el tamaño del visor al configurado por el usuario
			f0028();//L ACTUALIZAR el tamaño del texto al configurado por el usuario 0,normal	
			f0012(1);//L CARGAR HTML de la capa ruta con interpretes
			f0051();//L MOSTRAR botones de RUTA
		 // f0128();//
		 //	f0087();//L REINICIAR contadores de señas
		 	f0049();//L OCULTAR el botón de deshacer (UNDO) cuando no se necesite
		 	if(scr)
		 	{	f0031(1);//(scr) se usa para POSICIONAR foco donde este el cursor actual (gFoco) dentro de una RUTA (forms[0])
		 	}
		 	else
		 	{	f0031();//POSICIONAR al usuario dentro de una RUTA (forms[0])
		 	}


		 	//Prueba de f0143..
			//f0143();//ENCONTRAR todos los elementos cBrai

		}

f0018=()=>//ESPERAR un segundo, el tamaño de la pantalla cambio, si no hay más eventos RESIZE tomar ACCIONES
		{	lOG(18);
			sizMem = sizCon;//Guardar en memoria el conteo de sizCon
			setTimeout(()=>{//ESPERAR un segundo, verificar que no exista un nuevo evento RESIZE
				//console.log('Transcurrio 1 seg, maX=',maX,'\n\n');
				sizCsE += 1;//Nuevo evento de esperar 1 segundo
				if(sizCsE < 100)//Si lleva muchos segundos de espera sin poder terminar
				{	if(sizMem == sizCon)//Si paso 1 segundo y no hubo más eventos resize
					{	//console.log('la pantalla se estabilizo [Resize off]');//la pantalla se estabilizo..
						fff();
						f0084();//L REINICIAR sizBan, sizCon y sizCsE permite que "Resize calcule de nuevo todo" la proxima vez que ocurra ese evento
						tamYT = screen.height;//pantalla total
						g00VARS[65][2] = window.outerHeight;//.innerHeight;//ventana actual con navegador , outerHeight;navegador completo
						
						if(g00VARS[65][2] < 1500)//Si alto menor de 2000px (pantalla pequeña o normal) OCULTAR la fila de botones inferior (Filbo)
						{ 	iFilbo.classList.add('cX');
							iCelu.classList.remove('cCel1');
							iCelu.classList.add('cCel0');
							iTia.classList.remove('cTi1');
							iTia.classList.add('cTi0');
							iTio.classList.remove('cTi1');
							iTio.classList.add('cTi0');
							iV6b.style.backgroundColor = 'blue';
						}
						else//Si es igual o mayor de 2000px (pantalla muy alta) MOSTRAR la fila de botones inferior (Filbo)
						{	iFilbo.classList.remove('cX');
							iCelu.classList.remove('cCel0');
							iCelu.classList.add('cCel1');
							iTia.classList.remove('cTi0');
							iTia.classList.add('cTi1');
							iTio.classList.remove('cTi0');
							iTio.classList.add('cTi1');
							iV6b.style.backgroundColor = 'yellow';
						}
						
						g00VARS[65][3] = window.outerWidth;//.innerWidth;//ventana actual con navegador , outerWidth;navegador completo
						g00VARS[65][4] = window.innerHeight;//Altura ventana actual sin el navegador - "más pequeño"
						deltAV = (Math.min(g00VARS[65][2],g00VARS[65][3]) * 0.065);
						let q = g00VARS[65][3]/g00VARS[65][2];
						
						if(g00VARS[65][3] < 400)//Si ancho menor de 400 px AJUSTAR altura de los iconos según ancho de la pantalla
						{	if(g00VARS[65][3] < 200)//ancho menor de 200 px
							{	iBody.style.setProperty('--cAlt','5vh');
							}
							else//ancho entre 200px y 400px
							{	iBody.style.setProperty('--cAlt','7vh');
							}
						}
						else//Si ancho mayor o igual a 400px
						{	iBody.style.setProperty('--cAlt','10vh');
						}
						g00VARS[68][2] = (g00VARS[65][4] * 0.8) - 2;//si es con marquesinas, dejar 10% arriba y 10% abajo para las marquesinas los dos pixeles son por --pelo arriba y abajo, sino es así sería g00VARS[65][4] * 0.92;//* 0.84      68 ALTURA EN px DEL VISOR (LAS IMAGENES Y LOS VIDEOS) //- (g00VARS[67][2]*1);
			  		 	if(g00VARS[65][2] == tamYT)//SI ventana actual es Máxima (sin barra)
						{ 	maX = true;
							//console.log('maX -> ACCION Ubicar al usuario en una RUTA o ALERTA');
							if (mAX ==! maX)//Si antes de ser Máxima era Mínima (Antes debería ser alerta de pant. MINI o estar vacia y va a pasar a AlertaY o Ruta X)
							{	hh75();//ACTUALIZAR pasado de mAX
								if(g00VARS[20][2])//Si alerta 1 esta on de pantalla mini
								{	g00VARS[20][2] = 0;//Desactivar la bandera de pantalla mini
									iMaxim.classList.add('cX');
									iCLIC.classList.add('cX');
									bMin = 0;//Bandera off
								}


							/*let w = 0;
								for (let v = 3; v < g00VARS[20].length; v++)//recorre el arreglo de notificaciones/alertas, todas deben estar en 0, sino debe activarse la notificación/alerta o notificaciones/alertas correspondientes
								{	if(g00VARS[20][v])
									{	w = 1;//Se activa la señal de alerta
										console.log('[[ v=',v,' w=',w);
									}
								}
								if(w)//
								{	console.log('[[ Si hay Notificaciones/alertas primero mostrarlas como ventanas emergentes antes de MOSTRAR la ruta X!');//mostrar Alertas Y's como ventanas emergentes (ambi = 3)
					 				//aquí pienso que se deberían pasar una a una las alertas y que sean de aceptar para quitarlas, al finalizar la última alerta, continuar con los avisos comunitarios de la Ruta X
								}
								else//entonces ambi = 2 o 5 (Tapa X o Ruta X; presentación AV (ambi = 4) no debe pasar por aqui porque antes de ser mini debio terminar y ser ambi 2 con ruta 3 (comunitaria))
								{	console.log('[[ MOSTRAR la ruta X!');
					 				f0017();//poner el foco en la RUTA X y mostrar la Ruta X (ambi se hace = 5)
								}*/
							}
						 	/*else//Si antes de ser Máxima también era Máxima entonces no hace nada, sólo ReEnfocarse y Ajustar el alto del Visor, antes sólo debía ser AlertaY (no Mini) o Ruta X o Presentación AV o Tapa X
							{*/	

							if(ambi == 5)//Si Ruta X
							{	f0068();//AJUSTAR el tamaño estandar del visor e interpretes
								f0031(1);//ReEnfocarse en la Ruta X y quitar/mostrar los botones 4 y 7???
							}
							if((ambi == 2)||(ambi == 3))
							{	f0068(1);//AJUSTAR el tamaño estandar del visor e interpretes
								aFoco.scrollIntoView(centro);//ReEnfocarse en la Tapa X o alerta Y
							}
							if(ambi == 4)//Si Presentación AV entonces no detener el video y que continue en pantalla maximizada..
							{	f0068(2);//AJUSTAR el tamaño estandar del visor e interpretes
								//console.log('(kmar) q=',q);
								if(q < 1.5)//q < 0.9 Pantalla vertical ir rápido
								{	kmar = 0.51;//0.4 0.25;//
								}
								else//q >= 1.3
								{	if(q > 2.5)//q>2.3 Pantalla horizontal - ir lento
									{	kmar = 0.35;//0.2  0.07;//
									}
									else//q=1.3 - 0.9: Pantalla cuadrada
									{ 	kmar = 0.38;//0.3  0.16;//
									}
								}		
							}
						}
						else//Si la pantalla es mínima:
						{	maX = false;
							console.log('>> ACCION maX! Activar/Mantener mensaje: Alerta Ventana Minimizada');
							fff();
							if (mAX ==! maX)//Si antes de ser mínima era máxima..
							{	f0070();//MINIMIZAR la pantalla
								if(ambi == 4)//Si viene de una presentación AV 
								{	console.log('|>> terminar pantalla info');
									f0079();//L Registrar el evento
								//++hh74();//DESACTIVAR la presentación AV - su efecto debe hacer ambi = 5 en Ruta 3 (com)
								}
								hh75();//ACTUALIZAR pasado de mAX
								f0099();//ACTIVAR icono central de Pantalla Minimizada
							}
							else//Si antes de ser mínima también era mínima..
							{	if(!g00VARS[20][2])//Si alerta pantalla mini no esta activa
								{  	f0099();//ACTIVAR icono central de Pantalla Minimizada
								}
							}
						}
						if(mViS)//Si el display M esta activo..
						{	f0151();// Desplaza hacia el final el Display M
						}
					}
					else
					{ 	//console.log('>> ACCION => NADA sizMem ==! sizCon; Resize se disparo de nuevo, hay que esperar otro segundo');
						f0018();//(Ella misma) VUELVE A INICIAR LA ESPERA DE otro SEGUNDO
					}	
				}
				else//no vuelve a esperar otro segundo
				{	//console.log('maX f67() f93() No esperar más segundos, Resize ON');
					f0084();//L REINICIAR sizBan, sizCon y sizCsE permite que "Resize calcule de nuevo todo" la proxima vez que ocurra ese evento
				}	
			}, 1500);//duración de los segundos de espera sujerencia 1500 poner en 4000 para pruebas
		}

f0019=(i)=>//hora0(i) ADICIONAR 0 al frente de números menores de 10
		{	//lOU(19);
			if(i < 10)
			{	i = '0'+i;
			}
			return i;
		}
/*
f0020=()=>//OCULTAR tapa y mostrar ruta
		{	lOU(20);

			iTAPA.classList.add('cX');
			//hh88(1);//Recupera el color de la luz
			f0045();//DETENER vibraciones parpadeos e intervalos pendientes	
			f0051();//HABILITAR botones de RUTA (1,3,4 y 7) - mostrar la ruta y cambiar estado
			

			f0111();//CANCELAR salida de audio y vibraciones
			g00VARS[12][2] = false;//Cancela el permiso de pasar al anuncio uno
			

			console.log('<<<<<<< D E T E N I D O >>>>>>>');
			f0017();
		}
*/
f0021=()=>//NORMALIZAR el texto y volverlo PALABRAS para ser traducidas a señas, morse o braille// g00VARS[21] - INICIO DEL analisis   IN g00VARS[21][2] OUT g00HTML[0,1,2,3][2]
		{	lOL(21);
			g00HTML[0][2] = g00VARS[21][2];
			g00HTML[1][2] = 0;
			g00VARS[54][2] = g00HTML[0][2].trim().replace(/\s\s+/g,' ');//ALMACENA el texto acumulado que va a salir en HTML
			if(g00HTML[0][2].match(g00eREG[1][1]))//DETECTA SI EXISTE UN LINK INTERNO
			{	g00HTML[1][2] = 1;
			}
			else
			{	g00VARS[54][2] = g00VARS[54][2].replace(/\s+\,/g,',');//Quitar espacios antes de cada ,
				g00VARS[54][2] = g00VARS[54][2].replace(/\,/g,', ');//Adicionar 1 espacio luego de cada ,
				g00VARS[54][2] = g00VARS[54][2].replace(/\,\s\s+/g,', ');//Quitar espacios 'dobles' luego de cada , y dejarlo de un solo espacio
				g00VARS[54][2] = g00VARS[54][2].replace(/\s+\;/g,';');//Quitar espacios antes de cada ;
				g00VARS[54][2] = g00VARS[54][2].replace(/\;/g,'; ');//Adicionar 1 espacio luego de cada ;
				g00VARS[54][2] = g00VARS[54][2].replace(/\;\s\s+/g,'; ');//Quitar espacios 'dobles' luego de cada ; y dejarlo de un solo espacio
			}
			g00HTML[2][2] = g00VARS[54][2];
			//out B:
			g00HTML[3][2] = g00HTML[2][2].split(' ');
		}
	
f0022=()=>//MAXIMIZAR la pantalla
		{	lOL(22);
			if(!maX)//Si es minima debe maximizar la ventana
			{	/*if(!g00VARS[55][2])
				{	g00VARS[55][2] = 1;//ocurrio la primer interacción
				}*/
				 /* If fullscreen mode is available, show the element in fullscreen */
 				if(	document.fullscreenEnabled || /* Standard syntax */
  			  		document.webkitFullscreenEnabled || /* Safari */
  			  		document.msFullscreenEnabled) /* IE11 */
 				{	/* Show the element in fullscreen */
					if(iBody.requestFullscreen) 
					{	iBody.requestFullscreen()}
					else if(iBody.mozRequestFullScreen)//* Firefox *
					{	iBody.mozRequestFullScreen()}
					else if(iBody.webkitRequestFullscreen)//* Chrome, Safari & Opera *
					{	iBody.webkitRequestFullscreen()}
					else if(iBody.msRequestFullscreen)//* IE/Edge *
					{	iBody.msRequestFullscreen()};
				}
			}
		}

f0023=()=>//ACTIVAR capa de alerta
		{	lOG(23);
			iTAPA.classList.remove('cX');
	 		line.classList.remove('cEsqi');
	 		line.classList.add('rEsqi');	
		}

f0024=(reg)=>//i - Clic en botón 9 Tapa Info | REINICIAR animación, OCULTAR la ruta actual, MOSTRAR Tapa Informativa X e INFORMAR en que ruta se encuentra el usuario (reg: interacción tipo click sobre la pantalla FrontEnd)
		{	lOG(24);
			//hh88(1);//Luz blanca por info
			hh88(4);//Luz blanca por info
			if(reg)//si viene de interacción tipo click sobre la pantalla FrontEnd)
			{	f0093(reg);//REGISTRAR el primer clic sobre pantalla
			}
			f0078();//L SONAR Clic
			if(ambi == 4)//Presentacion AV
			{	//detener la presentación AV, de forma indirecta debe ir a RUTA 3 (info com) y ambi=5
				hh74();//DESACTIVAR la presentación AV - su efecto debe hacer ambi = 5 en Ruta 3 (com)				
				
				//VER CÓMO MEJORAR LA SIGUIENTE LINEA LUEGO DE DESACTIVARSE LA PRESENTACION..
				f0017(1);//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
				//ambi = 5;//Vuelve a la "Ruta x"
			}
			console.log('Vacia');
			f0050();//f0023();//QUITAR capa RUTA y GUARDAR contenido de lLINES
			iTAPA.classList.remove('cX');
			f0016();//CARGAR el guion de la Tapa Informativa X y posicionar el cursor
			f0028(1);//ACTUALIZAR el tamaño del texto por defecto(1)
			f0068(1);//AJUSTAR el tamaño estandar del visor e interpretes
			f0051();//L MOSTRAR botones de RUTA
			ambi = 2;//Capa de TAPA INFORMATIVA X
			f0089();//ENFOCAR y DECIR la Tapa o la Alerta	
			//Prueba de f0143..
			f0143(1);//ENCONTRAR todos los elementos cBrai
		}

f0025=(textLoc,textInt)=>//Decir() PREPARAR los anuncios local e internacional de la TAPA
		{	lOG(25);
			g00VARS[12][2] = true;//Permiso ok

			//OJO quitar estas 5 lineas....?????
			if(!canTts.speaking)//Si No esta dando un anuncio
			{	console.log('___________I N I C I A N D O___________');
				g00VARS[47][2] = 5;//Mudo y da la orden de permitir dar el anuncio 1 y 2
			}

			f0111(1);//CANCELAR salida de audio y vibraciones

			f0026(textLoc,textInt);//DECIR el anuncio uno (local) y darle el paso al anuncio dos de la TAPA
		}

f0026=(textLoc,textInt)=>//Enunc1() DECIR el anuncio uno (local) y darle el paso al anuncio dos de la TAPA
		{	lOG(26);
			//iV3e.style.backgroundColor = 'white';
			hh82(1);//AJUSTAR velocidad por defecto
			if(textLoc !== '')//Si - no esta vacio
			{	iV1l.style.backgroundColor = 'yellow';
				let toSpeak1 = new SpeechSynthesisUtterance();
				toSpeak1.text = textLoc;//(variable con el texto que va a leer)//Prueba
			  	toSpeak1.rate = speed;//velocidad 0 - 3.6	
				toSpeak1.volume = 1;//g00VARS[45][2];
				toSpeak1.pitch = g00VARS[46][2];
				//if(g00VARS[5][2])//si i1..
				{	
					var selectedVoiceName1 = '';
					switch (g00VARS[27][2])//consigue el nombre de la voz y el lang dependiendo del idioma que tenga configurado el usuario
					{	case 1://ingles
							selectedVoiceName1 = 'Samantha';//tVoces[51][2];
							toSpeak1.lang = 'en-US';//tLanPAIS[8][1];
						break;
						case 2://Español colombia?
							selectedVoiceName1 = tVoces[1][2];//'Paulina' para colombia
							toSpeak1.lang = tLanPAIS[15][1];//'es-MX' para colombia
						break;
						case 3://Frances
							selectedVoiceName1 = tVoces[5][2];//,'fr-CA'	,'Amelie'],
							toSpeak1.lang = tLanPAIS[18][1];//,'fr'		,'fr-CA'	],
						break;
						case 4://korean
							selectedVoiceName1 = tVoces[45][2];//,'ko-KR'	,'Yuna'],
							toSpeak1.lang = tLanPAIS[26][1];//,'ko'		,'kr-KR'	],
						break;
						case 5:
						break;
						case 6:
						break;
						case 7:
						break;
					}
					/*switch (g00VARS[29][2])//consigue el nombre de la voz y el lang dependiendo del pais que tenga configurado el usuario
					{	case 1:
						break;
						case 2:
							selectedVoiceName1 = tVoces[t2Propi[4][g00VARS[29][3]]][2];//tVoces[51][2]=Google UK English Female
							toSpeak1.lang = tLanPAIS[t2Propi[5][g00VARS[29][3]]][1];//tLanPAIS[8][1]=en
						break;
						case 3:
						break;
						case 4:
						break;
						case 5:
						break;
						case 6:
						break;
						case 7:
							selectedVoiceName1 = tVoces[t7Propi[4][g00VARS[29][3]]][2];//'Paulina' para colombia
							toSpeak1.lang = tLanPAIS[t7Propi[5][g00VARS[29][3]]][2];//es[1] 'es-MX'[2] para colombia
							//toSpeak1.lang = tLanPAIS[t7Propi[5][g00VARS[29][3]]][1];//es[1] 'es-MX'[2] para colombia
						break;
					}*/
					voices.forEach(function(voice)
					{	if(voice.name === selectedVoiceName1)
						{	toSpeak1.voice = voice;
							iV1L.style.backgroundColor = 'lightgreen';
						}
						else
						{	iV1L.style.backgroundColor = 'red';
						}
					});
				}
				//se activo la tapa -> lee la tapa y si o si vibra!  NOTA: VIBRACION LOCAL falta UNIRLA CON LA VIBRACION INTERNACIONAL
				g00VARS[28][2] = 0;
				g00VARS[47][2] = 1;//Inicia a dar el anuncio 1 TAPA (local)

				if(conteo[1])//si no esta en presentación AV
				{	f0044(textLoc,textInt);//VIBRAR y parpadear - 
				}
				canTts.speak(toSpeak1);
				console.log('______________ {anuncio 1} _____________');	
				toSpeak1.onend = function(event) 
				{	console.log('>>> El anuncio 1 termino');
					if(g00VARS[5][2]&&(g00VARS[27][2]!=1))//si i1 y idioma es distinto del ingles..
					{	if(g00VARS[12][2])//Si tiene permiso continua con el anuncio dos (inter) y termina
						{	g00VARS[47][2] = 2;//Termino de decir el anuncio 1
							//f0043();
							console.log(' rrr |> Flag  -> f0027');
							f0027(textInt);//DECIR el anuncio dos de la TAPA
						}
						else//Si no tiene permiso habilita el permiso del anuncio uno para la próxima vez que pase por aquí
						{	g00VARS[12][2] = true;
							console.log('* * * (anuncio 2 fue omitido) * * * permiso = '+g00VARS[12][2]+ ' * * * * *');
						}
					}
				}
			}
		}

f0027=(textInt)=>//L Enunc2() DECIR el anuncio dos de la TAPA
		{	lOU(27);//lOL
			console.log('mmm');
			hh82(1);//AJUSTAR velocidad por defecto
			iV1i.style.backgroundColor = 'yellow';
			let toSpeak2 = new SpeechSynthesisUtterance();//es el nombre del 'enunciado' que se van a 'decir'
			toSpeak2.text = textInt;
			toSpeak2.rate = speed;//velocidad 0 - 3.6
			toSpeak2.volume = 1;//g00VARS[45][2];
		 //:toSpeak2.volume = g00VARS[45][2];
			toSpeak2.pitch = g00VARS[46][2];
			toSpeak2.lang = 'en-US';//VALOR FIJO 'en-US' / 'en' 	
			var selectedVoiceName2 = 'Samantha';//VALOR FIJO 'Samantha' 'Victoria' 'Google US English'
			voices.forEach(function(voice)
			{	if(voice.name === selectedVoiceName2)
				{	toSpeak2.voice = voice;
					iV1I.style.backgroundColor = 'lightgreen';
				}
			});
			if(g00VARS[47][2] == 2)
			{	//canTts.speak(toSpeak2);
				//g00VARS[47][2] = 3;//Inicia a dar el anuncio 2		
				// - - navigator.vibrate(0);//OJO VER ***
				canTts.speak(toSpeak2);//0.4(5) 80, 120, 80, 360, 80, 120, 400, 360, 80, 360, 80, 120, 80, 120, 400, 120, 80, 360, 80, 360, 80, 120, 80, 120, 80, 120
				//f0042();
				g00VARS[47][2] = 3;//Inicia a dar el anuncio 2 TAPA (INGLES)
				//Nota estas 4 lineas se comentan para que no produzca interferencia con la vibración del aviso local, resolver despues:
				//if((g00VARS[11][2]==0)||(g00VARS[11][2]==2))
				//{		console.log('>>> vibrando <<<');
				//		navigator.vibrate(g00HTML[24][2]);// *** NOTA- VIBRACION Internacional falta UNIRLA CON LA VIBRACION LOCAL g00HTML[24][2]
				//}
			}
			console.log('______________ {anuncio 2} _____________');	
			toSpeak2.onend = function()
			{	if(g00VARS[12][2])
				{	if(g00VARS[47][2] == 3)//Si tiene permiso y recien habia iniciado el anuncio 2
					{	g00VARS[47][2] = 4;
						console.log('* * * termino de dar el anuncio internacional * * *');
					}
				}
				else
				{	g00VARS[12][2] = true;
				}
			}
		}

f0028=(def)=>//ACTUALIZAR el tamaño/altura del texto:: standar o por defecto(def) / configuración del usuario
		{	lOL(28);
			let aux;//variable auxiliar
			if(def)
			{	if (g00VARS[33][3] > g00VARS[33][2])//si el valor por defecto es mayor que el ajuste del usuario
				{	aux = g00VARS[33][3];//tomar el valor por defecto
				}
				else
				{	aux = g00VARS[33][2];//dejar el valor del usuario
				}
			}
			else
			{	aux = g00VARS[33][2];//valor ajustado por el usuario
			}
			let aa;
			switch (aux)//ajusta el tamaño del texto
			{	case 1:
					aa = 12;//15px 1 + 1
				break;
				case 2:
					aa = 14;//19.5px 4 + 2  14
				break;
				case 3:
					aa = 20;//28.5px 9 + 3 23
				break;
				case 4:
					aa = 32;//42 16 + 4  39
				break;
				case 5:
					aa = 52;//60 25 + 5  64
				break;
				case 6:
					aa = 82;//82.5px 36 + 6  90
				break;
				case 7:
					aa = 124;//109.5px 49   139
				break;
			}
			iBody.style.setProperty('--a',aa+'px');//109.5px 49   139
		}

f0029=(val)=>//ORGANIZAR 1 pulso limpio de onfocus, ACTUALIZAR variable del foco <= La casilla (val) de la RUTA acaba de recibir el foco
		{	lOK(29);
			if(val || (val == 0))
			{	gFoco = val;//actualiza la posicion del foco
				
				//Prueba de f0143..
				//f0143();//ENCONTRAR todos los elementos cBrai
			}
			if(!focBan)
			{	focBan = 1;//ACTUAR ONFOCUS
				focCon = 1;//Primer serie de onFocus
				f0088();//G ESPERAR un segundo y verificar que no exista un nuevo evento onFOCUS para tomar ACCIONES
			}
			else
			{	focCon += 1;//Nuevo evento onfocus detectado PERO SIN ACTUAR ONFOCUS
			}
		}

f0030=()=>//ACTUALIZAR variables locales e internacionales del FOCO para tener listo el sonido multimedia (vMul) o de la Tapa Informativa [BOTON 9], trabaja de la mano de f0012() y f0016()//o0016() - DEBE ACTUALIZARSE CADA VEZ QUE EL USUARIO CAMBIE DE BOTON/HOJA DENTRO DE UNA RUTA
		{	lOC(30);
			let v1 = g00VARS[27][2];//idioma
			let v2 = visOK[gFoco];//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11]
			//LOCAL..
			if(gFoco == 0)//ACTUALIZAR LA VARIABLE vFocoL (texto/audio de la casilla/hoja, local)
			{	vFocoL = mIkTapaI[10][v1];//"arriba"
				//vFocoL = kTapaI[v1][10];//"arriba"
				vFocoLz = vFocoL;//"arriba"
			}
			if((gFoco > 0)&&(gFoco < (visOK.length - 1)))
			{	switch (gRuta)
				{	case 1:
						{	vFocoL = mIr001A[v2][v1];
							//vFocoL = r001A[v1][v2];
							vFocoLz = mIr001Z[v2][v1];
							//vFocoLz = r001Z[v1][v2];
						}
					break;
					case 2:		
						{	vFocoL = mIr002A[v2][v1];
							//vFocoL = r002A[v1][v2];
							vFocoLz = mIr002Z[v2][v1];
							//vFocoLz = r002Z[v1][v2];
						}
					break;
					case 3:
						{	vFocoL = '';
							if(( 0 < mIr003B[v2][3])&&(1 < mIr003B[v2][2].length))//Si no es la primer casilla(0) y la longitud es mayor a 1 
							//if(( 0 < r003B[3][v2])&&(1 < r003B[2][v2].length))//Si no es la primer casilla(0) y la longitud es mayor a 1 
							{	vFocoL += (mIr003B[v2][3] + 1) + '. ';//r003B[3][v2] + ', ';
								//vFocoL += (r003B[3][v2] + 1) + '. ';//r003B[3][v2] + ', ';
							}
							vFocoL += mIr003A[v2][v1][mIr003B[v2][3]];
							//vFocoL += r003A[v1][v2][r003B[3][v2]];
							vFocoLz = mIr003Z[v2][v1][mIr003B[v2][3]];
							//vFocoLz = r003Z[v1][v2][r003B[3][v2]];
							if(mIr003B[v2][3] < mIr003B[v2][2].length)	
							//if(r003B[3][v2] < r003B[2][v2].length)	
							{	if(1 < mIr003B[v2][2].length)//si la lonjitud es mayor que 1
								//if(1 < r003B[2][v2].length)//si la lonjitud es mayor que 1
								{	if(mIr003B[v2][3] < (mIr003B[v2][2].length - 1))
									//if(r003B[3][v2] < (r003B[2][v2].length - 1))
									{	vFocoL += mIkTapaI[21][v1];//continuar
										//vFocoL += kTapaI[v1][21];//continuar
									}
									if(mIr003B[v2][3] == (mIr003B[v2][2].length - 1))
									//if(r003B[3][v2] == (r003B[2][v2].length - 1))
									{	vFocoL += mIkTapaI[4][v1];//Fin, reiniciar
										//vFocoL += kTapaI[v1][4];//Fin, reiniciar
									}
								}
							}
						}
					break;
					case 4:
						{	vFocoL = mIr004A[v2][v1];
							vFocoLz = mIr004Z[v2][v1];
							//vFocoL = r004A[v1][v2];
							//vFocoLz = r004Z[v1][v2];
						}							
					break;
					case 5:		
/*						
						{	vFocoL = r005A[v1][v2];
							vFocoLz = r005Z[v1][v2];
						}*/
					break;
					case 6:		
/*
						{	vFocoL = r006A[v1][v2];
							vFocoLz = r006Z[v1][v2];
						}*/
					break;
					case 7:/*
						if(gFoco == 1)//Si el foco es 1
						{	vFocoL = '';
							if(( 0 < r007B[3][v2])&&(1 < r007B[2][v2].length))//Si no es la primer casilla(0) y la longitud es mayor a 1 
							{	vFocoL += (r007B[3][v2] + 1) + '. ';//r007B[3][v2] + ', ';
							}
							vFocoL += r007A[v1][v2][r007B[3][v2]];
							vFocoLz = r007Z[v1][v2][r007B[3][v2]];
							if(r007B[3][v2] < r007B[2][v2].length)	
							{	if(1 < r007B[2][v2].length)//si la lonjitud es mayor que 1
								{	if(r007B[3][v2] < (r007B[2][v2].length - 1))
									{	vFocoL += kTapaI[v1][21];//continuar
									}
									if(r007B[3][v2] == (r007B[2][v2].length - 1))
									{	vFocoL += kTapaI[v1][4];//Fin, reiniciar
									}
								}
							}
						}
						else//Si el foco no es la primer casilla
						{	vFocoL = r007A[v1][v2];
							vFocoLz = r007Z[v1][v2];
						}*/
					break;
					case 8:
						{	vFocoL = '';
							if(( 0 < mIr008B[v2][3])&&(1 < mIr008B[v2][2].length))//Si no es la primer casilla(0) y la longitud es mayor a 1 
							//if(( 0 < r008B[3][v2])&&(1 < r008B[2][v2].length))//Si no es la primer casilla(0) y la longitud es mayor a 1 
							{	vFocoL += (mIr008B[v2][3] + 1) + '. ';//r008B[3][v2] + ', ';
								//vFocoL += (r008B[3][v2] + 1) + '. ';//r008B[3][v2] + ', ';
							}
							vFocoL += mIr008A[v2][v1][mIr008B[v2][3]];
							vFocoLz = mIr008Z[v2][v1][mIr008B[v2][3]];
							//vFocoL += r008A[v1][v2][r008B[3][v2]];
							//vFocoLz = r008Z[v1][v2][r008B[3][v2]];
							if(mIr008B[v2][3] < mIr008B[v2][2].length)	
							//if(r008B[3][v2] < r008B[2][v2].length)	
							{	if(1 < mIr008B[v2][2].length)//si la lonjitud es mayor que 1
								//if(1 < r008B[2][v2].length)//si la lonjitud es mayor que 1
								{	if(mIr008B[v2][3] < (mIr008B[v2][2].length - 1))
									//if(r008B[3][v2] < (r008B[2][v2].length - 1))
									{	vFocoL += mIkTapaI[21][v1];//continuar
										//vFocoL += kTapaI[v1][21];//continuar
									}
									if(mIr008B[v2][3] == (mIr008B[v2][2].length - 1))
									//if(r008B[3][v2] == (r008B[2][v2].length - 1))
									{	vFocoL += mIkTapaI[4][v1];//Fin, reiniciar
										//vFocoL += kTapaI[v1][4];//Fin, reiniciar
									}
								}
							}
						}
					break;
				}
			}
			if( gFoco == (visOK.length - 1))
			{	vFocoL = mIkTapaI[11][v1];//"abajo"
				//vFocoL = kTapaI[v1][11];//"abajo"
				vFocoLz = vFocoL;//"abajo"
			}
			//2do idioma: INGLES
			if (v1 > 1)//ACTUALIZAR LA VARIABLE vFocoT (Texto/Audio de la Tapa) Y SI i1 ESTA ACTIVO ACTUALIZA vFocoI
			{	vFocoI = '';
				vFocoT = '';//String en ingles para la Tapa? 'small picture, access'
				if(gFoco == 0)
				{	vFocoT = mIkTapaI[10][1];
					//vFocoT = kTapaI[1][10];
					vFocoTz = vFocoT;
					if(g00VARS[5][2])//si i1:
					{	vFocoI = mIkTapaI[10][1];
						//vFocoI = kTapaI[1][10];
						vFocoIz = vFocoI;
					}
				}
				if((gFoco > 0)&&(gFoco < (visOK.length - 1)))
				{	switch (gRuta)
					{	case 1:
							{	vFocoT = mIr001A[v2][1];
								//vFocoT = r001A[1][v2];
								vFocoTz = mIr001Z[v2][1];
								//vFocoTz = r001Z[1][v2];
							}
							if(g00VARS[5][2])//Si i1
							{
								{	vFocoI = mIr001A[v2][1];//v2 ojo si la casilla no es visible seria un error
									//vFocoI = r001A[1][v2];//v2 ojo si la casilla no es visible seria un error					
									vFocoIz = mIr001Z[v2][1];//v2 ojo si la casilla no es visible seria un error
									//vFocoIz = r001Z[1][v2];//v2 ojo si la casilla no es visible seria un error
								}
							}
						break;
						case 2:
							vFocoT = mIr002A[v2][1];
							//vFocoT = r002A[1][v2];
							vFocoTz = mIr002Z[v2][1];
							//vFocoTz = r002Z[1][v2];
							if(g00VARS[5][2])//Si i1
							{	vFocoI = mIr002A[v2][1];
								//vFocoI = r002A[1][v2];
								vFocoIz = mIr002Z[v2][1];
								//vFocoIz = r002Z[1][v2];
							}
						break;
						case 3:
							{	vFocoT = '';
								if((0 < mIr003B[v2][3])&&(1 < mIr003B[v2][2].length))//Si no es la primer casilla(0) y la longitud es mayor a 1 
								//if((0 < r003B[3][v2])&&(1 < r003B[2][v2].length))//Si no es la primer casilla(0) y la longitud es mayor a 1 
								{	vFocoT += (mIr003B[v2][3] + 1) + '. ';//mIr003B[v2][3] + ', ';
									//vFocoT += (r003B[3][v2] + 1) + '. ';//r003B[3][v2] + ', ';
								}
								vFocoT += mIr003A[v2][1][mIr003B[v2][3]];
								//vFocoT += r003A[1][v2][r003B[3][v2]];
								vFocoTz = mIr003Z[v2][1][mIr003B[v2][3]];
								//vFocoTz = r003Z[1][v2][r003B[3][v2]];
								if(mIr003B[v2][3] < mIr003B[v2][2].length)	
								//if(r003B[3][v2] < r003B[2][v2].length)	
								{	if(1 < mIr003B[v2][2].length)//si la lonjitud es mayor que 1
									//if(1 < r003B[2][v2].length)//si la lonjitud es mayor que 1
									{	if(mIr003B[v2][3] < (mIr003B[v2][2].length - 1))
										//if(r003B[3][v2] < (r003B[2][v2].length - 1))
										{	vFocoT += mIkTapaI[21][1];//continue
											//vFocoT += kTapaI[1][21];//continue
										}
										if(mIr003B[v2][3] == (mIr003B[v2][2].length - 1))
										//if(r003B[3][v2] == (r003B[2][v2].length - 1))
										{	vFocoT += mIkTapaI[4][1];//END, restart
											//vFocoT += kTapaI[1][4];//END, restart
										}
									}
								}
							}
							if(g00VARS[5][2])//Si i1
							{	vFocoI = '';
								if((0 < mIr003B[v2][3])&&(1 < mIr003B[v2][2].length))//Si no es la primer casilla(0) y la longitud es mayor a 1 
								//if((0 < r003B[3][v2])&&(1 < r003B[2][v2].length))//Si no es la primer casilla(0) y la longitud es mayor a 1 
								{	vFocoI += (mIr003B[v2][3] + 1) + '. ';//r003B[3][v2] + ', ';
									//vFocoI += (r003B[3][v2] + 1) + '. ';//r003B[3][v2] + ', ';
								}
								vFocoI += mIr003A[v2][1][mIr003B[v2][3]];
								//vFocoI += r003A[1][v2][r003B[3][v2]];
								vFocoIz = mIr003Z[v2][1][mIr003B[v2][3]];
								//vFocoIz = r003Z[1][v2][r003B[3][v2]];
								if(mIr003B[v2][3] < mIr003B[v2][2].length)	
								//if(r003B[3][v2] < r003B[2][v2].length)	
								{	if(1 < mIr003B[v2][2].length)//si la lonjitud es mayor que 1
									//if(1 < r003B[2][v2].length)//si la lonjitud es mayor que 1
									{	if(mIr003B[v2][3] < (mIr003B[v2][2].length - 1))
										//if(r003B[3][v2] < (r003B[2][v2].length - 1))
										{	vFocoI += mIkTapaI[21][1];//continue
											//vFocoI += kTapaI[1][21];//continue
										}
										if(mIr003B[v2][3] == (mIr003B[v2][2].length - 1))
										//if(r003B[3][v2] == (r003B[2][v2].length - 1))
										{	vFocoI += mIkTapaI[4][1];//END, restart
											//vFocoI += kTapaI[1][4];//END, restart
										}
									}
								}
							}
						break;
						case 4:
							{	vFocoT = mIr004A[v2][1];
								vFocoTz = mIr004Z[v2][1];
								//vFocoT = r004A[1][v2];
								//vFocoTz = r004Z[1][v2];
							}
							if(g00VARS[5][2])//Si i1
							{	{	vFocoI = mIr004A[v2][1];//v2 ojo si la casilla no es visible seria un error
									vFocoIz = mIr004Z[v2][1];//v2 ojo si la casilla no es visible seria un error
									//vFocoI = r004A[1][v2];//v2 ojo si la casilla no es visible seria un error
									//vFocoIz = r004Z[1][v2];//v2 ojo si la casilla no es visible seria un error
								}
							}
						break;
						case 5:
/*							{	vFocoT = r005A[1][v2];
								vFocoTz = r005Z[1][v2];
							}
							if(g00VARS[5][2])//Si i1
							{
								{	vFocoI = r005A[1][v2];//v2 ojo si la casilla no es visible seria un error
									vFocoIz = r005Z[1][v2];//v2 ojo si la casilla no es visible seria un error
								}
							}*/
						break;
						case 6:
/*							{	vFocoT = r006A[1][v2];
								vFocoTz = r006Z[1][v2];
							}
							if(g00VARS[5][2])//Si i1
							{
								{	vFocoI = r006A[1][v2];//v2 ojo si la casilla no es visible seria un error
									vFocoIz = r006Z[1][v2];//v2 ojo si la casilla no es visible seria un error
								}
							}*/
						break;
						case 7:/*
							if(gFoco == 1)//Si el foco es 1
							{	vFocoT = '';
								if((0 < r007B[3][v2])&&(1 < r007B[2][v2].length))//Si no es la primer casilla(0) y la longitud es mayor a 1 
								{	vFocoT += (r007B[3][v2] + 1) + '. '; //r007B[3][v2] + ', ';
								}
								vFocoT += r007A[1][v2][r007B[3][v2]];
								vFocoTz = r007Z[1][v2][r007B[3][v2]];
								if(r007B[3][v2] < r007B[2][v2].length)	
								{	if(1 < r007B[2][v2].length)//si la lonjitud es mayor que 1
									{	if(r007B[3][v2] < (r007B[2][v2].length - 1))
										{	vFocoT += kTapaI[1][21];//continue
										}
										if(r007B[3][v2] == (r007B[2][v2].length - 1))
										{	vFocoT += kTapaI[1][4];//END, restart
										}
									}
								}
								if(g00VARS[5][2])//Si i1
								{	vFocoI = '';
									if((0 < r007B[3][v2])&&(1 < r007B[2][v2].length))//Si no es la primer casilla(0) y la longitud es mayor a 1 
									{	vFocoI += (r007B[3][v2] + 1) + '. '; //r007B[3][v2] + ', ';
									}
									vFocoI += r007A[1][v2][r007B[3][v2]];
									vFocoIz = r007Z[1][v2][r007B[3][v2]];
									if(r007B[3][v2] < r007B[2][v2].length)	
									{	if(1 < r007B[2][v2].length)//si la lonjitud es mayor que 1
										{	if(r007B[3][v2] < (r007B[2][v2].length - 1))
											{	vFocoI += kTapaI[1][21];//continue
											}
											if(r007B[3][v2] == (r007B[2][v2].length - 1))
											{	vFocoI += kTapaI[1][4];//END, restart
											}
										}
									}
								}
							}
							else//Si esl foco no es la casilla 1
							{	{	vFocoT = r007A[1][v2];
									vFocoTz = r007Z[1][v2];
								}
								if(g00VARS[5][2])//Si i1
								{	{	vFocoI = r007A[1][v2];//v2 ojo si la casilla no es visible seria un error
										vFocoIz = r007Z[1][v2];//v2 ojo si la casilla no es visible seria un error
									}
								}
							}*/
						break;
						case 8:
							vFocoT = '';
							if((0 < mIr008B[v2][3])&&(1 < mIr008B[v2][2].length))//Si no es la primer casilla(0) y la longitud es mayor a 1 
							//if((0 < r008B[3][v2])&&(1 < r008B[2][v2].length))//Si no es la primer casilla(0) y la longitud es mayor a 1 
							{	vFocoT += (mIr008B[v2][3] + 1) + '. '; //r008B[3][v2] + ', ';
								//vFocoT += (r008B[3][v2] + 1) + '. '; //r008B[3][v2] + ', ';
							}
							vFocoT += mIr008A[v2][1][mIr008B[v2][3]];
							vFocoTz = mIr008Z[v2][1][mIr008B[v2][3]];
							//vFocoT += r008A[1][v2][r008B[3][v2]];
							//vFocoTz = r008Z[1][v2][r008B[3][v2]];
							if(mIr008B[v2][3] < mIr008B[v2][2].length)	
							//if(r008B[3][v2] < r008B[2][v2].length)	
							{	if(1 < mIr008B[v2][2].length)//si la lonjitud es mayor que 1
								//if(1 < r008B[2][v2].length)//si la lonjitud es mayor que 1
								{	if(mIr008B[v2][3] < (mIr008B[v2][2].length - 1))
									//if(r008B[3][v2] < (r008B[2][v2].length - 1))
									{	vFocoT += mIkTapaI[21][1];//continue
										//vFocoT += kTapaI[1][21];//continue
									}
									if(mIr008B[v2][3] == (mIr008B[v2][2].length - 1))
									//if(r008B[3][v2] == (r008B[2][v2].length - 1))
									{	vFocoT += mIkTapaI[4][1];//END, restart
										//vFocoT += kTapaI[1][4];//END, restart
									}
								}
							}
							if(g00VARS[5][2])//Si i1
							{	vFocoI = '';
								if((0 < mIr008B[v2][3])&&(1 < mIr008B[v2][2].length))//Si no es la primer casilla(0) y la longitud es mayor a 1 
								//if((0 < r008B[3][v2])&&(1 < r008B[2][v2].length))//Si no es la primer casilla(0) y la longitud es mayor a 1 
								{	vFocoI += (mIr008B[v2][3] + 1) + '. '; //r008B[3][v2] + ', ';
									//vFocoI += (r008B[3][v2] + 1) + '. '; //r008B[3][v2] + ', ';
								}
								vFocoI += mIr008A[v2][1][mIr008B[v2][3]];
								vFocoIz = mIr008Z[v2][1][mIr008B[v2][3]];
								//vFocoI += r008A[1][v2][r008B[3][v2]];
								//vFocoIz = r008Z[1][v2][r008B[3][v2]];
								if(mIr008B[v2][3] < mIr008B[v2][2].length)	
								//if(r008B[3][v2] < r008B[2][v2].length)	
								{	if(1 < mIr008B[v2][2].length)//si la lonjitud es mayor que 1
									//if(1 < r008B[2][v2].length)//si la lonjitud es mayor que 1
									{	if(mIr008B[v2][3] < (mIr008B[v2][2].length - 1))
										//if(r008B[3][v2] < (r008B[2][v2].length - 1))
										{	vFocoI += mIkTapaI[21][1];//continue
											//vFocoI += kTapaI[1][21];//continue
										}
										if(mIr008B[v2][3] == (mIr008B[v2][2].length - 1))
										//if(r008B[3][v2] == (r008B[2][v2].length - 1))
										{	vFocoI += mIkTapaI[4][1];//END, restart
											//vFocoI += kTapaI[1][4];//END, restart
										}
									}
								}
							}
						break;
					}
				}
				if(gFoco == (visOK.length - 1))
				{	vFocoT = mIkTapaI[11][1];
					//vFocoT = kTapaI[1][11];
					vFocoTz = vFocoT;
					if(g00VARS[5][2])//si i1:
					{	vFocoI = mIkTapaI[11][1];
						//vFocoI = kTapaI[1][11];
						vFocoIz = vFocoI;
					}
				}
			}
		}

f0031=(scr)=>//Pintar el marco (scr)POSICIONAR al usuario sobre el foco(cursor) sobre la casilla/hoja actual (gFoco) dentro de una RUTA (forms[0])//o0016B()
		{	lOL(31);
			f0030();//Si el foco cambio, C ACTUALIZAR variables locales e internacionales del FOCO vFocoL, vFocoLe(multimedia), vFocoI, vFocoIe(multimedia) y vFocoT dependiendo de RUTA y posición actual del FOCO, trabaja de la mano de f0012() y f0016()
			document.forms[0].elements[gFoco].focus();
			if(scr)//posiciona el foco donde este el cursor actual
			{	document.forms[0].elements[gFoco].scrollIntoView(centro);	
			}
			//Detectar todos los botones:
		 	let cBut = document.getElementsByClassName("cButton");
		 	for (var i = 0; i < cBut.length; i++)
		 	{	cBut[i].classList.remove('cBoRd');//quitar marcos sobre botones
		 	}
		 	cBut[gFoco].classList.add('cBoRd');//Adicionar marco sobre el foco
			if((gFoco == 0)&&(yKEYS[2][1]))
			{	yKEYS[2][1] = 0;
				yBot4.classList.add('cStop');
				yBB4.classList.add('cOff');
				fBot4.classList.add('cStop');
				fBB4.classList.add('cOff');
			}
			if((gFoco!=0)&&(!yKEYS[2][1]))
			{	yKEYS[2][1] = 1;
				yBot4.classList.remove('cStop');
				yBB4.classList.remove('cOff');
				fBot4.classList.remove('cStop');
				fBB4.classList.remove('cOff');
			}
			if((gFoco==(visOK.length - 1))&&(yKEYS[2][2]))
			{	yKEYS[2][2] = 0;
				yBot6.classList.add('cStop');
				yBB6.classList.add('cOff');
				fBot6.classList.add('cStop');
				fBB6.classList.add('cOff');
			}
			if((gFoco!=(visOK.length - 1))&&(!yKEYS[2][2]))
			{	yKEYS[2][2] = 1;
				yBot6.classList.remove('cStop');
				yBB6.classList.remove('cOff');
				fBot6.classList.remove('cStop');
				fBB6.classList.remove('cOff');
				
			}

			//Prueba de f0143..
			f0143();//ENCONTRAR todos los elementos cBrai
		}


f0032=()=>//I PREPARAR la lectura de la casilla, o Tapa Informativa donde esta el foco (el usuario)
		{	lOI(32);		
			if(g00VARS[55][2])//Si ya ocurrio el primer clic
			{ 	let v1 = '';
				if (vFocoI)//si vFocoI NO ES VACIO ...
				{	v1 = 'i1, '+ vFocoI;
				}


// ... ... ... Aquí Voy!! ... ... ...
				f0033(vFocoL,v1);//Da el anuncio uno;
			}
		}

f0033=(textLoc,textInt)=>//25Decir() PREPARAR los anuncios local e internacional de la RUTA
		{	lOI(33);
			iV3e.style.backgroundColor = 'white';	



// ... ... ... Aquí Voy!! ... ... ...
			g00VARS[56][2] += 1;//tarea1
			g00VARS[56][4] += 1.5;//tarea2
			g00VARS[56][5] += 1;//tarea 3
			g00VARS[56][8] += 1;//tarea1
			
			//OJO quitar esta linea....?????
			f0111();//CANCELAR salida de audio y vibraciones

			//console.log('___________I N I C I A N D O___________');
			f0034(textLoc,textInt);//LEER los anuncios local e internacional de la RUTA
		}

f0034=(textLoc,textInt)=>//26Enunc1() DAR el anuncio local de la RUTA
		{	lOG(34);
			hh82();//AJUSTAR velocidad DEL USUARIO
			//iV3e.style.backgroundColor = 'white';
		    iVol.style.backgroundColor = 'purple';
			if(textLoc !== '')
			{	//iV3d.style.backgroundColor = 'green';
				let toSpeak1 = new SpeechSynthesisUtterance();
			//++iVol.style.backgroundColor = 'yellow';
				toSpeak1.text = textLoc;//(variable con el texto que va a leer)//Prueba
				toSpeak1.rate = speed;//velocidad 0 - 3.6	
				toSpeak1.volume = 1;//g00VARS[45][2];
				toSpeak1.pitch = g00VARS[46][2];
				//if(g00VARS[5][2])//si i1..
				{	
					var selectedVoiceName1 = '';
					switch (g00VARS[27][2])//consigue el nombre de la voz y el lang dependiendo del idioma que tenga configurado el usuario
					{	case 1://ingles
							selectedVoiceName1 = 'Samantha';//tVoces[51][2];
							toSpeak1.lang = 'en-US';//tLanPAIS[8][1];
						break;
						case 2://Español colombia?
							selectedVoiceName1 = tVoces[1][2];//'Paulina' para colombia
							toSpeak1.lang = tLanPAIS[15][1];//'es-MX' para colombia
						break;
						case 3://Frances
							selectedVoiceName1 = tVoces[5][2];//,'fr-CA'	,'Amelie'],
							toSpeak1.lang = tLanPAIS[18][1];//,'fr'		,'fr-CA'	],
						break;
						case 4://korean
							selectedVoiceName1 = tVoces[45][2];//,'ko-KR'	,'Yuna'],
							toSpeak1.lang = tLanPAIS[26][1];//,'ko'		,'kr-KR'	],
						break;
						case 5:
						break;
						case 6:
						break;
						case 7:
						break;
					}
					/*switch (g00VARS[29][2])//consigue el nombre de la voz y el lang dependiendo del pais que tenga configurado el usuario
					{	case 1:
						break;
						case 2:
							selectedVoiceName1 = tVoces[t2Propi[4][g00VARS[29][3]]][2];
							toSpeak1.lang = tLanPAIS[t2Propi[5][g00VARS[29][3]]][1];
						break;
						case 3:
						break;
						case 4:
						break;
						case 5:
						break;
						case 6:
						break;
						case 7:
							selectedVoiceName1 = tVoces[t7Propi[4][g00VARS[29][3]]][2];//'Paulina' para colombia
							toSpeak1.lang = tLanPAIS[t7Propi[5][g00VARS[29][3]]][1];//'es-MX' para colombia
						break;
					}
					*/
					voices.forEach(function(voice)
					{	if(voice.name === selectedVoiceName1)
						{	toSpeak1.voice = voice;
							iVoL.style.backgroundColor = 'lightgreen';
						}
						else
						{	iVoL.style.backgroundColor = 'red';
						}
					});
				}
				f0045();//L DETENER vibraciones parpadeos e intervalos pendientes
				//console.log('<<<<<<< D E T E N I D O  1 ____________________D E T E N I D O____________ ____________________D E T E N I D O____________>>>>>>>');
				//cierta casilla de una ruta recibio el foco -> lee la casilla
				if(g00VARS[59][2])//Si sonido esta activado entonces
				{	canTts.speak(toSpeak1);//0.4(5) 80, 120, 80, 360, 80, 120, 400, 360, 80, 360, 80, 120, 80, 120, 400, 120, 80, 360, 80, 360, 80, 120, 80, 120, 80, 120
				}
				//f0042();
				g00VARS[57][2] = 1;//Inicia a dar el anuncio 1 (local) RUTA
				//cierta casilla de una ruta recibio el foco -> lee la casilla
				if((g00VARS[11][2]==0)||(g00VARS[11][2]==2))//LÍNEA(S)DeLectura:0TodasLasLíneas,2Morse
				{	g00VARS[28][2] = 0;
					if(conteo[1])//si no esta en presentación AV
					{	f0044(textLoc,textInt,1);//VIBRAR y parpadear NOTA- VIBRACION LOCAL falta UNIRLA CON LA VIBRACION INTERNACIONAL
					}
				}
				//console.log('______________ {anuncio 1} _____________');	
				toSpeak1.onend = function(event) 
				{	g00VARS[56][2] += 1;//tarea1
					g00VARS[56][4] += 1.5;//tarea2
					g00VARS[56][5] += 1;//tarea3
					g00VARS[56][7] += 1;//tarea1
					console.log('>>> El anuncio 1 termino');
					if((g00VARS[27][2]!=1)&&(g00VARS[5][2])&&(g00VARS[56][2] == g00VARS[56][3])&&(g00VARS[56][4] == (1.5*(g00VARS[56][5]))))//Si no es el idioma ingles, esta i1 y tiene permiso continua con el anuncio uno (inter) y termina
					//if((g00VARS[56][2] == g00VARS[56][3])&&(g00VARS[56][4] == (1.5*(g00VARS[56][5]))))//Si tiene permiso continua con el anuncio uno (inter) y termina
					{	console.log('* * * PERMISO OK * * * * *');
						//g00VARS[57][2] = 1;//Termino de dar el anuncio 1
						f0036();//REINICIAR parte de las variables de control del SPEAK
						console.log(' rrr |> Flag  -> f0035');
						f0035(textInt);//DAR el anuncio internacional de la RUTA
					}
					else//Si no tiene permiso habilita el permiso del anuncio uno para la próxima vez que pase por aquí
					{	g00VARS[56][2] = 0;
						g00VARS[56][3] = 1;
						g00VARS[56][6] += 1;
						g00VARS[56][10] = 1;
						//g00VARS[57][2] = 0;
						console.log('^^^^^^^^^^^ anuncio 2 fue omitido ^^^^^^^^^^^^^^^');
					}
					f0037();//REINICIAR las variables de control del speak SI HAY ERROR de desbordamiento
				}
			}
			else
			{	//iV3d.style.backgroundColor = 'red';
			}
		}

f0035=(textInt)=>//27Enunc2() DAR el anuncio internacional de la RUTA
		{	lOU(35);
			hh82();//AJUSTAR velocidad DEL USUARIO
			let toSpeak2 = new SpeechSynthesisUtterance();//es el nombre del 'enunciado' que se van a 'decir'
			iVoi.style.backgroundColor = 'yellow';
			toSpeak2.text = textInt;
			toSpeak2.rate = speed;//velocidad 0 - 3.6
			toSpeak2.volume = 1;//g00VARS[45][2];
		 //:toSpeak2.volume = g00VARS[45][2];
			toSpeak2.pitch = g00VARS[46][2];
			toSpeak2.lang = 'en-US';//VALOR FIJO 'en-US' / 'en' 	
			var selectedVoiceName2 = 'Samantha';//VALOR FIJO 'Samantha' 'Victoria' 'Google US English'
			voices.forEach(function(voice)
			{	if(voice.name === selectedVoiceName2)
				{	toSpeak2.voice = voice;
					iVoI.style.backgroundColor = 'lightgreen';
				}
			});
			//canTts.speak(toSpeak2);
			//g00VARS[57][2] = 2;//Inicia a dar el anuncio 2 (ingles)
			//navigator.vibrate(0);//DETIENE O CANCELA CUALQUIER VIBRACION
			canTts.speak(toSpeak2);//0.4(5) 80, 120, 80, 360, 80, 120, 400, 360, 80, 360, 80, 120, 80, 120, 400, 120, 80, 360, 80, 360, 80, 120, 80, 120, 80, 120
			//f0042();
			g00VARS[57][2] = 3;//Inicia a dar el anuncio 2 RUTA (local)
			
			//nota estas 4 lineas se comentan para que no produzca interferencia con la vibración del aviso local, resolver despues
			////if((g00VARS[11][2]==0)||(g00VARS[11][2]==2))
			////{	console.log('>>> vibrando <<<');
			////	navigator.vibrate(g00HTML[24][2]);//NOTA- VIBRACION LOCAL falta UNIRLA CON LA VIBRACION INTERNACIONAL
			////}

			console.log('______________ {anuncio 2} _____________');	
			toSpeak2.onend = function()
			{	f0037();//REINICIAR las variables de control del speak SI HAY ERROR de desbordamiento
				if(g00VARS[56][2] == g00VARS[56][3])
				{		console.log('* * * termino de dar el anuncio internacional * * *');
				}
				//f0043();
						
				////g00VARS[57][2] = 0;//NO HAY ANUNCIOS
				console.log('* * * RESET DEL PERMISO * * *');
			}
		}

 
f0036=()=>//REINICIAR parte de las variables de control del SPEAK
		{	lOG(36);
			g00VARS[56][2] = 0;
			g00VARS[56][3] = 2;
			g00VARS[56][4] = 0;
			g00VARS[56][5] = 0;
			g00VARS[56][6] = 0;
		}

f0037=()=>//REINICIAR las variables de control del speak SI HAY ERROR de desbordamiento
		{	lOG(37);
			if(canTts.speaking)//Si esta dando un anuncio
			{	g00VARS[56][9] = 1;
			}
			else
			{	g00VARS[56][9] = 0;
			}
			//console.log('END2 x1='+g00VARS[56][2]+', x2='+g00VARS[56][3]+', e='+g00VARS[56][4]+', k='+g00VARS[56][5]+', r='+g00VARS[56][6]+', t='+g00VARS[56][7]+', i='+g00VARS[56][8]+', SPK='+g00VARS[56][9]+', Omit='+g00VARS[56][10]);
			if((!g00VARS[56][9])&&(g00VARS[56][10]))
			{	f0036();//REINICIAR parte de las variables de control del SPEAK
				g00VARS[56][7] = 0;//Reset de tareas
				g00VARS[56][8] = 0;//Reset de tareas
				g00VARS[56][9] = 0;//Reset de tareas
				g00VARS[56][10] = 0;//Reset de omitir
				console.log('^^^^^^^^^^^^^^^^RESET X ERROR^^^^^^^^^^^^^^^^^^^^');
			}
			//console.log('END2B x1='+g00VARS[56][2]+', x2='+g00VARS[56][3]+', e='+g00VARS[56][4]+', k='+g00VARS[56][5]+', r='+g00VARS[56][6]+', t='+g00VARS[56][7]+', i='+g00VARS[56][8]+', SPK='+g00VARS[56][9]+', Omit='+g00VARS[56][10]);
		}
/* 
f0038=()=>//REGRESAR a la ruta y foco principales junto con sus respectivos guiones
		{	lOU(38);
			gRuta = gMemR;//Regresa a la ruta ppal
			gFoco = gMemF;//Regresa al foco ppal
			console.log('?????');
			f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
		}
 
f0039=()=>//PRODUCIR y GUARDAR el HTML DE RUTA en señas, Braille Y Morse del guión global para cuando se llame
		{	lOU(39);
			//console.log('g00VARS[21][2]='+g00VARS[21][2]);
			



			f0021();//normaliza el guión global (g00VARS[21][2])
			f0080();//conseguir html de RUTA de señas INTERNACIONAL y guardarlo...
			s00EXIT[4] = g00HTML[14][2];//html inter
			g00HTML[33][2] = g00HTML[32][2];//html inter
			g00VARS[8] = g00HTML[26][2];// copia temporal de las señas en ingles //g00VARS[0];//
			g00VARS[7] = g00HTML[36][2];// copia temporal del número imagen/seña en ingles //g00VARS[0];//
			g00VARS[9] = g00HTML[31][2];// copia temporal de las glosas en ingles //g00VARS[2];//								
			f0007();//OUT g00HTML[19][2] braille conseguir  html braille INTERNACIONAL y guardarlo...
			g00HTML[29][2] = g00HTML[19][2];					
			// - f0009();
			f0010(1);//g00HTML[23][2](HTML) - conseguir html morse INTERNACIONAL y guardarlo...
			g00HTML[30][2] = g00HTML[23][2];
		}
 
//f0040=(v2,id,vi)=>//ADICIONAR a v2 código HTML de la RUTA (dependiendo del modo) del guión en Local y en Ingles
f0040=(v2,id)=>//ADICIONAR a v2 (html acumulado) código HTML de la RUTA (dependiendo del modo) del guión en Local y en Ingles
		{	lOU(40);
			

			f0021();//normaliza el guión global (g00VARS[21][2])
			hh47();//DESACTIVAR o MOSTRAR el botón de fila de señas
			if((g00VARS[11][2] == 0)||(g00VARS[11][2] == 4))//todos los modos o señas
			{	if((id > 1)&&(g00VARS[5][2]))//Si no es el idioma ingles y esta i1..
				{	
//					vl = 1;//limites en ingles
					///////v2 += '<div class="cCero">,</div><i>'+'i1, '+kTapaI[1][10]+'</i>';
					g00VARS[28][2] = 1;//Guion en idioma INTERNACIONAL
					//console.log('g00VARS[21][2]='+g00VARS[21][2]);
					g00VARS[21][2] = 'i1, '+kTapaI[1][10];//carga el guion global			
					f0039();//PRODUCIR y GUARDAR el HTML DE RUTA en señas, Braille, Morse del guión global en g00HTML[28-30][2]
					v2 += '<div class="cPic2">'+s00EXIT[4]+'</div>';
				}
				v2 += '<div class="cPic2 cRigh">'+g00HTML[14][2]+'</div></div><div class="cPadd4A cCent"><div>'+kTapa1[id][10]+'</div>';
				v2 += '<div class="cCero cTela">';
				////////v2 += '<div class="cCero cTela cELDA">';
				f0080();//cargar html DE RUTA de señas y agregarlo...
			//	f0084();//FINALIZAR ] serie de señales y prosas locales
				


				v2 += g00HTML[14][2]+'</div>';
				//v3 += g00HTML[32][2]+'</div>';////quitar?????
////////		if((id > 1)&&(g00VARS[5][2])&&(s00EXIT[4])&&(vi))//Si no es el idioma ingles, esta i1 y debe interpretarlo al ingles..
				if((id > 1)&&(g00VARS[5][2])&&(s00EXIT[4]))//Si no es el idioma ingles, esta i1 y debe interpretarlo al ingles..
				{	g00HTML[26][2] = g00VARS[8];// recupera lo que hay guardado en ingles //afecta g00VARS[0] 
					g00HTML[36][2] = g00VARS[7];// recupera lo que hay guardado en ingles //afecta g00VARS[0] 
					g00HTML[31][2] = g00VARS[9];// recupera lo que hay guardado en ingles //afecta g00VARS[2] 
				//	f0084();//FINALIZAR ] serie de señales y prosas internacionales
					


					v2 += '<hr class="cHRc"><div class="cCero cTela">'+s00EXIT[4]+'</div>';
					/////v2 += '<hr class="cHRc"><div class="cCero cTela cELDB">'+s00EXIT[4]+'</div>';
				}
				console.log('f0084 f40');
				f0084();//FINALIZAR ] serie de señales y prosas locales
				
			}
			v2 += '<div class=\'cGeneral\'>';
			if((g00VARS[11][2] == 0)||(g00VARS[11][2] == 3))// todos los modos o morse
			{	v2 += '<div>';
				f0007();//OUT g00HTML[19][2] braille cargar html braille y agregarlo...
				v2 += g00HTML[19][2]+'</div>';
///////			if((id > 1)&&(g00VARS[5][2])&&(g00HTML[29][2])&&(vi))//Si no es el idioma ingles, esta i1 y debe interpretarlo al ingles..
				if((id > 1)&&(g00VARS[5][2])&&(g00HTML[29][2]))//Si no es el idioma ingles, esta i1 y debe interpretarlo al ingles..
				{	v2 += '<hr class="cHR"><div>'+g00HTML[29][2]+'</div>';
				}
			}
			if((g00VARS[11][2] == 0)||(g00VARS[11][2] == 2))//todos los modos o braille
			{	v2 += '<div>';
				// - - f0009();
				f0010(1);//g00HTML[23][2](HTML) - cargar html MORSE y agregarlo...
				v2 += g00HTML[23][2];

				v2 += '</div>';
/////////		if((id > 1)&&(g00VARS[5][2])&&(g00HTML[30][2])&&(vi))//Si no es el idioma ingles, esta i1 y debe interpretarlo al ingles..
				if((id > 1)&&(g00VARS[5][2])&&(g00HTML[30][2]))//Si no es el idioma ingles, esta i1 y debe interpretarlo al ingles..
				{	v2 += '<hr class="cHR"><div>'+g00HTML[30][2]+'</div>';
				}
			}
			vHtml2 = v2;
		}
*/
		 
f0041=()=>//CONSEGUIR los milisegundos actuales
		{	//lOU(41);
			miMors = new Date().getTime();
  		}

		
//inicio funciones para vibrar en macos..
// Función para verificar si el navegador es iOS
function isIOS() {
	return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;//false y true en safari deskTPC,..  true y true supuestamenteen
}


f0042=()=>//HACER faro on y VIBRAR
		{	lOL(42);
			if(g00VARS[55][2])// && g00VARS[60][3])//Si ya ocurrio el primer clic y permite vibración
			{	//yHear.style.backgroundColor = 'var(--cblwh2)';//'var(--cblwh1)';
				yHear.classList.remove('cNoV');
				yHear.classList.add('cSiV');
				//if (canVibrate)//si puede vibrar: on Firefox, Chrome and Safari on some iOS devices the code will be broken at this line
				{	
					
					//código original..
					//window.navigator.vibrate([5000]);




					// Función modificada de chat gpt para vibrar el dispositivo..
					//function vibrar(milliseconds) {
						if (isIOS()) {
							
							
							iV6f.style.backgroundColor = 'red';//es mac os
							iV6e.style.backgroundColor = 'yellow';//dejar de vibrar en mac os
							console.log(' + + + 6e yellow 42');
							//console.log(' + + + 6f + yellow isIOS');
							// Vibrar en iOS (utilizando una animación CSS)
							
							
							//yHear.classList.add('vibrate-ios');
							//document.body.classList.add('vibrate-ios');
							setTimeout(function () {
								
								
								
								//yHear.classList.remove('vibrate-ios');
								//document.body.classList.remove('vibrate-ios');
								iV6e.style.backgroundColor = 'gray';//dejar de vibrar en mac os
								//console.log(' + + + 6e purple 42');
							}, 300);

							
						} else {
							iV6f.style.backgroundColor = 'green';//No es un mac os
							//console.log(' + + + 6f + green !isIOS');
							// Vibrar en otros dispositivos (utilizando navigator.vibrate si está disponible)
							if (navigator.vibrate) {
								navigator.vibrate([5000]);
							}
						}
						
						//window.navigator.vibrate([5000]);
				}
			}
		}
 		 
f0043=()=>//L HACER faro off y si puede vibrar PARAR cualquier vibración anterior - - - HACER faro off y PARAR vibración
		{	lOL(43);
			if(g00VARS[55][2])// && g00VARS[60][3])//Si ya ocurrio el primer clic y permite vibración
			{	//iFaro.style.color = 'white!important';//'var(--cblwh2)';	
				//yHear.style.backgroundColor = 'var(--cblwh1)';
				yHear.classList.remove('cSiV');
				yHear.classList.add('cNoV');
				if (canVibrate)//si puede vibrar:  on Firefox, Chrome and Safari on some iOS devices the code will be broken at this line
				{	//iV2f.style.backgroundColor = 'yellow';//
					//window.navigator.vibrate(0);//ver si hacer un try-catch aquí para quitar el error "Blocked call to navigator.vibrate because user hasn't tapped on the frame or any embedded frame yet"
				
				


					// Función modificada de chat gpt para vibrar el dispositivo..
					//function vibrar(milliseconds) {
						if (isIOS()) {

							//.style.backgroundColor = 'yellow';//es mac os
							// Vibrar en iOS (utilizando una animación CSS)
							//document.body.classList.add('vibrate-ios');
							iV6f.style.backgroundColor = 'red';//vibrar en mac os
							//setTimeout(function () {
								
							
							    yHear.classList.remove('vibrate-ios');
								//document.body.classList.remove('vibrate-ios');
								iV6e.style.backgroundColor = 'gray';//dejar de vibrar en mac os
								console.log(' + + + 6e gray 43');
							//}, 5000);
						} else {
							iV6f.style.backgroundColor = 'green';//No es un mac os
							iV6e.style.backgroundColor = 'purple';//dejar de vibrar en mac os

							console.log(' + + + 6e purple 43');
							// Vibrar en otros dispositivos (utilizando navigator.vibrate si está disponible)
							if (navigator.vibrate) {
								navigator.vibrate([0]);
							}
						}
					//}
				
				
				

				
				
				}
			}
		}
		 
f0044=(text,texInt,ruta)=>//VIBRAR y parpadear 0 local, 1 inter
		{	lOG(44);
			//∫if(g00VARS[60][3])//SI puede vibrar..
			{	if((g00VARS[5][2])&&(texInt)&&(!ruta)&&(g00VARS[5][2]))//Si i1 y esta leyendo una tapa..
				{	text = text +' '+texInt;
				}
				if((g00VARS[5][2])&&(texInt)&&(ruta)&&(g00VARS[5][2]))//Si i1 y esta leyendo una ruta...
				{	text = text +' '+texInt;
				}
				g00VARS[21][2] = text;//CARGAR TEXTO ORIGINAL A SER INTREPRETADO A SEÑAS, MORSE Y BRAILLE LOCAL O INTER
				f0021();//normaliza el guión global (g00VARS[21][2])
				f0009();//ACTUALIZAR cada constante de tiempo morse según la constante de velocidad morse actual
				f0010();//CONVERTIR texto NORMALIZADO a morse  -> on: hacer los ·s y -s DEL HTML -> off: los tiempos DEL VIBRADOR - g00HTML[24][2] TIEMPO VIBRADOR - MORSE
				let gap = Math.round(s00timeMor[1][2]/7);//deltas de tiempo
				console.log('gap='+gap);
				f0042();//ON CAMBIAR el icono de off a on y vibrar DURANTE 5 SEGUNDOS??
				iFaro.classList.remove('cX');//MOSTRAR el faro/punto
				let b = 1;		
				f0041();//CONSEGUIR los milisegundos actuales - Milis actuales
				g00HTML[25][2] = [];//reset de Vibracion Local 24 acumulada ONTIME
				let c = g00HTML[24][2][0];//Duración primer vibración
				let i;
				for (i = 0; i < g00HTML[24][2].length; i++)
				{	g00HTML[25][2][i] = miMors + c;
					c += g00HTML[24][2][i+1];
				}
				camVio = 0;//Bandera que permite las vibraciones
				i = 0;
				const miVibr = setInterval(
					function//Dispara una funcion que se repite una y otra vez... el freno se repite una y otra vez hay que pararlo!
					()	{	if(!camVio)//Si vibraciones estan pemitidas..
							{	if(i < g00HTML[25][2].length)
								{	f0041();//CONSEGUIR los milisegundos actuales
									if (miMors > g00HTML[25][2][i])//CAMBIO..
									{	if(b)
										{	b = 0;
											f0043();//parar			
										}
										else
										{	b = 1;
											f0042();//vibrar
										}
										i++;
									}
									//NO HAY CAMBIO	
								}
								else//si ya termino de dar el string en morse..
								{	camVio = 1;//Orden de terminar las vibraciones morse
								}
						///	if(camVio)//si cierta condicion se cumple se cortan las vibraciones 
						///	{	console.log('MORSE finalizo ...');
						///		f0043();//parar
						///		iFaro.classList.add('cX');//OCULTAR
						///		clearInterval(miVibr);//Detener intervalos pendientes
						///	}
							}
							//console.log('MORSE finalizo ... por camVio = 1');
							if(camVio)//Si hay bandera con orden de parar las vibraciones morse => se cortan las vibraciones 
							{	console.log('MORSE va a finalizarse ...');
								f0043();//L parar
								iFaro.classList.add('cX');//OCULTAR el faro/punto
								clearInterval(miVibr);//Detener intervalos pendientes
							}
						}
					, gap
				);
			}
		}
 		 
f0045=()=>//DETENER vibraciones parpadeos e intervalos pendientes
		{	lOL(45);
			//if(g00VARS[60][3])//SI puede vibrar..
			{
	
			 ////	miVibr = 0;//Detiene el permiso de vibrar
			 ////	clearInterval(miVibr);//Detener intervalos pendientes
				camVio = 1;//Da la orden de parar la vibraciones morse
				f0043();//L HACER faro off y PARAR vibración
				iFaro.classList.add('cX');//ocultar el faro/punto
				//console.log('<<<<<<< VIBRA D E T E N I D A ______________>>>>>>>');
			}
		}

f0046=()=>//L CARGAR las variables s00EXIT con los STRINGS HTML INTERNACIONALES y LOCALES que se necesitan
		{	lOL(46);
			if((g00VARS[27][2]!=1)&&(g00VARS[5][2]))//si idioma local no es el idioma ingles y esta i1
			{	//ACTUALIZAR las variables INTERNACIONALES s00EXIT[2-4-6-8-10]
				g00VARS[28][2] = 1;//pasa al modo internacional
				g00VARS[21][2] = s00EXIT[2][2];
				f0021();//L normaliza el guión global (g00VARS[21][2]) // OUT g00HTML[0,1,2,3][2] normaliza el guión global
				f0010(1);//L g00HTML[23][2](HTML) - CONVERTIR texto NORMALIZADO a morse
				s00EXIT[10][2] = g00HTML[23][2];//Morse Internacional			
				f0080();//IN OUT g00HTML[14] g00HTML[32] HTML señas del LOGO (tapa)
				s00EXIT[4][2] = g00HTML[14][2];//señas animadas Internacional
				s00EXIT[6][2] = g00HTML[32][2];//señas libro Internacional
				f0007();//OUT g00HTML[19][2] braille Internacional
				s00EXIT[8][2] = g00HTML[19][2];//braille Internacional
			}
			//ACTUALIZAR las variables LOCALES s00EXIT[1-3-5-7-9]
			g00VARS[28][2] = 0;//ACTIVA modo local
			g00VARS[21][2] = s00EXIT[1][2];
			f0021();//normaliza el guión global (g00VARS[21][2]) // OUT g00HTML[0,1,2,3][2] normaliza el guión global g00VARS[21][2]
			f0010(1);//g00HTML[23][2](HTML) - CONVERTIR texto NORMALIZADO a morse
			s00EXIT[9][2] = g00HTML[23][2];//Morse Local
			f0080();//g00HTML[14] g00HTML[32] HTML señas del LOGO (tapa)
			s00EXIT[3][2] = g00HTML[14][2];//señas animadas Local
			s00EXIT[5][2] = g00HTML[32][2];//señas libro Local
			f0007();//CONVERTIR texto NORMALIZADO a braille - IN g00HTML[3][2] OUT g00HTML[19][2] braille Local
			s00EXIT[7][2] = g00HTML[19][2];//braille Local
		}

f0047=(reg)=>//"UNDO CANCEL" - click en botón 4 | REGRESAR a una ruta secundaria o principal anterior
		{	lOG(47);
			if(reg)
			{	f0093(reg);//REGISTRAR el primer clic sobre pantalla
			}
			f0078();//L SONAR Clic
			if(yKEYS[2][8]&&yKEYS[2][3])//SI AMBAS SE CUMPLEN..
			{	f0076();//SI LA TAPA INFORMATIVA esta activa PASAR de TAPA a RUTA porque hay clic sobre algun boton "informativo" 
				if(!g02RUTA[gRuta][5])//no es principal
				{	if(!g02RUTA[gRuta][8])//no tiene padre
					{	console.log('47vuelve a la ruta principal');
						console.error('|> Flag');
						f0048();
					}
					else//tiene padre
					{	console.log('47cambia a la ruta padre');
						gFoco = 1;
						gRuta = g02RUTA[gRuta][8];
					}
				}
				else//es principal
				{	if(g02RUTA[gRuta][8])//tiene padre
					{	console.log('47cambia a la ruta padre');
						gFoco = 1;
						gRuta = g02RUTA[gRuta][8];
					}
					else//no tiene padre
					{	console.log('47no hace nada');
					}
				}
				f0017(1);//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
			}
		}

f0048=()=>//RETORNAR a la ruta principal
		{	lOG(48);
			gFoco =	gMemF;
			gRuta =	gMemR;
		}

f0049=()=>//OCULTAR botón 4 de deshacer (x UNDO) y 7 de menu cuando no se necesiten
		{	lOL(49);
			if((g02RUTA[gRuta][5])&&(!g02RUTA[gRuta][8]))//ruta es principal y no tiene padre
			{	//ocultar el icono de botón undo
				yBot1.classList.add('cStop');
				yBB1.classList.add('cOff');
				fBot1.classList.add('cStop');
				fBB1.classList.add('cOff');
				//yBot1.classList.add('cX');
				yKEYS[2][3] = 0;//4X OFF
			}
			else
			{	//mostrar el icono de botón undo
				if(g00VARS[76][2])
				{	yBot1.classList.remove('cStop');
					yBB1.classList.remove('cOff');
					fBot1.classList.remove('cStop');
					fBB1.classList.remove('cOff');
					//yBot1.classList.remove('cX');
					yKEYS[2][3] = 1;//4X ON
				}
			}
			//ocultar menu si no se necesita..


			/*
			if(gRuta == 4)//Si ruta es Menu
			{	//ocultar el icono de botón menu
				yBot7.classList.add('cX');
				yKEYS[2][5] = 0;//7Menú OFF
			}
			else//Si la ruta no es menu
			{	//mostrar el icono de botón menu
				yBot7.classList.remove('cX');
				yKEYS[2][5] = 1;//7Menú ON
			}*/


		}

f0050=()=>//OCULTAR ambientes, DEJAR pantalla vacia, DETENER vibraciones y BORRAR guíon del interprete
		{	lOC(50);
			intBan = 0;//VENTANA sin Interpretes
			f0045();//L detener vibraciones
			if((ambi == 2)||(ambi ==3)||g00VARS[20][2])//TAPA INFORMATIVA X o ALERTA Y! o Bandera Pantalla MINI
			{	bTapaO.innerHTML = '';//ELIMINAR HTML de tapaX y alertaY
				iTR.innerHTML = '';
				bTapaA1.innerHTML = '';
				bTapaC1.innerHTML = '';
				bTapaD1.innerHTML = '';
				if((g00VARS[27][2] > 1)&&(g00VARS[5][2]))//Si no es el idioma ingles y esta i1..
				{	iTL.innerHTML = '';
					bTapaD2.innerHTML =	'';
					bTapaC2.innerHTML = '';
					bTapaA2.innerHTML = '';
				}
				iTAPA.classList.add('cX');//OCULTAR TAPA
				line.classList.add('cEsqi');//poner marco de color
	 			line.classList.remove('rEsqi');//quitar marco Rojo
			}
			if(ambi == 4)//PRESENTACION AV
			{	f0109();//QUITAR la presentación
			}
			if(ambi == 5)//RUTA X
			{	lLINES.innerHTML = '';
				intM.classList.add('cX');//Oculta la interfaz M
				iRUTA.classList.add('cX');
			}
			//yBTNS.classList.add('cX');//ocultar los botones
			yKEYS[2][8] = 0;//ocultar los botones 1 3 Y 4
			//yBot0l.classList.add('cStop');
			//yBot0r.classList.add('cStop');
			//yBB0.classList.add('cOff');
			//yBBO.classList.add('cOff');
			boT0.classList.add('cStop');
			//yBot5.classList.add('cStop');
			yBB5.classList.add('cOff');
			//yBB5.classList.add('cOff');
			yBoto.classList.add('cStop');
			//yBoto.classList.add('cStop');
			yBBo.classList.add('cOff');
			//yBBo.classList.add('cOff');
			yBot4.classList.add('cStop');
			yBB4.classList.add('cOff');
			yBot6.classList.add('cStop');
			yBB6.classList.add('cOff');
			yBot1.classList.add('cStop');
			yBB1.classList.add('cOff');
			yBot3.classList.add('cStop');
			yBB3.classList.add('cOff');
			yBot7.classList.add('cStop');
			yBB7.classList.add('cOff');
			fBot4.classList.add('cStop');
			fBB4.classList.add('cOff');
			fBot6.classList.add('cStop');
			fBB6.classList.add('cOff');
			fBot1.classList.add('cStop');
			fBB1.classList.add('cOff');
			fBot3.classList.add('cStop');
			fBB3.classList.add('cOff');
			fBot7.classList.add('cStop');
			fBB7.classList.add('cOff');
			g00VARS[26][4] = 0;//Botones ocultos 
		}

f0051=()=>//HABILITAR botones de RUTA (1,3,4 y 7)
		{	lOL(51);
			if(!g00VARS[26][4])//Si BOTONES ocultos {0}
			{	g00VARS[26][4] = 1;//BOTONES visibles
				//yBTNS.classList.remove('cX');//muestra los botones
				yKEYS[2][8] = 1;//muestra los botones 1 3 Y 4
				if(yKEYS[2][1])
				{	yBot4.classList.remove('cStop');
					yBB4.classList.remove('cOff');
					fBot4.classList.remove('cStop');
					fBB4.classList.remove('cOff');
				}
				if(yKEYS[2][2])
				{	yBot6.classList.remove('cStop');
					yBB6.classList.remove('cOff');
					fBot6.classList.remove('cStop');
					fBB6.classList.remove('cOff');
				}
				if(yKEYS[2][3])
				{	yBot1.classList.remove('cStop');
					yBB1.classList.remove('cOff');
					fBot1.classList.remove('cStop');
					fBB1.classList.remove('cOff');
				}
				if(yKEYS[2][4])
				{	yBot3.classList.remove('cStop');
					yBB3.classList.remove('cOff');
					fBot3.classList.remove('cStop');
					fBB3.classList.remove('cOff');
				}
				if(yKEYS[2][5])
				{	yBot7.classList.remove('cStop');
					yBB7.classList.remove('cOff');
					fBot7.classList.remove('cStop');
					fBB7.classList.remove('cOff');
				}
				//yBot0l.classList.remove('cStop');
				//yBot0r.classList.remove('cStop');
				//yBB0.classList.remove('cOff');
				//yBBO.classList.remove('cOff');
				boT0.classList.remove('cStop');
				//yBot5.classList.remove('cStop');
				yBB5.classList.remove('cOff');
				//yBB5.classList.remove('cOff');
				yBoto.classList.remove('cStop');
				//yBoto.classList.remove('cStop');
				yBBo.classList.remove('cOff');
				//yBBo.classList.remove('cOff');
			}
		}

/*
f0052=()=>//INICIALIZAR la API de Youtube
		{	lOU(52);
			var tag = document.createElement('script');
			tag.src = "https://www.youtube.com/iframe_api";
			var firstScriptTag = document.getElementsByTagName('script')[0];
			//SI HAY SEÑAL DE INTERNET..
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
			//EL SCRIPT ANTERIOR DESDE INTERNET LLAMA LA FUNCION onYouTubeIframeAPIReady()
		}
 
f0053=()=>//RESTABLECER el video de YouTube desde el comienzo [STOP]
		{	lOU(53);
			//l01Repro[1] = 0;
			if(vPlayer)
			{	vPlayer.pauseVideo();
				vPlayer.stopVideo();
			}
			//if(vPlayerSorda)
			//{	vPlayerSorda.pauseVideo();
			//	vPlayerSorda.stopVideo();
			//}
		}

f0054=(a,b)=>//CARGAR video de YouTube
		{	lOU(54);
			vPlayer.loadVideoById(
			{	'videoId': kTapa3[a][b],
				'startSeconds':0,
				'suggestedQuality': 'large'
			}
			);
			////	vPlayerSorda.loadVideoById({'videoId': kTapa3[a][b+1],
			////		'startSeconds':0,
			////		'suggestedQuality': 'large'});
			f0055();
		}

f0055=()=>//RESTABLECER el video de YouTube desde el comienzo [STOP]
		{	lOU(55);
			if (vPlayer)
			{	vPlayer.stopVideo();
			};
			//if (vPlayerSorda){
			//	vPlayerSorda.stopVideo();
			//}
			f0056();
		}

f0056=()=>//PAUSAR [PAUSE] el video de YouTube
		{	lOU(56);
			//l01Taps[4][1] = 2;
			//o012(4);
			vPlayer.pauseVideo();
		}
*/

f0057=(id,ruta)=>//ALMACENAR el guíon o guiones parcial(es) tipo texto, por ej:menús, o fila de imagenes de la tapa y traerlo desde las RUTAS, dando el número de la columna que contiene el texto que va a tomar dentro de la ruta
		{	lOG(57);
			preTAP = '';
			switch (g02RUTA[ruta][2])
			{	case 0://Se usa este caso???? creo que no!
					preTAP = mIkTapaI[g02RUTA[ruta][3]][id];
					//preTAP = kTapaI[id][g02RUTA[ruta][3]];
				break;
				case 1:	
					preTAP = mIr001A[g02RUTA[ruta][3]][id];
					//preTAP = r001A[id][g02RUTA[ruta][3]];
					//preTAPz = r001Z[id][g02RUTA[ruta][3]];
				break;
				case 2:
					preTAP = mIr002A[g02RUTA[ruta][3]][id];
					//preTAP = r002A[id][g02RUTA[ruta][3]];
				break;
				case 3:
					preTAP = mIr003A[g02RUTA[ruta][3]][id][0];// [idioma][casilla con el texto][0]
					//preTAP = r003A[id][g02RUTA[ruta][3]][0];// [idioma][casilla con el texto][0]
				break;
				case 4:
					preTAP = mIr004A[g02RUTA[ruta][3]][id];
					//preTAP = r004A[id][g02RUTA[ruta][3]];
				break;
				case 5:
					preTAP = mIr005A[g02RUTA[ruta][3]][id];
					//preTAP = r005A[id][g02RUTA[ruta][3]];
				break;
				case 6:
					preTAP = mIr006A[g02RUTA[ruta][3]][id];
					//preTAP = r006A[id][g02RUTA[ruta][3]];
				break;
				case 7:/*
					if(gFoco == 1)//Si esta en la casilla 1
					{	preTAP = mIr007A[g02RUTA[ruta][3]][id][0];
						//preTAP = r007A[id][g02RUTA[ruta][3]][0];
					}
					else
					{	preTAP = mIr007A[g02RUTA[ruta][3]][id];
						//preTAP = r007A[id][g02RUTA[ruta][3]];
					}*/
				break;
				case 8:
					preTAP = mIr008A[g02RUTA[ruta][3]][id][0];
					//preTAP = r008A[id][g02RUTA[ruta][3]][0];
					//preTAPz = r008Z[id][g02RUTA[ruta][3]][0];
				break;
				
			}
		}

f0061=(v2,id)=>//ADICIONAR a v2 (html acumulado) el código HTML de la RUTA que va justo luego del visor y es dependiente del modo, completa el guión faltante Local y en Ingles, id = id del idioma
		{	lOL(61);
			hh47();//L PERMITIR o NO el botón/hoja fila de señas en menu ESTILO
			v2 += '<div aria-hidden="true"><hr>';//Inicia strings de modos
			if(((g00VARS[11][2] == 0)||(g00VARS[11][2] == 4))&&(g00VARS[19][2]))//todos los modos o señas y fila de señas esta habilitada
			{	v2 += '<div class="cCero cTela">'+s00EXIT[5][2]+'</div>';
				if((id > 1)&&(g00VARS[5][2]))//si i1
				{	v2 += '<hr class="cHR"><div class="cCero cTela">'+s00EXIT[6][2]+'</div>';
				}
			}
			if((g00VARS[11][2] == 0)||(g00VARS[11][2] == 3))//todos los modos o BRAILLE
			{	v2 += '<hr><div class="cPadd4A"><div class="cBrai">'+s00EXIT[7][2]+'</div>';
				if((id > 1)&&(g00VARS[5][2]))//si i1
				{	v2 += '<hr class="cHR"><div class="cBra1">'+s00EXIT[8][2]+'</div>';
				}
				v2 += '</div>';
			}
			if((g00VARS[11][2] == 0)||(g00VARS[11][2] == 2))//todos los modos o MORSE
			{	v2 += '<hr><div class="cPadd4A cCent"><div class="cMors">'+s00EXIT[9][2]+'</div>';
				if((id > 1)&&(g00VARS[5][2]))//i1
				{	v2 += '<hr class="cHR"><div class="cMors">'+s00EXIT[10][2]+'</div>';
				}
				v2 += '</div>';
			}
			v2 += '</div>';//Finaliza strings de modos
			vHtml2 = v2;
		}

f0067=()=>//K ORGANIZAR 1 pulso limpio de resize//OBTENER medidas de la ventana y ACTIVAR/CONMUTAR/MANTENER capa RUTA o ALERTA
		{	lOK(67);
			if(!sizBan)
			{	sizBan = 1;//ACTUAR RESIZE
				f0018();//I ESPERAR un segundo y verificar que no exista un nuevo evento RESIZE para tomar ACCIONES
			}
			else
			{	sizCon += 1;//Nuevo evento resize detectado PERO SIN ACTUAR RESIZE
			}			
		}

f0068=(def)=>//AJUSTAR tamaño / altura del VISOR e Interpretes:: standar o por defecto(def) / configuración del usuario
		{	lOL(68);
			let aux;//variable auxiliar
			if(def == 2)//si es una presentación AV
			{	aux = 5;//tomar el valor máximo
				//aux = 4;//tomar el valor máximo
			}
			else if(def == 1)//Si es una tapa de alerta o informativa..
			{	if (g00VARS[64][3] > g00VARS[64][2])//si[3]>[2] si el valor por defecto es mayor que el ajuste del usuario
				{	aux = g00VARS[64][3];//tomar el valor por defecto
				}
				else//[3]<=[2]
				{	aux = g00VARS[64][2];//dejar el valor del usuario
				}
			}
			else//Si def !=1 no es una alerta o tapa info.. es una ruta..
			{	aux = g00VARS[64][2];//valor ajustado por el usuario
			}
			fff();
			let aa;
			switch (aux)//ajusta el tamaño del visor
			{	case 1:
					aa = ((g00VARS[68][2]*0.1) - 2);//(g00VARS[68][2]/5)+'px, 45px)')
				break;
				case 2:
					aa = ((g00VARS[68][2]*0.2) - 2);//((g00VARS[68][2]*2)/5)+'px, 45px)')
				break;
				case 3:
					aa = ((g00VARS[68][2]*0.37) - 2);//((g00VARS[68][2]*3)/5)+'px, 45px)')
				break;
				case 4:
					aa = ((g00VARS[68][2]*0.63) - 2);//((g00VARS[68][2]*4)/5)+'px, 45px)');
				break;
				case 5:
					aa = (g00VARS[68][2] - 2);//g00VARS[68][2]+'px, 45px)');
				break;
			}
			iBody.style.setProperty('--chico','max('+aa+'px, 10px)');
			//AJUSTAR TAMAÑO INTERPRETES DE ACUERDO AL VISOR
			let divIcon = dIcon.getBoundingClientRect();//ALMACENA LA MEDIDA DEL ELEMENTO
			let w = divIcon.width;
			let h = divIcon.height;
			let q = w/h;
			iBody.style.setProperty('--cWH',q);
			let divSign = dSign.getBoundingClientRect();
			let ht = divSign.height/20;// 17;
			iBody.style.setProperty('--cHTex',ht);
		}

f0070=()=>//CONFIRMAR pantalla minimizada! CUANDO SE QUITA SOLO MAXIMIZA LA PRIMER VEZ!
		{	lOL(70);
			document.onwebkitfullscreenchange = null;	
		 	if (iBody.exitFullscreen) 
		 	{	iBody.exitFullscreen()} 
		 	else if (iBody.webkitExitFullscreen)/* Safari */ 
		 	{ 	iBody.webkitExitFullscreen()}
		 	else if (iBody.msExitFullscreen)/* IE11 */
		 	{	iBody.msExitFullscreen()}
		 	
		}

/*
f0070=(son)=>//REGISTRAR primer clic maximizando/ f0070(1) sonar clic
		{	lOL(70);
			if(son)
			{	f0078();//L SONAR Clic
			}
		}
*/
f0071=()=>//AÑADIR más HTML a g00VARS[69] si es fila de señas
		{	lOL(71);
			if (g00VARS[19][2])//si fila de señas
			{	g00VARS[69][2] += g00VARS[22][2];
			}
		}

f0072=(id)=>//ADICIONAR HTML para terminar los botones/hojas de la Ruta
//f0072=(id,ru)=>//ADICIONAR HTML para terminar los botones/hojas de la Ruta
		{	lOL(72);
			v02 += '</div><div class="cPadd4A cCent"><div>'+s00EXIT[1][2]+'</div>';//"arriba"
			if((id > 1)&&(g00VARS[5][2]))//Si no es el idioma ingles, esta i1, y modo general o señas.. adiciona el interprete Internacopnal de la izquierda..
			{	v02 += '<hr><div class="cIng">'+s00EXIT[2][2]+'</div>';//upper limit
			}
			v02 += '</div>';
			f0061(v02,id);//L ADICIONAR a v02 código HTML (dependiendo del modo) del guión local y en Ingles
			v02 = vHtml2;
			v02 += '</button></div>';//Termina el botón
			v03 += v02;//AGREGAR v02 parcial al consolidado
		}
 		
f0073=()=>//R AUDIO ALERTA!
		{	lOL(73);
			if(g00VARS[55][2])//Si ya ocurrio el primer clic
			{	myPito.play();
			}
		}


f0074=()=>//REGISTRAR clic y SONAR donde está el foco por click sobre la Barrera
		{	lOI(74);
			bNoSo = 1;//Se activa la Bandera de No Sonido, se activa cuando hay click sobre la barrera e indirectamente se activa onFocus
			f0093();//REGISTRAR primer clic maximizando
		 	if(g00VARS[59][2]&&(ambi == 2))//Si Lector de pantalla esta Activo

// ... ... ... Aquí Voy!! ... ... ...
			{	f0031(1);//INFORMAR con audio o vibración dónde está el foco
			}
			f0110();//PERMITIR el sonido despues de un tiempo
		}


/*
f0074=(min)=>//I DETERMINAR cúal ambiente debe continuar en el frontEnd // REINICIAR animación, OCULTAR la ruta o cambiar la tapa actual, MOSTRAR tapa de ALERTA e INFORMAR la alerta simil a f0024()
		{	lOI(74);
			//////probando a quitar este bloque..
			//////Nota la funcion f45 que sigue, da la orden de detener la vibraciones pero se requiere mirar primero si el ambiente que sigue lo permite o no!!
			////f0045();//L DETENER vibraciones parpadeos e intervalos EN CURSO
			////if(conteo[1])//Si no hay PRESENTACIÓN AV ACTIVA
			////{	f0090();//REINICIAR animación
			////}
			////
			if(min)//si ventana es mini, prepara o mantiene ambiente de alerta pantalla minimizada
			{	
			}
			else//si la pantalla esta maximizada, alerta pantalla mini "desactivada"
			{
			}
		}*/

f0075=(reg)=>//CLIC de [Input] o sobre la tapa desde el "hueco" central
		{	lOG(75);
			//console.log('- - - - - rrr click sobre la tapa!');
			if(reg)
			{	f0093(reg);//REGISTRAR el primer clic sobre pantalla
			}
			f0078();//L SONAR Clic
			if(g00VARS[55][3])//si la tapa es informativa repite la info mmm no deberia regresa a la ruta
			{	f0076(1);
			}
			else//si la tapa es una alerta entonces..
			{	f0077();//ACTUAR para "solucionar" la notificación
			}
		}

f0076=(scr)=>//PASAR de la capa TAPA a la capa RUTA porque estando en Tapa Info X se oprimió un botón diferente de "info"
		{	lOG(76);
			hh88(5);//Recupera el color de la luz
		 	//hh88(2);//Recupera el color de la luz
		 	if(ambi == 2)//si es una TAPA Ruta X
		 	//	if(g00VARS[26][2])//si la tapa esta ON, esta en una tapa - implicito en ambi????
			{	//f0090();//REINICIAR animación
				f0111(1);//CANCELAR salida de audio y vibraciones	
				f0050();
				f0017(scr);//Volver a la RUTA (scr)poner foco en la RUTA
			}

		}

/*
f0077=()=>//ACTUAR para "solucionar" la alerta
		{	lOG(77);
			switch(g00VARS[20][2])
			{	case 1:
					//f0022();//Maximiza la ventana
				break;
				case 2:
				break;
			}
		}
*/

f0078=()=>//SONAR Clic y REGISTRAR evento
		{	lOL(78);
			f0079();//L Registrar el evento
			if(g00VARS[55][2])//Si ya ocurrio el primer clic
			{	myClic.play();
			}
		}

f0079=(scr)=>//REGISTRAR evento y REINICIAR conteo para activar la presentación
		{	lOL(79);
			if(scr)
			{	//console.log('[ - - - rrrrrr ... scroll]');
			}
			else
			{	//console.log('[ - - - rrrrrr ... STOP scroll!! - - -]');
			}
			conteo[0] = aaini;//reinicia el conteo
			if(!accion)//Si no ha ocurrido ningún evento desde el inicio del conteo
			{	accion = 1;//ha ocurrido un evento durante el conteo
			}
		}

f0080=()=>//CONVERTIR texto NORMALIZADO a señas//s001()//OUTS:g00HTML[4-5-6-7-8-9-14-32->26->31->36][2];g00VARS[4-19-50-69][2]// anterior:f0004()]
		{	lOL(80);//(11) lOUs(1);
			//INPUTS g00HTML[3]Arreglo de palabras
			let v4;
			let v2;
			//INICIAR la serie de señales y prosas
			g00HTML[26][2] = '';//INICIALIZAR la serie de señas animadas
			g00HTML[36][2] = '';//INICIALIZAR la serie de imagenes/ seña
			g00HTML[31][2] = '';//INICIALIZAR la serie de glosas animadas
			g00VARS[69][2] = '';//RESET HTML SEÑAS LIBRO
			g00VARS[50][2] = '<img src="signs/0.png" alt="seña" class="y70x"><div class="cGlosD cFlex"><div class="yProsax"></div></div>';//RESET DEL HTML de tapa ???<hr class="cM0">
			//si tiene glosa manual..

			//si no tiene glosa manual..
			for (let v6 = 0; v6 < g00HTML[3][2].length; v6++)//RECORRE UNA A UNA TODAS LAS SUBCADENAS "PALABRAS" DEL ARREGLO
			{	g00HTML[4][2] = g00HTML[3][2][v6];
				g00HTML[5][2] = '';//RESET LISTA DE CARACTERES ESPECIALES DENTRO DE LA SUBCADENA "PALABRA"
				g00HTML[5][2] = g00HTML[4][2].replace(g00eREG[2][1],'').split('');//ARREGLO DE CARACTERES ESPECIALES DENTRO DE LA SUBCADENA "PALABRA"
				g00HTML[6][2] = '';//RESUMEN DE TODOS LOS CARACTERES ESPECIALES ENCONTRADOS EN LA SUBCADENA
				for (v2 = 0; v2 < g00HTML[5][2].length; v2++)//RECORRE TODOS LOS CARACTERES ESPECIALES DE LA SUBCADENA "PALABRA"
				{	let v1 = false;//RESET DE COINCIDENCIAS
					for (v4 = 0; v4 < g00HTML[6][2].length; v4++)//RECORRE LA LISTA DE TODOS LOS CARACTERES ESPECIALES "ENCONTRADOS" DEL ARREGLO
					{ 	if (g00HTML[6][2][v4] == g00HTML[5][2][v2])
						{	v1 = true;//SI ENCUENTRA EL CARACTER ESPECIAL QUIERE DECIR QUE YA ESTABA
						}
					}
					if (!v1)//SI EL CARACTER ESPECIAL NO EXISTE EN EL STRING RESUMIDO [5][2] LO AGREGA
					{	g00HTML[6][2] += g00HTML[5][2][v2];//ACTUALIZA LA LISTA DE LOS CARACTERES ESPECIALES ENCONTRADOS = STRING SIMPLIFICADO DE LOS CARACTERES ESPECIALES
					}
				}
				g00HTML[6][2] = g00HTML[6][2].split('');
				g00HTML[7][2] = '';//RESUMEN DE CANTIDAD DE CADA CARACTER ESPECIAL ENCONTRADO DENTRO DE LA PALABRA
				for (v4 = 0; v4 < g00HTML[6][2].length; v4++)//-RECORRER LISTA CARACTERES ESPECIALES RESUMIDOS DE LA PALABRA
				{ 	let v5 = 0;//RESET DEL CONTADOR DE CARACTERES ESPECIALES
					for (v2 = 0; v2 < g00HTML[5][2].length; v2++)//-RECORRER TODOS LOS CARACTERES ESPECIALES DE LA PALABRA
					{	if (g00HTML[6][2][v4] == g00HTML[5][2][v2])//ENCONTRO EL CARACTER DENTRO DEL ARREGLO..
						{	v5 += 1;//CONTADOR DE EXISTENCIAS
						}
					}
					g00HTML[7][2] += v5 +',';//STRING CON EL TOTAL DE LAS COINCIDENCIAS
				}
				g00HTML[7][2] = g00HTML[7][2].substring(0, g00HTML[7][2].length - 1);//Se quita la ultima ,
				g00HTML[7][2] = g00HTML[7][2].split(',');//Arreglo cantidades individuales por cada caracter especial encontrado
				g00HTML[8][2] = 0;
				if(g00HTML[4][2].match(g00eREG[3][1]))//ESTA SUBCADENA ES UNA CADENA ESPECIAL LINK O CORREO QUE NO SE PUEDE DESCOMPONER EN PALABRAS SUELTAS
				{	g00HTML[8][2] = 1;
					g00HTML[9][2] = g00HTML[4][2].split('');
					for (let v7 = 0; v7 < g00HTML[9][2].length; v7++)//RECORRER 9 LA SUBCADENA LETRA X LETRA Y CARACTER X CARACTER
					{	g00VARS[4][2] = g00HTML[9][2][v7];
						f0081();//L PASAR caracteres especiales o letras SUELTAS a id señas...
						f0071();//L AÑADIR más HTML a g00VARS[69] si es fila de señas	
					}
				}
				else//ESTA SUBCADENA SI SE PUEDE DESCOMPONER EN PALABRAS SUELTAS
				{	g00HTML[9][2] = g00HTML[4][2].split(g00eREG[4][1]);//FRACCIONA LA SUBCADENA:separa los textos de los caracteres especiales sueltos
					g00HTML[9][2] = g00HTML[9][2].filter(function(el)
					{	if (el != '')
						{ 	return el
						}
					});//quita los '' EXTRA del arreglo 9
					g00HTML[10][2] = '';//tipo de CARACTER ESPECIAL o PALABRA
					for (v4 = 0; v4 < g00HTML[9][2].length; v4++)//RECORRER 9 LA SUBCADENA
					{	if(g00HTML[9][2][v4].match(g00eREG[5][1]))//DETECTA SI EXISTE UNA PALABRA SUELTA (minimo 2 letras)
						{	g00HTML[10][2] += '1,';//DETECTO PALABRA DE MINIMO 2 LETRAS
						}
						else
						{	g00HTML[10][2] += '0,';//DETECTO QUE NO ES UNA PALABRA DE MINIMO 2 LETRAS, ES DECIR SE TRATA DE UNA LETRA INDIVIDUAL O ES UN CARACTER ESPECIAL
						}
					}
					g00HTML[10][2] = g00HTML[10][2].substring(0, g00HTML[10][2].length - 1);//Se quita la ultima ,
					g00HTML[10][2] = g00HTML[10][2].split(',');//Arreglo cantidades individuales por cada caracter especial encontrado
					for (v4 = 0; v4 < g00HTML[9][2].length; v4++)//RECORRE 9 LA SUBCADENA FRACCIONADA: Arreglo de palabras, letras y caracteres especiales sueltos de 4
					{	//vSub = '*';
						let v3 = g00HTML[9][2][v4];//Recorre cada division de la subcadena, v3 es variable División "miníma" de una subcadena, expresion minima de una subcadena, puede estar conformada por palabras, letras o caracteres especiales
						g00HTML[11][2] = v3;//"USO" COMO REFERENCIA RAPIDA
						if(g00HTML[10][2][v4] == 1)//DETECTA SI ES UNA PALABRA SUELTA (de minimo 2 letras)
						{	g00HTML[12][2] = false;//RESET DE PALABRA ENCONTRADA
							let v7;
							for (v7 = 1; v7 < g01WORDSb.length; v7++)//-RECORRER UNA A UNA TODAS LAS PALABRAS DEL BANCO QUE TIENEN SEÑAS
							{	if (((g00VARS[28][2] == 1)&&(g00VARS[5][2]))||(g00VARS[6][2] == 1))//si i1 y idioma internacional o es una palabra inter 
								{	if(g01WORDSb[v7][1] == v3.toLowerCase())//ESTA palabra EXISTE en el BANCO DE SEÑAS INTERNACIONAL! 
									{	g00HTML[12][2] = true;
										vSub = v3.toUpperCase();//Carga el subtitulo							
										f0082(g01WORDSa[v7][1]);//Crea el html internacional de esa palabra, GENERAR html para una imagen tipo seña, dado el id imagen/seña
										f0071();//AÑADIR más HTML a g00VARS[69] si es fila de señas
										v7 = g01WORDSb.length - 1;//termine de buscar esa palabra en el BANCO
									}
								}
								else
								{	if(g01WORDSb[v7][g00VARS[27][2]] == v3.toLowerCase())//ESTA palabra EXISTE en el BANCO DE SEÑAS LOCAL! 
									{	g00HTML[12][2] = true;
										vSub = v3.toUpperCase();//Carga el subtitulo
										f0082(g01WORDSa[v7][g00VARS[27][2]]);//Crea el html local de esa palabra GENERAR html para una imagen tipo seña, dado el id imagen/seña
										f0071();//AÑADIR más HTML a g00VARS[69] si es fila de señas
										v7 = g01WORDSb.length - 1;//termine de buscar esa palabra en el BANCO
									}
								}
							}
							if(!g00HTML[12][2])//Si no encontro la 'palabra' en el BANCO DE SEÑAS
							{	g00HTML[13][2] = v3.split('');//FRACCIONA LA 'PALABRA'
								for (v7 = 0; v7 < g00HTML[13][2].length; v7++)//RECORRE TODAS LAS LETRAS DE LA 'PALABRA'
								{	g00VARS[4][2] = g00HTML[13][2][v7];
									vSub = g00VARS[4][2].toUpperCase();
									f0081();//PASAR caracteres especiales o letras SUELTAS a id señas...
									f0071();//AÑADIR más HTML a g00VARS[69] si es fila de señas
								}
							}
						}
						else//Si es una letra o un caracter especial suelto:
						{	g00VARS[4][2] = g00HTML[9][2][v4];
							vSub = g00VARS[4][2].toUpperCase();
							f0081();//PASAR caracteres especiales o letras SUELTAS a id señas...
							f0071();//AÑADIR más HTML a g00VARS[69] si es fila de señas
						}
					}
				}
				//vSub = '*';
				if(v6 != (g00HTML[3][2].length - 1))//si no es la ultima SUBCADENA'palabra' incerta un espacio para separar las palabras y reucuperar el string original
				{	//------- g00VARS[50][2] += '<span class="cPausa">| .</span>';
					vSub = ' ';
					g00VARS[4][2] = ' ';
					f0081();//PASAR caracteres especiales o letras SUELTAS a id señas...
					f0071();//AÑADIR más HTML a g00VARS[69] si es fila de señas
				}
			}
			g00HTML[14][2] = g00VARS[50][2];//HTML del interprete (señas animadas) incluyen glosa
			g00HTML[32][2] = g00VARS[69][2];//HTML del libro (señas en tira) incluyen glosa
			//FINALIZAR ] serie de señales y prosas


			g00HTML[26][2] = g00HTML[26][2].substring(0, g00HTML[26][2].length - 1).split(',');//Se quita la ultima , Y genera el array	
			g00HTML[36][2] = g00HTML[36][2].substring(0, g00HTML[36][2].length - 1).split(',');//Se quita la última , Y genera el array
			g00HTML[31][2] = g00HTML[31][2].substring(0, g00HTML[31][2].length - 3).split("','");//Se quita las ultimas ',' Y genera el array
			//g00HTML[26][2] += ']';
			//g00HTML[31][2] += ']';
			for (let v1 = 0; v1 < g00HTML[26][2].length; v1++)//-RECORRER LISTA de numeros de señas
			{ 	g00HTML[26][2][v1] = parseInt(g00HTML[26][2][v1]);//El arreglo tipo string se pasa a tipo número
				g00HTML[36][2][v1] = parseInt(g00HTML[36][2][v1]);//El arreglo tipo string se pasa a tipo número
			}
			//ADICIONAR pausa antes de iniciar la animacion
			g00HTML[26][2].unshift(0);//0,***
			g00HTML[36][2].unshift(1);//1,***
			g00HTML[31][2].unshift('');//'',***
			//ADICIONAR pausas despues finalizar la animación:
			g00HTML[26][2].push(0,0);//***,0,0
			g00HTML[36][2].push(1,1);//***,1,1
			g00HTML[31][2].push('','');//***,'',''
			g00VARS[1].push(g00HTML[26][2]);//ADICIONAR A g00VARS[1][0,30,23,34,47,0,0])
			g00VARS[0].push(g00HTML[36][2]);//ADICIONAR A g00VARS[0][1, 1, 2, 1, 1,1,1])
			g00VARS[3].push(g00HTML[31][2]);//ADICIONAR A g00VARS[3]
			//IMPLICA QUE g00VARS[0, 1 Y 3] deben estar vacios???
		}

f0081=()=>//PASAR caracteres especiales o letras SUELTAS a id señas... //f0005()//s002()
		{	lOL(81);//lOUs(2);
			let v3 = 0;		
			switch (g00VARS[4][2].toLowerCase())
			{	case ('a'):v3 =  1;break;
				case ('á'):v3 =  1;break;
				case ('b'):v3 =  2;break;
				case ('c'):v3 =  3;break;
				case ('d'):v3 =  4;break;
				case ('e'):v3 =  5;break;
				case ('é'):v3 =  5;break;
				case ('f'):v3 =  6;break;
				case ('g'):v3 =  7;break;
				case ('h'):v3 =  8;break;
				case ('i'):v3 =  9;break;
				case ('í'):v3 =  9;break;
				case ('j'):v3 = 10;break;
				case ('k'):v3 = 11;break;
				case ('l'):v3 = 12;break;
				case ('m'):v3 = 13;break;
				case ('n'):v3 = 14;break;
				case ('ñ'):v3 = 15;break;
				case ('o'):v3 = 16;break;
				case ('ó'):v3 = 16;break;
				case ('p'):v3 = 17;break;
				case ('q'):v3 = 18;break;
				case ('r'):v3 = 19;break;
				case ('s'):v3 = 20;break;
				case ('t'):v3 = 21;break;
				case ('u'):v3 = 22;break;
				case ('ú'):v3 = 22;break;
				case ('v'):v3 = 23;break;
				case ('w'):v3 = 24;break;
				case ('x'):v3 = 25;break;
				case ('y'):v3 = 26;break;
				case ('z'):v3 = 27;break;
				case ('0'):v3 = 28;break;
				case ('1'):v3 = 29;break;
				case ('2'):v3 = 30;break;
				case ('3'):v3 = 31;break;
				case ('4'):v3 = 32;break;
				case ('5'):v3 = 33;break;
				case ('6'):v3 = 34;break;
				case ('7'):v3 = 35;break;
				case ('8'):v3 = 36;break;
				case ('9'):v3 = 37;break;
				case ('+'):v3 = 38;break;
				case (','):v3 = 39;break;
				case (' '):v3 = 42;break;
				//case ('.'):v3 = 37;break;
				default:v3 = 39;	
			}
			if (((g00VARS[28][2] == 1)&&(g00VARS[5][2]))||(g00VARS[6][2] == 1))//si i1 y idioma internacional o es una palabra inter
			{	f0082(s00SenPai[v3][1]);//GENERAR EL HTML DE LA IMAGEN QUE CORRESPONDE A v3 EN SEÑAS AMERICANA GENERAR html para una imagen tipo seña, dado el id imagen/seña
			}
			else
			{	f0082(s00SenPai[v3][g00VARS[27][2]]);//GENERAR EL HTML DE LA IMAGEN QUE CORRESPONDE A v3 EN SEÑAS LOCAL GENERAR html para una imagen tipo seña, dado el id imagen/seña
			}
		}

f0082=(par)=>//GENERAR html para una seña(imagen) tipo letra o palabra, dado el id imagen/seña pasado como parámetro //f0006(par)//s003(par)
		{	lOL(82);//lOUs(3);
			g00VARS[22][2] = '';
			for (let v9 = 0; v9 < par.length; v9++)//RECORRE TODAS LAS IMAGENES DE ESA "SEÑA" SE USA SI ESA SEÑA SE COMPONE DE OTRAS SEÑAS (COMO SI FUERAN SUBSEÑAS)
			{	//console.log('***  SEÑA (par=',par,' ,vSub(String glosa)=',vSub,')');
				//REVISAR BIEN LAS SALIDAS POR CONSOLA
				//let j = 0;//sub contador para señas en movimiento
				if(s00Senias[par][1])//si la seña contiene secuencias de movimiento
				{  	for (let h = 0; h <= s00Senias[par][3]; h++)//RECORRE LAS REPETICIONES PARA ESA SECUENCIA
					{	for (let j = 1; j <= s00Senias[par][2]; j++)//RECORRE TODAS LAS SECUENCIAS DEL MOVIMIENTO DE LA "SEÑA"
						{	f0091(v9,par,vSub,j);
						}
					}
				}
				else//la seña contiene repeticiones
				{	copia0 = par;//1A- Actualizar el id de la seña actual
					copia1 = s00Senias[par][2];//1B- Actualzar la capacidad de repeticiones de la seña actual
					if(copia0 == copia2)//2 Si la seña actual es igual a la seña anterior
					{	if(copia3 < copia1)//2 Si la repetición anterior es menor que la capacidad de repeticiones de la seña actual
						{ 	copia3 += 1;//avanza a la siguiente repetición
						}
						else
						{	copia3 = 1;//Reinicia la repeticion de señas
						}
					}
					else//2 Si la seña actual NO es igual a la seña anterior
					{	copia3 = 1;//Reinicia la repeticion de señas
					}
					f0091(v9,par,vSub,copia3);
					copia2 = copia0;//Actualiza el valor de la seña anterior para usarse en el siguiente ciclo
				}	
			}
		}
/*
f0083=()=>//s004()//g00HTML[26-31-36] INICIAR [ serie de señales y prosas //f0058(tap)
		{	lOU(83);//lOUs(4);
			//if (vREC)
			//{	g00HTML[26][2] += '[';
			//	g00HTML[31][2] += '[\'';
			//}
			g00HTML[26][2] = '';//INICIALIZAR la serie de señas animadas
			g00HTML[36][2] = '';//INICIALIZAR la serie de imagenes/ seña
			g00HTML[31][2] = '';//INICIALIZAR la serie de glosas animadas
		}
*/

f0084=()=>//L REINICIAR sizBan, sizCon y sizCsE permite que "Resize calcule de nuevo todo" la proxima vez que ocurra ese evento
		{	lOL(84);
			sizCon = 0;//contador de resize
			sizBan = 0;//bandera de resize
			sizCsE = 0;//Contador segundos de Espera por resize
		}

f0085=()=>//ANIMAR el interprete (i) con cada pulso mediante una serie de señales(g00VARS[1]) y prosas(g00VARS[3]) ya programadas //f0060()//	s006()//////sLOGS1[6] lOU() ANT60 00 - 
		{	lOL(85);//lOUs(6);
			let i;
			if((intBan)&&(!sizBan)&&(colLife7 !== undefined))//SI INTERPRETE Y NO OCURRE evento bandera RESIZE
			{	for (i = 0; i < colLife7.length; i++)//recorre todos los interpretes (local e internacional)
				{	casi = g00VARS[63][i];//trae el valor del contador para ese interprete(i)
					switch(g00VARS[0][i][casi])//(img) corresponde al número de la imagen de esa seña
					{	case (1):
							naSenia = s00Senias[g00VARS[1][i][casi]][4];//(SEN)nombre del archivo de la primer imagen de la seña
						break;
						case (2):
							naSenia = s00Senias[g00VARS[1][i][casi]][5];//(sen)nombre del archivo de la segunda imagen de la seña
						break;
						case (3):
							naSenia = s00Senias[g00VARS[1][i][casi]][6];//(sen)nombre del archivo de la tercer imagen de la seña
						break;
					}
					colLife7[i].setAttribute('src',naSenia);//num
					colPros3[i].innerHTML = g00VARS[3][i][casi];//num - pro
				}
				for (i = 0; i < g00VARS[1].length; i++)//Recorrer todos los interpretes en pantalla
				{	if(g00VARS[63][i] < g00VARS[62][i])//Si el contador de imagenes para ese interprete no ha terminado
					{	g00VARS[63][i] += 1;//INCREMENTAR de 1 en 1 los contadores de señas
					}
					else//Si el contador de imagenes para ese interprete ha terminado
					{	g00VARS[63][i] = 0;
					}
				}
			}
		}

f0086=()=>//ENCONTRAR todos los elementos de zProsa y z70 (tapa) //f0062()//s007()//
		{	lOL(86);//lOUs(7);
			colPros3 = document.getElementsByClassName("zProsa");
			colLife7 = document.getElementsByClassName("z70");
			//colTxtL = document.getElementsByClassName("zTxtL");//prueba
			f0087();//REINICIAR los contadores de señas //f0064()
			if(!intBan)//VENTANA sin Interpretes
			{	intBan = 1;//VENTANA con Interpretes
			}
		}

f0087=()=>//REINICIAR contadores de señas //f0064()//s008()//
		{	lOL(87);//lOUs(8);
			g00VARS[62] = [];//contador de señas animadas máximas de las tapas
		 	g00VARS[63] = [];//contador de señas animadas de las tapas
		 	for (i = 0; i < g00VARS[1].length; i++)//[0,30,23,34,47,0,0]
			{	g00VARS[62][i] = g00VARS[1][i].length - 1;//contador de señas animadas máximas
				g00VARS[63][i] = 0;//REINICIO contador de señas animadas
			}		
		}

f0088=()=>//ESPERAR un segundo y verificar que no exista un nuevo evento FOCUS para tomar ACCIONES       //LIBRE - s009()//INCREMENTAR en 1 los contadores de señas //f0065()
		{	lOG(88);
			focMem = focCon;//Guardar en memoria el conteo de focCon
			const segus = setTimeout(()=>//ESPERAR un segundo, verificar que no exista un nuevo evento FOCUS
			{	focCsE += 1;//Nuevo evento de esperar 1 segundo
				if(focCsE < 100)//Si lleva muchos segundos de espera sin poder terminar
				{	//console.log('ACABO de pasar1\n\n');
					if(focMem == focCon)//Si paso 1 segundo, no hubo más eventos onfocus y no hay orden de cancelar focus
					{	//console.log('ACABO de pasar 2 son iguales!!\n\n');
						f0097();//L REINICIAR focBan, focCon y focCsE permite que "onfocus vuelva a trabajar" la proxima vez que ocurra ese evento
						//console.log('Tomar acciones!!, gFoco=',gFoco);
						let vFo = 1;//Actualizar foco se activo
						if((gFoCo == gFoco)&&(gRuTa == gRuta)&&(aMBi == ambi))//Si el último foco es igual al foco anterior y es el mismo ambiente entonces
						{	vFo = 0;//Cancela actualizar foco
						}
						gFoCo = gFoco;//Actualiza el pasado de gFoco y gRuta y el ambiente
						gRuTa = gRuta;
						aMBi = ambi;
						if(vFo)//Actualizar foco sigue activo
						{	
	
					 // ... ... ... Aquí Voy!! ... ... ...
					 		f0030();//Si existe onFocus externo por ej: TABULADOR -> C ACTUALIZAR variables locales e internacionales del FOCO vFocoL, vFocoLe(multimedia), vFocoI, vFocoIe(multimedia) y vFocoT dependiendo de RUTA y posición actual del FOCO, trabaja de la mano de f0012() y f0016()
						}
						if(bNoSo)//Si la bandera de no sonido se activo..
						{	bNoSo = 0;//Desactivar la bandera de No Sonido
							console.log('Callar gFoco');
						}
						else//la bandera de no sonido NO se activo..
						{	//console.log('Decir gFoco');
							f0032();//PREPARAR la lectura de la casilla, o Tapa Informativa donde esta el foco (el usuario)
						}
						f0087();//L REINICIAR los contadores de señas
					}
					else
					{ 	//console.log('ACCION => NADA focMem ==! focCon; onFocus se disparo de nuevo, hay que esperar otro segundo');
						f0088();//(Ella misma) VUELVE A INICIAR LA ESPERA DE otro SEGUNDO
					}	
				}
				else//no vuelve a esperar otro segundo
				{	f0097();//L REINICIAR focBan, focCon y focCsE permite que "onFocus trabaje" la proxima vez que ocurra ese evento
				}
			}, 500);//duración de los milisegundos de espera sujerencia 500 poner en 4000 para pruebas, con 50000 puede ayudar a resolver el misterio de roto y segus		
		}

f0089=()=>//ENFOCAR y DECIR la Alerta
		{	lOU(89);
	 		line.focus();
			aFoco.scrollIntoView(centro);
			if(g00VARS[55][2])//si ya ocurrio el primer clic
			{	f0025(g00VARS[24][2],g00VARS[25][2]);////Decir() PREPARAR los anuncios local e internacional de la TAPA
			}
		}

f0090=()=>//BORRAR memoria de animación: señas y glosas//s011()
		{	lOL(90);//(11)
			g00VARS[0] = [];
			g00VARS[1] = [];//[0,30,23,34,47,0,0])
			g00VARS[3] = [];
		}
/*
s011=()=>//REINICIAR animación //f0069()
		{	lOUs(11);
			g00VARS[0] = [];
			g00VARS[1] = [];//[0,30,23,34,47,0,0])
			g00VARS[3] = [];
			console.log('E -i222- g00VARS[3] =',g00VARS[3]);
		}
*/
f0091=(v9,par,glo,j)=>//AÑADIR código HTML(SERIES DE NUMEROS DE SEÑAS Y TEXTOS GLOSA PARA LA ANIMACION) para la seña//s012(v9,par,glo,j)
		{   lOL(91);//lOUs(12);
			g00HTML[26][2] += par[v9]+',';//Número de la seña
			g00HTML[36][2] += j+',';//Número de la imagen de esa seña (secuencia/repeticion)
			g00HTML[31][2] += glo+'\',\'';//Glosa de esa seña
			if (g00VARS[19][2])//si fila de señas LIBRO
			{	g00VARS[22][2] += '<span class="cCero cAltu"><img src='+ s00Senias[par[v9]][j+3] +' alt="seña" class="y70x">';
				g00VARS[22][2] += '<span class="yProsaL">'+glo+'</span><span class="cFs0">-</span></span>';
			}
		}

f0092=()=>//hh10 HABILITAR bordes superior e inferior
		{	lOG(92);//
			if(!g00VARS[35][2])//Si no hay barrera de proteccion----poner botones grandes
			{	g00VARS[35][2] = 1;
				iStop.classList.remove('cX');
				f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
			}
		}

f0093=(reg)=>//Registrar primer click o interacción tipo toque (reg: interacción desde pantalla)
		{	lOG(93);
			if(!g00VARS[55][2])//SI NO HA OCURRIDO EL primer clic
			{	g00VARS[55][2] = 1;//ya ocurrio el primer click
				if(!reg)
				{	console.log('[Primer interacción desde teclado !!]');
				}	
			}
			if((reg)&&(!g00VARS[60][3]))//VIBRACIONES NO estan habilitadas (0:No 1Si)
			{	console.log('[Primer interacción por pantalla !!]')
				//if (window.navigator && window.navigator.vibrate)//Si pasa la prueba de soporte API VIBRATE de navegadores
				{	console.log('[Vibration API is supported]');
					g00VARS[60][3] = 1;//se activa la bandera del vibrador
				}
				//else//Si NO pasa la prueba de soporte API VIBRATE de navegadores
				//{	console.log('[Vibration API Not supported]');
				//}
			}
		}

f0094=(reg)=>//Arrow Up
		{	lOG(94);
			if(reg)
			{	f0093(reg);//REGISTRAR el primer clic
			}
			f0078();//L SONAR Clic
			f0076();//SI LA TAPA INFORMATIVA esta activa PASAR de TAPA a RUTA porque hay clic sobre algun boton "informativo" 
			if(gRuta == 3 || gRuta == 7 || gRuta == 8)
			{	f0117();//RESETEAR todos los apuntadores
				f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
			}
			if(gFoco > 0)
			{	gFoco -= 1;
			}
			if(reg)
			{	f0031(1);//posiciona el foco en la posición actual del cursor
			}
			else
			{	f0031();//posiciona el foco en la posición actual del cursor	
			}
		}

f0095=(reg)=>//Arrow Down
		{	lOG(95);
			if(reg)
			{	f0093(reg);//REGISTRAR el primer clic
			}
			f0078();//L SONAR Clic	
			f0076();//SI LA TAPA INFORMATIVA esta activa PASAR de TAPA a RUTA porque hay clic sobre algun boton "informativo" 
			if(gRuta == 3 || gRuta == 7 || gRuta == 8)
			{	f0117();//RESETEAR todos los apuntadores
				f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
			}
			if(gFoco < (visOK.length - 1))
			{	gFoco += 1;
			}
			else
			{	gFoco = (visOK.length - 1);
			}
			if(reg)
			{	f0031(1);//posiciona el foco en la posición actual del cursor y se enfoca
			}
			else
			{	f0031();//posiciona el foco en la posición actual del cursor sin enfocarse
			}
		}

f0096=(reg,scr,rev)=>//Click sobre el boton actual que tiene el "foco"
		{  	lOG(96);
			if(reg)
			{	f0093(reg);//REGISTRAR el primer clic
			}
			if(rev)
			{	switch(rev)//Tamaño del salto
				{	case 1:
						salTO = -1;//-1
					break;
					case 2:
						salTO = 5;//2,5
					break;
					case 3:
						salTO = -5;//-2,-5
					break;
					case 4:
						salTO = 25;//3,25
					break;
					case 5:
						salTO = -25;//-3,-25
					break;
					/*case 6:
						salTO = 4;//20
					break;
					case 7:
						salTO = -4;//-20
					break;*/
				}
			}
			else
			{	salTO = 1;
			}
			//console.log(' - - - rrrrr salTO=',salTO);
			f0078();//L SONAR Clic
			if(yKEYS[2][8]&&yKEYS[2][4])//Si ambos
			{	if(!g00VARS[55][3])//CLIC DENTRO DE UNA TAPA DE "notificación"
				{	f0077();//ACTUAR para "responder/solucionar" la notificación/alerta
				}
				else//CLIC DENTRO DE UNA "ruta" o "tapa informativa"
				{	//SI ESTA en una tapa informativa.. ES DECIR "RUTA"
					
					f0076();//PASAR de la capa TAPA a la capa RUTA porque estando en Tapa Info X se oprimió un botón diferente de "info"
					
					//SI ESTA en una RUTA..
					if((visOK[gFoco] == 0)||(gFoco == (visOK.length - 1)))//Si esta arriba o abajo
					{	f0017();//solo repite la info del limite inf/sup
					}
					else//Si no esta arriba o abajo
					{	
						console.log('gFoco=',gFoco,'; visOK[gFoco]=',visOK[gFoco]);
						switch (gRuta)
						{	case 1://AJUSTES 1
								switch (visOK[gFoco])//switch (gFoco)
								{	case 1:hh23();break;
									case 2:hh24();break;
									case 3:hh80(rev);break;//3
									case 4:hh81(rev);break;//4
									case 5:hh77(rev);break;//5
									case 6:hh78(rev);break;//6
									case 7:hh79(rev);break;//7
									case 8:hh19(rev);break;//3
									case 9:hh29(rev);break;//4
									case 10:hh30(rev);break;//5
									case 11:hh31(rev);break;//6
									case 12:hh32(rev);break;//7
									case 13:hh33(rev);break;//8
									case 14:hh20(rev);break;//9
									case 15:hh83(rev);break;//10
									case 16:hh84(rev);break;//11
									case 17:hh27(rev);break;//10
									case 18:hh28(rev);break;//11
									case 19:hh21(0,rev);break;//12
									case 20:hh88(0,rev);break;//29
									case 21:hh88(0,rev);break;//30
									case 22:hh88(0,rev);break;//...
									case 28:hh45(0,rev);break;//37
									case 29:hh46(0,rev);break;//38
									case 30:hh64(0,rev);break;//39
									case 31:hh64(0,rev);break;//...
									case 32:hh64(0,rev);break;//41
									case 33:hh64(0,rev);break;//42
									case 34:hh64(0,rev);break;//43 44						
									case 36:hh87(0,rev);break;//45 46
								}
							break;
							case 2://AJUSTES 2 ajustes de info	
								switch (visOK[gFoco])//switch (gFoco)
								{	case 1:hh100(rev);break;
									case 2:hh101(rev);break;
									case 3:hh25(0,rev);break;
									case 4:hh26(0,rev);break;
									case 5:hh102(rev);break;
									case 6:hh103(rev);break;
									case 7:hh104(rev);break;
									case 8:hh105(rev);break;
									case 9:hh106(rev);break;
									case 10:hh107(rev);break;
									case 11:hh108(rev);break;
									case 12:hh109(rev);break;
								  	case 13:hh110(rev);break;
									case 14:hh111(rev);break;
									case 15:hh6(0,rev);break;
								}
							break;
							case 3://ANUNCIOS NOTA! ESTO SE PUEDE PROGRAMAR POR FUERA DEL SWITCH JUNTO CON case 8:
								switch (visOK[gFoco])//switch (gFoco)
								{	case 1:hh6(1,rev);break;
									case 2:hh6(2,rev);break;
									case 3:hh6(3,rev);break;
									case 4:hh6(4,rev);break;
									case 5:hh6(5,rev);break;
									case 6:hh6(6,rev);break;
									case 7:hh6(7,rev);break;
									case 8:hh6(8,rev);break;
									case 9:hh6(9,rev);break;
									case 10:hh6(10,rev);break;
								}
							break;
							case 4://MENÚ PRINCIPAL	
								switch (visOK[gFoco])//switch (gFoco)
								{	
									case 1:hh5(0,rev);break;//3
									//case 1:hh48(0,rev);break;//3
									
									case 2:hh9(0,rev);break;//4
		
								//	case 3:hh36(0,rev);break;//1
								//	case 4:hh35(0,rev);break;//2
		
									case 5:hh6(0,rev);break;
									case 6:hh7(0,rev);break;
									//case 7:hh112(0,rev);break;
									case 8:hh6(0,rev);break;
									
									case 9:hh6(0,rev);break;
									// - - - +1:
									case 10:hh8(0,rev);break;
									case 11:hh8(0,rev);break;
									case 12:hh6(0,rev);break;
									case 13:hh6(0,rev);break;
									case 14:hh6(0,rev);break;
									case 15:hh6(0,rev);break;
									case 16:hh6(0,rev);break;
									case 17:hh6(0,rev);break;
									case 18:hh6(0,rev);break;
									
	
									case 19:hh71(0,rev);break;
									case 20:hh6(0,rev);break;
									case 21:hh98(0,rev);break;
									case 22:hh99(0,rev);break;//Reiniciar
									
								}
							break;
							case 5://MULTIMEDIA: DESCRIPCION DE IMAGENES, GUÍONES DE VIDEO O INFOGRAMAS	
								switch (visOK[gFoco])//switch (gFoco)
								{	case 1:hh17(0,rev);break;
									case 2:hh12(0,rev);break;
									case 3:hh12(0,rev);break;
								}
							break;
							case 6://CASOS (info general urgente/vital: se expone prblema y luego se sugiere la solución por ejemplo ¿que hacer en caso de emergencia - TOMADA DE: Colegio de Juan David) //ANTES: LIBRE
								switch (visOK[gFoco])//switch (gFoco)
								{	case 1:hh1(0,rev);break;
									case 2:hh2(0,rev);break;
									case 3:hh3(0,rev);break;
									case 4:hh4(0,rev);break;
									//case 5:hh(0,rev);break;
									//case 6:hh(0,rev);break;
									case 7:hh6(0,rev);break;
									case 8:hh6(0,rev);break;
									case 9:hh6(0,rev);break;				
								}
							break;
							/*
							case 7://SALA ACCESO	
								switch (visOK[gFoco])//switch (gFoco)
								{	case 1:hh6(1,rev);break;
									case 2:hh50();break;
									case 3:hh51();break;
									//case 4:hh54();break;
									case 5:hh53();break;
									case 6:hh56();break;
									case 7:hh57();break;
									case 8:hh58();break;
									case 9:hh59();break;
									//case 10:hh60();break;				
								}
							break;
							*/
							case 8://PREGUNTAS FRECUENTES
								switch (visOK[gFoco])//switch (gFoco)
								{	case 1:hh6(1,rev);break;
									case 2:hh6(2,rev);break;
									case 3:hh6(3,rev);break;
									case 4:hh6(4,rev);break;
									case 5:hh6(5,rev);break;
									case 6:hh6(6,rev);break;
									case 7:hh6(7,rev);break;
									case 8:hh6(8,rev);break;
									case 9:hh6(9,rev);break;
									case 10:hh6(10,rev);break;		
								}
							break;
						}
					}
					if(scr)
					{	f0031(1);//posiciona el foco en la posición actual del cursor
					}
					else
					{	f0031();//posiciona el foco en la posición actual del cursor
					}
					//quitar la siguiente linea??? creo que sobra
					f0049();//OCULTAR el botón de deshacer (UNDO) y/o menu cuando no se necesiten
				}
			}
		}

f0097=()=>//L REINICIAR focBan, focCon y focCsE permite que "onfocus vuelva a trabajar" la proxima vez que ocurra ese evento
		{	lOL(97);
			focCon = 0;//contador de focus
			focBan = 0;//bandera de focus
			focCsE = 0;//Contador segundos de Espera por focus	
		}

f0099=()=>//ACTIVAR icono central de Pantalla Minimizada
		{	lOG(99);
			g00VARS[20][2] = 1;//notificación 1 activada de ventana minimizada!
	 		bMin = 1;//Bandera on
	 		iMaxim.classList.add('cX');//oculte boton max
	 		iCLIC.classList.remove('cX');//muestre boton clic
		}

f0101=()=>//REGRESAR color texto-boton previo
		{	lOG(101);
			hh85();//OCULTAR los botones de color de texto/fondo
			switch(g00VARS[34][2])
			{	case 0:
					g00VARS[34][2] = 3;
					hh35();//Oscurecer el color del fondo/boton
					mIr001B[17][4] = 1;			
					//r001B[4][17] = 1;
				break;
				case 1:
					g00VARS[34][2] = 0;
					hh36();//L ESTILIZAR: texto blanco, botón negro, fondo claro	
					mIr001B[18][4] = 1;			
					//r001B[4][18] = 1;
				break;
				case 2:
					g00VARS[34][2] = 1;
					hh35();//L ESTILIZAR: texto negro, botón blanco, fondo oscuro
					iBody.style.setProperty('--cblwh2','yellow');
					mIr001B[15][4] = 1;			
					//r001B[4][15] = 1;
				break;
				case 3:
					g00VARS[34][2] = 2;
					hh36();//L ESTILIZAR: texto blanco, botón negro, fondo claro	
					iBody.style.setProperty('--cblwh1','yellow');
					mIr001B[16][4] = 1;//15     11>18			
					//r001B[4][16] = 1;//15     11>18
				break;
			}
			f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
		}

f0102=()=>//AJUSTAR el tamaño del texto Y CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
		{	lOG(102);//mIS(34);
			f0028();//ajusta el tamaño del texto
			f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
		}

f0103=()=>//hh13   PREPARAR el cambio de estado de REPRODUCIR [PLAY] o\n\tPAUSAR [PAUSE] del video A de YouTube del menu D
		{	lOG(103);
			f0104();
		}

f0104=()=>//hh14 CAMBIAR el estado actual del control de video de YouTube (REPRODUCIR[PLAY] <= => PAUSAR[PAUSE])
		{	lOG(104);
			switch (l01Taps[4][1])//OJO l01Taps NO ESTA AUN DEFINIDO!!!
			{	case 2:
					if(vOkYT)
					{	f0106();
					}
				break;
				case 1:
					hh17();
				break;
			}
		}

f0105=()=>//hh88 RESET de velocidad -> 1.0
		{	lOG(105);
			if(g00VARS[44][2] != 1)
			{	hh76();//OCULTAR velocidades del reproductor
				g00VARS[44][2] = 1;//velocidad 0 - 3.6
				mIr001B[5][4] = 1;			
				//r001B[4][5] = 1;
			}
		}

f0106=()=>//hh16 PAUSAR [PAUSE] el video de YouTube
		{	lOG(106);
			vPlayer.pauseVideo();
		}

f0107=()=>//ACTUALIZAR el idioma, la seña (desde wIdi y wSign) y la ruta #
		{	lOG(107);
			/*
			for (var i = wIdi.length - 1; i >= 1; i--)//Recorre el array de idiomas
			{	r002A[wIdi[i][3]][1]= i +', '+ wIdi[i][1];//toma el idioma de wIdi;
				if(g00VARS[27][2] == wIdi[i][3])//id clave de ese idioma = id idioma
				{	traer = i +', '+wIdi[i][0];
					//console.log(' - - - rrr bingo! i=',i,'; traer=',traer);
				}
			}*/
			let ee = 1;
			// - - - wIDI:
			for (var i = 1; i < wIdi.length; i++)//Recorre el array de idiomas
			{	if(wIdi[i][5] == 1)//si es visible
				{	//console.log(' - - - rrr bingo! i=',i,'; wIdi[i][1]=',wIdi[i][1],'; ee=',ee);
					//for (var j = wIdi.length - 1; j >= 1; j--)//Recorre el array de idiomas
					//{	
					wIDI[ee] = [wIdi[i][0],wIdi[i][1],wIdi[i][2],wIdi[i][3],wIdi[i][6]];
					ee++;
					//}
				}
			}
			ee = 1;
			// - - - wSIGN:
			for (var i = 1; i < wSign.length; i++)//Recorre el array de señas
			{	if(wSign[i][5] == 1)//si es visible
				{	//console.log(' - - - rrr bingo! i=',i,'; wSign[i][1]=',wSign[i][1],'; ee=',ee);
					wSIGN[ee] = [wSign[i][0],wSign[i][1],wSign[i][2],wSign[i][3],wSign[i][4],wSign[i][6],wSign[i][7]];
					ee++;
				}
			}
			// - - - ASIGNAR STRINGS DE LAS SEÑAS PARA CADA IDIOMA
			for (var i = wIDI.length - 1; i >= 1; i--)//Recorre el array de idiomas
			{	mIr002A[1][wIDI[i][3]]= i +', '+ wIDI[i][1];//toma el idioma de wIDI;
				//r002A[wIDI[i][3]][1]= i +', '+ wIDI[i][1];//toma el idioma de wIDI;
				//console.log(' - - - rrr 10 |> Flag  ->  mIr002A[1][wIDI[i][3]]=',mIr002A[1][wIDI[i][3]]);
				if(wIDI[i][3] == 1)//Bingo es el ingles (ver wIdi)
				{	orig[0] = i +', '+ wIDI[i][1];//Crea la copia original del idioma ingles
				}
				for (var j = wSIGN.length - 1; j >= 1; j--)//Recorre el array de idiomas
				{	if(wSIGN[j][3] == 3)//Bingo es la ASL (ver wSign)
					{	orig[1] = j +', '+ wSIGN[j][1];//Crea la copia original de la ASL en ingles
					}
					if(wSIGN[j][3] == wIDI[i][4])//Si el idApp de la seña es igual a la señaIniPred del idioma wIDI[i]
					{	mIr002A[2][wIDI[i][3]]= j +', '+ wSIGN[j][1];//toma la seña de wSIGN;
						//r002A[wIDI[i][3]][2]= j +', '+ wSIGN[j][1];//toma la seña de wSIGN;
					}
				}
				if(g00VARS[27][2] == wIDI[i][3])//id clave de ese idioma = id idioma
				{	g00VARS[67][2] = wIDI[i][4];//idi key de la seña por defecto
				}
			};
			f0121();//ACTUALIZAR el texto del botón señas			
			// - - - LISTA FIJA visible 1 (wPAPA1): 
			wPAPA1 = [];//Borra wPAPA2, hace de nuevo la lista wPAPA2		
			wPAPA1[0]=[0];
			ee = 1;
			for (var i = 1; i < vPAPA1.length; i++)//Recorre el array de continentes
			//for (var i = 1; i < wPapa1.length; i++)//Recorre el array de continentes
			{	//if(wPapa1[i][3] == 1)//si es visible
				//{	

					wPAPA1[ee] = [];

					for (var k = 0; k < vPAPA1[i].length; k++)
					{	wPAPA1[ee][k] = vPAPA1[i][k];
					}
					wPAPA1[ee][1] = ee;
								
					//wPAPA1[ee] = [wPapa1[i][2],ee,wPapa1[i][4],'','','','','',wPapa1[i][0],wPapa1[i][ext+5],wPapa1[i][ext+6],wPapa1[i][ext+7]];
					//           [wPapa2[i][2],ff+1,wPapa2[i][4],'','','','','',wPapa2[i][0],wPapa2[i][ext+5],wPapa2[i][ext+6],wPapa2[i][ext+7]];
					
					
					ee++;
				//}
			}



			//wPAPA  1 2 3 4 5 6 7 8 9 10
			//r002B    1211109 8 7 6 5
			//       0 1 2 3 4 5 6 7 8 9
//			papas = [7,1,1,1,1,1,1,1,1,0,0,''];//antes 7,1,1,1,1,x después -> 7,1,1,1,2,5,2,4,2,2,0 Arreglo con la ruta actualizada activa de todos los padres: wPapa1[0] wPapa2[1] wPapa3[2] wPapa4[3] wPapa5[4] wPapa6[5] wPapa7[6] wPapa8[7] wPapa9[8] wPapa10[9] ; [10]almacena la última casilla antes del primer cero que encuentre (fin de la ruta) y [11] el string de la ruta
			//				 x


			//Simulación de un cambio en un botón de ruta [1-8]:
//			let ini = 0;//[0-8]   4 ini  ini!=9 ini = número de la casilla(lista) que cambio (wPAPA5[4]-(1>2))
			//nuevo valor 1=>2:
//			papas[ini] = 7;
			//despues 7,1,1,1,2,5,2,4,2,2,0 Arreglo con la ruta actualizada activa de todos los padres: wPapa1[0] wPapa2[1] wPapa3[2] wPapa4[3] wPapa5[4] wPapa6[5] wPapa7[6] wPapa8[7] wPapa9[8] wPapa10[9] ; [10]almacena la última casilla antes del primer cero que encuentre (fin de la ruta) y [11] el string de la ruta
			
			// 7, 1, 1, 1, 2, 5, 2, 4, 2, 2, 0, '7/1/1/1/2/5/2/4/2/2', 0, 0
			//[7, 1, 1, 1, 2, 5, 2, 4, 2, 2, 0, '7/1/1/1/2/5/2/4/2/2', 0, 0]
			
			//[1, 1, 1, 1, 2, 5, 2, 4, 2, 2, 0, '7/1/1/1/2/5/2/4/2/21', 0, 0]

			//[1, 1, 1, 1, 2, 5, 1, 0, 0, 0, 0, 1, 0, 0]
			//[1, 1, 1, 1, 2, 5, 1, 0, 0, 0, 0, 1, 0, 0]
			//[2, 1, 5, 1, 2, 5, 1, 0, 0, 0, 0, 2, 0, 0]
			//[3, 1, 5, 1, 2, 5, 1, 0, 0, 0, 0, 3, 0, 0]
			//[4, 1, 5, 1, 2, 5, 1, 0, 0, 0, 0, 4, 0, 0]
			//[7, 1, 5, 1, 2, 5, 1, 0, 0, 0, 0, 7, 0, 0]
			//[1, 1, 5, 1, 2, 5, 1, 0, 0, 0, 0, 1, 0, 0]
			//        1,1,1,1,2,5,1,0,0,0,0,1,0,0  -14-
			//casos: 0 = 7; 4 = 2;
			//casos: 0 = 2
			//casos: 0 = 4
			//OCULTAR todos los puntos de encuentro a partir de la lista que cambio ini (5-12)
			


			//carga inicial de las listas y de papas
			//console.log(' - - - rrrrr f0107');
			f0124(0);//ACTUALIZAR las tablas siguientes wPAPAx de las ramas a partir de la lista/columna(ini)[0-8] que cambio de valor, si no existen tablas las deja vacias y oculta los botones respectivos de los sitios 
			//console.log('|> Flag 107 -> 125');
			f0125(0);//ESTABLECER O ACTUALIZAR el string de los botones de los sitios.


			/*console.log(' - - - rrr ee=',ee);		
			console.log(' - - - rrr wIDI=',wIDI);
			const oldArray = [
  				//[{ name: 'Tom', age: 28 },
 			 	//{ name: 'John', age: 32 }]//,
  				//[{ name: 'Tomas', age: 23 },
 			 	//{ name: 'Johnas', age: 33 }]
			];
			const json = JSON.stringify(oldArray);
			console.log('- - - 1 rrr json: ', json);
			//const newArray = JSON.parse(json);
			const newArray = [];*/
			//newArray[0][1].name = 'John new';
			//newArray[0][0].name = 'Tom new';
			//newArray[1].length = 0;//reemplazar toda una fila
			//newArray[1] = [{ name: 'Rocky', age: 50 }];//reemplazar toda una fila
			//newArray[2] = [{ name: 'Yoly', age: 49 }];//Adicionar toda una fila
			/*newArray[1] = [1,2,3,4,5];//reemplazar toda una fila
			console.log('- - - 2 rrr New array: ', newArray);
			console.log('- - - 3 rrr Old array: ', oldArray);
					*/

			/*
			console.log(' - - - rrr wIDI=',wIDI);//Array hijo de wIdi	
			for (var i = wIDI.length - 1; i >= 1; i--)//Recorre el array de idiomas
			{	r002A[wIDI[i][3]][1]= i +', '+ wIDI[i][1];//toma el idioma de wIdi;
				if(g00VARS[27][2] == wIDI[i][3])//id clave de ese idioma = id idioma
				{	traer = i +', '+wIDI[i][0];
					console.log(' - - - rrr bingo! i=',i,'; traer=',traer);
				}
			}
			*/

		}

f0108=()=>//hh18 DESHABILITAR bordes superior e inferior
		{	lOG(108);
			if(g00VARS[35][2])//quitar barrera de proteccion   ----botones grandes
			{	g00VARS[35][2] = 0;
				iStop.classList.add('cX');
				f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
			}
		}

f0109=()=>//hh89 QUITAR la presentación
		{	lOG(109);
			if(g00VARS[11][2] == 3)
			{ 	iBrail.classList.remove('cX');
			}
			ini1 = false;//Desactiva la marquesina local
			ini2 = false;//Desactiva la marquesina en ingles
			iV2a.style.backgroundColor = 'grey';
			iV2b.style.backgroundColor = 'grey';
			iV2c.style.backgroundColor = 'grey';
			//iV2d.style.backgroundColor = 'grey';
			iPreAV.innerHTML = '';
			if(g00VARS[5][2])//Si esta i1..
			{	inteL.innerHTML = '';
				iNot2.innerHTML = '';
			}
			iNoti.innerHTML = '';
			inteR.innerHTML = '';
			iPRESE.classList.add('cX');
			//iCodQ.classList.add('cX');
			iPos1.classList.remove('cX');
			iPos2.classList.remove('cX');
			iStop.classList.remove('cX');//muestre la barrera
			if((g00VARS[45][2] == 1)||(g00VARS[45][2] == 7))//si es modo texto pequeño o señas
			{	iStop.classList.add('cX');//oculte de nuevo la barrera
			}
		}

f0110=()=>//hh90 PERMITIR el sonido despues de un tiempo
		{	lOG(110);
			setTimeout(()=>//Espera para cambiar la orden
			{	if(bNoSo)//Si la bandera de no sonido se activo..
				{	bNoSo = 0;//Desactivar la bandera de No Sonido
					console.log('Decir gFoco');
				}
			}
			,500);
		}

f0111=(can)=>//hh91 CANCELAR salida de audio y vibraciones
		{	lOG(111);
			iV3d.style.backgroundColor = 'white';	
			f0045();//DETENER vibraciones parpadeos e intervalos pendientes	
			if(canTts.speaking)//Si esta dando un anuncio
			{	//iV2e.style.backgroundColor = 'yellow';//	
				canTts.cancel();//cancela los anuncios que están corriendo
				if(canTts.speaking)//Si aún esta dando un anuncio
				{	iV3c.style.backgroundColor = 'red';
				}
				else
				{	iV3c.style.backgroundColor = 'green';
				}
				console.log('<<<<<<< D E T E N I D O  ____________________D E T E N I D O_____________________________D E T E N I D O____________>>>>>>>');
				if(can)//Si desde f0025() o de f0076() hay orden de cancelar permiso de pasar al anuncio uno
				{	g00VARS[12][2] = false;//Cancela el permiso de pasar al anuncio uno
					iV3b.style.backgroundColor = 'red';
				}
				else
				{	iV3b.style.backgroundColor = 'green';
				}
			}
			else
			{	//iV2e.style.backgroundColor = 'purple';
			}
		}

f0112=()=>//hh92 ACTIVAR el manejador de marquesinas handleMarquee() - tomado de https://www.w3docs.com/tools/code-editor/2123#google_vignette
        {	lOG(112);
			f0113();//ENCONTRAR todos los elementos de marquesina

        	/*const marquee = document.querySelectorAll('.marquee');//https://www.w3schools.com/JSREF/met_document_queryselectorall.asp
        	let speed = 2;
        	let lastScrollPos = 0;
        	let timer;*/
			marquee.forEach(f0114);//https://www.w3schools.com/jsref/jsref_foreach.asp
			if(g00VARS[5][2])//Si esta i1
			{	marquei.forEach(f0115);//https://www.w3schools.com/jsref/jsref_foreach.asp
			}
		}

f0113=()=>//hh93 ENCONTRAR todos los elementos de marquesina
		{	lOG(113);//
			marquee = document.querySelectorAll('.marquee');//https://www.w3schools.com/JSREF/met_document_queryselectorall.asp
			//console.log('marquee=',marquee);
			if(g00VARS[5][2])//Si esta i1
			{	marquei = document.querySelectorAll('.marquei');//https://www.w3schools.com/JSREF/met_document_queryselectorall.asp
			}
			/*if(!intBan)//VENTANA sin Interpretes
			{	intBan = 1;//VENTANA con Interpretes
			}*/
		}

f0114=(el)=>//hh94 PONER a marchar la marquesina local
		{	lOG(114);//
			//bPro[0] = 1;//Habilita la bandera bPro[0]
			console.log('... 7 contPre[0]=',contPre[0],'; contPre[1]=',contPre[1]);
			let kontainer = el.querySelector('.inner');//https://www.w3schools.com/jsref/met_document_queryselector.asp
			let kontent = el.querySelector('.inner > *');//https://www.w3schools.com/css/css_combinators.asp
			//Get total Height
			let klHeight = kontent.offsetHeight;//aquí mide la altura del objeto de texto LOCAL en px que se va a mostrar
			nFila[0] = Math.round(klHeight/hFila);//Cantidad de filas que tiene el texto LOCAL que se va a presentar
			nFila[2] = Math.round(iFila.offsetHeight/hFila);//Capacidad de filas actual de la marquesina oculta
			nFila[3] = Math.round(iFila.offsetWidth);//Ancho de la marquesina oculta
			nFila[4] = Math.round((iFila.offsetWidth * 3)/hFila);//Capacidad de espacio para escribir letras, 3l 3 es porque pueden caber 3 veces más letras horizontal que vertical
			nFila[5] = nFila[4]*nFila[2];//Capacidad teorica de la marquesina para mostrar letras
			aafil = nFila[5]*150;//100 es una constante estimada para cuadrar los milisegundos que deben ocurrir para poder tener tiempo de leer
			iNoti.style.height = hFila * nFila[2] + 'px';//Reajusta el alto de la marquesina local para que el texto entre entero sin fraccion
			iNot2.style.height = hFila * nFila[2] + 'px';//Reajusta el alto de la marquesina ingles para que el texto entre entero sin fraccion
			progreso = Math.round(iNot2.offsetHeight);//;parseInt(iNot2.offsetHeight/2);//la mitad del alto de la marquesina!!
			progresi = progreso;//posición vertical de la marquesina local
			progress = progreso;//posición vertical de la marquesina en ingles
			ini1 = false;//Desactiva la marquesina local
			iV2a.style.backgroundColor = 'orange';
			fiLa[0] = 0;
			function koop()
			{	progress = progress - (hFila * nFila[2]);//deltAV;//10;//(speed * kmar);
				
				//console.log(' - - - ==111 uuu progress=',progress+', ini1=',ini1);
			
				if(fiLa[0] >= nFila[0])//si la fila es mayor o igual que las filas del objeto que debe momstrar..  debe terminar de subir más filas STOP local!!!
				{	iV2b.style.backgroundColor = 'black';
					ini1 = false;//Desactiva la marquesina local
					console.log(' - - - ==222 ini1=',ini1);
					if(g00VARS[5][2])//Si esta i1
					{	if(!ini2)//Espera a ver Si la bandera ini2(ingles) también esta off, aquí espera a que ini2 sea = a 0, si esta on es porque el ingles no ha terminado
						{	f0144();//ESPERAR un momento y dar la orden de cambiar de anuncio
						}
					}
					else//Si no hay ingles..
					{	f0144();//ESPERAR un momento y dar la orden de cambiar de anuncio
					}
					console.log('... 3 contPre[0]=',contPre[0],'; contPre[1]=',contPre[1]);
				}
				fiLa[0] = fiLa[0] + nFila[2];//sube la filas posibles que tenga la marquesina
				if(ini1)//si no hay bloqueo.. si tengo orden de pintar pinto y luego espero para dar la orden de iniciar otro ciclo
				{	//console.log(' == uuu progress=',progress+'; klHeight=',klHeight+' ini1=',ini1);
					kontainer.style.transform = 'translateY(' + progress + 'px)';//para mostrar todo el anuncio progress debe barrer desde progreso(+1/2 marque) hasta klHeight(-1)
					setTimeout(()=>
					{	koop();
					}
					,aafil);//CONTROL CAMBIO DE BRINCO DEL TEXTO en la presentación AV
				}
				//Si hay bloqueo ini1 = 0/false se sale, termina aquí la función, y ya no vuelve a esperar
			}
			setTimeout(()=>//inicio del ciclo..
			{	ini1 = true;//activa la pintada y el ciclo
				iBody.style.setProperty('--cOL','white');//(g00VARS[68][2]/5)+'px, 45px)')
				iBody.style.setProperty('--cOw','black');//(g00VARS[68][2]/5)+'px, 45px)')
				koop();
			}//Activa la marquesina
			,1500);//Tiempo antes de iniciar el texto de la marquesina, util mientras se carga la imagen
		}
/*
f0114=(el)=>//PONER a marchar la marquesina local
		{	hOG(94);//
			let kontainer = el.querySelector('.inner');//https://www.w3schools.com/jsref/met_document_queryselector.asp
			let kontent = el.querySelector('.inner > *');//https://www.w3schools.com/css/css_combinators.asp
			//Get total width
			let klWidth = kontent.offsetWidth;//https://www.w3schools.com/jsref/prop_element_offsetwidth.asp
			//console.log('elWidth=',klWidth);
			//Duplicate content
			let klone = kontent.cloneNode(true);//https://www.w3schools.com/jsref/met_node_clonenode.asp
			kontainer.appendChild(klone);//https://www.w3schools.com/jsref/met_node_appendchild.asp
			//let progress = 0;
			//let progress = parseInt(iBody.offsetWidth/2);//la mitad del ancho!!
			//progress = parseInt(iNot2.offsetWidth/2);//la mitad del ancho!!
			//iBody.style.setProperty('--cDelta',progress+'px');
			//console.log('progress='+progress+'px');
			ini1 = false;//Desactiva la marquesina local
			function koop()
			{	progress = progress - (speed * 3);
				if(progress <= klWidth * -1)
				{ 	progress = 0;
				}
				if(ini1)
				{	//console.log('progress=',progress+'; speed =',speed+' klWidth=',klWidth+' ini1=',ini1);
					kontainer.style.transform = 'translateX(' + progress + 'px)';//https://www.w3schools.com/css/css3_3dtransforms.asp
					//container.style.transform += 'skewX(' + speed * 0.1 + 'deg)';//https://www.w3schools.com/css/tryit.asp?filename=trycss3_transform_skewx
					window.requestAnimationFrame(koop);//https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
				}
			}
			setTimeout(()=>
			{	ini1 = true;
				koop()
			}//Activa la marquesina
			,50);//Tiempo para bloquear un koop anterior e iniciar un nuevo
		}
*/
f0115=(el)=>//hh95 PONER a marchar la marquesina en ingles
		{	lOG(115);//

			//bPro[1] = 1;//Habilita la bandera bPro[1]
			let container = el.querySelector('.inner');//https://www.w3schools.com/jsref/met_document_queryselector.asp
			let content = el.querySelector('.inner > *');//https://www.w3schools.com/css/css_combinators.asp
			//Get total Height
			let elHeight = content.offsetHeight;//aquí mide la altura del objeto de texto EN INGLES en px que se va a mostrar
			nFila[1] = Math.round(elHeight/hFila);//Cantidad de filas que tiene el texto EN INGLES que se va a presentar
			

			//nFila[2] = Math.round(iFila.offsetHeight/hFila);//Capacidad de filas actual de la marquesina oculta
			/*
			iNoti.style.height = hFila * nFila[2] + 'px';//Reajusta el alto de la marquesina local para que el texto entre entero sin fraccion
			iNot2.style.height = hFila * nFila[2] + 'px';//Reajusta el alto de la marquesina ingles para que el texto entre entero sin fraccion
			progreso = Math.round(iNot2.offsetHeight);//;parseInt(iNot2.offsetHeight/2);//la mitad del alto de la marquesina!!
			progresi = progreso;//posición vertical de la marquesina local
			progress = progreso;//posición vertical de la marquesina en ingles
			*/

			ini2 = false;//Desactiva la marquesina INGLES
			iV2c.style.backgroundColor = 'orange';
			fiLa[1] = 0;

			console.log(' == uuu progresi=',progresi+'; elHeight=',elHeight+' ini2=',ini2);
			
			function loop()
			{	progresi = progresi - (hFila * nFila[2]);//deltAV;//10;//(speed * kmar);
				console.log(' - - - ==111 uuu progresi=',progresi+', ini2=',ini2);
			
				if(fiLa[1] >= nFila[1])//si la fila es mayor o igual que las filas del objeto que debe momstrar..  debe terminar de subir más filas STOP local!!!
				{	iV2c.style.backgroundColor = 'black';
					console.log(' - - - ==222 uuu progresi=',progresi+', ini2=',ini2);
					ini2 = false;//Desactiva la marquesina local
					if(!ini1)//Espera y mira si la bandera ini1(local) esta off, aquí espera a que ini1 sea = a 0, si esta on es porque el local no ha terminado
					{	f0144();//ESPERAR un momento y dar la orden de cambiar de anuncio
					}
					console.log('... 4 contPre[0]=',contPre[0],'; contPre[1]=',contPre[1]);
				}
				fiLa[1] = fiLa[1] + nFila[2];//sube la filas posibles que tenga la marquesina
				if(ini2)//si no hay bloqueo.. si tengo orden de pintar pinto y luego espero para dar la orden de iniciar otro ciclo
				{	container.style.transform = 'translateY(' + progresi + 'px)';//para mostrar todo el anuncio progress debe barrer desde progreso(+1/2 marque) hasta elHeight(-1)
					setTimeout(()=>
					{	loop();
					}
					,aafil);//CONTROL CAMBIO DE BRINCO DEL TEXTO en la presentación AV
				}
				//Si hay bloqueo ini2 = 0/false se sale, termina aquí la función, y ya no vuelve a esperar
			}
			setTimeout(()=>//inicio del ciclo..
			{	ini2 = true;//activa la pintada y el ciclo
				iBody.style.setProperty('--cOI','lightyellow');
				iBody.style.setProperty('--cOy','black');
				loop();
			}//Activa la marquesina
			,1000);//Tiempo antes de iniciar el texto de la marquesina, util mientras se carga la imagen


			/*
			nmarqi = 1;
			bPro[1] = 1;//Habilita la bandera bPro[1]
			let container = el.querySelector('.inner');//https://www.w3schools.com/jsref/met_document_queryselector.asp
			let content = el.querySelector('.inner > *');//https://www.w3schools.com/css/css_combinators.asp
			//Get total width
			let elHeight = content.offsetHeight;//https://www.w3schools.com/jsref/prop_element_offsetwidth.asp
			nFila[1] = Math.round(elHeight/hFila);//parece que el resultado siempre es un entero positivo
			//Duplicate content
			let clone = content.cloneNode(true);//https://www.w3schools.com/jsref/met_node_clonenode.asp
			container.appendChild(clone);//https://www.w3schools.com/jsref/met_node_appendchild.asp
			ini2 = false;//Desactiva la marquesina en ingles
			iV2c.style.backgroundColor = 'orange';
			function loop()
			{	progresi = progresi - (speed * kmar);
				if(progresi <= (progreso - elHeight) && bPro[1])
				{  	bPro[1] = 0;//deshabilita la bandera bPro[1]
					nmarqi += 1;
					if(nmarqi == 2)
					{	iV2c.style.backgroundColor = 'black';
					}
					console.log('nmarqi=',nmarqi);
					if(nmarqi == 3)
					{ 	console.log('nmarqi = 3 STOP!!!');
						ini2 = false;//Desactiva la marquesina en ingles
						if(!ini1)
						{	contPre[0] = 1;//Orden de pasar al siguiente anuncio
							console.log('nmarqi ORDEN 3 DE SEGUIR AL SIGUIENTE ANUNCIO!!!');	
						}
					}
				}
				if(progresi <= elHeight * -1)
				{ 	progresi = 0;
					bPro[1] = 1;//Habilita la bandera bPro[1]
				}
				if(ini2)
				{	container.style.transform = 'translateY(' + progresi + 'px)';//https://www.w3schools.com/css/css3_3dtransforms.asp
					window.requestAnimationFrame(loop);//https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
				}
			}
			setTimeout(()=>
			{	ini2 = true;
				iBody.style.setProperty('--cOI','lightyellow');//(g00VARS[68][2]/5)+'px, 45px)')
				iBody.style.setProperty('--cOy','black');//(g00VARS[68][2]/5)+'px, 45px)')		
				loop()
			}//Activa la marquesina
			,50);//Tiempo para bloquear un koop anterior e iniciar un nuevo
 			*/
      	}


/*
f0115=(el)=>//PONER a marchar la marquesina en ingles
		{	hOG(95);//
			let container = el.querySelector('.inner');//https://www.w3schools.com/jsref/met_document_queryselector.asp
			let content = el.querySelector('.inner > *');//https://www.w3schools.com/css/css_combinators.asp
			//Get total width
			let elWidth = content.offsetWidth;//https://www.w3schools.com/jsref/prop_element_offsetwidth.asp
			//Duplicate content
			let clone = content.cloneNode(true);//https://www.w3schools.com/jsref/met_node_clonenode.asp
			container.appendChild(clone);//https://www.w3schools.com/jsref/met_node_appendchild.asp
			//let progress = 0;
			//let progress = parseInt(iBody.offsetWidth/2);//la mitad del ancho!!
			//progress = parseInt(iNot2.offsetWidth/2);//la mitad del ancho!!
			//iBody.style.setProperty('--cDelta',progress+'px');
			//console.log('progres2='+progresi+'px');
			ini2 = false;//Desactiva la marquesina local
			function loop()
			{	progresi = progresi - (speed * 3);
				if(progresi <= elWidth * -1)
				{ 	progresi = 0;
				}
				if(ini2)
				{	//console.log('Ingles:: progresi=',progresi+'; speed =',speed+' elWidth=',elWidth);
					container.style.transform = 'translateX(' + progresi + 'px)';//https://www.w3schools.com/css/css3_3dtransforms.asp
					//container.style.transform += 'skewX(' + speed * 0.1 + 'deg)';//https://www.w3schools.com/css/tryit.asp?filename=trycss3_transform_skewx
					window.requestAnimationFrame(loop);//https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
				}
			}
			setTimeout(()=>
			{	ini2 = true;
				loop()
			}//Activa la marquesina
			,50);//Tiempo para bloquear un koop anterior e iniciar un nuevo
      }
*/

f0116=()=>//hh96 PONER a marchar las marquesinas
		{	lOG(116);
			iV2a.style.backgroundColor = 'black';
			iV2b.style.backgroundColor = 'black';
			iV2c.style.backgroundColor = 'black';
			//iV2d.style.backgroundColor = 'black';
			setTimeout(()=>
			{	
				//progreso = parseInt(iNot2.offsetHeight);//;parseInt(iNot2.offsetHeight/2);//la mitad del alto de la marquesina!!
				// - - - > progreso(+1/2 marque) hasta klHeight(-1)
				//progress = parseInt(iNot2.offsetHeight/2);//la mitad del alto de la marquesina!!
				//++progress = 0;
				//++progress = -1 * parseInt(iNot2.offsetHeight/2);//la mitad del alto!!
				//progresi = progreso;//posición vertical de la marquesina local
				//progress = progreso;//posición vertical de la marquesina en ingles
				//iNot2.style.setProperty('--cDelta',progress+'px');
				f0112();//ACTIVAR el manejador de marquesinas handleMarquee() - tomado de https://www.w3docs.com/tools/code-editor/2123#google_vignette
			}
			,0);
		}

f0117=()=>//RESETEAR todos los apuntadores
		{	lOG(117);
			//console.log('+++ Resetea todos los apuntadores');
			if(gRuta == 3)
			{	console.log('mI... r003B[3].length=', r003B[3].length,' y mIr003B.length=',mIr003B.length);
				for (var i = mIr003B.length - 1; i >= 1; i--)
				//for (var i = r003B[3].length - 1; i >= 1; i--)
				{	mIr003B[i][3] = 0;
					//r003B[3][i] = 0;
				}
			}
			if(gRuta == 7)
			{	/*r007B[3][1] = 0;*/
			}

			if(gRuta == 8)
			{	for (var i = mIr008B.length - 1; i >= 1; i--)
				//for (var i = r008B[3].length - 1; i >= 1; i--)
				{	mIr008B[i][3] = 0;
					//r008B[3][i] = 0;
				}
			}
		}

f0118=()=>//ENCENDER la luz
		{	lOG(118);
			//g00VARS[32][2] = 0;//Como si no tuviera Luz
			//hh88();//establecer la luz - encenderia la Luz, internamente g00VARS[32][2]=1
			hh88(1);//establecer la luz - encenderia la Luz, internamente g00VARS[32][2]=1
		}

f0119=(sign)=>//CONMUTAR el botón seña(1) o idioma visible()
		{	lOG(119);
			if(sign)
			{	f0122(1);//Actualizar la seña (ingles)
				mIr002B[1][4] = 0;
				mIr002B[2][4] = 1;
				//r002B[4][1] = 0;
				//r002B[4][2] = 1;
			}
			else//No sign => Idioma
			{	f0122();//Actualizar el idioma (ingles)
				mIr002B[1][4] = 1;
				mIr002B[2][4] = 0;
				//r002B[4][1] = 1;
				//r002B[4][2] = 0;
			}
		}

f0120=()=>//HACER color del borde igual al color del texto
		{	lOG(120);
			if(g00VARS[31][2]==11)//Color neutro
			{	let cTex;
				switch(g00VARS[34][2])//Color del texto
				{	case 0:cTex='white';break;
					case 1:cTex='black';break;
					case 2:cTex='yellow';break;
					case 3:cTex='black';break;
				}
				iBody.style.setProperty('--cBeige',cTex);
			}
		}

f0121=()=>//ACTUALIZAR el texto del botón señas
		{	lOG(121);
			let ee = 1;//activa la busqueda
			for (var i = wSIGN.length - 1; i >= 1; i--)//Recorre el array de señas
			{	if(ee&&(g00VARS[67][2] == wSIGN[i][3]))//id clave de esa seña = id seña
				{	ee = 0;//Termina la busqueda
					let ii = wSIGN[i][6]//captura el idioma de esa seña
					g00VARS[27][2] = ii;//El idioma se hace igual al idioma padre
					//console.log(' - - - rrr 10A bingo! i=',i,'; ii=',ii);
					mIr002A[2][ii]= i +', '+ wSIGN[i][1];//toma la seña local de wSIGN;
					//r002A[ii][2]= i +', '+ wSIGN[i][1];//toma la seña local de wSIGN;
					//console.log(' - - - rrr 10B |> Flag  ->  mIr002A[2][ii]=',mIr002A[2][ii]);
				};
			};
		}

f0122=(sign)=>//Actualizar el idioma (ingles)
		{	lOU(122);
			let run = 1;//activa el permiso
			let ss;
			//console.log(' - - - 99 rrr SIGN |> Flag  -> (sign)=',sign);		
			if(sign)
			{	ss = g00VARS[67][2];//Ruta actual de la seña
				//console.log(' - - - 99 rrr SIGN |> Flag  -> ss=',ss);		
				for (var i = 1; i < wSIGN.length; i++)//Recorre el array visible de señas
				{	if((wSIGN[i][3] == ss) && run)//Bingo esa seña tiene el id del key actual, entonces..
					{	run = 0;//desactiva el permiso de seguir - PARE
						//Trae la seña ingles a mIr002A[2][x] donde x debe ser la fila ingles [1]
						mIr002A[2][1] = i+', '+wSIGN[i][0];//traduccion al ingles de la seña
						//r002A[1][2] = i+', '+wSIGN[i][0];//traduccion al ingles de la seña
						//console.log(' - - - 99 rrr SIGN |> Flag  -> i=',i,'; mIr002A[2][1]=',mIr002A[2][1]);
					}
				}
			}
			else
			{	ss = g00VARS[27][2];//Ruta actual del idioma
				//console.log(' - - - 99 rrr SIGN |> Flag  -> ss=',ss);
				if(ss == 1)//Ruta del ingles
				{	//Trae el idioma original ingles a mIr002A[1][x] donde x debe ser la fila ingles [1]
					mIr002A[1][1] = orig[0];//traduccion original en ingles del idioma ingles
					//r002A[1][1] = orig[0];//traduccion original en ingles del idioma ingles
					//console.log(' - - - 99 rrr Ingles |> Flag  ->  mIr002A[1][1]=',mIr002A[1][1]);
				}
				else//Es otro idioma
				{	for (var i = 1; i < wIDI.length; i++)//Recorre el array visible de idiomas
					{	if((wIDI[i][3] == ss) && run)//Bingo ese idioma tiene el id del key actual, entonces..
						{	run = 0;//desactiva el permiso de seguir - PARE
							//Trae el idioma ingles a mIr002A[1][x] donde x debe ser la fila ingles [1]
							mIr002A[1][1] = i+', '+wIDI[i][0];//traduccion al ingles del idioma
							//r002A[1][1] = i+', '+wIDI[i][0];//traduccion al ingles del idioma
							//console.log(' - - - 99 rrr IDI |> Flag  -> i=',i,'; mIr002A[1][1]=',mIr002A[1][1]);
						}
					}
				}
			}

		}

f0123=(busca)=>//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
		{	lOG(123);
			//console.error('- - - busca=',busca);
			for (var i = 1; i < kTapa0.length; i++)
			{	if(kTapa0[i][0] == busca)
				{	bus = i;
					i = kTapa0.length;
				}
			}
		}

f0124=(ini)=>//ACTUALIZAR tablas siguientes a wPAPAx (ini = x-1) de extensiones a partir de la lista/columna(ini)[0-8] que cambio de valor, si no existen tablas las deja vacias y oculta los botones respectivos de los sitios 
		{	lOG(124);
			for (var i = 6 + ini; i <= 14; i++)//5-[12-5]13 - 4 = 9 si ini= 0 los oculta todos
			{	mIr002B[i][4]=0;//mIr002B[6-14][4] Ocultar botones de Ajustes 2 desde el actual (ini)
				//r002B[4][i]=0;//r002B[4][6-14] Ocultar botones de Ajustes 2 desde el actual (ini)
				papas[i - 5]=0;//borrar datos a la derecha de papas[ini]
			}
			//CREA un arreglo paralelo aparte con la ruta parcial QUE NO SE MODIFICO más el último cambio
			papas0 = [];//Reset
			papas1 = [];//Reset
			for (var i = 0; i < 10; i++)//la casilla 10 siempre es 0 no se usa
			{ 	if(papas[i]!=0)
				{	papas0[i] = papas[i];
				}
			}
			//buscar dentro de rutas sugeridas a papa0 (papas paralelo) y ver si lo encuentra..
			let siga = 1;
			for (var i = 0; i < wSug.length; i++)//busca en todas las sugerencias una por una
			{	if(siga)//buscar
				{	let oks = 0;
					for (var j = 0; j < papas0.length; j++)
					{ 	if(wSug[i][j] == papas0[j])//compara la casilla j de la sugerencia i con la casilla j de papas0
						{	oks++;//suma un ok
						}
					}
					if(oks == papas0.length)//tantos de tantos son iguales!
					{	siga = 0;//Parar, no siga buscando más
						//console.log(' - - - rrr BIIIIIIIINNNGOOOOO la ruta sugerida i=',i);
						//DEBE completar / actualizar la ruta con la ruta sugerida encontrada, con la ultima coinsidencia hasta donde pueda y si quedan hijos sueltos, luego completarla con numeros auto del resto de la ruta 
						for (var j = ini+1; j < wSug[i].length; j++)
						{	papas1[j] = wSug[i][j];//arreglo con el faltante de ruta sugerido
						}
						//console.log(' - - - rrr debe iniciar la actualización de la ruta desde wPAPA',ini + 2,' teniendo en cuenta el array papas1=',papas1);
						//no asumir que la ruta sugerida funcione, para ello crear un array paralelo y tenerlo cómo referencia e ir paso a paso verificando cada casilla
						//actualizar las listas desde aqui hasta el final teniendo en cuenta la ruta sugerida cuando está exista
						//desde aquí debe poner los numeros auto del resto de la ruta que se puedan y falten

					}
					else//no encontro sugerencias, debe poner los numeros auto del resto de la ruta
					{	//actualizar las listas desde aqui poniendo por defecto el primer elemento que encuentre
						//console.log(' - - - rrr debe iniciar la actualización de la ruta desde wPAPA',ini + 2);	
					}
				}
			}

			/*
			//ruta sugerida: 7,1,1,1,2,5,2,4,2,2
			//si ese cambio es parte de una ruta sugerida completa la ruta sugerida(conocida) sino pone los números auto que se puedan..
			let sug = [5,2,4,2];//ruta de Tecnoparque, ver si puede llegar a alguna línea y mostrarla en menu
			for (var i = 0; i < sug.length; i++)//Recorre el array de papas [0-9]
			{	papas[i + ini + 1] = sug[i];
			}
			*/

			/*
			if(ini == 0)//Si el cambio es en lugar 0
			{	wPAPA2 = [];//Borra wPAPA2, hace de nuevo la lista wPAPA2
				
				let go = 1;//Buscando un elemento
				for (var i = 0; i < wPapa2.length; i++)//recorre las filas de wPapa2
				{ 	if((wPapa2[i][3] == 1)&&(wPapa2[i][2] == papas1[ini+1])&&(wPapa2[i][4] == papas[0]))
					{	go = 0;//el elemento sugerido existe, es visible y cumple go=1
						papas[1]=papas1[ini+1];
					}
				}
				let ff = 1;
				for (var i = 1; i < wPapa2.length; i++)//Recorre el array de paises - lugares 1 
				{	if((wPapa2[i][3] == 1)&&(wPapa2[i][4] == papas[0]))//si esa fila es visible y además es un hijo de wPAPA1
					{	wPAPA2[ff] = [wPapa2[i][2],wPapa2[i][1],wPapa2[i][4],ff+', '+wPapa2[i][0]+kTapaI[1][5],ff+', '+wPapa2[i][5]+kTapaI[2][5],ff+', '+wPapa2[i][6]+kTapaI[3][5],ff+', '+wPapa2[i][7]+kTapaI[4][5]];
						ff++;//Siguiente fila
						if(go)
						{	go = 0;//Deja de buscar un elemento
							papas[1] = wPapa2[i][2];//Toma el primer id del string del elemento de la app que encuentre
						}
					}
				}
			}
			*/
			//Cargar/actualizar los wPAPAS hijos o dependientes desde ini[0-8]
			let ff;
			let go;
			for (var j = ini+1; j < 11; j++)//ini[0-8]  j[1-10]Recorre los wPAPAx restantes y los borra Y CREA DE NUEVO EN ORDEN A PARTIR DE LA TABLA ACTUAL
			{	
				switch(j)
				{	case 1:
						wPAPA2 = [];//Borra wPAPA2, hace de nuevo la lista wPAPA2 carga/actualiza los arrays hijos *
						//wPAPA2[0] = [wPapa1[0][2],0,wPapa1[0][4],'','','','','',wPapa1[0][0],wPapa1[0][ext+5],wPapa1[0][ext+6],wPapa1[0][ext+7]];
						go = 1;//Buscando un elemento sugerido
						for (var i = 1; i < vPAPA2.length; i++)//recorre las filas de vPAPA2, mira si coincide con la sugerencia y es un hijo
						{ 	if((vPAPA2[i][0] == papas1[j])&&(vPAPA2[i][2] == papas[j-1]))
							{	go = 0;//el elemento sugerido existe y cumple go=1
								papas[j]=papas1[j];
							}
						}
						ff = 1;
						for (var i = 1; i < vPAPA2.length; i++)//Recorre el array de paises - lugares 1 
						{	if(vPAPA2[i][2] == papas[j-1])//si esa fila es un hijo de wPAPA1
							{	wPAPA2[ff] = [];
								for (var k = 0; k < vPAPA2[i].length; k++)
								{	wPAPA2[ff][k] = vPAPA2[i][k];
								}
								wPAPA2[ff][1] = ff;
								ff++;//Siguiente fila
								if(go)
								{	go = 0;//Deja de buscar un elemento
									papas[j] = vPAPA2[i][0];//Toma el primer id del string del elemento de la app que encuentre
								}
							}
						}
					break;
					case 2:
						wPAPA3 = [];//Borra wPAPA3, hace de nuevo la lista wPAPA3		
						//wPAPA3[0] = [wPapa1[0][2],0,wPapa1[0][4],'','','','','',wPapa1[0][0],wPapa1[0][ext+5],wPapa1[0][ext+6],wPapa1[0][ext+7]];
						go = 1;//Buscando un elemento
						for (var i = 1; i < vPAPA3.length; i++)//recorre las filas de vPAPA3
						{ 	if((vPAPA3[i][0] == papas1[j])&&(vPAPA3[i][2] == papas[j-1]))
							{	go = 0;//el elemento sugerido existe y cumple go=1
								papas[j]=papas1[j];
							}
						}
						ff = 1;
						for (var i = 1; i < vPAPA3.length; i++)//Recorre el array de paises - lugares 1 
						{	if(vPAPA3[i][2] == papas[j-1])//si esa fila es visible y además es un hijo de wPAPA1
							{	wPAPA3[ff] = [];
								for (var k = 0; k < vPAPA3[i].length; k++)
								{	wPAPA3[ff][k] = vPAPA3[i][k];
								}
								wPAPA3[ff][1] = ff;
								ff++;//Siguiente fila
								if(go)
								{	go = 0;//Deja de buscar un elemento
									papas[j] = vPAPA3[i][0];//Toma el primer id del string del elemento de la app que encuentre
									//papas[j] = vPAPA3[i][2];//Toma el primer id del string del elemento de la app que encuentre
								}
							}
						}
					break;
					case 3:
						//console.log(' - - - rrrrr case 3 j=',j,'; ini=',ini);	
						wPAPA4 = [];//Borra wPAPA4, hace de nuevo la lista wPAPA4		
						
						//Cargar los titulos de wPAPA4..
						//wPAPA4[0] = [wPapa1[0][2],0,wPapa1[0][4],'','','','','',wPapa1[0][0],wPapa1[0][ext+5],wPapa1[0][ext+6],wPapa1[0][ext+7]];
						//wPAPA4[0] = [wPapa4[0][2],0,wPapa4[0][4],'','','','','',wPapa4[0][0],wPapa4[0][ext+5],wPapa4[0][ext+6],wPapa4[0][ext+7]];	
						//for(let m = 3; m < ext + 3; m++)//Adiciona los datos extras que van en ,''
						//{	wPAPA4[0][m] = wPapa4[0][m+2];
						//}


						go = 1;//Buscando un elemento
						for (var i = 1; i < vPAPA4.length; i++)//recorre las filas de vPAPA4
						{ 	if((vPAPA4[i][0] == papas1[j])&&(vPAPA4[i][2] == papas[j-1]))
							{	go = 0;//el elemento sugerido existe y cumple go=1
								papas[j]=papas1[j];
							}
						}
						ff = 1;
						for (var i = 1; i < vPAPA4.length; i++)//Recorre el array de paises - lugares 1 
						{	if(vPAPA4[i][2] == papas[j-1])//si esa fila es visible y además es un hijo de wPAPA3
							{	wPAPA4[ff] = [];
								for (var k = 0; k < vPAPA4[i].length; k++)
								{	wPAPA4[ff][k] = vPAPA4[i][k];
								}
								wPAPA4[ff][1] = ff;
								ff++;//Siguiente fila
								if(go)
								{	go = 0;//Deja de buscar un elemento
									//papas[j] = vPAPA4[i][2];//Toma el primer id del string del elemento de la app que encuentre
									papas[j] = vPAPA4[i][0];//Toma el primer id del string del elemento de la app que encuentre
								}
							}
						}
					break;
					case 4:
						wPAPA5 = [];//Borra wPAPA5, hace de nuevo la lista wPAPA5		
						//wPAPA5[0] = [wPapa1[0][2],0,wPapa1[0][4],'','','','','',wPapa1[0][0],wPapa1[0][ext+5],wPapa1[0][ext+6],wPapa1[0][ext+7]];
						go = 1;//Buscando un elemento
						for (var i = 1; i < vPAPA5.length; i++)//recorre las filas de vPAPA5
						{ 	if((vPAPA5[i][0] == papas1[j])&&(vPAPA5[i][2] == papas[j-1]))
							{	go = 0;//el elemento sugerido existe y cumple go=1
								papas[j]=papas1[j];
							}
						}
						ff = 1;
						for (var i = 1; i < vPAPA5.length; i++)//Recorre el array de paises - lugares 1 
						{	if(vPAPA5[i][2] == papas[j-1])//si esa fila es visible y además es un hijo de wPAPA1
							{	wPAPA5[ff] = [];
								for (var k = 0; k < vPAPA5[i].length; k++)
								{	wPAPA5[ff][k] = vPAPA5[i][k];
								}
								wPAPA5[ff][1] = ff;
								ff++;//Siguiente fila
								if(go)
								{	go = 0;//Deja de buscar un elemento
									papas[j] = vPAPA5[i][0];//Toma el primer id del string del elemento de la app que encuentre
									//papas[j] = vPAPA5[i][2];//Toma el primer id del string del elemento de la app que encuentre
								}
							}
						}
					break;
					case 5:
						wPAPA6 = [];//Borra wPAPA6, hace de nuevo la lista wPAPA6		
						//wPAPA6[0] = [wPapa1[0][2],0,wPapa1[0][4],'','','','','',wPapa1[0][0],wPapa1[0][ext+5],wPapa1[0][ext+6],wPapa1[0][ext+7]];
						go = 1;//Buscando un elemento
						for (var i = 1; i < vPAPA6.length; i++)//recorre las filas de vPAPA6
						{ 	if((vPAPA6[i][0] == papas1[j])&&(vPAPA6[i][2] == papas[j-1]))
							{	go = 0;//el elemento sugerido existe y cumple go=1
								papas[j]=papas1[j];
							}
						}
						ff = 1;
						for (var i = 1; i < vPAPA6.length; i++)//Recorre el array de paises - lugares 1 
						{	if(vPAPA6[i][2] == papas[j-1])//si esa fila es visible y además es un hijo de wPAPA1
							{	wPAPA6[ff] = [];
								for (var k = 0; k < vPAPA6[i].length; k++)
								{	wPAPA6[ff][k] = vPAPA6[i][k];
								}
								wPAPA6[ff][1] = ff;
								ff++;//Siguiente fila
								if(go)
								{	go = 0;//Deja de buscar un elemento
									papas[j] = vPAPA6[i][0];//Toma el primer id del string del elemento de la app que encuentre
									//papas[j] = vPAPA6[i][2];//Toma el primer id del string del elemento de la app que encuentre
								}
							}
						}
					break;
					case 6:
						wPAPA7 = [];//Borra wPAPA7, hace de nuevo la lista wPAPA7		
						//wPAPA7[0] = [wPapa1[0][2],0,wPapa1[0][4],'','','','','',wPapa1[0][0],wPapa1[0][ext+5],wPapa1[0][ext+6],wPapa1[0][ext+7]];
						go = 1;//Buscando un elemento
						for (var i = 1; i < vPAPA7.length; i++)//recorre las filas de vPAPA7
						{ 	if((vPAPA7[i][0] == papas1[j])&&(vPAPA7[i][2] == papas[j-1]))
							{	go = 0;//el elemento sugerido existe y cumple go=1
								papas[j]=papas1[j];
							}
						}
						ff = 1;
						for (var i = 1; i < vPAPA7.length; i++)//Recorre el array de paises - lugares 1 
						{	if(vPAPA7[i][2] == papas[j-1])//si esa fila es visible y además es un hijo de wPAPA1
							{	wPAPA7[ff] = [];
								for (var k = 0; k < vPAPA7[i].length; k++)
								{	wPAPA7[ff][k] = vPAPA7[i][k];
								}
								wPAPA7[ff][1] = ff;
								ff++;//Siguiente fila
								if(go)
								{	go = 0;//Deja de buscar un elemento
									papas[j] = vPAPA7[i][0];//Toma el primer id del string del elemento de la app que encuentre
									//papas[j] = vPAPA7[i][2];//Toma el primer id del string del elemento de la app que encuentre
								}
							}
						}
					break;
					case 7:
						wPAPA8 = [];//Borra wPAPA8, hace de nuevo la lista wPAPA8		
						//wPAPA8[0] = [wPapa1[0][2],0,wPapa1[0][4],'','','','','',wPapa1[0][0],wPapa1[0][ext+5],wPapa1[0][ext+6],wPapa1[0][ext+7]];
						go = 1;//Buscando un elemento
						for (var i = 1; i < vPAPA8.length; i++)//recorre las filas de vPAPA8
						{ 	if((vPAPA8[i][0] == papas1[j])&&(vPAPA8[i][2] == papas[j-1]))
							{	go = 0;//el elemento sugerido existe y cumple go=1
								papas[j]=papas1[j];
							}
						}
						ff = 1;
						for (var i = 1; i < vPAPA8.length; i++)//Recorre el array de paises - lugares 1 
						{	if(vPAPA8[i][2] == papas[j-1])//si esa fila es visible y además es un hijo de wPAPA1
							{	wPAPA8[ff] = [];
								for (var k = 0; k < vPAPA8[i].length; k++)
								{	wPAPA8[ff][k] = vPAPA8[i][k];
								}
								wPAPA8[ff][1] = ff;
								ff++;//Siguiente fila
								if(go)
								{	go = 0;//Deja de buscar un elemento
									papas[j] = vPAPA8[i][0];//Toma el primer id del string del elemento de la app que encuentre
								//	papas[j] = vPAPA8[i][2];//Toma el primer id del string del elemento de la app que encuentre
								}
							}
						}
					break;
					case 8:
						wPAPA9 = [];//Borra wPAPA9, hace de nuevo la lista wPAPA9		
						//wPAPA9[0] = [wPapa1[0][2],0,wPapa1[0][4],'','','','','',wPapa1[0][0],wPapa1[0][ext+5],wPapa1[0][ext+6],wPapa1[0][ext+7]];
						go = 1;//Buscando un elemento
						for (var i = 1; i < vPAPA9.length; i++)//recorre las filas de vPAPA9
						{ 	if((vPAPA9[i][0] == papas1[j])&&(vPAPA9[i][2] == papas[j-1]))
							{	go = 0;//el elemento sugerido existe y cumple go=1
								papas[j]=papas1[j];
							}
						}
						ff = 1;
						for (var i = 1; i < vPAPA9.length; i++)//Recorre el array de paises - lugares 1 
						{	if(vPAPA9[i][2] == papas[j-1])//si esa fila es visible y además es un hijo de wPAPA1
							{	wPAPA9[ff] = [];
								for (var k = 0; k < vPAPA9[i].length; k++)
								{	wPAPA9[ff][k] = vPAPA9[i][k];
								}
								wPAPA9[ff][1] = ff;
								ff++;//Siguiente fila
								if(go)
								{	go = 0;//Deja de buscar un elemento
									papas[j] = vPAPA9[i][0];//Toma el primer id del string del elemento de la app que encuentre
								//	papas[j] = vPAPA9[i][2];//Toma el primer id del string del elemento de la app que encuentre
								}
							}
						}
					break;
					case 9:
						wPAPA10 = [];//Borra wPAPA10, hace de nuevo la lista wPAPA10		
						//wPAPA10[0] = [wPapa1[0][2],0,wPapa1[0][4],'','','','','',wPapa1[0][0],wPapa1[0][ext+5],wPapa1[0][ext+6],wPapa1[0][ext+7]];
						go = 1;//Buscando un elemento
						for (var i = 1; i < vPAPA10.length; i++)//recorre las filas de vPAPA10
						{ 	if((vPAPA10[i][0] == papas1[j])&&(vPAPA10[i][2] == papas[j-1]))
							{	go = 0;//el elemento sugerido existe y cumple go=1
								papas[j]=papas1[j];
							}
						}
						ff = 1;
						for (var i = 1; i < vPAPA10.length; i++)//Recorre el array de paises - lugares 1 
						{	if(vPAPA10[i][2] == papas[j-1])//si esa fila es visible y además es un hijo de wPAPA1
							{	wPAPA10[ff] = [];
								for (var k = 0; k < vPAPA10[i].length; k++)
								{	wPAPA10[ff][k] = vPAPA10[i][k];
								}
								wPAPA10[ff][1] = ff;
								ff++;//Siguiente fila
								if(go)
								{	go = 0;//Deja de buscar un elemento
									papas[j] = vPAPA10[i][0];//Toma el primer id del string del elemento de la app que encuentre
								//	papas[j] = vPAPA10[i][2];//Toma el primer id del string del elemento de la app que encuentre
								}
							}
						}
					break;
				}
			}
			//cuando muestra la cartelera local
			//console.log(' - - - rrrrr f0124 fin A papas=',papas,';\n wPAPA2=',wPAPA2,';\n wPAPA3=',wPAPA3,';\n wPAPA4=',wPAPA4,';\n wPAPA5=',wPAPA5,';\n wPAPA6=',wPAPA6);
			

			/*

			cuando termine de actualizar todas las tablas y organizar una ruta nueva para papas[xxxx] entonces debe mirar
			que botones debe mostrar y cargar los strings que correspondan, ejemplo..
				mIr002B[12][4]=1;//Si esa fila puede llevar a otro hijo activa el boton de lugar 1 [12]
						
			*/
			//BUSCAR SI HAY ALGUNA RUTA SUGERIDA QUE PASE POR HAY
			//papas0 = [7, 1, 1, 1, 1]

		}

f0125=(ini)=>//ESTABLECER O ACTUALIZAR el string de los botones de los sitios y de la presentación AV desde ini (con ini incluido).
		{	lOG(125);
			mIr003A = mIres3A;//RESET CONTENIDOS DE mIr003A
			//r003A = res3A;//RESET CONTENIDOS DE r003A
			//console.error(' - - - mIr003A=',mIr003A,'; g00VARS[86][2]=',g00VARS[86][2]);			
			for (var i = ini; i <= 9; i++)//Recorre el array de papas [0-9] desde ini
			{	if(papas[i]!=0)//si casilla no es 0 y esta buscando
				{	let ok = 1;//Buscando los string que se necesitan[1]
					//console.log(' - - - rrrrr f0125 i=',i,'; ini=',ini);
					switch(i)//7 1 0 0 0 0 0
					{	case 0://Papa1
						{	for (var j = wPAPA1.length - 1; j >= 1; j--)
							{	//console.log(' - - - rrrrr f0125 j=',j);
								if(ok&&(papas[0] == wPAPA1[j][0]))//buscar a papas[i] y cuando lo encuentre cargar los strings de mIr002A[10][x]
								{	//console.log(' - - - rrrrr f0125 j=',j);
									ok = 0;//deja de buscar el string, ya lo encontro..
									for (var k = 1; k <= 4; k++)//Recorre todas las filas de idiomas que hay disponibles
									{	mIr002A[5][k]=mIkTapaI[27][k]+' '+(i+1)+'i'+wPAPA1[j][1]+': '+wPAPA1[j][ext+k+2]+mIkTapaI[5][k];//trae el string de los idiomas desde wPAPA2
										//r002A[k][5]=kTapaI[k][27]+' '+(i+1)+'i'+wPAPA1[j][1]+': '+wPAPA1[j][ext+k+2]+kTapaI[k][5];//trae el string de los idiomas desde wPAPA2
										mIr002Z[5][k]=wPAPA1[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										//r002Z[k][5]=wPAPA1[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										mIr002B[5][2]=vPAPA1[j][6];//vPAPA1[j][8];
										//r002B[2][5]=vPAPA1[j][6];//vPAPA1[j][8];
									}
								}
							}
						}					
						break;
						case 1://Papa2
							for (var j = wPAPA2.length - 1; j >= 1; j--)
							{	mIr002B[6][4]=1;//muestra el sitio
								//r002B[4][6]=1;//muestra el sitio
								if(ok&&(papas[i] == wPAPA2[j][0]))//buscar a papas[i] y cuando lo encuentre cargar los strings de mIr002A[9][x]
								{	ok = 0;//deja de buscar el string, ya lo encontro..
									for (var k = 1; k <= 4; k++)//Recorre todas las filas de idiomas que hay disponibles
									{	mIr002A[6][k]=mIkTapaI[27][k]+' '+(i+1)+'i'+wPAPA2[j][1]+': '+wPAPA2[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										//r002A[k][6]=kTapaI[k][27]+' '+(i+1)+'i'+wPAPA2[j][1]+': '+wPAPA2[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										mIr002Z[6][k]=wPAPA2[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										//r002Z[k][6]=wPAPA2[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										mIr002B[6][2]=wPAPA2[j][6];
										//r002B[2][6]=wPAPA2[j][6];
										if(wPAPA2.length > 2)
										{ 	mIr002A[6][k]+=mIkTapaI[5][k];
											//r002A[k][6]+=kTapaI[k][5];
										}
										if(papas[i+1]==0)//Si el siguiente elemento es 0
										{	mIkComun[1][k]=wPAPA2[j][ext+k+2];
											//kComun[k][1]=wPAPA2[j][ext+k+2];
											for(let l = 3; l < ext + 3; l++)
											{	dExt[l-3] = wPAPA2[j][l];
											}
											switch(g00VARS[86][2])//Termino de buscar - 0:hay anuncios 1:No hay anuncios/ satelite
											{	case 0:
													mIr003A = mIc003A;
													//r003A = c003A;
													mIr003Z = mIc003Z;
													//r003Z = c003Z
													mIr003B = mIc003B;
													//r003B = c003B;
												break;
												case 1:
													mIr003A[2][k][0] =mIkTapaI[30][k];
													//r003A[k][2][0] =kTapaI[k][30];
													mIr003Z = mIo003Z;
													//r003Z = o003Z;
													mIr003B = mIo003B;
													//r003B = o003B;
												break;
											 	case 2: 
											 		mIr003A[2][k][0] =mIkTapaI[31][k];
											 		//r003A[k][2][0] =kTapaI[k][31];
											 		mIr003Z = mIres3Z;
											 		//r003Z = res3Z;
													mIr003B = mIres3B;
											 		//r003B = res3B;
											 	break;
											}
										}
									}
								}
							}
						break;
						case 2://Papa3
							for (var j = wPAPA3.length - 1; j >= 1; j--)
							{	mIr002B[7][4]=1;//muestra el sitio
								//r002B[4][7]=1;//muestra el sitio
								if(ok&&(papas[i] == wPAPA3[j][0]))//buscar a papas[i] y cuando lo encuentre cargar los strings de mIr002A[9][x]
								{	ok = 0;
									for (var k = 1; k <= 4; k++)//Recorre todas las filas de idiomas que hay disponibles
									{	mIr002A[7][k]=mIkTapaI[27][k]+' '+(i+1)+'i'+wPAPA3[j][1]+': '+wPAPA3[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										//r002A[k][7]=kTapaI[k][27]+' '+(i+1)+'i'+wPAPA3[j][1]+': '+wPAPA3[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										mIr002Z[7][k]=wPAPA3[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										//r002Z[k][7]=wPAPA3[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										mIr002B[7][2]=wPAPA3[j][6];
										//r002B[2][7]=wPAPA3[j][6];
										if(wPAPA3.length > 2)
										{ 	mIr002A[7][k]+=mIkTapaI[5][k];
											//r002A[k][7]+=kTapaI[k][5];
										}
										if(papas[i+1]==0)//Si el siguiente elemento es 0
										{	mIkComun[1][k]=wPAPA3[j][ext+k+2];
											//kComun[k][1]=wPAPA3[j][ext+k+2];
											for(let l = 3; l < ext + 3; l++)
											{	dExt[l-3] = wPAPA3[j][l];
											}
											switch(g00VARS[86][2])//Termino de buscar - 0:hay anuncios 1:No hay anuncios/ satelite
											{	case 0:
													mIr003A = mIc003A; 
													//r003A = c003A;
													mIr003Z = mIc003Z;
													//r003Z = c003Z;
													mIr003B = mIc003B;
													//r003B = c003B;
												break;
												case 1:
													mIr003A[2][k][0] =mIkTapaI[30][k];
													//r003A[k][2][0] =kTapaI[k][30];
													mIr003Z = mIo003Z;
													//r003Z = o003Z;
													mIr003B = mIo003B;
													//r003B = o003B;
												break;
											 	case 2: 
											 		mIr003A[2][k][0] =mIkTapaI[31][k];
											 		//r003A[k][2][0] =kTapaI[k][31];
											 		mIr003Z = mIres3Z;
											 		//r003Z = res3Z;
													 mIr003B = mIres3B;
											 		//r003B = res3B;
											 	break;
											}
										}
									}
								}
							}
						break;
						case 3://Papa4
							for (var j = wPAPA4.length - 1; j >= 1; j--)
							{	mIr002B[8][4]=1;//muestra el sitio
								//r002B[4][8]=1;//muestra el sitio
								//console.log(' - - - rrrrrr ok=',ok,'; papas[i]=',papas[i],'; wPAPA4[j][0]=',wPAPA4[j][0],'; i=',i,'; j=',j)
								if(ok&&(papas[i] == wPAPA4[j][0]))//buscar a papas[i] y cuando lo encuentre cargar los strings de mIr002A[9][x]
								{	ok = 0;
									for (var k = 1; k <= 4; k++)//Recorre todas las filas de idiomas que hay disponibles
									{	mIr002A[8][k]=mIkTapaI[27][k]+' '+(i+1)+'i'+wPAPA4[j][1]+': '+wPAPA4[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										//r002A[k][8]=kTapaI[k][27]+' '+(i+1)+'i'+wPAPA4[j][1]+': '+wPAPA4[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										mIr002Z[8][k]=wPAPA4[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										//r002Z[k][8]=wPAPA4[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										mIr002B[8][2]=wPAPA4[j][6];
										//r002B[2][8]=wPAPA4[j][6];
										if(wPAPA4.length > 2)
										{ 	mIr002A[8][k]+=mIkTapaI[5][k];
											//r002A[k][8]+=kTapaI[k][5];  
										}
										if(papas[i+1]==0)//Si el siguiente elemento es 0
										{	mIkComun[1][k]=wPAPA4[j][ext+k+2];
											//kComun[k][1]=wPAPA4[j][ext+k+2];
											for(let l = 3; l < ext + 3; l++)
											{	dExt[l-3] = wPAPA4[j][l];
											}
											switch(g00VARS[86][2])//Termino de buscar - 0:hay anuncios 1:No hay anuncios/ satelite
											{	case 0:
													mIr003A = mIc003A; 
													//r003A = c003A; 
													mIr003Z = mIc003Z;
													//r003Z = c003Z;
													mIr003B = mIc003B;
													//r003B = c003B;
												break;
												case 1:
													mIr003A[2][k][0] =mIkTapaI[30][k];
													//r003A[k][2][0] =kTapaI[k][30];
													mIr003Z = mIo003Z;
													//r003Z = o003Z;
													mIr003B = mIo003B;
													//r003B = o003B;
												break;
											 	case 2: 
											 		mIr003A[2][k][0] =mIkTapaI[31][k];
											 		//r003A[k][2][0] =kTapaI[k][31];
											 		mIr003Z = mIres3Z;
													//r003Z = res3Z;
													mIr003B = mIres3B;
											 		//r003B = res3B;
											 	break;
											}
										}
									}
								}
							}
						break;
						case 4://Papa5
							for (var j = wPAPA5.length - 1; j >= 1; j--)
							{	mIr002B[9][4]=1;//muestra el sitio
								//r002B[4][9]=1;//muestra el sitio
								if(ok&&(papas[i] == wPAPA5[j][0]))//buscar a papas[i] y cuando lo encuentre cargar los strings de mIr002A[9][x]
								{	ok = 0;
									for (var k = 1; k <= 4; k++)//Recorre todas las filas de idiomas que hay disponibles
									{	mIr002A[9][k]=mIkTapaI[27][k]+' '+(i+1)+'i'+wPAPA5[j][1]+': '+wPAPA5[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										//r002A[k][9]=kTapaI[k][27]+' '+(i+1)+'i'+wPAPA5[j][1]+': '+wPAPA5[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										mIr002Z[9][k]=wPAPA5[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										//r002Z[k][9]=wPAPA5[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										mIr002B[9][2]=wPAPA5[j][6];
										//r002B[2][9]=wPAPA5[j][6];
										if(wPAPA5.length > 2)
										{ 	mIr002A[9][k]+=mIkTapaI[5][k]; 
											//r002A[k][9]+=kTapaI[k][5]; 
										}
										if(papas[i+1]==0)//Si el siguiente elemento es 0
										{	mIkComun[1][k]=wPAPA5[j][ext+k+2];
											//kComun[k][1]=wPAPA5[j][ext+k+2];
											for(let l = 3; l < ext + 3; l++)
											{	dExt[l-3] = wPAPA5[j][l];
											}
											switch(g00VARS[86][2])//Termino de buscar - 0:hay anuncios 1:No hay anuncios/ satelite
											{	case 0:
													mIr003A = mIc003A; 
													//r003A = c003A; 
													mIr003Z = mIc003Z;
													//r003Z = c003Z;
													mIr003B = mIc003B;
													//r003B = c003B;
												break;
												case 1:
													mIr003A[2][k][0] =mIkTapaI[30][k];
													//r003A[k][2][0] =kTapaI[k][30];
													mIr003Z = mIo003Z;
													//r003Z = o003Z;
													mIr003B = mIo003B;
													//r003B = o003B;
												break;
											 	case 2: 
											 		mIr003A[2][k][0] =mIkTapaI[31][k];
											 		//r003A[k][2][0] =kTapaI[k][31];
											 		mIr003Z = mIres3Z;
											 		//r003Z = res3Z;
											 		mIr003B = mIres3B;
											 		//r003B = res3B;
											 	break;
											}
										}
									}
								}
							}
						break;
						case 5://Papa6 -Chap
							for (var j = wPAPA6.length - 1; j >= 1; j--)
							{	mIr002B[10][4]=1;//muestra el sitio
								//r002B[4][10]=1;//muestra el sitio
								if(ok&&(papas[i] == wPAPA6[j][0]))//buscar a papas[i] y cuando lo encuentre cargar los strings de mIr002A[9][x]
								{	ok = 0;
									for (var k = 1; k <= 4; k++)//Recorre todas las filas de idiomas que hay disponibles
									{	mIr002A[10][k]=mIkTapaI[27][k]+' '+(i+1)+'i'+wPAPA6[j][1]+': '+wPAPA6[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										//r002A[k][10]=kTapaI[k][27]+' '+(i+1)+'i'+wPAPA6[j][1]+': '+wPAPA6[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										mIr002Z[10][k]=wPAPA6[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										//r002Z[k][10]=wPAPA6[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										mIr002B[10][2]=wPAPA6[j][6];
										//r002B[2][10]=wPAPA6[j][6];
										if(wPAPA6.length > 2)
										{ 	mIr002A[10][k]+=mIkTapaI[5][k];
											//r002A[k][10]+=kTapaI[k][5]; 
										}
										if(papas[i+1]==0)//Si el siguiente elemento es 0
										{	mIkComun[1][k]=wPAPA6[j][ext+k+2];
											//kComun[k][1]=wPAPA6[j][ext+k+2];
											for(let l = 3; l < ext + 3; l++)
											{	dExt[l-3] = wPAPA6[j][l];
											}
											switch(g00VARS[86][2])//Termino de buscar - 0:hay anuncios 1:No hay anuncios/ satelite
											{	case 0:
													mIr003A = mIc003A; 
													//r003A = c003A; 
													mIr003Z = mIc003Z;
													//r003Z = c003Z;
													mIr003B = mIc003B;
													//r003B = c003B;
												break;
												case 1:
													mIr003A[2][k][0] =mIkTapaI[30][k];
													//r003A[k][2][0] =kTapaI[k][30];
													mIr003Z = mIo003Z;
													//r003Z = o003Z;
													mIr003B = mIo003B;
													//r003B = o003B;
												break;
											 	case 2: 
											 		mIr003A[2][k][0] =mIkTapaI[31][k];
											 		//r003A[k][2][0] =kTapaI[k][31];
											 		mIr003Z = mIres3Z;
													//r003Z = res3Z;
													mIr003B = mIres3B;
											 		//r003B = res3B;
											 	break;
											}
										}
									}
								}
							}
						break;
						case 6://Papa7  -Chap Cent Barr
							for (var j = wPAPA7.length - 1; j >= 1; j--)
							{	mIr002B[11][4]=1;//muestra el sitio
								//r002B[4][11]=1;//muestra el sitio
								if(ok&&(papas[i] == wPAPA7[j][0]))//buscar a papas[i] y cuando lo encuentre cargar los strings de mIr002A[9][x]
								{	ok = 0;
									for (var k = 1; k <= 4; k++)//Recorre todas las filas de idiomas que hay disponibles
									{	mIr002A[11][k]=mIkTapaI[27][k]+' '+(i+1)+'i'+wPAPA7[j][1]+': '+wPAPA7[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										//r002A[k][11]=kTapaI[k][27]+' '+(i+1)+'i'+wPAPA7[j][1]+': '+wPAPA7[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										mIr002Z[11][k]=wPAPA7[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										//r002Z[k][11]=wPAPA7[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										mIr002B[11][2]=wPAPA7[j][6];
										//r002B[2][11]=wPAPA7[j][6];
										if(wPAPA7.length > 2)
										{ 	mIr002A[11][k]+=mIkTapaI[5][k];
											//r002A[k][11]+=kTapaI[k][5]; 
										}
										if(papas[i+1]==0)//Si el siguiente elemento es 0
										{	mIkComun[1][k]=wPAPA7[j][ext+k+2];
											//kComun[k][1]=wPAPA7[j][ext+k+2];
											for(let l = 3; l < ext + 3; l++)
											{	dExt[l-3] = wPAPA7[j][l];
											}
											switch(g00VARS[86][2])//Termino de buscar - 0:hay anuncios 1:No hay anuncios/ satelite
											{	case 0:
													mIr003A = mIc003A; 
													//r003A = c003A; 
													mIr003Z = mIc003Z;
													//r003Z = c003Z;
													mIr003B = mIc003B;
													//r003B = c003B;
												break;
												case 1:
													mIr003A[2][k][0] =mIkTapaI[30][k];
													//r003A[k][2][0] =kTapaI[k][30];
													mIr003Z = mIo003Z;
													//r003Z = o003Z;
													mIr003B = mIo003B;
													//r003B = o003B;
												break;
											 	case 2: 
											 		mIr003A[2][k][0] =mIkTapaI[31][k];
											 		//r003A[k][2][0] =kTapaI[k][31];
											 		mIr003Z = mIres3Z;
													//r003Z = res3Z;
													mIr003B = mIres3B;
											 		//r003B = res3B;
											 	break;
											}
										}
									}
								}
							}
						break;
						case 7://Papa8
							for (var j = wPAPA8.length - 1; j >= 1; j--)
							{	mIr002B[12][4]=1;//muestra el sitio	
								//r002B[4][12]=1;//muestra el sitio	
								if(ok&&(papas[i] == wPAPA8[j][0]))//buscar a papas[i] y cuando lo encuentre cargar los strings de mIr002A[9][x]
								{	ok = 0;
									for (var k = 1; k <= 4; k++)//Recorre todas las filas de idiomas que hay disponibles
									{	mIr002A[12][k]=mIkTapaI[27][k]+' '+(i+1)+'i'+wPAPA8[j][1]+': '+wPAPA8[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										//r002A[k][12]=kTapaI[k][27]+' '+(i+1)+'i'+wPAPA8[j][1]+': '+wPAPA8[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										mIr002Z[12][k]=wPAPA8[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										//r002Z[k][12]=wPAPA8[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										mIr002B[12][2]=wPAPA8[j][6];
										//r002B[2][12]=wPAPA8[j][6];
										if(wPAPA8.length > 2)
										{ 	mIr002A[12][k]+=mIkTapaI[5][k];
											//r002A[k][12]+=kTapaI[k][5]; 
										}
										if(papas[i+1]==0)//Si el siguiente elemento es 0
										{	mIkComun[1][k]=wPAPA8[j][ext+k+2];
											//kComun[k][1]=wPAPA8[j][ext+k+2];
											for(let l = 3; l < ext + 3; l++)
											{	dExt[l-3] = wPAPA8[j][l];
											}
											switch(g00VARS[86][2])//Termino de buscar - 0:hay anuncios 1:No hay anuncios/ satelite
											{	case 0:
													mIr003A = mIc003A; 
													//r003A = c003A; 
													mIr003Z = mIc003Z;
													//r003Z = c003Z;
													mIr003B = mIc003B;
													//r003B = c003B;
												break;
												case 1:
													mIr003A[2][k][0] =mIkTapaI[30][k];
													//r003A[k][2][0] =kTapaI[k][30];
													mIr003Z = mIo003Z;
													//r003Z = o003Z;
													mIr003B = mIo003B;
													//r003B = o003B;
												break;
											 	case 2: 
											 		mIr003A[2][k][0] =mIkTapaI[31][k];
											 		//r003A[k][2][0] =kTapaI[k][31];
											 		mIr003Z = mIres3Z;
													//r003Z = res3Z;
													mIr003B = mIres3B;
													//r003B = res3B;
											 	break;
											}
										}
									}
								}
							}
						break;
						case 8://Papa9
							for (var j = wPAPA9.length - 1; j >= 1; j--)
							{	mIr002B[13][4]=1;//muestra el sitio
								//r002B[4][13]=1;//muestra el sitio
								if(ok&&(papas[i] == wPAPA9[j][0]))//buscar a papas[i] y cuando lo encuentre cargar los strings de mIr002A[9][x]
								{	ok = 0;
									for (var k = 1; k <= 4; k++)//Recorre todas las filas de idiomas que hay disponibles
									{	mIr002A[13][k]=mIkTapaI[27][k]+' '+(i+1)+'i'+wPAPA9[j][1]+': '+wPAPA9[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										//r002A[k][13]=kTapaI[k][27]+' '+(i+1)+'i'+wPAPA9[j][1]+': '+wPAPA9[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										mIr002Z[13][k]=wPAPA9[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										//r002Z[k][13]=wPAPA9[j][ext+k+2];//trae el string de los idiomas desde wPAPA2
										mIr002B[13][2]=wPAPA9[j][6];
										//r002B[2][13]=wPAPA9[j][6];
										if(wPAPA9.length > 2)
										{ 	mIr002A[13][k]+=mIkTapaI[5][k];
											//r002A[k][13]+=kTapaI[k][5]; 
										}
										if(papas[i+1]==0)//Si el siguiente elemento es 0
										{	mIkComun[1][k]=wPAPA9[j][ext+k+2];
											//kComun[k][1]=wPAPA9[j][ext+k+2];
											for(let l = 3; l < ext + 3; l++)
											{	dExt[l-3] = wPAPA9[j][l];
											}
											switch(g00VARS[86][2])//Termino de buscar - 0:hay anuncios 1:No hay anuncios/ satelite
											{	case 0:
													mIr003A = mIc003A; 
													//r003A = c003A; 
													mIr003Z = mIc003Z;
													//r003Z = c003Z;
													mIr003B = mIc003B;
													//r003B = c003B;
												break;
												case 1:
													mIr003A[2][k][0] =mIkTapaI[30][k];
													//r003A[k][2][0] =kTapaI[k][30];
													mIr003Z = mIo003Z;
													//r003Z = o003Z;
													mIr003B = mIo003B;
													//r003B = o003B;
												break;
											 	case 2: 
											 		mIr003A[2][k][0] =mIkTapaI[31][k];
											 		//r003A[k][2][0] =kTapaI[k][31];
											 		mIr003Z = mIres3Z;
													//r003Z = res3Z;
													mIr003B = mIres3B;
											 		//r003B = res3B;
											 	break;
											}
										}
									}
								}
							}
						break;
						case 9://Papa10
							for (var j = wPAPA10.length - 1; j >= 1; j--)
							{	mIr002B[14][4]=1;//muestra el sitio
								//r002B[4][14]=1;//muestra el sitio
								if(ok&&(papas[i] == wPAPA10[j][0]))//buscar a papas[i] y cuando lo encuentre cargar los strings de mIr002A[9][x]
								{	ok = 0;
									for (var k = 1; k <= 4; k++)//Recorre todas las filas de idiomas que hay disponibles
									{	mIr002A[14][k]=mIkTapaI[27][k]+' '+(i+1)+'i'+wPAPA10[j][1]+': '+wPAPA10[j][ext+k+2];//trae el string de los idiomas desde wPAPA10
										//r002A[k][14]=kTapaI[k][27]+' '+(i+1)+'i'+wPAPA10[j][1]+': '+wPAPA10[j][ext+k+2];//trae el string de los idiomas desde wPAPA10
										mIr002Z[14][k]=wPAPA10[j][ext+k+2];//trae el string de los idiomas desde wPAPA10
										//r002Z[k][14]=wPAPA10[j][ext+k+2];//trae el string de los idiomas desde wPAPA10
										mIr002B[14][2]=wPAPA10[j][6];
										//r002B[2][14]=wPAPA10[j][6];
										if(wPAPA10.length > 2)
										{ 	mIr002A[14][k]+=mIkTapaI[5][k];
											//r002A[k][14]+=kTapaI[k][5];  
										}
										mIkComun[1][k]=wPAPA10[j][ext+k+2];
										//kComun[k][1]=wPAPA10[j][ext+k+2];
										for(let l = 3; l < ext + 3; l++)
										{	dExt[l-3] = wPAPA10[j][l];
										}
										switch(g00VARS[86][2])//Termino de buscar - 0:hay anuncios 1:No hay anuncios/ satelite
										{	case 0:
												mIr003A = mIc003A; 
												//r003A = c003A; 
												mIr003Z = mIc003Z;
												//r003Z = c003Z;
												mIr003B = mIc003B;
												//r003B = c003B;
											break;
											case 1:
												mIr003A[2][k][0] =mIkTapaI[30][k];
												//r003A[k][2][0] =kTapaI[k][30];
												mIr003Z = mIo003Z;
												//r003Z = o003Z;
												mIr003B = mIo003B;
												//r003B = o003B;
											break;
											case 2: 
												mIr003A[2][k][0] =mIkTapaI[31][k];
												//r003A[k][2][0] =kTapaI[k][31];
												mIr003Z = mIres3Z;
												//r003Z = res3Z;
												mIr003B = mIres3B;
											 	//r003B = res3B;
											break;					
										}
									}
								}
							}
						break;
					}		
				}
				else//Si la casilla actual es 0 es o porque ya no hay hijos o porque es la cartelera local, la ruta termina aquí porque se interrumpe
				{	i = 10;//Termina el for
				}
			};
			mIr003B[1][2][0] = 53;
			//r003B[2][1][0] = 53;
			//console.log(' - - - rrr7 mIr003A[1][2]',mIr003A[1][2]);
			//console.log('|> Flag  125 -> 126');
			f0126();//ACTUALIZAR la ruta
		}

f0126=()=>//ACTUALIZAR la ruta
		{	lOG(126);
			let ruta = '';
			for (var i = 0; i < 11; i++)
			{		
				if(papas[i]!=0)//Si no es un cero
				{	ruta+='/'+papas[i];
				}
				else
				{	papas[i] = 0;
					i = 11;//Termina el for
				}			
			}
			document.location='#'+ruta;//+'-'+g00VARS[45][2];
			console.log(' - - - actualizando la ruta ',window.location.hash);
			if((!ncBD)&&(iniR))
			{	iniR = 0;//Va a cargar la ruta inicial
				console.log('ruta=',ruta);
				nruta = ruta.slice(1);//quita el # ajusta el string ruta
				//console.log('|> Flag  126 -> 142 *');
				f0142();//CONSULTAR a la base de datos por cierta collección
			}
		}

f0127=()=>//REGRESAR al tamaño de texto previo
		{	lOG(127);
			switch(g00VARS[33][2])
			{	case 1:
					g00VARS[33][2] = 7;
					mIr001B[14][4] = 1;			
					//r001B[4][14] = 1;
				break;
				case 2:
					g00VARS[33][2] = 1;
					mIr001B[8][4] = 1;			
					//r001B[4][8] = 1;
				break;
				case 3:
					g00VARS[33][2] = 2;
					mIr001B[9][4] = 1;			
					//r001B[4][9] = 1;
				break;
				case 4:
					g00VARS[33][2] = 3;
					mIr001B[10][4] = 1;			
					//r001B[4][10] = 1;
				break;
				case 5:
					g00VARS[33][2] = 4;
					mIr001B[11][4] = 1;			
					//r001B[4][11] = 1;
				break;
				case 6:
					g00VARS[33][2] = 5;
					mIr001B[12][4] = 1;			
					//r001B[4][12] = 1;
				break;
				case 7:
					g00VARS[33][2] = 6;
					mIr001B[13][4] = 1;			
					//r001B[4][13] = 1;
				break;
			}
		}

/*NOTA!
las funciones de la f0128() a la f0137() estan reservadas en inded.js para el servidor, aquí no se pueden usar ver tabla de registros en indet.js
*/

f0138=()=>//ACTUALIZAR tablas wPAPAx y datos debido al cambio de rumbo desde el navegador, si no existen tablas las deja vacias y oculta los botones respectivos de los sitios 
		{	lOG(138);



			//nota
			// pendiente detener proceso cuando papas[x]=0;




			//console.log(' - - - rrr7 A papas=',papas);
			for (var i = 6; i <= 14; i++)//5-[12-5]13 - 4 = 9, ini= 0 los oculta todos
			{	mIr002B[i][4]=0;//mIr002B[6-14][4] Ocultar botones de Ajustes 2 desde el actual (ini)
				//r002B[4][i]=0;//r002B[4][6-14] Ocultar botones de Ajustes 2 desde el actual (ini)
				papas[i - 5]=0;//borrar datos a la derecha de papas[ini]
			}

			console.log(' - - - rrr A papas=',papas,'; rumbo=',rumbo);
			//Actualizar papas - 
			for (var i = 0; i < rumbo.length; i++)//rumbo ['', '7']
			{	papas[i]=parseInt(rumbo[i]);
			}
			console.log(' - - - rrr B papas=',papas);
			
			
/*
quitar???

			//console.log(' - - - rrrrr B papas=',papas);
			//CREA un arreglo paralelo aparte con la ruta parcial QUE NO SE MODIFICO más el último cambio
			papas0 = [];//Reset
			papas1 = [];//Reset
			for (var i = 0; i < 10; i++)//la casilla 10 siempre es 0 no se usa
			{ 	if(papas[i]!=0)
				{	papas0[i] = papas[i];
				}
			}
			//console.log(' - - - rrr C papas0=',papas0);
			//buscar dentro de rutas sugeridas a papa0 (papas paralelo) y ver si lo encuentra..
			let siga = 1;
			for (var i = 0; i < wSug.length; i++)
			{	if(siga)
				{	let oks = 0;
					for (var j = 0; j < papas0.length; j++)
					{ 	if(wSug[i][j] == papas0[j])//compara la casilla j de la sugerencia i con la casilla j de papas0
						{	oks++;//suma un ok
						}
					}
					//console.log(' - - - rrr i=',i,'; oks=',oks,'; papas0.length=',papas0.length);
					if(oks == papas0.length)//tantos de tantos son iguales!
					{	siga = 0;//Para y no sigue buscando más
						//console.log(' - - - rrr BIIIIIIIINNNGOOOOO la ruta sugerida i=',i);
						//DEBE completar / actualizar la ruta con la ruta sugerida encontrada, con la ultima coinsidencia hasta donde pueda y si quedan hijos sueltos, luego completarla con numeros auto del resto de la ruta 
						
						for (var j = 1; j < wSug[i].length; j++)
						{	papas1[j] = wSug[i][j];//arreglo con el faltante de ruta sugerido
						}
					}
					else//no encontro sugerencias, debe poner los numeros auto del resto de la ruta
					{	//actualizar las listas desde aqui poniendo por defecto el primer elemento que encuentre
						//console.log(' - - - rrr debe iniciar la actualización de la ruta desde wPAPA',ini + 2);	
					}
				}
			}
*/


			//Cargar los wPAPAS hijos o dependientes desde 0
			let ff;
			let go;
			for (var j = 1; j < 11; j++)//j[1-10]Recorre los wPAPAx, los borra Y CREA DE NUEVO EN ORDEN A PARTIR DEL 'nuevo' rumbo
			{	switch(j)
				{	case 1:
						wPAPA2 = [];//Borra wPAPA2, hace de nuevo la lista wPAPA2 carga/actualiza los arrays hijos *
					/*	go = 1;//Buscando un elemento sugerido
						for (var i = 1; i < vPAPA2.length; i++)//recorre las filas de vPAPA2, mira si coincide con la sugerencia y es un hijo
						{ 	if((vPAPA2[i][0] == papas1[j])&&(vPAPA2[i][2] == papas[j-1]))
							{	go = 0;//el elemento sugerido existe y cumple go=1
								papas[j]=papas1[j];
							}
						}*/
						ff = 1;
						for (var i = 1; i < vPAPA2.length; i++)//Recorre el array de paises - lugares 1 
						{	if(vPAPA2[i][2] == papas[j-1])//si esa fila es un hijo de wPAPA1
							{	wPAPA2[ff] = [];
								for (var k = 0; k < vPAPA2[i].length; k++)
								{	wPAPA2[ff][k] = vPAPA2[i][k];
								}
								wPAPA2[ff][1] = ff;
								ff++;//Siguiente fila
								/*if(go)
								{	go = 0;//Deja de buscar un elemento
									papas[j] = vPAPA2[i][0];//Toma el primer id del string del elemento de la app que encuentre
								}*/
							}
						}
					break;
					case 2:
						wPAPA3 = [];//Borra wPAPA3, hace de nuevo la lista wPAPA3		
						//wPAPA3[0] = [wPapa1[0][2],0,wPapa1[0][4],'','','','','',wPapa1[0][0],wPapa1[0][ext+5],wPapa1[0][ext+6],wPapa1[0][ext+7]];
					/*	go = 1;//Buscando un elemento
						for (var i = 1; i < vPAPA3.length; i++)//recorre las filas de vPAPA3
						{ 	if((vPAPA3[i][0] == papas1[j])&&(vPAPA3[i][2] == papas[j-1]))
							{	go = 0;//el elemento sugerido existe y cumple go=1
								papas[j]=papas1[j];
							}
						}*/
						ff = 1;
						for (var i = 1; i < vPAPA3.length; i++)//Recorre el array de paises - lugares 1 
						{	if(vPAPA3[i][2] == papas[j-1])//si esa fila es visible y además es un hijo de wPAPA1
							{	wPAPA3[ff] = [];
								for (var k = 0; k < vPAPA3[i].length; k++)
								{	wPAPA3[ff][k] = vPAPA3[i][k];
								}
								wPAPA3[ff][1] = ff;
								ff++;//Siguiente fila
								/*if(go)
								{	go = 0;//Deja de buscar un elemento
									papas[j] = vPAPA3[i][2];//Toma el primer id del string del elemento de la app que encuentre
								}*/
							}
						}
					break;
					case 3:
						//console.log(' - - - rrrrr case 3 j=',j,'; ini=',ini);	
						wPAPA4 = [];//Borra wPAPA4, hace de nuevo la lista wPAPA4		
						
						//Cargar los titulos de wPAPA4..
						//wPAPA4[0] = [wPapa1[0][2],0,wPapa1[0][4],'','','','','',wPapa1[0][0],wPapa1[0][ext+5],wPapa1[0][ext+6],wPapa1[0][ext+7]];
						//wPAPA4[0] = [wPapa4[0][2],0,wPapa4[0][4],'','','','','',wPapa4[0][0],wPapa4[0][ext+5],wPapa4[0][ext+6],wPapa4[0][ext+7]];	
						//for(let m = 3; m < ext + 3; m++)//Adiciona los datos extras que van en ,''
						//{	wPAPA4[0][m] = wPapa4[0][m+2];
						//}


					/*	go = 1;//Buscando un elemento
						for (var i = 1; i < vPAPA4.length; i++)//recorre las filas de vPAPA4
						{ 	if((vPAPA4[i][0] == papas1[j])&&(vPAPA4[i][2] == papas[j-1]))
							{	go = 0;//el elemento sugerido existe y cumple go=1
								papas[j]=papas1[j];
							}
						}*/
						ff = 1;
						for (var i = 1; i < vPAPA4.length; i++)//Recorre el array de paises - lugares 1 
						{	if(vPAPA4[i][2] == papas[j-1])//si esa fila es visible y además es un hijo de wPAPA1
							{	wPAPA4[ff] = [];
								for (var k = 0; k < vPAPA4[i].length; k++)
								{	wPAPA4[ff][k] = vPAPA4[i][k];
								}
								wPAPA4[ff][1] = ff;
								ff++;//Siguiente fila
								/*if(go)
								{	go = 0;//Deja de buscar un elemento
									papas[j] = vPAPA4[i][2];//Toma el primer id del string del elemento de la app que encuentre
								}*/
							}
						}
					break;
					case 4:
						wPAPA5 = [];//Borra wPAPA5, hace de nuevo la lista wPAPA5		
						//wPAPA5[0] = [wPapa1[0][2],0,wPapa1[0][4],'','','','','',wPapa1[0][0],wPapa1[0][ext+5],wPapa1[0][ext+6],wPapa1[0][ext+7]];
					/*	go = 1;//Buscando un elemento
						for (var i = 1; i < vPAPA5.length; i++)//recorre las filas de vPAPA5
						{ 	if((vPAPA5[i][0] == papas1[j])&&(vPAPA5[i][2] == papas[j-1]))
							{	go = 0;//el elemento sugerido existe y cumple go=1
								papas[j]=papas1[j];
							}
						}*/
						ff = 1;
						for (var i = 1; i < vPAPA5.length; i++)//Recorre el array de paises - lugares 1 
						{	if(vPAPA5[i][2] == papas[j-1])//si esa fila es visible y además es un hijo de wPAPA1
							{	wPAPA5[ff] = [];
								for (var k = 0; k < vPAPA5[i].length; k++)
								{	wPAPA5[ff][k] = vPAPA5[i][k];
								}
								wPAPA5[ff][1] = ff;
								ff++;//Siguiente fila
							/*	if(go)
								{	go = 0;//Deja de buscar un elemento
									papas[j] = vPAPA5[i][2];//Toma el primer id del string del elemento de la app que encuentre
								}*/
							}
						}
					break;
					case 5:
						wPAPA6 = [];//Borra wPAPA6, hace de nuevo la lista wPAPA6		
						//wPAPA6[0] = [wPapa1[0][2],0,wPapa1[0][4],'','','','','',wPapa1[0][0],wPapa1[0][ext+5],wPapa1[0][ext+6],wPapa1[0][ext+7]];
					/*	go = 1;//Buscando un elemento
						for (var i = 1; i < vPAPA6.length; i++)//recorre las filas de vPAPA6
						{ 	if((vPAPA6[i][0] == papas1[j])&&(vPAPA6[i][2] == papas[j-1]))
							{	go = 0;//el elemento sugerido existe y cumple go=1
								papas[j]=papas1[j];
							}
						}*/
						ff = 1;
						for (var i = 1; i < vPAPA6.length; i++)//Recorre el array de paises - lugares 1 
						{	if(vPAPA6[i][2] == papas[j-1])//si esa fila es visible y además es un hijo de wPAPA1
							{	wPAPA6[ff] = [];
								for (var k = 0; k < vPAPA6[i].length; k++)
								{	wPAPA6[ff][k] = vPAPA6[i][k];
								}
								wPAPA6[ff][1] = ff;
								ff++;//Siguiente fila
							/*	if(go)
								{	go = 0;//Deja de buscar un elemento
									papas[j] = vPAPA6[i][2];//Toma el primer id del string del elemento de la app que encuentre
								}*/
							}
						}
					break;
					case 6:
						wPAPA7 = [];//Borra wPAPA7, hace de nuevo la lista wPAPA7		
						//wPAPA7[0] = [wPapa1[0][2],0,wPapa1[0][4],'','','','','',wPapa1[0][0],wPapa1[0][ext+5],wPapa1[0][ext+6],wPapa1[0][ext+7]];
					/*	go = 1;//Buscando un elemento
						for (var i = 1; i < vPAPA7.length; i++)//recorre las filas de vPAPA7
						{ 	if((vPAPA7[i][0] == papas1[j])&&(vPAPA7[i][2] == papas[j-1]))
							{	go = 0;//el elemento sugerido existe y cumple go=1
								papas[j]=papas1[j];
							}
						}*/
						ff = 1;
						for (var i = 1; i < vPAPA7.length; i++)//Recorre el array de paises - lugares 1 
						{	if(vPAPA7[i][2] == papas[j-1])//si esa fila es visible y además es un hijo de wPAPA1
							{	wPAPA7[ff] = [];
								for (var k = 0; k < vPAPA7[i].length; k++)
								{	wPAPA7[ff][k] = vPAPA7[i][k];
								}
								wPAPA7[ff][1] = ff;
								ff++;//Siguiente fila
							/*	if(go)
								{	go = 0;//Deja de buscar un elemento
									papas[j] = vPAPA7[i][2];//Toma el primer id del string del elemento de la app que encuentre
								}*/
							}
						}
					break;
					case 7:
						wPAPA8 = [];//Borra wPAPA8, hace de nuevo la lista wPAPA8		
						//wPAPA8[0] = [wPapa1[0][2],0,wPapa1[0][4],'','','','','',wPapa1[0][0],wPapa1[0][ext+5],wPapa1[0][ext+6],wPapa1[0][ext+7]];
					/*	go = 1;//Buscando un elemento
						for (var i = 1; i < vPAPA8.length; i++)//recorre las filas de vPAPA8
						{ 	if((vPAPA8[i][0] == papas1[j])&&(vPAPA8[i][2] == papas[j-1]))
							{	go = 0;//el elemento sugerido existe y cumple go=1
								papas[j]=papas1[j];
							}
						}*/
						ff = 1;
						for (var i = 1; i < vPAPA8.length; i++)//Recorre el array de paises - lugares 1 
						{	if(vPAPA8[i][2] == papas[j-1])//si esa fila es visible y además es un hijo de wPAPA1
							{	wPAPA8[ff] = [];
								for (var k = 0; k < vPAPA8[i].length; k++)
								{	wPAPA8[ff][k] = vPAPA8[i][k];
								}
								wPAPA8[ff][1] = ff;
								ff++;//Siguiente fila
							/*	if(go)
								{	go = 0;//Deja de buscar un elemento
									papas[j] = vPAPA8[i][2];//Toma el primer id del string del elemento de la app que encuentre
								}*/
							}
						}
					break;
					case 8:
						wPAPA9 = [];//Borra wPAPA9, hace de nuevo la lista wPAPA9		
						//wPAPA9[0] = [wPapa1[0][2],0,wPapa1[0][4],'','','','','',wPapa1[0][0],wPapa1[0][ext+5],wPapa1[0][ext+6],wPapa1[0][ext+7]];
					/*	go = 1;//Buscando un elemento
						for (var i = 1; i < vPAPA9.length; i++)//recorre las filas de vPAPA9
						{ 	if((vPAPA9[i][0] == papas1[j])&&(vPAPA9[i][2] == papas[j-1]))
							{	go = 0;//el elemento sugerido existe y cumple go=1
								papas[j]=papas1[j];
							}
						}*/
						ff = 1;
						for (var i = 1; i < vPAPA9.length; i++)//Recorre el array de paises - lugares 1 
						{	if(vPAPA9[i][2] == papas[j-1])//si esa fila es visible y además es un hijo de wPAPA1
							{	wPAPA9[ff] = [];
								for (var k = 0; k < vPAPA9[i].length; k++)
								{	wPAPA9[ff][k] = vPAPA9[i][k];
								}
								wPAPA9[ff][1] = ff;
								ff++;//Siguiente fila
							/*	if(go)
								{	go = 0;//Deja de buscar un elemento
									papas[j] = vPAPA9[i][2];//Toma el primer id del string del elemento de la app que encuentre
								}*/
							}
						}
					break;
					case 9:
						wPAPA10 = [];//Borra wPAPA10, hace de nuevo la lista wPAPA10		
						//wPAPA10[0] = [wPapa1[0][2],0,wPapa1[0][4],'','','','','',wPapa1[0][0],wPapa1[0][ext+5],wPapa1[0][ext+6],wPapa1[0][ext+7]];
					/*	go = 1;//Buscando un elemento
						for (var i = 1; i < vPAPA10.length; i++)//recorre las filas de vPAPA10
						{ 	if((vPAPA10[i][0] == papas1[j])&&(vPAPA10[i][2] == papas[j-1]))
							{	go = 0;//el elemento sugerido existe y cumple go=1
								papas[j]=papas1[j];
							}
						}*/
						ff = 1;
						for (var i = 1; i < vPAPA10.length; i++)//Recorre el array de paises - lugares 1 
						{	if(vPAPA10[i][2] == papas[j-1])//si esa fila es visible y además es un hijo de wPAPA1
							{	wPAPA10[ff] = [];
								for (var k = 0; k < vPAPA10[i].length; k++)
								{	wPAPA10[ff][k] = vPAPA10[i][k];
								}
								wPAPA10[ff][1] = ff;
								ff++;//Siguiente fila
							/*	if(go)
								{	go = 0;//Deja de buscar un elemento
									papas[j] = vPAPA10[i][2];//Toma el primer id del string del elemento de la app que encuentre
								}*/
							}
						}
					break;
				}
			}
			//cuando muestra la cartelera local
			//console.log(' - - - rrrrr f0124 fin A papas=',papas,';\n wPAPA2=',wPAPA2,';\n wPAPA3=',wPAPA3,';\n wPAPA4=',wPAPA4,';\n wPAPA5=',wPAPA5,';\n wPAPA6=',wPAPA6);
			//BUSCAR SI HAY ALGUNA RUTA SUGERIDA QUE PASE POR HAY
			//papas0 = [7, 1, 1, 1, 1]

/**/

		}

/*
f0139=()=>//CARGAR el anuncio vacio en r003
		{	lOG(139);

		}

*/

/*
f0139=()=>//CARGAR el anuncio vacio en r003
		{	lOG(139);
			mIr003A = mIo003A;
			console.error(' mIr003A=',mIr003A);
			mIr003Z = mIo003Z;
			mIr003B = mIo003B;
			g00VARS[86][2]=1;
			//g00VARS[86][2]=2;
		}

f0140=()=>//CARGAR anuncios en mIr003
		{	lOG(140);
			mIr003A = mIc003A;
			console.error(' mIr003A=',mIr003A);
			mIr003Z = mIc003Z;
			mIr003B = mIc003B;
			g00VARS[86][2]=0;
		}

*/

f0141=()=>//ENRUTAR al usuario con rutas validas y TRAER anuncios de la ruta actual de la base de datos
		{	lOG(141);
			let ruta = window.location.hash;
			nruta = ruta.slice(1);//quita el # ajusta el string ruta
			let bin = 0;//Desactivar el bingo para verificar que la ruta existe..
			for (var i = 0; i < rutas.length; i++)
			{	if(nruta == rutas[i])//Bingo! la ruta existe!
				{	nruta = nruta.slice(1)//quita el primer/
					i = rutas.length;
					bin = 1;
				}
				if(nruta == rutas[i]+'/')//Bingo! la ruta existe!
				{	nruta = nruta.slice(1,-1)//quita el primer y último/
					i = rutas.length;
					bin = 1;
				}
			}		
			if(bin)//Si la ruta existe debe actualizar los lugares automaticamente
			{	//console.log('|> Flag  141 -> 142 * * *');
				f0142();//CONSULTAR a la base de datos por cierta collección Valida
			}
			else
			{	console.error(' -> La ruta=',ruta,' NO existe; Error 404! cancelando el cambio de rumbo');
				window.location = loC;//Reestablece la última ruta valida
			}
			loC = window.location.hash;//Actualiza la ruta valida
		}

/* - - - USANDO MONGO - - - * 
f0142=()=>//CONSULTAR a la base de datos por cierta collección Valida
		{	lOG(142);
			//BUSCANDO DATOS
			mIr003A = mIres3A;
			//r003A = res3A;
			mIr003Z = mIres3Z;
			//r003Z = res3Z;
			mIr003B = mIres3B;
			//r003B = res3B;
			g00VARS[86][2]=2;//Buscando anuncios

			//Aquí falta actualizar los strings de mIr003A y de tambien de los botones si esta en menu o ruta!!!
			//ACTUALIZAR tablas wPAPAx y datos debido al cambio de rumbo desde el navegador, si no existen tablas las deja vacias y oculta los botones respectivos de los sitios y debe quedar esperando por la llegada de los anuncios

			rumbi = '';
			rumbo = nruta.split('/');//array de nruta separada con las barras inclinadas

			//console.log('|> Flag 142 -> 138');
			f0138();//(*rumbo debe declararse primero) ACTUALIZAR tablas wPAPAx y datos debido al cambio de rumbo desde el navegador, si no existen tablas las deja vacias y oculta los botones respectivos de los sitios 
			//console.log('|> Flag 142 -> 125');
			f0125(0);//ESTABLECER O ACTUALIZAR el string de los botones de los sitios.

			//Actalizar el frontend con datos de busqueda
			if(gRuta == 2)
			{	if(gFoco > rumbo.length + 2)//gFoco es mayor que rumbo + 2
				{	gFoco = rumbo.length + 2;
				}
				f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
				//f0017(1);//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
			}
			if((gRuta == 3)||(gRuta == 4))
			{	f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
				//f0017(1);//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
			}
			console.log(' - - - rumbo=',rumbo);
			rumbi = rumbo.join('i');//String de nruta separada con i'es
			console.log(' - - - rumbi=',rumbi);
			if(rumbi!=rumba)//Si no es igual a su pasado en el navegador
			{	ncBD = ncBD + 1;//Nueva consulta a la BD
				console.log(' - - - consulta ',ncBD,' a la base de datos con rumbi=',rumbi);

				//INICIAR la consulta..
				setTimeout(()=>//Reduce el conteo para activar la presentación
				{	naBD = naBD + 1;//Actualiza el pasado de rumbi en la base de datos
					if(naBD>ncBD)//Si las respuestas resultan mayores que las solicitudes
					{  ncBD = naBD;//Iguala los dos valores para corregir ese error por si alguna vez sucede
					}
					if(naBD==ncBD)//Si el número de consulta no ha cambiado y es igual al número anterior de consulta a la base de datos entonces..
					{	console.error(' - - - LA RESPUESTA esperada! son iguales! naBD=',naBD,' Y ncBD=',ncBD);


						/* SWITCH CON LA BASE DE DATOS MONGO mongo* /
						//INICIAR consulta a la base de datos y buscar si la ruta existe traer los anuncios para cargar r003 
						let xhr = new XMLHttpRequest();//AJAX
						//xhr.open("GET",'http://localhost:3000/'+nruta);
						//xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
						xhr.responseType = "json";
						//xhr.onreadystatechange = () =>//cuando readyState = 4
						xhr.onload = () =>//s1 cuando readyState = 4
						{	console.log('-  message sent from server:');
							if ((xhr.readyState == 4)&&(xhr.status == 200))
							{	data = xhr.response;//*colección xixixixix de los anuncios JSON
								console.log('-- ready! status=',xhr.status,' and readyState=',xhr.readyState);//s2
								console.log('-- server response (data) =',data);
								mIr003A		=[	['Casillas'	,'Head'	,'Others'],
												[1		,['','here you can see the announcements published by local leaders, contact us: ilifebogota@gmail.com'				,'on this website you will find information accessible through seven modes'		,'Navigation, to navigate there are 6 navigation buttons, on the screen they go from top to bottom'		,'there are 3 buttons on the left side, the square menu button, the diagonal button to cancel or exit and the triangle button up to go up or back'					,'and on the right side there are 3 other buttons, the vertical quick information bar button, the round button to accept or enter and the down triangle button to go down or go forward'		,'To enable navigation buttons on a physical keyboard, turn on caps lock button'										,'square button is 7 or N, diagonal button is 4 or M, triangle up button is 1 or comma, the vertical bar button is 9 or V, the round button is 6, C or space, and the down triangle button is 3, X or tab']																				,['Vacio']],
												[2		,['','aquí podrás conocer los anuncios publicados por los líderes locales, contáctanos: ilifebogota@gmail.com'		,'en este sitio web encontrará información accesible a través de siete modos'	,'Navegación, para navegar hay 6 botones de navegación, en pantalla van desde arriba hacia abajo'		,'hay 3 botones al lado izquierdo, el botón cuadrado de menú, el botón diagonal para cancelar o salir y el botón de triángulo hacia arriba para subir o retroceder'	,'y al lado derecho hay otros 3 botones, el botón barra vertical de información rápida, el botón redondo para aceptar o ingresar y el botón de triángulo hacia abajo para ir abajo o avanzar'	,'Para habilitar los botones de navegación en un teclado físico, active el botón de bloqueo de mayúsculas'				,'el botón cuadrado es el 7 o la N, el botón diagonal es el 4 o la M, el botón de triángulo hacia arriba es el 1 o la coma, el botón barra vertical es el 9 o la V, el botón redondo es el 6, la C o el espacio, y el botón de triángulo hacia abajo es el 3, la X o el tabulador']		,['Vacio']],
												[3		,['','ici vous pouvez voir les annonces publiées par les dirigeants locaux, contactez-nous: ilifebogota@gmail.com'	,"sur ce site vous trouverez des informations accessibles à travers sept modes"	,"Navigation, pour naviguer il y a 6 boutons de navigation, sur l'écran ils vont de haut en bas"		,"il y a 3 boutons sur le côté gauche, le bouton menu carré, le bouton diagonal pour annuler ou sortir et le bouton triangle haut pour monter ou dos"				,"et sur le côté droit il y a 3 autres boutons, le bouton barre d'information rapide verticale, le bouton rond pour accepter ou entrer et le bouton triangle bas pour descendre ou avancer"		,"Pour activer les boutons de navigation sur un clavier physique, activez le bouton de verrouillage des majuscules"		,"le bouton carré est 7 ou N, le bouton diagonal est 4 ou M, le bouton triangle vers le haut est 1 ou virgule, le bouton de la barre verticale est 9 ou V, le bouton rond est 6, C ou espace, et le bouton triangle vers le bas est 3, X ou tabulation"]								,['Vacio']],
												[4		,['','여기에서 지역 지도자들이 게시한 공지 사항을 볼 수 있습니다. ilifebogota@gmail.com으로 문의하십시오.'								,"이 웹사이트에서 7가지 모드를 통해 액세스할 수 있는 정보를 찾을 수 있습니다"						,"탐색, 탐색을 위해 화면에서 위에서 아래로 이동하는 6개의 탐색 버튼이 있습니다."											,"왼쪽에는 사각형 메뉴 버튼, 취소 또는 종료를 위한 대각선 버튼, 위로 또는 뒤로 가기를 위한 위쪽 삼각형 버튼 3개의 버튼이 있습니다."																	,"오른쪽에는 3개의 다른 버튼이 있습니다. 세로 빠른 정보 표시줄 버튼, 수락 또는 입력을 위한 원형 버튼, 아래로 이동 또는 앞으로 이동을 위한 아래쪽 삼각형 버튼입니다."																	,"실제 키보드에서 탐색 버튼을 활성화하려면 Caps Lock 버튼을 켜십시오."																	,"사각형 버튼은 7 또는 N, 대각선 버튼은 4 또는 M, 삼각형 위쪽 버튼은 1 또는 쉼표, 세로 막대 버튼은 9 또는 V, 둥근 버튼은 6 , C 또는 스페이스, 아래쪽 삼각형 버튼은 3, X, 또는 탭"]																																			,['Vacio']]
											];
								mIr003Z		=[	['Casillas'	,'Head'																																																																																													,'Others'],
												[1		,['photography of the place'	,'reading person icon'			,'There are four blue icons: wheelchair person, deaf ear, blind eye and the last one is an icon with 2 faces'					,'In front of a laptop is an adult man without his right arm, the man looks at the screen and holds his glasses with his left hand'						 ,''	,''		,''		,'']	,['Moving satellite']],
												[2		,['fotografía del lugar'		,'icono de persona leyendo'		,'Hay cuatro iconos azules: persona en silla de ruedas, oído sordo, ojo ciego y el último es un icono con 2 caras'	 			,'Frente a una computadora portátil hay un hombre adulto sin su brazo derecho, el hombre mira la pantalla y sostiene sus anteojos con la mano izquierda' ,''	,''		,''		,'']	,['Satélite en movimiento']],
												[3		,['photographie du lieu'		,'icône de la personne qui lit'	,"Il y a quatre icônes bleues : personne en fauteuil roulant, sourde oreille, aveugle et la dernière est une icône à 2 visages"	,"Devant un ordinateur portable se trouve un homme adulte sans son bras droit, l'homme regarde l'écran et tient ses lunettes avec sa main gauche"		 ,''	,''		,''		,'']	,['satellite en mouvement']],
												[4		,['장소의 사진'					,'읽는 사람 아이콘'					,"Il y a quatre icônes bleues : personne en fauteuil roulant, sourde oreille, aveugle et la dernière est une icône à 2 visages"	,"Devant un ordinateur portable se trouve un homme adulte sans son bras droit, l'homme regarde l'écran et tient ses lunettes avec sa main gauche"		 ,''	,''		,''		,'']	,['움직이는 위성']]
											];
								mIr003B		=[	['Recursos/ Casillas..'										,'Head'	,'Others'],
												['1 0:Imag,1:Icon,2:Texto,3ImagenA,4VideoA'					,[3	,1	,3	,3	,3	,3	,3	,3]	,[1]],
												['2 id de la Imag, Icon o Texto'							,[31,3	,16	,12	,13	,8 	,9 ,10]	,[84]],
												['3 onclick function,vacio=NO PERMITIDA(INFO)/id"apuntador"',0		,0],
												['4 Visible 1:SI 0:no'										,1		,1],
												['5 0:FotI 1:Vide 2:FotM 3:Text 4:In 5:Out'					,[0,0,0,0,0,0,0,0]	,[0]],
												['6 id Video([5]1) o id foto([5]0/2)'						,[0,0,0,0,0,0,0,0]	,[0]],
												['7 id Texto Icono'											,[0,0,0,0,0,0,0,0]	,[0]],
												['8 ids Iconos Capa1'										,[0,0,0,0,0,0,0,0]	,[0]],
												['9 ids Iconos Capa2'										,[0,0,0,0,0,0,0,0]	,[0]],
												['10 Capa3 Estado 0: 1:/ 2:_ 3: ? 4: -'						,[0,0,0,0,0,0,0,0]	,[0]]
											];
								//console.log(' typeof data =', typeof data);//string
								//JSON.parse(data);//Convertir una cadena del JSON en un objeto, para ello se usa el metodo parse
								let jsData = data;
								console.log(' typeof jsData =', typeof jsData);//object
								console.log(' .. jsData.length =', jsData.length);//234
								for (var i = 0; i < jsData.length; i++)//Convertir el objeto JS en 3 arrays de r003
								{	mIr003A[i+2][1]= jsData[i].r3A1;
									mIr003A[i+2][2]= jsData[i].r3A2;
									mIr003A[i+2][3]= jsData[i].r3A3;
									mIr003A[i+2][4]= jsData[i].r3A4;
									mIr003Z[i+2][1]= jsData[i].r3Z1;
									mIr003Z[i+2][2]= jsData[i].r3Z2;
									mIr003Z[i+2][3]= jsData[i].r3Z3;
									mIr003Z[i+2][4]= jsData[i].r3Z4;
									mIr003B[i+2][1]= jsData[i].r3B1;
									mIr003B[i+2][2]= jsData[i].r3B2;
									mIr003B[i+2][3]= jsData[i].r3B3;
									mIr003B[i+2][4]= jsData[i].r3B4;
									mIr003B[i+2][5]= jsData[i].r3B5;
									mIr003B[i+2][6]= jsData[i].r3B6;
									mIr003B[i+2][7]= jsData[i].r3B7;
									mIr003B[i+2][8]= jsData[i].r3B8;
									mIr003B[i+2][9]= jsData[i].r3B9;
									mIr003B[i+2][10]= jsData[i].r3B10;
								}
								mIc003A = mIr003A;
								mIc003Z = mIr003Z;
								mIc003B = mIr003B;
								if(data.length)//Bingo!
								{	g00VARS[86][2]=0;
									console.error('- rta SI hay anuncios -');
								}
								else// no hay información
								{	g00VARS[86][2]=1;
									console.error('- rta NO hay anuncios  -');
								}
								f0138();//ACTUALIZAR tablas wPAPAx y datos debido al cambio de rumbo desde el navegador, si no existen tablas las deja vacias y oculta los botones respectivos de los sitios 
								f0125(0);//ESTABLECER O ACTUALIZAR el string de los botones de los sitios.
								//Actalizar el frontend con la respuesta de la busqueda
								if(gRuta == 2)
								{	if(gFoco > rumbo.length + 2)//gFoco es mayor que rumbo + 2
									{	gFoco = rumbo.length + 2;
									}
									f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
									//f0017(1);//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
								}
								if((gRuta == 3)||(gRuta == 4))
								{	f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
									//f0017(1);//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
								}
							}
							else
							{	console.error('-- Error: status=',xhr.status,' and readyState=',xhr.readyState);//s2
								//console.log('Error: ',xhr.status);//s1
							}
						};
						xhr.open("GET",'http://localhost:3000/'+nruta);
						//xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
						console.log('- send the query to the server...');
						xhr.send();//Envía la solicitud al servidor
						/***/




						/* SWITCH SIN LA BASE DE DATOS MONGO mongo* 
						//if(nruta == '7/1/8/2/2')//Bingo!
						if(nruta == '7/1/8/4')//Bingo!
						{	g00VARS[86][2]=0;
							//f0140();//CARGAR anuncios en r003
							console.error('  - 0 rta SI hay anuncios -');
						}
						else// no hay información
						{	g00VARS[86][2]=1;
							//f0139();//CARGAR el anuncio vacio en r003
							console.error(' - 1 rta NO hay anuncios -');
						}
						f0138();//ACTUALIZAR tablas wPAPAx y datos debido al cambio de rumbo desde el navegador, si no existen tablas las deja vacias y oculta los botones respectivos de los sitios 
						f0125(0);//ESTABLECER O ACTUALIZAR el string de los botones de los sitios.
						//Actalizar el frontend con la respuesta de la busqueda
						if(gRuta == 2)
						{	if(gFoco > rumbo.length + 2)//gFoco es mayor que rumbo + 2
							{	gFoco = rumbo.length + 2;
							}
							f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
							//f0017(1);//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
						}
						if((gRuta == 3)||(gRuta == 4))
						{	f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
							//f0017(1);//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
						}
						/** 




					}
					else//Si la solicitud ha cambiado
					{	//No hace nada, aquí simplemente espera a que llegue la ultima solicitud donde rumbi = rumbd
						console.error(' - - - RESPUESTA NO esperada! naBD=',naBD,' y ncBD=',ncBD);
					}	
				}			
				,4000);//Demora de la respuesta
			}
			rumba = rumbi;//Actualiza el pasado de rumbi en el navegador
		}
/***/

/* - - - SIN USAR MONGO - - - */
f0142=()=>//CONSULTAR a la base de datos por cierta collección Valida
		{	lOG(142);
			//BUSCANDO DATOS
			mIr003A = mIres3A;
			//console.error(' mIr003A=',mIr003A);
			mIr003Z = mIres3Z;
			mIr003B = mIres3B;
			g00VARS[86][2]=2;//Buscando anuncios


			

			//Aquí falta actualizar los strings de mIr003A y de tambien de los botones si esta en menu o ruta!!!
			//ACTUALIZAR tablas wPAPAx y datos debido al cambio de rumbo desde el navegador, si no existen tablas las deja vacias y oculta los botones respectivos de los sitios y debe quedar esperando por la llegada de los anuncios
					

			rumbi = '';
			rumbo = nruta.split('/');//array de nruta separada con las barras inclinadas


	
			console.log('|> Flag 142 -> 138');
			f0138();//(*rumbo debe declararse primero) ACTUALIZAR tablas wPAPAx y datos debido al cambio de rumbo desde el navegador, si no existen tablas las deja vacias y oculta los botones respectivos de los sitios 
			console.log('|> Flag 142 -> 125');
			f0125(0);//ESTABLECER O ACTUALIZAR el string de los botones de los sitios.


			//Actalizar el frontend con datos de busqueda
			if(gRuta == 2)
			{	if(gFoco > rumbo.length + 2)//gFoco es mayor que rumbo + 2
				{	gFoco = rumbo.length + 2;
				}
				f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
				//f0017(1);//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
			}
			if((gRuta == 3)||(gRuta == 4))
			{	f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
				//f0017(1);//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
			}


			console.log(' - - - rumbo=',rumbo);
			rumbi = rumbo.join('i');//String de nruta separada con i'es
			console.log(' - - - rumbi=',rumbi);
			if(rumbi!=rumba)//Si no es igual a su pasado en el navegador
			{	ncBD = ncBD + 1;//Nueva consulta a la BD
				console.error(' - - - consulta ',ncBD,' a la base de datos con iads=',rumbi);
				setTimeout(()=>//Reduce el conteo para activar la presentación
				{	naBD = naBD + 1;//Actualiza el pasado de rumbi en la base de datos
					if(naBD>ncBD)//Si las respuestas resultan mayores que las solicitudes
					{  ncBD = naBD;//Iguala los dos valores para corregir ese error por si alguna vez sucede
					}
					if(naBD==ncBD)//Si el número de consulta no ha cambiado y es igual al número anterior de consulta a la base de datos entonces..
					{	console.error(' - - - LA RESPUESTA esperada! son iguales! naBD=',naBD,' Y ncBD=',ncBD);

						
						//AQUI debe iniciar la consulta a la base de datos y buscar
						//si la ruta rumbi existe y traer los anuncios para cargar r003 
						
	
						//g00VARS[86][2]=1;
						//g00VARS[86][2]=1;
	
	
						if(nruta == '7/1/8/2/2')//Bingo!
						{	g00VARS[86][2]=0;
							console.error('  - 0 rta SI hay anuncios -');
						}
						else// no hay información
						{	g00VARS[86][2]=1;
							console.error(' - 1 rta NO hay anuncios -');
						}



						f0138();//ACTUALIZAR tablas wPAPAx y datos debido al cambio de rumbo desde el navegador, si no existen tablas las deja vacias y oculta los botones respectivos de los sitios 
						f0125(0);//ESTABLECER O ACTUALIZAR el string de los botones de los sitios.
						


						//Actalizar el frontend con la respuesta de la busqueda
						if(gRuta == 2)
						{	if(gFoco > rumbo.length + 2)//gFoco es mayor que rumbo + 2
							{	gFoco = rumbo.length + 2;
							}
							f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
							//f0017(1);//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
						}
						if((gRuta == 3)||(gRuta == 4))
						{	f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
							//f0017(1);//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
						}



					}
					else//Si la solicitud ha cambiado
					{	//No hace nada, aquí simplemente espera a que llegue la ultima solicitud donde rumbi = rumbd
						console.error(' - - - RESPUESTA NO esperada! naBD=',naBD,' y ncBD=',ncBD);
					}
					
				}			
				,4000);//Demora de la respuesta
			}
			rumba = rumbi;//Actualiza el pasado de rumbi en el navegador
		}
/***/


f0143=(info)=>//ENCONTRAR todos los elementos cBrai
		{	lOL(143);
			if(info)
			{	colBrai = document.getElementsByClassName("cBraIl");
				colBra1 = document.getElementsByClassName("cBraI1");
				iBrAi.innerHTML = colBrai[0].textContent;
				iBrail.classList.remove('cX');
			}
			else
			{	colBrai = document.getElementsByClassName("cBrai");
				colBra1 = document.getElementsByClassName("cBra1");
				if(colBrai[gFoco])
				{	iBrAi.innerHTML = colBrai[gFoco].textContent;
				}
				if(g00VARS[11][2] != 3)
				{	iBrail.classList.add('cX');
				}
			}
						
			//colTxtL = document.getElementsByClassName("zTxtL");//prueba
		}


f0144=()=>//ESPERAR un momento y dar la orden de cambiar de anuncio
		{	lOL(144);
			//console.error(' - 1seg -');
			setTimeout(()=>
			{	contPre[0] = 1;
			}
			,0);//este valor se puede dejar en 0, se puede modificar por ejemplo 1000 para dar 1000 miliseg más de lectura
		}


/*Funciones relacionadas con la "interface M", es decir todas aquellas que
permiten que el usuario elija un modo para el envío de información ya sea en clave Morse,
Audio, teclado, señas, etc.*/

//inicio funciones del teclado de la interfaz M:
const output = document.getElementById('iIntM0');
const keYs = document.querySelectorAll('.keY');//Teclado Virtual - Seleccionar todos los elementos con la clase "keY"

// Listener para registrar eventos de clics en las teclas virtuales
/*keYs.forEach(key => {
//document.querySelectorAll('.keY').forEach(key => {
    key.addEventListener('click', () => {
        console.log(`Tecla virtual presionada: ${key.textContent}`);
    });
});*/
// Handle click events - Virtual Key Board
keYs.forEach(key => {
    key.addEventListener('click', () => 
	{	console.log(`Tecla virtual presionada: ${key.textContent}`);
        handleKeyPress(key.textContent);
    });
});



let isShiftActive = false;
let lastKeyPressed = '';
let mViS = 0;//Visibilidad de la salida M 0-Off 1-On
let mMod = 0;//Modo de la salida M 0 morse, 1 querty, 2 querty doble
let mCon = 0;// Contador de segundos
let mTim = 0;// Variable para almacenar el temporizador


f0145=()=>//CONTROLAR la salida de la interfaz M y la opacidad segun el estado (st) 1:ACTIVAR la salida de la interfaz M y quitar la opacidad y 0:Hace todo lo contrario
		{	lOL(145);
			if(!mViS)//si el display esta apagado.. implica modo 0 por el apagado y reset
			{	//ACTIVAR la salida de la interfaz M y quitar la opacidad:
				iIntM0.classList.remove('cX');//Enciende el display de la interfaz M
				mViS = 1;//Se prendio el display
				iTaco.style.opacity='0.8';
			}
			else//El display M esta prendido
			{	if(mMod)//si el modo no es 0 (si es distinto de 0)
				{	f0147();//RESETEAR la interfaz de Salida M (por defecto, sin mMod ni mViS) y apagar el display
					f0145();//Vuelve a inicar el proceso
				}
			}
			//sigue con las otras tareas Morse...
			f0146();//DETECTAR los eventos, si es el último evento sobre el botón 5 o la interfaz M resetea la interfaz M
		}

f0146=()=>//ACTIVAR o RESETEAR un contador que al terminar de contar resetea la interfaz M y apaga el display M
		{	lOL(146);
			// Reiniciar el contador y el temporizador
			clearInterval(mTim);
			mCon = 0;
			// Iniciar un nuevo temporizador
			mTim = setInterval(() =>
			{	mCon++;
				console.log('mCon=',mCon);
                if (mCon >= 30) {
                    console.log("30 segundos");
					f0147();//RESETEAR la interfaz de Salida M (por defecto, sin mMod ni mViS) y apagar el display
                    clearInterval(mTim); // Detener el temporizador al alcanzar 100 segundos
                }
            }, 1000); // Incrementar cada 1 segundo
		};

f0147=()=>//RESETEAR la interfaz de Salida M (por defecto, sin mMod ni mViS) y apagar el display
		{	lOL(147);
			if(mViS)
			{	//Resetear la intefaz M y apagar el display
				mViS = 0;//Visibilidad de la salida M 0-Off
				mMod = 0;
				mCon = 0;//Reset clics Morse
				iIntM0.classList.add('cX');//Apaga el display de la interfaz M
				f0149();//RESETEAR la interfaz de Salida M (por defecto, sin mMod ni mViS)
				iTaco.classList.remove('cX');//Muestra la tabla Morse translucida.
			}
		};

f0148=()=>//MOSTRAR la interfaz de Salida M que corresponda porque se oprimio 0 (/)
		{	lOL(148);
			f0146();//DETECTAR los eventos, si es el último evento sobre el botón 5 o la interfaz M resetea la interfaz M
    		mMod++;
			if(mMod>=4)
			{	mMod = 0;//Reinicia al modo Morse
			}
			if(!mViS)//Si el display esta apagado lo enciende
			{	iIntM0.classList.remove('cX');
				mViS = 1;
			}
			f0149();//RESETEAR la interfaz de Salida M (por defecto, sin mMod ni mViS)
			switch(mMod)
			{	case 0:
					iTaco.style.opacity='0.8';
					iTaco.classList.remove('cX');
				break;
				case 1:
					iKeyB.style.height = '35vh';
					iKeyB.classList.remove('cX');
				break;
				case 2:
					// Iterar y cambiar el tamaño de la fuente
					keYs.forEach(button =>
					{	button.style.fontSize = 'min(10vh,10vw)';
					});
					iKeyB.style.height = '70vh';
					iKeyB.style.width = '200vw';
					iKeyB.classList.remove('cX');
				break;
				case 3:
					iKeyS.classList.remove('cX');
				break;
			}
		};

f0149=()=>//RESETEAR la interfaz de Salida M (por defecto, sin mMod ni mViS)
		{	lOL(149);
			// Iterar y cambiar el tamaño de la fuente
			keYs.forEach(button =>
			{	button.style.fontSize = 'min(5vh,5vw)';
			});
			iTaco.style.opacity='0.3';
			iKeyB.style.height = 'auto';
			iKeyB.style.width = '100vw';
			iTaco.classList.add('cX');//Resetea (apaga) todas las ventanas M
			iKeyB.classList.add('cX');
			iKeyS.classList.add('cX');
		};

f0150=()=>//APAGAR la interfaz de Salida M, el Dsiplay M y Borra todo el texto de salida actual
		{	lOL(150);
			output.textContent = '';//Borra el texto de salida
			f0147();//RESETEAR la interfaz de Salida M (por defecto, sin mMod ni mViS) y apagar el display					
		};

f0151=()=>// Desplaza hacia el final el Display M
	{	lOL(151);
		iIntM0.scrollTop = iIntM0.scrollHeight;
	};

//Nuevo..
let isCapsLockActive = false;



// Handle keyboard events
document.addEventListener('keydown', (event) => {
	//f0146();//DETECTAR los eventos, si es el último evento sobre el botón 5 o la interfaz M resetea la interfaz M
    
	
	//Nuevo..
	if (event.getModifierState('CapsLock')) {
        isCapsLockActive = true;
    } else {
        isCapsLockActive = false;
    }

    // Only allow keyboard input if CapsLock is off
    if (isCapsLockActive) {
        event.preventDefault(); // Block keyboard input
    } else {


	
	const keYe = event.key;
	const keyElement = Array.from(keYs).find(k => k.textContent.toLowerCase() === keYe.toLowerCase() || (keYe === ' ' && k.id === 'space'));
	//const kEy = event.key;
    //const keyElement = Array.from(keYs).find(k => k.textContent.toLowerCase() === kEy.toLowerCase() || (kEy === ' ' && k.id === 'space'));
    if (keYe === 'Shift') {
        toggleShift();
    } else if (keYe === 'Backspace') {
        handleKeyPress('Del');
    } else if (keYe === 'Dead') {
        handleKeyPress('´');
    } else if (keyElement) {
        keyElement.click();
    }
	}//nuevo
});





// Add visual feedback for CapsLock state
document.addEventListener('keyup', (event) => {
    if (!event.getModifierState('CapsLock')) {
        isCapsLockActive = false;
    }
});

function handleKeyPress(keyValue)
//function handleKeyPress(keyValue, isPhysicalInput)
{	console.log('--- --- rrr keyValue=',keyValue);
	//if(sonCap)//Si los botones del teclado físico (CapsLock-off) están desactivados:
	{
	    f0146();//DETECTAR los eventos, si es el último evento sobre el botón 5 o la interfaz M resetea la interfaz M
	    if (keyValue === 'Shift') {
	        toggleShift();
	    } else if (keyValue === 'Del') {
	        output.textContent = output.textContent.slice(0, -1);
	    } else if (keyValue === '') {
	        output.textContent += ' ';
	    } else if (keyValue === '´') {
	        lastKeyPressed = '´';
	    } else if (keyValue !== '↩') { // Ignoring Enter key
	        if (lastKeyPressed === '´' && ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(keyValue)) {
	            const accentedVowel = accentuateVowel(keyValue);
	            output.textContent += accentedVowel;
	            lastKeyPressed = '';
	        } else {
	            output.textContent += keyValue;
	        }
	    }
		f0151();// Desplaza hacia el final el Display M
	}
}

function toggleShift() {
    isShiftActive = !isShiftActive;
    document.querySelectorAll('.keY').forEach(k => {
        if (!k.classList.contains('special')) {
            k.textContent = isShiftActive ? k.textContent.toUpperCase() : k.textContent.toLowerCase();
        }
    });
}

function accentuateVowel(vowel) {
    const accents = {
        'a': 'á',
        'e': 'é',
        'i': 'í',
        'o': 'ó',
        'u': 'ú',
        'A': 'Á',
        'E': 'É',
        'I': 'Í',
        'O': 'Ó',
        'U': 'Ú'
    };
    return accents[vowel] || vowel;
}
//fin funciones del teclado de la matriz M




// Listener para registrar eventos de teclado físico
document.addEventListener('keydown', (event) => {
    console.log(`Tecla física presionada: Key="${event.key}", Code="${event.code}", CapsLock=${event.getModifierState('CapsLock')}`);
});

// Probar el estado actual de CapsLock
console.log(`Estado inicial de CapsLock: ${navigator.keyboard ? 'No soportado en este navegador' : 'Desconocido'}`);





// ===================
// INICIO DE LAS FUNCIONES "H" LLAMADAS DESDE r0xxB[3][x] (inded.js) TAREA PENDIENTE: a partir de este punto hay que ver CUÁLES funciones de hxx() NO SON LLAMADAS POR r0xxB[3][x] y esas funciones pasarlas como funciones normales f0xxx()
// ===================

hh1=()=>//CAMBIAR a lineas de texto
		{	hOG(1);//mIS(1);
			g00VARS[11][2] = 1;
			iBrail.classList.add('cX');
			//console.error('|> Flag');
			//f0048();//RETORNAR a la ruta principal
			f0017();
		}

hh2=()=>//CAMBIAR a líneas Morse
		{	hOU(2);//mIS(2);
			g00VARS[11][2] = 2;
			iBrail.classList.add('cX');
			console.error('|> Flag');
			//f0048();//RETORNAR a la ruta principal
			f0017();
		}

hh3=()=>//CAMBIAR a líneas Braille
		{	hOU(3);//mIS(3);
			g00VARS[11][2] = 3;
			iBrail.classList.remove('cX');
			console.error('|> Flag');
			//f0048();//RETORNAR a la ruta principal
			f0017();
		}

hh4=()=>//CAMBIAR a líneas de Señas
		{	hOU(4);//mIS(4);
			g00VARS[11][2] = 4;
			iBrail.classList.add('cX');
			//f0048();//RETORNAR a la ruta principal
			f0017();
		}

hh5=(get,rev)=>//CAMBIAR o TRAER el modo actual
		{	hOU(5);

//hh21=(get,rev)=>//CAMBIAR o TRAER el color actual
//		{	hOU(21);
			let i = g00VARS[45][2];
			if(get == undefined||get == 0)//Si no hay que traer es porque va a cambiar de modo
			{	
				
							
				if(rev)
				{	//for (var i = 1; i < 11; i++)
					////for (var i = 1; i < wColor.length; i++)
					//{	if(wModeA[0][i]==g00VARS[45][2])//Si el id del color es igual al de la memoria, Bingo!
					//	{	
							if(i > 1)//Si no es la PRIMER posicion..
							{	g00VARS[45][2] = i-1;//tome el id de la siguiente fila
							}
							else//i = 1
							{	g00VARS[45][2] = 7;//tome el id de la primer fila
							}

					//		i = 11;//termina el for
					//	}
					//}
				}
				else
				{	//for (var i = 1; i < 11; i++)
					////for (var i = 1; i < wColor.length; i++)
					//{	if(wModeA[0][i]==g00VARS[45][2])//Si el id del color es igual al de la memoria, Bingo!
					//	{	

							if(i < 7)//Si no es la ultima posicion..
							{	g00VARS[45][2] = i+1;//tome el id de la siguiente fila
							}
							else//i = 9
							{	g00VARS[45][2] = 1;//tome el id de la primer fila
							}

				//			i = 11;//termina el for
				//		}
				//	}
				}
			}
			else
			{	g00VARS[45][2] = get;
			}
			i = g00VARS[45][2];
			console.error(' i=',i);
			switch (i)
			{	case 1:hh50();break;
				case 2:hh51();break;
				//case 3:hh54();break;
				case 3:hh53();break;
				case 4:hh56();break;
				case 5:hh57();break;
				case 6:hh58();break;
				case 7:hh59();break;
				//case 9:hh60();break;
			}
			for (let j = 1; j <= 4; j++)
			{	mIr004A[1][j]=mIwModeA[i][j]+mIkTapaI[5][j];
				//r004A[j][1]=wModeA[j][i]+kTapaI[j][5];
			}
			f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
		




		}

hh6=(id,rev)=>//(quitar rev?? sobra??) PONER el foco sobre la casilla actual y (id)CONTROLAR el cambio de páginas, se trata de una casilla informativa
		{	hOG(6);
			if(id > 0)//Si viene con indice se trata de un anuncio/ preguntas frecuente o hola! , muestra el número del anuncio(id) y dependiendo de su logitud, cambia el apuntador
			{	console.log('+++ id=',id);
				let tam = 0;//tamaño de la lectura
				//Si es la primera vez o ha cambiado de anuncio (id) resetea el apuntador..
				if(memAnt != id)
				{	f0117();//RESETEAR todos los apuntadores
				}
				//(Si el id es igual al id anterior no hace nada deja que los apuntadores coninuen como están)
				memAnt = id;//actualiza el valor de la memoria del id del aviso anterior
				if(gRuta == 3)
				{	tam = mIr003B[id][2].length;
					//tam = r003B[2][id].length;
					if(tam>1)
					{	if(salTO<0)//salTO's negativos (quitar rev?? sobra??)
						{	if(mIr003B[id][3]>0)//Si apuntador no es el inicio de la lectura
							//if(r003B[3][id]>0)//Si apuntador no es el inicio de la lectura
							{	if((salTO*-1)>=mIr003B[id][3])//Si tamaño del salto es mayor o igual que el apuntador
								//if((salTO*-1)>=r003B[3][id])//Si tamaño del salto es mayor o igual que el apuntador
								{ 	mIr003B[id][3]=0;//Salta al inicio de la lectura
									//r003B[3][id]=0;//Salta al inicio de la lectura
								}
								else
								{	mIr003B[id][3]=mIr003B[id][3]+salTO;//Salta atrás tantas lecturas
									//r003B[3][id]=r003B[3][id]+salTO;//Salta atrás tantas lecturas
								}
							}
							else//0 Si apuntador es el inicio de la lectura
							{	mIr003B[id][3]=tam - 1;//Salta a LA última lectura
								//r003B[3][id]=tam - 1;//Salta a LA última lectura
							}
						}
						else//salTO's positivos
						{	if(mIr003B[id][3]<tam - 1)
							//if(r003B[3][id]<tam - 1)
							{	if(salTO>=(tam - 1 - mIr003B[id][3]))//Si tamaño del salto es mayor o igual que lo que falta por leer
								//if(salTO>=(tam - 1 - r003B[3][id]))//Si tamaño del salto es mayor o igual que lo que falta por leer
								{ 	mIr003B[id][3]=tam - 1;//Salta a la última lectura
									//r003B[3][id]=tam - 1;//Salta a la última lectura
								}
								else//Salta adelante
								{	mIr003B[id][3]=mIr003B[id][3]+salTO;//salta tantas lecturas
									//r003B[3][id]=r003B[3][id]+salTO;//salta tantas lecturas
								}
							}
							else//mIr003A[id][1].length - 1 Si apuntador es el final de la lectura
							{	mIr003B[id][3]=0;//salta al inicio de la lectura
								//r003B[3][id]=0;//salta al inicio de la lectura
							}
						}
					}
					else
					{	//console.log('+++ sólo tiene un elemento');
					}
				}
				if(gRuta == 7 && gFoco == 1)
				{	/*tam = r007B[2][id].length;
					if(tam>1)
					{	if(salTO<0)//salTO's negativos (quitar rev?? sobra??)
						{	if(r007B[3][id]>0)//Si apuntador no es el inicio de la lectura
							{	if((salTO*-1)>=r007B[3][id])//Si tamaño del salto es mayor o igual que el apuntador
								{ 	r007B[3][id]=0;//Salta al inicio de la lectura
								}
								else
								{	r007B[3][id]=r007B[3][id]+salTO;//Salta atrás tantas lecturas
								}
							}
							else//0 Si apuntador es el inicio de la lectura
							{	r007B[3][id]=tam - 1;//Salta a LA última lectura
							}
						}
						else//salTO's positivos
						{	if(r007B[3][id]<tam - 1)
							{	if(salTO>=(tam - 1 - r007B[3][id]))//Si tamaño del salto es mayor o igual que lo que falta por leer
								{ 	r007B[3][id]=tam - 1;//Salta a la última lectura
								}
								else//Salta adelante
								{	r007B[3][id]=r007B[3][id]+salTO;//salta tantas lecturas
								}
							}
							else//r007A[1][id].length - 1 Si apuntador es el final de la lectura
							{	r007B[3][id]=0;//salta al inicio de la lectura
							}
						}
						//console.log('+++ r007B[3][id]=',r007B[3][id]);
					}
					else
					{	//console.log('+++ sólo tiene un elemento');
					}*/
				}
				if(gRuta == 8)
				{	tam = mIr008B[id][2].length;
					//tam = r008B[2][id].length;
					if(tam>1)
					{	if(salTO<0)//salTO's negativos (quitar rev?? sobra??)
						{	if(mIr008B[id][3]>0)//Si apuntador no es el inicio de la lectura
							//if(r008B[3][id]>0)//Si apuntador no es el inicio de la lectura
							{	if((salTO*-1)>=mIr008B[id][3])//Si tamaño del salto es mayor o igual que el apuntador
								//if((salTO*-1)>=r008B[3][id])//Si tamaño del salto es mayor o igual que el apuntador
								{ 	mIr008B[id][3]=0;//Salta al inicio de la lectura
									//r008B[3][id]=0;//Salta al inicio de la lectura
								}
								else
								{	mIr008B[id][3]=mIr008B[id][3]+salTO;//Salta atrás tantas lecturas
									//r008B[3][id]=r008B[3][id]+salTO;//Salta atrás tantas lecturas
								}
							}
							else//0 Si apuntador es el inicio de la lectura
							{	mIr008B[id][3]=tam - 1;//Salta a LA última lectura
								//r008B[3][id]=tam - 1;//Salta a LA última lectura
							}
						}
						else//salTO's positivos
						{	if(mIr008B[id][3]<tam - 1)
							//if(r008B[3][id]<tam - 1)
							{	if(salTO>=(tam - 1 - mIr008B[id][3]))//Si tamaño del salto es mayor o igual que lo que falta por leer
								//if(salTO>=(tam - 1 - r008B[3][id]))//Si tamaño del salto es mayor o igual que lo que falta por leer
								{ 	mIr008B[id][3]=tam - 1;//Salta a la última lectura
									//r008B[3][id]=tam - 1;//Salta a la última lectura
								}
								else//Salta adelante
								{	mIr008B[id][3]=mIr008B[id][3]+salTO;//salta tantas lecturas
									//r008B[3][id]=r008B[3][id]+salTO;//salta tantas lecturas
								}
							}
							else//r008A[1][id].length - 1 Si apuntador es el final de la lectura
							{	mIr008B[id][3]=0;//salta al inicio de la lectura
								//r008B[3][id]=0;//salta al inicio de la lectura
							}
						}
					}
					else
					{	//console.log('+++ sólo tiene un elemento');
					}
				}
			}
			if(id == 0 && (gRuta == 3 || gRuta == 7 || gRuta == 8))//Botones arriba y abajo
			{	f0117();//RESETEAR todos los apuntadores
			}
			f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
			//f0101();//CANCELAR focus reciente (Bandera ON) (f0017())
		}

hh7=()=>//CARGAR la ruta 2 en pantalla (SEC)
		{	hOG(7);//mIS(7);
			if(g02RUTA[gRuta][5])//SI el llamado viene de una ruta principal.. 
			{	gMemR = gRuta;//memorizar la Ruta principal temporalmente mientras pivota, por ejemplo las rutas de ajustes
				gMemF = gFoco;//memorizar el Foco principal temporalmente mientras pivota, por ejemplo las rutas de ajustes
			}
			gRuta = 2;
			gFoco = 1;
			f0017();
		}

hh8=()=>//CARGAR la ruta 3 en pantalla (PPAL)
		{	hOU(8);//mIS(8);
			gRuta = 3;
			gFoco = 1;
			f0017();
		}

hh9=()=>//CARGAR la ruta 1 en pantalla (PPAL)
		{	hOG(9);//mIS(9);
			gRuta = 1;
			gFoco = 1;
			f0017();
		}

/*
hh11=()=>//PRESENTAR el tutorial de ESTILO - modo
		{	hOU(111);//mIS(11);
			gRuta = 5;
			gFoco = 1;
			f0017();
		}
*/
hh12=()=>//INFORMAR la segunda parte de la casilla informativa tipo multimedia
		{	hOU(12);//mIS(12);
			let v1 = '';
			if (vFocoIe)//si vFocoIe es distinto de ''...
			{	v1 = 'i1, '+ vFocoIe;
			}
			f0033(vFocoLe,v1);//Da el anuncio uno extra;
		}

hh15=()=>
		{	hOU(15);
		}


hh17=()=>//REPRODUCIR [PLAY] el video de YouTube
		{	hOU(17);//mIS(17);
			vPlayer.playVideo();
		}

hh19=(rev)=>//HABILITAR tamaño 2
		{	hOU(19);//mIS(19);
			hh55();//OCULTAR tamaños texto
			if(rev)
			{	f0127();//REGRESAR al tamaño de texto previo
			}
			else
			{	g00VARS[33][2] = 2;
				mIr001B[9][4] = 1;//8***2->4 -- 4>9			
				//r001B[4][9] = 1;//8***2->4 -- 4>9
			}
			f0102();//ajusta el tamaño del texto Y CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
		}

hh20=(rev)=>//HABILITAR tamaño 1
		{	hOG(20);
			hh55();//OCULTAR tamaños texto
			if(rev)
			{	f0127();//REGRESAR al tamaño de texto previo
			}
			else
			{	g00VARS[33][2] = 1;
				mIr001B[8][4] = 1;//7   3>8			
				//r001B[4][8] = 1;//7   3>8
			}
			f0102();//ajusta el tamaño del texto Y CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
		}

hh21=(get,rev)=>//CAMBIAR o TRAER el color actual
		{	hOU(21);
			if(get == undefined||get == 0)//Si no hay que traer es porque va a cambiar de color
			{	if(rev)
				{	for (var i = 1; i < wColor.length; i++)
					{	if(wColor[i][2]==g00VARS[31][2])//Si el id del color es igual al de la memoria, Bingo!
						{	if(i > 1)//Si no es la PRIMER posicion..
							{	g00VARS[31][2] = wColor[i-1][2];//tome el id de la siguiente fila
							}
							else//i = 1
							{	g00VARS[31][2] = wColor[wColor.length - 1][2];//tome el id de la primer fila
							}
							i = wColor.length;//termina el for
						}
					}
				}
				else
				{	for (var i = 1; i < wColor.length; i++)
					{	if(wColor[i][2]==g00VARS[31][2])//Si el id del color es igual al de la memoria, Bingo!
						{	if(i < wColor.length - 1)//Si no es la ultima posicion..
							{	g00VARS[31][2] = wColor[i+1][2];//tome el id de la siguiente fila
							}
							else
							{	g00VARS[31][2] = wColor[1][2];//tome el id de la primer fila
							}
							i = wColor.length;//termina el for
						}
					}
				}
			}
			else
			{	g00VARS[31][2] = get;
			}
			for (var i = 1; i < wColor.length; i++)
			{	if(wColor[i][2]==g00VARS[31][2])//Si el id del color es igual al de la memoria, bingo!!
				{	if(g00VARS[31][2] == 11)//color del borde igual al texto
					{	f0120();//HACER color del borde igual al color del texto
						iBody.style.setProperty('--cYel','transparent');
					}
					else
					{	iBody.style.setProperty('--cBeige',wColor[i][0]);
						iBody.style.setProperty('--cYel',wColor[i][1]);
					}
					for (let j = 1; j <= 4; j++)
					{	mIr001A[19][j]=wColor[i][1+(j * 2)]+mIkTapaI[5][j];
						//r001A[j][19]=wColor[i][1+(j * 2)]+kTapaI[j][5];				
						mIr001Z[19][j]=wColor[i][2+(j * 2)];
						//r001Z[j][19]=wColor[i][2+(j * 2)];
					}
					i = wColor.length;//termina el for
				}
			}
			f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
		}

hh22=()=>//
		{	hOG(22);
		}

hh23=()=>//DESHABILITAR lector de pantalla (mudo)
		{	hOG(23);//mIS(23);
			if(g00VARS[59][2])//lector on
			{	g00VARS[59][2] = 0;
				mIr001B[1][4] = 0;//mIr002B[6][4] = 0;			
				//r001B[4][1] = 0;//r002B[4][6] = 0;
				mIr001B[2][4] = 1;//mIr002B[7][4] = 1;			
				//r001B[4][2] = 1;//r002B[4][7] = 1;
			 	f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
			}
		}

hh24=()=>//HABILITAR lector de pantalla (sonido)
		{	hOU(24);//mIS(24);
			if(!g00VARS[59][2])//lector off
			{	g00VARS[59][2] = 1;
				mIr001B[1][4] = 1;//mIr002B[6][4] = 1;			
				//r001B[4][1] = 1;//r002B[4][6] = 1;
				mIr001B[2][4] = 0;//mIr002B[7][4] = 0;			
				//r001B[4][2] = 0;//r002B[4][7] = 0;
				f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
			}
		}

hh25=()=>//DESHABILITAR i1 (sin Ingles de apoyo)
		{	hOG(25);//mIS(25);
			if(g00VARS[5][2])//i1 on
			{	g00VARS[5][2] = 0;
				//////pendiente html tapa y habilitar estas lineas/////bTapaA2.classList.add('cX');
				//////pendiente html tapa y habilitar estas lineas/////seniasUS.classList.add('cX');
				//////pendiente html tapa y habilitar estas lineas/////bTapaC2.classList.add('cX');
				//////pendiente html tapa y habilitar estas lineas/////bTapaD2.classList.add('cX');
				mIr002B[3][4] = 0;
				mIr002B[4][4] = 1;
				//r002B[4][3] = 0;
				//r002B[4][4] = 1;
				f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
			}
		}

hh26=()=>//HABILITAR i1 (con Ingles de apoyo)
		{	hOU(26);//mIS(26);
			if(!g00VARS[5][2])//i1 off
			{	g00VARS[5][2] = 1;
				//////pendiente html tapa y habilitar estas lineas/////bTapaA2.classList.remove('cX');
				//////pendiente html tapa y habilitar estas lineas/////seniasUS.classList.remove('cX');
				//////pendiente html tapa y habilitar estas lineas/////bTapaC2.classList.remove('cX');
				//////pendiente html tapa y habilitar estas lineas/////bTapaD2.classList.remove('cX');
				mIr002B[3][4] = 1;
				mIr002B[4][4] = 0;
				//r002B[4][3] = 1;
				//r002B[4][4] = 0;
				f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
			}
		}

hh27=(rev)=>//HABILITAR texto claro boton negro - b0027()	//HABILITAR texto claro
		{	hOU(27);//mIS(27);
			if(rev)
			{	f0101();//REGRESAR color texto-boton previo
			}
			else
			{	if(g00VARS[34][2] != 0)//if(g00VARS[34][2])  texto negro fondo blanco (luz blanca)
				{	g00VARS[34][2] = 0;//Texto blanco fondo negro
					hh36();//L ESTILIZAR: texto blanco, botón negro, fondo claro	
					hh85();//OCULTAR los botones de color de texto/fondo
					mIr001B[18][4] = 1;//15     11>18			
					//r001B[4][18] = 1;//15     11>18
					f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
				}
			}
		}

hh28=(rev)=>//HABILITAR texto negro, botón amarillo //b0028()	//HABILITAR texto negro 
		{	hOG(28);//mIS(28);
			if(rev)
			{	f0101();//REGRESAR color texto-boton previo
			}
			else
			{	if(g00VARS[34][2] != 1)//luz amarilla //if(!g00VARS[34][2])
				{	g00VARS[34][2] = 1;
					hh35();//L ESTILIZAR: texto negro, botón blanco, fondo oscuro
					iBody.style.setProperty('--cblwh2','yellow');
					hh85();//OCULTAR los botones de color de texto/fondo
					mIr001B[15][4] = 1;//14     10>17  - - [17] = 1			
					//r001B[4][15] = 1;//14     10>17  - - [17] = 1
					f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
				}
			}
		}

hh29=(rev)=>//HABILITAR tamaño 3
		{	hOU(29);//mIS(29);
			hh55();//OCULTAR tamaños texto
			if(rev)
			{	f0127();//REGRESAR al tamaño de texto previo
			}
			else
			{	g00VARS[33][2] = 3;
				mIr001B[10][4] = 1;//9      5>10			
				//r001B[4][10] = 1;//9      5>10
			}
			f0102();//ajusta el tamaño del texto Y CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
		}

hh30=(rev)=>//HABILITAR tamaño 4
		{	hOU(30);//mIS(30);
			hh55();//OCULTAR tamaños texto
			if(rev)
			{	f0127();//REGRESAR al tamaño de texto previo
			}
			else
			{	g00VARS[33][2] = 4;
				mIr001B[11][4] = 1;//10      6>11			
				//r001B[4][11] = 1;//10      6>11
			}
			f0102();//ajusta el tamaño del texto Y CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
		}

hh31=(rev)=>//HABILITAR tamaño 5
		{	hOU(31);//mIS(31);
			hh55();//OCULTAR tamaños texto
			if(rev)
			{	f0127();//REGRESAR al tamaño de texto previo
			}
			else
			{	g00VARS[33][2] = 5;
				mIr001B[12][4] = 1;//11    7>12			
				//r001B[4][12] = 1;//11    7>12
			}
			f0102();//ajusta el tamaño del texto Y CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
		}

hh32=(rev)=>//HABILITAR tamaño 6
		{	hOU(32);//mIS(32);
			hh55();//OCULTAR tamaños texto
			if(rev)
			{	f0127();//REGRESAR al tamaño de texto previo
			}
			else
			{	g00VARS[33][2] = 6;   
				mIr001B[13][4] = 1;//12    8>13			
				//r001B[4][13] = 1;//12    8>13
			}
			f0102();//ajusta el tamaño del texto Y CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
		}

hh33=(rev)=>//HABILITAR tamaño 7
		{	hOU(33);//mIS(33);
			hh55();//OCULTAR tamaños texto
			if(rev)
			{	f0127();//REGRESAR al tamaño de texto previo
			}
			else
			{	g00VARS[33][2] = 7;
				mIr001B[14][4] = 1;//13    9>14			
				//r001B[4][14] = 1;//13    9>14
			}
			f0102();//ajusta el tamaño del texto Y CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
		}

hh34=()=>//
		{	hOU(34);
		}

// - - - HASTA AQUI VOY ARREGLANDO EL CODIGO HH TO F00 sigue hh35

hh35=()=>//L ESTILIZAR: texto negro, botón blanco, fondo oscuro
		{	hOL(35);
			iBody.style.setProperty('--cblwh1','rgb(30,30,30)');
			iBody.style.setProperty('--cblwh2','white');
			iBody.style.setProperty('--cbw1','rgba(0,0,0,0.3)');
			iBody.style.setProperty('--cBw1','rgba(0,0,0,0.1)');
			iBody.style.setProperty('--cbw2','rgba(255,255,255,0.5)');
			iBody.style.setProperty('--cbw22','rgba(255,255,255,0.25)');
			iBody.style.setProperty('--cVelo','rgba(0,0,0,0.5)');
			f0120();//HACER color del borde igual al color del texto
		}

hh36=()=>//L ESTILIZAR: texto blanco, botón negro, fondo claro
		{	hOL(36);
			iBody.style.setProperty('--cblwh1','white');
			iBody.style.setProperty('--cblwh2','rgb(30,30,30)');
			iBody.style.setProperty('--cbw1','rgba(255,255,255,0.4)');
			iBody.style.setProperty('--cBw1','rgba(255,255,255,0.2)');
			iBody.style.setProperty('--cbw2','rgba(0,0,0,0.3)');
			iBody.style.setProperty('--cbw22','rgba(0,0,0,0.15)');
			iBody.style.setProperty('--cVelo','rgba(255,255,255,0.6)');
			f0120();//HACER color del borde igual al color del texto
		 //	iBody.style.setProperty('--cABok','white');
		}

hh45=()=>//ACTIVAR fila de señas 
		{	hOU(45);
			mIr001B[28][4] = 0;//38			
			//r001B[4][28] = 0;//38
			mIr001B[29][4] = 1;//39			
			//r001B[4][29] = 1;//39			
			g00VARS[19][2] = 1;
			//iBody.style.setProperty('--altO','calc(var(--a)*0.7)');
			//iBody.style.setProperty('--altS','calc(var(--a)*9.3)');
			//iBody.style.setProperty('--cBeige','rgb(128,128,128)');
			f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
		}

hh46=()=>//DESACTIVAR fila de señas		
		{	hOU(46);
			mIr001B[29][4] = 0;//39			
			//r001B[4][29] = 0;//39 
			mIr001B[28][4] = 1;//38			
			//r001B[4][28] = 1;//38
			g00VARS[19][2] = 0;
			//iBody.style.setProperty('--altO','4.9vh');
			//iBody.style.setProperty('--altS','65.1vh');
			//iBody.style.setProperty('--cBeige','rgb(184,156,132)');//'rgb(199, 191, 158)');
			f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
		}

hh47=()=>//DESACTIVAR o MOSTRAR el botón/hoja fila de señas//b0047()			
		{	hOL(47);//mIS(47);
			if((g00VARS[11][2] == 0)||(g00VARS[11][2] == 4))//todos los modos o señas, mostrar botón fila de señas
			{	if(g00VARS[19][2])//fila activada
				{	mIr001B[29][4] = 1;//39			
					//r001B[4][29] = 1;//39
					mIr001B[28][4] = 0;//38			
					//r001B[4][28] = 0;//38
				}
				else
				{	mIr001B[29][4] = 0;//39			
					//r001B[4][29] = 0;//39
					mIr001B[28][4] = 1;//38			
					//r001B[4][28] = 1;//38
				}
			}
			else//ocultar botón fila de señas
			{	mIr001B[29][4] = 0;//39			
				//r001B[4][29] = 0;//39
				mIr001B[28][4] = 0;//38			
				//r001B[4][28] = 0;//38
			}
		}

hh48=()=>//b0048()	//CARGAR la ruta 7 en pantalla (PPAL)
		{	hOG(48);//mIS(48);
			gRuta = 7;
			gFoco = 1;
			f0017();
		}

hh49=()=>//b0049()	//REGISTRAR la primer selección de ACCESO y habilitar los botones 4 y 7
		{	hOG(49);
			if(!g00VARS[76][2])
			{	g00VARS[76][2] = 1;
				//yBot1.classList.remove('cX');
				yBot7.classList.remove('cStop');
				yBB7.classList.remove('cOff');
				fBot7.classList.remove('cStop');
				fBB7.classList.remove('cOff');
				yKEYS[2][5] = 1;//7Menú ON
				//i47.classList.remove('cX');
			}
		}

hh50=()=>//AJUSTAR estilo texto pequeño
		{	hOG(50);//mIS(50);
			//***g00VARS[45][2] = 1;
			f0126();//ACTUALIZAR la ruta
			f0119();//CONMUTAR el botón seña(1) o idioma visible()
			f0093();//REGISTRAR primer clic maximizando
			hh49();//REGISTRAR la primer selección de ACCESO
			//hh64();//Señas minimas//g00VARS[64][2] = 0;//visor/icono muy pequeño
			hh64(2);//HABILITAR visor tamaño 2
			//hh65();//HABILITAR visor tamaño 2
			f0067();//Ajusta el visor
			hh1();//texto
			hh25();//DESHABILITAR i1 (sin Ingles de apoyo)
			f0105();//RESET de velocidad -> 1.0
			//hh23();//Mudo
			hh24();//HABILITAR lector de pantalla (sonido)
		 	hh84();//HABILITAR texto negro / blanco
			hh19();//HABILITAR tamaño 2
			//hh20();//texto pequeño
			f0108();//DESHABILITAR bordes superior e inferior
			hh21(6);//APLICAR color azul		
			f0118();//HABILITAR la luz
		}

hh51=()=>//AJUSTAR estilo vibración
		{	hOU(51);//mIS(51);
			//***g00VARS[45][2] = 2;
			f0126();//ACTUALIZAR la ruta
			f0119();//CONMUTAR el botón seña(1) o idioma visible()
			f0093();//REGISTRAR primer clic maximizando
		 	hh49();//REGISTRAR la primer selección de ACCESO
			hh64(5);//HABILITAR visor tamaño 5
			//hh68();//Señas maximas//g00VARS[64][2] = 4;//icono grande
			f0067();//Ajusta el visor
			hh2();//morse
			hh25();//DESHABILITAR i1 (sin Ingles de apoyo)
			f0105();//RESET de velocidad -> 1.0
			//hh23();//Mudo
			hh24();//HABILITAR lector de pantalla (sonido)
		 	hh84();//HABILITAR texto negro / blanco
			hh19();//HABILITAR tamaño 2
			//hh20();//texto pequeño
			f0092();//HABILITAR bordes superior e inferior
			hh21(6);//APLICAR color azul
			f0118();//HABILITAR la luz
		}

hh52=()=>//b0052()	//AJUSTAR el tamaño del VISOR Y CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
		{	hOU(52);//mIS(52);
			f0068();//ajusta el tamaño del visor
			f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
		}

hh53=()=>//AJUSTAR estilo texto
		{	hOU(53);//mIS(53);
			//g00VARS[45][2] = 4;
			f0126();//ACTUALIZAR la ruta
			f0119();//CONMUTAR el botón seña(1) o idioma visible()
			f0093();//REGISTRAR primer clic maximizando
			hh49();//REGISTRAR la primer selección de ACCESO
			hh64(3);//HABILITAR visor tamaño 3
			//hh66();//Señas medianas?//g00VARS[64][2] = 4;//icono grande
			f0067();//Ajusta el visor
			hh1();//texto
			hh25();//DESHABILITAR i1 (sin Ingles de apoyo)
			f0105();//RESET de velocidad -> 1.0
			//hh23();//Mudo
			hh24();//HABILITAR lector de pantalla (sonido)
		 	hh84();//HABILITAR texto negro / blanco
			hh30();//HABILITAR tamaño 4 mediano
			hh21(3);//APLICAR color amarillo
			f0092();//HABILITAR bordes superior e inferior
			f0118();//HABILITAR la luz	
		}		

hh54=()=>//AJUSTAR estilo audio
		{	hOU(54);//mIS(54);
			//g00VARS[45][2] = 3;
			f0126();//ACTUALIZAR la ruta
			f0119();//CONMUTAR el botón seña(1) o idioma visible()
			f0093();//REGISTRAR primer clic maximizando
		 	hh49();//REGISTRAR la primer selección de ACCESO
			hh64(3);//HABILITAR visor tamaño 3
			//hh66();//Señas medianas?//g00VARS[64][2] = 4;//icono grande
			f0067();//Ajusta el visor
			hh1();//texto
			hh25();//DESHABILITAR i1 (sin Ingles de apoyo)
			f0105();//RESET de velocidad -> 1.0
			hh24();//HABILITAR lector de pantalla (sonido)
		 	hh84();//HABILITAR texto negro / blanco	
			hh30();//HABILITAR tamaño 4 mediano
			f0092();//HABILITAR bordes superior e inferior
		 	hh21(3);//APLICAR color amarillo
		 	f0118();//HABILITAR la luz
		}

hh55=()=>//b0055()	//OCULTAR todos los botones de tamaño
		{	hOG(55);//mIS(55);
			mIr001B[8][4] = 0;// 7	3> 8			
			//r001B[4][8]  = 0;// 7	3> 8
			mIr001B[9][4] = 0;// 8	4> 9			
			//r001B[4][9]  = 0;// 8	4> 9
			mIr001B[10][4] = 0;// 9	5>10			
			//r001B[4][10] = 0;// 9	5>10
			mIr001B[11][4] = 0;//10	6>11			
			//r001B[4][11] = 0;//10	6>11
			mIr001B[12][4] = 0;//11	7>12			
			//r001B[4][12] = 0;//11	7>12
			mIr001B[13][4] = 0;//12	8>13			
			//r001B[4][13] = 0;//12	8>13
			mIr001B[14][4] = 0;//13	9>14			
			//r001B[4][14] = 0;//13	9>14
		}

hh56=()=>//AJUSTAR estilo texto máximo
		{	hOU(56);//mIS(56);
			//***g00VARS[45][2] = 5;
			f0126();//ACTUALIZAR la ruta
			f0119();//CONMUTAR el botón seña(1) o idioma visible()
			f0093();//REGISTRAR primer clic maximizando
			hh49();//REGISTRAR la primer selección de ACCESO
			hh64(3);//HABILITAR visor tamaño 3
			//hh66();//HABILITAR visor tamaño 3
			//hh65();//Señas pequeñas?g00VARS[64][2] = 4;//icono grande
			f0067();//Ajusta el visor
			hh1();//texto
			hh25();//DESHABILITAR i1 (sin Ingles de apoyo)
			f0105();//RESET de velocidad -> 1.0
			//hh23();//Mudo
		 	hh24();//HABILITAR lector de pantalla (sonido)
		 	hh28();//HABILITAR texto negro, botón amarillo
		 	hh33();//HABILITAR tamaño 7
			hh21(13);//APLICAR color violeta
			f0092();//HABILITAR bordes superior e inferior
			f0118();//HABILITAR la luz
		}

hh57=()=>//AJUSTAR estilo fondo negro
		{	hOU(57);//mIS(57);
			//g00VARS[45][2] = 6;
			f0126();//ACTUALIZAR la ruta
			f0119();//CONMUTAR el botón seña(1) o idioma visible()
			f0093();//REGISTRAR primer clic maximizando
		 	hh49();//REGISTRAR la primer selección de ACCESO
			hh64(3);//HABILITAR visor tamaño 3
			//hh66();//Señas medianas?//g00VARS[64][2] = 4;//icono grande
			f0067();//Ajusta el visor
			hh1();//texto
			hh25();//DESHABILITAR i1 (sin Ingles de apoyo)
			f0105();//RESET de velocidad -> 1.0
			//hh23();//Mudo
			hh24();//HABILITAR lector de pantalla (sonido)
			hh83();//HABILITAR texto amarillo boton negro simil hh27()
			hh21(5);//APLICAR color turquesa
			hh30();//HABILITAR tamaño 4 mediano
			f0092();//HABILITAR bordes superior e inferior
			f0118();//HABILITAR la luz
		}

hh58=()=>//AJUSTAR estilo señas
		{	hOU(58);//mIS(58);
			//g00VARS[45][2] = 7;
			f0126();//ACTUALIZAR la ruta
			f0119(1);//CONMUTAR el botón seña(1) o idioma visible()
			f0093();//REGISTRAR primer clic maximizando
			hh49();//REGISTRAR la primer selección de ACCESO	
			hh64(5);//HABILITAR visor tamaño 5
			//hh68();//Señas maximas//g00VARS[64][2] = 4;//icono grande
		 	f0067();//Ajusta el visor
			hh4();//CAMBIAR a líneas de Señas
			hh46();//DESACTIVAR fila de señas
			hh25();//DESHABILITAR i1 (sin Ingles de apoyo)
			f0105();//RESET de velocidad -> 1.0
			hh23();//Mudo
			hh84();//HABILITAR texto negro / blanco
			hh19();//HABILITAR tamaño 2
			//hh20();//texto pequeño
		 	f0108();//DESHABILITAR bordes superior e inferior
			hh21(6);//APLICAR color azul
			f0118();//HABILITAR la luz
		}

hh59=()=>//AJUSTAR estilo braille
		{	hOU(59);//mIS(59);
			//g00VARS[45][2] = 8;
			f0126();//ACTUALIZAR la ruta
			f0119();//CONMUTAR el botón seña(1) o idioma visible()
			f0093();//REGISTRAR primer clic maximizando
			hh49();//REGISTRAR la primer selección de ACCESO
			//hh64();//Señas minimas?//g00VARS[64][2] = 0;//visor pequeño
			hh64(2);//HABILITAR visor tamaño 2
			//hh65();//HABILITAR visor tamaño 2
			f0067();//Ajusta el visor
			hh3();//CAMBIAR a líneas Braille
			hh25();//DESHABILITAR i1 (sin Ingles de apoyo)
			f0105();//RESET de velocidad -> 1.0
			hh24();//HABILITAR lector de pantalla (sonido)
		 	hh84();//HABILITAR texto negro / blanco
			hh19();//HABILITAR tamaño 2
			//hh20();//texto pequeño
			f0092();//HABILITAR bordes superior e inferior
			hh21(6);//APLICAR color azul
			f0118();//HABILITAR la luz

		}

hh60=()=>//AJUSTAR estilo público
		{	hOU(60);//mIS(60);
			//g00VARS[45][2] = 9;
			f0126();//ACTUALIZAR la ruta
			f0119(1);//CONMUTAR el botón seña(1) o idioma visible()
			f0093();//REGISTRAR primer clic maximizando
		 	hh49();//REGISTRAR la primer selección de ACCESO
			hh64(4);//HABILITAR visor tamaño 4
			//hh67();//Señas grandes?//g00VARS[64][2] = 3;//visor/icono mediano
			f0067();//Ajusta el visor
			hh4();//CAMBIAR a líneas de Señas
			hh46();//DESACTIVAR fila de señas
			hh26();//HABILITAR i1 (con Ingles de apoyo)
			f0105();//RESET de velocidad -> 1.0
			hh24();//HABILITAR lector de pantalla (sonido)
			hh84();//HABILITAR texto negro / blanco
			hh30();//HABILITAR tamaño 4
			f0092();//HABILITAR bordes superior e inferior
			hh21(6);//APLICAR color azul
			f0118();//HABILITAR la luz
		}

hh61=()=>//CARGAR la presentación AV de anuncios de la ruta 3 //b0061()	//
		{	hOG(61);//mIS(61);
			if(g00VARS[11][2] == 3)//Si el modo braille esta activo
			{ 	iBrail.classList.add('cX');//Oculta el braille fijo
			}
			let ss = '<img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div>';
			gRuta = 3;
			gFoco = 1;

			f0012();//CARGAR HTML desde 0 de capa ruta//vars IN: g00VARS[27][2] ,gRuta sin iterpretes



			f0090();//REINICIAR animación
			if(ambi == 5)//si viene de RUTA, la tapa esta OFF - implicito en ambi????
			{	f0050();//QUITAR capa RUTA y GUARDAR contenido de lLINES
			}
			else//si viene de TAPA, oculta la TAPA y conmuta a Ruta
			{	ambi = 5;//se va a Ruta??
				iTAPA.classList.add('cX');
				bTapaO.innerHTML = '';
				if((g00VARS[27][2] > 1)&&(g00VARS[5][2]))//Si no es el idioma ingles y esta i1..
				{	iTL.innerHTML = '';
					bTapaD2.innerHTML =	'';
					bTapaC2.innerHTML = '';
					bTapaA2.innerHTML = '';
				}
				iTR.innerHTML = '';
				bTapaA1.innerHTML = '';
				bTapaC1.innerHTML = '';
				bTapaD1.innerHTML = '';
			}
			//contPre[1] = 1;//Reinicia al anuncio 0 de Portada
			contPre[1] = 0;//Reinicia al anuncio 0 de Portada

			contPre[0] = 0;//1: Deshabilitar orden de pasar al siguiente anuncio
			console.log('... 5 contPre[0]=',contPre[0],'; contPre[1]=',contPre[1]);


			//Actualizar aqui vis3:



// - - - - - - -



		//++contPre[0] = aPulPre;//Reinicia el conteo de la duración del anuncio
			
			hh62(0);//CARGAR los guiones de la presentación AV Audio Visual para la casilla 1 es similar a f0016()
			//hh62(0);//CARGAR los guiones de la presentación AV Audio Visual para la casilla 1 es similar a f0016()
			
			hh72();//COLOREAR borde de la presentación AV
			iPRESE.classList.remove('cX');
			//iCodQ.classList.remove('cX');
			iPos1.classList.add('cX');
			iPos2.classList.add('cX');
			iStop.classList.add('cX');
			ambi = 4;//PRESENTACION AV
			iMenu.innerHTML = '<i class="'+kTapa1[69][2]+'"></i>';//<i class="'+kTapa1[16   -   51][2]+'"></i>';
			f0067();//ORGANIZAR 1 pulso limpio de resize //OBTENER la constante del tamaño de la ventana
		}

hh62=(anun)=>//CARGAR los guiones de la presentación AV Audio Visual es similar a f0016()	//CARGAR los guiones de la tapa o alerta(ale)
		{	hOG(62);//mIS(62);
			hFila = tNoFi.offsetHeight;//aquí mide la altura del objeto de texto en px que se va a mostrar
			console.log(' - - - uuu == hFila='+hFila);
			let id = g00VARS[27][2];//id Idioma local
			let ss = '<img src="signs/0.png" alt="seña" class="z70"><div class="cGlosD cFlex"><div class="zProsa"></div></div>';
			let v0 = '';//Inicio HTML del guíon local.. CON CÓDIGO HTML <etiquetas>
			let v1 = '';//inicio guion local SIN CÓDIGO HTML <etiquetas>
			let v2;//inicio guion internacional SIN CÓDIGO HTML <etiquetas>
			if((id > 1)&&(g00VARS[5][2]))//Si no es el idioma ingles y esta i1..
			{	v2 = 'i1, ';//Inicio del guíon internaional..
			}
			let v9;//HTML de la imagen provisional
			console.log('... 6 anun',anun,'; vis3=',vis3,'; contPre[0]=',contPre[0],'; contPre[1]=',contPre[1]);
			if(anun > 0)//si anun >= 1 entonces..
			{	

				let v10 = vis3[anun];//[1-2-3-etc...]v4 de HYHY
				switch(mIr003B[v10][1][0])//El [0] indica que es el titular de ese anuncio, Tipo de ilet v10 = icono/imagen.. 0-3 TOMADO DE function f0012()
				//switch(r003B[1][v10][0])//El [0] indica que es el titular de ese anuncio, Tipo de ilet v10 = icono/imagen.. 0-3 TOMADO DE function f0012()
				{	case 0://Imagen dinámicalet v10 = 
						f0123(mIr003B[v10][2][0]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
						//f0123(r003B[2][v10][0]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
						v9 = '<img src="'+kTapa0[bus][2]+'" class="c1x0">';
					break;
					case 1://Icono dinámico
						v9 = '<i class="'+kTapa1[mIr003B[v10][2][0]][2]+' cAjust8"></i>';
						//v9 = '<i class="'+kTapa1[r003B[2][v10][0]][2]+' cAjust8"></i>';
					break;
					case 2://Texto dinámico
						v9 = '<div class="cAjust8">'+kTapa2[mIr003B[v10][2][0]][2]+'</div>';
						//v9 = '<div class="cAjust8">'+kTapa2[r003B[2][v10][0]][2]+'</div>';
					break;
					case 3://Imagen estática
						f0123(mIr003B[v10][2][0]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
						//f0123(r003B[2][v10][0]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
						v9 = '<img src="'+kTapa0[bus][2]+'" class="c1x0">';
						//v9 = '<img src="'+kTapa0[mIr003B[v10][2][0]][2]+'" class="c1x0">';
					break;
					case 4://Video estático
						v9 = '<div class=" "></div>';
					break;
				}
				v0 += mIr003A[anun][id][0].charAt(0).toUpperCase() + mIr003A[anun][id][0].slice(1);//.toUpperCase();//AVISO local Carga el anuncio en mayusculas y local
				v1 += mIr003A[anun][id][0];//.toUpperCase();//AVISO local Carga el anuncio en mayusculas y local
				//v0 += r003A[id][anun][0].charAt(0).toUpperCase() + r003A[id][anun][0].slice(1);//.toUpperCase();//AVISO local Carga el anuncio en mayusculas y local
				//v1 += r003A[id][anun][0];//.toUpperCase();//AVISO local Carga el anuncio en mayusculas y local
			}
			else//Se trata de la portada "bienvenido a NOMBRE DE LA COMUNIDAD"
			{	f0001();//CONSEGUIR la hora local actual
				
				//v9 = '<i class="'+kTapa1[85][2]+' cAjust8"></i>';
				f0123(dExt[3]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
				v9 = '<i class="'+kTapa1[83][2]+' cAjust8"></i>';//kTapa1[51][2] '<img src="'+''+'" class="c1x0">';
				if(mIkControl[1][1])//Control formato hora nacional:   hora 00:00  /  00:00 hora
				//if(kControl[1][1])//Control formato hora nacional:   hora 00:00  /  00:00 hora
				{	v0 += mIkTapaI[1][id].charAt(0).toUpperCase() + mIkTapaI[1][id].slice(1) +'<!--span class="cLTR"-->'+ miHora +'<!--/span-->';
					v1 += mIkTapaI[1][id] + miHora;
					//v0 += kTapaI[id][1].charAt(0).toUpperCase() + kTapaI[id][1].slice(1) +'<!--span class="cLTR"-->'+ miHora +'<!--/span-->';
					//v1 += kTapaI[id][1] + miHora;
				}
			}
			








			//aqui pasa la segunda vez..
			iPreAV.innerHTML = v9;
			g00VARS[24][2] = v1;//CARGAR EN g00VARS[24] EL GUIÓN LOCAL sin HTML
			iNoti.innerHTML = '<div id="tNoti" class="cMarqu inner"><p id="tNopi" class="cIwhi"></p></div>';//Carga el anuncio de la marquesina en mayusculas
			//iNoti.innerHTML = '<marquee id="tNoti" class="cMarqu" direction="left" scrollamount="'+ velo*speed*speed +'"></marquee>';//Carga el anuncio de la marquesina en mayusculas
			tNopi.innerHTML = v0;
			if((id > 1)&&(g00VARS[5][2]))//Si no es el idioma ingles y esta i1..
			{	if(anun > 0)//si anun <= 1 entonces..
				{	v2 += mIr003A[anun][1][0].charAt(0).toUpperCase() + mIr003A[anun][1][0].slice(1)/*.toUpperCase()*/;//Carga el anuncio en mayusculas e ingles
					//v2 += r003A[1][anun][0].charAt(0).toUpperCase() + r003A[1][anun][0].slice(1)/*.toUpperCase()*/;//Carga el anuncio en mayusculas e ingles
				}
				else//Se trata de la portada EN INGLES "welcome to NOMBRE DE LA COMUNIDAD"
				{	if(mIkControl[1][1])//Control formato hora internacional:   hora 00:00  /  00:00 hora
					//if(kControl[1][1])//Control formato hora internacional:   hora 00:00  /  00:00 hora
					{	v2 += mIkTapaI[1][1].charAt(0).toUpperCase() + mIkTapaI[1][1].slice(1)/*.toUpperCase()*/+miHora;
						//v2 += kTapaI[1][1].charAt(0).toUpperCase() + kTapaI[1][1].slice(1)/*.toUpperCase()*/+miHora;
					}
				}
				g00VARS[25][2] = v2;//CARGAR EN g00VARS[25] EL 'GUIÓN INTERNACIONAL':
				iNot2.innerHTML = '<div id="tNot2" class="cMarqu inner"><p id="tNop2" class="cIyel"></p></div>';//COMPLETAR EL HTML CON EL TEXTO en ingles EN PANTALLA Carga el anuncio de la marquesina en mayusculas
			 	tNop2.innerHTML = v2;//AQUI SE DEBE MOSTRAR LA MARQUESINA DE LA IZQUIERDA Y REDUCIR LA MARQUESINA DE LA DERECHA AL 66.66%
				inteL.innerHTML = ss;//CARGAR el interprete en ingles ASL:
			}
			else//Si es local no ingles
			{	iNot2.innerHTML = '';//AQUI SE DEBE OCULTAR LA MARQUESINA DE LA IZQUIERDA Y AGRANDAR LA MARQUESINA DE LA DERECHA AL 100%
				inteL.innerHTML = '';
			}
			inteR.innerHTML = ss;//CARGAR el interprete local:
			g00VARS[28][2] = 0;//* *0Local,1EUA(Inter) Guion en idioma local
			g00VARS[21][2] = v1;//* *carga el guion global TEXTO ORIGINAL A SER INTREPRETADO A SEÑAS, MORSE Y BRAILLE		
			f0021();//Normaliza el guión global (g00VARS[21][2])
			f0080();//HTML señas LOCAL
			//f0084();//FINALIZAR ] serie de señales y prosas
		//	f0086();//ENCONTRAR todos los elementos cLife y cPros (ruta) o de cPros0 y cLife0 (tapa)
			if((id > 1)&&(g00VARS[5][2]))//Si no es el idioma ingles y esta i1..
			{	g00VARS[28][2] = 1;//Guion en ingles (internacional)
				g00VARS[21][2] = v2;//Carga el guion global TEXTO ORIGINAL A SER INTREPRETADO A SEÑAS, MORSE Y BRAILLE
				f0021();//Normaliza el guión global (g00VARS[21][2])
				f0080();//HTML señas INTERNACIONAL
				//f0084();//FINALIZAR ] serie de señales y prosas
			//	f0086();//ENCONTRAR todos los elementos cLife y cPros (ruta) o de cPros0 y cLife0 (tapa)
			}
			f0086();//ENCONTRAR todos los elementos cLife y cPros (ruta) o de cPros0 y cLife0 (tapa)
			f0116();//PONER en marcha las marquesinas
			if(g00VARS[59][2])//Si el audio esta activado
			{	f0026(v1,v2);//DECIR el anuncio uno (local) y darle el paso al anuncio dos de la TAPA
			}			
		}
/*
hh63=()=>//ACTUALIZAR la velocidad de la(s) marquesina(s)
		{	hOG(63);//mIS(62);
			tNoti.setAttribute('scrollamount',velo*speed*speed);
			if(g00VARS[5][2])//Si i1..
			{	tNot2.setAttribute('scrollamount',velo*speed*speed);
			}
		}
*/
hh64=(tam,rev)=>//REALIZAR acción o cambio de tamaño DEL VISOR
		{	hOG(64);//
			hh69();//OCULTAR tamaños VISOR
			if(tam)
			{	switch (tam)
				{	case 1:
						g00VARS[64][2] = 1;
					break;
					case 2:
						g00VARS[64][2] = 2;
					break;
					case 3:
						g00VARS[64][2] = 3;
					break;
					case 4:
						g00VARS[64][2] = 4;
					break;
					case 5:
						g00VARS[64][2] = 5;
					break;
				}

			}
			else
			{	if(rev)
				{	switch (g00VARS[64][2])
					{	case 1:
							g00VARS[64][2] = 5;
						break;
						case 2:
							g00VARS[64][2] = 1;
						break;
						case 3:
							g00VARS[64][2] = 2;
						break;
						case 4:
							g00VARS[64][2] = 3;
						break;
						case 5:
							g00VARS[64][2] = 4;
						break;
					}
				}
				else
				{	switch (g00VARS[64][2])
					{	case 1:
							g00VARS[64][2] = 2;
						break;
						case 2:
							g00VARS[64][2] = 3;
						break;
						case 3:
							g00VARS[64][2] = 4;
						break;
						case 4:
							g00VARS[64][2] = 5;
						break;
						case 5:
							g00VARS[64][2] = 1;
						break;
					}
				}
			}
			switch (g00VARS[64][2])
			{	case 1:
					mIr001B[30][4] = 1;			
					//r001B[4][30] = 1;
				break;
				case 2:
					mIr001B[31][4] = 1;			
					//r001B[4][31] = 1;
				break;
				case 3:
					mIr001B[32][4] = 1;			
					//r001B[4][32] = 1;
				break;
				case 4:
					mIr001B[33][4] = 1;			
					//r001B[4][33] = 1;
				break;
				case 5:
					mIr001B[34][4] = 1;			
					//r001B[4][34] = 1;
				break;
			}
			hh70();//ajusta el tamaño del VISOR Y CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
		}
/*
hh65=()=>//HABILITAR visor tamaño 2
		{	hOG(65);//
			console.log('f165 g00VARS[64][3]=',g00VARS[64][3],'; g00VARS[64][2]=',g00VARS[64][2],'\n\n');
			g00VARS[64][2] = 1;
			hh69();//OCULTAR tamaños VISOR
			r001B[4][31] = 1;//41
			hh70();//ajusta el tamaño del VISOR Y CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
		}

hh66=()=>//HABILITAR visor tamaño 3
		{	hOG(66);//
			console.log('f166 g00VARS[64][3]=',g00VARS[64][3],'; g00VARS[64][2]=',g00VARS[64][2],'\n\n');
			g00VARS[64][2] = 2;
			hh69();//OCULTAR tamaños VISOR
			r001B[4][32] = 1;//42
			hh70();//ajusta el tamaño del VISOR Y CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
		}

hh67=()=>//HABILITAR visor tamaño 4
		{	hOG(67);//
			console.log('f167 g00VARS[64][3]=',g00VARS[64][3],'; g00VARS[64][2]=',g00VARS[64][2],'\n\n');
			g00VARS[64][2] = 3;
			hh69();//OCULTAR tamaños VISOR
			r001B[4][33] = 1;//43
			hh70();//ajusta el tamaño del VISOR Y CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
		}

hh68=()=>//HABILITAR visor tamaño 5
		{	hOG(68);//
			console.log('f168 g00VARS[64][3]=',g00VARS[64][3],'; g00VARS[64][2]=',g00VARS[64][2],'\n\n');
			g00VARS[64][2] = 4;
			hh69();//OCULTAR tamaños VISOR
			r001B[4][34] = 1;//44
			hh70();//ajusta el tamaño del VISOR Y CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
		}
*/
hh69=()=>//OCULTAR todos los botones de tamaño visor
		{	hOG(69);
			mIr001B[30][4] = 0;//40			
			//r001B[4][30] = 0;//40
			mIr001B[31][4] = 0;//41			
			//r001B[4][31] = 0;//41
			mIr001B[32][4] = 0;//42			
			//r001B[4][32] = 0;//42
			mIr001B[33][4] = 0;//43			
			//r001B[4][33] = 0;//43
			mIr001B[34][4] = 0;//44			
			//r001B[4][34] = 0;//44
		}

hh70=()=>//AJUSTAR el tamaño del visor, CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
		{	hOG(70);//mIS(34);
			console.log('f170 g00VARS[64][3]=',g00VARS[64][3],'; g00VARS[64][2]=',g00VARS[64][2],'\n\n');
			f0068();//ajusta el tamaño del VISOR
			f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
		}

hh71=()=>//ACTIVAR Ventana i (tablón de anuncios)
		{	hOG(71);
			f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual
			setTimeout(()=>//Reduce el conteo para activar la presentación
			{	conteo[3] = 1;//Orden de iniciar el tablón i
			}
			,1000);
		}

hh72=()=>//COLOREAR borde de la presentación AV, cargar el codigo QR, el logo y la imagen
		{	hOG(72);
			//console.log(' - - -  rrrrrr hh72 dExt=',dExt);
			
			for (var i = 1; i < wColor.length; i++)
			{	
				f0123(dExt[0]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
			
				if(wColor[i][2]==bus)//Si el id del color es igual al de la memoria, bingo!!
				//if(wColor[i][2]==dExt[0])//Si el id del color es igual al de la memoria, bingo!!
				{	if(bus== 11)//color del borde igual al texto
					//if(dExt[0]== 11)//color del borde igual al texto
					{	iBody.style.setProperty('--cPres','transparent');
					}
					else
					{	iBody.style.setProperty('--cPres',wColor[i][0]);
					}
					i = wColor.length;//termina el for
				}
			}


			//Control ids?
			f0123(dExt[1]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
			iGol.innerHTML = "<img src='"+(kTapa0[bus][2]||'flags/logobogota.png')+"' class='cLogo'>";
			//iGol.innerHTML = "<img src='"+(kTapa0[dExt[1]][2]||'flags/logobogota.png')+"' class='cLogo'>";



			f0123(dExt[3]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
			iPreAV.innerHTML = '<i class="'+kTapa1[83][2]+' cAjust8"></i>';//'';//<img src="'+kTapa0[bus][2]+'" class="c1x0">'||'<i class="'+kTapa1[51][2]+' cAjust8"></i>';
			//iPreAV.innerHTML = '<img src="'+(kTapa0[dExt[3]][2]||'files/chapinero.jpg')+'" class="c1x0">';
			


			f0123(dExt[4]);//BUSCAR id/Fila que corresponde a cierto id Buscado en kTapa0
			iCodQ.innerHTML = "<img src='"+(kTapa0[bus][2]||'files/qrcode.png')+"' class='cBox'>";
			//iCodQ.innerHTML = "<img src='"+(kTapa0[dExt[4]][2]||'files/qrcode.png')+"' class='cBox'>";
		}

hh73=()=>//
		{	hOG(73);
		}

hh74=()=>//DESACTIVAR la presentación AV
		{	hOG(74);
			conteo[1] = 1;//se habilita el conteo porque se desactiva la presentación
			conteo[0] = aaini;//se reinicia el conteo
			accion = 0;//reset de eventos para dar inicio al conteo
			f0109();//QUITAR la presentación
			/*
			if(g00VARS[5][2])//Si esta i1..
			{	inteL.innerHTML = '';
			}
			inteR.innerHTML = '';//Error?
			console.log(' ::::: se DESactiva la presentación');
			iPRESE.classList.add('cX');
			iCodQ.classList.add('cX');
			*/
			//iRUTA.classList.remove('cX');//Muestra LA RUTA
			//hh8();
		}

hh75=()=>//ACTUALIZAR pasado de mAX
		{	hOG(75);
			mAX = maX;//Se actualiza el pasado de maX
			fff();//Se quita la pantalla de alerta por pantalla MINI
		}

hh76=()=>//OCULTAR velocidades del reproductor
		{	hOG(76);
			mIr001B[3][4] = 0;			
			//r001B[4][3] = 0;
			mIr001B[4][4] = 0;			
			//r001B[4][4] = 0;
			mIr001B[5][4] = 0;			
			//r001B[4][5] = 0;
			mIr001B[6][4] = 0;			
			//r001B[4][6] = 0;
			mIr001B[7][4] = 0;			
			//r001B[4][7] = 0;
		}

hh77=(rev)=>//AJUSTAR Velocidad lenta
		{	hOG(77);
			mIr001B[5][4] = 0;//ocultar 1.0			
			//r001B[4][5] = 0;//ocultar 1.0
			if(rev)
			{	g00VARS[44][2] = 1.5;
				mIr001B[4][4] = 1;			
				//r001B[4][4] = 1;
			}
			else
			{	g00VARS[44][2] = 0.75;//0.73 velocidad 0 - 3.6
				mIr001B[6][4] = 1;			
				//r001B[4][6] = 1;
			}
			f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
		}

hh78=(rev)=>//AJUSTAR Velocidad muy lenta
		{	hOG(78);
			mIr001B[6][4] = 0;//ocultar 0.75			
			//r001B[4][6] = 0;//ocultar 0.75
			if(rev)
			{	g00VARS[44][2] = 1;
				mIr001B[5][4] = 1;			
				//r001B[4][5] = 1;
			}
			else
			{	g00VARS[44][2] = 0.6;//0.46 velocidad 0 - 3.6
				mIr001B[7][4] = 1;			
				//r001B[4][7] = 1;
			}
			f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
		}

hh79=(rev)=>//AJUSTAR Velocidad muy rápida
		{	hOG(79);
			mIr001B[7][4] = 0;//ocultar 0.6			
			//r001B[4][7] = 0;//ocultar 0.6
			if(rev)
			{	g00VARS[44][2] = 0.75;
				mIr001B[6][4] = 1;			
				//r001B[4][6] = 1;
			}
			else
			{	g00VARS[44][2] = 2;//2.3 velocidad 0 - 3.6
				mIr001B[3][4] = 1;			
				//r001B[4][3] = 1;
			}
			f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
		}

hh80=(rev)=>//AJUSTAR Velocidad rápida
		{	hOG(80);
			mIr001B[3][4] = 0;//ocultar 2.0			
			//r001B[4][3] = 0;//ocultar 2.0
			if(rev)
			{	g00VARS[44][2] = 0.6;//0.6 velocidad 0 - 3.6
				mIr001B[7][4] = 1;			
				//r001B[4][7] = 1;
			}
			else
			{	g00VARS[44][2] = 1.5;//1.55 velocidad 0 - 3.6
				mIr001B[4][4] = 1;			
				//r001B[4][4] = 1;
			}
			f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
		}

hh81=(rev)=>//AJUSTAR Velocidad normal
		{	hOG(81);
			mIr001B[4][4] = 0;//ocultar 1.5			
			//r001B[4][4] = 0;//ocultar 1.5
			if(rev)
			{	g00VARS[44][2] = 2;//0.6 velocidad 0 - 3.6
				mIr001B[3][4] = 1;			
				//r001B[4][3] = 1;
			}
			else
			{	g00VARS[44][2] = 1;//velocidad 0 - 3.6
				mIr001B[5][4] = 1;			
				//r001B[4][5] = 1;
			}
			f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
		}

hh82=(def)=>//ACTUALIZAR la velocidad:: standar o por defecto(def) / configuración del usuario
		{	hOL(82);
			if(def)
			{	if (g00VARS[44][3] < g00VARS[44][2])//si el valor por defecto es mayor que el ajuste del usuario
				{	speed = g00VARS[44][3];//tomar el valor por defecto
				}
				else
				{	speed = g00VARS[44][2];//dejar el valor del usuario
				}
			}
			else
			{	speed = g00VARS[44][2];//valor ajustado por el usuario
			}
		}


hh83=(rev)=>//HABILITAR texto amarillo boton negro simil hh27()
		{	hOU(83);//mIS(27);
			if(rev)
			{	f0101();//REGRESAR color texto-boton previo
			}
			else
			{	if( g00VARS[34][2] != 2)
				{	g00VARS[34][2] = 2;
					hh36();//L ESTILIZAR: texto blanco, botón negro, fondo claro	
					iBody.style.setProperty('--cblwh1','yellow');
				 	hh85();//OCULTAR los botones de color de texto/fondo
					mIr001B[16][4] = 1;//15     11>18			
					//r001B[4][16] = 1;//15     11>18
					f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
				}
			}
		}

hh84=(rev)=>//HABILITAR texto negro botón blanco simil hh28()
		{	hOG(84);//mIS(28);
			if(rev)
			{	f0101();//REGRESAR color texto-boton previo
			}
			else
			{	if( g00VARS[34][2] != 3)
				{	g00VARS[34][2] = 3;
					hh35();//Oscurecer el color del fondo/boton			
					hh85();//OCULTAR los botones de color de texto/fondo
					mIr001B[17][4] = 1;//14     10>17			
					//r001B[4][17] = 1;//14     10>17
					f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
				}
			}
		}

hh85=()=>//OCULTAR botones de color de texto/botón
		{	hOG(85);
			mIr001B[15][4] = 0;			
			//r001B[4][15] = 0;
			mIr001B[16][4] = 0;			
			//r001B[4][16] = 0;
			mIr001B[17][4] = 0;			
			//r001B[4][17] = 0;
			mIr001B[18][4] = 0;			
			//r001B[4][18] = 0;
		}

hh86=()=>//OCULTAR todos los marcos de color
		{	hOG(86);
		}

hh87=()=>//RESET de ACCESO
		{	hOG(87);
			switch (g00VARS[45][2])
			{	case 1: hh50();break;
				case 2: hh51();break;
				//case 3: hh54();break;
				case 3: hh53();break;
				case 4: hh56();break;
				case 5: hh57();break;
				case 6: hh58();break;
				case 7: hh59();break;
				//case 9: hh60();break;
			}
			gRuta = 1;
			gFoco = 8;
			f0017();
			//hh9();
			 
	/*	//++f0093();//REGISTRAR primer clic maximizando
		//++hh49();//REGISTRAR la primer selección de ACCESO
		 //	hh64();//Señas minimas//g00VARS[64][2] = 0;//visor/icono muy pequeño
			hh67();//Señas grandes?//g00VARS[64][2] = 3;//visor/icono mediano
			f0067();//Ajusta el visor
			hh1();//texto
			hh25();//DESHABILITAR i1 (sin Ingles de apoyo)
			//hh23();//Mudo
			hh84();//HABILITAR texto negro / blanco
			hh30();//HABILITAR tamaño 4 mediano
			f0105();//RESET de velocidad -> 1.0
			hh24();//HABILITAR lector de pantalla (sonido)
			hh19();//HABILITAR tamaño 2
		 // hh20();//texto pequeño
			f0092();//HABILITAR bordes superior e inferior
			hh40(1);//AJUSTAR fondo 4 turquesa
			f0118();//HABILITAR la luz*/
		}

hh88=(cod,rev)=>//REALIZAR acción o cambio de luz
		{	hOG(88);
			if(cod)//Forzar acción..
			{	switch (cod)
				{	case 1:
						g00VARS[32][2] = 1;
						nUm = g00VARS[32][2];
					break;
					case 2:
						g00VARS[32][2] = 2;
						nUm = g00VARS[32][2];
					break;
					case 3:
						g00VARS[32][2] = 3;
						nUm = g00VARS[32][2];
					break;
					case 4://Se oprimio info se prende la luz, Si la bandera de info esta activa
						nUm = 1;//luz encendida
					break;
					case 5://Se va para Ruta -> Recupera el valor previo
						nUm = g00VARS[32][3];//Recupera la memoria de la luz
					break;
				}
			}
			else//0||undefined  Cambio de luz:
			{	for (var i = 22; i >= 20; i--)
				{	mIr001B[i][4] = 0;//ocultar todos los botones de luz			
					//r001B[4][i] = 0;//ocultar todos los botones de luz
				}
				if(rev)//Regresar
				{	switch(g00VARS[32][2])
					{	case 1:
							g00VARS[32][2] = 3;
						break;
						case 2:
							g00VARS[32][2] = 1;
						break;
						case 3:
							g00VARS[32][2] = 2;
						break;
					}
				}
				else//Avanzar
				{	switch(g00VARS[32][2])
					{	case 1:
							g00VARS[32][2] = 2;
						break;
						case 2:
							g00VARS[32][2] = 3;
						break;
						case 3:
							g00VARS[32][2] = 1;
						break;
					}
				}
				nUm = g00VARS[32][2];
				switch(nUm)
				{	case 1:
						mIr001B[20][4] = 1;			
						//r001B[4][20] = 1;
					break;
					case 2:
						mIr001B[21][4] = 1;			
						//r001B[4][21] = 1;
					break;
					case 3:
						mIr001B[22][4] = 1;			
						//r001B[4][22] = 1;
					break;
				}
				nUm = g00VARS[32][2];
				g00VARS[32][3] = nUm;//Memoriza la luz actual
				f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
			}
			switch(nUm)
			{	case 1:luZ[0] = 'transparent';break;/*neutra*/
				case 2:luZ[0] = 'rgba(0,0,0,0.5)';break;/*oscura*/
				case 3:luZ[0] = 'black';break;/*apagada*/
			}
			iBody.style.setProperty('--cLuz',luZ[0]);
		}

hh98=()=>//CARGAR la ruta 8 en pantalla (PPAL)
		{	hOU(98);
			gRuta = 8;
			gFoco = 1;
			f0017();
		}

hh99=()=>//VOLVER A CARGAR la página
		{	hOU(99);
			location.reload();
		}

hh100=(rev)=>//CAMBIAR el idioma
		{	hOU(100);
			mIr002A[1][1] = orig[0];//CREO QUE NO HACE NADA!!! Recupera el string original del idioma ingles
			//r002A[1][1] = orig[0];//CREO QUE NO HACE NADA!!! Recupera el string original del idioma ingles
			for (var i = 1; i < wIDI.length; i++)//Recorre el array de idiomas
			{	if((wIDI[i][3] == g00VARS[27][2]))//Si ese idioma tiene el id del key actual, BINGO!! entonces..
				{	if(rev)
					{	//Regresar g00VARS[27][2] y g00VARS[67][2]:
						if(i == 1)//Si es la primer fila
						{	g00VARS[27][2] = wIDI[wIDI.length - 1][3];//idi key de la última fila
							g00VARS[67][2] = wIDI[wIDI.length - 1][4];//idi key de la última  fila				
							mIr002A[1][1] = (wIDI.length - 1)+', '+wIDI[wIDI.length - 1][0];//traduccion al ingles del idioma
							//r002A[1][1] = (wIDI.length - 1)+', '+wIDI[wIDI.length - 1][0];//traduccion al ingles del idioma
						}
						else//No es la última fila
						{	g00VARS[27][2] = wIDI[i - 1][3];//idi key de la siguiente fila
							g00VARS[67][2] = wIDI[i - 1][4];//idi key de la siguiente fila
							mIr002A[1][1] = (i - 1) +', '+wIDI[i - 1][0];//traduccion al ingles del idioma 
							//r002A[1][1] = (i - 1) +', '+wIDI[i - 1][0];//traduccion al ingles del idioma 
						}
					}
					else
					{	//Avanzar g00VARS[27][2] y g00VARS[67][2]:
						if(i == wIDI.length - 1)//Si es la ultima fila
						{	g00VARS[27][2] = wIDI[1][3];//idi key de la primera fila
							g00VARS[67][2] = wIDI[1][4];//idi key de la primera fila				
							mIr002A[1][1] = '1, '+wIDI[1][0];//traduccion al ingles del idioma
							//r002A[1][1] = '1, '+wIDI[1][0];//traduccion al ingles del idioma
						}
						else//No es la última fila
						{	g00VARS[27][2] = wIDI[i + 1][3];//idi key de la siguiente fila
							g00VARS[67][2] = wIDI[i + 1][4];//idi key de la siguiente fila
							mIr002A[1][1] = (i + 1) +', '+wIDI[i + 1][0];//traduccion al ingles del idioma 
							//r002A[1][1] = (i + 1) +', '+wIDI[i + 1][0];//traduccion al ingles del idioma 
						}
					}
					i = wIDI.length;//Termina el for: desactiva el permiso de seguir - PARE
				}
			}
			f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
		}

hh101=(rev)=>//CAMBIAR la seña
		{	hOU(101);
			mIr002A[2][1] = orig[1];//Recupera el string original de la ASL (mIr002A[2][1])
			//r002A[1][2] = orig[1];//Recupera el string original de la ASL (r002A[1][2])
			for (var i = 1; i < wSIGN.length; i++)//Recorre el array de señas
			{	if((wSIGN[i][3] == g00VARS[67][2]))//Si esa seña tiene el id de la seña, entonces..
				{	if(rev)
					{	//regresar idApp en g00VARS[67][2]
						if(i == 1)//Si es la primer fila
						{	g00VARS[67][2] = wSIGN[wSIGN.length - 1][3];//idi key seña de la última fila
							mIr002A[2][1] = (wSIGN.length - 1)+', '+wSIGN[wSIGN.length - 1][0];//traducción al ingles de la seña
							//r002A[1][2] = (wSIGN.length - 1)+', '+wSIGN[wSIGN.length - 1][0];//traducción al ingles de la seña
						}
						else//No es la primer fila
						{	g00VARS[67][2] = wSIGN[i - 1][3];//idi key seña de la siguiente fila
							mIr002A[2][1] = (i - 1) +', '+wSIGN[i - 1][0];//traducción al ingles de la seña
							//r002A[1][2] = (i - 1) +', '+wSIGN[i - 1][0];//traducción al ingles de la seña
						}
					}
					else
					{	//avanzar idApp en g00VARS[67][2]
						if(i == wSIGN.length - 1)//Si es la ultima fila
						{	g00VARS[67][2] = wSIGN[1][3];//idi key seña de la primera fila
							mIr002A[2][1] = '1, '+wSIGN[1][0];//traducción al ingles de la seña
							//r002A[1][2] = '1, '+wSIGN[1][0];//traducción al ingles de la seña
						}
						else//No es la última fila
						{	g00VARS[67][2] = wSIGN[i + 1][3];//idi key seña de la siguiente fila
							mIr002A[2][1] = (i + 1) +', '+wSIGN[i + 1][0];//traducción al ingles de la seña
							//r002A[1][2] = (i + 1) +', '+wSIGN[i + 1][0];//traducción al ingles de la seña
						}
					}
					i = wSIGN.length;//Termina el for: desactiva el permiso de seguir - PARE	
				}
			}
			f0121();//ACTUALIZAR el texto del botón señas
			f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
		}

hh102=(rev)=>//CAMBIAR de lugar 0 sitio(0-9) CONTINENTES wMAPA1 por click - se deben recalcular las listas 2-10 (wMAPA)
		{	hOU(102);
			if(rev)
			{	if(papas[0]==1)//Si dato actual de papas [0] es el PRIMERO del arreglo de wPAPA1..
				{	papas[0]=wPAPA1.length - 1;//El dato papas[0] cambia al final del arreglo de wPAPA1 para iniciar de nuevo
				}
				else//Si no es el primer dato de papas[0] 
				{	papas[0]--;//El dato papas[0] se decrementa en uno
				}
			}
			else
			{	if(papas[0]<wPAPA1.length - 1)//Si dato actual de papas [0] no es el final del arreglo de wPAPA1..
				{	papas[0]++;//El dato papas[0] se incrementa en uno
				}
				else//Si no el dato papas[0] se hace igual a 1 para que inicie un nuevo ciclo
				{	papas[0]=1;//Reinicia conteo desde 1 porque no tiene recepción(fila padre)
				}
			}
			f0124(0);//ACTUALIZAR tablas siguientes a wPAPA1 de extensiones a partir de la lista/columna(ini)[0-8] que cambio de valor, si no existen tablas las deja vacias y oculta los botones respectivos de los sitios 
			console.log('|> Flag hh102 -> 125');
			f0125(0);//ACTUALIZAR string de los botones de sitios
			f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
		}

hh103=(rev)=>//CAMBIAR de lugar 1 sitio(1-9) PAISES - parece ok
		{	hOU(103);
			let pos;
			for (var i = 1; i < wPAPA2.length; i++)//Recorrer wPAPA2
			{	if(wPAPA2[i][0]==papas[1])//Encuentra dato papas[1], guarda fila [i] dentro de wPAPA2
				{	pos = i;
					i = wPAPA2.length;//termina el for
				}
			}
			if(salTO<0)//rev:5-9 salTO's negativos
			{	if(pos>1)//Si fila [i] no es la PRIMER fila de wPAPA10
				{	if((salTO*-1)>=pos)//Si tamaño del salto es mayor que pos
					{ 	papas[1]=wPAPA2[1][0];//Salta a la primer posición y toma el nuevo id de la fila de la lista
					}
					else
					{	papas[1]=wPAPA2[pos + salTO][0];//Salta atrás y toma el nuevo id de la fila de la lista
					}
				}
				else//1 Si fila [i] es la PRIMER fila de wPAPA10
				{	papas[1]=wPAPA2[wPAPA2.length - 1][0];//1;//Reinicia conteo de filas desde LA última posición
				}
			}
			else//rev:0-4 salTO's positivos
			{	if(pos<wPAPA2.length - 1)
				{	if(salTO>=(wPAPA2.length - 1 - pos))//Si tamaño del salto es mayor que lo que falta
					{ 	papas[1]=wPAPA2[wPAPA2.length - 1][0];//Salta a la última posición y toma el nuevo id de la lista
					}
					else//Salta adelante
					{	papas[1]=wPAPA2[pos + salTO][0];//toma el nuevo id del siguiente elemento de la lista
					}
				}
				else
				{	papas[1]=wPAPA2[1][0];//toma el nuevo id del primer elemento de la lista
				}
			}
			f0124(1);//ACTUALIZAR tablas siguientes a wPAPA1 osea extensiones a partir de la lista/columna(ini)[0-8] que cambio de valor, si no existen tablas las deja vacias y oculta los botones respectivos de los sitios 
			console.log('|> Flag  -> 125');
			f0125(1);//ESTABLECER O ACTUALIZAR string de botones de sitios.
			f0017();//CARGAR guiones de ruta y POSICIONAR foco sobre casilla actual (luego de esperar que se maximice la pantalla)
		}


hh104=(rev)=>//CAMBIAR a la siguiente fila(wPAPA3[0=>n]) y poner 0's a la derecha de papas[2]; lugar 2  sitio(2-9) - DEPTOS
		{	hOU(104);
			let pos;
			for (var i = 1; i < wPAPA3.length; i++)
			{	if(wPAPA3[i][0]==papas[2])//Encuentra posición(fila) de i dentro de wPAPA2
				{	pos = i;
					i = wPAPA3.length;//termina el for
				}
			}
			if(salTO<0)//rev:5-9 salTO's negativos
			{	if(pos>1)//Si fila [i] no es la PRIMER fila de wPAPA10
				{	if((salTO*-1)>=pos)//Si tamaño del salto es mayor que pos
					{ 	papas[2]=wPAPA3[1][0];//Salta a la primer posición y toma el nuevo id de la fila de la lista
					}
					else
					{	papas[2]=wPAPA3[pos + salTO][0];//Salta atrás y toma el nuevo id de la fila de la lista
					}
				}
				else//1 Si fila [i] es la PRIMER fila de wPAPA10
				{	papas[2]=wPAPA3[wPAPA3.length - 1][0];//1;//Reinicia conteo de filas desde LA última posición
				}
			}
			else//rev:0-4 salTO's positivos
			{	if(pos<wPAPA3.length - 1)
				{	if(salTO>=(wPAPA3.length - 1 - pos))//Si tamaño del salto es mayor que lo que falta
					{ 	papas[2]=wPAPA3[wPAPA3.length - 1][0];//Salta a la última posición y toma el nuevo id de la lista
					}
					else//Salta adelante
					{	papas[2]=wPAPA3[pos + salTO][0];//toma el nuevo id del siguiente elemento de la lista
					}
				}
				else
				{	papas[2]=wPAPA3[1][0];//toma el nuevo id del primer elemento de la lista
				}
			}
			f0124(2);//ACTUALIZAR las tablas siguientes wPAPAx de las ramas a partir de la lista/columna(ini)[0-8] que cambio de valor, si no existen tablas las deja vacias y oculta los botones respectivos de los sitios 
			f0125(2);//ESTABLECER O ACTUALIZAR el string de los botones de los sitios.
			f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
		}

hh105=(rev)=>//CAMBIAR de lugar 3  sitio(3-9)
		{	hOU(105);
			let pos;
			for (var i = 1; i < wPAPA4.length; i++)
			{	if(wPAPA4[i][0]==papas[3])//Encuentra cual es la posición de i dentro de wPAPA2
				{	pos = i;
					i = wPAPA4.length;//termina el for
				}
			}
			if(salTO<0)//rev:5-9 salTO's negativos
			{	if(pos>1)//Si fila [i] no es la PRIMER fila de wPAPA10
				{	if((salTO*-1)>=pos)//Si tamaño del salto es mayor que pos
					{ 	papas[3]=wPAPA4[1][0];
					}
					else
					{	papas[3]=wPAPA4[pos + salTO][0];
					}
				}
				else//1 Si fila [i] es la PRIMER fila de wPAPA10
				{	papas[3]=wPAPA4[wPAPA4.length - 1][0];
				}
			}
			else//rev:0-4 salTO's positivos
			{	if(pos<wPAPA4.length - 1)
				{	if(salTO>=(wPAPA4.length - 1 - pos))//Si tamaño del salto es mayor que lo que falta
					{ 	papas[3]=wPAPA4[wPAPA4.length - 1][0];//Salta a la última posición y toma el nuevo id de la lista
					}
					else//Salta adelante
					{	papas[3]=wPAPA4[pos + salTO][0];//toma el nuevo id del siguiente elemento de la lista
					}
				}
				else
				{	papas[3]=wPAPA4[1][0];//toma el nuevo id del primer elemento de la lista
				}
			}
			f0124(3);//ACTUALIZAR las tablas siguientes wPAPAx de las ramas a partir de la lista/columna(ini)[0-8] que cambio de valor, si no existen tablas las deja vacias y oculta los botones respectivos de los sitios 
			f0125(3);//ESTABLECER O ACTUALIZAR el string de los botones de los sitios.
			f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
		}

hh106=(rev)=>//CAMBIAR de lugar 4  sitio(4-9)
		{	hOU(106);
			let pos;
			for (var i = 1; i < wPAPA5.length; i++)
			{	if(wPAPA5[i][0]==papas[4])//Encuentra cual es la posición de i dentro de wPAPA2
				{	pos = i;
					i = wPAPA5.length;//termina el for
				}
			}/*ORIGINAL..*/
			if(salTO<0)//rev:5-9 salTO's negativos
			{	if(pos>1)//Si fila [i] no es la PRIMER fila de wPAPA10
				{	if((salTO*-1)>=pos)//Si tamaño del salto es mayor que pos
					{ 	papas[4]=wPAPA5[1][0];//Salta a la primer posición y toma el nuevo id de la fila de la lista
					}
					else
					{	papas[4]=wPAPA5[pos + salTO][0];//Salta atrás y toma el nuevo id de la fila de la lista
					}
				}
				else//1 Si fila [i] es la PRIMER fila de wPAPA10
				{	papas[4]=wPAPA5[wPAPA5.length - 1][0];//1;//Reinicia conteo de filas desde LA última posición
				}
			}
			else//rev:0-4 salTO's positivos
			{	if(pos<wPAPA5.length - 1)
				{	if(salTO>=(wPAPA5.length - 1 - pos))//Si tamaño del salto es mayor que lo que falta
					{ 	papas[4]=wPAPA5[wPAPA5.length - 1][0];//Salta a la última posición y toma el nuevo id de la lista
					}
					else//Salta adelante
					{	papas[4]=wPAPA5[pos + salTO][0];//toma el nuevo id del siguiente elemento de la lista
					}
				}
				else
				{	papas[4]=wPAPA5[1][0];//toma el nuevo id del primer elemento de la lista
				}
			}
			f0124(4);//ACTUALIZAR las tablas siguientes wPAPAx de las ramas a partir de la lista/columna(ini)[0-8] que cambio de valor, si no existen tablas las deja vacias y oculta los botones respectivos de los sitios 
			f0125(4);//ESTABLECER O ACTUALIZAR el string de los botones de los sitios.
			f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
		}

hh107=(rev)=>//CAMBIAR de lugar 5 sitio(5-9)
		{	hOU(107);
			let pos;
			for (var i = 1; i < wPAPA6.length; i++)
			{	if(wPAPA6[i][0]==papas[5])//Encuentra cual es la posición de i dentro de wPAPA2
				{	pos = i;
					i = wPAPA6.length;//termina el for
				}
			}
			if(salTO<0)//rev:5-9 salTO's negativos
			{	if(pos>1)//Si fila [i] no es la PRIMER fila de wPAPA10
				{	if((salTO*-1)>=pos)//Si tamaño del salto es mayor que pos
					{ 	papas[5]=wPAPA6[1][0];//Salta a la primer posición y toma el nuevo id de la fila de la lista
					}
					else
					{	papas[5]=wPAPA6[pos + salTO][0];//Salta atrás y toma el nuevo id de la fila de la lista
					}
				}
				else//1 Si fila [i] es la PRIMER fila de wPAPA10
				{	papas[5]=wPAPA6[wPAPA6.length - 1][0];//1;//Reinicia conteo de filas desde LA última posición
				}
			}
			else//rev:0-4 salTO's positivos
			{	if(pos<wPAPA6.length - 1)
				{	if(salTO>=(wPAPA6.length - 1 - pos))//Si tamaño del salto es mayor que lo que falta
					{ 	papas[5]=wPAPA6[wPAPA6.length - 1][0];//Salta a la última posición y toma el nuevo id de la lista
					}
					else//Salta adelante
					{	papas[5]=wPAPA6[pos + salTO][0];//toma el nuevo id del siguiente elemento de la lista
					}
				}
				else
				{	papas[5]=wPAPA6[1][0];//toma el nuevo id del primer elemento de la lista
				}
			}
			f0124(5);//ACTUALIZAR las tablas siguientes wPAPAx de las ramas a partir de la lista/columna(ini)[0-8] que cambio de valor, si no existen tablas las deja vacias y oculta los botones respectivos de los sitios 
			f0125(5);//ESTABLECER O ACTUALIZAR el string de los botones de los sitios.
			f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
		}

hh108=(rev)=>//CAMBIAR de lugar 6  sitio(6-9)
		{	hOU(108);
			let pos;
			for (var i = 1; i < wPAPA7.length; i++)
			{	if(wPAPA7[i][0]==papas[6])//Encuentra cual es la posición de i dentro de wPAPA2
				{	pos = i;
					i = wPAPA7.length;//termina el for
				}
			}
			if(salTO<0)//rev:5-9 salTO's negativos
			{	if(pos>1)//Si fila [i] no es la PRIMER fila de wPAPA10
				{	if((salTO*-1)>=pos)//Si tamaño del salto es mayor que pos
					{ 	papas[6]=wPAPA7[1][0];//Salta a la primer posición y toma el nuevo id de la fila de la lista
					}
					else
					{	papas[6]=wPAPA7[pos + salTO][0];//Salta atrás y toma el nuevo id de la fila de la lista
					}
				}
				else//1 Si fila [i] es la PRIMER fila de wPAPA10
				{	papas[6]=wPAPA7[wPAPA7.length - 1][0];//1;//Reinicia conteo de filas desde LA última posición
				}
			}
			else//rev:0-4 salTO's positivos
			{	if(pos<wPAPA7.length - 1)
				{	if(salTO>=(wPAPA7.length - 1 - pos))//Si tamaño del salto es mayor que lo que falta
					{ 	papas[6]=wPAPA7[wPAPA7.length - 1][0];//Salta a la última posición y toma el nuevo id de la lista
					}
					else//Salta adelante
					{	papas[6]=wPAPA7[pos + salTO][0];//toma el nuevo id del siguiente elemento de la lista
					}
				}
				else
				{	papas[6]=wPAPA7[1][0];//toma el nuevo id del primer elemento de la lista
				}
			}
			f0124(6);//ACTUALIZAR las tablas siguientes wPAPAx de las ramas a partir de la lista/columna(ini)[0-8] que cambio de valor, si no existen tablas las deja vacias y oculta los botones respectivos de los sitios 
			f0125(6);//ESTABLECER O ACTUALIZAR el string de los botones de los sitios.
			f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
		}

hh109=(rev)=>//CAMBIAR de lugar 7  sitio(7-9)
		{	hOU(109);
			let pos;
			for (var i = 1; i < wPAPA8.length; i++)
			{	if(wPAPA8[i][0]==papas[7])//Encuentra cual es la posición de i dentro de wPAPA2
				{	pos = i;
					i = wPAPA8.length;//termina el for
				}
			}
			if(salTO<0)//rev:5-9 salTO's negativos
			{	if(pos>1)//Si fila [i] no es la PRIMER fila de wPAPA10
				{	if((salTO*-1)>=pos)//Si tamaño del salto es mayor que pos
					{ 	papas[7]=wPAPA8[1][0];//Salta a la primer posición y toma el nuevo id de la fila de la lista
					}
					else
					{	papas[7]=wPAPA8[pos + salTO][0];//Salta atrás y toma el nuevo id de la fila de la lista
					}
				}
				else//1 Si fila [i] es la PRIMER fila de wPAPA10
				{	papas[7]=wPAPA8[wPAPA8.length - 1][0];//1;//Reinicia conteo de filas desde LA última posición
				}
			}
			else//rev:0-4 salTO's positivos
			{	if(pos<wPAPA8.length - 1)
				{	if(salTO>=(wPAPA8.length - 1 - pos))//Si tamaño del salto es mayor que lo que falta
					{ 	papas[7]=wPAPA8[wPAPA8.length - 1][0];//Salta a la última posición y toma el nuevo id de la lista
					}
					else//Salta adelante
					{	papas[7]=wPAPA8[pos + salTO][0];//toma el nuevo id del siguiente elemento de la lista
					}
				}
				else
				{	papas[7]=wPAPA8[1][0];//toma el nuevo id del primer elemento de la lista
				}
			}
			f0124(7);//ACTUALIZAR las tablas siguientes wPAPAx de las ramas a partir de la lista/columna(ini)[0-8] que cambio de valor, si no existen tablas las deja vacias y oculta los botones respectivos de los sitios 
			f0125(7);//ESTABLECER O ACTUALIZAR el string de los botones de los sitios.
			f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
		}

hh110=(rev)=>//CAMBIAR de lugar 8  sitio(8-9)
		{	hOU(110);
			let pos;
			for (var i = 1; i < wPAPA9.length; i++)
			{	if(wPAPA9[i][0]==papas[8])//Encuentra cual es la posición de i dentro de wPAPA2
				{	pos = i;
					i = wPAPA9.length;//termina el for
				}
			}
			if(salTO<0)//rev:5-9 salTO's negativos
			{	if(pos>1)//Si fila [i] no es la PRIMER fila de wPAPA10
				{	if((salTO*-1)>=pos)//Si tamaño del salto es mayor que pos
					{ 	papas[8]=wPAPA9[1][0];//Salta a la primer posición y toma el nuevo id de la fila de la lista
					}
					else
					{	papas[8]=wPAPA9[pos + salTO][0];//Salta atrás y toma el nuevo id de la fila de la lista
					}
				}
				else//1 Si fila [i] es la PRIMER fila de wPAPA10
				{	papas[8]=wPAPA9[wPAPA9.length - 1][0];//1;//Reinicia conteo de filas desde LA última posición
				}
			}
			else//rev:0-4 salTO's positivos
			{	if(pos<wPAPA9.length - 1)
				{	if(salTO>=(wPAPA9.length - 1 - pos))//Si tamaño del salto es mayor que lo que falta
					{ 	papas[8]=wPAPA9[wPAPA9.length - 1][0];//Salta a la última posición y toma el nuevo id de la lista
					}
					else//Salta adelante
					{	papas[8]=wPAPA9[pos + salTO][0];//toma el nuevo id del siguiente elemento de la lista
					}
				}
				else
				{	papas[8]=wPAPA9[1][0];//toma el nuevo id del primer elemento de la lista
				}
			}
			f0124(8);//ACTUALIZAR las tablas siguientes wPAPAx de las ramas a partir de la lista/columna(ini)[0-8] que cambio de valor, si no existen tablas las deja vacias y oculta los botones respectivos de los sitios 
			f0125(8);//ESTABLECER O ACTUALIZAR el string de los botones de los sitios.
			f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
		}

hh111=(rev)=>//CAMBIAR de lugar 9  sitio(9-9)
		{	hOU(111);
			let pos;
			for (var i = 1; i < wPAPA10.length; i++)
			{	if(wPAPA10[i][0]==papas[9])//Encuentra cual es la posición de i dentro de wPAPA2
				{	pos = i;
					i = wPAPA10.length;//termina el for
				}
			}
			if(salTO<0)//rev:5-9 salTO's negativos
			{	if(pos>1)//Si fila [i] no es la PRIMER fila de wPAPA10
				{	if((salTO*-1)>=pos)//Si tamaño del salto es mayor que pos
					{ 	papas[9]=wPAPA10[1][0];//Salta a la primer posición y toma el nuevo id de la fila de la lista
					}
					else
					{	papas[9]=wPAPA10[pos + salTO][0];//Salta atrás y toma el nuevo id de la fila de la lista
					}
				}
				else//1 Si fila [i] es la PRIMER fila de wPAPA10
				{	papas[9]=wPAPA10[wPAPA10.length - 1][0];//1;//Reinicia conteo de filas desde LA última posición
				}
			}
			else//rev:0-4 salTO's positivos
			{	if(pos<wPAPA10.length - 1)
				{	if(salTO>=(wPAPA10.length - 1 - pos))//Si tamaño del salto es mayor que lo que falta
					{ 	papas[9]=wPAPA10[wPAPA10.length - 1][0];//Salta a la última posición y toma el nuevo id de la lista
					}
					else//Salta adelante
					{	papas[9]=wPAPA10[pos + salTO][0];//toma el nuevo id del siguiente elemento de la lista
					}
				}
				else
				{	papas[9]=wPAPA10[1][0];//toma el nuevo id del primer elemento de la lista
				}
			}
			f0124(9);//ACTUALIZAR las tablas siguientes wPAPAx de las ramas a partir de la lista/columna(ini)[0-8] que cambio de valor, si no existen tablas las deja vacias y oculta los botones respectivos de los sitios 
			f0125(9);//ESTABLECER O ACTUALIZAR el string de los botones de los sitios.
			f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
		}
/*
hh112=()=>//CAMBIAR de comunidad
		{	hOG(112);
			let col = 0;
			for (var i = 1; i < 10; i++)
			{	if(papas[i]!=0)
				{ 	col++;
				}
				else
				{	i = 10;//termina el for
				}
			}
			switch (col)
			{	case 1:hh103();break;
				case 2:hh104();break;
				case 3:hh105();break;
				case 4:hh106();break;
				case 5:hh107();break;
				case 6:hh108();break;
				case 7:hh109();break;
				case 8:hh110();break;
				case 9:hh111();break;
			}
			f0017();//CARGAR los guiones de ruta y POSICIONAR el foco sobre la casilla actual (luego de esperar que se maximice la pantalla)
		}
*/
