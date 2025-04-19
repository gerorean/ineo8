//t TRANSVERSALES 2 - Primeras funciones en cargar de uso transversal
/*  funciones..
		aLL()
        fERROR()
		fff()
		ggg()
        hLL()
		hOC()
		hOG()
        hOI()
		hOK()
		hOL()
		hOO()
        hOU()
		lOC()
		lOG()
        lOI()
		lOK()
		lOL()
		lOO()
		lOU()
*/
//============================================================
//console.log('inicioJS t: 0 ms');//:/Switch
//console.time('tiempoDeCarga');//:/SwitchS0//Inicio la carga

//Funciones visibles pero sin que nadie las llame..
function ggg(){	lOU();lOG();lOC();lOI();lOK();lOL();hOU();hOG();hOC();hOI();hOK();hOL()}

function fERROR()//adicionar para probar y capturar error
		{	try
			{	console.log('[Probando...');

				//lineas a probar
				iV2d.style.backgroundColor = 'yellow';
			}
			catch(err)
			{	fff();
				iV2d.style.backgroundColor = 'red';
				console.log('[************************** error = ',err,'*********************************]');
			};
		}
//============================================================		
/*	AYUDAS
¿Quién llama a la función X?:: adicionar antes de la función X  
console.error('|> Flag');
console.error('|> Flag  -> ');
console.log('[[ maX=',maX,' ambi=',ambi,' ambi1=',ambi1,' focBan=',focBan,' gFoco=',gFoco,' gRuta=',gRuta,' intBan=',intBan,']]');
console.log('[[ maX=',maX,' ambi=',ambi,' *focBan=',focBan,' gFoco=',gFoco,' gRuta=',gRuta,' intBan=',intBan,']]');							
	¿Dónde voy?:: insertar espacio y enseguida pegar
// ... ... ... Aquí Voy!! ... ... ...
	Permitir/Interrumpir código::
//:/Switch S1
	Para conocer duración de un proceso -> parte 1/2:
console.time("t3");
	Aquí lineas de código de un Proceso js -> parte 2/2:
console.timeEnd("t3");
	Tarea de código pendiente X por revizar:: insertar espacios antes y despues de X y enseguida pegar
// ... ... ... Ojo código pendiente!! ... ... ...
// .//============================================================.. ... ... Pendiente hasta aquí!! ... ... ...
*/

//	ASTERISCOS POR CONSOLA
function fff(){	if(reGis)
			{console.log('***********************************************************************************************************************************************************************************LineaDeAstericos*******************************************************************************************************************************************')}
		};

function aLL(id)//Incrementar en uno el contador y si es un botón ver si Maximizar? si o no
		{	g00LOGS[id][2] += 1;//INCREMENTA EN UNO LA CUENTA ACTUAL DE LLAMADOS DE ESE REGISTRO
			if (g00LOGS[id][3])//si 3LOG esta habilitado con un 1.. es un boton!
			{	//if(g00VARS[55][2]&&MaMi&&bMin)//Si ya ocurrio la primer interacción y (bandera de verificar si maxi o mini esta activa) y (la capa de pantalla minimizada esta activa) entonces
				if(MaMi&&bMin)//Si (bandera de verificar si maxi o mini esta activa) y (la capa de pantalla minimizada esta activa) entonces
				{	MaMi = 0;//Desactivar la bandera verificar si maxi o mini
					if ((document.fullscreen == false)||(document.fullscreenElement == null))
					{	f0022();//Maximizar
						console.log('Se minimizo con esc o conmuto el estado booleano del navegador y se volvio false y null=> maximizar ventana');
					}
					else
					{	console.log('anuncio y marca de agua: maximizar la ventana (del navegador), esta acción hace que conmute el estado booleano del navegador a false y permite que se maximice desde js');
						iMaxim.classList.remove('cX');//muestre boton max
						iCLIC.classList.add('cX');//oculte botón MAXIMIZAR
						
						//Aqui debe actualizar la tapa info porque la ventana no se pudo maximizar

						//f0073();//sonar pito alerta
						
						//Adicionar al string de info "Ventana: minimizada"
					}
					setTimeout(function()//Déspues de un segundo
					{	MaMi = 1;//Activar la bandera verificar si maxi o mini
					}
					,3000);
				}
			}
		}

function lOU(id)
		{	aLL(id);//Incrementar en uno el contador y si es un botón ver si Maximizar? si o no
			if(reGis&&g00LOGS[id][1])//si 1LOG esta habilitado con un 1..
			{	funsi ='sin Usarse [ ¡Atención! ¡este mensaje no debe salir por CONSOLA! ]';//No se ha usado
				fff();
				lOO(id);
			}
		}

function lOG(id)
		{	aLL(id);//Incrementar en uno el contador y si es un botón ver si Maximizar? si o no
			if(reGis&&g00LOGS[id][1])//si 1LOG esta habilitado con un 1..
			{	funsi ='sin Revizar';// revizar la función !!
				lOO(id);
			}
		}

function lOC(id)
		{	aLL(id);//Incrementar en uno el contador y si es un botón ver si Maximizar? si o no
			if(reGis&&g00LOGS[id][1])//si 1LOG esta habilitado con un 1..
			{	funsi ='Comentada';// terminar de revisar !!
				lOO(id);
			}
		}

