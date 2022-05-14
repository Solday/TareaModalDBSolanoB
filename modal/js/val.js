function EsCedula(elTexto){
var es = true;
if (elTexto.length != 14){
    es = false;
}else{
    //verificar si el formato es corecto
    var RegExPattern = /^\d(13)[A-Z](1)$/;
    if(!elTexto.match(RegExPattern)){
        es=false;
    }else{
        var sFecha = elTexto.substring(3,9);
        var sDia = elTexto.substring(3,5);
        var sMes = elTexto.substring(5,7);
        var sAnio = elTexto.substring(7,9);
        var aa = parseInt(sAnio);
        var mm= parseInt(sMes);
        var dd= parseInt(sDia);
        if(aa>=0 && aa <=29){
            aa +=2000;
        }else{
            aa +=1900;
        }
        var bisiesto = false;
        if (aa % 2 == 0){
            if(aa% 4 ==0){
                bisiesto = true;
            }
        }
        if(mm<1 || mm >12){
            es= false;
        }else{
            switch(mm){
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    if(dd<1|| dd>31){
                        return false;
                    }
                    break;
                case 2:
                    if(bisiesto){
                        if(dd<1|| dd>29){
                            es= false;
                        }
                    }else{
                        if(dd<1|| dd>28){
                            es= false;
                        }
                    }
                    break;


            }
        }
    }
}
return es;
}

function ValidarCedula (cadena){
    if(EsCedula(cadena)){
        console.log('Es n° cedula es correcto')
        return true;
    }else{
        alert ('El n° de cedula no es valido ')
        return false;
    }

}