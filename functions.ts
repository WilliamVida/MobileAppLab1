var uname = new String("Hello World") 

countChar(uname);
countCharNoSpaces(uname);
str_len_both("Hello World");

function countChar(str1) {
    console.log("Length is "+ uname.length);
}

function countCharNoSpaces(str2) {
    var length1 = uname.replace(/\s/g, "");;
   
    console.log("Length is "+ length1.length);
}

function str_len_both(value: string, spaces: boolean=false): number{
    let num: number;
    if(spaces){
        num = value.replace(/\s+/, "").length;
    }else{
    num = value.length;
    }
    return num;
    }
    