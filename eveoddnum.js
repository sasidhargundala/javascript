var num = 18; //the given number is even excute if other wise else excute 
        if(num%2 == 0)
        {
            console.log(num,"is even");  
        }
        else
        {
            console.log(num,"is odd");
        }
        var num = 3; // same method using if else but compare to this method very less code using coditional operator
        var result = (num%2==0) ? "is even" : "is odd";
        console.log(num,result);