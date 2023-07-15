class Numeros{

    regresar(){
        window.history.back();
    }

    vuelto(){
        let num1=document.getElementById("num1").value
        num1=parseInt(num1)
        let num2=document.getElementById("num2").value
        num2=parseFloat(num2)
        let num3=document.getElementById("num3").value
        num3=parseFloat(num3)
        const iva=document.getElementById("checkbox");
        let resp=document.getElementById("resp")
        let valorTotal=num1*num2
        let totalIva=0
        let valorFinal=0

        if (iva.checked) {
           totalIva=valorTotal+valorTotal*0.12
        }else{
            totalIva=valorTotal
        }
        
        if(totalIva==num3){
            console.log("pago exacto")
            resp.textContent=`Pago exacto`
        }else{
            if(totalIva>num3){
                console.log("Pago insuficiente")
                resp.textContent=`Pago incompleto`
            }else{
                if(totalIva<num3){
                    valorFinal=num3-totalIva
                    valorFinal=valorFinal.toFixed(2)
                    resp.textContent=`Su vuelto es ${valorFinal}`
                    console.log("Su vuelto es",valorFinal)
                }
            }
        }

    }
  
    multiplo(){
        let num = document.getElementById("num").value
        num = parseInt(num)
        let multi = document.getElementById("multi").value
        multi = parseInt(multi)
        let resp = document.getElementById("resp")
        //console.log(resp.textContent)
        console.log(num,multi)
        if (num % multi == 0){
            resp.textContent=`${multi} Es multiplo de ${num}`
            //console.log(multi, " Es multiplo de ",num)
        }else{
            resp.textContent=`${multi} No es multiplo de ${num}`
        }

    }

    divisores(){
        let num = document.getElementById("num").value
        let divisores=[]
        let resp = document.getElementById("resp")

        for(let i =1;i<=num;i++){
            if(num%i==0){
                divisores.push(i);
            }
        }

        resp.textContent=`los divisores de ${num} son ${divisores} `

    }

    sumaDivisores(){
        let suma = 0
        let i=1
        let num = document.getElementById("num").value
        let resp = document.getElementById("resp")
        while(i<=num){
            if(num%i==0){
                suma=suma+i
            }
            i=i+1
        }
        resp.textContent = `la suma de los divisores es ${suma}`
    }

    cantdivi(){
        let cantidad=0
        let i=1
        let num=document.getElementById("num").value
        let resp=document.getElementById("resp")
        while(i<=num){
            if(num%i==0){
                cantidad=cantidad+1
            }
            i=i+1
        }
        resp.textContent = `la cantidad de divisores es  ${cantidad}`
    }

    perfectos(){
        let suma=0
        let i=1
        let num=document.getElementById("num").value
        let resp=document.getElementById("resp")
        while (i<num){
            if(num%i==0){
                suma=suma+i
            }
            i=i+1
        }
        if(suma==num){
            resp.textContent=`${num} es un perfecto`
        }
        else{
            resp.textContent=`${num} no es un numero perfecto`
        }
    }
    
    amigos(){
        let numer=document.getElementById("numer").value
        numer=parseInt(numer)
        let nume=document.getElementById("nume").value
        nume=parseInt(nume)
        let m=1
        let n=1
        let sumam=0
        let suman=0
        let resp=document.getElementById("resp")
        while (m<numer){
            if(numer%m==0){
                sumam=sumam+m
            }
            m=m+1
        }
        while (n<nume){
            if(nume%n==0){
                suman=suman+n
            }
            n=n+1
        }
        if(sumam==nume&&suman==numer){
            resp.textContent=`los numeros ingresados ${numer} y ${nume} son amigos`
        }
        else{
            resp.textContent=`los numeros ingresados ${numer} y ${nume} no son amigos`
        }
    }

    primo(){
        let num = document.getElementById("num").value
        let cantidad=0
        let i=1
        let resp = document.getElementById("resp")
        while(i<=num){
            if (num%i==0){
                cantidad=cantidad+1
            }
            i=i+1
        }
        if(cantidad==2){
            resp.textContent=`${num} es un numero primo`
        }else{
            resp.textContent=`${num} no es numero primo`
        }
    }

    primogemelo(){
        let num1=document.getElementById("num1").value
        let num2=document.getElementById("num2").value
        let resp=document.getElementById("resp")
        let canti=0
        let canti2=0
        let i=1
        let j=1
        while(i<=num1){
            if (num1%i==0){
                canti=canti+1
            }
            i=i+1
        }
        while(j<=num2){
            if (num2%j==0){
                canti2=canti2+1
            }
            j=j+1
        }
        if (canti==2 && canti2==2){
            if ((num1>num2||num2 >num1)&&(num1-num2==2||num2-num1==2)){
                resp.textContent=`${num1} y ${num2} son primos gemelos`
            }else{
                resp.textContent=`${num1} y ${num2} no son primos gemelos`
            }
        }else{
            resp.textContent=`${num1} y ${num2} no son primos`
        }
    }

    numeroinvertido(){
        let num =document.getElementById("num").value
        let resp=document.getElementById("resp")
        const numspring=num.toString()
        const numeroinvertidoString= numspring.split(``).reverse().join(``)
        const numeroinvertido = parseInt(numeroinvertidoString, 10)

        resp.textContent=`${num} invertido es ${numeroinvertido}`
      
    }

    cantdigitos(){
        let num=document.getElementById("num").value
        let resp=document.getElementById("resp")
        const numspring=num.toString()
        const cont=numspring.length
        resp.textContent=`la cantidad de digitos es ${cont}`
    }

    factorial(){
        let num=document.getElementById("num").value
        let resp=document.getElementById("resp")
        let i=num
        let resultado=1
        while (i>1){
            resultado=resultado*i
            i--
        }
        resp.textContent=`el factorial del numero ${num} es ${resultado}`
    }

    exponente(){
        let num=document.getElementById("num").value
        let expo=document.getElementById("expo").value
        let resp=document.getElementById("resp")
        let resultado=1
        let i =0
        while (i<expo){
            resultado=resultado*num
            i++
        }
  
        resp.textContent=`el resultado es ${resultado}`
    }

    tablamulti(){
        let num=document.getElementById("num").value
        num=parseInt(num)
        let resp=document.getElementById("resp")
        let resultado = []
        let multi=0
        for(let i =1 ; i<=12; i++){
            multi=num*i
            resultado+=num+"x"+i+"="+multi+ `\n`
        }
        resp.textContent=`${resultado}`
    }

    fibonaci(){
        let num=document.getElementById("num").value
        let fibonaci=[]
        let resp =document.getElementById("resp")
        let n1=0
        let n2=1
        let next
        let i
        for (i=1;i<=num;i++){
            fibonaci.push(n1)
            next=n1+n2
            n1=n2
            n2=next
            resp.textContent=`la secuencia hasta el numero dado es: ${fibonaci}`
        }
    }
}

const numero = new Numeros()
