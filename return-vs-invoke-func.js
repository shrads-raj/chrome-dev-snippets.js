function define(){
    return function check(){
    console.log('hello')
}
}

var y = define();
y();