function lOI(id)
		{	aLL(id);//Incrementar en uno el contador y si es un botón ver si Maximizar? si o no
			if(reGis&&g00LOGS[id][1])//si 1LOG esta habilitado con un 1..
			{	funsi ='Interrumpida';// terminar de revisar !!
				lOO(id);
			}
		}

function lOK(id)
		{	aLL(id);//Incrementar en uno el contador y si es un botón ver si Maximizar? si o no
			if(reGis&&g00LOGS[id][1])//si 1LOG esta habilitado con un 1..
			{	funsi ='OK';// con funciones pendientes !!
				lOO(id);
			}
		}

function lOL(id)
		{	aLL(id);//Incrementar en uno el contador y si es un botón ver si Maximizar? si o no
			if(reGis&&g00LOGS[id][1])//si 1LOG esta habilitado con un 1..
			{	funsi ='Lista';// sin funciones pendientes
				lOO(id);
			}
		}

function lOO(id)//MOSTRAR el tipo, la mision y las veces que ha sido llamada una función 
		{	console.log('________@> f'+id+'()',funsi+'\n- Mission:',g00LOGS[id][4]+'\n- Calls: '+g00LOGS[id][2]+'\n\n\n ');
		}



// - -

function hLL(id)//Incrementar en uno el contador y si es un botón ver si Maximizar? si o no
		{	h00LOGS[id][2] += 1;//INCREMENTA EN UNO LA CUENTA ACTUAL DE LLAMADOS DE ESE REGISTRO
			if(!g00VARS[55][2])
			{	g00VARS[55][2] = 1;//ocurrio la primer interacción
			}
			if(h00LOGS[id][3])//si 3LOG esta habilitado con un 1.. es un boton!
			{	//if(g00VARS[55][2]&&MaMi&&bMin)//Si ya ocurrio la primer interacción y (bandera de verificar si maxi o mini esta activa) y (la capa de pantalla minimizada esta activa) entonces
				if(MaMi&&bMin)//Si (bandera de verificar si maxi o mini esta activa) y (la capa de pantalla minimizada esta activa) entonces
				{	MaMi = 0;//Desactivar la bandera verificar si maxi o mini
					if ((document.fullscreen == false)||(document.fullscreenElement == null))
					{	f0022();//Maximizar
						console.log('Se minimizo con esc o conmuto el estado booleano del navegador y se volvio false y null=> maximizar ventana');
					}
					else
					{	console.log('anuncio y marca de agua: maximizar la ventana (del navegador), esta acción hace que conmute el estado booleano del navegador a false y permite que se maximice desde js');
						iMaxim.classList.remove('cX');//muestre boton max
						iCLIC.classList.add('cX');//oculte botón MAXIMIZAR
						
						//Aqui debe actualizar la tapa info porque la ventana no se pudo maximizar

						//f0073();//sonar pito alerta
						
						//Adicionar al string de info "Ventana: minimizada"
					}
					setTimeout(function()//Déspues de un segundo
					{	MaMi = 1;//Activar la bandera verificar si maxi o mini
					}
					,3000);
				}
			}
		}

function hOU(id)
		{	hLL(id);//Incrementar en uno el contador y si es un botón ver si Maximizar? si o no
			if(reGis&&h00LOGS[id][1])//si 1LOG esta habilitado con un 1..
			{	funsi ='sin Usarse [ ¡Atención! ¡este mensaje no debe salir por CONSOLA! ]';//No se ha usado
				fff();
				hOO(id);
			}
		}

function hOG(id)
		{	hLL(id);//Incrementar en uno el contador y si es un botón ver si Maximizar? si o no
			if(reGis&&h00LOGS[id][1])//si 1LOG esta habilitado con un 1..
			{	funsi ='sin Revizar';// revizar la función !!
				hOO(id);
			}
		}

function hOC(id)
		{	hLL(id);//Incrementar en uno el contador y si es un botón ver si Maximizar? si o no
			if(reGis&&h00LOGS[id][1])//si 1LOG esta habilitado con un 1..
			{	funsi ='Comentada';// terminar de revisar !!
				hOO(id);
			}
		}

function hOI(id)
		{	hLL(id);//Incrementar en uno el contador y si es un botón ver si Maximizar? si o no
			if(reGis&&h00LOGS[id][1])//si 1LOG esta habilitado con un 1..
			{	funsi ='Interrumpida';// terminar de revisar !!
				hOO(id);
			}
		}

function hOK(id)
		{	hLL(id);//Incrementar en uno el contador y si es un botón ver si Maximizar? si o no
			if(reGis&&h00LOGS[id][1])//si 1LOG esta habilitado con un 1..
			{	funsi ='OK';// con funciones pendientes !!
				hOO(id);
			}
		}

function hOL(id)
		{	hLL(id);//Incrementar en uno el contador y si es un botón ver si Maximizar? si o no
			if(reGis&&h00LOGS[id][1])//si 1LOG esta habilitado con un 1..
			{	funsi ='Lista';// sin funciones pendientes
				hOO(id);
			}
		}

function hOO(id)//MOSTRAR el tipo, la mision y las veces que ha sido llamada una función 
		{	console.log('________@> h'+id+'()',funsi+'\n- Mission:',h00LOGS[id][4]+'\n- Calls: '+h00LOGS[id][2]+'\n\n\n ');
		}

